import { Order, OrderStats } from "./types";

/**
 * Mock data for development and demonstration
 * In production, this would be replaced with actual blockchain queries
 */

export const mockOrders: Order[] = [
  {
    id: "1",
    orderNumber: "ORD-001",
    buyer: "0x1234567890123456789012345678901234567890",
    seller: "0x0987654321098765432109876543210987654321",
    productName: "Premium Coffee Beans",
    productDescription: "Ethically sourced Arabica coffee beans from Colombia",
    quantity: 2,
    price: "0.5",
    currency: "ETH",
    status: "pending",
    createdAt: Math.floor(Date.now() / 1000) - 86400, // 1 day ago
    updatedAt: Math.floor(Date.now() / 1000) - 86400,
    network: "mainnet",
    transactionHash:
      "0xabcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890",
  },
  {
    id: "2",
    orderNumber: "ORD-002",
    buyer: "0x1234567890123456789012345678901234567890",
    seller: "0x0987654321098765432109876543210987654321",
    productName: "Wireless Headphones",
    productDescription: "High-quality noise-cancelling wireless headphones",
    quantity: 1,
    price: "0.3",
    currency: "ETH",
    status: "processing",
    createdAt: Math.floor(Date.now() / 1000) - 172800, // 2 days ago
    updatedAt: Math.floor(Date.now() / 1000) - 86400,
    network: "polygon",
    trackingNumber: "TRK-123456789",
  },
  {
    id: "3",
    orderNumber: "ORD-003",
    buyer: "0x1234567890123456789012345678901234567890",
    seller: "0x0987654321098765432109876543210987654321",
    productName: "Smart Watch",
    productDescription: "Latest generation smartwatch with health tracking",
    quantity: 1,
    price: "0.8",
    currency: "ETH",
    status: "shipped",
    createdAt: Math.floor(Date.now() / 1000) - 259200, // 3 days ago
    updatedAt: Math.floor(Date.now() / 1000) - 43200,
    network: "arbitrum",
    trackingNumber: "TRK-987654321",
    estimatedDelivery: Math.floor(Date.now() / 1000) + 172800, // 2 days from now
  },
  {
    id: "4",
    orderNumber: "ORD-004",
    buyer: "0x1234567890123456789012345678901234567890",
    seller: "0x0987654321098765432109876543210987654321",
    productName: "Laptop Stand",
    productDescription: "Ergonomic adjustable laptop stand",
    quantity: 1,
    price: "0.15",
    currency: "ETH",
    status: "delivered",
    createdAt: Math.floor(Date.now() / 1000) - 604800, // 7 days ago
    updatedAt: Math.floor(Date.now() / 1000) - 86400,
    network: "mainnet",
    trackingNumber: "TRK-456789123",
  },
];

export const mockStats: OrderStats = {
  total: mockOrders.length,
  pending: mockOrders.filter((o) => o.status === "pending").length,
  confirmed: mockOrders.filter((o) => o.status === "confirmed").length,
  processing: mockOrders.filter((o) => o.status === "processing").length,
  shipped: mockOrders.filter((o) => o.status === "shipped").length,
  delivered: mockOrders.filter((o) => o.status === "delivered").length,
  cancelled: mockOrders.filter((o) => o.status === "cancelled").length,
  disputed: mockOrders.filter((o) => o.status === "disputed").length,
  totalValue: mockOrders
    .reduce((sum, o) => sum + parseFloat(o.price), 0)
    .toFixed(2),
};
