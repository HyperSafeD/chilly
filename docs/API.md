# API Documentation

This document describes the API structure and data models used in Chilly.

## Types and Interfaces

### Order

Represents an order stored on the blockchain.

```typescript
interface Order {
  id: string; // Unique order identifier
  orderNumber: string; // Human-readable order number (e.g., "ORD-001")
  buyer: string; // Ethereum address of the buyer
  seller: string; // Ethereum address of the seller
  productName: string; // Name of the product
  productDescription?: string; // Optional product description
  quantity: number; // Quantity of items
  price: string; // Price in wei or token amount
  currency: string; // Currency symbol (ETH, USDC, etc.)
  status: OrderStatus; // Current order status
  createdAt: number; // Unix timestamp of creation
  updatedAt: number; // Unix timestamp of last update
  estimatedDelivery?: number; // Optional estimated delivery timestamp
  trackingNumber?: string; // Optional shipping tracking number
  transactionHash?: string; // Blockchain transaction hash
  network: string; // Network name (mainnet, polygon, etc.)
  metadata?: Record<string, any>; // Additional metadata
}
```

### OrderStatus

Enumeration of possible order statuses.

```typescript
type OrderStatus =
  | "pending" // Order created, awaiting confirmation
  | "confirmed" // Order confirmed by seller
  | "processing" // Order being prepared
  | "shipped" // Order has been shipped
  | "delivered" // Order successfully delivered
  | "cancelled" // Order cancelled
  | "disputed"; // Order under dispute
```

### OrderFilters

Filter options for querying orders.

```typescript
interface OrderFilters {
  status?: OrderStatus | "all"; // Filter by status
  network?: string | "all"; // Filter by blockchain network
  search?: string; // Search query
  dateRange?: {
    // Optional date range filter
    from?: number; // Start timestamp
    to?: number; // End timestamp
  };
}
```

### OrderStats

Statistics about orders.

```typescript
interface OrderStats {
  total: number; // Total number of orders
  pending: number; // Orders with pending status
  confirmed: number; // Orders with confirmed status
  processing: number; // Orders being processed
  shipped: number; // Orders that have been shipped
  delivered: number; // Orders that have been delivered
  cancelled: number; // Cancelled orders
  disputed: number; // Orders under dispute
  totalValue: string; // Total value of all orders (in ETH or token)
}
```

## Component Props

### OrderCard

Displays a single order in a card format.

```typescript
interface OrderCardProps {
  order: Order; // Order data to display
  onClick?: () => void; // Optional click handler
}
```

### OrderList

Displays a list of orders in a grid layout.

```typescript
interface OrderListProps {
  orders: Order[]; // Array of orders to display
  onOrderClick?: (order: Order) => void; // Optional click handler
  isLoading?: boolean; // Loading state indicator
}
```

### OrderFilters

Filter and search controls for orders.

```typescript
interface OrderFiltersProps {
  filters: OrderFilters; // Current filter values
  onFiltersChange: (filters: OrderFilters) => void; // Filter change handler
}
```

### CreateOrderModal

Modal for creating new orders.

```typescript
interface CreateOrderModalProps {
  isOpen: boolean; // Modal visibility
  onClose: () => void; // Close handler
  onCreateOrder: (orderData: {
    // Order creation handler
    productName: string;
    productDescription: string;
    quantity: number;
    price: string;
    currency: string;
  }) => void;
}
```

## Web3 Configuration

### Networks

Supported blockchain networks:

- **Mainnet**: Ethereum mainnet (Chain ID: 1)
- **Sepolia**: Ethereum testnet (Chain ID: 11155111)
- **Polygon**: Polygon mainnet (Chain ID: 137)
- **Arbitrum**: Arbitrum One (Chain ID: 42161)

### Wallet Connection

Uses Reown AppKit (formerly WalletConnect) for wallet connections:

- MetaMask
- WalletConnect
- Coinbase Wallet
- And other compatible wallets

## Future API Endpoints

When smart contracts are implemented, the following operations will be available:

### Create Order

```solidity
function createOrder(
  address seller,
  string memory productName,
  uint256 quantity,
  uint256 price,
  string memory currency
) external returns (uint256 orderId)
```

### Update Order Status

```solidity
function updateOrderStatus(
  uint256 orderId,
  OrderStatus newStatus
) external
```

### Get Order

```solidity
function getOrder(uint256 orderId) external view returns (Order memory)
```

### Get Orders by Address

```solidity
function getOrdersByBuyer(address buyer) external view returns (Order[] memory)
function getOrdersBySeller(address seller) external view returns (Order[] memory)
```

## Events

Future smart contract events:

```solidity
event OrderCreated(uint256 indexed orderId, address indexed buyer, address indexed seller);
event OrderStatusUpdated(uint256 indexed orderId, OrderStatus newStatus);
event OrderDisputed(uint256 indexed orderId, address indexed disputer);
```

## Error Handling

Common error scenarios:

- **Wallet Not Connected**: User must connect wallet before creating orders
- **Wrong Network**: User must be on the correct network
- **Insufficient Funds**: User doesn't have enough tokens/ETH
- **Transaction Failed**: Blockchain transaction reverted
- **Invalid Input**: Form validation errors

## Data Flow

1. **User Input** → Form validation
2. **Order Creation** → Generate order object
3. **Blockchain Transaction** → (Future) Smart contract interaction
4. **Event Listening** → (Future) Listen for blockchain events
5. **State Update** → Update UI with new order
6. **Caching** → React Query caches order data

## Mock Data

For development, mock data is provided in `lib/mockData.ts`:

- Sample orders with various statuses
- Mock statistics
- Example transaction hashes

This allows development without blockchain interaction.

## Best Practices

1. **Always validate user input** before creating orders
2. **Handle loading states** during blockchain operations
3. **Show clear error messages** for failed transactions
4. **Cache order data** to reduce blockchain queries
5. **Listen for events** to update UI in real-time
6. **Format addresses** for better UX (truncate long addresses)
7. **Format prices** appropriately (wei to ETH conversion)
