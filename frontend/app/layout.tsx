import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Web3Provider } from "@/lib/Web3Provider";
import { NotificationProvider } from "@/lib/NotificationContext";
import { OrderEventListener } from "@/lib/orderEventListener";
import { NotificationToast } from "@/components/notifications/NotificationToast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Chilly - Decentralized Order Tracking DApp",
  description: "Track and manage orders on the blockchain with Chilly",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Web3Provider>
          <NotificationProvider>
            <OrderEventListener />
            {children}
            <NotificationToast />
          </NotificationProvider>
        </Web3Provider>
      </body>
    </html>
  );
}
