"use client";

import React from "react";
import { getBlockExplorerUrl } from "@/lib/contractUtils";
import { useChainId } from "wagmi";

interface TransactionStatusProps {
  hash?: string;
  isPending: boolean;
  isSuccess: boolean;
  error?: Error | null;
  onClose?: () => void;
}

export function TransactionStatus({
  hash,
  isPending,
  isSuccess,
  error,
  onClose,
}: TransactionStatusProps) {
  const chainId = useChainId();

  if (!isPending && !isSuccess && !error) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 max-w-md">
      <div
        className={`p-4 rounded-lg shadow-lg border ${
          isPending
            ? "bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800"
            : isSuccess
            ? "bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800"
            : "bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800"
        }`}
      >
        <div className="flex items-start gap-3">
          <div className="flex-shrink-0">
            {isPending && (
              <div className="w-5 h-5 border-2 border-blue-600 border-t-transparent rounded-full animate-spin" />
            )}
            {isSuccess && (
              <svg
                className="w-5 h-5 text-green-600 dark:text-green-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            )}
            {error && (
              <svg
                className="w-5 h-5 text-red-600 dark:text-red-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )}
          </div>
          <div className="flex-1 min-w-0">
            <p
              className={`text-sm font-medium ${
                isPending
                  ? "text-blue-900 dark:text-blue-100"
                  : isSuccess
                  ? "text-green-900 dark:text-green-100"
                  : "text-red-900 dark:text-red-100"
              }`}
            >
              {isPending && "Transaction pending..."}
              {isSuccess && "Transaction successful!"}
              {error && `Transaction failed: ${error.message}`}
            </p>
            {hash && (
              <a
                href={getBlockExplorerUrl(chainId, hash)}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs mt-1 text-blue-600 dark:text-blue-400 hover:underline block truncate"
              >
                View on block explorer
              </a>
            )}
          </div>
          {onClose && (
            <button
              onClick={onClose}
              className="flex-shrink-0 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

