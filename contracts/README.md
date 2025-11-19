# Chilly Smart Contracts

Smart contracts for the Chilly decentralized order tracking system.

## 📋 Contract Overview

### OrderTracking.sol

Main contract for creating and managing orders on-chain with the following features:

- ✅ Create orders with product details and shipping information
- ✅ Update order status (Pending → Confirmed → Processing → Shipped → Delivered)
- ✅ Add tracking numbers
- ✅ Cancel orders (before delivery)
- ✅ Complete order history tracking
- ✅ Query orders by customer or merchant
- ✅ Batch operations for efficiency
- ✅ Event emission for real-time updates

### Order Statuses

```solidity
enum OrderStatus {
    Pending,    // 0 - Order created, awaiting confirmation
    Confirmed,  // 1 - Order confirmed by merchant
    Processing, // 2 - Order being prepared
    Shipped,    // 3 - Order shipped with tracking
    Delivered,  // 4 - Order delivered to customer
    Cancelled,  // 5 - Order cancelled
    Disputed    // 6 - Order in dispute
}
```

## 🚀 Setup

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
cd contracts
npm install
```

### Environment Setup

Create a `.env` file:

```env
PRIVATE_KEY=your_private_key_here
SEPOLIA_RPC_URL=https://rpc.sepolia.org
POLYGON_RPC_URL=https://polygon-rpc.com
ARBITRUM_RPC_URL=https://arb1.arbitrum.io/rpc
ETHERSCAN_API_KEY=your_etherscan_api_key
POLYGONSCAN_API_KEY=your_polygonscan_api_key
ARBISCAN_API_KEY=your_arbiscan_api_key
```

## 🔨 Development

### Compile Contracts

```bash
npm run compile
```

### Run Tests

```bash
npm test
```

### Deploy to Local Network

```bash
# Start local Hardhat node
npm run node

# In another terminal, deploy
npm run deploy
```

### Deploy to Testnets/Mainnet

```bash
# Deploy to Sepolia testnet
npm run deploy:sepolia

# Deploy to Polygon
npm run deploy:polygon

# Deploy to Arbitrum
npm run deploy:arbitrum
```

### Verify Contract

```bash
npm run verify -- --network sepolia DEPLOYED_CONTRACT_ADDRESS
```

## 📝 Contract Functions

### Create Order

```solidity
function createOrder(
    address _merchant,
    string memory _productName,
    string memory _description,
    uint256 _amount,
    string memory _shippingAddress
) external returns (uint256)
```

### Update Order Status

```solidity
function updateOrderStatus(
    uint256 _orderId,
    OrderStatus _newStatus,
    string memory _note
) external
```

### Add Tracking Number

```solidity
function addTrackingNumber(
    uint256 _orderId,
    string memory _trackingNumber
) external
```

### Cancel Order

```solidity
function cancelOrder(
    uint256 _orderId,
    string memory _reason
) external
```

### View Functions

```solidity
// Get single order
function getOrder(uint256 _orderId) external view returns (Order memory)

// Get order history
function getOrderHistory(uint256 _orderId) external view returns (OrderUpdate[] memory)

// Get customer orders
function getCustomerOrders(address _customer) external view returns (uint256[] memory)

// Get merchant orders
function getMerchantOrders(address _merchant) external view returns (uint256[] memory)

// Get multiple orders at once
function getOrders(uint256[] memory _orderIds) external view returns (Order[] memory)

// Get total orders
function getTotalOrders() external view returns (uint256)
```

## 🔐 Security Features

- ✅ Access control (only order participants can update)
- ✅ Status validation (prevent invalid state transitions)
- ✅ Immutable order history
- ✅ Event emission for transparency
- ✅ Address validation
- ✅ No external dependencies (except OpenZeppelin if needed)

## 📊 Events

```solidity
event OrderCreated(
    uint256 indexed orderId,
    address indexed customer,
    address indexed merchant,
    string productName,
    uint256 amount,
    uint256 timestamp
);

event OrderUpdated(
    uint256 indexed orderId,
    OrderStatus newStatus,
    address indexed updatedBy,
    uint256 timestamp
);

event OrderCancelled(
    uint256 indexed orderId,
    address indexed cancelledBy,
    uint256 timestamp
);
```

## 🌐 Deployed Contracts

Deployment information is saved in `./deployments/` directory after each deployment.

### Sepolia Testnet
```
Address: [To be deployed]
Explorer: https://sepolia.etherscan.io/address/
```

### Polygon
```
Address: [To be deployed]
Explorer: https://polygonscan.com/address/
```

### Arbitrum
```
Address: [To be deployed]
Explorer: https://arbiscan.io/address/
```

## 📜 License

MIT
