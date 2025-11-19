"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useAccount } from "wagmi";

interface NavItem {
  name: string;
  href: string;
  icon: string;
  badge?: number;
}

export function Sidebar() {
  const pathname = usePathname();
  const { isConnected, address } = useAccount();

  const navItems: NavItem[] = [
    { name: "Dashboard", href: "/dashboard", icon: "📊" },
    { name: "Analytics", href: "/analytics", icon: "📈" },
    { name: "My Orders", href: "/dashboard", icon: "📦" },
    { name: "Create Order", href: "/dashboard?create=true", icon: "➕" },
  ];

  const isActive = (href: string) => {
    if (href === "/dashboard") {
      return pathname === "/dashboard";
    }
    return pathname?.startsWith(href);
  };

  return (
    <aside className="fixed left-0 top-0 h-full w-64 bg-zinc-900 dark:bg-black border-r border-zinc-800 dark:border-zinc-800 z-40 hidden lg:block">
      <div className="flex flex-col h-full">
        {/* Logo */}
        <div className="p-6 border-b border-zinc-800">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl">🌶️</span>
            <span className="text-xl font-bold text-white">Chilly</span>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                isActive(item.href)
                  ? "bg-orange-600 text-white"
                  : "text-zinc-400 hover:bg-zinc-800 hover:text-white"
              }`}
            >
              <span className="text-xl">{item.icon}</span>
              <span className="font-medium">{item.name}</span>
              {item.badge && item.badge > 0 && (
                <span className="ml-auto bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                  {item.badge}
                </span>
              )}
            </Link>
          ))}
        </nav>

        {/* Wallet Info */}
        {isConnected && address && (
          <div className="p-4 border-t border-zinc-800">
            <div className="px-4 py-3 rounded-lg bg-zinc-800">
              <p className="text-xs text-zinc-400 mb-1">Connected Wallet</p>
              <p className="text-sm font-mono text-white truncate">
                {address.slice(0, 6)}...{address.slice(-4)}
              </p>
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="p-4 border-t border-zinc-800">
          <Link
            href="/"
            className="flex items-center gap-3 px-4 py-3 rounded-lg text-zinc-400 hover:bg-zinc-800 hover:text-white transition-colors"
          >
            <span>🏠</span>
            <span className="font-medium">Home</span>
          </Link>
        </div>
      </div>
    </aside>
  );
}
