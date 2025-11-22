module.exports = [
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[project]/Desktop/walletconnect/chilly/frontend/lib/mockData.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "mockOrders",
    ()=>mockOrders,
    "mockStats",
    ()=>mockStats
]);
const mockOrders = [
    {
        id: "1",
        orderNumber: "ORD-001",
        buyer: "0x1234567890123456789012345678901234567890",
        seller: "0x0987654321098765432109876543210987654321",
        productName: "Premium Coffee Beans",
        productDescription: "Ethically sourced Arabica coffee beans from Colombia",
        quantity: 2,
        price: "0.5",
        currency: "ETH",
        status: "pending",
        createdAt: Math.floor(Date.now() / 1000) - 86400,
        updatedAt: Math.floor(Date.now() / 1000) - 86400,
        network: "mainnet",
        transactionHash: "0xabcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890"
    },
    {
        id: "2",
        orderNumber: "ORD-002",
        buyer: "0x1234567890123456789012345678901234567890",
        seller: "0x0987654321098765432109876543210987654321",
        productName: "Wireless Headphones",
        productDescription: "High-quality noise-cancelling wireless headphones",
        quantity: 1,
        price: "0.3",
        currency: "ETH",
        status: "processing",
        createdAt: Math.floor(Date.now() / 1000) - 172800,
        updatedAt: Math.floor(Date.now() / 1000) - 86400,
        network: "polygon",
        trackingNumber: "TRK-123456789"
    },
    {
        id: "3",
        orderNumber: "ORD-003",
        buyer: "0x1234567890123456789012345678901234567890",
        seller: "0x0987654321098765432109876543210987654321",
        productName: "Smart Watch",
        productDescription: "Latest generation smartwatch with health tracking",
        quantity: 1,
        price: "0.8",
        currency: "ETH",
        status: "shipped",
        createdAt: Math.floor(Date.now() / 1000) - 259200,
        updatedAt: Math.floor(Date.now() / 1000) - 43200,
        network: "arbitrum",
        trackingNumber: "TRK-987654321",
        estimatedDelivery: Math.floor(Date.now() / 1000) + 172800
    },
    {
        id: "4",
        orderNumber: "ORD-004",
        buyer: "0x1234567890123456789012345678901234567890",
        seller: "0x0987654321098765432109876543210987654321",
        productName: "Laptop Stand",
        productDescription: "Ergonomic adjustable laptop stand",
        quantity: 1,
        price: "0.15",
        currency: "ETH",
        status: "delivered",
        createdAt: Math.floor(Date.now() / 1000) - 604800,
        updatedAt: Math.floor(Date.now() / 1000) - 86400,
        network: "mainnet",
        trackingNumber: "TRK-456789123"
    }
];
const mockStats = {
    total: mockOrders.length,
    pending: mockOrders.filter((o)=>o.status === "pending").length,
    confirmed: mockOrders.filter((o)=>o.status === "confirmed").length,
    processing: mockOrders.filter((o)=>o.status === "processing").length,
    shipped: mockOrders.filter((o)=>o.status === "shipped").length,
    delivered: mockOrders.filter((o)=>o.status === "delivered").length,
    cancelled: mockOrders.filter((o)=>o.status === "cancelled").length,
    disputed: mockOrders.filter((o)=>o.status === "disputed").length,
    totalValue: mockOrders.reduce((sum, o)=>sum + parseFloat(o.price), 0).toFixed(2)
};
}),
"[project]/Desktop/walletconnect/chilly/frontend/components/dashboard/OrderStats.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "OrderStatsComponent",
    ()=>OrderStatsComponent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
"use client";
;
function OrderStatsComponent({ stats }) {
    const statItems = [
        {
            label: "Total Orders",
            value: stats.total,
            color: "text-zinc-900 dark:text-zinc-50"
        },
        {
            label: "Pending",
            value: stats.pending,
            color: "text-yellow-600 dark:text-yellow-400"
        },
        {
            label: "Processing",
            value: stats.processing,
            color: "text-purple-600 dark:text-purple-400"
        },
        {
            label: "Shipped",
            value: stats.shipped,
            color: "text-indigo-600 dark:text-indigo-400"
        },
        {
            label: "Delivered",
            value: stats.delivered,
            color: "text-green-600 dark:text-green-400"
        },
        {
            label: "Total Value",
            value: `${stats.totalValue} ETH`,
            color: "text-orange-600 dark:text-orange-400"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4",
        children: statItems.map((item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-zinc-600 dark:text-zinc-400 mb-1",
                        children: item.label
                    }, void 0, false, {
                        fileName: "[project]/Desktop/walletconnect/chilly/frontend/components/dashboard/OrderStats.tsx",
                        lineNumber: 51,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: `text-2xl font-bold ${item.color}`,
                        children: item.value
                    }, void 0, false, {
                        fileName: "[project]/Desktop/walletconnect/chilly/frontend/components/dashboard/OrderStats.tsx",
                        lineNumber: 54,
                        columnNumber: 11
                    }, this)
                ]
            }, index, true, {
                fileName: "[project]/Desktop/walletconnect/chilly/frontend/components/dashboard/OrderStats.tsx",
                lineNumber: 47,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/Desktop/walletconnect/chilly/frontend/components/dashboard/OrderStats.tsx",
        lineNumber: 45,
        columnNumber: 5
    }, this);
}
}),
"[project]/Desktop/walletconnect/chilly/frontend/components/dashboard/OrderFilters.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "OrderFiltersComponent",
    ()=>OrderFiltersComponent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
