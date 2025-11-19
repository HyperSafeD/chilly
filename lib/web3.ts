import { createAppKit } from "@reown/appkit/react";
import { WagmiAdapter } from "@reown/appkit-adapter-wagmi";
import { mainnet, sepolia, polygon, arbitrum } from "@reown/appkit/networks";
import { cookieStorage, createStorage } from "wagmi";
import { QueryClient } from "@tanstack/react-query";

// 0. Setup queryClient
export const queryClient = new QueryClient();

// 1. Get projectId from https://cloud.reown.com
export const projectId = process.env.NEXT_PUBLIC_PROJECT_ID || "";

if (!projectId) {
  throw new Error("Project ID is not defined");
}

// 2. Create wagmiConfig
const metadata = {
  name: "Chilly - Decentralized Order Tracking",
  description: "Track and manage orders on the blockchain with Chilly",
  url: "https://chilly-app.vercel.app", // origin must match your domain & subdomain
  icons: ["https://avatars.githubusercontent.com/u/179229932"],
};

// 3. Set up the Wagmi Adapter (Config)
export const wagmiAdapter = new WagmiAdapter({
  storage: createStorage({
    storage: cookieStorage,
  }),
  ssr: true,
  projectId,
  networks: [mainnet, sepolia, polygon, arbitrum],
});

export const config = wagmiAdapter.wagmiConfig;

// 4. Create modal
export const modal = createAppKit({
  adapters: [wagmiAdapter],
  projectId,
  networks: [mainnet, sepolia, polygon, arbitrum],
  defaultNetwork: mainnet,
  metadata: metadata,
  features: {
    analytics: true, // Optional - defaults to your Cloud configuration
    email: true, // Enable email login
    socials: ["google", "x", "github", "discord", "apple"],
    emailShowWallets: true, // Show wallets on email login
  },
});
