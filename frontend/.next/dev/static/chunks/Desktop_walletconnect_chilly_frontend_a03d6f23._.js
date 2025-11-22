(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/walletconnect/chilly/frontend/lib/web3.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "config",
    ()=>config,
    "modal",
    ()=>modal,
    "projectId",
    ()=>projectId,
    "queryClient",
    ()=>queryClient,
    "wagmiAdapter",
    ()=>wagmiAdapter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2f$dist$2f$esm$2f$exports$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit/dist/esm/exports/react.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$adapter$2d$wagmi$2f$dist$2f$esm$2f$src$2f$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-adapter-wagmi/dist/esm/src/client.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2f$dist$2f$esm$2f$exports$2f$networks$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit/dist/esm/exports/networks.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$definitions$2f$mainnet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/viem/_esm/chains/definitions/mainnet.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$definitions$2f$sepolia$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/viem/_esm/chains/definitions/sepolia.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$definitions$2f$polygon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/viem/_esm/chains/definitions/polygon.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$definitions$2f$arbitrum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/viem/_esm/chains/definitions/arbitrum.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$definitions$2f$baseSepolia$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/viem/_esm/chains/definitions/baseSepolia.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$definitions$2f$celoAlfajores$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/viem/_esm/chains/definitions/celoAlfajores.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$utils$2f$cookie$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/@wagmi/core/dist/esm/utils/cookie.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$createStorage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/@wagmi/core/dist/esm/createStorage.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$queryClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/@tanstack/query-core/build/modern/queryClient.js [app-client] (ecmascript)");
;
;
;
;
;
const queryClient = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$tanstack$2f$query$2d$core$2f$build$2f$modern$2f$queryClient$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QueryClient"]();
const projectId = ("TURBOPACK compile-time value", "your_project_id_here") || "";
// Use a default project ID for development if not provided
// In production, this should be set via environment variable
const defaultProjectId = "demo-project-id";
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
// 2. Create wagmiConfig
const metadata = {
    name: "Chilly - Decentralized Order Tracking",
    description: "Track and manage orders on the blockchain with Chilly",
    url: "https://chilly-app.vercel.app",
    icons: [
        "https://avatars.githubusercontent.com/u/179229932"
    ]
};
const wagmiAdapter = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$adapter$2d$wagmi$2f$dist$2f$esm$2f$src$2f$client$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WagmiAdapter"]({
    storage: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$createStorage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createStorage"])({
        storage: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$wagmi$2f$core$2f$dist$2f$esm$2f$utils$2f$cookie$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cookieStorage"]
    }),
    ssr: true,
    projectId: projectId || defaultProjectId,
    networks: [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$definitions$2f$mainnet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mainnet"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$definitions$2f$sepolia$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sepolia"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$definitions$2f$polygon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["polygon"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$definitions$2f$arbitrum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["arbitrum"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$definitions$2f$baseSepolia$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["baseSepolia"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$definitions$2f$celoAlfajores$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["celoAlfajores"]
    ]
});
const config = wagmiAdapter.wagmiConfig;
const modal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2f$dist$2f$esm$2f$exports$2f$react$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAppKit"])({
    adapters: [
        wagmiAdapter
    ],
    projectId: projectId || defaultProjectId,
    networks: [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$definitions$2f$mainnet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mainnet"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$definitions$2f$sepolia$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sepolia"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$definitions$2f$polygon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["polygon"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$definitions$2f$arbitrum$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["arbitrum"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$definitions$2f$baseSepolia$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["baseSepolia"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$definitions$2f$celoAlfajores$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["celoAlfajores"]
    ],
    defaultNetwork: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$chains$2f$definitions$2f$baseSepolia$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["baseSepolia"],
    metadata: metadata,
    features: {
        analytics: true,
        email: true,
        socials: [
            "google",
            "x",
            "github",
            "discord",
            "apple"
        ],
        emailShowWallets: true
    }
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/walletconnect/chilly/frontend/lib/Web3Provider.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Web3Provider",
    ()=>Web3Provider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$frontend$2f$lib$2f$web3$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/frontend/lib/web3.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/wagmi/dist/esm/context.js [app-client] (ecmascript)");
'use client';
;
;
;
;
function Web3Provider({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$context$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WagmiProvider"], {
        config: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$frontend$2f$lib$2f$web3$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wagmiAdapter"].wagmiConfig,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$QueryClientProvider$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["QueryClientProvider"], {
            client: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$frontend$2f$lib$2f$web3$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["queryClient"],
            children: children
        }, void 0, false, {
            fileName: "[project]/Desktop/walletconnect/chilly/frontend/lib/Web3Provider.tsx",
            lineNumber: 11,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/walletconnect/chilly/frontend/lib/Web3Provider.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
_c = Web3Provider;
var _c;
__turbopack_context__.k.register(_c, "Web3Provider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/walletconnect/chilly/frontend/lib/NotificationContext.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NotificationProvider",
    ()=>NotificationProvider,
    "requestNotificationPermission",
    ()=>requestNotificationPermission,
    "useNotifications",
    ()=>useNotifications
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/wagmi/dist/esm/hooks/useAccount.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
const NotificationContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
const STORAGE_KEY = 'chilly_notifications';
const MAX_NOTIFICATIONS = 50;
function NotificationProvider({ children }) {
    _s();
    const { address } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAccount"])();
    // Initialize state with localStorage data
    const [notifications, setNotifications] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "NotificationProvider.useState": ()=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            const stored = localStorage.getItem(`${STORAGE_KEY}_${address}`);
            if (stored) {
                try {
                    return JSON.parse(stored);
                } catch (error) {
                    console.error('Failed to parse stored notifications:', error);
                    return [];
                }
            }
            return [];
        }
    }["NotificationProvider.useState"]);
    // Save notifications to localStorage whenever they change
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "NotificationProvider.useEffect": ()=>{
            if (address && ("TURBOPACK compile-time value", "object") !== 'undefined') {
                localStorage.setItem(`${STORAGE_KEY}_${address}`, JSON.stringify(notifications));
            }
        }
    }["NotificationProvider.useEffect"], [
        notifications,
        address
    ]);
    const addNotification = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "NotificationProvider.useCallback[addNotification]": (notification)=>{
            const newNotification = {
                ...notification,
                id: `${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
                timestamp: Date.now(),
                read: false
            };
            setNotifications({
                "NotificationProvider.useCallback[addNotification]": (prev)=>{
                    const updated = [
                        newNotification,
                        ...prev
                    ];
                    // Keep only the latest MAX_NOTIFICATIONS
                    return updated.slice(0, MAX_NOTIFICATIONS);
                }
            }["NotificationProvider.useCallback[addNotification]"]);
            // Show browser notification if permission granted
            if (("TURBOPACK compile-time value", "object") !== 'undefined' && 'Notification' in window && Notification.permission === 'granted') {
                new Notification(newNotification.title, {
                    body: newNotification.message,
                    icon: '/favicon.ico',
                    tag: newNotification.id
                });
            }
        }
    }["NotificationProvider.useCallback[addNotification]"], []);
    const markAsRead = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "NotificationProvider.useCallback[markAsRead]": (id)=>{
            setNotifications({
                "NotificationProvider.useCallback[markAsRead]": (prev)=>prev.map({
                        "NotificationProvider.useCallback[markAsRead]": (notif)=>notif.id === id ? {
                                ...notif,
                                read: true
                            } : notif
                    }["NotificationProvider.useCallback[markAsRead]"])
            }["NotificationProvider.useCallback[markAsRead]"]);
        }
    }["NotificationProvider.useCallback[markAsRead]"], []);
    const markAllAsRead = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "NotificationProvider.useCallback[markAllAsRead]": ()=>{
            setNotifications({
                "NotificationProvider.useCallback[markAllAsRead]": (prev)=>prev.map({
                        "NotificationProvider.useCallback[markAllAsRead]": (notif)=>({
                                ...notif,
                                read: true
                            })
                    }["NotificationProvider.useCallback[markAllAsRead]"])
            }["NotificationProvider.useCallback[markAllAsRead]"]);
        }
    }["NotificationProvider.useCallback[markAllAsRead]"], []);
    const clearNotification = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "NotificationProvider.useCallback[clearNotification]": (id)=>{
            setNotifications({
                "NotificationProvider.useCallback[clearNotification]": (prev)=>prev.filter({
                        "NotificationProvider.useCallback[clearNotification]": (notif)=>notif.id !== id
                    }["NotificationProvider.useCallback[clearNotification]"])
            }["NotificationProvider.useCallback[clearNotification]"]);
        }
    }["NotificationProvider.useCallback[clearNotification]"], []);
    const clearAllNotifications = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "NotificationProvider.useCallback[clearAllNotifications]": ()=>{
            setNotifications([]);
        }
    }["NotificationProvider.useCallback[clearAllNotifications]"], []);
    const unreadCount = notifications.filter((n)=>!n.read).length;
    const value = {
        notifications,
        unreadCount,
        addNotification,
        markAsRead,
        markAllAsRead,
        clearNotification,
        clearAllNotifications
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(NotificationContext.Provider, {
        value: value,
        children: children
    }, void 0, false, {
        fileName: "[project]/Desktop/walletconnect/chilly/frontend/lib/NotificationContext.tsx",
        lineNumber: 102,
        columnNumber: 5
    }, this);
}
_s(NotificationProvider, "yMkgh9wBd2dimdFvIbo8VvF2dzk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAccount"]
    ];
});
_c = NotificationProvider;
function useNotifications() {
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(NotificationContext);
    if (context === undefined) {
        throw new Error('useNotifications must be used within a NotificationProvider');
    }
    return context;
}
_s1(useNotifications, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
function requestNotificationPermission() {
    if (("TURBOPACK compile-time value", "object") !== 'undefined' && 'Notification' in window && Notification.permission === 'default') {
        Notification.requestPermission();
    }
}
var _c;
__turbopack_context__.k.register(_c, "NotificationProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/walletconnect/chilly/frontend/lib/notificationTypes.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Notification types for the order tracking system
__turbopack_context__.s([
    "NotificationType",
    ()=>NotificationType,
    "OrderStatus",
    ()=>OrderStatus,
    "getNotificationMessage",
    ()=>getNotificationMessage
]);
var NotificationType = /*#__PURE__*/ function(NotificationType) {
    NotificationType["ORDER_CREATED"] = "ORDER_CREATED";
    NotificationType["ORDER_UPDATED"] = "ORDER_UPDATED";
    NotificationType["ORDER_CANCELLED"] = "ORDER_CANCELLED";
    NotificationType["ORDER_CONFIRMED"] = "ORDER_CONFIRMED";
    NotificationType["ORDER_SHIPPED"] = "ORDER_SHIPPED";
    NotificationType["ORDER_DELIVERED"] = "ORDER_DELIVERED";
    NotificationType["TRACKING_ADDED"] = "TRACKING_ADDED";
    NotificationType["SUCCESS"] = "SUCCESS";
    NotificationType["ERROR"] = "ERROR";
    NotificationType["INFO"] = "INFO";
    return NotificationType;
}({});
var OrderStatus = /*#__PURE__*/ function(OrderStatus) {
    OrderStatus[OrderStatus["Pending"] = 0] = "Pending";
    OrderStatus[OrderStatus["Confirmed"] = 1] = "Confirmed";
    OrderStatus[OrderStatus["Processing"] = 2] = "Processing";
    OrderStatus[OrderStatus["Shipped"] = 3] = "Shipped";
    OrderStatus[OrderStatus["Delivered"] = 4] = "Delivered";
    OrderStatus[OrderStatus["Cancelled"] = 5] = "Cancelled";
    OrderStatus[OrderStatus["Disputed"] = 6] = "Disputed";
    return OrderStatus;
}({});
function getNotificationMessage(type, orderId, orderNumber, isCustomer) {
    const orderRef = orderNumber || `#${orderId}`;
    switch(type){
        case "ORDER_CREATED":
            return {
                title: isCustomer ? 'Order Created' : 'New Order Received',
                message: isCustomer ? `Your order ${orderRef} has been created successfully` : `You have received a new order ${orderRef}`
            };
        case "ORDER_CONFIRMED":
            return {
                title: isCustomer ? 'Order Confirmed' : 'Order Confirmed',
                message: isCustomer ? `Your order ${orderRef} has been confirmed` : `You confirmed order ${orderRef}`
            };
        case "ORDER_UPDATED":
            return {
                title: 'Order Updated',
                message: `Order ${orderRef} status has been updated`
            };
        case "ORDER_SHIPPED":
            return {
                title: isCustomer ? 'Order Shipped' : 'Order Marked as Shipped',
                message: isCustomer ? `Your order ${orderRef} has been shipped` : `You marked order ${orderRef} as shipped`
            };
        case "ORDER_DELIVERED":
            return {
                title: isCustomer ? 'Order Delivered' : 'Order Marked as Delivered',
                message: isCustomer ? `Your order ${orderRef} has been delivered` : `Order ${orderRef} has been marked as delivered`
            };
        case "ORDER_CANCELLED":
            return {
                title: 'Order Cancelled',
                message: `Order ${orderRef} has been cancelled`
            };
        case "TRACKING_ADDED":
            return {
                title: 'Tracking Number Added',
                message: `Tracking number has been added to order ${orderRef}`
            };
        default:
            return {
                title: 'Notification',
                message: `Update for order ${orderRef}`
            };
    }
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/walletconnect/chilly/frontend/lib/abis/OrderTracking.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * OrderTracking Contract ABI
 * Generated from OrderTracking.sol
 */ __turbopack_context__.s([
    "OrderTrackingABI",
    ()=>OrderTrackingABI
]);
const OrderTrackingABI = [
    {
        inputs: [
            {
                internalType: "uint256",
                name: "_platformFeeBps",
                type: "uint256"
            },
            {
                internalType: "uint256",
                name: "_minOrderValue",
                type: "uint256"
            }
        ],
        stateMutability: "nonpayable",
        type: "constructor"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "uint256",
                name: "orderId",
                type: "uint256"
            },
            {
                indexed: true,
                internalType: "address",
                name: "buyer",
                type: "address"
            },
            {
                indexed: true,
                internalType: "address",
                name: "seller",
                type: "address"
            },
            {
                indexed: false,
                internalType: "string",
                name: "orderNumber",
                type: "string"
            },
            {
                indexed: false,
                internalType: "uint256",
                name: "price",
                type: "uint256"
            },
            {
                indexed: false,
                internalType: "address",
                name: "currency",
                type: "address"
            }
        ],
        name: "OrderCreated",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "uint256",
                name: "orderId",
                type: "uint256"
            },
            {
                indexed: false,
                internalType: "enum OrderTracking.OrderStatus",
                name: "oldStatus",
                type: "uint8"
            },
            {
                indexed: false,
                internalType: "enum OrderTracking.OrderStatus",
                name: "newStatus",
                type: "uint8"
            },
            {
                indexed: false,
                internalType: "address",
                name: "updatedBy",
                type: "address"
            }
        ],
        name: "OrderStatusUpdated",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "uint256",
                name: "orderId",
                type: "uint256"
            },
            {
                indexed: false,
                internalType: "string",
                name: "trackingNumber",
                type: "string"
            }
        ],
        name: "TrackingNumberAdded",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "uint256",
                name: "orderId",
                type: "uint256"
            },
            {
                indexed: true,
                internalType: "address",
                name: "disputer",
                type: "address"
            },
            {
                indexed: false,
                internalType: "string",
                name: "reason",
                type: "string"
            }
        ],
        name: "OrderDisputed",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "uint256",
                name: "orderId",
                type: "uint256"
            },
            {
                indexed: false,
                internalType: "address",
                name: "cancelledBy",
                type: "address"
            },
            {
                indexed: false,
                internalType: "string",
                name: "reason",
                type: "string"
            }
        ],
        name: "OrderCancelled",
        type: "event"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_seller",
                type: "address"
            },
            {
                internalType: "string",
                name: "_productName",
                type: "string"
            },
            {
                internalType: "string",
                name: "_productDescription",
                type: "string"
            },
            {
                internalType: "uint256",
                name: "_quantity",
                type: "uint256"
            },
            {
                internalType: "address",
                name: "_currency",
                type: "address"
            },
            {
                internalType: "uint256",
                name: "_estimatedDelivery",
                type: "uint256"
            },
            {
                internalType: "string",
                name: "_network",
                type: "string"
            },
            {
                internalType: "string",
                name: "_metadataHash",
                type: "string"
            }
        ],
        name: "createOrder",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            }
        ],
        stateMutability: "payable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "_orderId",
                type: "uint256"
            }
        ],
        name: "confirmOrder",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "_orderId",
                type: "uint256"
            },
            {
                internalType: "enum OrderTracking.OrderStatus",
                name: "_newStatus",
                type: "uint8"
            }
        ],
        name: "updateOrderStatus",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "_orderId",
                type: "uint256"
            },
            {
                internalType: "string",
                name: "_trackingNumber",
                type: "string"
            }
        ],
        name: "addTrackingNumber",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "_orderId",
                type: "uint256"
            }
        ],
        name: "markAsShipped",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "_orderId",
                type: "uint256"
            }
        ],
        name: "markAsProcessing",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "_orderId",
                type: "uint256"
            },
            {
                internalType: "string",
                name: "_reason",
                type: "string"
            }
        ],
        name: "disputeOrder",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "_orderId",
                type: "uint256"
            },
            {
                internalType: "string",
                name: "_reason",
                type: "string"
            }
        ],
        name: "cancelOrder",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "_orderId",
                type: "uint256"
            }
        ],
        name: "getOrder",
        outputs: [
            {
                components: [
                    {
                        internalType: "uint256",
                        name: "id",
                        type: "uint256"
                    },
                    {
                        internalType: "string",
                        name: "orderNumber",
                        type: "string"
                    },
                    {
                        internalType: "address",
                        name: "buyer",
                        type: "address"
                    },
                    {
                        internalType: "address",
                        name: "seller",
                        type: "address"
                    },
                    {
                        internalType: "string",
                        name: "productName",
                        type: "string"
                    },
                    {
                        internalType: "string",
                        name: "productDescription",
                        type: "string"
                    },
                    {
                        internalType: "uint256",
                        name: "quantity",
                        type: "uint256"
                    },
                    {
                        internalType: "uint256",
                        name: "price",
                        type: "uint256"
                    },
                    {
                        internalType: "address",
                        name: "currency",
                        type: "address"
                    },
                    {
                        internalType: "enum OrderTracking.OrderStatus",
                        name: "status",
                        type: "uint8"
                    },
                    {
                        internalType: "uint256",
                        name: "createdAt",
                        type: "uint256"
                    },
                    {
                        internalType: "uint256",
                        name: "updatedAt",
                        type: "uint256"
                    },
                    {
                        internalType: "uint256",
                        name: "estimatedDelivery",
                        type: "uint256"
                    },
                    {
                        internalType: "string",
                        name: "trackingNumber",
                        type: "string"
                    },
                    {
                        internalType: "bytes32",
                        name: "transactionHash",
                        type: "bytes32"
                    },
                    {
                        internalType: "string",
                        name: "network",
                        type: "string"
                    },
                    {
                        internalType: "string",
                        name: "metadataHash",
                        type: "string"
                    }
                ],
                internalType: "struct OrderTracking.Order",
                name: "",
                type: "tuple"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_buyer",
                type: "address"
            }
        ],
        name: "getBuyerOrders",
        outputs: [
            {
                internalType: "uint256[]",
                name: "",
                type: "uint256[]"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "_seller",
                type: "address"
            }
        ],
        name: "getSellerOrders",
        outputs: [
            {
                internalType: "uint256[]",
                name: "",
                type: "uint256[]"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "uint256[]",
                name: "_orderIds",
                type: "uint256[]"
            }
        ],
        name: "getOrders",
        outputs: [
            {
                components: [
                    {
                        internalType: "uint256",
                        name: "id",
                        type: "uint256"
                    },
                    {
                        internalType: "string",
                        name: "orderNumber",
                        type: "string"
                    },
                    {
                        internalType: "address",
                        name: "buyer",
                        type: "address"
                    },
                    {
                        internalType: "address",
                        name: "seller",
                        type: "address"
                    },
                    {
                        internalType: "string",
                        name: "productName",
                        type: "string"
                    },
                    {
                        internalType: "string",
                        name: "productDescription",
                        type: "string"
                    },
                    {
                        internalType: "uint256",
                        name: "quantity",
                        type: "uint256"
                    },
                    {
                        internalType: "uint256",
                        name: "price",
                        type: "uint256"
                    },
                    {
                        internalType: "address",
                        name: "currency",
                        type: "address"
                    },
                    {
                        internalType: "enum OrderTracking.OrderStatus",
                        name: "status",
                        type: "uint8"
                    },
                    {
                        internalType: "uint256",
                        name: "createdAt",
                        type: "uint256"
                    },
                    {
                        internalType: "uint256",
                        name: "updatedAt",
                        type: "uint256"
                    },
                    {
                        internalType: "uint256",
                        name: "estimatedDelivery",
                        type: "uint256"
                    },
                    {
                        internalType: "string",
                        name: "trackingNumber",
                        type: "string"
                    },
                    {
                        internalType: "bytes32",
                        name: "transactionHash",
                        type: "bytes32"
                    },
                    {
                        internalType: "string",
                        name: "network",
                        type: "string"
                    },
                    {
                        internalType: "string",
                        name: "metadataHash",
                        type: "string"
                    }
                ],
                internalType: "struct OrderTracking.Order[]",
                name: "",
                type: "tuple[]"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "totalOrders",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            }
        ],
        name: "orders",
        outputs: [
            {
                internalType: "uint256",
                name: "id",
                type: "uint256"
            },
            {
                internalType: "string",
                name: "orderNumber",
                type: "string"
            },
            {
                internalType: "address",
                name: "buyer",
                type: "address"
            },
            {
                internalType: "address",
                name: "seller",
                type: "address"
            },
            {
                internalType: "string",
                name: "productName",
                type: "string"
            },
            {
                internalType: "string",
                name: "productDescription",
                type: "string"
            },
            {
                internalType: "uint256",
                name: "quantity",
                type: "uint256"
            },
            {
                internalType: "uint256",
                name: "price",
                type: "uint256"
            },
            {
                internalType: "address",
                name: "currency",
                type: "address"
            },
            {
                internalType: "enum OrderTracking.OrderStatus",
                name: "status",
                type: "uint8"
            },
            {
                internalType: "uint256",
                name: "createdAt",
                type: "uint256"
            },
            {
                internalType: "uint256",
                name: "updatedAt",
                type: "uint256"
            },
            {
                internalType: "uint256",
                name: "estimatedDelivery",
                type: "uint256"
            },
            {
                internalType: "string",
                name: "trackingNumber",
                type: "string"
            },
            {
                internalType: "bytes32",
                name: "transactionHash",
                type: "bytes32"
            },
            {
                internalType: "string",
                name: "network",
                type: "string"
            },
            {
                internalType: "string",
                name: "metadataHash",
                type: "string"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "",
                type: "address"
            }
        ],
        name: "buyerOrders",
        outputs: [
            {
                internalType: "uint256[]",
                name: "",
                type: "uint256[]"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "address",
                name: "",
                type: "address"
            }
        ],
        name: "sellerOrders",
        outputs: [
            {
                internalType: "uint256[]",
                name: "",
                type: "uint256[]"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "owner",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "platformFeeBps",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "minOrderValue",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            }
        ],
        stateMutability: "view",
        type: "function"
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/walletconnect/chilly/frontend/lib/orderEventListener.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "OrderEventListener",
    ()=>OrderEventListener,
    "useOrderEventListener",
    ()=>useOrderEventListener
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/wagmi/dist/esm/hooks/useAccount.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useWatchContractEvent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/wagmi/dist/esm/hooks/useWatchContractEvent.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$frontend$2f$lib$2f$NotificationContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/frontend/lib/NotificationContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$frontend$2f$lib$2f$notificationTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/frontend/lib/notificationTypes.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$frontend$2f$lib$2f$abis$2f$OrderTracking$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/frontend/lib/abis/OrderTracking.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
;
;
// Contract addresses for different networks
const CONTRACT_ADDRESSES = {
    11155111: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_CONTRACT_ADDRESS_SEPOLIA || '0x',
    137: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_CONTRACT_ADDRESS_POLYGON || '0x',
    42161: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_CONTRACT_ADDRESS_ARBITRUM || '0x'
};
function useOrderEventListener() {
    _s();
    const { address, chainId } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAccount"])();
    const { addNotification } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$frontend$2f$lib$2f$NotificationContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNotifications"])();
    const contractAddress = chainId ? CONTRACT_ADDRESSES[chainId] : undefined;
    // Listen to OrderCreated events
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useWatchContractEvent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWatchContractEvent"])({
        address: contractAddress,
        abi: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$frontend$2f$lib$2f$abis$2f$OrderTracking$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OrderTrackingABI"],
        eventName: 'OrderCreated',
        onLogs (logs) {
            logs.forEach({
                "useOrderEventListener.useWatchContractEvent": (log)=>{
                    const { orderId, buyer, seller, orderNumber } = log.args;
                    // Only notify if user is involved (buyer or seller)
                    if (address && (buyer.toLowerCase() === address.toLowerCase() || seller.toLowerCase() === address.toLowerCase())) {
                        const isCustomer = buyer.toLowerCase() === address.toLowerCase();
                        const { title, message } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$frontend$2f$lib$2f$notificationTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNotificationMessage"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$frontend$2f$lib$2f$notificationTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NotificationType"].ORDER_CREATED, orderId.toString(), undefined, isCustomer);
                        addNotification({
                            type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$frontend$2f$lib$2f$notificationTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NotificationType"].ORDER_CREATED,
                            title,
                            message: `${message} - Order #${orderNumber}`,
                            orderId: orderId.toString(),
                            txHash: log.transactionHash,
                            blockNumber: Number(log.blockNumber),
                            isCustomer,
                            customerAddress: buyer,
                            merchantAddress: seller
                        });
                    }
                }
            }["useOrderEventListener.useWatchContractEvent"]);
        }
    });
    // Listen to OrderStatusUpdated events
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useWatchContractEvent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWatchContractEvent"])({
        address: contractAddress,
        abi: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$frontend$2f$lib$2f$abis$2f$OrderTracking$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OrderTrackingABI"],
        eventName: 'OrderStatusUpdated',
        onLogs (logs) {
            logs.forEach({
                "useOrderEventListener.useWatchContractEvent": (log)=>{
                    const { orderId, newStatus, updatedBy } = log.args;
                    // Only notify if user is involved
                    if (address) {
                        let notifType = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$frontend$2f$lib$2f$notificationTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NotificationType"].ORDER_UPDATED;
                        // Determine specific notification type based on status
                        switch(newStatus){
                            case __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$frontend$2f$lib$2f$notificationTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OrderStatus"].Confirmed:
                                notifType = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$frontend$2f$lib$2f$notificationTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NotificationType"].ORDER_CONFIRMED;
                                break;
                            case __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$frontend$2f$lib$2f$notificationTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OrderStatus"].Shipped:
                                notifType = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$frontend$2f$lib$2f$notificationTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NotificationType"].ORDER_SHIPPED;
                                break;
                            case __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$frontend$2f$lib$2f$notificationTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OrderStatus"].Delivered:
                                notifType = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$frontend$2f$lib$2f$notificationTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NotificationType"].ORDER_DELIVERED;
                                break;
                        }
                        // Check if update is from customer or merchant
                        const isCustomer = updatedBy.toLowerCase() !== address.toLowerCase();
                        const { title, message } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$frontend$2f$lib$2f$notificationTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNotificationMessage"])(notifType, orderId.toString(), undefined, isCustomer);
                        addNotification({
                            type: notifType,
                            title,
                            message,
                            orderId: orderId.toString(),
                            txHash: log.transactionHash,
                            blockNumber: Number(log.blockNumber),
                            isCustomer
                        });
                    }
                }
            }["useOrderEventListener.useWatchContractEvent"]);
        }
    });
    // Listen to OrderCancelled events
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useWatchContractEvent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWatchContractEvent"])({
        address: contractAddress,
        abi: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$frontend$2f$lib$2f$abis$2f$OrderTracking$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OrderTrackingABI"],
        eventName: 'OrderCancelled',
        onLogs (logs) {
            logs.forEach({
                "useOrderEventListener.useWatchContractEvent": (log)=>{
                    const { orderId, cancelledBy, reason } = log.args;
                    if (address) {
                        const { title, message } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$frontend$2f$lib$2f$notificationTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNotificationMessage"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$frontend$2f$lib$2f$notificationTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NotificationType"].ORDER_CANCELLED, orderId.toString());
                        addNotification({
                            type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$frontend$2f$lib$2f$notificationTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NotificationType"].ORDER_CANCELLED,
                            title,
                            message: `${message} - Reason: ${reason}`,
                            orderId: orderId.toString(),
                            txHash: log.transactionHash,
                            blockNumber: Number(log.blockNumber),
                            isCustomer: cancelledBy.toLowerCase() === address.toLowerCase()
                        });
                    }
                }
            }["useOrderEventListener.useWatchContractEvent"]);
        }
    });
    // Listen to TrackingNumberAdded events
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useWatchContractEvent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWatchContractEvent"])({
        address: contractAddress,
        abi: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$frontend$2f$lib$2f$abis$2f$OrderTracking$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OrderTrackingABI"],
        eventName: 'TrackingNumberAdded',
        onLogs (logs) {
            logs.forEach({
                "useOrderEventListener.useWatchContractEvent": (log)=>{
                    const { orderId, trackingNumber } = log.args;
                    if (address) {
                        const { title, message } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$frontend$2f$lib$2f$notificationTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNotificationMessage"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$frontend$2f$lib$2f$notificationTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NotificationType"].TRACKING_ADDED, orderId.toString(), trackingNumber, true);
                        addNotification({
                            type: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$frontend$2f$lib$2f$notificationTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NotificationType"].TRACKING_ADDED,
                            title,
                            message,
                            orderId: orderId.toString(),
                            txHash: log.transactionHash,
                            blockNumber: Number(log.blockNumber),
                            isCustomer: true
                        });
                    }
                }
            }["useOrderEventListener.useWatchContractEvent"]);
        }
    });
}
_s(useOrderEventListener, "GHlXkgvKMCH6sCkrhy+3iGeF26g=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAccount"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$frontend$2f$lib$2f$NotificationContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNotifications"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useWatchContractEvent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWatchContractEvent"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useWatchContractEvent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWatchContractEvent"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useWatchContractEvent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWatchContractEvent"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useWatchContractEvent$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWatchContractEvent"]
    ];
});
function OrderEventListener() {
    _s1();
    useOrderEventListener();
    return null;
}
_s1(OrderEventListener, "iKhhCuFgzGw+oDD53dissiIjU0s=", false, function() {
    return [
        useOrderEventListener
    ];
});
_c = OrderEventListener;
var _c;
__turbopack_context__.k.register(_c, "OrderEventListener");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/walletconnect/chilly/frontend/components/notifications/NotificationToast.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NotificationToast",
    ()=>NotificationToast
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$frontend$2f$lib$2f$NotificationContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/frontend/lib/NotificationContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$frontend$2f$lib$2f$notificationTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/frontend/lib/notificationTypes.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function NotificationToast() {
    _s();
    const { notifications } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$frontend$2f$lib$2f$NotificationContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNotifications"])();
    const [visibleNotifications, setVisibleNotifications] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const prevNotificationsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "NotificationToast.useEffect": ()=>{
            const unreadNotifications = notifications.filter({
                "NotificationToast.useEffect.unreadNotifications": (n)=>!n.read
            }["NotificationToast.useEffect.unreadNotifications"]);
            const prevUnread = prevNotificationsRef.current.filter({
                "NotificationToast.useEffect.prevUnread": (n)=>!n.read
            }["NotificationToast.useEffect.prevUnread"]);
            // Find truly new notifications by comparing IDs
            const newNotifications = unreadNotifications.filter({
                "NotificationToast.useEffect.newNotifications": (n)=>!prevUnread.some({
                        "NotificationToast.useEffect.newNotifications": (prev)=>prev.id === n.id
                    }["NotificationToast.useEffect.newNotifications"])
            }["NotificationToast.useEffect.newNotifications"]);
            if (newNotifications.length > 0) {
                // Show max 3 new notifications
                const notificationsToShow = newNotifications.slice(-3);
                // Queue state update for next render
                Promise.resolve().then({
                    "NotificationToast.useEffect": ()=>{
                        setVisibleNotifications({
                            "NotificationToast.useEffect": (prev)=>[
                                    ...prev,
                                    ...notificationsToShow
                                ]
                        }["NotificationToast.useEffect"]);
                        // Auto-hide after 5 seconds
                        notificationsToShow.forEach({
                            "NotificationToast.useEffect": (notification)=>{
                                setTimeout({
                                    "NotificationToast.useEffect": ()=>{
                                        setVisibleNotifications({
                                            "NotificationToast.useEffect": (prev)=>prev.filter({
                                                    "NotificationToast.useEffect": (n)=>n.id !== notification.id
                                                }["NotificationToast.useEffect"])
                                        }["NotificationToast.useEffect"]);
                                    }
                                }["NotificationToast.useEffect"], 5000);
                            }
                        }["NotificationToast.useEffect"]);
                    }
                }["NotificationToast.useEffect"]);
            }
            prevNotificationsRef.current = notifications;
        }
    }["NotificationToast.useEffect"], [
        notifications
    ]);
    const handleDismiss = (id)=>{
        setVisibleNotifications((prev)=>prev.filter((n)=>n.id !== id));
    };
    const getToastColor = (type)=>{
        switch(type){
            case __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$frontend$2f$lib$2f$notificationTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NotificationType"].ORDER_CREATED:
                return 'bg-green-50 border-green-200 text-green-900 dark:bg-green-900/20 dark:border-green-800 dark:text-green-100';
            case __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$frontend$2f$lib$2f$notificationTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NotificationType"].ORDER_CONFIRMED:
                return 'bg-blue-50 border-blue-200 text-blue-900 dark:bg-blue-900/20 dark:border-blue-800 dark:text-blue-100';
            case __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$frontend$2f$lib$2f$notificationTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NotificationType"].ORDER_SHIPPED:
                return 'bg-purple-50 border-purple-200 text-purple-900 dark:bg-purple-900/20 dark:border-purple-800 dark:text-purple-100';
            case __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$frontend$2f$lib$2f$notificationTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NotificationType"].ORDER_DELIVERED:
                return 'bg-emerald-50 border-emerald-200 text-emerald-900 dark:bg-emerald-900/20 dark:border-emerald-800 dark:text-emerald-100';
            case __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$frontend$2f$lib$2f$notificationTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NotificationType"].ORDER_CANCELLED:
                return 'bg-red-50 border-red-200 text-red-900 dark:bg-red-900/20 dark:border-red-800 dark:text-red-100';
            case __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$frontend$2f$lib$2f$notificationTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NotificationType"].TRACKING_ADDED:
                return 'bg-indigo-50 border-indigo-200 text-indigo-900 dark:bg-indigo-900/20 dark:border-indigo-800 dark:text-indigo-100';
            default:
                return 'bg-gray-50 border-gray-200 text-gray-900 dark:bg-gray-900/20 dark:border-gray-800 dark:text-gray-100';
        }
    };
    if (visibleNotifications.length === 0) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed bottom-4 right-4 z-50 flex flex-col gap-2 max-w-md",
        children: visibleNotifications.map((notification)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `flex items-start gap-3 p-4 rounded-lg border shadow-lg animate-in slide-in-from-right duration-300 ${getToastColor(notification.type)}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "shrink-0 mt-0.5",
                        children: [
                            notification.type === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$frontend$2f$lib$2f$notificationTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NotificationType"].ORDER_CREATED && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                className: "w-5 h-5",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                stroke: "currentColor",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 2,
                                    d: "M12 4v16m8-8H4"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/walletconnect/chilly/frontend/components/notifications/NotificationToast.tsx",
                                    lineNumber: 77,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/walletconnect/chilly/frontend/components/notifications/NotificationToast.tsx",
                                lineNumber: 76,
                                columnNumber: 15
                            }, this),
                            notification.type === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$frontend$2f$lib$2f$notificationTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NotificationType"].ORDER_CONFIRMED && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                className: "w-5 h-5",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                stroke: "currentColor",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 2,
                                    d: "M5 13l4 4L19 7"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/walletconnect/chilly/frontend/components/notifications/NotificationToast.tsx",
                                    lineNumber: 82,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/walletconnect/chilly/frontend/components/notifications/NotificationToast.tsx",
                                lineNumber: 81,
                                columnNumber: 15
                            }, this),
                            notification.type === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$frontend$2f$lib$2f$notificationTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NotificationType"].ORDER_SHIPPED && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                className: "w-5 h-5",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                stroke: "currentColor",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 2,
                                    d: "M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/walletconnect/chilly/frontend/components/notifications/NotificationToast.tsx",
                                    lineNumber: 87,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/walletconnect/chilly/frontend/components/notifications/NotificationToast.tsx",
                                lineNumber: 86,
                                columnNumber: 15
                            }, this),
                            notification.type === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$frontend$2f$lib$2f$notificationTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NotificationType"].ORDER_DELIVERED && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                className: "w-5 h-5",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                stroke: "currentColor",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 2,
                                    d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/walletconnect/chilly/frontend/components/notifications/NotificationToast.tsx",
                                    lineNumber: 92,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/walletconnect/chilly/frontend/components/notifications/NotificationToast.tsx",
                                lineNumber: 91,
                                columnNumber: 15
                            }, this),
                            notification.type === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$frontend$2f$lib$2f$notificationTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NotificationType"].ORDER_CANCELLED && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                className: "w-5 h-5",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                stroke: "currentColor",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 2,
                                    d: "M6 18L18 6M6 6l12 12"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/walletconnect/chilly/frontend/components/notifications/NotificationToast.tsx",
                                    lineNumber: 97,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/walletconnect/chilly/frontend/components/notifications/NotificationToast.tsx",
                                lineNumber: 96,
                                columnNumber: 15
                            }, this),
                            notification.type === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$frontend$2f$lib$2f$notificationTypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NotificationType"].TRACKING_ADDED && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                className: "w-5 h-5",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                stroke: "currentColor",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: 2,
                                    d: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/walletconnect/chilly/frontend/components/notifications/NotificationToast.tsx",
                                    lineNumber: 102,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/walletconnect/chilly/frontend/components/notifications/NotificationToast.tsx",
                                lineNumber: 101,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/walletconnect/chilly/frontend/components/notifications/NotificationToast.tsx",
                        lineNumber: 74,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-1 min-w-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm font-medium",
                                children: notification.title
                            }, void 0, false, {
                                fileName: "[project]/Desktop/walletconnect/chilly/frontend/components/notifications/NotificationToast.tsx",
                                lineNumber: 109,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-1 text-sm opacity-90",
                                children: notification.message
                            }, void 0, false, {
                                fileName: "[project]/Desktop/walletconnect/chilly/frontend/components/notifications/NotificationToast.tsx",
                                lineNumber: 110,
                                columnNumber: 13
                            }, this),
                            notification.orderId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-1 text-xs opacity-75",
                                children: [
                                    "Order #",
                                    notification.orderId
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/walletconnect/chilly/frontend/components/notifications/NotificationToast.tsx",
                                lineNumber: 112,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/walletconnect/chilly/frontend/components/notifications/NotificationToast.tsx",
                        lineNumber: 108,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>handleDismiss(notification.id),
                        className: "shrink-0 opacity-70 hover:opacity-100 transition-opacity",
                        "aria-label": "Dismiss",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            className: "w-4 h-4",
                            fill: "none",
                            viewBox: "0 0 24 24",
                            stroke: "currentColor",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                strokeWidth: 2,
                                d: "M6 18L18 6M6 6l12 12"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/walletconnect/chilly/frontend/components/notifications/NotificationToast.tsx",
                                lineNumber: 123,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/walletconnect/chilly/frontend/components/notifications/NotificationToast.tsx",
                            lineNumber: 122,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/walletconnect/chilly/frontend/components/notifications/NotificationToast.tsx",
                        lineNumber: 117,
                        columnNumber: 11
                    }, this)
                ]
            }, notification.id, true, {
                fileName: "[project]/Desktop/walletconnect/chilly/frontend/components/notifications/NotificationToast.tsx",
                lineNumber: 69,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/Desktop/walletconnect/chilly/frontend/components/notifications/NotificationToast.tsx",
        lineNumber: 67,
        columnNumber: 5
    }, this);
}
_s(NotificationToast, "Mjprom2OvwalR3z5Sxn2AVT8yEs=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$frontend$2f$lib$2f$NotificationContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useNotifications"]
    ];
});
_c = NotificationToast;
var _c;
__turbopack_context__.k.register(_c, "NotificationToast");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/walletconnect/chilly/frontend/lib/ThemeProvider.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ThemeProvider",
    ()=>ThemeProvider,
    "useTheme",
    ()=>useTheme
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
// Create context with a default value to prevent SSR issues
const ThemeContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])({
    theme: "dark",
    toggleTheme: ()=>{},
    setTheme: ()=>{}
});
function ThemeProvider({ children }) {
    _s();
    const [theme, setThemeState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("dark");
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ThemeProvider.useEffect": ()=>{
            setMounted(true);
            // Check localStorage first, then system preference
            const savedTheme = localStorage.getItem("theme");
            if (savedTheme) {
                setThemeState(savedTheme);
                applyTheme(savedTheme);
            } else {
                const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
                const initialTheme = prefersDark ? "dark" : "light";
                setThemeState(initialTheme);
                applyTheme(initialTheme);
            }
        }
    }["ThemeProvider.useEffect"], []);
    const applyTheme = (newTheme)=>{
        const root = document.documentElement;
        if (newTheme === "dark") {
            root.classList.add("dark");
        } else {
            root.classList.remove("dark");
        }
    };
    const setTheme = (newTheme)=>{
        setThemeState(newTheme);
        applyTheme(newTheme);
        localStorage.setItem("theme", newTheme);
    };
    const toggleTheme = ()=>{
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ThemeContext.Provider, {
        value: {
            theme,
            toggleTheme,
            setTheme
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/Desktop/walletconnect/chilly/frontend/lib/ThemeProvider.tsx",
        lineNumber: 62,
        columnNumber: 5
    }, this);
}
_s(ThemeProvider, "NFMsp+nHMpEO8VRJ4qOPo+gS3EQ=");
_c = ThemeProvider;
function useTheme() {
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(ThemeContext);
    return context;
}
_s1(useTheme, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "ThemeProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Desktop_walletconnect_chilly_frontend_a03d6f23._.js.map