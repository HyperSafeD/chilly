# Chilly Setup Guide

## Quick Start

### 1. Get Your Reown Project ID

Before running the app, you need a Reown (WalletConnect) Project ID:

1. Visit [https://cloud.reown.com](https://cloud.reown.com)
2. Sign in or create a free account
3. Click "Create New Project"
4. Give your project a name (e.g., "Chilly DApp")
5. Copy the Project ID

### 2. Configure Environment Variables

Create a `.env.local` file in the root directory:

```bash
NEXT_PUBLIC_PROJECT_ID=your_project_id_here
```

Replace `your_project_id_here` with the Project ID you copied from Reown Cloud.

### 3. Install and Run

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

The app will be available at `http://localhost:3000` (or next available port if 3000 is busy).

## What's Been Implemented

### ✅ Reown AppKit Integration

The app now includes full Reown AppKit (WalletConnect) integration with:

- **Multiple wallet support**: MetaMask, Coinbase Wallet, Trust Wallet, Rainbow, and 300+ others
- **Email login**: Users can authenticate with just their email (no wallet required)
- **Social logins**: Google, X (Twitter), GitHub, Discord, and Apple
- **Multi-chain support**: Ethereum Mainnet, Sepolia Testnet, Polygon, and Arbitrum

### ✅ Landing Page Components

Six professional landing page sections:

1. **Header** (`components/Header.tsx`)
   - Fixed navigation bar
   - Reown wallet connect button (`<appkit-button />`)
   - Responsive design with mobile menu support

2. **Hero** (`components/Hero.tsx`)
   - Eye-catching gradient headline
   - Animated "live" badge
   - Dynamic CTA based on wallet connection status
   - Stats section (orders tracked, uptime, support)

3. **Features** (`components/Features.tsx`)
   - 6 feature cards with icons
   - Hover effects and animations
   - Highlights key Web3 capabilities

4. **How It Works** (`components/HowItWorks.tsx`)
   - 4-step process flow
   - Visual progression with connecting lines
   - Clear, simple explanations

5. **CTA** (`components/CTA.tsx`)
   - Bold call-to-action with gradient background
   - Primary and secondary actions
   - Links to GitHub

6. **Footer** (`components/Footer.tsx`)
   - Brand information
   - Navigation links
   - Social media icons
   - Copyright notice

### ✅ Web3 Configuration

- **`lib/web3.ts`**: Reown AppKit configuration with wagmi adapter
- **`lib/Web3Provider.tsx`**: React context provider wrapping the app
- **`app/layout.tsx`**: Updated to include Web3Provider

### ✅ Styling

- Using Tailwind CSS v4
- Custom CSS variables for theming
- Dark mode support
- Custom scrollbar styling
- Responsive design for all screen sizes

## File Structure

```
chilly/
├── app/
│   ├── layout.tsx          # ✅ Updated with Web3Provider
│   ├── page.tsx            # ✅ New landing page
│   └── globals.css         # ✅ Updated Tailwind config
├── components/
│   ├── Header.tsx          # ✅ New
│   ├── Hero.tsx            # ✅ New
│   ├── Features.tsx        # ✅ New
│   ├── HowItWorks.tsx      # ✅ New
│   ├── CTA.tsx             # ✅ New
│   └── Footer.tsx          # ✅ New
├── lib/
│   ├── web3.ts             # ✅ New - Reown configuration
│   └── Web3Provider.tsx    # ✅ New - Web3 context
├── .env.local              # ⚠️ You need to create this
└── .env.example            # ✅ Template provided
```

## Testing Wallet Connection

Once the app is running:

1. Click the "Connect" button in the header
2. Choose your preferred method:
   - **Wallet**: Scan QR code or select from available wallets
   - **Email**: Enter your email for passwordless authentication
   - **Social**: Connect with Google, X, GitHub, Discord, or Apple

3. After connecting, you'll see:
   - Your wallet address/email in the header
   - Updated Hero section with "Dashboard" and "Create Order" buttons
   - Account management options

## Customization

### Change Networks

Edit `lib/web3.ts` to modify supported networks:

```typescript
import { mainnet, sepolia, polygon, arbitrum, optimism } from '@reown/appkit/networks'

export const wagmiAdapter = new WagmiAdapter({
  // ...
  networks: [mainnet, sepolia, polygon, arbitrum, optimism],
})
```

### Update App Metadata

Edit `lib/web3.ts` to change app information:

```typescript
const metadata = {
  name: 'Your App Name',
  description: 'Your app description',
  url: 'https://your-domain.com',
  icons: ['https://your-icon-url.com/icon.png']
}
```

### Modify Landing Page

Each section is a separate component in `components/`. Edit them to customize:
- Text and copy
- Colors and styling
- Layout and structure
- Add or remove sections

## Next Steps

Now that you have the landing page and wallet integration set up, you can:

1. **Build order tracking features**:
   - Create order form
   - Order dashboard
   - Order detail views
   - Real-time status updates

2. **Add smart contract integration**:
   - Deploy order tracking contract
   - Connect contract methods to UI
   - Handle transactions

3. **Implement backend**:
   - API routes for off-chain data
   - Database for metadata
   - IPFS for document storage

4. **Add authentication logic**:
   - Protect routes based on wallet connection
   - User profiles and settings
   - Permission management

## Troubleshooting

### Port Already in Use

If port 3000 is busy, Next.js will automatically use the next available port (3001, 3002, etc.).

### Wallet Not Connecting

1. Make sure you've set `NEXT_PUBLIC_PROJECT_ID` in `.env.local`
2. Check that your Reown project is active at cloud.reown.com
3. Try clearing browser cache and reconnecting

### Build Errors

If you see TypeScript errors:
```bash
npm run build
```

This will show detailed error messages.

### Styling Issues

Make sure Tailwind CSS is working:
1. Check that `postcss.config.mjs` exists
2. Verify `@import "tailwindcss"` is in `app/globals.css`
3. Restart the dev server after CSS changes

## Resources

- [Reown AppKit Documentation](https://docs.reown.com/appkit/overview)
- [Wagmi Documentation](https://wagmi.sh)
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS v4 Documentation](https://tailwindcss.com/docs)

## Support

- Open an issue: [GitHub Issues](https://github.com/Uchechukwu-Ekezie/chilly/issues)
- Check documentation: See links above
- Community support: Reach out to the maintainers

---

Happy building! 🌶️
