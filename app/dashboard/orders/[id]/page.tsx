"use client";

import React, { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { useAccount } from "wagmi";
import { Order } from "@/lib/types";
import { mockOrders } from "@/lib/mockData";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { OrderStatusUpdate } from "@/components/dashboard/OrderStatusUpdate";
import { formatDistanceToNow, format } from "date-fns";
import { OrderStatus } from "@/lib/types";

export default function OrderDetailPage() {
  const params = useParams();
  const router = useRouter();
  const { isConnected, address } = useAccount();
  const [order, setOrder] = useState<Order | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const handleStatusUpdate = (orderId: string, newStatus: OrderStatus) => {
    if (order && order.id === orderId) {
      setOrder({
        ...order,
        status: newStatus,
        updatedAt: Math.floor(Date.now() / 1000),
      });
      alert("Order status updated successfully!");
    }
  };

  useEffect(() => {
    if (!isConnected) {
      router.push("/");
      return;
    }

    // In a real app, fetch from blockchain or API
    const foundOrder = mockOrders.find((o) => o.id === params.id);
    setOrder(foundOrder || null);
    setIsLoading(false);
  }, [params.id, isConnected, router]);

  const formatAddress = (addr: string) => {
    return `${addr.slice(0, 10)}...${addr.slice(-8)}`;
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    // In a real app, show toast notification
    alert("Copied to clipboard!");
  };

  if (!isConnected) {
    return null;
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white dark:bg-black">
        <Header />
        <main className="pt-16 container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="animate-pulse">
            <div className="h-8 bg-zinc-200 dark:bg-zinc-800 rounded w-1/4 mb-4"></div>
            <div className="h-64 bg-zinc-200 dark:bg-zinc-800 rounded"></div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!order) {
    return (
      <div className="min-h-screen bg-white dark:bg-black">
        <Header />
        <main className="pt-16 container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center py-12">
            <div className="text-6xl mb-4">📦</div>
            <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">
              Order Not Found
            </h1>
            <p className="text-zinc-600 dark:text-zinc-400 mb-6">
              The order you're looking for doesn't exist.
            </p>
            <button
              onClick={() => router.push("/dashboard")}
              className="px-6 py-3 rounded-lg bg-orange-600 text-white font-medium hover:bg-orange-700 transition-colors"
            >
              Back to Dashboard
            </button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const statusColors: Record<string, string> = {
    pending:
      "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400",
    confirmed:
      "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400",
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

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <Header />
      <main className="pt-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Back Button */}
          <button
            onClick={() => router.push("/dashboard")}
            className="mb-6 flex items-center gap-2 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50 transition-colors"
          >
            ← Back to Dashboard
          </button>

          {/* Order Header */}
          <div className="mb-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4">
              <div>
                <h1 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">
                  {order.productName}
                </h1>
                <p className="text-zinc-600 dark:text-zinc-400">
                  Order #{order.orderNumber}
                </p>
              </div>
              <span
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium ${
                  statusColors[order.status]
                }`}
              >
                <span className="capitalize">{order.status}</span>
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Product Details */}
              <div className="p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
                <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mb-4">
                  Product Details
                </h2>
                {order.productDescription && (
                  <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                    {order.productDescription}
                  </p>
                )}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-1">
                      Quantity
                    </p>
                    <p className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                      {order.quantity}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-1">
                      Price
                    </p>
                    <p className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                      {order.price} {order.currency}
                    </p>
                  </div>
                </div>
              </div>

              {/* Blockchain Information */}
              <div className="p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
                <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mb-4">
                  Blockchain Information
                </h2>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-1">
                      Network
                    </p>
                    <p className="text-sm font-medium text-zinc-900 dark:text-zinc-50 capitalize">
                      {order.network}
                    </p>
                  </div>
                  {order.transactionHash && (
                    <div>
                      <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-1">
                        Transaction Hash
                      </p>
                      <div className="flex items-center gap-2">
                        <code className="text-sm font-mono text-zinc-900 dark:text-zinc-50 bg-zinc-100 dark:bg-zinc-800 px-3 py-1 rounded">
                          {formatAddress(order.transactionHash)}
                        </code>
                        <button
                          onClick={() =>
                            copyToClipboard(order.transactionHash!)
                          }
                          className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50"
                        >
                          📋
                        </button>
                      </div>
                    </div>
                  )}
                  <div>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-1">
                      Order ID
                    </p>
                    <div className="flex items-center gap-2">
                      <code className="text-sm font-mono text-zinc-900 dark:text-zinc-50 bg-zinc-100 dark:bg-zinc-800 px-3 py-1 rounded">
                        {order.id}
                      </code>
                      <button
                        onClick={() => copyToClipboard(order.id)}
                        className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50"
                      >
                        📋
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tracking Information */}
              {order.trackingNumber && (
                <div className="p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
                  <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mb-4">
                    Tracking Information
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-1">
                        Tracking Number
                      </p>
                      <p className="text-sm font-mono text-zinc-900 dark:text-zinc-50">
                        {order.trackingNumber}
                      </p>
                    </div>
                    {order.estimatedDelivery && (
                      <div>
                        <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-1">
                          Estimated Delivery
                        </p>
                        <p className="text-sm font-medium text-zinc-900 dark:text-zinc-50">
                          {format(
                            new Date(order.estimatedDelivery * 1000),
                            "PPP 'at' p"
                          )}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Order Summary */}
              <div className="p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
                <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mb-4">
                  Order Summary
                </h2>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-1">
                      Created
                    </p>
                    <p className="text-sm font-medium text-zinc-900 dark:text-zinc-50">
                      {format(new Date(order.createdAt * 1000), "PPP 'at' p")}
                    </p>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
                      {formatDistanceToNow(new Date(order.createdAt * 1000), {
                        addSuffix: true,
                      })}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-1">
                      Last Updated
                    </p>
                    <p className="text-sm font-medium text-zinc-900 dark:text-zinc-50">
                      {format(new Date(order.updatedAt * 1000), "PPP 'at' p")}
                    </p>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
                      {formatDistanceToNow(new Date(order.updatedAt * 1000), {
                        addSuffix: true,
                      })}
                    </p>
                  </div>
                </div>
              </div>

              {/* Parties */}
              <div className="p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
                <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mb-4">
                  Parties
                </h2>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-1">
                      Buyer
                    </p>
                    <div className="flex items-center gap-2">
                      <code className="text-xs font-mono text-zinc-900 dark:text-zinc-50 bg-zinc-100 dark:bg-zinc-800 px-2 py-1 rounded flex-1">
                        {formatAddress(order.buyer)}
                      </code>
                      <button
                        onClick={() => copyToClipboard(order.buyer)}
                        className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50"
                      >
                        📋
                      </button>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-1">
                      Seller
                    </p>
                    <div className="flex items-center gap-2">
                      <code className="text-xs font-mono text-zinc-900 dark:text-zinc-50 bg-zinc-100 dark:bg-zinc-800 px-2 py-1 rounded flex-1">
                        {formatAddress(order.seller)}
                      </code>
                      <button
                        onClick={() => copyToClipboard(order.seller)}
                        className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-50"
                      >
                        📋
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Status Update */}
              <OrderStatusUpdate
                order={order}
                onStatusUpdate={handleStatusUpdate}
              />

              {/* Actions */}
              <div className="p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
                <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mb-4">
                  Actions
                </h2>
                <div className="space-y-2">
                  <button
                    onClick={() => {
                      const url = `https://${
                        order.network === "mainnet" ? "" : order.network + "."
                      }etherscan.io/tx/${order.transactionHash}`;
                      window.open(url, "_blank");
                    }}
                    disabled={!order.transactionHash}
                    className="w-full px-4 py-2 rounded-lg border border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-zinc-50 font-medium hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    View on Block Explorer
                  </button>
                  <button
                    onClick={() => {
                      const data = JSON.stringify(order, null, 2);
                      const blob = new Blob([data], {
                        type: "application/json",
                      });
                      const url = URL.createObjectURL(blob);
                      const a = document.createElement("a");
                      a.href = url;
                      a.download = `order-${order.orderNumber}.json`;
                      a.click();
                    }}
                    className="w-full px-4 py-2 rounded-lg border border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-zinc-50 font-medium hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors"
                  >
                    Export Order Data
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
