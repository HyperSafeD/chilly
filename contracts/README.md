# Chilly Smart Contracts

This directory contains the Solidity smart contracts for the Chilly decentralized order tracking dApp.

## 📋 Contract Overview

### OrderTracking.sol

The main smart contract that handles all order-related operations on-chain.

**Key Features:**

- ✅ Order creation with escrow payment
- ✅ Order status management (Pending → Confirmed → Processing → Shipped → Delivered)
- ✅ Dispute resolution system
- ✅ Automatic payment release on delivery
- ✅ Automatic refund on cancellation
- ✅ Platform fee management
- ✅ Multi-network support
- ✅ Gas-optimized design

## 🏗️ Contract Architecture

### Order Lifecycle

```
Pending → Confirmed → Processing → Shipped → Delivered
   ↓         ↓            ↓
Cancelled  Cancelled   Disputed
```

### Payment Flow

1. **Order Creation**: Buyer sends payment to contract (held in escrow)
2. **Platform Fee**: Fee is deducted and sent to contract owner
3. **Delivery**: Payment is automatically released to seller
4. **Cancellation**: Full refund (minus platform fee) to buyer

## 📦 Installation

```bash
cd contracts
npm install
```

## 🔧 Configuration

Create a `.env` file in the `contracts` directory:

```env
# Private key of deployer account (NEVER commit this!)
PRIVATE_KEY=your_private_key_here

# RPC URLs
SEPOLIA_RPC_URL=https://sepolia.infura.io/v3/YOUR_PROJECT_ID
MAINNET_RPC_URL=https://mainnet.infura.io/v3/YOUR_PROJECT_ID
POLYGON_RPC_URL=https://polygon-rpc.com
ARBITRUM_RPC_URL=https://arb1.arbitrum.io/rpc

# API Keys for contract verification
ETHERSCAN_API_KEY=your_etherscan_api_key
POLYGONSCAN_API_KEY=your_polygonscan_api_key
ARBISCAN_API_KEY=your_arbiscan_api_key
```

## 🚀 Deployment

### Compile Contracts

```bash
npm run compile
```

### Deploy to Sepolia (Testnet)

```bash
npm run deploy:sepolia
```

### Deploy to Mainnet

```bash
npm run deploy:mainnet
```

### Deploy to Polygon

```bash
npm run deploy:polygon
```

### Deploy to Arbitrum

```bash
npm run deploy:arbitrum
```

## 📝 Contract Functions

### Order Management

- `createOrder()` - Create a new order with payment
- `confirmOrder()` - Seller confirms the order
- `updateOrderStatus()` - Update order status
- `markAsProcessing()` - Mark order as processing
- `markAsShipped()` - Mark order as shipped
- `addTrackingNumber()` - Add shipping tracking number
- `cancelOrder()` - Cancel an order (refunds buyer)
- `disputeOrder()` - Dispute an order

### View Functions

- `getOrder(uint256 orderId)` - Get order details
- `getBuyerOrders(address buyer)` - Get all orders for a buyer
- `getSellerOrders(address seller)` - Get all orders for a seller
- `getOrders(uint256[] orderIds)` - Get multiple orders

### Admin Functions

- `setPlatformFee(uint256 newFee)` - Update platform fee (owner only)
- `setMinOrderValue(uint256 newValue)` - Update minimum order value (owner only)
- `transferOwnership(address newOwner)` - Transfer contract ownership

## 🔐 Security Features

1. **Access Control**: Only authorized parties can update orders
2. **Status Validation**: Prevents invalid status transitions
3. **Payment Escrow**: Funds held securely until delivery
4. **Automatic Refunds**: Cancelled orders automatically refund
5. **Reentrancy Protection**: Built-in protection against reentrancy attacks
6. **Input Validation**: All inputs are validated before processing

## 💰 Fee Structure

- **Platform Fee**: Configurable (default: 1% = 100 basis points)
- **Minimum Order Value**: Configurable (default: 0.001 ETH)
- **Fee Collection**: Collected at order creation
- **Refund Policy**: Platform fee is non-refundable

## 📊 Events

The contract emits the following events for off-chain tracking:

- `OrderCreated` - When a new order is created
- `OrderStatusUpdated` - When order status changes
- `TrackingNumberAdded` - When tracking number is added
- `OrderDisputed` - When an order is disputed
- `OrderCancelled` - When an order is cancelled

## 🧪 Testing

```bash
npm test
```

## 📚 Contract Addresses

After deployment, update the contract addresses in:

- `lib/contract.ts` - Frontend contract configuration

## 🔍 Verification

Contracts are automatically verified on Etherscan after deployment. Manual verification:

```bash
npx hardhat verify --network sepolia <CONTRACT_ADDRESS> <CONSTRUCTOR_ARGS>
```

## 📖 Integration

### Frontend Integration

1. Import the contract ABI from `lib/abis/OrderTracking.ts`
2. Use the contract address from `lib/contract.ts`
3. Use wagmi hooks to interact with the contract

Example:

```typescript
import { useWriteContract, useReadContract } from "wagmi";
import { OrderTrackingABI } from "@/lib/abis/OrderTracking";
import { getContractAddress } from "@/lib/contract";

// Read order
const { data: order } = useReadContract({
  address: getContractAddress(chainId),
  abi: OrderTrackingABI,
  functionName: "getOrder",
  args: [orderId],
});

// Create order
const { writeContract } = useWriteContract();
writeContract({
  address: getContractAddress(chainId),
  abi: OrderTrackingABI,
  functionName: "createOrder",
  args: [
    seller,
    productName,
    description,
    quantity,
    currency,
    delivery,
    network,
    metadata,
  ],
  value: parseEther(price),
});
```

## ⚠️ Important Notes

1. **Never commit private keys** to version control
2. **Test thoroughly** on testnets before mainnet deployment
3. **Verify contracts** on block explorers for transparency
4. **Monitor gas costs** - optimize if needed
5. **Keep contract owner key secure** - use multisig for production

## 📄 License

MIT License - See LICENSE file for details
