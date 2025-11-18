import { Order } from "./types";

/**
 * Export orders to JSON file
 */
export function exportOrdersToJSON(orders: Order[], filename?: string) {
  const data = JSON.stringify(orders, null, 2);
  const blob = new Blob([data], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download =
    filename || `orders-${new Date().toISOString().split("T")[0]}.json`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

/**
 * Export orders to CSV file
 */
export function exportOrdersToCSV(orders: Order[], filename?: string) {
  const headers = [
    "Order Number",
    "Product Name",
    "Buyer",
    "Seller",
    "Quantity",
    "Price",
    "Currency",
    "Status",
    "Network",
    "Created At",
    "Updated At",
  ];

  const rows = orders.map((order) => [
    order.orderNumber,
    order.productName,
    order.buyer,
    order.seller,
    order.quantity.toString(),
    order.price,
    order.currency,
    order.status,
    order.network,
    new Date(order.createdAt * 1000).toISOString(),
    new Date(order.updatedAt * 1000).toISOString(),
  ]);

  const csvContent = [
    headers.join(","),
    ...rows.map((row) => row.map((cell) => `"${cell}"`).join(",")),
  ].join("\n");

  const blob = new Blob([csvContent], { type: "text/csv" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download =
    filename || `orders-${new Date().toISOString().split("T")[0]}.csv`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
