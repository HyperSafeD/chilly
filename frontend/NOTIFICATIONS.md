# Notification System Documentation

## Overview

The Chilly dApp notification system provides real-time notifications for both customers and merchants participating in orders on the blockchain. The system listens to smart contract events and displays notifications through multiple UI components.

## Architecture

### Components

1. **Notification Context** (`frontend/lib/NotificationContext.tsx`)
   - Global state management using React Context
   - Persists notifications to localStorage per wallet address
   - Provides hooks for managing notifications

2. **Event Listener** (`frontend/lib/orderEventListener.tsx`)
   - Listens to OrderTracking contract events using wagmi
   - Automatically adds notifications when events are emitted
   - Determines whether user is customer or merchant

3. **UI Components**
   - `NotificationBell.tsx` - Bell icon in header with unread badge
   - `NotificationList.tsx` - Dropdown list of all notifications
   - `NotificationToast.tsx` - Pop-up toasts for new notifications

### Event Listeners

The system listens to these smart contract events:

#### OrderCreated
- Triggered when a new order is created
- Notifies both customer (buyer) and merchant (seller)
- Shows order number and parties involved

#### OrderStatusUpdated  
- Triggered when order status changes
- Determines notification type based on new status:
  - `Confirmed` → ORDER_CONFIRMED
  - `Shipped` → ORDER_SHIPPED
  - `Delivered` → ORDER_DELIVERED
  - Other statuses → ORDER_UPDATED

#### OrderCancelled
- Triggered when an order is cancelled
- Shows cancellation reason
- Identifies who cancelled the order

#### TrackingNumberAdded
- Triggered when tracking info is added
- Shows tracking number to customer

## Notification Types

```typescript
enum NotificationType {
  ORDER_CREATED      // New order created
  ORDER_CONFIRMED    // Order confirmed by merchant
  ORDER_SHIPPED      // Order shipped
  ORDER_DELIVERED    // Order delivered
  ORDER_CANCELLED    // Order cancelled
  TRACKING_ADDED     // Tracking number added
  ORDER_UPDATED      // Generic status update
  SUCCESS            // Generic success
  ERROR              // Generic error
  INFO               // Generic info
}
```

## Data Structure

```typescript
interface Notification {
  id: string                // Unique identifier
  type: NotificationType    // Notification category
  title: string             // Display title
  message: string           // Display message
  orderId?: string          // Related order ID
  orderNumber?: string      // Human-readable order number
  timestamp: number         // Unix timestamp
  read: boolean             // Read status
  txHash?: string           // Transaction hash
  blockNumber?: number      // Block number
  isCustomer: boolean       // true = customer, false = merchant
  customerAddress?: string  // Customer wallet address
  merchantAddress?: string  // Merchant wallet address
}
```

## Integration

### App Layout Integration

The notification system is integrated in `app/layout.tsx`:

```tsx
<Web3Provider>
  <NotificationProvider>
    <OrderEventListener />
    {children}
    <NotificationToast />
  </NotificationProvider>
</Web3Provider>
```

### Header Integration

The notification bell appears in the header when user is connected:

```tsx
{isConnected && <NotificationBell />}
```

## Usage

### Adding Custom Notifications

```typescript
import { useNotifications } from '@/lib/NotificationContext'

function MyComponent() {
  const { addNotification } = useNotifications()
  
  const handleAction = () => {
    addNotification({
      type: NotificationType.SUCCESS,
      title: 'Action Complete',
      message: 'Your action was successful',
      isCustomer: true,
    })
  }
}
```

### Managing Notifications

```typescript
const { 
  notifications,      // Array of all notifications
  unreadCount,        // Count of unread notifications
  markAsRead,         // Mark single notification as read
  markAllAsRead,      // Mark all as read
  clearNotification,  // Remove single notification
  clearAllNotifications // Remove all notifications
} = useNotifications()
```

## Browser Notifications

The system supports native browser notifications when permission is granted:

- Auto-requests permission on first notification
- Shows OS-level notifications for new order events
- Respects user's browser notification settings

## Storage

Notifications are persisted to localStorage with keys formatted as:
```
chilly_notifications_{walletAddress}
```

Each wallet address has its own notification history, limited to 50 most recent notifications.

## Contract Addresses

Set these environment variables for each network:

```env
NEXT_PUBLIC_CONTRACT_ADDRESS_SEPOLIA=0x...
NEXT_PUBLIC_CONTRACT_ADDRESS_POLYGON=0x...
NEXT_PUBLIC_CONTRACT_ADDRESS_ARBITRUM=0x...
```

## Features

### For Customers
- Notified when order is created
- Notified when merchant confirms order
- Notified when order is shipped
- Notified when tracking number is added
- Notified when order is delivered
- Notified if order is cancelled

### For Merchants
- Notified when new order is received
- Notified when customer updates order
- Notified if customer cancels order

### Both Parties
- Real-time event listening via WebSocket
- Toast notifications for immediate awareness
- Persistent notification list in header
- Click notification to view order details
- Unread badge on notification bell
- Mark as read functionality
- Clear individual or all notifications

## Styling

Notifications use color-coded styling:
- Green: Order Created, Delivered
- Blue: Order Confirmed
- Purple: Order Shipped  
- Red: Order Cancelled
- Indigo: Tracking Added

Dark mode is fully supported across all components.

## Performance

- Event listeners only active when wallet is connected
- Notifications limited to 50 per address
- Automatic cleanup of old notifications
- Efficient localStorage access patterns
- Minimal re-renders using React Context

## Troubleshooting

### Notifications not appearing
1. Check wallet is connected
2. Verify contract addresses in `.env`
3. Check network matches contract deployment
4. Open browser console for errors

### Events not being caught
1. Ensure OrderEventListener is mounted in layout
2. Verify ABI matches deployed contract
3. Check RPC connection is stable
4. Confirm events are being emitted on-chain

### localStorage issues
1. Check browser allows localStorage
2. Verify wallet address is available
3. Clear localStorage and reconnect wallet

## Future Enhancements

- [ ] Push notifications via service worker
- [ ] Email/SMS notifications
- [ ] Notification preferences UI
- [ ] Notification history pagination
- [ ] Export notification history
- [ ] Notification search/filter
- [ ] Multi-language support
- [ ] Sound notifications
- [ ] Notification grouping by order

## Technical Notes

### Linting Warnings

Some React strict mode warnings may appear related to:
- `Date.now()` calls in render (unavoidable for timestamp display)
- setState in effects (mitigated with Promise.resolve() pattern)

These are handled appropriately and don't affect functionality.

### Contract Event Reliability

The system uses wagmi's `useWatchContractEvent` which:
- Automatically reconnects on disconnect
- Handles network switches
- Filters events by connected address
- Provides reliable event delivery

## Dependencies

- `wagmi` - Ethereum hooks for event listening
- `viem` - TypeScript Ethereum library
- `@reown/appkit` - Wallet connection
- React Context API - State management
- localStorage - Persistence

## License

Part of the Chilly decentralized order tracking dApp.
