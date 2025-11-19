"use client";

import React, { useState, useMemo, useEffect } from "react";
import { useAccount, useChainId } from "wagmi";
import { useRouter } from "next/navigation";
import { Order, OrderFilters, OrderStatus } from "@/lib/types";
import { mockOrders, mockStats } from "@/lib/mockData";
import { OrderStatsComponent } from "@/components/dashboard/OrderStats";
import { OrderFiltersComponent } from "@/components/dashboard/OrderFilters";
import { OrderList } from "@/components/dashboard/OrderList";
import { CreateOrderModal } from "@/components/dashboard/CreateOrderModal";
import { Sidebar } from "@/components/dashboard/Sidebar";
import { exportOrdersToJSON, exportOrdersToCSV } from "@/lib/exportUtils";
import {
  useMyOrders,
  useCreateOrder,
  useContractAddress,
} from "@/hooks/useOrderContract";
import { getContractAddress } from "@/lib/contract";

export default function DashboardPage() {
  const { isConnected, address } = useAccount();
  const chainId = useChainId();
  const router = useRouter();
  const contractAddress = useContractAddress();
  
  const [filters, setFilters] = useState<OrderFilters>({
    status: "all",
    network: "all",
    search: "",
  });
  
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  
  // Try to fetch from contract, fallback to mock data
  const { orders: contractOrders, isLoading: isLoadingContract } = useMyOrders();
  const [orders, setOrders] = useState<Order[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [useContract, setUseContract] = useState(false);

  // Check if contract is deployed on current network
  useEffect(() => {
    const address = getContractAddress(chainId);
    setUseContract(!!address && address !== "0x0000000000000000000000000000000000000000");
  }, [chainId]);

  // Use contract orders if available, otherwise use mock data
  useEffect(() => {
    if (useContract && contractOrders && contractOrders.length > 0) {
      setOrders(contractOrders);
      setIsLoading(isLoadingContract);
    } else if (!useContract || !contractAddress) {
      // Fallback to mock data if contract not deployed
      setOrders(mockOrders);
      setIsLoading(false);
    } else {
      setOrders([]);
      setIsLoading(isLoadingContract);
    }
  }, [contractOrders, isLoadingContract, useContract, contractAddress]);


  // Redirect if not connected
  React.useEffect(() => {
    if (!isConnected) {
      router.push("/");
    }
  }, [isConnected, router]);

  // Filter orders based on current filters
  const filteredOrders = useMemo(() => {
    let filtered = [...orders];

    // Filter by status
    if (filters.status && filters.status !== "all") {
      filtered = filtered.filter((order) => order.status === filters.status);
    }

    // Filter by network
    if (filters.network && filters.network !== "all") {
      filtered = filtered.filter((order) => order.network === filters.network);
    }

    // Filter by search
    if (filters.search) {
      const searchLower = filters.search.toLowerCase();
      filtered = filtered.filter(
        (order) =>
          order.productName.toLowerCase().includes(searchLower) ||
          order.orderNumber.toLowerCase().includes(searchLower) ||
          order.buyer.toLowerCase().includes(searchLower) ||
          order.seller.toLowerCase().includes(searchLower)
      );
    }

    return filtered;
  }, [orders, filters]);

  // Calculate stats from filtered orders
  const stats = useMemo(() => {
    return {
      total: filteredOrders.length,
      pending: filteredOrders.filter((o) => o.status === "pending").length,
      confirmed: filteredOrders.filter((o) => o.status === "confirmed").length,
      processing: filteredOrders.filter((o) => o.status === "processing")
        .length,
      shipped: filteredOrders.filter((o) => o.status === "shipped").length,
      delivered: filteredOrders.filter((o) => o.status === "delivered").length,
      cancelled: filteredOrders.filter((o) => o.status === "cancelled").length,
      disputed: filteredOrders.filter((o) => o.status === "disputed").length,
      totalValue: filteredOrders
        .reduce((sum, o) => sum + parseFloat(o.price), 0)
        .toFixed(2),
    };
  }, [filteredOrders]);

  const { createOrder, isPending: isCreating, isSuccess: isCreated } = useCreateOrder();

  const handleCreateOrder = async (orderData: {
    productName: string;
    productDescription: string;
    quantity: number;
    price: string;
    currency: string;
    seller?: string;
  }) => {
    if (!address) {
      alert("Please connect your wallet");
      return;
    }

    if (useContract && contractAddress) {
      try {
        // Use contract to create order
        const sellerAddress = orderData.seller || "0x0000000000000000000000000000000000000000";
        await createOrder({
          seller: sellerAddress as `0x${string}`,
          productName: orderData.productName,
          productDescription: orderData.productDescription,
          quantity: orderData.quantity,
          price: orderData.price,
          network: chainId === 1 ? "mainnet" : chainId === 11155111 ? "sepolia" : "unknown",
        });
      } catch (error: any) {
        console.error("Failed to create order:", error);
        alert(`Failed to create order: ${error?.message || "Unknown error"}`);
      }
    } else {
      // Fallback to mock data
      const newOrder: Order = {
        id: Date.now().toString(),
        orderNumber: `ORD-${String(orders.length + 1).padStart(3, "0")}`,
        buyer: address,
        seller: orderData.seller || "0x0000000000000000000000000000000000000000",
        productName: orderData.productName,
        productDescription: orderData.productDescription,
        quantity: orderData.quantity,
        price: orderData.price,
        currency: orderData.currency,
        status: "pending",
        createdAt: Math.floor(Date.now() / 1000),
        updatedAt: Math.floor(Date.now() / 1000),
        network: chainId === 1 ? "mainnet" : chainId === 11155111 ? "sepolia" : "unknown",
      };

      setOrders([newOrder, ...orders]);
      alert("Order created successfully!");
    }
  };

  useEffect(() => {
    if (isCreated) {
      alert("Order created on blockchain successfully!");
      setIsCreateModalOpen(false);
    }
  }, [isCreated]);

  const handleStatusUpdate = (orderId: string, newStatus: OrderStatus) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.id === orderId
          ? {
              ...order,
              status: newStatus,
              updatedAt: Math.floor(Date.now() / 1000),
            }
          : order
      )
    );
    alert("Order status updated successfully!");
  };

  const handleOrderClick = (order: Order) => {
    router.push(`/dashboard/orders/${order.id}`);
  };

  if (!isConnected) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">
            Please connect your wallet
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400">
            You need to connect your wallet to access the dashboard.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-black flex">
      <Sidebar />
      <main className="flex-1 lg:ml-64">
        <div className="p-8">
          {/* Header */}
          <div className="mb-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4">
              <div>
                <h1 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">
                  Order Dashboard
                </h1>
                <p className="text-zinc-600 dark:text-zinc-400">
                  Manage and track all your blockchain orders
                </p>
              </div>
              <button
                onClick={() => setIsCreateModalOpen(true)}
                disabled={isCreating}
                className="px-6 py-3 rounded-lg bg-orange-600 text-white font-medium hover:bg-orange-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isCreating ? "Creating..." : "+ Create Order"}
              </button>
            </div>
            
            {/* Contract Status */}
            {useContract && contractAddress ? (
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400 text-sm">
                <span>✓</span>
                <span>Connected to smart contract</span>
                <code className="text-xs ml-2">{contractAddress.slice(0, 6)}...{contractAddress.slice(-4)}</code>
              </div>
            ) : (
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-400 text-sm">
                <span>⚠</span>
                <span>Using mock data - Contract not deployed on this network</span>
              </div>
            )}
          </div>

          {/* Stats */}
          <div className="mb-8">
            <OrderStatsComponent stats={stats} />
          </div>

          {/* Filters */}
          <div className="mb-8">
            <OrderFiltersComponent
              filters={filters}
              onFiltersChange={setFilters}
            />
          </div>

          {/* Order List */}
          <div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4">
              <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
                Orders ({filteredOrders.length})
              </h2>
              {filteredOrders.length > 0 && (
                <div className="flex gap-2">
                  <button
                    onClick={() => exportOrdersToJSON(filteredOrders)}
                    className="px-4 py-2 rounded-lg border border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-zinc-50 text-sm font-medium hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors"
                  >
                    Export JSON
                  </button>
                  <button
                    onClick={() => exportOrdersToCSV(filteredOrders)}
                    className="px-4 py-2 rounded-lg border border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-zinc-50 text-sm font-medium hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors"
                  >
                    Export CSV
                  </button>
                </div>
              )}
            </div>
            <OrderList
              orders={filteredOrders}
              onOrderClick={handleOrderClick}
              isLoading={isLoading}
            />
          </div>
        </div>
      </main>

      {/* Create Order Modal */}
      <CreateOrderModal
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
        onCreateOrder={handleCreateOrder}
      />
    </div>
  );
}
