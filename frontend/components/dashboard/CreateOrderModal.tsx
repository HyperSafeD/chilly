"use client";

import React, { useState } from "react";
import { useAccount } from "wagmi";

interface CreateOrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCreateOrder: (orderData: {
    productName: string;
    productDescription: string;
    quantity: number;
    price: string;
    currency: string;
  }) => void;
}

export function CreateOrderModal({
  isOpen,
  onClose,
  onCreateOrder,
}: CreateOrderModalProps) {
  const { address } = useAccount();
  const [formData, setFormData] = useState({
    productName: "",
    productDescription: "",
    quantity: 1,
    price: "",
    currency: "ETH",
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!address) return;

    onCreateOrder(formData);
    // Reset form
    setFormData({
      productName: "",
      productDescription: "",
      quantity: 1,
      price: "",
      currency: "ETH",
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-zinc-200 dark:border-zinc-800">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
              Create New Order
            </h2>
            <button
              onClick={onClose}
              className="p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-600 dark:text-zinc-400"
            >
              ✕
            </button>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div>
            <label className="block text-sm font-medium text-zinc-900 dark:text-zinc-50 mb-2">
              Product Name *
            </label>
            <input
              type="text"
              required
              value={formData.productName}
              onChange={(e) =>
                setFormData({ ...formData, productName: e.target.value })
              }
              className="w-full px-4 py-2 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-50 focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Enter product name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-zinc-900 dark:text-zinc-50 mb-2">
              Product Description
            </label>
            <textarea
              value={formData.productDescription}
              onChange={(e) =>
                setFormData({ ...formData, productDescription: e.target.value })
              }
              rows={4}
              className="w-full px-4 py-2 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-50 focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Enter product description"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-zinc-900 dark:text-zinc-50 mb-2">
                Quantity *
              </label>
              <input
                type="number"
                required
                min="1"
                value={formData.quantity}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    quantity: parseInt(e.target.value) || 1,
                  })
                }
                className="w-full px-4 py-2 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-50 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-zinc-900 dark:text-zinc-50 mb-2">
                Currency
              </label>
              <select
                value={formData.currency}
                onChange={(e) =>
                  setFormData({ ...formData, currency: e.target.value })
                }
                className="w-full px-4 py-2 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-50 focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                <option value="ETH">ETH</option>
                <option value="USDC">USDC</option>
                <option value="USDT">USDT</option>
                <option value="DAI">DAI</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-zinc-900 dark:text-zinc-50 mb-2">
              Price *
            </label>
            <input
              type="text"
              required
              value={formData.price}
              onChange={(e) =>
                setFormData({ ...formData, price: e.target.value })
              }
              className="w-full px-4 py-2 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-50 focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="0.0"
            />
            <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
              Enter price in {formData.currency}
            </p>
          </div>

          <div className="flex items-center gap-4 pt-4 border-t border-zinc-200 dark:border-zinc-800">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-6 py-3 rounded-lg border border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-zinc-50 font-medium hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 px-6 py-3 rounded-lg bg-orange-600 text-white font-medium hover:bg-orange-700 transition-colors"
            >
              Create Order
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
