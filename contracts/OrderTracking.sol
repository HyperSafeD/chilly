// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

/**
 * @title OrderTracking
 * @dev Decentralized order tracking system with immutable records
 * @author Chilly Team
 */
contract OrderTracking {
    enum OrderStatus {
        Pending,
        Confirmed,
        Processing,
        Shipped,
        Delivered,
        Cancelled,
        Disputed
    }

    struct Order {
        uint256 id;
        address customer;
        address merchant;
        string productName;
        string description;
        uint256 amount;
        OrderStatus status;
        uint256 createdAt;
        uint256 updatedAt;
        string trackingNumber;
        string shippingAddress;
        bool exists;
    }

    struct OrderUpdate {
        OrderStatus status;
        uint256 timestamp;
        address updatedBy;
        string note;
    }

    // State variables
    uint256 private orderCounter;
    mapping(uint256 => Order) private orders;
    mapping(uint256 => OrderUpdate[]) private orderHistory;
    mapping(address => uint256[]) private customerOrders;
    mapping(address => uint256[]) private merchantOrders;

    // Events
    event OrderCreated(
        uint256 indexed orderId,
        address indexed customer,
        address indexed merchant,
        string productName,
        uint256 amount,
        uint256 timestamp
    );

    event OrderUpdated(
        uint256 indexed orderId,
        OrderStatus newStatus,
        address indexed updatedBy,
        uint256 timestamp
    );

    event OrderCancelled(
        uint256 indexed orderId,
        address indexed cancelledBy,
        uint256 timestamp
    );

    // Modifiers
    modifier onlyOrderParticipant(uint256 _orderId) {
        require(
            orders[_orderId].customer == msg.sender ||
                orders[_orderId].merchant == msg.sender,
            "Not authorized"
        );
        _;
    }

    modifier orderExists(uint256 _orderId) {
        require(orders[_orderId].exists, "Order does not exist");
        _;
    }

    /**
     * @dev Create a new order
     */
    function createOrder(
        address _merchant,
        string memory _productName,
        string memory _description,
        uint256 _amount,
        string memory _shippingAddress
    ) external returns (uint256) {
        require(_merchant != address(0), "Invalid merchant address");
        require(_merchant != msg.sender, "Cannot create order for yourself");
        require(_amount > 0, "Amount must be greater than 0");
        require(bytes(_productName).length > 0, "Product name required");

        orderCounter++;
        uint256 orderId = orderCounter;

        orders[orderId] = Order({
            id: orderId,
            customer: msg.sender,
            merchant: _merchant,
            productName: _productName,
            description: _description,
            amount: _amount,
            status: OrderStatus.Pending,
            createdAt: block.timestamp,
            updatedAt: block.timestamp,
            trackingNumber: "",
            shippingAddress: _shippingAddress,
            exists: true
        });

        customerOrders[msg.sender].push(orderId);
        merchantOrders[_merchant].push(orderId);

        // Add initial history entry
        orderHistory[orderId].push(
            OrderUpdate({
                status: OrderStatus.Pending,
                timestamp: block.timestamp,
                updatedBy: msg.sender,
                note: "Order created"
            })
        );

        emit OrderCreated(
            orderId,
            msg.sender,
            _merchant,
            _productName,
            _amount,
            block.timestamp
        );

        return orderId;
    }

    /**
     * @dev Update order status
     */
    function updateOrderStatus(
        uint256 _orderId,
        OrderStatus _newStatus,
        string memory _note
    ) external orderExists(_orderId) onlyOrderParticipant(_orderId) {
        Order storage order = orders[_orderId];

        require(
            order.status != OrderStatus.Cancelled,
            "Cannot update cancelled order"
        );

        require(
            order.status != OrderStatus.Delivered,
            "Cannot update delivered order"
        );

        order.status = _newStatus;
        order.updatedAt = block.timestamp;

        orderHistory[_orderId].push(
            OrderUpdate({
                status: _newStatus,
                timestamp: block.timestamp,
                updatedBy: msg.sender,
                note: _note
            })
        );

        emit OrderUpdated(_orderId, _newStatus, msg.sender, block.timestamp);
    }

    /**
     * @dev Add tracking number to order
     */
    function addTrackingNumber(
        uint256 _orderId,
        string memory _trackingNumber
    ) external orderExists(_orderId) onlyOrderParticipant(_orderId) {
        require(bytes(_trackingNumber).length > 0, "Tracking number required");

        Order storage order = orders[_orderId];
        order.trackingNumber = _trackingNumber;
        order.updatedAt = block.timestamp;

        orderHistory[_orderId].push(
            OrderUpdate({
                status: order.status,
                timestamp: block.timestamp,
                updatedBy: msg.sender,
                note: string(
                    abi.encodePacked("Tracking number added: ", _trackingNumber)
                )
            })
        );
    }

    /**
     * @dev Cancel an order
     */
    function cancelOrder(
        uint256 _orderId,
        string memory _reason
    ) external orderExists(_orderId) onlyOrderParticipant(_orderId) {
        Order storage order = orders[_orderId];

        require(
            order.status != OrderStatus.Delivered,
            "Cannot cancel delivered order"
        );

        require(
            order.status != OrderStatus.Cancelled,
            "Order already cancelled"
        );

        order.status = OrderStatus.Cancelled;
        order.updatedAt = block.timestamp;

        orderHistory[_orderId].push(
            OrderUpdate({
                status: OrderStatus.Cancelled,
                timestamp: block.timestamp,
                updatedBy: msg.sender,
                note: _reason
            })
        );

        emit OrderCancelled(_orderId, msg.sender, block.timestamp);
    }

    /**
     * @dev Get order details
     */
    function getOrder(
        uint256 _orderId
    ) external view orderExists(_orderId) returns (Order memory) {
        return orders[_orderId];
    }

    /**
     * @dev Get order history
     */
    function getOrderHistory(
        uint256 _orderId
    ) external view orderExists(_orderId) returns (OrderUpdate[] memory) {
        return orderHistory[_orderId];
    }

    /**
     * @dev Get all orders for a customer
     */
    function getCustomerOrders(
        address _customer
    ) external view returns (uint256[] memory) {
        return customerOrders[_customer];
    }

    /**
     * @dev Get all orders for a merchant
     */
    function getMerchantOrders(
        address _merchant
    ) external view returns (uint256[] memory) {
        return merchantOrders[_merchant];
    }

    /**
     * @dev Get total number of orders
     */
    function getTotalOrders() external view returns (uint256) {
        return orderCounter;
    }

    /**
     * @dev Get multiple orders at once (for efficiency)
     */
    function getOrders(
        uint256[] memory _orderIds
    ) external view returns (Order[] memory) {
        Order[] memory result = new Order[](_orderIds.length);

        for (uint256 i = 0; i < _orderIds.length; i++) {
            if (orders[_orderIds[i]].exists) {
                result[i] = orders[_orderIds[i]];
            }
        }

        return result;
    }

    /**
     * @dev Check if an address is involved in an order
     */
    function isOrderParticipant(
        uint256 _orderId,
        address _address
    ) external view orderExists(_orderId) returns (bool) {
        Order memory order = orders[_orderId];
        return (order.customer == _address || order.merchant == _address);
    }
}
