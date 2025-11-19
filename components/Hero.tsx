"use client";

import React from "react";
import { useAccount } from "wagmi";

export function Hero() {
  const { isConnected } = useAccount();

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-zinc-50 to-white dark:from-black dark:to-zinc-900 pt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-100 dark:bg-zinc-800 mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
              Powered by Web3 & Blockchain
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mb-6">
            Decentralized Order
            <br />
            <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
              Tracking Made Easy
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 mb-12 max-w-2xl mx-auto">
            Track and manage your orders on the blockchain with complete
            transparency, immutability, and trustless verification. No
            intermediaries, just pure decentralization.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {!isConnected ? (
              <>
                <appkit-button />
                <a
                  href="#features"
                  className="inline-flex items-center justify-center px-8 py-3 rounded-full border border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-zinc-50 font-medium hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors"
                >
                  Learn More
                </a>
              </>
            ) : (
              <>
                <a
                  href="#dashboard"
                  className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-zinc-900 dark:bg-zinc-50 text-white dark:text-zinc-900 font-medium hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors"
                >
                  Go to Dashboard
                </a>
                <a
                  href="#create-order"
                  className="inline-flex items-center justify-center px-8 py-3 rounded-full border border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-zinc-50 font-medium hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors"
                >
                  Create Order
                </a>
              </>
            )}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-20 pt-12 border-t border-zinc-200 dark:border-zinc-800">
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">
                10K+
              </div>
              <div className="text-sm text-zinc-600 dark:text-zinc-400">
                Orders Tracked
              </div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">
                99.9%
              </div>
              <div className="text-sm text-zinc-600 dark:text-zinc-400">
                Uptime
              </div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">
                24/7
              </div>
              <div className="text-sm text-zinc-600 dark:text-zinc-400">
                Support
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div
          className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6"
          aria-hidden="true"
        >
          <div
            className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-orange-400 to-red-600 opacity-20"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
      </div>
    </section>
  );
}
