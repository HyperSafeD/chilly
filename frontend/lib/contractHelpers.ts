import { formatEther, parseEther } from "viem";
import { ContractOrderStatus, contractStatusToAppStatus } from "./contract";

/**
 * Helper functions for contract data transformation
 */

/**
 * Format wei amount to ETH string
 */
export function formatWeiToEth(wei: bigint | string | number): string {
  try {
    if (typeof wei === "string") {
      return formatEther(BigInt(wei));
    }
    if (typeof wei === "number") {
      return formatEther(BigInt(wei));
    }
    return formatEther(wei);
  } catch (error) {
    console.error("Error formatting wei to ETH:", error);
    return "0";
  }
}

/**
 * Parse ETH string to wei
 */
export function parseEthToWei(eth: string): bigint {
  try {
    return parseEther(eth);
  } catch (error) {
    console.error("Error parsing ETH to wei:", error);
    return BigInt(0);
  }
}

/**
 * Validate order data from contract
 */
export function validateContractOrder(order: any): boolean {
  if (!order) return false;
  if (order.id === undefined || order.id === null) return false;
  if (!order.buyer || !order.seller) return false;
  return true;
}

/**
 * Get readable status name from contract status
 */
export function getStatusName(status: ContractOrderStatus | number): string {
  return contractStatusToAppStatus(status as ContractOrderStatus);
}

