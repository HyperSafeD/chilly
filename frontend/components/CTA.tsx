'use client'

import React from 'react'

export function CTA() {
  return (
    <section className="relative py-20 sm:py-32 bg-gradient-to-br from-orange-500 via-orange-600 to-red-600 dark:from-orange-600 dark:via-red-600 dark:to-red-700 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 dark:bg-white/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 dark:bg-white/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
              className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-white text-zinc-900 font-medium hover:bg-zinc-100 transition-all hover:scale-105 shadow-lg"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
