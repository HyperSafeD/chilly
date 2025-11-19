# Smart Contract Documentation

## Overview

The Chilly dApp uses a comprehensive Solidity smart contract (`OrderTracking.sol`) to manage orders on-chain. This contract provides a trustless, transparent, and immutable system for order tracking.

## Contract Features

### 1. Order Management

- Create orders with escrow payment
- Track order status through lifecycle
- Update order information
- Cancel orders with automatic refunds

### 2. Payment Handling

- **Escrow System**: Payments held in contract until delivery
- **Automatic Release**: Payment released to seller on delivery
- **Automatic Refund**: Full refund (minus platform fee) on cancellation
- **Platform Fee**: Configurable fee collected at order creation

### 3. Status Management

Order statuses follow a clear lifecycle:

- `Pending` (0) - Order created, awaiting confirmation
- `Confirmed` (1) - Order confirmed by seller
- `Processing` (2) - Order being prepared
- `Shipped` (3) - Order has been shipped
- `Delivered` (4) - Order successfully delivered (payment released)
- `Cancelled` (5) - Order cancelled (refund issued)
- `Disputed` (6) - Order under dispute

### 4. Security Features

- Access control (only buyer/seller can update their orders)
- Status transition validation
- Reentrancy protection
- Input validation
- Owner-only admin functions

## Contract Functions

### Creating Orders

```solidity
function createOrder(
    address _seller,
    string memory _productName,
    string memory _productDescription,
    uint256 _quantity,
    address _currency,  // address(0) for native ETH
    uint256 _estimatedDelivery,
    string memory _network,
    string memory _metadataHash  // IPFS hash for additional data
) external payable returns (uint256 orderId)
```

**Requirements:**

- Must send ETH (msg.value) equal to order price
- Price must be >= minimum order value
- Seller address must be valid and different from buyer

**What happens:**

1. Platform fee is calculated and sent to contract owner
2. Remaining funds held in contract escrow
3. Order struct created and stored
4. Order ID added to buyer and seller arrays
5. `OrderCreated` event emitted

### Confirming Orders

```solidity
function confirmOrder(uint256 _orderId) external
```

**Requirements:**

- Only seller can confirm
- Order must be in `Pending` status

**What happens:**

- Status changes to `Confirmed`
- `OrderStatusUpdated` event emitted

### Updating Status

```solidity
function updateOrderStatus(
    uint256 _orderId,
    OrderStatus _newStatus
) external
```

**Requirements:**

- Only buyer or seller can update
- Status transition must be valid
- Special handling for `Delivered` (releases payment) and `Cancelled` (refunds)

### Adding Tracking

```solidity
function addTrackingNumber(
    uint256 _orderId,
    string memory _trackingNumber
) external
```

**Requirements:**

- Only seller can add tracking
- Order must be in `Processing` or `Shipped` status

### Disputing Orders

```solidity
function disputeOrder(
    uint256 _orderId,
    string memory _reason
) external
```

**Requirements:**

- Only buyer or seller can dispute
- Order cannot be in terminal states (Delivered, Cancelled, Disputed)

### Cancelling Orders

```solidity
function cancelOrder(
    uint256 _orderId,
    string memory _reason
) external
```

**Requirements:**

- Only buyer or seller can cancel
- Order must be in `Pending` or `Confirmed` status

**What happens:**

- Status changes to `Cancelled`
- Full refund (minus platform fee) sent to buyer
- `OrderCancelled` event emitted

## Payment Flow

### Order Creation

```
Buyer sends: 1.0 ETH
Platform fee: 0.01 ETH (1%) → Contract Owner
Escrow: 0.99 ETH → Contract (held)
```

### Order Delivery

```
Escrow: 0.99 ETH → Seller
```

### Order Cancellation

```
Escrow: 0.99 ETH → Buyer (refund)
Platform fee: 0.01 ETH (non-refundable)
```

## Gas Optimization

