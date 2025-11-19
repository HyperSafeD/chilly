// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

/**
 * @title OrderTracking
 * @author Chilly dApp Team
 * @notice A decentralized order tracking system for transparent, immutable order management
 * @dev This contract enables buyers and sellers to create, track, and manage orders on-chain
 */
contract OrderTracking {
    // ============ State Variables ============

    /// @notice Total number of orders created
    uint256 public totalOrders;

    /// @notice Mapping from order ID to Order struct
    mapping(uint256 => Order) public orders;

    /// @notice Mapping from buyer address to array of order IDs
    mapping(address => uint256[]) public buyerOrders;

    /// @notice Mapping from seller address to array of order IDs
    mapping(address => uint256[]) public sellerOrders;

    /// @notice Contract owner (for administrative functions)
    address public owner;

    /// @notice Platform fee percentage (in basis points, e.g., 100 = 1%)
    uint256 public platformFeeBps;

    /// @notice Minimum order value to prevent spam
    uint256 public minOrderValue;

    // ============ Structs ============

    /**
     * @notice Order structure representing a complete order
     * @param id Unique order identifier
     * @param orderNumber Human-readable order number
     * @param buyer Address of the buyer
     * @param seller Address of the seller
     * @param productName Name of the product
     * @param productDescription Description of the product
     * @param quantity Quantity of items
     * @param price Price in wei
     * @param currency Currency token address (address(0) for native ETH)
     * @param status Current order status
     * @param createdAt Timestamp when order was created
     * @param updatedAt Timestamp when order was last updated
     * @param estimatedDelivery Estimated delivery timestamp
     * @param trackingNumber Shipping tracking number
     * @param transactionHash Transaction hash that created this order
     * @param network Network identifier
     * @param metadataHash IPFS hash for additional metadata (optional)
     */
    struct Order {
        uint256 id;
        string orderNumber;
        address buyer;
        address seller;
        string productName;
        string productDescription;
        uint256 quantity;
        uint256 price;
        address currency; // address(0) for native ETH
        OrderStatus status;
        uint256 createdAt;
        uint256 updatedAt;
        uint256 estimatedDelivery;
        string trackingNumber;
        bytes32 transactionHash;
        string network;
        string metadataHash; // IPFS hash for additional data
    }

    /**
     * @notice Order status enumeration
     */
    enum OrderStatus {
        Pending,      // 0 - Order created, awaiting confirmation
        Confirmed,    // 1 - Order confirmed by seller
        Processing,   // 2 - Order being prepared
        Shipped,      // 3 - Order has been shipped
        Delivered,    // 4 - Order successfully delivered
        Cancelled,    // 5 - Order cancelled
        Disputed      // 6 - Order under dispute
    }

    // ============ Events ============

    /**
     * @notice Emitted when a new order is created
     */
    event OrderCreated(
        uint256 indexed orderId,
        address indexed buyer,
        address indexed seller,
        string orderNumber,
        uint256 price,
        address currency
    );

    /**
     * @notice Emitted when order status is updated
     */
    event OrderStatusUpdated(
        uint256 indexed orderId,
        OrderStatus oldStatus,
        OrderStatus newStatus,
        address updatedBy
    );

    /**
     * @notice Emitted when order tracking number is added
     */
    event TrackingNumberAdded(
        uint256 indexed orderId,
        string trackingNumber
    );

    /**
     * @notice Emitted when order is disputed
     */
    event OrderDisputed(
        uint256 indexed orderId,
        address indexed disputer,
        string reason
    );

    /**
     * @notice Emitted when order is cancelled
     */
    event OrderCancelled(
        uint256 indexed orderId,
        address cancelledBy,
        string reason
    );

    /**
     * @notice Emitted when platform fee is updated
     */
    event PlatformFeeUpdated(uint256 oldFee, uint256 newFee);

    /**
     * @notice Emitted when minimum order value is updated
     */
    event MinOrderValueUpdated(uint256 oldValue, uint256 newValue);

    // ============ Modifiers ============

    /**
     * @notice Ensures only contract owner can execute
     */
    modifier onlyOwner() {
        require(msg.sender == owner, "OrderTracking: Not owner");
        _;
    }

    /**
     * @notice Ensures order exists
     */
    modifier orderExists(uint256 _orderId) {
        require(orders[_orderId].id != 0, "OrderTracking: Order does not exist");
        _;
    }

    /**
     * @notice Ensures caller is buyer or seller of the order
     */
    modifier onlyOrderParty(uint256 _orderId) {
        Order memory order = orders[_orderId];
        require(
            msg.sender == order.buyer || msg.sender == order.seller,
            "OrderTracking: Not authorized"
        );
        _;
    }

    /**
     * @notice Ensures order is in a valid state for the operation
     */
    modifier validOrderStatus(uint256 _orderId, OrderStatus _requiredStatus) {
        require(
            orders[_orderId].status == _requiredStatus,
            "OrderTracking: Invalid order status"
        );
        _;
    }

    // ============ Constructor ============

    /**
     * @notice Initializes the contract
     * @param _platformFeeBps Platform fee in basis points (100 = 1%)
     * @param _minOrderValue Minimum order value in wei
     */
    constructor(uint256 _platformFeeBps, uint256 _minOrderValue) {
        owner = msg.sender;
        platformFeeBps = _platformFeeBps;
        minOrderValue = _minOrderValue;
    }

    // ============ Order Management Functions ============

    /**
     * @notice Creates a new order
     * @param _seller Address of the seller
     * @param _productName Name of the product
     * @param _productDescription Description of the product
     * @param _quantity Quantity of items
     * @param _currency Currency token address (address(0) for native ETH)
     * @param _estimatedDelivery Estimated delivery timestamp (0 if not set)
     * @param _network Network identifier
     * @param _metadataHash IPFS hash for additional metadata
     * @return orderId The ID of the newly created order
     */
    function createOrder(
        address _seller,
        string memory _productName,
        string memory _productDescription,
        uint256 _quantity,
        address _currency,
        uint256 _estimatedDelivery,
        string memory _network,
        string memory _metadataHash
    ) external payable returns (uint256) {
        require(_seller != address(0), "OrderTracking: Invalid seller address");
        require(_seller != msg.sender, "OrderTracking: Cannot sell to yourself");
        require(_quantity > 0, "OrderTracking: Quantity must be greater than 0");
        require(
            bytes(_productName).length > 0,
            "OrderTracking: Product name required"
        );
        require(
            bytes(_network).length > 0,
            "OrderTracking: Network identifier required"
        );

        uint256 orderPrice = msg.value;
        require(orderPrice >= minOrderValue, "OrderTracking: Order value too low");

        // Calculate platform fee
        uint256 fee = (orderPrice * platformFeeBps) / 10000;
        uint256 sellerAmount = orderPrice - fee;

        // Transfer fee to owner (if any)
        if (fee > 0) {
            payable(owner).transfer(fee);
        }

        // Hold payment in escrow (contract holds the funds)
        // Funds will be released when order is delivered or refunded if cancelled

        totalOrders++;
        uint256 orderId = totalOrders;

        // Generate order number
        string memory orderNumber = string(
            abi.encodePacked("ORD-", _uint2str(orderId))
        );

        Order memory newOrder = Order({
            id: orderId,
            orderNumber: orderNumber,
            buyer: msg.sender,
            seller: _seller,
            productName: _productName,
            productDescription: _productDescription,
            quantity: _quantity,
            price: orderPrice,
            currency: _currency,
            status: OrderStatus.Pending,
            createdAt: block.timestamp,
            updatedAt: block.timestamp,
            estimatedDelivery: _estimatedDelivery,
            trackingNumber: "",
            transactionHash: keccak256(
                abi.encodePacked(block.number, block.timestamp, msg.sender, orderId)
            ),
            network: _network,
            metadataHash: _metadataHash
        });

        orders[orderId] = newOrder;
        buyerOrders[msg.sender].push(orderId);
        sellerOrders[_seller].push(orderId);

        emit OrderCreated(
            orderId,
            msg.sender,
            _seller,
            orderNumber,
            orderPrice,
            _currency
        );

        return orderId;
    }

    /**
     * @notice Confirms an order (seller only)
     * @param _orderId ID of the order to confirm
     */
    function confirmOrder(
        uint256 _orderId
    )
        external
        orderExists(_orderId)
        validOrderStatus(_orderId, OrderStatus.Pending)
    {
        Order storage order = orders[_orderId];
        require(
            msg.sender == order.seller,
            "OrderTracking: Only seller can confirm"
        );

        OrderStatus oldStatus = order.status;
        order.status = OrderStatus.Confirmed;
        order.updatedAt = block.timestamp;

        emit OrderStatusUpdated(_orderId, oldStatus, OrderStatus.Confirmed, msg.sender);
    }

    /**
     * @notice Updates order status
     * @param _orderId ID of the order
     * @param _newStatus New status for the order
     */
    function updateOrderStatus(
        uint256 _orderId,
        OrderStatus _newStatus
    )
        external
        orderExists(_orderId)
        onlyOrderParty(_orderId)
    {
        Order storage order = orders[_orderId];
        OrderStatus oldStatus = order.status;

        // Validate status transition
        require(
            _isValidStatusTransition(oldStatus, _newStatus),
            "OrderTracking: Invalid status transition"
        );

        // Special handling for delivered status - release payment to seller
        if (_newStatus == OrderStatus.Delivered) {
            require(
                msg.sender == order.buyer,
                "OrderTracking: Only buyer can mark as delivered"
            );
            _releasePayment(_orderId);
        }

        // Special handling for cancelled status - refund buyer
        if (_newStatus == OrderStatus.Cancelled) {
            _refundPayment(_orderId);
        }

        order.status = _newStatus;
        order.updatedAt = block.timestamp;

        emit OrderStatusUpdated(_orderId, oldStatus, _newStatus, msg.sender);
    }

    /**
     * @notice Adds tracking number to an order
     * @param _orderId ID of the order
     * @param _trackingNumber Shipping tracking number
     */
    function addTrackingNumber(
        uint256 _orderId,
        string memory _trackingNumber
    )
        external
        orderExists(_orderId)
    {
        Order storage order = orders[_orderId];
        require(
            msg.sender == order.seller,
            "OrderTracking: Only seller can add tracking"
        );
        require(
            order.status == OrderStatus.Processing ||
                order.status == OrderStatus.Shipped,
            "OrderTracking: Invalid status for tracking"
        );

        order.trackingNumber = _trackingNumber;
        order.updatedAt = block.timestamp;

        emit TrackingNumberAdded(_orderId, _trackingNumber);
    }

    /**
     * @notice Marks order as shipped (seller only)
     * @param _orderId ID of the order
     */
    function markAsShipped(
        uint256 _orderId
    )
        external
        orderExists(_orderId)
        validOrderStatus(_orderId, OrderStatus.Processing)
    {
        Order storage order = orders[_orderId];
        require(
            msg.sender == order.seller,
            "OrderTracking: Only seller can mark as shipped"
        );

        OrderStatus oldStatus = order.status;
        order.status = OrderStatus.Shipped;
        order.updatedAt = block.timestamp;

        emit OrderStatusUpdated(_orderId, oldStatus, OrderStatus.Shipped, msg.sender);
    }

    /**
     * @notice Marks order as processing (seller only)
     * @param _orderId ID of the order
     */
    function markAsProcessing(
        uint256 _orderId
    )
        external
        orderExists(_orderId)
        validOrderStatus(_orderId, OrderStatus.Confirmed)
    {
        Order storage order = orders[_orderId];
        require(
            msg.sender == order.seller,
            "OrderTracking: Only seller can mark as processing"
        );

        OrderStatus oldStatus = order.status;
        order.status = OrderStatus.Processing;
        order.updatedAt = block.timestamp;

        emit OrderStatusUpdated(
            _orderId,
            oldStatus,
            OrderStatus.Processing,
            msg.sender
        );
    }

    /**
     * @notice Disputes an order
     * @param _orderId ID of the order
     * @param _reason Reason for dispute
     */
    function disputeOrder(
        uint256 _orderId,
        string memory _reason
    ) external orderExists(_orderId) onlyOrderParty(_orderId) {
        Order storage order = orders[_orderId];
        require(
            order.status != OrderStatus.Delivered &&
                order.status != OrderStatus.Cancelled &&
                order.status != OrderStatus.Disputed,
            "OrderTracking: Cannot dispute this order"
        );

        OrderStatus oldStatus = order.status;
        order.status = OrderStatus.Disputed;
        order.updatedAt = block.timestamp;

        emit OrderDisputed(_orderId, msg.sender, _reason);
        emit OrderStatusUpdated(_orderId, oldStatus, OrderStatus.Disputed, msg.sender);
    }

    /**
     * @notice Cancels an order
     * @param _orderId ID of the order
     * @param _reason Reason for cancellation
     */
    function cancelOrder(
        uint256 _orderId,
        string memory _reason
    ) external orderExists(_orderId) onlyOrderParty(_orderId) {
        Order storage order = orders[_orderId];
        require(
            order.status == OrderStatus.Pending ||
                order.status == OrderStatus.Confirmed,
            "OrderTracking: Cannot cancel order in current status"
        );

        OrderStatus oldStatus = order.status;
        order.status = OrderStatus.Cancelled;
        order.updatedAt = block.timestamp;

        _refundPayment(_orderId);

        emit OrderCancelled(_orderId, msg.sender, _reason);
        emit OrderStatusUpdated(_orderId, oldStatus, OrderStatus.Cancelled, msg.sender);
    }

    // ============ View Functions ============

    /**
     * @notice Gets order details
     * @param _orderId ID of the order
     * @return Order struct
     */
    function getOrder(
        uint256 _orderId
    ) external view orderExists(_orderId) returns (Order memory) {
        return orders[_orderId];
    }

    /**
     * @notice Gets all order IDs for a buyer
     * @param _buyer Address of the buyer
     * @return Array of order IDs
     */
    function getBuyerOrders(
        address _buyer
    ) external view returns (uint256[] memory) {
        return buyerOrders[_buyer];
    }

    /**
     * @notice Gets all order IDs for a seller
     * @param _seller Address of the seller
     * @return Array of order IDs
     */
    function getSellerOrders(
        address _seller
    ) external view returns (uint256[] memory) {
        return sellerOrders[_seller];
    }

    /**
     * @notice Gets multiple orders by IDs
     * @param _orderIds Array of order IDs
     * @return Array of Order structs
     */
    function getOrders(
        uint256[] memory _orderIds
    ) external view returns (Order[] memory) {
        Order[] memory result = new Order[](_orderIds.length);
        for (uint256 i = 0; i < _orderIds.length; i++) {
            if (orders[_orderIds[i]].id != 0) {
                result[i] = orders[_orderIds[i]];
            }
        }
        return result;
    }

    // ============ Admin Functions ============

    /**
     * @notice Updates platform fee (owner only)
     * @param _newFee New fee in basis points
     */
    function setPlatformFee(
        uint256 _newFee
    ) external onlyOwner {
        require(_newFee <= 1000, "OrderTracking: Fee too high (max 10%)");
        uint256 oldFee = platformFeeBps;
        platformFeeBps = _newFee;
        emit PlatformFeeUpdated(oldFee, _newFee);
    }

    /**
     * @notice Updates minimum order value (owner only)
     * @param _newValue New minimum value in wei
     */
    function setMinOrderValue(
        uint256 _newValue
    ) external onlyOwner {
        uint256 oldValue = minOrderValue;
        minOrderValue = _newValue;
        emit MinOrderValueUpdated(oldValue, _newValue);
    }

    /**
     * @notice Transfers contract ownership (owner only)
     * @param _newOwner Address of the new owner
     */
    function transferOwnership(address _newOwner) external onlyOwner {
        require(
            _newOwner != address(0),
            "OrderTracking: Invalid new owner address"
        );
        owner = _newOwner;
    }

    // ============ Internal Functions ============

    /**
     * @notice Validates status transition
     * @param _oldStatus Current status
     * @param _newStatus New status
     * @return bool True if transition is valid
     */
    function _isValidStatusTransition(
        OrderStatus _oldStatus,
        OrderStatus _newStatus
    ) internal pure returns (bool) {
        // Cannot transition from terminal states
        if (
            _oldStatus == OrderStatus.Delivered ||
            _oldStatus == OrderStatus.Cancelled
        ) {
            return false;
        }

        // Can always dispute (except from terminal states)
        if (_newStatus == OrderStatus.Disputed) {
            return _oldStatus != OrderStatus.Delivered &&
                _oldStatus != OrderStatus.Cancelled;
        }

        // Valid transitions
        if (_oldStatus == OrderStatus.Pending) {
            return
                _newStatus == OrderStatus.Confirmed ||
                _newStatus == OrderStatus.Cancelled ||
                _newStatus == OrderStatus.Disputed;
        }

        if (_oldStatus == OrderStatus.Confirmed) {
            return
                _newStatus == OrderStatus.Processing ||
                _newStatus == OrderStatus.Cancelled ||
                _newStatus == OrderStatus.Disputed;
        }

        if (_oldStatus == OrderStatus.Processing) {
            return
                _newStatus == OrderStatus.Shipped ||
                _newStatus == OrderStatus.Disputed;
        }

        if (_oldStatus == OrderStatus.Shipped) {
            return
                _newStatus == OrderStatus.Delivered ||
                _newStatus == OrderStatus.Disputed;
        }

        if (_oldStatus == OrderStatus.Disputed) {
            // Disputed orders can be resolved to various states
            return
                _newStatus == OrderStatus.Confirmed ||
                _newStatus == OrderStatus.Cancelled ||
                _newStatus == OrderStatus.Delivered;
        }

        return false;
    }

    /**
     * @notice Releases payment to seller
     * @param _orderId ID of the order
     */
    function _releasePayment(uint256 _orderId) internal {
        Order memory order = orders[_orderId];
        require(
            address(this).balance >= order.price,
            "OrderTracking: Insufficient contract balance"
        );

        payable(order.seller).transfer(order.price);
    }

    /**
     * @notice Refunds payment to buyer
     * @param _orderId ID of the order
     */
    function _refundPayment(uint256 _orderId) internal {
        Order memory order = orders[_orderId];
        require(
            address(this).balance >= order.price,
            "OrderTracking: Insufficient contract balance"
        );

        payable(order.buyer).transfer(order.price);
    }

    /**
     * @notice Converts uint to string
     * @param _i Number to convert
     * @return String representation
     */
    function _uint2str(uint256 _i) internal pure returns (string memory) {
        if (_i == 0) {
            return "0";
        }
        uint256 j = _i;
        uint256 len;
        while (j != 0) {
            len++;
            j /= 10;
        }
        bytes memory bstr = new bytes(len);
        uint256 k = len;
        while (_i != 0) {
            k = k - 1;
            uint8 temp = (48 + uint8(_i - (_i / 10) * 10));
            bytes1 b1 = bytes1(temp);
            bstr[k] = b1;
            _i /= 10;
        }
        return string(bstr);
    }

    // ============ Receive Function ============

    /**
     * @notice Allows contract to receive ETH
     */
    receive() external payable {
        // Contract can receive ETH for order payments
    }
}

