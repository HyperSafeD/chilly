"use client";

import {
  useAccount,
  useChainId,
  useReadContract,
  useWriteContract,
  useWaitForTransactionReceipt,
} from "wagmi";
import { parseEther, formatEther, Address } from "viem";
import { OrderTrackingABI } from "@/lib/abis/OrderTracking";
import {
  getContractAddress,
  contractStatusToAppStatus,
  appStatusToContractStatus,
  ContractOrderStatus,
} from "@/lib/contract";
import { Order } from "@/lib/types";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

/**
 * Hook to get contract address for current chain
 */
export function useContractAddress() {
  const chainId = useChainId();
  const address = getContractAddress(chainId);
  return address;
}

/**
 * Hook to read a single order from the contract
 */
export function useOrder(orderId: bigint | number | null) {
  const contractAddress = useContractAddress();
  const chainId = useChainId();

  return useReadContract({
    address: contractAddress || undefined,
    abi: OrderTrackingABI,
    functionName: "getOrder",
    args: orderId !== null ? [BigInt(orderId)] : undefined,
    query: {
      enabled: !!contractAddress && orderId !== null,
    },
  });
}

/**
 * Hook to get all orders for the connected wallet (buyer or seller)
 */
export function useMyOrders() {
  const { address } = useAccount();
  const contractAddress = useContractAddress();
  const chainId = useChainId();

  // Get buyer orders
  const { data: buyerOrderIds } = useReadContract({
    address: contractAddress || undefined,
    abi: OrderTrackingABI,
    functionName: "getBuyerOrders",
    args: address ? [address] : undefined,
    query: {
      enabled: !!contractAddress && !!address,
    },
  });

  // Get seller orders
  const { data: sellerOrderIds } = useReadContract({
    address: contractAddress || undefined,
    abi: OrderTrackingABI,
    functionName: "getSellerOrders",
    args: address ? [address] : undefined,
    query: {
      enabled: !!contractAddress && !!address,
    },
  });

  // Combine and deduplicate order IDs
  const allOrderIds =
    buyerOrderIds && sellerOrderIds
      ? [...new Set([...buyerOrderIds, ...sellerOrderIds])]
      : buyerOrderIds || sellerOrderIds || [];

  // Fetch all orders
  const {
    data: orders,
    isLoading,
    error,
  } = useReadContract({
    address: contractAddress || undefined,
    abi: OrderTrackingABI,
    functionName: "getOrders",
    args: allOrderIds.length > 0 ? [allOrderIds] : undefined,
    query: {
      enabled: !!contractAddress && allOrderIds.length > 0,
    },
  });

  // Transform contract orders to app orders
  const transformedOrders: Order[] = orders
    ? orders.map((order: any) => ({
        id: order.id.toString(),
        orderNumber: order.orderNumber,
        buyer: order.buyer,
        seller: order.seller,
        productName: order.productName,
        productDescription: order.productDescription,
        quantity: Number(order.quantity),
        price: formatEther(order.price),
        currency:
          order.currency === "0x0000000000000000000000000000000000000000"
            ? "ETH"
            : "TOKEN",
        status: contractStatusToAppStatus(order.status) as any,
        createdAt: Number(order.createdAt),
        updatedAt: Number(order.updatedAt),
        estimatedDelivery:
          order.estimatedDelivery > 0
            ? Number(order.estimatedDelivery)
            : undefined,
        trackingNumber: order.trackingNumber || undefined,
        transactionHash:
          order.transactionHash !== "0x0000000000000000000000000000000000000000"
            ? order.transactionHash
            : undefined,
        network: order.network || "mainnet",
        metadata: order.metadataHash
          ? { ipfsHash: order.metadataHash }
          : undefined,
      }))
    : [];

  return {
    orders: transformedOrders,
    isLoading,
    error,
    refetch: () => {}, // Will be handled by react-query
  };
}

/**
 * Hook to get total orders count
 */
export function useTotalOrders() {
  const contractAddress = useContractAddress();

  return useReadContract({
    address: contractAddress || undefined,
    abi: OrderTrackingABI,
    functionName: "totalOrders",
    query: {
      enabled: !!contractAddress,
    },
  });
}

/**
 * Hook to create a new order
 */
export function useCreateOrder() {
  const contractAddress = useContractAddress();
  const { writeContract, data: hash, isPending, error } = useWriteContract();
  const queryClient = useQueryClient();

  const { isLoading: isConfirming, isSuccess: isConfirmed } =
    useWaitForTransactionReceipt({
      hash,
    });

  const createOrder = async (orderData: {
    seller: Address;
    productName: string;
    productDescription: string;
    quantity: number;
    price: string; // In ETH
    estimatedDelivery?: number;
    network: string;
    metadataHash?: string;
  }) => {
    if (!contractAddress) {
      throw new Error("Contract not deployed on this network");
    }

    const value = parseEther(orderData.price);

    return writeContract({
      address: contractAddress,
      abi: OrderTrackingABI,
      functionName: "createOrder",
      args: [
        orderData.seller,
        orderData.productName,
        orderData.productDescription,
        BigInt(orderData.quantity),
        "0x0000000000000000000000000000000000000000" as Address, // ETH
        BigInt(orderData.estimatedDelivery || 0),
        orderData.network,
        orderData.metadataHash || "",
      ],
      value,
    });
  };

  // Invalidate orders query after successful creation
  if (isConfirmed) {
    queryClient.invalidateQueries({ queryKey: ["orders"] });
  }

  return {
    createOrder,
    hash,
    isPending: isPending || isConfirming,
    isSuccess: isConfirmed,
    error,
  };
}

