// Notification types for the order tracking system

export enum NotificationType {
  ORDER_CREATED = 'ORDER_CREATED',
  ORDER_UPDATED = 'ORDER_UPDATED',
  ORDER_CANCELLED = 'ORDER_CANCELLED',
  ORDER_CONFIRMED = 'ORDER_CONFIRMED',
  ORDER_SHIPPED = 'ORDER_SHIPPED',
  ORDER_DELIVERED = 'ORDER_DELIVERED',
  TRACKING_ADDED = 'TRACKING_ADDED',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR',
  INFO = 'INFO',
}

export enum OrderStatus {
  Pending = 0,
  Confirmed = 1,
  Processing = 2,
  Shipped = 3,
  Delivered = 4,
  Cancelled = 5,
  Disputed = 6,
}

export interface Notification {
  id: string;
  type: NotificationType;
  title: string;
  message: string;
  orderId?: string;
  orderNumber?: string;
  timestamp: number;
  read: boolean;
  txHash?: string;
  blockNumber?: number;
  // User context
  isCustomer: boolean; // true if current user is customer, false if merchant
  customerAddress?: string;
  merchantAddress?: string;
}

export interface NotificationState {
  notifications: Notification[];
  unreadCount: number;
  isLoading: boolean;
}

export interface NotificationContextType {
  notifications: Notification[];
  unreadCount: number;
  addNotification: (notification: Omit<Notification, 'id' | 'timestamp' | 'read'>) => void;
  markAsRead: (id: string) => void;
  markAllAsRead: () => void;
  clearNotification: (id: string) => void;
  clearAllNotifications: () => void;
}

// Helper function to generate notification messages
export function getNotificationMessage(
  type: NotificationType,
  orderId: string,
  orderNumber?: string,
  isCustomer?: boolean
): { title: string; message: string } {
  const orderRef = orderNumber || `#${orderId}`;

  switch (type) {
    case NotificationType.ORDER_CREATED:
      return {
        title: isCustomer ? 'Order Created' : 'New Order Received',
        message: isCustomer
          ? `Your order ${orderRef} has been created successfully`
          : `You have received a new order ${orderRef}`,
      };
    case NotificationType.ORDER_CONFIRMED:
      return {
        title: isCustomer ? 'Order Confirmed' : 'Order Confirmed',
        message: isCustomer
          ? `Your order ${orderRef} has been confirmed`
          : `You confirmed order ${orderRef}`,
      };
    case NotificationType.ORDER_UPDATED:
      return {
        title: 'Order Updated',
        message: `Order ${orderRef} status has been updated`,
      };
    case NotificationType.ORDER_SHIPPED:
      return {
        title: isCustomer ? 'Order Shipped' : 'Order Marked as Shipped',
        message: isCustomer
          ? `Your order ${orderRef} has been shipped`
          : `You marked order ${orderRef} as shipped`,
      };
    case NotificationType.ORDER_DELIVERED:
      return {
        title: isCustomer ? 'Order Delivered' : 'Order Marked as Delivered',
        message: isCustomer
          ? `Your order ${orderRef} has been delivered`
          : `Order ${orderRef} has been marked as delivered`,
      };
    case NotificationType.ORDER_CANCELLED:
      return {
        title: 'Order Cancelled',
        message: `Order ${orderRef} has been cancelled`,
      };
    case NotificationType.TRACKING_ADDED:
      return {
        title: 'Tracking Number Added',
        message: `Tracking number has been added to order ${orderRef}`,
      };
    default:
      return {
        title: 'Notification',
        message: `Update for order ${orderRef}`,
      };
  }
}
