'use client'

import { useAccount, useWatchContractEvent } from 'wagmi'
import { useNotifications } from './NotificationContext'
import { NotificationType, getNotificationMessage, OrderStatus } from './notificationTypes'
import { OrderTrackingABI } from './abis/OrderTracking'


import { getContractAddress } from './contract'

// Use centralized contract address configuration
function getContractAddressForEvent(chainId: number | undefined): `0x${string}` | undefined {
  if (!chainId) return undefined
  const address = getContractAddress(chainId)
  return address ? (address as `0x${string}`) : undefined
}

export function useOrderEventListener() {
  const { address, chainId } = useAccount()
  const { addNotification } = useNotifications()

  const contractAddress = getContractAddressForEvent(chainId)

  // Listen to OrderCreated events
  useWatchContractEvent({
    address: contractAddress,
    abi: OrderTrackingABI,
    eventName: 'OrderCreated',
    onLogs(logs) {
      logs.forEach((log) => {
        const { orderId, buyer, seller, orderNumber } = log.args as {
          orderId: bigint
          buyer: string
          seller: string
          orderNumber: string
          price: bigint
          currency: string
        }

        // Only notify if user is involved (buyer or seller)
        if (address && (buyer.toLowerCase() === address.toLowerCase() || seller.toLowerCase() === address.toLowerCase())) {
          const isCustomer = buyer.toLowerCase() === address.toLowerCase()
          const { title, message } = getNotificationMessage(
            NotificationType.ORDER_CREATED,
            orderId.toString(),
            undefined,
            isCustomer
          )

          addNotification({
            type: NotificationType.ORDER_CREATED,
            title,
            message: `${message} - Order #${orderNumber}`,
            orderId: orderId.toString(),
            txHash: log.transactionHash,
            blockNumber: Number(log.blockNumber),
            isCustomer,
            customerAddress: buyer,
            merchantAddress: seller,
          })
        }
      })
    },
  })

  // Listen to OrderStatusUpdated events
  useWatchContractEvent({
    address: contractAddress,
    abi: OrderTrackingABI,
    eventName: 'OrderStatusUpdated',
    onLogs(logs) {
      logs.forEach((log) => {
        const { orderId, newStatus, updatedBy } = log.args as {
          orderId: bigint
          oldStatus: number
          newStatus: number
          updatedBy: string
        }

        // Only notify if user is involved
        if (address) {
          let notifType = NotificationType.ORDER_UPDATED
          
          // Determine specific notification type based on status
          switch (newStatus) {
            case OrderStatus.Confirmed:
              notifType = NotificationType.ORDER_CONFIRMED
              break
            case OrderStatus.Shipped:
              notifType = NotificationType.ORDER_SHIPPED
              break
            case OrderStatus.Delivered:
              notifType = NotificationType.ORDER_DELIVERED
              break
          }

          // Check if update is from customer or merchant
          const isCustomer = updatedBy.toLowerCase() !== address.toLowerCase()

          const { title, message } = getNotificationMessage(
            notifType,
            orderId.toString(),
            undefined,
            isCustomer
          )

          addNotification({
            type: notifType,
            title,
            message,
            orderId: orderId.toString(),
            txHash: log.transactionHash,
            blockNumber: Number(log.blockNumber),
            isCustomer,
          })
        }
      })
    },
  })

  // Listen to OrderCancelled events
  useWatchContractEvent({
    address: contractAddress,
    abi: OrderTrackingABI,
    eventName: 'OrderCancelled',
    onLogs(logs) {
      logs.forEach((log) => {
        const { orderId, cancelledBy, reason } = log.args as {
          orderId: bigint
          cancelledBy: string
          reason: string
        }

        if (address) {
          const { title, message } = getNotificationMessage(
            NotificationType.ORDER_CANCELLED,
            orderId.toString()
          )

          addNotification({
            type: NotificationType.ORDER_CANCELLED,
            title,
            message: `${message} - Reason: ${reason}`,
            orderId: orderId.toString(),
            txHash: log.transactionHash,
            blockNumber: Number(log.blockNumber),
            isCustomer: cancelledBy.toLowerCase() === address.toLowerCase(),
          })
        }
      })
    },
  })

  // Listen to TrackingNumberAdded events
  useWatchContractEvent({
    address: contractAddress,
    abi: OrderTrackingABI,
    eventName: 'TrackingNumberAdded',
    onLogs(logs) {
      logs.forEach((log) => {
        const { orderId, trackingNumber } = log.args as {
          orderId: bigint
          trackingNumber: string
        }

        if (address) {
          const { title, message } = getNotificationMessage(
            NotificationType.TRACKING_ADDED,
            orderId.toString(),
            trackingNumber,
            true
          )

          addNotification({
            type: NotificationType.TRACKING_ADDED,
            title,
            message,
            orderId: orderId.toString(),
            txHash: log.transactionHash,
            blockNumber: Number(log.blockNumber),
            isCustomer: true,
          })
        }
      })
    },
  })
}

// Hook to initialize event listeners
export function OrderEventListener() {
  useOrderEventListener()
  return null
}
