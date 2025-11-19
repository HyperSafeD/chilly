/**
 * Order status types
 */
export type OrderStatus =
  | "pending"
  | "confirmed"
  | "processing"
  | "shipped"
  | "delivered"
  | "cancelled"
  | "disputed";

/**
 * Order interface representing an on-chain order
 */
export interface Order {
  id: string;
  orderNumber: string;
  buyer: string; // Ethereum address
  seller: string; // Ethereum address
  productName: string;
  productDescription?: string;
  quantity: number;
  price: string; // In wei or token amount
  currency: string; // Token symbol or 'ETH'
  status: OrderStatus;
  createdAt: number; // Unix timestamp
  updatedAt: number; // Unix timestamp
  estimatedDelivery?: number; // Unix timestamp
  trackingNumber?: string;
  transactionHash?: string; // Blockchain transaction hash
  network: string; // Chain name (e.g., 'mainnet', 'polygon')
  metadata?: Record<string, any>; // Additional order data
}

/**
 * Order filter options
 */
export interface OrderFilters {
  status?: OrderStatus | "all";
  network?: string | "all";
  search?: string;
  dateRange?: {
    from?: number;
    to?: number;
  };
}

/**
 * Order statistics
 */
export interface OrderStats {
  total: number;
  pending: number;
  confirmed: number;
  processing: number;
  shipped: number;
  delivered: number;
  cancelled: number;
  disputed: number;
  totalValue: string;
}