The contract is optimized for gas efficiency:

- Uses `uint256` for IDs (cheaper than strings)
- Stores order data in single struct
- Uses events for off-chain indexing
- Minimal storage operations
- Efficient status validation

## Events

All important actions emit events for off-chain tracking:

```solidity
event OrderCreated(uint256 indexed orderId, address indexed buyer, ...);
event OrderStatusUpdated(uint256 indexed orderId, OrderStatus oldStatus, ...);
event TrackingNumberAdded(uint256 indexed orderId, string trackingNumber);
event OrderDisputed(uint256 indexed orderId, address indexed disputer, ...);
event OrderCancelled(uint256 indexed orderId, address cancelledBy, ...);
```

## Admin Functions

### Platform Fee Management

```solidity
function setPlatformFee(uint256 _newFee) external onlyOwner
```

- Maximum fee: 10% (1000 basis points)
- Fee collected at order creation

### Minimum Order Value

```solidity
function setMinOrderValue(uint256 _newValue) external onlyOwner
```

- Prevents spam orders
- Default: 0.001 ETH

### Ownership Transfer

```solidity
function transferOwnership(address _newOwner) external onlyOwner
```

- Transfers contract ownership
- New owner can update fees and settings

## Integration Guide

### 1. Deploy Contract

```bash
cd contracts
npm install
npm run deploy:sepolia  # or mainnet, polygon, arbitrum
```

### 2. Update Contract Address

Update `lib/contract.ts` with deployed contract address:

```typescript
export const CONTRACT_ADDRESSES: Record<number, Address> = {
  11155111: "0xYourDeployedContractAddress", // Sepolia
  // ... other networks
};
```

### 3. Use in Frontend

```typescript
import { useWriteContract } from "wagmi";
import { OrderTrackingABI } from "@/lib/abis/OrderTracking";
import { getContractAddress } from "@/lib/contract";

const { writeContract } = useWriteContract();

// Create order
await writeContract({
  address: getContractAddress(chainId),
  abi: OrderTrackingABI,
  functionName: "createOrder",
  args: [
    sellerAddress,
    productName,
    description,
    quantity,
    "0x0000000000000000000000000000000000000000", // ETH
    estimatedDelivery,
    "sepolia",
    "", // IPFS hash (optional)
  ],
  value: parseEther("0.1"), // Order price
});
```

## Security Considerations

1. **Access Control**: Only authorized parties can modify orders
2. **Status Validation**: Prevents invalid state transitions
3. **Payment Security**: Funds held in escrow until delivery
4. **Reentrancy**: Contract uses checks-effects-interactions pattern
5. **Input Validation**: All inputs validated before processing
6. **Owner Security**: Owner key should be in multisig for production

## Testing

```bash
cd contracts
npm test
```

## Deployment Checklist

- [ ] Test on local Hardhat network
- [ ] Deploy to Sepolia testnet
- [ ] Verify contract on Etherscan
- [ ] Test all functions on testnet
- [ ] Update contract addresses in frontend
- [ ] Deploy to mainnet (if ready)
- [ ] Set up multisig for owner key
- [ ] Monitor contract for issues

## Cost Estimates

**Deployment (Sepolia):**

- Contract deployment: ~2,000,000 gas
- Cost: ~0.01 ETH (at 20 gwei)

**Operations (Estimated):**

- Create order: ~150,000 gas
- Update status: ~50,000 gas
- Add tracking: ~40,000 gas
- Cancel order: ~80,000 gas

## Future Enhancements

Potential improvements:

- ERC-20 token support
- Multi-signature dispute resolution
- Order expiration mechanism
- Batch operations
- Upgradeable contract pattern
- Layer 2 optimization

## Support

For contract-related questions:

- Check [contracts/README.md](../contracts/README.md)
- Review contract code in [contracts/OrderTracking.sol](../contracts/OrderTracking.sol)
- Open an issue on GitHub
