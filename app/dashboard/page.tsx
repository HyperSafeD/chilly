"use client";

import React, { useState, useMemo } from "react";
import { useAccount } from "wagmi";
import { useRouter } from "next/navigation";
import { Order, OrderFilters } from "@/lib/types";
import { mockOrders, mockStats } from "@/lib/mockData";
import { OrderStatsComponent } from "@/components/dashboard/OrderStats";
import { OrderFiltersComponent } from "@/components/dashboard/OrderFilters";
import { OrderList } from "@/components/dashboard/OrderList";
import { CreateOrderModal } from "@/components/dashboard/CreateOrderModal";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function DashboardPage() {
  const { isConnected, address } = useAccount();
  const router = useRouter();
  const [filters, setFilters] = useState<OrderFilters>({
    status: "all",
    network: "all",
    search: "",
  });
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [orders, setOrders] = useState<Order[]>(mockOrders);
  const [isLoading] = useState(false);

  // Redirect if not connected
  React.useEffect(() => {
    if (!isConnected) {
      router.push("/");
    }
  }, [isConnected, router]);

  // Filter orders based on current filters
  const filteredOrders = useMemo(() => {
    let filtered = [...orders];

    // Filter by status
    if (filters.status && filters.status !== "all") {
      filtered = filtered.filter((order) => order.status === filters.status);
    }

    // Filter by network
    if (filters.network && filters.network !== "all") {
      filtered = filtered.filter((order) => order.network === filters.network);
    }

    // Filter by search
    if (filters.search) {
      const searchLower = filters.search.toLowerCase();
      filtered = filtered.filter(
        (order) =>
          order.productName.toLowerCase().includes(searchLower) ||
          order.orderNumber.toLowerCase().includes(searchLower) ||
          order.buyer.toLowerCase().includes(searchLower) ||
          order.seller.toLowerCase().includes(searchLower)
      );
    }

    return filtered;
  }, [orders, filters]);

  // Calculate stats from filtered orders
  const stats = useMemo(() => {
    return {
      total: filteredOrders.length,
      pending: filteredOrders.filter((o) => o.status === "pending").length,
      confirmed: filteredOrders.filter((o) => o.status === "confirmed").length,
      processing: filteredOrders.filter((o) => o.status === "processing")
        .length,
      shipped: filteredOrders.filter((o) => o.status === "shipped").length,
      delivered: filteredOrders.filter((o) => o.status === "delivered").length,
      cancelled: filteredOrders.filter((o) => o.status === "cancelled").length,
      disputed: filteredOrders.filter((o) => o.status === "disputed").length,
      totalValue: filteredOrders
        .reduce((sum, o) => sum + parseFloat(o.price), 0)
        .toFixed(2),
    };
  }, [filteredOrders]);

  const handleCreateOrder = (orderData: {
    productName: string;
    productDescription: string;
    quantity: number;
    price: string;
    currency: string;
  }) => {
    if (!address) return;

    // In a real app, this would create a transaction on the blockchain
    const newOrder: Order = {
      id: Date.now().toString(),
      orderNumber: `ORD-${String(orders.length + 1).padStart(3, "0")}`,
      buyer: address,
      seller: "0x0000000000000000000000000000000000000000", // Would be set in real app
      productName: orderData.productName,
      productDescription: orderData.productDescription,
      quantity: orderData.quantity,
      price: orderData.price,
      currency: orderData.currency,
      status: "pending",
      createdAt: Math.floor(Date.now() / 1000),
      updatedAt: Math.floor(Date.now() / 1000),
      network: "mainnet", // Would be determined by connected network
    };

    setOrders([newOrder, ...orders]);
  };

  const handleOrderClick = (order: Order) => {
    // Navigate to order detail page (to be implemented)
    console.log("Order clicked:", order);
  };

  if (!isConnected) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">
            Please connect your wallet
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400">
            You need to connect your wallet to access the dashboard.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <Header />
      <main className="pt-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">
                Order Dashboard
              </h1>
              <p className="text-zinc-600 dark:text-zinc-400">
                Manage and track all your blockchain orders
              </p>
            </div>
            <button
              onClick={() => setIsCreateModalOpen(true)}
              className="mt-4 sm:mt-0 px-6 py-3 rounded-lg bg-orange-600 text-white font-medium hover:bg-orange-700 transition-colors"
            >
              + Create Order
            </button>
          </div>

          {/* Stats */}
          <div className="mb-8">
            <OrderStatsComponent stats={stats} />
          </div>

          {/* Filters */}
          <div className="mb-8">
            <OrderFiltersComponent
              filters={filters}
              onFiltersChange={setFilters}
            />
          </div>

          {/* Order List */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
                Orders ({filteredOrders.length})
              </h2>
            </div>
            <OrderList
              orders={filteredOrders}
              onOrderClick={handleOrderClick}
              isLoading={isLoading}
            />
          </div>
        </div>
      </main>
      <Footer />

      {/* Create Order Modal */}
      <CreateOrderModal
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
        onCreateOrder={handleCreateOrder}
      />
    </div>
  );
}
