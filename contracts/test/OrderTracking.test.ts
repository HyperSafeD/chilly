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
    it("Should create a new order", async function () {
      const tx = await orderTracking.connect(customer).createOrder(
        await merchant.getAddress(),
        "MacBook Pro",
        "16-inch, M3 Max",
        ethers.parseEther("2.5"),
        "123 Main St, City, Country"
      );

      await expect(tx)
        .to.emit(orderTracking, "OrderCreated")
        .withArgs(
          1,
          await customer.getAddress(),
          await merchant.getAddress(),
          "MacBook Pro",
          ethers.parseEther("2.5"),
          await ethers.provider.getBlock("latest").then(b => b.timestamp)
        );

      const order = await orderTracking.getOrder(1);
      expect(order.customer).to.equal(await customer.getAddress());
      expect(order.merchant).to.equal(await merchant.getAddress());
      expect(order.productName).to.equal("MacBook Pro");
      expect(order.status).to.equal(0); // Pending
    });

    it("Should fail if merchant is zero address", async function () {
      await expect(
        orderTracking.connect(customer).createOrder(
          ethers.ZeroAddress,
          "Product",
          "Description",
          ethers.parseEther("1"),
          "Address"
        )
      ).to.be.revertedWith("Invalid merchant address");
    });

    it("Should fail if creating order for yourself", async function () {
      await expect(
        orderTracking.connect(customer).createOrder(
          await customer.getAddress(),
          "Product",
          "Description",
          ethers.parseEther("1"),
          "Address"
        )
      ).to.be.revertedWith("Cannot create order for yourself");
    });

    it("Should track customer orders", async function () {
      await orderTracking.connect(customer).createOrder(
        await merchant.getAddress(),
        "Product 1",
        "Description",
        ethers.parseEther("1"),
        "Address"
      );

      await orderTracking.connect(customer).createOrder(
        await merchant.getAddress(),
        "Product 2",
        "Description",
        ethers.parseEther("2"),
        "Address"
      );

      const customerOrders = await orderTracking.getCustomerOrders(await customer.getAddress());
      expect(customerOrders.length).to.equal(2);
      expect(customerOrders[0]).to.equal(1);
      expect(customerOrders[1]).to.equal(2);
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

