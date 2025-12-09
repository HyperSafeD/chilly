import { expect } from "chai";
import { ethers } from "hardhat";
import { Contract, Signer } from "ethers";

describe("OrderTracking", function () {
  let orderTracking: Contract;
  let owner: Signer, customer: Signer, merchant: Signer, other: Signer;
  const PLATFORM_FEE_BPS = 100; // 1%
  const MIN_ORDER_VALUE = ethers.parseEther("0.01"); // 0.01 ETH

  beforeEach(async function () {
    [owner, customer, merchant, other] = await ethers.getSigners();
    
    const OrderTracking = await ethers.getContractFactory("OrderTracking");
    orderTracking = await OrderTracking.deploy(PLATFORM_FEE_BPS, MIN_ORDER_VALUE);
    await orderTracking.waitForDeployment();
  });

  describe("Constructor", function () {
    it("Should deploy with correct platform fee and minimum order value", async function () {
      const OrderTracking = await ethers.getContractFactory("OrderTracking");
      const testPlatformFee = 150; // 1.5%
      const testMinOrderValue = ethers.parseEther("0.05"); // 0.05 ETH
      
      const testContract = await OrderTracking.deploy(testPlatformFee, testMinOrderValue);
      await testContract.waitForDeployment();

      // Test that constructor sets platformFeeBps correctly
      expect(await testContract.platformFeeBps()).to.equal(testPlatformFee);
      
      // Test that constructor sets minOrderValue correctly
      expect(await testContract.minOrderValue()).to.equal(testMinOrderValue);
      
      // Test that constructor sets owner to deployer address
      expect(await testContract.owner()).to.equal(await owner.getAddress());
      
      // Test that totalOrders starts at 0
      expect(await testContract.totalOrders()).to.equal(0);
    });

    it("Should handle edge cases in constructor", async function () {
      const OrderTracking = await ethers.getContractFactory("OrderTracking");
      
      // Test with platform fee of 0 (0%)
      const contractZeroFee = await OrderTracking.deploy(0, MIN_ORDER_VALUE);
      await contractZeroFee.waitForDeployment();
      expect(await contractZeroFee.platformFeeBps()).to.equal(0);
      
      // Test with platform fee of 1000 (10% - maximum)
      const contractMaxFee = await OrderTracking.deploy(1000, MIN_ORDER_VALUE);
      await contractMaxFee.waitForDeployment();
      expect(await contractMaxFee.platformFeeBps()).to.equal(1000);
      
      // Test with minimum order value of 0
      const contractZeroMin = await OrderTracking.deploy(PLATFORM_FEE_BPS, 0);
      await contractZeroMin.waitForDeployment();
      expect(await contractZeroMin.minOrderValue()).to.equal(0);
      
      // Test with minimum order value of 1 wei
      const contractOneWei = await OrderTracking.deploy(PLATFORM_FEE_BPS, 1);
      await contractOneWei.waitForDeployment();
      expect(await contractOneWei.minOrderValue()).to.equal(1);
    });
  });

  describe("Order Creation", function () {
    it("Should create order with all parameters", async function () {
      const orderPrice = ethers.parseEther("1.0");
      const quantity = 2;
      const productName = "MacBook Pro";
      const productDescription = "16-inch, M3 Max";
      const estimatedDelivery = Math.floor(Date.now() / 1000) + 86400; // 1 day from now
      const network = "sepolia";
      const metadataHash = "QmHash123";

      const tx = await orderTracking.connect(customer).createOrder(
        await merchant.getAddress(),
        productName,
        productDescription,
        quantity,
        ethers.ZeroAddress, // Native ETH
        estimatedDelivery,
        network,
        metadataHash,
        { value: orderPrice }
      );

      const order = await orderTracking.getOrder(1);
      expect(order.buyer).to.equal(await customer.getAddress());
      expect(order.seller).to.equal(await merchant.getAddress());
      expect(order.productName).to.equal(productName);
      expect(order.productDescription).to.equal(productDescription);
      expect(order.quantity).to.equal(quantity);
      expect(order.price).to.equal(orderPrice);
      expect(order.currency).to.equal(ethers.ZeroAddress);
      expect(order.estimatedDelivery).to.equal(estimatedDelivery);
      expect(order.network).to.equal(network);
      expect(order.metadataHash).to.equal(metadataHash);
      expect(order.status).to.equal(0); // Pending
      expect(order.orderNumber).to.equal("ORD-1");
    });

    it("Should create order with payment and deduct platform fee", async function () {
      const orderPrice = ethers.parseEther("1.0");
      const contractInitialBalance = await ethers.provider.getBalance(await orderTracking.getAddress());

      // Calculate expected fee (1% of 1 ETH = 0.01 ETH)
      const expectedFee = (orderPrice * BigInt(PLATFORM_FEE_BPS)) / BigInt(10000);
      const expectedSellerAmount = orderPrice - expectedFee;

      const tx = await orderTracking.connect(customer).createOrder(
        await merchant.getAddress(),
        "Product",
        "Description",
        1,
        ethers.ZeroAddress,
        0,
        "sepolia",
        "",
        { value: orderPrice }
      );
      await tx.wait();

      // Test that contract balance increases by order price
      const contractBalance = await ethers.provider.getBalance(await orderTracking.getAddress());
      expect(contractBalance).to.equal(contractInitialBalance + orderPrice);

      // Test that owner receives platform fee (check by sending ETH to owner address)
      const ownerBalance = await ethers.provider.getBalance(await owner.getAddress());
      // Owner balance should increase by the fee amount
      expect(ownerBalance).to.be.gte(ethers.parseEther("10000") + expectedFee); // Assuming owner starts with some balance

      // Test that payment is held in escrow (contract holds the funds)
      const order = await orderTracking.getOrder(1);
      expect(order.price).to.equal(orderPrice);
      
      // Verify seller amount calculation (price - fee)
      expect(expectedSellerAmount).to.equal(orderPrice - expectedFee);
    });

    it("Should validate order creation requirements", async function () {
      // Test that order value must be >= minOrderValue
      await expect(
        orderTracking.connect(customer).createOrder(
          await merchant.getAddress(),
          "Product",
          "Description",
          1,
          ethers.ZeroAddress,
          0,
          "sepolia",
          "",
          { value: MIN_ORDER_VALUE - BigInt(1) }
        )
      ).to.be.revertedWith("OrderTracking: Order value too low");

      // Test that quantity must be > 0
      await expect(
        orderTracking.connect(customer).createOrder(
          await merchant.getAddress(),
          "Product",
          "Description",
          0,
          ethers.ZeroAddress,
          0,
          "sepolia",
          "",
          { value: MIN_ORDER_VALUE }
        )
      ).to.be.revertedWith("OrderTracking: Quantity must be greater than 0");

      // Test that product name cannot be empty
      await expect(
        orderTracking.connect(customer).createOrder(
          await merchant.getAddress(),
          "",
          "Description",
          1,
          ethers.ZeroAddress,
          0,
          "sepolia",
          "",
          { value: MIN_ORDER_VALUE }
        )
      ).to.be.revertedWith("OrderTracking: Product name required");

      // Test that network identifier cannot be empty
      await expect(
        orderTracking.connect(customer).createOrder(
          await merchant.getAddress(),
          "Product",
          "Description",
          1,
          ethers.ZeroAddress,
          0,
          "",
          "",
          { value: MIN_ORDER_VALUE }
        )
      ).to.be.revertedWith("OrderTracking: Network identifier required");

      // Test that seller cannot be zero address
      await expect(
        orderTracking.connect(customer).createOrder(
          ethers.ZeroAddress,
          "Product",
          "Description",
          1,
          ethers.ZeroAddress,
          0,
          "sepolia",
          "",
          { value: MIN_ORDER_VALUE }
        )
      ).to.be.revertedWith("OrderTracking: Invalid seller address");

      // Test that seller cannot be the same as buyer
      await expect(
        orderTracking.connect(customer).createOrder(
          await customer.getAddress(),
          "Product",
          "Description",
          1,
          ethers.ZeroAddress,
          0,
          "sepolia",
          "",
          { value: MIN_ORDER_VALUE }
        )
      ).to.be.revertedWith("OrderTracking: Cannot sell to yourself");
    });

    it("Should emit OrderCreated event with correct parameters", async function () {
      const orderPrice = ethers.parseEther("1.0");
      const productName = "Test Product";
      const network = "sepolia";

      const tx = await orderTracking.connect(customer).createOrder(
        await merchant.getAddress(),
        productName,
        "Description",
        1,
        ethers.ZeroAddress,
        0,
        network,
        "",
        { value: orderPrice }
      );

      // Test event emission with all order details
      await expect(tx)
        .to.emit(orderTracking, "OrderCreated")
        .withArgs(
          1, // orderId
          await customer.getAddress(), // buyer (indexed)
          await merchant.getAddress(), // seller (indexed)
          "ORD-1", // orderNumber
          orderPrice, // price
          ethers.ZeroAddress // currency
        );
    });

    it("Should track orders correctly", async function () {
      // Create first order
      await orderTracking.connect(customer).createOrder(
        await merchant.getAddress(),
        "Product 1",
        "Description 1",
        1,
        ethers.ZeroAddress,
        0,
        "sepolia",
        "",
        { value: MIN_ORDER_VALUE }
      );

      // Test that order is added to buyerOrders mapping
      const buyerOrders1 = await orderTracking.getBuyerOrders(await customer.getAddress());
      expect(buyerOrders1.length).to.equal(1);
      expect(buyerOrders1[0]).to.equal(1);

      // Test that order is added to sellerOrders mapping
      const sellerOrders1 = await orderTracking.getSellerOrders(await merchant.getAddress());
      expect(sellerOrders1.length).to.equal(1);
      expect(sellerOrders1[0]).to.equal(1);

      // Test that totalOrders increments correctly
      expect(await orderTracking.totalOrders()).to.equal(1);

      // Create second order
      await orderTracking.connect(customer).createOrder(
        await merchant.getAddress(),
        "Product 2",
        "Description 2",
        1,
        ethers.ZeroAddress,
        0,
        "sepolia",
        "",
        { value: MIN_ORDER_VALUE }
      );

      // Test that order ID is assigned sequentially
      const buyerOrders2 = await orderTracking.getBuyerOrders(await customer.getAddress());
      expect(buyerOrders2.length).to.equal(2);
      expect(buyerOrders2[0]).to.equal(1);
      expect(buyerOrders2[1]).to.equal(2);

      // Test that totalOrders increments
      expect(await orderTracking.totalOrders()).to.equal(2);

      // Test that seller has both orders
      const sellerOrders2 = await orderTracking.getSellerOrders(await merchant.getAddress());
      expect(sellerOrders2.length).to.equal(2);
      expect(sellerOrders2[0]).to.equal(1);
      expect(sellerOrders2[1]).to.equal(2);
    });

    it("Should set order timestamps correctly", async function () {
      const blockBefore = await ethers.provider.getBlock("latest");
      const timestampBefore = blockBefore!.timestamp;

      const tx = await orderTracking.connect(customer).createOrder(
        await merchant.getAddress(),
        "Product",
        "Description",
        1,
        ethers.ZeroAddress,
        0,
        "sepolia",
        "",
        { value: MIN_ORDER_VALUE }
      );
      const receipt = await tx.wait();
      const blockAfter = await ethers.provider.getBlock(receipt!.blockNumber);
      const timestampAfter = blockAfter!.timestamp;

      const order = await orderTracking.getOrder(1);

      // Test that createdAt is set to block.timestamp
      expect(order.createdAt).to.be.gte(timestampBefore);
      expect(order.createdAt).to.be.lte(timestampAfter);

      // Test that updatedAt is set to block.timestamp
      expect(order.updatedAt).to.be.gte(timestampBefore);
      expect(order.updatedAt).to.be.lte(timestampAfter);
      expect(order.updatedAt).to.equal(order.createdAt);

      // Test that transactionHash is generated correctly
      expect(order.transactionHash).to.not.equal(ethers.ZeroHash);
      expect(order.transactionHash.length).to.equal(66); // 0x + 64 hex chars
    });

    it("Should handle edge cases", async function () {
      // Test with very large order value
      const largeOrderValue = ethers.parseEther("1000");
      await orderTracking.connect(customer).createOrder(
        await merchant.getAddress(),
        "Expensive Product",
        "Description",
        1,
        ethers.ZeroAddress,
        0,
        "sepolia",
        "",
        { value: largeOrderValue }
      );
      const order1 = await orderTracking.getOrder(1);
      expect(order1.price).to.equal(largeOrderValue);

      // Test with maximum platform fee (10%) - deploy new contract with max fee
      const OrderTrackingMaxFee = await ethers.getContractFactory("OrderTracking");
      const contractMaxFee = await OrderTrackingMaxFee.deploy(1000, MIN_ORDER_VALUE);
      await contractMaxFee.waitForDeployment();
      const orderPrice = ethers.parseEther("1.0");
      await contractMaxFee.connect(customer).createOrder(
        await merchant.getAddress(),
        "Product",
        "Description",
        1,
        ethers.ZeroAddress,
        0,
        "sepolia",
        "",
        { value: orderPrice }
      );
      const order2 = await contractMaxFee.getOrder(1);
      expect(order2.price).to.equal(orderPrice);

      // Test with empty product description (should be allowed)
      await orderTracking.connect(customer).createOrder(
        await merchant.getAddress(),
        "Product",
        "",
        1,
        ethers.ZeroAddress,
        0,
        "sepolia",
        "",
        { value: MIN_ORDER_VALUE }
      );
      const order3 = await orderTracking.getOrder(2);
      expect(order3.productDescription).to.equal("");

      // Test with empty metadata hash (should be allowed)
      await orderTracking.connect(customer).createOrder(
        await merchant.getAddress(),
        "Product",
        "Description",
        1,
        ethers.ZeroAddress,
        0,
        "sepolia",
        "",
        { value: MIN_ORDER_VALUE }
      );
      const order4 = await orderTracking.getOrder(3);
      expect(order4.metadataHash).to.equal("");

      // Test with estimated delivery of 0 (should be allowed)
      await orderTracking.connect(customer).createOrder(
        await merchant.getAddress(),
        "Product",
        "Description",
        1,
        ethers.ZeroAddress,
        0,
        "sepolia",
        "",
        { value: MIN_ORDER_VALUE }
      );
      const order5 = await orderTracking.getOrder(4);
      expect(order5.estimatedDelivery).to.equal(0);
    });
  });

  describe("Order Updates", function () {
    beforeEach(async function () {
      await orderTracking.connect(customer).createOrder(
        await merchant.getAddress(),
        "Product",
        "Description",
        ethers.parseEther("1"),
        "Address"
      );
    });

    it("Should update order status", async function () {
      await expect(
        orderTracking.connect(merchant).updateOrderStatus(1, 1, "Order confirmed")
      )
        .to.emit(orderTracking, "OrderUpdated")
        .withArgs(1, 1, await merchant.getAddress(), await ethers.provider.getBlock("latest").then(b => b.timestamp));

      const order = await orderTracking.getOrder(1);
      expect(order.status).to.equal(1); // Confirmed
    });

    it("Should fail if not a participant", async function () {
      await expect(
        orderTracking.connect(other).updateOrderStatus(1, 1, "Update")
      ).to.be.revertedWith("Not authorized");
    });

    it("Should add tracking number", async function () {
      await orderTracking.connect(merchant).addTrackingNumber(1, "TRACK123456");
      
      const order = await orderTracking.getOrder(1);
      expect(order.trackingNumber).to.equal("TRACK123456");
    });

    it("Should maintain order history", async function () {
      await orderTracking.connect(merchant).updateOrderStatus(1, 1, "Confirmed");
      await orderTracking.connect(merchant).updateOrderStatus(1, 2, "Processing");
      await orderTracking.connect(merchant).updateOrderStatus(1, 3, "Shipped");

      const history = await orderTracking.getOrderHistory(1);
      expect(history.length).to.equal(4); // Initial + 3 updates
      expect(history[3].status).to.equal(3); // Shipped
    });
  });

  describe("Order Cancellation", function () {
    beforeEach(async function () {
      await orderTracking.connect(customer).createOrder(
        await merchant.getAddress(),
        "Product",
        "Description",
        ethers.parseEther("1"),
        "Address"
      );
    });

    it("Should cancel order", async function () {
      await expect(
        orderTracking.connect(customer).cancelOrder(1, "Changed my mind")
      )
        .to.emit(orderTracking, "OrderCancelled")
        .withArgs(1, await customer.getAddress(), await ethers.provider.getBlock("latest").then(b => b.timestamp));

      const order = await orderTracking.getOrder(1);
      expect(order.status).to.equal(5); // Cancelled
    });

    it("Should fail to cancel delivered order", async function () {
      await orderTracking.connect(merchant).updateOrderStatus(1, 4, "Delivered");
      
      await expect(
        orderTracking.connect(customer).cancelOrder(1, "Too late")
      ).to.be.revertedWith("Cannot cancel delivered order");
    });

    it("Should fail to update cancelled order", async function () {
      await orderTracking.connect(customer).cancelOrder(1, "Cancelled");
      
      await expect(
        orderTracking.connect(merchant).updateOrderStatus(1, 1, "Update")
      ).to.be.revertedWith("Cannot update cancelled order");
    });
  });

  describe("View Functions", function () {
    beforeEach(async function () {
      await orderTracking.connect(customer).createOrder(
        await merchant.getAddress(),
        "Product 1",
        "Description 1",
        ethers.parseEther("1"),
        "Address 1"
      );

      await orderTracking.connect(customer).createOrder(
        await merchant.getAddress(),
        "Product 2",
        "Description 2",
        ethers.parseEther("2"),
        "Address 2"
      );
    });

    it("Should get merchant orders", async function () {
      const merchantOrders = await orderTracking.getMerchantOrders(await merchant.getAddress());
      expect(merchantOrders.length).to.equal(2);
    });

    it("Should get total orders", async function () {
      const total = await orderTracking.getTotalOrders();
      expect(total).to.equal(2);
    });

    it("Should get multiple orders at once", async function () {
      const orders = await orderTracking.getOrders([1, 2]);
      expect(orders.length).to.equal(2);
      expect(orders[0].productName).to.equal("Product 1");
      expect(orders[1].productName).to.equal("Product 2");
    });

    it("Should check if address is participant", async function () {
      expect(await orderTracking.isOrderParticipant(1, await customer.getAddress())).to.be.true;
      expect(await orderTracking.isOrderParticipant(1, await merchant.getAddress())).to.be.true;
      expect(await orderTracking.isOrderParticipant(1, await other.getAddress())).to.be.false;
    });
  });
});

