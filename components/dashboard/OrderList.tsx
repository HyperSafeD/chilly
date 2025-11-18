"use client";

import React from "react";
import { Order } from "@/lib/types";
import { OrderCard } from "./OrderCard";

interface OrderListProps {
  orders: Order[];
  onOrderClick?: (order: Order) => void;
  isLoading?: boolean;
}

export function OrderList({ orders, onOrderClick, isLoading }: OrderListProps) {
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 animate-pulse"
          >
            <div className="h-4 bg-zinc-200 dark:bg-zinc-800 rounded w-3/4 mb-4"></div>
            <div className="h-3 bg-zinc-200 dark:bg-zinc-800 rounded w-1/2 mb-4"></div>
            <div className="h-3 bg-zinc-200 dark:bg-zinc-800 rounded w-full mb-2"></div>
            <div className="h-3 bg-zinc-200 dark:bg-zinc-800 rounded w-2/3"></div>
          </div>
        ))}
      </div>
    );
  }

  if (orders.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-6xl mb-4">📦</div>
        <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mb-2">
          No orders found
        </h3>
        <p className="text-zinc-600 dark:text-zinc-400 mb-6">
          {orders.length === 0
            ? "You don't have any orders yet. Create your first order to get started!"
            : "Try adjusting your filters to see more results."}
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {orders.map((order) => (
        <OrderCard
          key={order.id}
          order={order}
          onClick={() => onOrderClick?.(order)}
        />
      ))}
    </div>
  );
}
