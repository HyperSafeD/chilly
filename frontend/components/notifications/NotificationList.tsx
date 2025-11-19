'use client'

import { useNotifications } from '@/lib/NotificationContext'
import { NotificationType } from '@/lib/notificationTypes'
import { useRouter } from 'next/navigation'

interface NotificationListProps {
  onClose?: () => void
}

export function NotificationList({ onClose }: NotificationListProps) {
  const { notifications, markAsRead, clearNotification } = useNotifications()
  const router = useRouter()

  const handleNotificationClick = (notificationId: string, orderId?: string) => {
    markAsRead(notificationId)
    if (orderId) {
      router.push(`/dashboard/orders/${orderId}`)
      onClose?.()
    }
  }

  const getNotificationIcon = (type: NotificationType) => {
    switch (type) {
      case NotificationType.ORDER_CREATED:
        return (
          <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
        )
      case NotificationType.ORDER_CONFIRMED:
        return (
          <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        )
      case NotificationType.ORDER_SHIPPED:
        return (
          <svg className="w-5 h-5 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
          </svg>
        )
      case NotificationType.ORDER_DELIVERED:
        return (
          <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        )
      case NotificationType.ORDER_CANCELLED:
        return (
          <svg className="w-5 h-5 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        )
      case NotificationType.TRACKING_ADDED:
        return (
          <svg className="w-5 h-5 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
          </svg>
        )
      default:
        return (
          <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        )
    }
  }

  const formatTimestamp = (timestamp: number) => {
    const now = Date.now()
    const diff = now - timestamp
    const minutes = Math.floor(diff / 60000)
    const hours = Math.floor(diff / 3600000)
    const days = Math.floor(diff / 86400000)

    if (minutes < 1) return 'Just now'
    if (minutes < 60) return `${minutes}m ago`
    if (hours < 24) return `${hours}h ago`
    if (days < 7) return `${days}d ago`
    return new Date(timestamp).toLocaleDateString()
  }

  if (notifications.length === 0) {
    return (
      <div className="p-8 text-center">
        <svg
          className="mx-auto h-12 w-12 text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
          />
        </svg>
        <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
          No notifications yet
        </p>
        <p className="mt-1 text-xs text-gray-400 dark:text-gray-500">
          We&apos;ll notify you when something happens
        </p>
      </div>
    )
  }

  return (
    <div className="max-h-96 overflow-y-auto">
      {notifications.map((notification) => (
        <div
          key={notification.id}
          onClick={() => handleNotificationClick(notification.id, notification.orderId)}
          className={`p-4 border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer transition-colors ${
            !notification.read ? 'bg-blue-50 dark:bg-blue-900/10' : ''
          }`}
        >
          <div className="flex gap-3">
            {/* Icon */}
            <div className="shrink-0 mt-0.5">
              {getNotificationIcon(notification.type)}
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-2">
                <p className="text-sm font-medium text-gray-900 dark:text-white">
                  {notification.title}
                </p>
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    clearNotification(notification.id)
                  }}
                  className="shrink-0 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                  aria-label="Dismiss notification"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                {notification.message}
              </p>
              <div className="mt-2 flex items-center gap-4 text-xs text-gray-500 dark:text-gray-500">
                <span>{formatTimestamp(notification.timestamp)}</span>
                {notification.orderId && (
                  <span className="text-blue-600 dark:text-blue-400">
                    Order #{notification.orderId}
                  </span>
                )}
                {!notification.read && (
                  <span className="inline-flex items-center gap-1">
                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                    New
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
