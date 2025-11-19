# Deployment Guide

This guide will help you deploy the Chilly smart contract to Base Sepolia testnet.

## Prerequisites

1. **Node.js** 18.x or higher
2. **npm** or **yarn**
3. **Hardhat** (installed via npm)
4. **Base Sepolia ETH** for gas fees
5. **Private Key** of deployer wallet (with testnet ETH)

## Getting Base Sepolia ETH

1. Visit [Base Sepolia Faucet](https://www.coinbase.com/faucets/base-ethereum-goerli-faucet)
2. Connect your wallet
3. Request testnet ETH (you'll need some for gas fees)

Alternatively, use other Base Sepolia faucets:
- [QuickNode Base Sepolia Faucet](https://faucet.quicknode.com/base/sepolia)
- [Alchemy Base Sepolia Faucet](https://www.alchemy.com/faucets/base-sepolia)

## Setup

### 1. Install Dependencies

```bash
cd contracts
npm install
```

### 2. Configure Environment Variables

Create a `.env` file in the `contracts` directory:

```bash
cp .env.example .env
```

Edit `.env` and add your values:

```env
# Private key of deployer account (NEVER commit this!)
PRIVATE_KEY=your_private_key_here_without_0x_prefix

# Base Sepolia RPC URL (public RPC is already configured)
BASE_SEPOLIA_RPC_URL=https://sepolia.base.org

# Optional: For contract verification on Basescan
BASESCAN_API_KEY=your_basescan_api_key
# Or use Etherscan API key (works for Base too)
ETHERSCAN_API_KEY=your_etherscan_api_key
```

> **⚠️ Security Warning**: Never commit your `.env` file or private key to version control!

### 3. Compile Contracts

```bash
npm run compile
```

This will compile the `OrderTracking.sol` contract and check for any errors.

## Deployment

### Deploy to Base Sepolia

```bash
npm run deploy:base-sepolia
```

The deployment script will:
1. Deploy the contract with:
   - Platform fee: 100 basis points (1%)
   - Minimum order value: 0.001 ETH
2. Wait for transaction confirmation
3. Display the contract address
4. Automatically verify the contract on Basescan (if API key provided)

### Expected Output

```
Deploying OrderTracking contract...
OrderTracking deployed to: 0xYourContractAddressHere
Platform Fee: 100 bps ( 1 %)
Minimum Order Value: 0.001 ETH
Waiting for block confirmations...
Verifying contract on Etherscan...
Contract verified successfully!

=== Deployment Summary ===
Contract Address: 0xYourContractAddressHere
Network: baseSepolia
Platform Fee: 100 basis points
Min Order Value: 0.001 ETH
```

## Post-Deployment

### 1. Update Contract Address

After deployment, update the contract address in `lib/contract.ts`:

```typescript
export const CONTRACT_ADDRESSES: Record<number, Address> = {
  // ... other networks
  84532: "0xYourDeployedContractAddress", // Base Sepolia
};
```

### 2. Verify Contract on Basescan

If automatic verification failed, manually verify:

```bash
npx hardhat verify --network baseSepolia 0xYourContractAddress 100 1000000000000000
```

Where:
- `0xYourContractAddress` is your deployed contract address
- `100` is the platform fee in basis points
- `1000000000000000` is the minimum order value in wei (0.001 ETH)

### 3. Test the Contract

1. Connect your wallet to Base Sepolia testnet
2. Visit the dashboard at `http://localhost:3000/dashboard`
3. Create a test order
4. Verify the order appears on Basescan

## Contract Verification

### View on Basescan

After deployment, view your contract on:
- **Basescan**: https://sepolia-explorer.base.org/address/0xYourContractAddress

### Verify Contract Source Code

1. Go to Basescan
2. Navigate to your contract address
3. Click "Contract" tab
4. Click "Verify and Publish"
5. Fill in the verification form:
   - Compiler: v0.8.20
   - License: MIT
   - Optimization: Yes (200 runs)
   - Constructor arguments: `100,1000000000000000`

## Network Information

### Base Sepolia Testnet

- **Chain ID**: 84532
- **RPC URL**: https://sepolia.base.org
- **Block Explorer**: https://sepolia-explorer.base.org
- **Faucet**: https://www.coinbase.com/faucets/base-ethereum-goerli-faucet

## Troubleshooting

### Error: Insufficient funds

**Solution**: Get more Base Sepolia ETH from the faucet

### Error: Contract verification failed

**Solution**: 
1. Check your API key is correct
2. Wait a few minutes and try manual verification
3. Ensure constructor arguments match exactly

### Error: Nonce too high

**Solution**: Reset your wallet nonce or wait for pending transactions

### Contract not showing in frontend

**Solution**:
1. Verify contract address is correct in `lib/contract.ts`
2. Ensure you're connected to Base Sepolia network
3. Check browser console for errors
4. Clear browser cache and reload

## Gas Estimates

**Base Sepolia** (typically lower gas than Ethereum):
- Contract deployment: ~2,000,000 gas (~0.01 ETH at current prices)
- Create order: ~150,000 gas
- Update status: ~50,000 gas
- Cancel order: ~80,000 gas

## Next Steps

After successful deployment:

1. ✅ Test order creation
2. ✅ Test order status updates
3. ✅ Test order cancellation
4. ✅ Verify all events are emitted correctly
5. ✅ Test with multiple wallets (buyer/seller)
6. ✅ Monitor contract on Basescan

## Production Deployment

When ready for production on Base Mainnet:

1. Update network configuration for Base Mainnet (Chain ID: 8453)
2. Deploy with production parameters
3. Update contract addresses
4. Test thoroughly before going live
5. Consider using a multisig wallet for contract owner

## Support

For issues or questions:
- Check [contracts/README.md](../contracts/README.md)
- Review [SMART_CONTRACT.md](./SMART_CONTRACT.md)
- Open an issue on GitHub
