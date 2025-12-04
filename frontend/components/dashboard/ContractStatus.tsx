"use client";

import React from "react";
import { useChainId } from "wagmi";
import { useContractAddress } from "@/hooks/useOrderContract";
import { isContractDeployed, getAddressExplorerUrl } from "@/lib/contractUtils";

export function ContractStatus() {
  const chainId = useChainId();
  const contractAddress = useContractAddress();
  const isDeployed = isContractDeployed(chainId);

  if (!isDeployed || !contractAddress) {
    return (
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-400 text-sm">
        <span>⚠</span>
        <span>Contract not deployed on this network</span>
      </div>
    );
  }

  return (
    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400 text-sm">
      <span>✓</span>
      <span>Connected to smart contract</span>
      <code className="text-xs ml-2 font-mono">
        {contractAddress.slice(0, 6)}...{contractAddress.slice(-4)}
      </code>
      <a
        href={getAddressExplorerUrl(chainId, contractAddress)}
        target="_blank"
        rel="noopener noreferrer"
        className="ml-2 text-green-700 dark:text-green-300 hover:underline"
        title="View contract on block explorer"
      >
        ↗
      </a>
    </div>
  );
}

