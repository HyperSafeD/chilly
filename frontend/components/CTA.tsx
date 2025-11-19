'use client'

import React from 'react'

export function CTA() {
  return (
    <section className="py-20 sm:py-32 bg-linear-to-br from-orange-500 to-red-600">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg sm:text-xl text-white/90 mb-10">
            Join thousands of businesses already using Chilly to track and manage their orders on the blockchain.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <appkit-button />
            <a
              href="https://github.com/HyperSafeD/chilly"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-white text-zinc-900 font-medium hover:bg-zinc-100 transition-colors"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
