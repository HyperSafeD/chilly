'use client'

import { useNotifications } from '@/lib/NotificationContext'
import { useEffect, useState, useRef } from 'react'
import { Notification, NotificationType } from '@/lib/notificationTypes'

export function NotificationToast() {
  const { notifications } = useNotifications()
  const [visibleNotifications, setVisibleNotifications] = useState<Notification[]>([])
  const prevNotificationsRef = useRef<Notification[]>([])

  useEffect(() => {
    const unreadNotifications = notifications.filter(n => !n.read)
    const prevUnread = prevNotificationsRef.current.filter(n => !n.read)
    
    // Find truly new notifications by comparing IDs
    const newNotifications = unreadNotifications.filter(
      n => !prevUnread.some(prev => prev.id === n.id)
    )
    
    if (newNotifications.length > 0) {
      // Show max 3 new notifications
      const notificationsToShow = newNotifications.slice(-3)
      
      // Queue state update for next render
      Promise.resolve().then(() => {
        setVisibleNotifications(prev => [...prev, ...notificationsToShow])
        
        // Auto-hide after 5 seconds
        notificationsToShow.forEach(notification => {
          setTimeout(() => {
            setVisibleNotifications(prev => prev.filter(n => n.id !== notification.id))
          }, 5000)
        })
      })
    }
    
    prevNotificationsRef.current = notifications
  }, [notifications])

  const handleDismiss = (id: string) => {
    setVisibleNotifications(prev => prev.filter(n => n.id !== id))
  }

  const getToastColor = (type: NotificationType) => {
    switch (type) {
      case NotificationType.ORDER_CREATED:
        return 'bg-green-50 border-green-200 text-green-900 dark:bg-green-900/20 dark:border-green-800 dark:text-green-100'
      case NotificationType.ORDER_CONFIRMED:
        return 'bg-blue-50 border-blue-200 text-blue-900 dark:bg-blue-900/20 dark:border-blue-800 dark:text-blue-100'
      case NotificationType.ORDER_SHIPPED:
        return 'bg-purple-50 border-purple-200 text-purple-900 dark:bg-purple-900/20 dark:border-purple-800 dark:text-purple-100'
      case NotificationType.ORDER_DELIVERED:
        return 'bg-emerald-50 border-emerald-200 text-emerald-900 dark:bg-emerald-900/20 dark:border-emerald-800 dark:text-emerald-100'
      case NotificationType.ORDER_CANCELLED:
        return 'bg-red-50 border-red-200 text-red-900 dark:bg-red-900/20 dark:border-red-800 dark:text-red-100'
      case NotificationType.TRACKING_ADDED:
        return 'bg-indigo-50 border-indigo-200 text-indigo-900 dark:bg-indigo-900/20 dark:border-indigo-800 dark:text-indigo-100'
      default:
        return 'bg-gray-50 border-gray-200 text-gray-900 dark:bg-gray-900/20 dark:border-gray-800 dark:text-gray-100'
    }
  }

  if (visibleNotifications.length === 0) return null

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2 max-w-md">
      {visibleNotifications.map((notification) => (
        <div
          key={notification.id}
          className={`flex items-start gap-3 p-4 rounded-lg border shadow-lg animate-in slide-in-from-right duration-300 ${getToastColor(notification.type)}`}
        >
          {/* Icon */}
          <div className="shrink-0 mt-0.5">
            {notification.type === NotificationType.ORDER_CREATED && (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            )}
            {notification.type === NotificationType.ORDER_CONFIRMED && (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            )}
            {notification.type === NotificationType.ORDER_SHIPPED && (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
              </svg>
            )}
            {notification.type === NotificationType.ORDER_DELIVERED && (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            )}
            {notification.type === NotificationType.ORDER_CANCELLED && (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            )}
            {notification.type === NotificationType.TRACKING_ADDED && (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            )}
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium">{notification.title}</p>
            <p className="mt-1 text-sm opacity-90">{notification.message}</p>
            {notification.orderId && (
              <p className="mt-1 text-xs opacity-75">Order #{notification.orderId}</p>
            )}
          </div>

          {/* Close Button */}
          <button
            onClick={() => handleDismiss(notification.id)}
            className="shrink-0 opacity-70 hover:opacity-100 transition-opacity"
            aria-label="Dismiss"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      ))}
    </div>
  )
}
