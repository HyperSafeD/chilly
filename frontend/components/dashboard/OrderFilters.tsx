"use client";

import React from "react";
import { OrderFilters, OrderStatus } from "@/lib/types";

interface OrderFiltersProps {
  filters: OrderFilters;
  onFiltersChange: (filters: OrderFilters) => void;
}

const statusOptions: Array<OrderStatus | "all"> = [
  "all",
  "pending",
  "confirmed",
  "processing",
  "shipped",
  "delivered",
  "cancelled",
  "disputed",
];

const networkOptions = ["all", "mainnet", "sepolia", "polygon", "arbitrum", "base-sepolia", "celo-alfajores"];

export function OrderFiltersComponent({
  filters,
  onFiltersChange,
}: OrderFiltersProps) {
  const handleStatusChange = (status: OrderStatus | "all") => {
    onFiltersChange({ ...filters, status });
  };

  const handleNetworkChange = (network: string) => {
    onFiltersChange({ ...filters, network });
  };

  const handleSearchChange = (search: string) => {
    onFiltersChange({ ...filters, search });
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4 p-4 bg-zinc-50 dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800">
      {/* Search */}
      <div className="flex-1">
        <input
          type="text"
          placeholder="Search orders..."
          value={filters.search || ""}
          onChange={(e) => handleSearchChange(e.target.value)}
          className="w-full px-4 py-2 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-50 placeholder-zinc-500 dark:placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-orange-500 dark:focus:ring-orange-400"
        />
      </div>

      {/* Status Filter */}
      <div className="sm:w-48">
        <select
          value={filters.status || "all"}
          onChange={(e) =>
            handleStatusChange(e.target.value as OrderStatus | "all")
          }
          className="w-full px-4 py-2 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-50 focus:outline-none focus:ring-2 focus:ring-orange-500 dark:focus:ring-orange-400"
        >
          {statusOptions.map((status) => (
            <option key={status} value={status}>
              {status === "all"
                ? "All Statuses"
                : status.charAt(0).toUpperCase() + status.slice(1)}
            </option>
          ))}
        </select>
      </div>

      {/* Network Filter */}
      <div className="sm:w-40">
        <select
          value={filters.network || "all"}
          onChange={(e) => handleNetworkChange(e.target.value)}
          className="w-full px-4 py-2 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-50 focus:outline-none focus:ring-2 focus:ring-orange-500 dark:focus:ring-orange-400"
        >
          {networkOptions.map((network) => (
            <option key={network} value={network}>
              {network === "all"
                ? "All Networks"
                : network.charAt(0).toUpperCase() + network.slice(1)}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
