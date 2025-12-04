"use client";

import React, { useState } from "react";
import { Order, OrderStatus } from "@/lib/types";
import { useUpdateOrderStatus } from "@/hooks/useOrderContract";
import { useAccount } from "wagmi";

interface OrderStatusUpdateProps {
  order: Order;
  onStatusUpdate: (orderId: string, newStatus: OrderStatus) => void;
  disabled?: boolean;
}

const statusOptions: OrderStatus[] = [
  "pending",
  "confirmed",
  "processing",
  "shipped",
  "delivered",
  "cancelled",
  "disputed",
];

const statusLabels: Record<OrderStatus, string> = {
  pending: "Pending",
  confirmed: "Confirmed",
  processing: "Processing",
  shipped: "Shipped",
  delivered: "Delivered",
  cancelled: "Cancelled",
  disputed: "Disputed",
};

export function OrderStatusUpdate({
  order,
  onStatusUpdate,
  disabled = false,
}: OrderStatusUpdateProps) {
  const { isConnected } = useAccount();
  const [selectedStatus, setSelectedStatus] = useState<OrderStatus>(
    order.status
  );
  
  const {
    updateStatus,
    isPending: isUpdating,
    isSuccess,
    error,
  } = useUpdateOrderStatus();

  const handleUpdate = async () => {
    if (selectedStatus === order.status || !isConnected) return;

    try {
      const orderId = parseInt(order.id);
      if (isNaN(orderId)) {
        throw new Error("Invalid order ID");
      }
      
      await updateStatus(orderId, selectedStatus);
      // Callback will be triggered by success state
    } catch (error: any) {
      console.error("Failed to update status:", error);
      alert(`Failed to update order status: ${error?.message || "Unknown error"}`);
    }
  };

  // Handle successful update
  React.useEffect(() => {
    if (isSuccess) {
      onStatusUpdate(order.id, selectedStatus);
    }
  }, [isSuccess, order.id, selectedStatus, onStatusUpdate]);

  return (
    <div className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
      <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50 mb-4">
        Update Order Status
      </h3>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-zinc-900 dark:text-zinc-50 mb-2">
            Current Status
          </label>
          <div className="px-4 py-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-50">
            {statusLabels[order.status]}
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-zinc-900 dark:text-zinc-50 mb-2">
            New Status
          </label>
          <select
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value as OrderStatus)}
            disabled={disabled || isUpdating}
            className="w-full px-4 py-2 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-50 focus:outline-none focus:ring-2 focus:ring-orange-500 dark:focus:ring-orange-400 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {statusOptions.map((status) => (
              <option key={status} value={status}>
                {statusLabels[status]}
              </option>
            ))}
          </select>
        </div>
        <button
          onClick={handleUpdate}
          disabled={disabled || isUpdating || selectedStatus === order.status}
          className="w-full px-4 py-2 rounded-lg bg-orange-600 text-white font-medium hover:bg-orange-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isUpdating ? "Updating..." : "Update Status"}
        </button>
      </div>
    </div>
  );
}
