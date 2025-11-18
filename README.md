# 🌶️ Chilly - Decentralized Order Tracking DApp

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Next.js](https://img.shields.io/badge/Next.js-16.0-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)](https://www.typescriptlang.org/)

**Chilly** is an open-source decentralized application (dApp) built on Next.js that helps businesses and individuals keep track of orders on the blockchain. Built with modern Web3 technologies for transparency, immutability, and trustless order management.

## ✨ Features

- 🔗 **Web3 Integration** - Connect with MetaMask, WalletConnect, and other popular wallets via Reown AppKit
- 📦 **Order Tracking** - Create, update, and monitor orders on the blockchain with full transparency
- 🔐 **Decentralized Storage** - Immutable order records stored on-chain for trustless verification
- 📊 **Interactive Dashboard** - Comprehensive dashboard with order statistics, filtering, and real-time updates
- 🌐 **Multi-chain Support** - Works across Ethereum Mainnet, Sepolia, Polygon, and Arbitrum networks
- 🎨 **Modern UI** - Beautiful, responsive interface built with Tailwind CSS and dark mode support
- 🔍 **Advanced Filtering** - Filter orders by status, network, and search across all fields
- 📈 **Order Analytics** - Comprehensive analytics dashboard with charts and insights
- 📄 **Order Details** - Detailed view for each order with blockchain information
- 🔄 **Status Updates** - Update order status with real-time changes
- 📤 **Data Export** - Export orders to JSON or CSV format
- 🔗 **Block Explorer Integration** - Direct links to view transactions on Etherscan

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm, yarn, or pnpm
- A Web3 wallet (MetaMask recommended)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/HyperSafeD/chilly.git
cd chilly
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env.local` file in the root directory:

```env
# Get your Project ID from https://cloud.reown.com
NEXT_PUBLIC_PROJECT_ID=your_project_id_here

# Optional: Configure default network
NEXT_PUBLIC_CHAIN_ID=1
NEXT_PUBLIC_RPC_URL=https://mainnet.infura.io/v3/YOUR_PROJECT_ID
```

> **Note**: You need to create a free account at [Reown Cloud](https://cloud.reown.com) to get your Project ID for wallet connections.

4. Run the development server:

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

Required:

- `NEXT_PUBLIC_PROJECT_ID` - Your Reown AppKit Project ID from [cloud.reown.com](https://cloud.reown.com)

Optional:

- `NEXT_PUBLIC_CHAIN_ID` - Default chain ID (default: 1 for Ethereum Mainnet)
- `NEXT_PUBLIC_RPC_URL` - Custom RPC URL for blockchain interactions

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) - React framework with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) - Utility-first CSS framework with dark mode
- **Web3**:
  - [wagmi](https://wagmi.sh/) - React Hooks for Ethereum
  - [viem](https://viem.sh/) - TypeScript Ethereum library
  - [Reown AppKit](https://reown.com/appkit) - Wallet connection UI (formerly WalletConnect)
  - [@tanstack/react-query](https://tanstack.com/query) - Data fetching and caching
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
└── contracts/                  # Smart contracts (to be implemented)
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
