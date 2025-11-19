'use client'

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react'
import { useAccount } from 'wagmi'
import type { 
  Notification, 
  NotificationContextType
} from './notificationTypes'

const NotificationContext = createContext<NotificationContextType | undefined>(undefined)

const STORAGE_KEY = 'chilly_notifications'
const MAX_NOTIFICATIONS = 50

export function NotificationProvider({ children }: { children: React.ReactNode }) {
  const { address } = useAccount()
  
  // Initialize state with localStorage data
  const [notifications, setNotifications] = useState<Notification[]>(() => {
    if (typeof window === 'undefined') return []
    
    const stored = localStorage.getItem(`${STORAGE_KEY}_${address}`)
    if (stored) {
      try {
        return JSON.parse(stored)
      } catch (error) {
        console.error('Failed to parse stored notifications:', error)
        return []
      }
    }
    return []
  })

  // Save notifications to localStorage whenever they change
  useEffect(() => {
    if (address && typeof window !== 'undefined') {
      localStorage.setItem(`${STORAGE_KEY}_${address}`, JSON.stringify(notifications))
    }
  }, [notifications, address])

  const addNotification = useCallback((
    notification: Omit<Notification, 'id' | 'timestamp' | 'read'>
  ) => {
    const newNotification: Notification = {
      ...notification,
      id: `${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      timestamp: Date.now(),
      read: false,
    }

    setNotifications((prev) => {
      const updated = [newNotification, ...prev]
      // Keep only the latest MAX_NOTIFICATIONS
      return updated.slice(0, MAX_NOTIFICATIONS)
    })

    // Show browser notification if permission granted
    if (typeof window !== 'undefined' && 'Notification' in window && Notification.permission === 'granted') {
      new Notification(newNotification.title, {
        body: newNotification.message,
        icon: '/favicon.ico',
        tag: newNotification.id,
      })
    }
  }, [])

  const markAsRead = useCallback((id: string) => {
    setNotifications((prev) =>
      prev.map((notif) =>
        notif.id === id ? { ...notif, read: true } : notif
      )
    )
  }, [])

  const markAllAsRead = useCallback(() => {
    setNotifications((prev) =>
      prev.map((notif) => ({ ...notif, read: true }))
    )
  }, [])

  const clearNotification = useCallback((id: string) => {
    setNotifications((prev) => prev.filter((notif) => notif.id !== id))
  }, [])

  const clearAllNotifications = useCallback(() => {
    setNotifications([])
  }, [])

  const unreadCount = notifications.filter((n) => !n.read).length

  const value: NotificationContextType = {
    notifications,
    unreadCount,
    addNotification,
    markAsRead,
    markAllAsRead,
    clearNotification,
    clearAllNotifications,
  }

  return (
    <NotificationContext.Provider value={value}>
      {children}
    </NotificationContext.Provider>
  )
}

export function useNotifications() {
  const context = useContext(NotificationContext)
  if (context === undefined) {
    throw new Error('useNotifications must be used within a NotificationProvider')
  }
  return context
}

// Request browser notification permission
export function requestNotificationPermission() {
  if (typeof window !== 'undefined' && 'Notification' in window && Notification.permission === 'default') {
    Notification.requestPermission()
  }
}
