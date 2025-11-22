import { createAppKit } from "@reown/appkit/react";
import { WagmiAdapter } from "@reown/appkit-adapter-wagmi";
import {
  mainnet,
  sepolia,
  polygon,
  arbitrum,
  baseSepolia,
  celoAlfajores,
} from "@reown/appkit/networks";
import { cookieStorage, createStorage } from "wagmi";
import { QueryClient } from "@tanstack/react-query";

// 0. Setup queryClient
export const queryClient = new QueryClient();

// 1. Get projectId from https://cloud.reown.com
export const projectId = process.env.NEXT_PUBLIC_PROJECT_ID || "";

// Use a default project ID for development if not provided
// In production, this should be set via environment variable
const defaultProjectId = "demo-project-id";

if (!projectId && process.env.NODE_ENV === "production") {
  console.warn(
    "Project ID is not defined. Please set NEXT_PUBLIC_PROJECT_ID in your environment variables."
  );
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
  projectId: projectId || defaultProjectId,
  networks: [mainnet, sepolia, polygon, arbitrum, baseSepolia, celoAlfajores],
});

export const config = wagmiAdapter.wagmiConfig;

// 4. Create modal
export const modal = createAppKit({
  adapters: [wagmiAdapter],
  projectId: projectId || defaultProjectId,
  networks: [mainnet, sepolia, polygon, arbitrum, baseSepolia, celoAlfajores],
  defaultNetwork: baseSepolia, // Default to Base Sepolia for testing
  metadata: metadata,
  features: {
    analytics: true, // Optional - defaults to your Cloud configuration
    email: true, // Enable email login
    socials: ["google", "x", "github", "discord", "apple"],
    emailShowWallets: true, // Show wallets on email login
  },
});
