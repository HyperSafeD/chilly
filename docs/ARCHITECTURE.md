# Architecture Documentation

This document describes the architecture and design decisions of the Chilly dApp.

## Overview

Chilly is a decentralized order tracking application built on Next.js 16 with Web3 integration. It enables users to create, track, and manage orders on the blockchain with full transparency and immutability.

## Tech Stack

### Frontend Framework

- **Next.js 16**: React framework with App Router for server-side rendering and routing
- **React 19**: Latest React with concurrent features
- **TypeScript**: Type-safe development

### Web3 Integration

- **wagmi**: React hooks for Ethereum interactions
- **viem**: TypeScript Ethereum library for type-safe blockchain operations
- **Reown AppKit**: Wallet connection UI (formerly WalletConnect)
- **@tanstack/react-query**: Data fetching, caching, and synchronization

### Styling

- **Tailwind CSS v4**: Utility-first CSS framework
- **Dark Mode**: System preference-based dark mode support

## Project Structure

```
chilly/
├── app/                    # Next.js App Router
│   ├── dashboard/         # Dashboard route
│   ├── layout.tsx         # Root layout with providers
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── dashboard/        # Dashboard-specific components
│   └── [shared]/         # Shared components
├── lib/                   # Utilities and configurations
│   ├── types.ts          # TypeScript type definitions
│   ├── web3.ts           # Web3 configuration
│   ├── Web3Provider.tsx   # Web3 context provider
│   └── mockData.ts       # Development mock data
└── public/                # Static assets
```

## Component Architecture

### Layout Components

- **RootLayout**: Wraps the entire app with Web3Provider
- **Header**: Navigation and wallet connection
- **Footer**: Site footer

### Dashboard Components

- **Dashboard Page**: Main dashboard container
- **OrderCard**: Individual order display card
- **OrderList**: Grid layout for orders with loading states
- **OrderFilters**: Search and filter controls
- **OrderStats**: Statistics display
- **CreateOrderModal**: Modal for creating new orders

## Data Flow

### Order Management

1. **Creation**: User fills form → Modal validates → Creates order object → (Future: Smart contract interaction)
2. **Display**: Orders fetched → Filtered by user preferences → Rendered in grid
3. **Updates**: Order status changes → (Future: Blockchain event listeners) → UI updates

### Web3 Integration

1. **Connection**: User clicks connect → Reown AppKit modal → Wallet connection
2. **State Management**: wagmi hooks provide connection state → React Query caches data
3. **Transactions**: (Future) User actions → viem transaction → Blockchain confirmation

## State Management

### Local State

- React `useState` for component-level state
- React `useMemo` for computed values and filtering

### Global State

- wagmi for wallet connection state
- React Query for server/blockchain data caching

## Type System

### Core Types

```typescript
Order: {
  id, orderNumber, buyer, seller,
  productName, productDescription,
  quantity, price, currency,
  status, createdAt, updatedAt,
  network, transactionHash, etc.
}

OrderStatus: 'pending' | 'confirmed' | 'processing' | ...
OrderFilters: { status, network, search, dateRange }
OrderStats: { total, pending, delivered, totalValue, ... }
```

## Future Architecture Considerations

### Smart Contracts

- Solidity contracts for on-chain order storage
- Event listeners for real-time updates
- Gas optimization strategies

### Backend (Optional)

- API for off-chain metadata
- IPFS integration for large files
- Indexing service for faster queries

### Testing

- Unit tests with Vitest or Jest
- Component tests with React Testing Library
- E2E tests with Playwright or Cypress

## Security Considerations

1. **Wallet Security**: Never store private keys
2. **Input Validation**: Validate all user inputs
3. **Transaction Safety**: Confirm all transactions before execution
4. **Network Verification**: Verify correct network before transactions
5. **Error Handling**: Graceful error handling for failed transactions

## Performance Optimizations

1. **Code Splitting**: Next.js automatic code splitting
2. **Image Optimization**: Next.js Image component
3. **Caching**: React Query for data caching
4. **Lazy Loading**: Dynamic imports for heavy components
5. **Memoization**: useMemo and useCallback where appropriate

## Accessibility

- Semantic HTML elements
- ARIA labels where needed
- Keyboard navigation support
- Screen reader compatibility
- Color contrast compliance

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Web3 wallet extensions required
- Mobile wallet support via WalletConnect

## Deployment

### Recommended Platforms

- **Vercel**: Optimal for Next.js applications
- **Netlify**: Alternative deployment option
- **Self-hosted**: Docker containerization

### Environment Variables

- `NEXT_PUBLIC_PROJECT_ID`: Required for Reown AppKit
- `NEXT_PUBLIC_CHAIN_ID`: Optional, defaults to mainnet
- `NEXT_PUBLIC_RPC_URL`: Optional, for custom RPC endpoints

## Development Workflow

1. Local development with `npm run dev`
2. Mock data for testing without blockchain
3. Test wallet connections with testnets
4. Deploy to staging environment
5. Production deployment

## Contributing

See [CONTRIBUTING.md](../CONTRIBUTING.md) for contribution guidelines.
