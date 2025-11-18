"use client";

import React from "react";
import { Order, OrderStatus } from "@/lib/types";
import { formatDistanceToNow } from "date-fns";

interface OrderCardProps {
  order: Order;
  onClick?: () => void;
}

const statusColors: Record<OrderStatus, string> = {
  pending:
    "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400",
  confirmed: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400",
  processing:
    "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400",
  shipped:
    "bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-400",
  delivered:
    "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400",
  cancelled: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400",
  disputed:
    "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400",
};

const statusIcons: Record<OrderStatus, string> = {
  pending: "⏳",
  confirmed: "✅",
  processing: "⚙️",
  shipped: "🚚",
  delivered: "📦",
  cancelled: "❌",
  disputed: "⚠️",
};

export function OrderCard({ order, onClick }: OrderCardProps) {
  const formatAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  const formatPrice = (price: string, currency: string) => {
    // In a real app, you'd convert wei to ETH or format token amounts
    return `${price} ${currency}`;
  };

  return (
    <div
      onClick={onClick}
      className="group p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:border-zinc-300 dark:hover:border-zinc-700 hover:shadow-lg transition-all duration-200 cursor-pointer"
    >
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50 mb-1">
            {order.productName}
          </h3>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            Order #{order.orderNumber}
          </p>
        </div>
        <span
          className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium ${
            statusColors[order.status]
          }`}
        >
          <span>{statusIcons[order.status]}</span>
          <span className="capitalize">{order.status}</span>
        </span>
      </div>

      {order.productDescription && (
        <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4 line-clamp-2">
          {order.productDescription}
        </p>
      )}

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <p className="text-xs text-zinc-500 dark:text-zinc-400 mb-1">
            Quantity
          </p>
          <p className="text-sm font-medium text-zinc-900 dark:text-zinc-50">
            {order.quantity}
          </p>
        </div>
        <div>
          <p className="text-xs text-zinc-500 dark:text-zinc-400 mb-1">Price</p>
          <p className="text-sm font-medium text-zinc-900 dark:text-zinc-50">
            {formatPrice(order.price, order.currency)}
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between pt-4 border-t border-zinc-200 dark:border-zinc-800">
        <div className="flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400">
          <span>Buyer:</span>
          <code className="px-2 py-1 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300">
            {formatAddress(order.buyer)}
          </code>
        </div>
        <div className="text-xs text-zinc-500 dark:text-zinc-400">
          {formatDistanceToNow(new Date(order.createdAt * 1000), {
            addSuffix: true,
          })}
        </div>
      </div>

      {order.trackingNumber && (
        <div className="mt-3 pt-3 border-t border-zinc-200 dark:border-zinc-800">
          <p className="text-xs text-zinc-500 dark:text-zinc-400 mb-1">
            Tracking
          </p>
          <p className="text-sm font-mono text-zinc-900 dark:text-zinc-50">
            {order.trackingNumber}
          </p>
        </div>
      )}
    </div>
  );
}