/**
 * Hook to update order status
 */
export function useUpdateOrderStatus() {
  const contractAddress = useContractAddress();
  const { writeContract, data: hash, isPending, error } = useWriteContract();
  const queryClient = useQueryClient();

  const { isLoading: isConfirming, isSuccess: isConfirmed } =
    useWaitForTransactionReceipt({
      hash,
    });

  const updateStatus = async (orderId: number, newStatus: string) => {
    if (!contractAddress) {
      throw new Error("Contract not deployed on this network");
    }

    const contractStatus = appStatusToContractStatus(newStatus);

    return writeContract({
      address: contractAddress,
      abi: OrderTrackingABI,
      functionName: "updateOrderStatus",
      args: [BigInt(orderId), contractStatus],
    });
  };

  // Invalidate orders query after successful update
  if (isConfirmed) {
    queryClient.invalidateQueries({ queryKey: ["orders"] });
  }

  return {
    updateStatus,
    hash,
    isPending: isPending || isConfirming,
    isSuccess: isConfirmed,
    error,
  };
}

/**
 * Hook to confirm an order (seller only)
 */
export function useConfirmOrder() {
  const contractAddress = useContractAddress();
  const { writeContract, data: hash, isPending, error } = useWriteContract();
  const queryClient = useQueryClient();

  const { isLoading: isConfirming, isSuccess: isConfirmed } =
    useWaitForTransactionReceipt({
      hash,
    });

  const confirmOrder = async (orderId: number) => {
    if (!contractAddress) {
      throw new Error("Contract not deployed on this network");
    }

    return writeContract({
      address: contractAddress,
      abi: OrderTrackingABI,
      functionName: "confirmOrder",
      args: [BigInt(orderId)],
    });
  };

  if (isConfirmed) {
    queryClient.invalidateQueries({ queryKey: ["orders"] });
  }

  return {
    confirmOrder,
    hash,
    isPending: isPending || isConfirming,
    isSuccess: isConfirmed,
    error,
  };
}

/**
 * Hook to add tracking number
 */
export function useAddTrackingNumber() {
  const contractAddress = useContractAddress();
  const { writeContract, data: hash, isPending, error } = useWriteContract();
  const queryClient = useQueryClient();

  const { isLoading: isConfirming, isSuccess: isConfirmed } =
    useWaitForTransactionReceipt({
      hash,
    });

  const addTracking = async (orderId: number, trackingNumber: string) => {
    if (!contractAddress) {
      throw new Error("Contract not deployed on this network");
    }

    return writeContract({
      address: contractAddress,
      abi: OrderTrackingABI,
      functionName: "addTrackingNumber",
      args: [BigInt(orderId), trackingNumber],
    });
  };

  if (isConfirmed) {
    queryClient.invalidateQueries({ queryKey: ["orders"] });
  }

  return {
    addTracking,
    hash,
    isPending: isPending || isConfirming,
    isSuccess: isConfirmed,
    error,
  };
}

/**
 * Hook to cancel an order
 */
export function useCancelOrder() {
  const contractAddress = useContractAddress();
  const { writeContract, data: hash, isPending, error } = useWriteContract();
  const queryClient = useQueryClient();

  const { isLoading: isConfirming, isSuccess: isConfirmed } =
    useWaitForTransactionReceipt({
      hash,
    });

  const cancelOrder = async (orderId: number, reason: string) => {
    if (!contractAddress) {
      throw new Error("Contract not deployed on this network");
    }

    return writeContract({
      address: contractAddress,
      abi: OrderTrackingABI,
      functionName: "cancelOrder",
      args: [BigInt(orderId), reason],
    });
  };

  if (isConfirmed) {
    queryClient.invalidateQueries({ queryKey: ["orders"] });
  }

  return {
    cancelOrder,
    hash,
    isPending: isPending || isConfirming,
    isSuccess: isConfirmed,
    error,
  };
}

/**
 * Hook to dispute an order
 */
export function useDisputeOrder() {
  const contractAddress = useContractAddress();
  const { writeContract, data: hash, isPending, error } = useWriteContract();
  const queryClient = useQueryClient();

  const { isLoading: isConfirming, isSuccess: isConfirmed } =
    useWaitForTransactionReceipt({
      hash,
    });

  const disputeOrder = async (orderId: number, reason: string) => {
    if (!contractAddress) {
      throw new Error("Contract not deployed on this network");
    }

    return writeContract({
      address: contractAddress,
      abi: OrderTrackingABI,
      functionName: "disputeOrder",
      args: [BigInt(orderId), reason],
    });
  };

  if (isConfirmed) {
    queryClient.invalidateQueries({ queryKey: ["orders"] });
  }

  return {
    disputeOrder,
    hash,
    isPending: isPending || isConfirming,
    isSuccess: isConfirmed,
    error,
  };
}


