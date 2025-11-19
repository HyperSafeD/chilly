"use client";

import React from "react";
import { OrderStats } from "@/lib/types";

interface OrderStatsProps {
  stats: OrderStats;
}

export function OrderStatsComponent({ stats }: OrderStatsProps) {
  const statItems = [
    {
      label: "Total Orders",
      value: stats.total,
      color: "text-zinc-900 dark:text-zinc-50",
    },
    {
      label: "Pending",
      value: stats.pending,
      color: "text-yellow-600 dark:text-yellow-400",
    },
    {
      label: "Processing",
      value: stats.processing,
      color: "text-purple-600 dark:text-purple-400",
    },
    {
      label: "Shipped",
      value: stats.shipped,
      color: "text-indigo-600 dark:text-indigo-400",
    },
    {
      label: "Delivered",
      value: stats.delivered,
      color: "text-green-600 dark:text-green-400",
    },
    {
      label: "Total Value",
      value: `${stats.totalValue} ETH`,
      color: "text-orange-600 dark:text-orange-400",
    },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
      {statItems.map((item, index) => (
        <div
          key={index}
          className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900"
        >
          <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-1">
            {item.label}
          </p>
          <p className={`text-2xl font-bold ${item.color}`}>{item.value}</p>
        </div>
      ))}
    </div>
  );
}
