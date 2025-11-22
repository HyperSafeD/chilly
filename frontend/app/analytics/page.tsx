"use client";

import React, { useMemo } from "react";
import { useAccount } from "wagmi";
import { useRouter } from "next/navigation";
import { mockOrders } from "@/lib/mockData";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { format } from "date-fns";

export default function AnalyticsPage() {
  const { isConnected } = useAccount();
  const router = useRouter();

  React.useEffect(() => {
    if (!isConnected) {
      router.push("/");
    }
  }, [isConnected, router]);

  const analytics = useMemo(() => {
    const orders = mockOrders;
    const totalValue = orders.reduce((sum, o) => sum + parseFloat(o.price), 0);
    const avgOrderValue = totalValue / orders.length || 0;

    // Orders by status
    const statusCounts = orders.reduce((acc, order) => {
      acc[order.status] = (acc[order.status] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    // Orders by network
    const networkCounts = orders.reduce((acc, order) => {
      acc[order.network] = (acc[order.network] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    // Orders by month
    const monthlyOrders = orders.reduce((acc, order) => {
      const month = format(new Date(order.createdAt * 1000), "MMM yyyy");
      acc[month] = (acc[month] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    // Average delivery time (for delivered orders)
    const deliveredOrders = orders.filter((o) => o.status === "delivered");
    const avgDeliveryTime =
      deliveredOrders.length > 0
        ? deliveredOrders.reduce((sum, o) => {
            const deliveryTime = o.updatedAt - o.createdAt;
            return sum + deliveryTime;
          }, 0) / deliveredOrders.length
        : 0;

    return {
      totalOrders: orders.length,
      totalValue,
      avgOrderValue,
      statusCounts,
      networkCounts,
      monthlyOrders,
      avgDeliveryTime,
    };
  }, []);

  if (!isConnected) {
    return null;
  }

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black">
      <Header />
      <main className="pt-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">
              Analytics Dashboard
            </h1>
            <p className="text-zinc-600 dark:text-zinc-400">
              Insights and statistics about your orders
            </p>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
              <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-1">
                Total Orders
              </p>
              <p className="text-3xl font-bold text-zinc-900 dark:text-zinc-50">
                {analytics.totalOrders}
              </p>
            </div>
            <div className="p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
              <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-1">
                Total Value
              </p>
              <p className="text-3xl font-bold text-zinc-900 dark:text-zinc-50">
                {analytics.totalValue.toFixed(2)} ETH
              </p>
            </div>
            <div className="p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
              <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-1">
                Average Order Value
              </p>
              <p className="text-3xl font-bold text-zinc-900 dark:text-zinc-50">
                {analytics.avgOrderValue.toFixed(2)} ETH
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Orders by Status */}
            <div className="p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
              <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mb-4">
                Orders by Status
              </h2>
              <div className="space-y-3">
                {Object.entries(analytics.statusCounts).map(
                  ([status, count]) => (
                    <div
                      key={status}
                      className="flex items-center justify-between"
                    >
                      <span className="text-sm font-medium text-zinc-900 dark:text-zinc-50 capitalize">
                        {status}
                      </span>
                      <div className="flex items-center gap-3">
                        <div className="w-32 h-2 bg-zinc-200 dark:bg-zinc-800 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-orange-600"
                            style={{
                              width: `${
                                (count / analytics.totalOrders) * 100
                              }%`,
                            }}
                          ></div>
                        </div>
                        <span className="text-sm font-semibold text-zinc-900 dark:text-zinc-50 w-8 text-right">
                          {count}
                        </span>
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>

            {/* Orders by Network */}
            <div className="p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
              <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mb-4">
                Orders by Network
              </h2>
              <div className="space-y-3">
                {Object.entries(analytics.networkCounts).map(
                  ([network, count]) => (
                    <div
                      key={network}
                      className="flex items-center justify-between"
                    >
                      <span className="text-sm font-medium text-zinc-900 dark:text-zinc-50 capitalize">
                        {network}
                      </span>
                      <div className="flex items-center gap-3">
                        <div className="w-32 h-2 bg-zinc-200 dark:bg-zinc-800 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-indigo-600"
                            style={{
                              width: `${
                                (count / analytics.totalOrders) * 100
                              }%`,
                            }}
                          ></div>
                        </div>
                        <span className="text-sm font-semibold text-zinc-900 dark:text-zinc-50 w-8 text-right">
                          {count}
                        </span>
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>

            {/* Monthly Orders */}
            <div className="p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 lg:col-span-2">
              <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mb-4">
                Orders Over Time
              </h2>
              <div className="space-y-3">
                {Object.entries(analytics.monthlyOrders)
                  .sort()
                  .map(([month, count]) => (
                    <div
                      key={month}
                      className="flex items-center justify-between"
                    >
                      <span className="text-sm font-medium text-zinc-900 dark:text-zinc-50">
                        {month}
                      </span>
                      <div className="flex items-center gap-3 flex-1 max-w-md">
                        <div className="w-full h-4 bg-zinc-200 dark:bg-zinc-800 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-purple-600"
                            style={{
                              width: `${
                                (count /
                                  Math.max(
                                    ...Object.values(analytics.monthlyOrders)
                                  )) *
                                100
                              }%`,
                            }}
                          ></div>
                        </div>
                        <span className="text-sm font-semibold text-zinc-900 dark:text-zinc-50 w-8 text-right">
                          {count}
                        </span>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
