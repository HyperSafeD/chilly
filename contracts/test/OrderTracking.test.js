const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("OrderTracking", function () {
  let orderTracking;
  let owner, customer, merchant, other;

  beforeEach(async function () {
    [owner, customer, merchant, other] = await ethers.getSigners();
    
    const OrderTracking = await ethers.getContractFactory("OrderTracking");
    orderTracking = await OrderTracking.deploy();
    await orderTracking.waitForDeployment();
  });

  describe("Order Creation", function () {
    it("Should create a new order", async function () {
      const tx = await orderTracking.connect(customer).createOrder(
        merchant.address,
        "MacBook Pro",
        "16-inch, M3 Max",
        ethers.parseEther("2.5"),
        "123 Main St, City, Country"
      );

      await expect(tx)
        .to.emit(orderTracking, "OrderCreated")
        .withArgs(
          1,
          customer.address,
          merchant.address,
          "MacBook Pro",
          ethers.parseEther("2.5"),
          await ethers.provider.getBlock("latest").then(b => b.timestamp)
        );

      const order = await orderTracking.getOrder(1);
      expect(order.customer).to.equal(customer.address);
      expect(order.merchant).to.equal(merchant.address);
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
          customer.address,
          "Product",
          "Description",
          ethers.parseEther("1"),
          "Address"
        )
      ).to.be.revertedWith("Cannot create order for yourself");
    });

    it("Should track customer orders", async function () {
      await orderTracking.connect(customer).createOrder(
        merchant.address,
        "Product 1",
        "Description",
        ethers.parseEther("1"),
        "Address"
      );

      await orderTracking.connect(customer).createOrder(
        merchant.address,
        "Product 2",
        "Description",
        ethers.parseEther("2"),
        "Address"
      );

      const customerOrders = await orderTracking.getCustomerOrders(customer.address);
      expect(customerOrders.length).to.equal(2);
      expect(customerOrders[0]).to.equal(1);
      expect(customerOrders[1]).to.equal(2);
    });
  });

  describe("Order Updates", function () {
    beforeEach(async function () {
      await orderTracking.connect(customer).createOrder(
        merchant.address,
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
        .withArgs(1, 1, merchant.address, await ethers.provider.getBlock("latest").then(b => b.timestamp));

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
        merchant.address,
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
        .withArgs(1, customer.address, await ethers.provider.getBlock("latest").then(b => b.timestamp));

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
        merchant.address,
        "Product 1",
        "Description 1",
        ethers.parseEther("1"),
        "Address 1"
      );

      await orderTracking.connect(customer).createOrder(
        merchant.address,
        "Product 2",
        "Description 2",
        ethers.parseEther("2"),
        "Address 2"
      );
    });

    it("Should get merchant orders", async function () {
      const merchantOrders = await orderTracking.getMerchantOrders(merchant.address);
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
      expect(await orderTracking.isOrderParticipant(1, customer.address)).to.be.true;
      expect(await orderTracking.isOrderParticipant(1, merchant.address)).to.be.true;
      expect(await orderTracking.isOrderParticipant(1, other.address)).to.be.false;
    });
  });
});