"use client";
;
const statusOptions = [
    "all",
    "pending",
    "confirmed",
    "processing",
    "shipped",
    "delivered",
    "cancelled",
    "disputed"
];
const networkOptions = [
    "all",
    "mainnet",
    "sepolia",
    "polygon",
    "arbitrum"
];
function OrderFiltersComponent({ filters, onFiltersChange }) {
    const handleStatusChange = (status)=>{
        onFiltersChange({
            ...filters,
            status
        });
    };
    const handleNetworkChange = (network)=>{
        onFiltersChange({
            ...filters,
            network
        });
    };
    const handleSearchChange = (search)=>{
        onFiltersChange({
            ...filters,
            search
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col sm:flex-row gap-4 p-4 bg-zinc-50 dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "text",
                    placeholder: "Search orders...",
                    value: filters.search || "",
                    onChange: (e)=>handleSearchChange(e.target.value),
                    className: "w-full px-4 py-2 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-50 placeholder-zinc-500 dark:placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-orange-500 dark:focus:ring-orange-400"
                }, void 0, false, {
                    fileName: "[project]/Desktop/walletconnect/chilly/frontend/components/dashboard/OrderFilters.tsx",
                    lineNumber: 44,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/walletconnect/chilly/frontend/components/dashboard/OrderFilters.tsx",
                lineNumber: 43,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "sm:w-48",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                    value: filters.status || "all",
                    onChange: (e)=>handleStatusChange(e.target.value),
                    className: "w-full px-4 py-2 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-50 focus:outline-none focus:ring-2 focus:ring-orange-500 dark:focus:ring-orange-400",
                    children: statusOptions.map((status)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                            value: status,
                            children: status === "all" ? "All Statuses" : status.charAt(0).toUpperCase() + status.slice(1)
                        }, status, false, {
                            fileName: "[project]/Desktop/walletconnect/chilly/frontend/components/dashboard/OrderFilters.tsx",
                            lineNumber: 63,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Desktop/walletconnect/chilly/frontend/components/dashboard/OrderFilters.tsx",
                    lineNumber: 55,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/walletconnect/chilly/frontend/components/dashboard/OrderFilters.tsx",
                lineNumber: 54,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "sm:w-40",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                    value: filters.network || "all",
                    onChange: (e)=>handleNetworkChange(e.target.value),
                    className: "w-full px-4 py-2 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-50 focus:outline-none focus:ring-2 focus:ring-orange-500 dark:focus:ring-orange-400",
                    children: networkOptions.map((network)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                            value: network,
                            children: network === "all" ? "All Networks" : network.charAt(0).toUpperCase() + network.slice(1)
                        }, network, false, {
                            fileName: "[project]/Desktop/walletconnect/chilly/frontend/components/dashboard/OrderFilters.tsx",
                            lineNumber: 80,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Desktop/walletconnect/chilly/frontend/components/dashboard/OrderFilters.tsx",
                    lineNumber: 74,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/walletconnect/chilly/frontend/components/dashboard/OrderFilters.tsx",
                lineNumber: 73,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/walletconnect/chilly/frontend/components/dashboard/OrderFilters.tsx",
        lineNumber: 41,
        columnNumber: 5
    }, this);
}
}),
"[project]/Desktop/walletconnect/chilly/frontend/components/dashboard/OrderCard.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "OrderCard",
    ()=>OrderCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$date$2d$fns$2f$esm$2f$formatDistanceToNow$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__formatDistanceToNow$3e$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/date-fns/esm/formatDistanceToNow/index.js [app-ssr] (ecmascript) <export default as formatDistanceToNow>");
"use client";
;
;
const statusColors = {
    pending: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400",
    confirmed: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400",
    processing: "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400",
    shipped: "bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-400",
    delivered: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400",
    cancelled: "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400",
    disputed: "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-400"
};
const statusIcons = {
    pending: "⏳",
    confirmed: "✅",
    processing: "⚙️",
    shipped: "🚚",
    delivered: "📦",
    cancelled: "❌",
    disputed: "⚠️"
};
function OrderCard({ order, onClick }) {
    const formatAddress = (address)=>{
        return `${address.slice(0, 6)}...${address.slice(-4)}`;
    };
    const formatPrice = (price, currency)=>{
        // In a real app, you'd convert wei to ETH or format token amounts
        return `${price} ${currency}`;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        onClick: onClick,
        className: "group p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:border-zinc-300 dark:hover:border-zinc-700 hover:shadow-lg transition-all duration-200 cursor-pointer",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-start justify-between mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-lg font-semibold text-zinc-900 dark:text-zinc-50 mb-1",
                                children: order.productName
                            }, void 0, false, {
                                fileName: "[project]/Desktop/walletconnect/chilly/frontend/components/dashboard/OrderCard.tsx",
                                lineNumber: 54,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-zinc-500 dark:text-zinc-400",
                                children: [
                                    "Order #",
                                    order.orderNumber
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/walletconnect/chilly/frontend/components/dashboard/OrderCard.tsx",
                                lineNumber: 57,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/walletconnect/chilly/frontend/components/dashboard/OrderCard.tsx",
                        lineNumber: 53,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: `inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium ${statusColors[order.status]}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: statusIcons[order.status]
                            }, void 0, false, {
                                fileName: "[project]/Desktop/walletconnect/chilly/frontend/components/dashboard/OrderCard.tsx",
                                lineNumber: 66,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "capitalize",
                                children: order.status
                            }, void 0, false, {
                                fileName: "[project]/Desktop/walletconnect/chilly/frontend/components/dashboard/OrderCard.tsx",
                                lineNumber: 67,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/walletconnect/chilly/frontend/components/dashboard/OrderCard.tsx",
                        lineNumber: 61,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/walletconnect/chilly/frontend/components/dashboard/OrderCard.tsx",
                lineNumber: 52,
                columnNumber: 7
            }, this),
            order.productDescription && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm text-zinc-600 dark:text-zinc-400 mb-4 line-clamp-2",
                children: order.productDescription
            }, void 0, false, {
                fileName: "[project]/Desktop/walletconnect/chilly/frontend/components/dashboard/OrderCard.tsx",
                lineNumber: 72,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-2 gap-4 mb-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-zinc-500 dark:text-zinc-400 mb-1",
                                children: "Quantity"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/walletconnect/chilly/frontend/components/dashboard/OrderCard.tsx",
                                lineNumber: 79,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm font-medium text-zinc-900 dark:text-zinc-50",
                                children: order.quantity
                            }, void 0, false, {
                                fileName: "[project]/Desktop/walletconnect/chilly/frontend/components/dashboard/OrderCard.tsx",
                                lineNumber: 82,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/walletconnect/chilly/frontend/components/dashboard/OrderCard.tsx",
                        lineNumber: 78,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-zinc-500 dark:text-zinc-400 mb-1",
                                children: "Price"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/walletconnect/chilly/frontend/components/dashboard/OrderCard.tsx",
                                lineNumber: 87,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm font-medium text-zinc-900 dark:text-zinc-50",
                                children: formatPrice(order.price, order.currency)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/walletconnect/chilly/frontend/components/dashboard/OrderCard.tsx",
                                lineNumber: 88,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/walletconnect/chilly/frontend/components/dashboard/OrderCard.tsx",
                        lineNumber: 86,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/walletconnect/chilly/frontend/components/dashboard/OrderCard.tsx",
                lineNumber: 77,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between pt-4 border-t border-zinc-200 dark:border-zinc-800",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Buyer:"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/walletconnect/chilly/frontend/components/dashboard/OrderCard.tsx",
                                lineNumber: 96,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                className: "px-2 py-1 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300",
                                children: formatAddress(order.buyer)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/walletconnect/chilly/frontend/components/dashboard/OrderCard.tsx",
                                lineNumber: 97,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/walletconnect/chilly/frontend/components/dashboard/OrderCard.tsx",
                        lineNumber: 95,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-xs text-zinc-500 dark:text-zinc-400",
                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$date$2d$fns$2f$esm$2f$formatDistanceToNow$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__formatDistanceToNow$3e$__["formatDistanceToNow"])(new Date(order.createdAt * 1000), {
                            addSuffix: true
                        })
                    }, void 0, false, {
                        fileName: "[project]/Desktop/walletconnect/chilly/frontend/components/dashboard/OrderCard.tsx",
                        lineNumber: 101,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/walletconnect/chilly/frontend/components/dashboard/OrderCard.tsx",
                lineNumber: 94,
                columnNumber: 7
            }, this),
            order.trackingNumber && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-3 pt-3 border-t border-zinc-200 dark:border-zinc-800",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-zinc-500 dark:text-zinc-400 mb-1",
                        children: "Tracking"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/walletconnect/chilly/frontend/components/dashboard/OrderCard.tsx",
                        lineNumber: 110,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm font-mono text-zinc-900 dark:text-zinc-50",
                        children: order.trackingNumber
                    }, void 0, false, {
                        fileName: "[project]/Desktop/walletconnect/chilly/frontend/components/dashboard/OrderCard.tsx",
                        lineNumber: 113,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/walletconnect/chilly/frontend/components/dashboard/OrderCard.tsx",
                lineNumber: 109,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/walletconnect/chilly/frontend/components/dashboard/OrderCard.tsx",
        lineNumber: 48,
        columnNumber: 5
    }, this);
}
}),
"[project]/Desktop/walletconnect/chilly/frontend/components/dashboard/OrderList.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "OrderList",
    ()=>OrderList
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$frontend$2f$components$2f$dashboard$2f$OrderCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/frontend/components/dashboard/OrderCard.tsx [app-ssr] (ecmascript)");
"use client";
;
;
function OrderList({ orders, onOrderClick, isLoading }) {
    if (isLoading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
            children: [
                ...Array(6)
            ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 animate-pulse",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-4 bg-zinc-200 dark:bg-zinc-800 rounded w-3/4 mb-4"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/walletconnect/chilly/frontend/components/dashboard/OrderList.tsx",
                            lineNumber: 22,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-3 bg-zinc-200 dark:bg-zinc-800 rounded w-1/2 mb-4"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/walletconnect/chilly/frontend/components/dashboard/OrderList.tsx",
                            lineNumber: 23,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-3 bg-zinc-200 dark:bg-zinc-800 rounded w-full mb-2"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/walletconnect/chilly/frontend/components/dashboard/OrderList.tsx",
                            lineNumber: 24,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-3 bg-zinc-200 dark:bg-zinc-800 rounded w-2/3"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/walletconnect/chilly/frontend/components/dashboard/OrderList.tsx",
                            lineNumber: 25,
                            columnNumber: 13
                        }, this)
                    ]
                }, i, true, {
                    fileName: "[project]/Desktop/walletconnect/chilly/frontend/components/dashboard/OrderList.tsx",
                    lineNumber: 18,
                    columnNumber: 11
                }, this))
        }, void 0, false, {
            fileName: "[project]/Desktop/walletconnect/chilly/frontend/components/dashboard/OrderList.tsx",
            lineNumber: 16,
            columnNumber: 7
        }, this);
    }
    if (orders.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center py-12",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-6xl mb-4",
                    children: "📦"
                }, void 0, false, {
                    fileName: "[project]/Desktop/walletconnect/chilly/frontend/components/dashboard/OrderList.tsx",
                    lineNumber: 35,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "text-xl font-semibold text-zinc-900 dark:text-zinc-50 mb-2",
                    children: "No orders found"
                }, void 0, false, {
                    fileName: "[project]/Desktop/walletconnect/chilly/frontend/components/dashboard/OrderList.tsx",
                    lineNumber: 36,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-zinc-600 dark:text-zinc-400 mb-6",
                    children: orders.length === 0 ? "You don't have any orders yet. Create your first order to get started!" : "Try adjusting your filters to see more results."
                }, void 0, false, {
                    fileName: "[project]/Desktop/walletconnect/chilly/frontend/components/dashboard/OrderList.tsx",
                    lineNumber: 39,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/walletconnect/chilly/frontend/components/dashboard/OrderList.tsx",
            lineNumber: 34,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
        children: orders.map((order)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$frontend$2f$components$2f$dashboard$2f$OrderCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OrderCard"], {
                order: order,
                onClick: ()=>onOrderClick?.(order)
            }, order.id, false, {
                fileName: "[project]/Desktop/walletconnect/chilly/frontend/components/dashboard/OrderList.tsx",
                lineNumber: 51,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/Desktop/walletconnect/chilly/frontend/components/dashboard/OrderList.tsx",
        lineNumber: 49,
        columnNumber: 5
    }, this);
}
}),
"[project]/Desktop/walletconnect/chilly/frontend/components/dashboard/CreateOrderModal.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CreateOrderModal",
    ()=>CreateOrderModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useAccount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/wagmi/dist/esm/hooks/useAccount.js [app-ssr] (ecmascript)");
"use client";
;
;
;
function CreateOrderModal({ isOpen, onClose, onCreateOrder }) {
    const { address } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useAccount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAccount"])();
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        productName: "",
        productDescription: "",
        quantity: 1,
        price: "",
        currency: "ETH",
        seller: ""
    });
    if (!isOpen) return null;
    const handleSubmit = (e)=>{
        e.preventDefault();
        if (!address) return;
        onCreateOrder(formData);
        // Reset form
        setFormData({
            productName: "",
            productDescription: "",
            quantity: 1,
            price: "",
            currency: "ETH",
            seller: ""
        });
    // Don't close automatically - let parent handle it after transaction
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white dark:bg-zinc-900 rounded-2xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-6 border-b border-zinc-200 dark:border-zinc-800",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-2xl font-bold text-zinc-900 dark:text-zinc-50",
                                children: "Create New Order"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/walletconnect/chilly/frontend/components/dashboard/CreateOrderModal.tsx",
                                lineNumber: 58,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onClose,
                                className: "p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-600 dark:text-zinc-400",
                                children: "✕"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/walletconnect/chilly/frontend/components/dashboard/CreateOrderModal.tsx",
                                lineNumber: 61,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/walletconnect/chilly/frontend/components/dashboard/CreateOrderModal.tsx",
                        lineNumber: 57,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/walletconnect/chilly/frontend/components/dashboard/CreateOrderModal.tsx",
                    lineNumber: 56,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: handleSubmit,
                    className: "p-6 space-y-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm font-medium text-zinc-900 dark:text-zinc-50 mb-2",
                                    children: "Product Name *"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/walletconnect/chilly/frontend/components/dashboard/CreateOrderModal.tsx",
                                    lineNumber: 72,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    required: true,
                                    value: formData.productName,
                                    onChange: (e)=>setFormData({
                                            ...formData,
                                            productName: e.target.value
                                        }),
                                    className: "w-full px-4 py-2 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-50 focus:outline-none focus:ring-2 focus:ring-orange-500",
                                    placeholder: "Enter product name"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/walletconnect/chilly/frontend/components/dashboard/CreateOrderModal.tsx",
                                    lineNumber: 75,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/walletconnect/chilly/frontend/components/dashboard/CreateOrderModal.tsx",
                            lineNumber: 71,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm font-medium text-zinc-900 dark:text-zinc-50 mb-2",
                                    children: "Product Description"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/walletconnect/chilly/frontend/components/dashboard/CreateOrderModal.tsx",
                                    lineNumber: 88,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                    value: formData.productDescription,
                                    onChange: (e)=>setFormData({
                                            ...formData,
                                            productDescription: e.target.value
                                        }),
                                    rows: 4,
                                    className: "w-full px-4 py-2 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-50 focus:outline-none focus:ring-2 focus:ring-orange-500",
                                    placeholder: "Enter product description"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/walletconnect/chilly/frontend/components/dashboard/CreateOrderModal.tsx",
                                    lineNumber: 91,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/walletconnect/chilly/frontend/components/dashboard/CreateOrderModal.tsx",
                            lineNumber: 87,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-2 gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium text-zinc-900 dark:text-zinc-50 mb-2",
                                            children: "Quantity *"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/walletconnect/chilly/frontend/components/dashboard/CreateOrderModal.tsx",
                                            lineNumber: 104,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "number",
                                            required: true,
                                            min: "1",
                                            value: formData.quantity,
                                            onChange: (e)=>setFormData({
                                                    ...formData,
                                                    quantity: parseInt(e.target.value) || 1
                                                }),
                                            className: "w-full px-4 py-2 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-50 focus:outline-none focus:ring-2 focus:ring-orange-500"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/walletconnect/chilly/frontend/components/dashboard/CreateOrderModal.tsx",
                                            lineNumber: 107,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/walletconnect/chilly/frontend/components/dashboard/CreateOrderModal.tsx",
                                    lineNumber: 103,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium text-zinc-900 dark:text-zinc-50 mb-2",
                                            children: "Currency"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/walletconnect/chilly/frontend/components/dashboard/CreateOrderModal.tsx",
                                            lineNumber: 123,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: formData.currency,
                                            onChange: (e)=>setFormData({
                                                    ...formData,
                                                    currency: e.target.value
                                                }),
                                            className: "w-full px-4 py-2 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-50 focus:outline-none focus:ring-2 focus:ring-orange-500",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "ETH",
                                                    children: "ETH"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/walletconnect/chilly/frontend/components/dashboard/CreateOrderModal.tsx",
                                                    lineNumber: 133,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "USDC",
                                                    children: "USDC"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/walletconnect/chilly/frontend/components/dashboard/CreateOrderModal.tsx",
                                                    lineNumber: 134,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "USDT",
                                                    children: "USDT"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/walletconnect/chilly/frontend/components/dashboard/CreateOrderModal.tsx",
                                                    lineNumber: 135,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "DAI",
                                                    children: "DAI"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/walletconnect/chilly/frontend/components/dashboard/CreateOrderModal.tsx",
                                                    lineNumber: 136,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/walletconnect/chilly/frontend/components/dashboard/CreateOrderModal.tsx",
                                            lineNumber: 126,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/walletconnect/chilly/frontend/components/dashboard/CreateOrderModal.tsx",
                                    lineNumber: 122,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/walletconnect/chilly/frontend/components/dashboard/CreateOrderModal.tsx",
                            lineNumber: 102,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm font-medium text-zinc-900 dark:text-zinc-50 mb-2",
                                    children: "Price *"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/walletconnect/chilly/frontend/components/dashboard/CreateOrderModal.tsx",
                                    lineNumber: 142,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    required: true,
                                    value: formData.price,
                                    onChange: (e)=>setFormData({
                                            ...formData,
                                            price: e.target.value
                                        }),
                                    className: "w-full px-4 py-2 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-50 focus:outline-none focus:ring-2 focus:ring-orange-500",
                                    placeholder: "0.0"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/walletconnect/chilly/frontend/components/dashboard/CreateOrderModal.tsx",
                                    lineNumber: 145,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-1 text-xs text-zinc-500 dark:text-zinc-400",
                                    children: [
                                        "Enter price in ",
                                        formData.currency
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/walletconnect/chilly/frontend/components/dashboard/CreateOrderModal.tsx",
                                    lineNumber: 155,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/walletconnect/chilly/frontend/components/dashboard/CreateOrderModal.tsx",
                            lineNumber: 141,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm font-medium text-zinc-900 dark:text-zinc-50 mb-2",
                                    children: "Seller Address (Optional)"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/walletconnect/chilly/frontend/components/dashboard/CreateOrderModal.tsx",
                                    lineNumber: 161,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    value: formData.seller,
                                    onChange: (e)=>setFormData({
                                            ...formData,
                                            seller: e.target.value
                                        }),
                                    className: "w-full px-4 py-2 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-50 focus:outline-none focus:ring-2 focus:ring-orange-500 font-mono text-sm",
                                    placeholder: "0x..."
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/walletconnect/chilly/frontend/components/dashboard/CreateOrderModal.tsx",
                                    lineNumber: 164,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-1 text-xs text-zinc-500 dark:text-zinc-400",
                                    children: "Leave empty to use zero address (for testing)"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/walletconnect/chilly/frontend/components/dashboard/CreateOrderModal.tsx",
                                    lineNumber: 173,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/walletconnect/chilly/frontend/components/dashboard/CreateOrderModal.tsx",
                            lineNumber: 160,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-4 pt-4 border-t border-zinc-200 dark:border-zinc-800",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: onClose,
                                    className: "flex-1 px-6 py-3 rounded-lg border border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-zinc-50 font-medium hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors",
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/walletconnect/chilly/frontend/components/dashboard/CreateOrderModal.tsx",
                                    lineNumber: 179,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "submit",
                                    className: "flex-1 px-6 py-3 rounded-lg bg-orange-600 text-white font-medium hover:bg-orange-700 transition-colors",
                                    children: "Create Order"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/walletconnect/chilly/frontend/components/dashboard/CreateOrderModal.tsx",
                                    lineNumber: 186,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/walletconnect/chilly/frontend/components/dashboard/CreateOrderModal.tsx",
                            lineNumber: 178,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/walletconnect/chilly/frontend/components/dashboard/CreateOrderModal.tsx",
                    lineNumber: 70,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/walletconnect/chilly/frontend/components/dashboard/CreateOrderModal.tsx",
            lineNumber: 55,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/walletconnect/chilly/frontend/components/dashboard/CreateOrderModal.tsx",
        lineNumber: 54,
        columnNumber: 5
    }, this);
}
}),
"[project]/Desktop/walletconnect/chilly/frontend/components/ThemeToggle.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ThemeToggle",
    ()=>ThemeToggle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$frontend$2f$lib$2f$ThemeProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/frontend/lib/ThemeProvider.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
function ThemeToggle() {
    const { theme, toggleTheme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$frontend$2f$lib$2f$ThemeProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTheme"])();
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setMounted(true);
    }, []);
    if (!mounted) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-10 h-10 rounded-lg bg-zinc-100 dark:bg-zinc-800"
        }, void 0, false, {
            fileName: "[project]/Desktop/walletconnect/chilly/frontend/components/ThemeToggle.tsx",
            lineNumber: 16,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: toggleTheme,
        className: "relative inline-flex items-center justify-center w-10 h-10 rounded-lg bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-all duration-300 group",
        "aria-label": "Toggle theme",
        title: `Switch to ${theme === "light" ? "dark" : "light"} mode`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: `absolute w-5 h-5 transition-all duration-300 ${theme === "light" ? "opacity-100 rotate-0 scale-100" : "opacity-0 rotate-90 scale-0"}`,
                fill: "none",
                viewBox: "0 0 24 24",
                stroke: "currentColor",
                strokeWidth: 2,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    d: "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                }, void 0, false, {
                    fileName: "[project]/Desktop/walletconnect/chilly/frontend/components/ThemeToggle.tsx",
                    lineNumber: 39,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/walletconnect/chilly/frontend/components/ThemeToggle.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                className: `absolute w-5 h-5 transition-all duration-300 ${theme === "dark" ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-0"}`,
                fill: "none",
                viewBox: "0 0 24 24",
                stroke: "currentColor",
                strokeWidth: 2,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    d: "M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                }, void 0, false, {
                    fileName: "[project]/Desktop/walletconnect/chilly/frontend/components/ThemeToggle.tsx",
                    lineNumber: 58,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/walletconnect/chilly/frontend/components/ThemeToggle.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "absolute inset-0 rounded-lg bg-orange-500/20 scale-0 group-active:scale-100 transition-transform duration-200"
            }, void 0, false, {
                fileName: "[project]/Desktop/walletconnect/chilly/frontend/components/ThemeToggle.tsx",
                lineNumber: 66,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/walletconnect/chilly/frontend/components/ThemeToggle.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
}
}),
"[project]/Desktop/walletconnect/chilly/frontend/components/dashboard/Sidebar.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Sidebar",
    ()=>Sidebar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useAccount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/wagmi/dist/esm/hooks/useAccount.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$frontend$2f$components$2f$ThemeToggle$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/frontend/components/ThemeToggle.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
function Sidebar() {
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const { isConnected, address } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useAccount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAccount"])();
    const navItems = [
        {
            name: "Dashboard",
            href: "/dashboard",
            icon: "📊"
        },
        {
            name: "Analytics",
            href: "/analytics",
            icon: "📈"
        },
        {
            name: "My Orders",
            href: "/dashboard",
            icon: "📦"
        },
        {
            name: "Create Order",
            href: "/dashboard?create=true",
            icon: "➕"
        }
    ];
    const isActive = (href)=>{
        if (href === "/dashboard") {
            return pathname === "/dashboard";
        }
        return pathname?.startsWith(href);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
        className: "fixed left-0 top-0 h-full w-64 bg-white dark:bg-zinc-900 border-r border-zinc-200 dark:border-zinc-800 z-40 hidden lg:block shadow-sm",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col h-full",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-6 border-b border-zinc-200 dark:border-zinc-800",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-2xl",
                                children: "🌶️"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/walletconnect/chilly/frontend/components/dashboard/Sidebar.tsx",
                                lineNumber: 40,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xl font-bold text-zinc-900 dark:text-white",
                                children: "Chilly"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/walletconnect/chilly/frontend/components/dashboard/Sidebar.tsx",
                                lineNumber: 41,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/walletconnect/chilly/frontend/components/dashboard/Sidebar.tsx",
                        lineNumber: 39,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/walletconnect/chilly/frontend/components/dashboard/Sidebar.tsx",
                    lineNumber: 38,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                    className: "flex-1 p-4 space-y-2 overflow-y-auto",
                    children: navItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            href: item.href,
                            className: `flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${isActive(item.href) ? "bg-orange-600 text-white shadow-md" : "text-zinc-700 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:text-zinc-900 dark:hover:text-white"}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xl",
                                    children: item.icon
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/walletconnect/chilly/frontend/components/dashboard/Sidebar.tsx",
                                    lineNumber: 57,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-medium",
                                    children: item.name
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/walletconnect/chilly/frontend/components/dashboard/Sidebar.tsx",
                                    lineNumber: 58,
                                    columnNumber: 15
                                }, this),
                                item.badge && item.badge > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "ml-auto bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full",
                                    children: item.badge
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/walletconnect/chilly/frontend/components/dashboard/Sidebar.tsx",
                                    lineNumber: 60,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, item.href, true, {
                            fileName: "[project]/Desktop/walletconnect/chilly/frontend/components/dashboard/Sidebar.tsx",
                            lineNumber: 48,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/Desktop/walletconnect/chilly/frontend/components/dashboard/Sidebar.tsx",
                    lineNumber: 46,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-4 border-t border-zinc-200 dark:border-zinc-800",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between px-4 py-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm font-medium text-zinc-700 dark:text-zinc-400",
                                children: "Theme"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/walletconnect/chilly/frontend/components/dashboard/Sidebar.tsx",
                                lineNumber: 71,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$frontend$2f$components$2f$ThemeToggle$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ThemeToggle"], {}, void 0, false, {
                                fileName: "[project]/Desktop/walletconnect/chilly/frontend/components/dashboard/Sidebar.tsx",
                                lineNumber: 72,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/walletconnect/chilly/frontend/components/dashboard/Sidebar.tsx",
                        lineNumber: 70,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/walletconnect/chilly/frontend/components/dashboard/Sidebar.tsx",
                    lineNumber: 69,
                    columnNumber: 9
                }, this),
                isConnected && address && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-4 border-t border-zinc-200 dark:border-zinc-800",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "px-4 py-3 rounded-lg bg-zinc-100 dark:bg-zinc-800",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-zinc-500 dark:text-zinc-400 mb-1",
                                children: "Connected Wallet"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/walletconnect/chilly/frontend/components/dashboard/Sidebar.tsx",
                                lineNumber: 80,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm font-mono text-zinc-900 dark:text-white truncate",
                                children: [
                                    address.slice(0, 6),
                                    "...",
                                    address.slice(-4)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/walletconnect/chilly/frontend/components/dashboard/Sidebar.tsx",
                                lineNumber: 81,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/walletconnect/chilly/frontend/components/dashboard/Sidebar.tsx",
                        lineNumber: 79,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/walletconnect/chilly/frontend/components/dashboard/Sidebar.tsx",
                    lineNumber: 78,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-4 border-t border-zinc-200 dark:border-zinc-800",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        className: "flex items-center gap-3 px-4 py-3 rounded-lg text-zinc-700 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:text-zinc-900 dark:hover:text-white transition-colors",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "🏠"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/walletconnect/chilly/frontend/components/dashboard/Sidebar.tsx",
                                lineNumber: 94,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-medium",
                                children: "Home"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/walletconnect/chilly/frontend/components/dashboard/Sidebar.tsx",
                                lineNumber: 95,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/walletconnect/chilly/frontend/components/dashboard/Sidebar.tsx",
                        lineNumber: 90,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/walletconnect/chilly/frontend/components/dashboard/Sidebar.tsx",
                    lineNumber: 89,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/walletconnect/chilly/frontend/components/dashboard/Sidebar.tsx",
            lineNumber: 36,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/walletconnect/chilly/frontend/components/dashboard/Sidebar.tsx",
        lineNumber: 35,
        columnNumber: 5
    }, this);
}
}),
"[project]/Desktop/walletconnect/chilly/frontend/lib/exportUtils.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "exportOrdersToCSV",
    ()=>exportOrdersToCSV,
    "exportOrdersToJSON",
    ()=>exportOrdersToJSON
]);
function exportOrdersToJSON(orders, filename) {
    const data = JSON.stringify(orders, null, 2);
    const blob = new Blob([
        data
    ], {
        type: "application/json"
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename || `orders-${new Date().toISOString().split("T")[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}
function exportOrdersToCSV(orders, filename) {
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
        "Updated At"
    ];
    const rows = orders.map((order)=>[
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
            new Date(order.updatedAt * 1000).toISOString()
        ]);
    const csvContent = [
        headers.join(","),
        ...rows.map((row)=>row.map((cell)=>`"${cell}"`).join(","))
    ].join("\n");
    const blob = new Blob([
        csvContent
    ], {
        type: "text/csv"
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename || `orders-${new Date().toISOString().split("T")[0]}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}
}),
"[project]/Desktop/walletconnect/chilly/frontend/lib/contract.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CONTRACT_ADDRESSES",
    ()=>CONTRACT_ADDRESSES,
    "ContractOrderStatus",
    ()=>ContractOrderStatus,
    "appStatusToContractStatus",
    ()=>appStatusToContractStatus,
    "contractHelpers",
    ()=>contractHelpers,
    "contractStatusToAppStatus",
    ()=>contractStatusToAppStatus,
    "getContractAddress",
    ()=>getContractAddress
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$unit$2f$parseEther$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/viem/_esm/utils/unit/parseEther.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$unit$2f$formatEther$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/viem/_esm/utils/unit/formatEther.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$frontend$2f$lib$2f$abis$2f$OrderTracking$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/frontend/lib/abis/OrderTracking.ts [app-ssr] (ecmascript)");
;
;
const CONTRACT_ADDRESSES = {
    1: "0x0000000000000000000000000000000000000000",
    11155111: "0x0000000000000000000000000000000000000000",
    84532: "0x52809f71eF62f367AA7eD1596fd7d70C91c15ce3",
    137: "0x0000000000000000000000000000000000000000",
    42161: "0x0000000000000000000000000000000000000000"
};
var ContractOrderStatus = /*#__PURE__*/ function(ContractOrderStatus) {
    ContractOrderStatus[ContractOrderStatus["Pending"] = 0] = "Pending";
    ContractOrderStatus[ContractOrderStatus["Confirmed"] = 1] = "Confirmed";
    ContractOrderStatus[ContractOrderStatus["Processing"] = 2] = "Processing";
    ContractOrderStatus[ContractOrderStatus["Shipped"] = 3] = "Shipped";
    ContractOrderStatus[ContractOrderStatus["Delivered"] = 4] = "Delivered";
    ContractOrderStatus[ContractOrderStatus["Cancelled"] = 5] = "Cancelled";
    ContractOrderStatus[ContractOrderStatus["Disputed"] = 6] = "Disputed";
    return ContractOrderStatus;
}({});
function contractStatusToAppStatus(status) {
    const statusMap = {
        [0]: "pending",
        [1]: "confirmed",
        [2]: "processing",
        [3]: "shipped",
        [4]: "delivered",
        [5]: "cancelled",
        [6]: "disputed"
    };
    return statusMap[status] || "pending";
}
function appStatusToContractStatus(status) {
    const statusMap = {
        pending: 0,
        confirmed: 1,
        processing: 2,
        shipped: 3,
        delivered: 4,
        cancelled: 5,
        disputed: 6
    };
    return statusMap[status.toLowerCase()] || 0;
}
function getContractAddress(chainId) {
    return CONTRACT_ADDRESSES[chainId] || null;
}
const contractHelpers = {
    /**
   * Format order price from wei
   */ formatPrice: (price)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$unit$2f$formatEther$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatEther"])(price),
    /**
   * Parse order price to wei
   */ parsePrice: (price)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$unit$2f$parseEther$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseEther"])(price),
    /**
   * Get contract ABI
   */ getABI: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$frontend$2f$lib$2f$abis$2f$OrderTracking$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OrderTrackingABI"]
};
}),
"[project]/Desktop/walletconnect/chilly/frontend/hooks/useOrderContract.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useAddTrackingNumber",
    ()=>useAddTrackingNumber,
    "useCancelOrder",
    ()=>useCancelOrder,
    "useConfirmOrder",
    ()=>useConfirmOrder,
    "useContractAddress",
    ()=>useContractAddress,
    "useCreateOrder",
    ()=>useCreateOrder,
    "useDisputeOrder",
    ()=>useDisputeOrder,
    "useMyOrders",
    ()=>useMyOrders,
    "useOrder",
    ()=>useOrder,
    "useTotalOrders",
    ()=>useTotalOrders,
    "useUpdateOrderStatus",
    ()=>useUpdateOrderStatus
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useAccount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/wagmi/dist/esm/hooks/useAccount.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useChainId$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/wagmi/dist/esm/hooks/useChainId.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useReadContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/wagmi/dist/esm/hooks/useReadContract.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useWriteContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/wagmi/dist/esm/hooks/useWriteContract.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useWaitForTransactionReceipt$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/wagmi/dist/esm/hooks/useWaitForTransactionReceipt.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$unit$2f$parseEther$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/viem/_esm/utils/unit/parseEther.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$unit$2f$formatEther$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/viem/_esm/utils/unit/formatEther.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$frontend$2f$lib$2f$abis$2f$OrderTracking$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/frontend/lib/abis/OrderTracking.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$frontend$2f$lib$2f$contract$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/frontend/lib/contract.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
function useContractAddress() {
    const chainId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useChainId$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useChainId"])();
    const address = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$frontend$2f$lib$2f$contract$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getContractAddress"])(chainId);
    return address;
}
function useOrder(orderId) {
    const contractAddress = useContractAddress();
    const chainId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useChainId$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useChainId"])();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useReadContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useReadContract"])({
        address: contractAddress || undefined,
        abi: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$frontend$2f$lib$2f$abis$2f$OrderTracking$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OrderTrackingABI"],
        functionName: "getOrder",
        args: orderId !== null ? [
            BigInt(orderId)
        ] : undefined,
        query: {
            enabled: !!contractAddress && orderId !== null
        }
    });
}
function useMyOrders() {
    const { address } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useAccount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAccount"])();
    const contractAddress = useContractAddress();
    const chainId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useChainId$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useChainId"])();
    // Get buyer orders
    const { data: buyerOrderIds } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useReadContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useReadContract"])({
        address: contractAddress || undefined,
        abi: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$frontend$2f$lib$2f$abis$2f$OrderTracking$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OrderTrackingABI"],
        functionName: "getBuyerOrders",
        args: address ? [
            address
        ] : undefined,
        query: {
            enabled: !!contractAddress && !!address
        }
    });
    // Get seller orders
    const { data: sellerOrderIds } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useReadContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useReadContract"])({
        address: contractAddress || undefined,
        abi: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$frontend$2f$lib$2f$abis$2f$OrderTracking$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OrderTrackingABI"],
        functionName: "getSellerOrders",
        args: address ? [
            address
        ] : undefined,
        query: {
            enabled: !!contractAddress && !!address
        }
    });
    // Combine and deduplicate order IDs
    const allOrderIds = buyerOrderIds && sellerOrderIds ? [
        ...new Set([
            ...buyerOrderIds,
            ...sellerOrderIds
        ])
    ] : buyerOrderIds || sellerOrderIds || [];
    // Fetch all orders
    const { data: orders, isLoading, error } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useReadContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useReadContract"])({
        address: contractAddress || undefined,
        abi: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$frontend$2f$lib$2f$abis$2f$OrderTracking$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OrderTrackingABI"],
        functionName: "getOrders",
        args: allOrderIds.length > 0 ? [
            allOrderIds
        ] : undefined,
        query: {
            enabled: !!contractAddress && allOrderIds.length > 0
        }
    });
    // Transform contract orders to app orders
    const transformedOrders = orders ? orders.map((order)=>({
            id: order.id.toString(),
            orderNumber: order.orderNumber,
            buyer: order.buyer,
            seller: order.seller,
            productName: order.productName,
            productDescription: order.productDescription,
            quantity: Number(order.quantity),
            price: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$unit$2f$formatEther$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatEther"])(order.price),
            currency: order.currency === "0x0000000000000000000000000000000000000000" ? "ETH" : "TOKEN",
            status: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$frontend$2f$lib$2f$contract$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["contractStatusToAppStatus"])(order.status),
            createdAt: Number(order.createdAt),
            updatedAt: Number(order.updatedAt),
            estimatedDelivery: order.estimatedDelivery > 0 ? Number(order.estimatedDelivery) : undefined,
            trackingNumber: order.trackingNumber || undefined,
            transactionHash: order.transactionHash !== "0x0000000000000000000000000000000000000000" ? order.transactionHash : undefined,
            network: order.network || "mainnet",
            metadata: order.metadataHash ? {
                ipfsHash: order.metadataHash
            } : undefined
        })) : [];
    return {
        orders: transformedOrders,
        isLoading,
        error,
        refetch: ()=>{}
    };
}
function useTotalOrders() {
    const contractAddress = useContractAddress();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useReadContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useReadContract"])({
        address: contractAddress || undefined,
        abi: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$frontend$2f$lib$2f$abis$2f$OrderTracking$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OrderTrackingABI"],
        functionName: "totalOrders",
        query: {
            enabled: !!contractAddress
        }
    });
}
function useCreateOrder() {
    const contractAddress = useContractAddress();
    const { writeContract, data: hash, isPending, error } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useWriteContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useWriteContract"])();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQueryClient"])();
    const { isLoading: isConfirming, isSuccess: isConfirmed } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useWaitForTransactionReceipt$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useWaitForTransactionReceipt"])({
        hash
    });
    const createOrder = async (orderData)=>{
        if (!contractAddress) {
            throw new Error("Contract not deployed on this network");
        }
        const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$unit$2f$parseEther$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseEther"])(orderData.price);
        return writeContract({
            address: contractAddress,
            abi: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$frontend$2f$lib$2f$abis$2f$OrderTracking$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OrderTrackingABI"],
            functionName: "createOrder",
            args: [
                orderData.seller,
                orderData.productName,
                orderData.productDescription,
                BigInt(orderData.quantity),
                "0x0000000000000000000000000000000000000000",
                BigInt(orderData.estimatedDelivery || 0),
                orderData.network,
                orderData.metadataHash || ""
            ],
            value
        });
    };
    // Invalidate orders query after successful creation
    if (isConfirmed) {
        queryClient.invalidateQueries({
            queryKey: [
                "orders"
            ]
        });
    }
    return {
        createOrder,
        hash,
        isPending: isPending || isConfirming,
        isSuccess: isConfirmed,
        error
    };
}
function useUpdateOrderStatus() {
    const contractAddress = useContractAddress();
    const { writeContract, data: hash, isPending, error } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useWriteContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useWriteContract"])();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQueryClient"])();
    const { isLoading: isConfirming, isSuccess: isConfirmed } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useWaitForTransactionReceipt$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useWaitForTransactionReceipt"])({
        hash
    });
    const updateStatus = async (orderId, newStatus)=>{
        if (!contractAddress) {
            throw new Error("Contract not deployed on this network");
        }
        const contractStatus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$frontend$2f$lib$2f$contract$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["appStatusToContractStatus"])(newStatus);
        return writeContract({
            address: contractAddress,
            abi: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$frontend$2f$lib$2f$abis$2f$OrderTracking$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OrderTrackingABI"],
            functionName: "updateOrderStatus",
            args: [
                BigInt(orderId),
                contractStatus
            ]
        });
    };
    // Invalidate orders query after successful update
    if (isConfirmed) {
        queryClient.invalidateQueries({
            queryKey: [
                "orders"
            ]
        });
    }
    return {
        updateStatus,
        hash,
        isPending: isPending || isConfirming,
        isSuccess: isConfirmed,
        error
    };
}
function useConfirmOrder() {
    const contractAddress = useContractAddress();
    const { writeContract, data: hash, isPending, error } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useWriteContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useWriteContract"])();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQueryClient"])();
    const { isLoading: isConfirming, isSuccess: isConfirmed } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useWaitForTransactionReceipt$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useWaitForTransactionReceipt"])({
        hash
    });
    const confirmOrder = async (orderId)=>{
        if (!contractAddress) {
            throw new Error("Contract not deployed on this network");
        }
        return writeContract({
            address: contractAddress,
            abi: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$frontend$2f$lib$2f$abis$2f$OrderTracking$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OrderTrackingABI"],
            functionName: "confirmOrder",
            args: [
                BigInt(orderId)
            ]
        });
    };
    if (isConfirmed) {
        queryClient.invalidateQueries({
            queryKey: [
                "orders"
            ]
        });
    }
    return {
        confirmOrder,
        hash,
        isPending: isPending || isConfirming,
        isSuccess: isConfirmed,
        error
    };
}
function useAddTrackingNumber() {
    const contractAddress = useContractAddress();
    const { writeContract, data: hash, isPending, error } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useWriteContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useWriteContract"])();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQueryClient"])();
    const { isLoading: isConfirming, isSuccess: isConfirmed } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useWaitForTransactionReceipt$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useWaitForTransactionReceipt"])({
        hash
    });
    const addTracking = async (orderId, trackingNumber)=>{
        if (!contractAddress) {
            throw new Error("Contract not deployed on this network");
        }
        return writeContract({
            address: contractAddress,
            abi: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$frontend$2f$lib$2f$abis$2f$OrderTracking$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OrderTrackingABI"],
            functionName: "addTrackingNumber",
            args: [
                BigInt(orderId),
                trackingNumber
            ]
        });
    };
    if (isConfirmed) {
        queryClient.invalidateQueries({
            queryKey: [
                "orders"
            ]
        });
    }
    return {
        addTracking,
        hash,
        isPending: isPending || isConfirming,
        isSuccess: isConfirmed,
        error
    };
}
function useCancelOrder() {
    const contractAddress = useContractAddress();
    const { writeContract, data: hash, isPending, error } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useWriteContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useWriteContract"])();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQueryClient"])();
    const { isLoading: isConfirming, isSuccess: isConfirmed } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useWaitForTransactionReceipt$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useWaitForTransactionReceipt"])({
        hash
    });
    const cancelOrder = async (orderId, reason)=>{
        if (!contractAddress) {
            throw new Error("Contract not deployed on this network");
        }
        return writeContract({
            address: contractAddress,
            abi: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$frontend$2f$lib$2f$abis$2f$OrderTracking$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OrderTrackingABI"],
            functionName: "cancelOrder",
            args: [
                BigInt(orderId),
                reason
            ]
        });
    };
    if (isConfirmed) {
        queryClient.invalidateQueries({
            queryKey: [
                "orders"
            ]
        });
    }
    return {
        cancelOrder,
        hash,
        isPending: isPending || isConfirming,
        isSuccess: isConfirmed,
        error
    };
}
function useDisputeOrder() {
    const contractAddress = useContractAddress();
    const { writeContract, data: hash, isPending, error } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useWriteContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useWriteContract"])();
    const queryClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQueryClient"])();
    const { isLoading: isConfirming, isSuccess: isConfirmed } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useWaitForTransactionReceipt$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useWaitForTransactionReceipt"])({
        hash
    });
    const disputeOrder = async (orderId, reason)=>{
        if (!contractAddress) {
            throw new Error("Contract not deployed on this network");
        }
        return writeContract({
            address: contractAddress,
            abi: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$frontend$2f$lib$2f$abis$2f$OrderTracking$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OrderTrackingABI"],
            functionName: "disputeOrder",
            args: [
                BigInt(orderId),
                reason
            ]
        });
    };
    if (isConfirmed) {
        queryClient.invalidateQueries({
            queryKey: [
                "orders"
            ]
        });
    }
    return {
        disputeOrder,
        hash,
        isPending: isPending || isConfirming,
        isSuccess: isConfirmed,
        error
    };
}
}),
"[project]/Desktop/walletconnect/chilly/frontend/app/dashboard/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DashboardPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useAccount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/wagmi/dist/esm/hooks/useAccount.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useChainId$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/wagmi/dist/esm/hooks/useChainId.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$frontend$2f$lib$2f$mockData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/frontend/lib/mockData.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$frontend$2f$components$2f$dashboard$2f$OrderStats$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/frontend/components/dashboard/OrderStats.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$frontend$2f$components$2f$dashboard$2f$OrderFilters$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/frontend/components/dashboard/OrderFilters.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$frontend$2f$components$2f$dashboard$2f$OrderList$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/frontend/components/dashboard/OrderList.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$frontend$2f$components$2f$dashboard$2f$CreateOrderModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/frontend/components/dashboard/CreateOrderModal.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$frontend$2f$components$2f$dashboard$2f$Sidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/frontend/components/dashboard/Sidebar.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$frontend$2f$lib$2f$exportUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/frontend/lib/exportUtils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$frontend$2f$hooks$2f$useOrderContract$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/frontend/hooks/useOrderContract.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$frontend$2f$lib$2f$contract$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/frontend/lib/contract.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
;
function DashboardPage() {
    const { isConnected, address } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useAccount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAccount"])();
    const chainId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useChainId$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useChainId"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const contractAddress = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$frontend$2f$hooks$2f$useOrderContract$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContractAddress"])();
    const [filters, setFilters] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        status: "all",
        network: "all",
        search: ""
    });
    const [isCreateModalOpen, setIsCreateModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Try to fetch from contract, fallback to mock data
    const { orders: contractOrders, isLoading: isLoadingContract } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$frontend$2f$hooks$2f$useOrderContract$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMyOrders"])();
    const [orders, setOrders] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [useContract, setUseContract] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Check if contract is deployed on current network
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const address = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$frontend$2f$lib$2f$contract$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getContractAddress"])(chainId);
        setUseContract(!!address && address !== "0x0000000000000000000000000000000000000000");
    }, [
        chainId
    ]);
    // Use contract orders if available, otherwise use mock data
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (useContract && contractOrders && contractOrders.length > 0) {
            setOrders(contractOrders);
            setIsLoading(isLoadingContract);
        } else if (!useContract || !contractAddress) {
            // Fallback to mock data if contract not deployed
            setOrders(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$frontend$2f$lib$2f$mockData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mockOrders"]);
            setIsLoading(false);
        } else {
            setOrders([]);
            setIsLoading(isLoadingContract);
        }
    }, [
        contractOrders,
        isLoadingContract,
        useContract,
        contractAddress
    ]);
    // Redirect if not connected
    __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useEffect(()=>{
        if (!isConnected) {
            router.push("/");
        }
    }, [
        isConnected,
        router
    ]);
    // Filter orders based on current filters
    const filteredOrders = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        let filtered = [
            ...orders
        ];
        // Filter by status
        if (filters.status && filters.status !== "all") {
            filtered = filtered.filter((order)=>order.status === filters.status);
        }
        // Filter by network
        if (filters.network && filters.network !== "all") {
            filtered = filtered.filter((order)=>order.network === filters.network);
        }
        // Filter by search
        if (filters.search) {
            const searchLower = filters.search.toLowerCase();
            filtered = filtered.filter((order)=>order.productName.toLowerCase().includes(searchLower) || order.orderNumber.toLowerCase().includes(searchLower) || order.buyer.toLowerCase().includes(searchLower) || order.seller.toLowerCase().includes(searchLower));
        }
        return filtered;
    }, [
        orders,
        filters
    ]);
    // Calculate stats from filtered orders
    const stats = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        return {
            total: filteredOrders.length,
            pending: filteredOrders.filter((o)=>o.status === "pending").length,
            confirmed: filteredOrders.filter((o)=>o.status === "confirmed").length,
            processing: filteredOrders.filter((o)=>o.status === "processing").length,
            shipped: filteredOrders.filter((o)=>o.status === "shipped").length,
            delivered: filteredOrders.filter((o)=>o.status === "delivered").length,
            cancelled: filteredOrders.filter((o)=>o.status === "cancelled").length,
            disputed: filteredOrders.filter((o)=>o.status === "disputed").length,
            totalValue: filteredOrders.reduce((sum, o)=>sum + parseFloat(o.price), 0).toFixed(2)
        };
    }, [
        filteredOrders
    ]);
    const { createOrder, isPending: isCreating, isSuccess: isCreated } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$frontend$2f$hooks$2f$useOrderContract$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCreateOrder"])();
    const handleCreateOrder = async (orderData)=>{
        if (!address) {
            alert("Please connect your wallet");
            return;
        }
        if (useContract && contractAddress) {
            try {
                // Use contract to create order
                const sellerAddress = orderData.seller || "0x0000000000000000000000000000000000000000";
                await createOrder({
                    seller: sellerAddress,
                    productName: orderData.productName,
                    productDescription: orderData.productDescription,
                    quantity: orderData.quantity,
                    price: orderData.price,
                    network: chainId === 1 ? "mainnet" : chainId === 11155111 ? "sepolia" : chainId === 84532 ? "base-sepolia" : "unknown"
                });
            } catch (error) {
                console.error("Failed to create order:", error);
                alert(`Failed to create order: ${error?.message || "Unknown error"}`);
            }
        } else {
            // Fallback to mock data
            const newOrder = {
                id: Date.now().toString(),
                orderNumber: `ORD-${String(orders.length + 1).padStart(3, "0")}`,
                buyer: address,
                seller: orderData.seller || "0x0000000000000000000000000000000000000000",
                productName: orderData.productName,
                productDescription: orderData.productDescription,
                quantity: orderData.quantity,
                price: orderData.price,
                currency: orderData.currency,
                status: "pending",
                createdAt: Math.floor(Date.now() / 1000),
                updatedAt: Math.floor(Date.now() / 1000),
                network: chainId === 1 ? "mainnet" : chainId === 11155111 ? "sepolia" : chainId === 84532 ? "base-sepolia" : "unknown"
            };
            setOrders([
                newOrder,
                ...orders
            ]);
            alert("Order created successfully!");
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (isCreated) {
            setIsCreateModalOpen(false);
        // Orders will be refetched automatically via react-query
        }
    }, [
        isCreated
    ]);
    const handleStatusUpdate = (orderId, newStatus)=>{
        setOrders((prevOrders)=>prevOrders.map((order)=>order.id === orderId ? {
                    ...order,
                    status: newStatus,
                    updatedAt: Math.floor(Date.now() / 1000)
                } : order));
        alert("Order status updated successfully!");
    };
    const handleOrderClick = (order)=>{
        router.push(`/dashboard/orders/${order.id}`);
    };
    if (!isConnected) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-4",
                        children: "Please connect your wallet"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/walletconnect/chilly/frontend/app/dashboard/page.tsx",
                        lineNumber: 223,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-zinc-600 dark:text-zinc-400",
                        children: "You need to connect your wallet to access the dashboard."
                    }, void 0, false, {
                        fileName: "[project]/Desktop/walletconnect/chilly/frontend/app/dashboard/page.tsx",
                        lineNumber: 226,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/walletconnect/chilly/frontend/app/dashboard/page.tsx",
                lineNumber: 222,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/walletconnect/chilly/frontend/app/dashboard/page.tsx",
            lineNumber: 221,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-zinc-50 dark:bg-black flex",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$frontend$2f$components$2f$dashboard$2f$Sidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Sidebar"], {}, void 0, false, {
                fileName: "[project]/Desktop/walletconnect/chilly/frontend/app/dashboard/page.tsx",
                lineNumber: 236,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "flex-1 lg:ml-64",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-8 min-h-screen",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                    className: "text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-zinc-50 mb-2",
                                                    children: "Order Dashboard"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/walletconnect/chilly/frontend/app/dashboard/page.tsx",
                                                    lineNumber: 243,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-zinc-600 dark:text-zinc-400",
                                                    children: "Manage and track all your blockchain orders"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/walletconnect/chilly/frontend/app/dashboard/page.tsx",
                                                    lineNumber: 246,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/walletconnect/chilly/frontend/app/dashboard/page.tsx",
                                            lineNumber: 242,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setIsCreateModalOpen(true),
                                            disabled: isCreating,
                                            className: "px-6 py-3 rounded-lg bg-orange-600 text-white font-medium hover:bg-orange-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed",
                                            children: isCreating ? "Creating..." : "+ Create Order"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/walletconnect/chilly/frontend/app/dashboard/page.tsx",
                                            lineNumber: 250,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/walletconnect/chilly/frontend/app/dashboard/page.tsx",
                                    lineNumber: 241,
                                    columnNumber: 13
                                }, this),
                                useContract && contractAddress ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400 text-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "✓"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/walletconnect/chilly/frontend/app/dashboard/page.tsx",
                                            lineNumber: 262,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Connected to smart contract"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/walletconnect/chilly/frontend/app/dashboard/page.tsx",
                                            lineNumber: 263,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                            className: "text-xs ml-2",
                                            children: [
                                                contractAddress.slice(0, 6),
                                                "...",
                                                contractAddress.slice(-4)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/walletconnect/chilly/frontend/app/dashboard/page.tsx",
                                            lineNumber: 264,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/walletconnect/chilly/frontend/app/dashboard/page.tsx",
                                    lineNumber: 261,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-400 text-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "⚠"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/walletconnect/chilly/frontend/app/dashboard/page.tsx",
                                            lineNumber: 270,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Using mock data - Contract not deployed on this network"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/walletconnect/chilly/frontend/app/dashboard/page.tsx",
                                            lineNumber: 271,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/walletconnect/chilly/frontend/app/dashboard/page.tsx",
                                    lineNumber: 269,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/walletconnect/chilly/frontend/app/dashboard/page.tsx",
                            lineNumber: 240,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-8",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$frontend$2f$components$2f$dashboard$2f$OrderStats$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OrderStatsComponent"], {
                                stats: stats
                            }, void 0, false, {
                                fileName: "[project]/Desktop/walletconnect/chilly/frontend/app/dashboard/page.tsx",
                                lineNumber: 280,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/walletconnect/chilly/frontend/app/dashboard/page.tsx",
                            lineNumber: 279,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-8",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$frontend$2f$components$2f$dashboard$2f$OrderFilters$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OrderFiltersComponent"], {
                                filters: filters,
                                onFiltersChange: setFilters
                            }, void 0, false, {
                                fileName: "[project]/Desktop/walletconnect/chilly/frontend/app/dashboard/page.tsx",
                                lineNumber: 285,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/walletconnect/chilly/frontend/app/dashboard/page.tsx",
                            lineNumber: 284,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-xl font-semibold text-zinc-900 dark:text-zinc-50",
                                            children: [
                                                "Orders (",
                                                filteredOrders.length,
                                                ")"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/walletconnect/chilly/frontend/app/dashboard/page.tsx",
                                            lineNumber: 294,
                                            columnNumber: 15
                                        }, this),
                                        filteredOrders.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$frontend$2f$lib$2f$exportUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["exportOrdersToJSON"])(filteredOrders),
                                                    className: "px-4 py-2 rounded-lg border border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-zinc-50 text-sm font-medium hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors",
                                                    children: "Export JSON"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/walletconnect/chilly/frontend/app/dashboard/page.tsx",
                                                    lineNumber: 299,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$frontend$2f$lib$2f$exportUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["exportOrdersToCSV"])(filteredOrders),
                                                    className: "px-4 py-2 rounded-lg border border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-zinc-50 text-sm font-medium hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors",
                                                    children: "Export CSV"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/walletconnect/chilly/frontend/app/dashboard/page.tsx",
                                                    lineNumber: 305,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/walletconnect/chilly/frontend/app/dashboard/page.tsx",
                                            lineNumber: 298,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/walletconnect/chilly/frontend/app/dashboard/page.tsx",
                                    lineNumber: 293,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$frontend$2f$components$2f$dashboard$2f$OrderList$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OrderList"], {
                                    orders: filteredOrders,
                                    onOrderClick: handleOrderClick,
                                    isLoading: isLoading
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/walletconnect/chilly/frontend/app/dashboard/page.tsx",
                                    lineNumber: 314,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/walletconnect/chilly/frontend/app/dashboard/page.tsx",
                            lineNumber: 292,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/walletconnect/chilly/frontend/app/dashboard/page.tsx",
                    lineNumber: 238,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/walletconnect/chilly/frontend/app/dashboard/page.tsx",
                lineNumber: 237,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$frontend$2f$components$2f$dashboard$2f$CreateOrderModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CreateOrderModal"], {
                isOpen: isCreateModalOpen,
                onClose: ()=>setIsCreateModalOpen(false),
                onCreateOrder: handleCreateOrder
            }, void 0, false, {
                fileName: "[project]/Desktop/walletconnect/chilly/frontend/app/dashboard/page.tsx",
                lineNumber: 324,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/walletconnect/chilly/frontend/app/dashboard/page.tsx",
        lineNumber: 235,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__3b26af58._.js.map