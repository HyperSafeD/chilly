'use client'

import React from 'react'

const features = [
  {
    icon: '🔗',
    title: 'Web3 Integration',
    description: 'Seamlessly connect with MetaMask, WalletConnect, and other popular Web3 wallets for secure authentication.',
  },
  {
    icon: '📦',
    title: 'Immutable Records',
    description: 'All order data is stored on-chain, ensuring transparency and preventing tampering or unauthorized modifications.',
  },
  {
    icon: '⚡',
    title: 'Real-time Updates',
    description: 'Track your orders in real-time with instant blockchain confirmations and status updates.',
  },
  {
    icon: '🔐',
    title: 'Trustless Verification',
    description: 'No intermediaries needed. Verify order authenticity directly on the blockchain with cryptographic proof.',
  },
  {
    icon: '🌐',
    title: 'Multi-chain Support',
    description: 'Works across multiple blockchain networks including Ethereum, Polygon, Arbitrum, and more.',
  },
  {
    icon: '📊',
    title: 'Analytics Dashboard',
    description: 'Comprehensive dashboard to monitor all your orders, transactions, and blockchain activities.',
  },
]

export function Features() {
  return (
    <section id="features" className="py-20 sm:py-32 bg-white dark:bg-zinc-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">
            Powerful Features for Your Business
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400">
            Everything you need to manage and track orders on the blockchain with complete transparency and security.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl bg-zinc-50 dark:bg-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-all duration-300 border border-zinc-200 dark:border-zinc-700 hover:border-zinc-300 dark:hover:border-zinc-600"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mb-3">
                {feature.title}
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
