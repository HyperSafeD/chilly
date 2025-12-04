import { Address } from "viem";
import { getContractAddress } from "./contract";

/**
 * Utility functions for contract interactions
 */

/**
 * Check if contract is deployed on current network
 */
export function isContractDeployed(chainId: number): boolean {
  const address = getContractAddress(chainId);
  return !!address && address !== "0x0000000000000000000000000000000000000000";
}

/**
 * Get network name from chain ID
 */
export function getNetworkName(chainId: number): string {
  const networkMap: Record<number, string> = {
    1: "mainnet",
    11155111: "sepolia",
    84532: "base-sepolia",
    137: "polygon",
    42161: "arbitrum",
    44787: "celo-alfajores",
  };
  return networkMap[chainId] || "unknown";
}

/**
 * Format address for display
 */
export function formatAddress(address: Address | string, chars: number = 4): string {
  if (!address) return "";
  return `${address.slice(0, chars + 2)}...${address.slice(-chars)}`;
}

/**
 * Validate Ethereum address
 */
export function isValidAddress(address: string): boolean {
  return /^0x[a-fA-F0-9]{40}$/.test(address);
}

/**
 * Get block explorer URL for transaction
 */
export function getBlockExplorerUrl(chainId: number, txHash: string): string {
  const baseUrls: Record<number, string> = {
    1: "https://etherscan.io/tx/",
    11155111: "https://sepolia.etherscan.io/tx/",
    84532: "https://sepolia.basescan.org/tx/",
    137: "https://polygonscan.com/tx/",
    42161: "https://arbiscan.io/tx/",
    44787: "https://alfajores.celoscan.io/tx/",
  };
  return baseUrls[chainId] ? `${baseUrls[chainId]}${txHash}` : `#`;
}

/**
 * Get block explorer URL for address
 */
export function getAddressExplorerUrl(chainId: number, address: string): string {
  const baseUrls: Record<number, string> = {
    1: "https://etherscan.io/address/",
    11155111: "https://sepolia.etherscan.io/address/",
    84532: "https://sepolia.basescan.org/address/",
    137: "https://polygonscan.com/address/",
    42161: "https://arbiscan.io/address/",
    44787: "https://alfajores.celoscan.io/address/",
  };
  return baseUrls[chainId] ? `${baseUrls[chainId]}${address}` : `#`;
}

