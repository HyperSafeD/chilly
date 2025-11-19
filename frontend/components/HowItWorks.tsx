'use client'

import React from 'react'

const steps = [
  {
    number: '01',
    title: 'Connect Your Wallet',
    description: 'Connect your Web3 wallet using MetaMask, WalletConnect, or any supported wallet provider.',
  },
  {
    number: '02',
    title: 'Create an Order',
    description: 'Fill in the order details and submit the transaction to the blockchain.',
  },
  {
    number: '03',
    title: 'Track in Real-time',
    description: 'Monitor your order status with real-time blockchain confirmations and updates.',
  },
  {
    number: '04',
    title: 'Verify & Complete',
    description: 'Verify order completion on-chain with cryptographic proof and transparency.',
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 sm:py-32 bg-zinc-50 dark:bg-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">
            How It Works
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400">
            Get started with Chilly in four simple steps and experience the future of order tracking.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-orange-500 to-red-600 text-white font-bold text-xl mb-6">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 mb-3">
                  {step.title}
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400">
                  {step.description}
                </p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-0.5 bg-gradient-to-r from-orange-500/50 to-red-600/50" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
