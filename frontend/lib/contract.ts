import { Address, parseEther, formatEther } from "viem";
import { OrderTrackingABI } from "./abis/OrderTracking";

/**
 * Contract configuration
 * Update these addresses after deploying to each network
 */
export const CONTRACT_ADDRESSES: Record<number, Address> = {
  1: "0x0000000000000000000000000000000000000000", // Mainnet - Update after deployment
  11155111: "0x0000000000000000000000000000000000000000", // Sepolia - Update after deployment
  84532: "0x52809f71eF62f367AA7eD1596fd7d70C91c15ce3", // Base Sepolia
  137: "0x0000000000000000000000000000000000000000", // Polygon - Update after deployment
  42161: "0x0000000000000000000000000000000000000000", // Arbitrum - Update after deployment
};

/**
 * Order Status enum matching the smart contract
 */
export enum ContractOrderStatus {
  Pending = 0,
  Confirmed = 1,
  Processing = 2,
  Shipped = 3,
  Delivered = 4,
  Cancelled = 5,
  Disputed = 6,
}

/**
 * Convert contract order status to app order status
 */
export function contractStatusToAppStatus(status: ContractOrderStatus): string {
  const statusMap: Record<ContractOrderStatus, string> = {
    [ContractOrderStatus.Pending]: "pending",
    [ContractOrderStatus.Confirmed]: "confirmed",
    [ContractOrderStatus.Processing]: "processing",
    [ContractOrderStatus.Shipped]: "shipped",
    [ContractOrderStatus.Delivered]: "delivered",
    [ContractOrderStatus.Cancelled]: "cancelled",
    [ContractOrderStatus.Disputed]: "disputed",
  };
  return statusMap[status] || "pending";
}

/**
 * Convert app order status to contract order status
 */
export function appStatusToContractStatus(status: string): ContractOrderStatus {
  const statusMap: Record<string, ContractOrderStatus> = {
    pending: ContractOrderStatus.Pending,
    confirmed: ContractOrderStatus.Confirmed,
    processing: ContractOrderStatus.Processing,
    shipped: ContractOrderStatus.Shipped,
    delivered: ContractOrderStatus.Delivered,
    cancelled: ContractOrderStatus.Cancelled,
    disputed: ContractOrderStatus.Disputed,
  };
  return statusMap[status.toLowerCase()] || ContractOrderStatus.Pending;
}

/**
 * Get contract address for current chain
 */
export function getContractAddress(chainId: number): Address | null {
  return CONTRACT_ADDRESSES[chainId] || null;
}

/**
 * Contract interaction helpers
 */
export const contractHelpers = {
  /**
   * Format order price from wei
   */
  formatPrice: (price: bigint) => formatEther(price),

  /**
   * Parse order price to wei
   */
  parsePrice: (price: string) => parseEther(price),

  /**
   * Get contract ABI
   */
  getABI: () => OrderTrackingABI,
};
