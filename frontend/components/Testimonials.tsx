'use client'

import React from 'react'

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'E-commerce Manager',
    company: 'TechStore',
    content: 'Chilly has revolutionized how we track orders. The blockchain transparency gives our customers complete confidence.',
    avatar: '👩‍💼',
  },
  {
    name: 'Michael Rodriguez',
    role: 'Supply Chain Director',
    company: 'Global Logistics Co.',
    content: 'The immutable records and real-time updates have eliminated disputes. This is the future of order management.',
    avatar: '👨‍💼',
  },
  {
    name: 'Emily Johnson',
    role: 'Founder',
    company: 'Artisan Marketplace',
    content: 'As a small business, we needed trust without intermediaries. Chilly delivers exactly that with beautiful simplicity.',
    avatar: '👩‍🎨',
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 sm:py-32 bg-zinc-50 dark:bg-zinc-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-zinc-900 dark:text-zinc-50 mb-4">
            Trusted by Businesses Worldwide
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400">
            See what our users are saying about Chilly
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 group"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="text-4xl transition-transform group-hover:scale-110">{testimonial.avatar}</div>
                <div>
                  <div className="font-semibold text-zinc-900 dark:text-zinc-50">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-zinc-600 dark:text-zinc-400">
                    {testimonial.role} at {testimonial.company}
                  </div>
                </div>
              </div>
              <p className="text-zinc-700 dark:text-zinc-300 italic leading-relaxed">
                "{testimonial.content}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

