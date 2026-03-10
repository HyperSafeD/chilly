# 🌶️ Chilly - Decentralized Order Tracking DApp

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Next.js](https://img.shields.io/badge/Next.js-16.0-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)](https://www.typescriptlang.org/)
[![Solidity](https://img.shields.io/badge/Solidity-0.8.20-blue)](https://soliditylang.org/)

**Chilly** is a comprehensive decentralized application (dApp) with smart contracts for on-chain order tracking and a modern Next.js frontend. Built with transparency, immutability, and Web3 integration.

## 📁 Project Structure

```
chilly/
├── contracts/              # Smart Contract Layer (Hardhat)
│   ├── contracts/          # Solidity contracts
│   ├── scripts/            # Deployment scripts
│   ├── test/               # Contract tests
│   └── README.md           # Contract documentation
│
└── frontend/               # Frontend Layer (Next.js)
    ├── app/                # Next.js App Router pages
    │   ├── dashboard/      # Dashboard & order management
    │   ├── analytics/      # Analytics page
    │   └── ...
    ├── components/         # React components
    ├── lib/                # Utilities & Web3 config
    └── public/             # Static assets
```

## ✨ Features

### Smart Contract Features
- 📦 **Order Creation** - Create immutable order records on-chain
- 🔄 **Status Updates** - Track order lifecycle (Pending → Confirmed → Processing → Shipped → Delivered)
- 🔗 **Tracking Numbers** - Add and update shipping tracking information
- 📝 **Order History** - Complete audit trail with timestamps and actors
- ❌ **Order Cancellation** - Cancel orders before delivery with reason tracking
- 🔐 **Access Control** - Only order participants can update orders
- 📊 **Batch Operations** - Efficient queries for multiple orders
- 🔔 **Events** - Real-time blockchain events for all state changes

### Frontend Features
- 🔗 **Web3 Integration** - Reown AppKit with 300+ wallet support (MetaMask, WalletConnect, etc.)
- 📧 **Email Login** - Passwordless authentication without a wallet
- 🌐 **Social Logins** - Google, X, GitHub, Discord, Apple
- 📦 **Order Tracking** - Create, update, and monitor orders with full transparency
- 📊 **Interactive Dashboard** - Comprehensive dashboard with order statistics, filtering, and real-time updates
- 🌍 **Multi-chain Support** - Ethereum Mainnet, Sepolia, Polygon, Arbitrum
- 🎨 **Modern UI** - Beautiful, responsive interface with Tailwind CSS and dark mode
- 🔍 **Advanced Filtering** - Filter by status, network, search across all fields
- 📈 **Order Analytics** - Analytics dashboard with charts and insights
- 📄 **Order Details** - Detailed view for each order with blockchain information
- 📤 **Data Export** - Export orders to JSON or CSV format
- 🔗 **Block Explorer Integration** - Direct links to view transactions on Etherscan
- ⛓️ **Smart Contract Integration** - Fully functional Solidity contract for on-chain order management
- 💰 **Escrow System** - Secure payment handling with automatic release on delivery
- 🔐 **Dispute Resolution** - Built-in dispute mechanism for order conflicts

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm, yarn, or pnpm
- A Web3 wallet (MetaMask recommended) or email for login
- Reown Project ID from [cloud.reown.com](https://cloud.reown.com)
- Private key (for contract deployment to testnets/mainnet)

### 1. Smart Contracts Setup

```bash
cd contracts
npm install

# Compile contracts
npm run compile

# Run tests
npm test

# Deploy to testnet
npm run deploy:sepolia
```

**Note:** Smart contract tests are written in TypeScript and cover constructor, order creation, and order confirmation functionality. See [contracts/test.md](./contracts/test.md) for a comprehensive list of test coverage.

See [contracts/README.md](./contracts/README.md) for detailed documentation.

### 2. Frontend Setup

```bash
cd frontend
npm install
```

Create `.env.local` in the frontend folder:

```env
# Get your Project ID from https://cloud.reown.com
NEXT_PUBLIC_PROJECT_ID=your_project_id_here

# Contract addresses (after deployment)
NEXT_PUBLIC_CONTRACT_ADDRESS_SEPOLIA=deployed_contract_address
NEXT_PUBLIC_CONTRACT_ADDRESS_POLYGON=deployed_contract_address
NEXT_PUBLIC_CONTRACT_ADDRESS_ARBITRUM=deployed_contract_address

# Optional: Configure default network
NEXT_PUBLIC_CHAIN_ID=1
```

> **Note**: Create a free account at [Reown Cloud](https://cloud.reown.com) to get your Project ID.

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) and connect your wallet!

```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

6. Connect your wallet using the connect button in the header

7. Navigate to the Dashboard to start creating and managing orders

## 📖 Usage

### Dashboard

The dashboard is the main interface for managing orders:

- **View Orders**: See all your orders in a grid layout with key information
- **Filter Orders**: Filter by status (pending, confirmed, processing, shipped, delivered, cancelled, disputed) or network
- **Search**: Search across order numbers, product names, and addresses
- **Create Orders**: Click "Create Order" to add new orders to the blockchain
- **View Statistics**: See real-time statistics about your orders

### Order Statuses

- **Pending**: Order created but not yet confirmed
- **Confirmed**: Order confirmed by seller
- **Processing**: Order being prepared
- **Shipped**: Order has been shipped
- **Delivered**: Order successfully delivered
- **Cancelled**: Order cancelled
- **Disputed**: Order under dispute

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Environment Variables

**Frontend (.env.local):**

- `NEXT_PUBLIC_PROJECT_ID` - Your Reown AppKit Project ID from [cloud.reown.com](https://cloud.reown.com) (Required)
- `NEXT_PUBLIC_CHAIN_ID` - Default chain ID (Optional, default: 1 for Ethereum Mainnet)
- `NEXT_PUBLIC_RPC_URL` - Custom RPC URL for blockchain interactions (Optional)

**Smart Contracts (contracts/.env):**

- `PRIVATE_KEY` - Deployer private key (Required for deployment)
- `SEPOLIA_RPC_URL` - Sepolia testnet RPC URL
- `MAINNET_RPC_URL` - Mainnet RPC URL
- `ETHERSCAN_API_KEY` - Etherscan API key for contract verification
- See [contracts/README.md](contracts/README.md) for full configuration

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) - React framework with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) - Utility-first CSS framework with dark mode
- **Web3**:
  - [wagmi](https://wagmi.sh/) - React Hooks for Ethereum
  - [viem](https://viem.sh/) - TypeScript Ethereum library
  - [Reown AppKit](https://reown.com/appkit) - Wallet connection UI (formerly WalletConnect)
  - [@tanstack/react-query](https://tanstack.com/query) - Data fetching and caching
- **Smart Contracts**:
  - [Solidity](https://soliditylang.org/) ^0.8.20 - Smart contract language
  - [Hardhat](https://hardhat.org/) - Development environment for Ethereum
- **Utilities**:
  - [date-fns](https://date-fns.org/) - Date formatting utilities

## 📁 Project Structure

```
chilly/
├── app/                        # Next.js App Router pages
│   ├── dashboard/              # Dashboard pages
│   │   ├── orders/            # Order detail pages
│   │   │   └── [id]/          # Dynamic order detail route
│   │   └── page.tsx           # Dashboard with order management
│   ├── analytics/              # Analytics page
│   │   └── page.tsx           # Analytics dashboard
│   ├── layout.tsx             # Root layout with Web3 provider
│   ├── page.tsx               # Home/landing page
│   └── globals.css            # Global styles
├── components/                 # React components
│   ├── dashboard/             # Dashboard-specific components
│   │   ├── OrderCard.tsx     # Individual order card component
│   │   ├── OrderList.tsx      # List of orders with loading states
│   │   ├── OrderFilters.tsx   # Filtering and search components
│   │   ├── OrderStats.tsx     # Statistics display component
│   │   ├── OrderStatusUpdate.tsx # Status update component
│   │   └── CreateOrderModal.tsx # Modal for creating new orders
│   ├── Header.tsx             # Navigation header
│   ├── Hero.tsx               # Hero section
│   ├── Features.tsx           # Features showcase
│   ├── HowItWorks.tsx         # How it works section
│   ├── CTA.tsx                # Call to action
│   └── Footer.tsx             # Footer component
├── lib/                        # Utilities and configurations
│   ├── types.ts               # TypeScript type definitions
│   ├── web3.ts                # Web3 configuration (wagmi, Reown)
│   ├── Web3Provider.tsx       # Web3 context provider
│   ├── mockData.ts            # Mock data for development
│   └── exportUtils.ts         # Export utilities (JSON, CSV)
├── public/                     # Static assets
└── contracts/                  # Smart contracts
    ├── OrderTracking.sol      # Main order tracking contract
    ├── hardhat.config.js      # Hardhat configuration
    ├── scripts/               # Deployment scripts
    │   └── deploy.js         # Contract deployment script
    └── README.md              # Contract documentation
```

## 🤝 Contributing

We welcome contributions! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🔗 Links

- **GitHub**: [https://github.com/HyperSafeD/chilly](https://github.com/HyperSafeD/chilly)
- **Issues**: [https://github.com/HyperSafeD/chilly/issues](https://github.com/HyperSafeD/chilly/issues)

## 👥 Maintainers

- [HyperSafeD](https://github.com/HyperSafeD)

## 🙏 Acknowledgments

- Built with ❤️ by the open-source community
- Special thanks to all contributors

---

**Made with Next.js and Web3** 🌶️
