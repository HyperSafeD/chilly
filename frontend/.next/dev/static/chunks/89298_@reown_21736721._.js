(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-common/dist/esm/src/utils/ConstantsUtil.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ConstantsUtil",
    ()=>ConstantsUtil
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
const ConstantsUtil = {
    WC_NAME_SUFFIX: '.reown.id',
    WC_NAME_SUFFIX_LEGACY: '.wcn.id',
    BLOCKCHAIN_API_RPC_URL: 'https://rpc.walletconnect.org',
    PULSE_API_URL: 'https://pulse.walletconnect.org',
    W3M_API_URL: 'https://api.web3modal.org',
    CONNECTOR_ID: {
        WALLET_CONNECT: 'walletConnect',
        INJECTED: 'injected',
        WALLET_STANDARD: 'announced',
        COINBASE: 'coinbaseWallet',
        COINBASE_SDK: 'coinbaseWalletSDK',
        BASE_ACCOUNT: 'baseAccount',
        SAFE: 'safe',
        LEDGER: 'ledger',
        OKX: 'okx',
        EIP6963: 'eip6963',
        AUTH: 'AUTH'
    },
    CONNECTOR_NAMES: {
        AUTH: 'Auth'
    },
    AUTH_CONNECTOR_SUPPORTED_CHAINS: [
        'eip155',
        'solana'
    ],
    LIMITS: {
        PENDING_TRANSACTIONS: 99
    },
    CHAIN: {
        EVM: 'eip155',
        SOLANA: 'solana',
        POLKADOT: 'polkadot',
        BITCOIN: 'bip122'
    },
    CHAIN_NAME_MAP: {
        eip155: 'EVM Networks',
        solana: 'Solana',
        polkadot: 'Polkadot',
        bip122: 'Bitcoin',
        cosmos: 'Cosmos',
        sui: 'Sui',
        stacks: 'Stacks'
    },
    ADAPTER_TYPES: {
        BITCOIN: 'bitcoin',
        SOLANA: 'solana',
        WAGMI: 'wagmi',
        ETHERS: 'ethers',
        ETHERS5: 'ethers5'
    },
    USDT_CONTRACT_ADDRESSES: [
        '0xdac17f958d2ee523a2206206994597c13d831ec7',
        '0xc2132d05d31c914a87c6611c10748aeb04b58e8f',
        '0x9702230a8ea53601f5cd2dc00fdbc13d4df4a8c7',
        '0x919C1c267BC06a7039e03fcc2eF738525769109c',
        '0x48065fbBE25f71C9282ddf5e1cD6D6A887483D5e',
        '0x55d398326f99059fF775485246999027B3197955',
        '0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9'
    ],
    SOLANA_SPL_TOKEN_ADDRESSES: {
        SOL: 'So11111111111111111111111111111111111111112'
    },
    HTTP_STATUS_CODES: {
        SERVER_ERROR: 500,
        TOO_MANY_REQUESTS: 429,
        SERVICE_UNAVAILABLE: 503,
        FORBIDDEN: 403
    },
    UNSUPPORTED_NETWORK_NAME: 'Unknown Network',
    SECURE_SITE_SDK_ORIGIN: (typeof __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] !== 'undefined' && typeof __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env !== 'undefined' ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env['NEXT_PUBLIC_SECURE_SITE_ORIGIN'] : undefined) || 'https://secure.walletconnect.org',
    REMOTE_FEATURES_ALERTS: {
        MULTI_WALLET_NOT_ENABLED: {
            DEFAULT: {
                displayMessage: 'Multi-Wallet Not Enabled',
                debugMessage: 'Multi-wallet support is not enabled. Please enable it in your AppKit configuration at cloud.reown.com.'
            },
            CONNECTIONS_HOOK: {
                displayMessage: 'Multi-Wallet Not Enabled',
                debugMessage: 'Multi-wallet support is not enabled. Please enable it in your AppKit configuration at cloud.reown.com to use the useAppKitConnections hook.'
            },
            CONNECTION_HOOK: {
                displayMessage: 'Multi-Wallet Not Enabled',
                debugMessage: 'Multi-wallet support is not enabled. Please enable it in your AppKit configuration at cloud.reown.com to use the useAppKitConnection hook.'
            }
        }
    },
    IS_DEVELOPMENT: typeof __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] !== 'undefined' && ("TURBOPACK compile-time value", "development") === 'development',
    DEFAULT_ALLOWED_ANCESTORS: [
        'http://localhost:*',
        'https://localhost:*',
        'http://127.0.0.1:*',
        'https://127.0.0.1:*',
        'https://*.pages.dev',
        'https://*.vercel.app',
        'https://*.ngrok-free.app',
        'https://secure-mobile.walletconnect.com',
        'https://secure-mobile.walletconnect.org'
    ]
}; //# sourceMappingURL=ConstantsUtil.js.map
}),
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-common/dist/esm/src/utils/SafeLocalStorage.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SafeLocalStorage",
    ()=>SafeLocalStorage,
    "SafeLocalStorageKeys",
    ()=>SafeLocalStorageKeys,
    "getSafeConnectorIdKey",
    ()=>getSafeConnectorIdKey,
    "isSafe",
    ()=>isSafe
]);
const SafeLocalStorageKeys = {
    WALLET_ID: '@appkit/wallet_id',
    WALLET_NAME: '@appkit/wallet_name',
    SOLANA_WALLET: '@appkit/solana_wallet',
    SOLANA_CAIP_CHAIN: '@appkit/solana_caip_chain',
    ACTIVE_CAIP_NETWORK_ID: '@appkit/active_caip_network_id',
    CONNECTED_SOCIAL: '@appkit/connected_social',
    CONNECTED_SOCIAL_USERNAME: '@appkit-wallet/SOCIAL_USERNAME',
    RECENT_WALLETS: '@appkit/recent_wallets',
    RECENT_WALLET: '@appkit/recent_wallet',
    DEEPLINK_CHOICE: 'WALLETCONNECT_DEEPLINK_CHOICE',
    ACTIVE_NAMESPACE: '@appkit/active_namespace',
    CONNECTED_NAMESPACES: '@appkit/connected_namespaces',
    CONNECTION_STATUS: '@appkit/connection_status',
    SIWX_AUTH_TOKEN: '@appkit/siwx-auth-token',
    SIWX_NONCE_TOKEN: '@appkit/siwx-nonce-token',
    TELEGRAM_SOCIAL_PROVIDER: '@appkit/social_provider',
    NATIVE_BALANCE_CACHE: '@appkit/native_balance_cache',
    PORTFOLIO_CACHE: '@appkit/portfolio_cache',
    ENS_CACHE: '@appkit/ens_cache',
    IDENTITY_CACHE: '@appkit/identity_cache',
    PREFERRED_ACCOUNT_TYPES: '@appkit/preferred_account_types',
    CONNECTIONS: '@appkit/connections',
    DISCONNECTED_CONNECTOR_IDS: '@appkit/disconnected_connector_ids',
    HISTORY_TRANSACTIONS_CACHE: '@appkit/history_transactions_cache',
    TOKEN_PRICE_CACHE: '@appkit/token_price_cache',
    RECENT_EMAILS: '@appkit/recent_emails',
    LATEST_APPKIT_VERSION: '@appkit/latest_version'
};
function getSafeConnectorIdKey(namespace) {
    if (!namespace) {
        throw new Error('Namespace is required for CONNECTED_CONNECTOR_ID');
    }
    return `@appkit/${namespace}:connected_connector_id`;
}
const SafeLocalStorage = {
    setItem (key, value) {
        if (isSafe() && value !== undefined) {
            localStorage.setItem(key, value);
        }
    },
    getItem (key) {
        if (isSafe()) {
            return localStorage.getItem(key) || undefined;
        }
        return undefined;
    },
    removeItem (key) {
        if (isSafe()) {
            localStorage.removeItem(key);
        }
    },
    clear () {
        if (isSafe()) {
            localStorage.clear();
        }
    }
};
function isSafe() {
    return typeof window !== 'undefined' && typeof localStorage !== 'undefined';
} //# sourceMappingURL=SafeLocalStorage.js.map
}),
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-common/dist/esm/src/utils/NetworkUtil.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AVAILABLE_NAMESPACES",
    ()=>AVAILABLE_NAMESPACES,
    "NetworkUtil",
    ()=>NetworkUtil
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-common/dist/esm/src/utils/ConstantsUtil.js [app-client] (ecmascript)");
;
const NetworkUtil = {
    caipNetworkIdToNumber (caipnetworkId) {
        return caipnetworkId ? Number(caipnetworkId.split(':')[1]) : undefined;
    },
    parseEvmChainId (chainId) {
        return typeof chainId === 'string' ? this.caipNetworkIdToNumber(chainId) : chainId;
    },
    getNetworksByNamespace (networks, namespace) {
        return networks?.filter((network)=>network.chainNamespace === namespace) || [];
    },
    getFirstNetworkByNamespace (networks, namespace) {
        return this.getNetworksByNamespace(networks, namespace)[0];
    },
    getNetworkNameByCaipNetworkId (caipNetworks, caipNetworkId) {
        if (!caipNetworkId) {
            return undefined;
        }
        const caipNetwork = caipNetworks.find((network)=>network.caipNetworkId === caipNetworkId);
        if (caipNetwork) {
            return caipNetwork.name;
        }
        const [namespace] = caipNetworkId.split(':');
        return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].CHAIN_NAME_MAP?.[namespace] || undefined;
    }
};
const AVAILABLE_NAMESPACES = [
    'eip155',
    'solana',
    'polkadot',
    'bip122',
    'cosmos',
    'sui',
    'stacks'
]; //# sourceMappingURL=NetworkUtil.js.map
}),
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-common/dist/esm/src/utils/ParseUtil.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ParseUtil",
    ()=>ParseUtil
]);
const ParseUtil = {
    validateCaipAddress (address) {
        if (address.split(':')?.length !== 3) {
            throw new Error('Invalid CAIP Address');
        }
        return address;
    },
    parseCaipAddress (caipAddress) {
        const parts = caipAddress.split(':');
        if (parts.length !== 3) {
            throw new Error(`Invalid CAIP-10 address: ${caipAddress}`);
        }
        const [chainNamespace, chainId, address] = parts;
        if (!chainNamespace || !chainId || !address) {
            throw new Error(`Invalid CAIP-10 address: ${caipAddress}`);
        }
        return {
            chainNamespace: chainNamespace,
            chainId: chainId,
            address
        };
    },
    parseCaipNetworkId (caipNetworkId) {
        const parts = caipNetworkId.split(':');
        if (parts.length !== 2) {
            throw new Error(`Invalid CAIP-2 network id: ${caipNetworkId}`);
        }
        const [chainNamespace, chainId] = parts;
        if (!chainNamespace || !chainId) {
            throw new Error(`Invalid CAIP-2 network id: ${caipNetworkId}`);
        }
        return {
            chainNamespace: chainNamespace,
            chainId: chainId
        };
    }
}; //# sourceMappingURL=ParseUtil.js.map
}),
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-common/dist/esm/src/utils/ThemeUtil.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getW3mThemeVariables",
    ()=>getW3mThemeVariables
]);
function getW3mThemeVariables(themeVariables, themeType) {
    if (themeType === 'light') {
        return {
            '--w3m-accent': themeVariables?.['--w3m-accent'] || 'hsla(231, 100%, 70%, 1)',
            '--w3m-background': '#fff'
        };
    }
    return {
        '--w3m-accent': themeVariables?.['--w3m-accent'] || 'hsla(230, 100%, 67%, 1)',
        '--w3m-background': '#202020'
    };
} //# sourceMappingURL=ThemeUtil.js.map
}),
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-common/dist/esm/src/utils/ErrorUtil.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ErrorUtil",
    ()=>ErrorUtil,
    "ProviderRpcError",
    ()=>ProviderRpcError,
    "UserRejectedRequestError",
    ()=>UserRejectedRequestError
]);
const ErrorUtil = {
    RPC_ERROR_CODE: {
        USER_REJECTED_REQUEST: 4001,
        USER_REJECTED_METHODS: 5002,
        USER_REJECTED: 5000
    },
    PROVIDER_RPC_ERROR_NAME: {
        PROVIDER_RPC: 'ProviderRpcError',
        USER_REJECTED_REQUEST: 'UserRejectedRequestError'
    },
    isRpcProviderError (error) {
        try {
            if (typeof error === 'object' && error !== null) {
                const objErr = error;
                const hasMessage = typeof objErr['message'] === 'string';
                const hasCode = typeof objErr['code'] === 'number';
                return hasMessage && hasCode;
            }
            return false;
        } catch  {
            return false;
        }
    },
    isUserRejectedMessage (message) {
        return message.toLowerCase().includes('user rejected') || message.toLowerCase().includes('user cancelled') || message.toLowerCase().includes('user canceled');
    },
    isUserRejectedRequestError (error) {
        if (ErrorUtil.isRpcProviderError(error)) {
            const isUserRejectedCode = error.code === ErrorUtil.RPC_ERROR_CODE.USER_REJECTED_REQUEST;
            const isUserRejectedMethodsCode = error.code === ErrorUtil.RPC_ERROR_CODE.USER_REJECTED_METHODS;
            return isUserRejectedCode || isUserRejectedMethodsCode || ErrorUtil.isUserRejectedMessage(error.message);
        }
        if (error instanceof Error) {
            return ErrorUtil.isUserRejectedMessage(error.message);
        }
        return false;
    }
};
class ProviderRpcError extends Error {
    constructor(cause, options){
        super(options.message, {
            cause
        });
        this.name = ErrorUtil.PROVIDER_RPC_ERROR_NAME.PROVIDER_RPC;
        this.code = options.code;
    }
}
class UserRejectedRequestError extends ProviderRpcError {
    constructor(cause){
        super(cause, {
            code: ErrorUtil.RPC_ERROR_CODE.USER_REJECTED_REQUEST,
            message: 'User rejected the request'
        });
        this.name = ErrorUtil.PROVIDER_RPC_ERROR_NAME.USER_REJECTED_REQUEST;
    }
} //# sourceMappingURL=ErrorUtil.js.map
}),
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-common/dist/esm/src/utils/NumberUtil.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NumberUtil",
    ()=>NumberUtil
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$big$2e$js$2f$big$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/big.js/big.mjs [app-client] (ecmascript)");
;
const NumberUtil = {
    bigNumber (value) {
        if (!value) {
            return new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$big$2e$js$2f$big$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](0);
        }
        return new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$big$2e$js$2f$big$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](value);
    },
    multiply (a, b) {
        if (a === undefined || b === undefined) {
            return new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$big$2e$js$2f$big$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](0);
        }
        const aBigNumber = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$big$2e$js$2f$big$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](a);
        const bBigNumber = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$big$2e$js$2f$big$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](b);
        return aBigNumber.times(bBigNumber);
    },
    toFixed (value, decimals = 2) {
        if (value === undefined || value === '') {
            return new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$big$2e$js$2f$big$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](0).toFixed(decimals);
        }
        return new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$big$2e$js$2f$big$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](value).toFixed(decimals);
    },
    formatNumberToLocalString (value, decimals = 2) {
        if (value === undefined || value === '') {
            return '0.00';
        }
        if (typeof value === 'number') {
            return value.toLocaleString('en-US', {
                maximumFractionDigits: decimals,
                minimumFractionDigits: decimals,
                roundingMode: 'floor'
            });
        }
        return parseFloat(value).toLocaleString('en-US', {
            maximumFractionDigits: decimals,
            minimumFractionDigits: decimals,
            roundingMode: 'floor'
        });
    },
    parseLocalStringToNumber (value) {
        if (value === undefined || value === '') {
            return 0;
        }
        const sanitizedValue = value.replace(/,/gu, '');
        return new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$big$2e$js$2f$big$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](sanitizedValue).toNumber();
    }
}; //# sourceMappingURL=NumberUtil.js.map
}),
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-common/dist/esm/src/contracts/erc20.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "erc20ABI",
    ()=>erc20ABI
]);
const erc20ABI = [
    {
        type: 'function',
        name: 'transfer',
        stateMutability: 'nonpayable',
        inputs: [
            {
                name: '_to',
                type: 'address'
            },
            {
                name: '_value',
                type: 'uint256'
            }
        ],
        outputs: [
            {
                name: '',
                type: 'bool'
            }
        ]
    },
    {
        type: 'function',
        name: 'transferFrom',
        stateMutability: 'nonpayable',
        inputs: [
            {
                name: '_from',
                type: 'address'
            },
            {
                name: '_to',
                type: 'address'
            },
            {
                name: '_value',
                type: 'uint256'
            }
        ],
        outputs: [
            {
                name: '',
                type: 'bool'
            }
        ]
    }
]; //# sourceMappingURL=erc20.js.map
}),
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-common/dist/esm/src/contracts/swap.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "swapABI",
    ()=>swapABI
]);
const swapABI = [
    {
        type: 'function',
        name: 'approve',
        stateMutability: 'nonpayable',
        inputs: [
            {
                name: 'spender',
                type: 'address'
            },
            {
                name: 'amount',
                type: 'uint256'
            }
        ],
        outputs: [
            {
                type: 'bool'
            }
        ]
    }
]; //# sourceMappingURL=swap.js.map
}),
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-common/dist/esm/src/contracts/usdt.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "usdtABI",
    ()=>usdtABI
]);
const usdtABI = [
    {
        type: 'function',
        name: 'transfer',
        stateMutability: 'nonpayable',
        inputs: [
            {
                name: 'recipient',
                type: 'address'
            },
            {
                name: 'amount',
                type: 'uint256'
            }
        ],
        outputs: []
    },
    {
        type: 'function',
        name: 'transferFrom',
        stateMutability: 'nonpayable',
        inputs: [
            {
                name: 'sender',
                type: 'address'
            },
            {
                name: 'recipient',
                type: 'address'
            },
            {
                name: 'amount',
                type: 'uint256'
            }
        ],
        outputs: [
            {
                name: '',
                type: 'bool'
            }
        ]
    }
]; //# sourceMappingURL=usdt.js.map
}),
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-common/dist/esm/src/utils/ContractUtil.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ContractUtil",
    ()=>ContractUtil
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$contracts$2f$erc20$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-common/dist/esm/src/contracts/erc20.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$contracts$2f$swap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-common/dist/esm/src/contracts/swap.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$contracts$2f$usdt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-common/dist/esm/src/contracts/usdt.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-common/dist/esm/src/utils/ConstantsUtil.js [app-client] (ecmascript)");
;
;
;
;
const ContractUtil = {
    getERC20Abi: (tokenAddress)=>{
        if (__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].USDT_CONTRACT_ADDRESSES.includes(tokenAddress)) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$contracts$2f$usdt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usdtABI"];
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$contracts$2f$erc20$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["erc20ABI"];
    },
    getSwapAbi: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$contracts$2f$swap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["swapABI"]
}; //# sourceMappingURL=ContractUtil.js.map
}),
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-common/dist/esm/src/utils/DateUtil.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DateUtil",
    ()=>DateUtil
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$dayjs$2f$dayjs$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/dayjs/dayjs.min.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$dayjs$2f$locale$2f$en$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/dayjs/locale/en.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$dayjs$2f$plugin$2f$relativeTime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/dayjs/plugin/relativeTime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$dayjs$2f$plugin$2f$updateLocale$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/dayjs/plugin/updateLocale.js [app-client] (ecmascript)");
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$dayjs$2f$dayjs$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].extend(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$dayjs$2f$plugin$2f$relativeTime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$dayjs$2f$dayjs$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].extend(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$dayjs$2f$plugin$2f$updateLocale$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]);
const localeObject = {
    ...__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$dayjs$2f$locale$2f$en$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
    name: 'en-web3-modal',
    relativeTime: {
        future: 'in %s',
        past: '%s ago',
        s: '%d sec',
        m: '1 min',
        mm: '%d min',
        h: '1 hr',
        hh: '%d hrs',
        d: '1 d',
        dd: '%d d',
        M: '1 mo',
        MM: '%d mo',
        y: '1 yr',
        yy: '%d yr'
    }
};
const MONTH_NAMES = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];
__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$dayjs$2f$dayjs$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].locale('en-web3-modal', localeObject);
const DateUtil = {
    getMonthNameByIndex (monthIndex) {
        return MONTH_NAMES[monthIndex];
    },
    getYear (date = new Date().toISOString()) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$dayjs$2f$dayjs$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(date).year();
    },
    getRelativeDateFromNow (date) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$dayjs$2f$dayjs$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(date).locale('en-web3-modal').fromNow(true);
    },
    formatDate (date, format = 'DD MMM') {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$dayjs$2f$dayjs$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(date).format(format);
    }
}; //# sourceMappingURL=DateUtil.js.map
}),
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-common/dist/esm/src/utils/NavigationUtil.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NavigationUtil",
    ()=>NavigationUtil
]);
const NavigationUtil = {
    URLS: {
        FAQ: 'https://walletconnect.com/faq'
    }
}; //# sourceMappingURL=NavigationUtil.js.map
}),
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-controllers/node_modules/pino/browser.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const format = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/quick-format-unescaped/index.js [app-client] (ecmascript)");
module.exports = pino;
const _console = pfGlobalThisOrFallback().console || {};
const stdSerializers = {
    mapHttpRequest: mock,
    mapHttpResponse: mock,
    wrapRequestSerializer: passthrough,
    wrapResponseSerializer: passthrough,
    wrapErrorSerializer: passthrough,
    req: mock,
    res: mock,
    err: asErrValue,
    errWithCause: asErrValue
};
function levelToValue(level, logger) {
    return level === 'silent' ? Infinity : logger.levels.values[level];
}
const baseLogFunctionSymbol = Symbol('pino.logFuncs');
const hierarchySymbol = Symbol('pino.hierarchy');
const logFallbackMap = {
    error: 'log',
    fatal: 'error',
    warn: 'error',
    info: 'log',
    debug: 'log',
    trace: 'log'
};
function appendChildLogger(parentLogger, childLogger) {
    const newEntry = {
        logger: childLogger,
        parent: parentLogger[hierarchySymbol]
    };
    childLogger[hierarchySymbol] = newEntry;
}
function setupBaseLogFunctions(logger, levels, proto) {
    const logFunctions = {};
    levels.forEach((level)=>{
        logFunctions[level] = proto[level] ? proto[level] : _console[level] || _console[logFallbackMap[level] || 'log'] || noop;
    });
    logger[baseLogFunctionSymbol] = logFunctions;
}
function shouldSerialize(serialize, serializers) {
    if (Array.isArray(serialize)) {
        const hasToFilter = serialize.filter(function(k) {
            return k !== '!stdSerializers.err';
        });
        return hasToFilter;
    } else if (serialize === true) {
        return Object.keys(serializers);
    }
    return false;
}
function pino(opts) {
    opts = opts || {};
    opts.browser = opts.browser || {};
    const transmit = opts.browser.transmit;
    if (transmit && typeof transmit.send !== 'function') {
        throw Error('pino: transmit option must have a send function');
    }
    const proto = opts.browser.write || _console;
    if (opts.browser.write) opts.browser.asObject = true;
    const serializers = opts.serializers || {};
    const serialize = shouldSerialize(opts.browser.serialize, serializers);
    let stdErrSerialize = opts.browser.serialize;
    if (Array.isArray(opts.browser.serialize) && opts.browser.serialize.indexOf('!stdSerializers.err') > -1) stdErrSerialize = false;
    const customLevels = Object.keys(opts.customLevels || {});
    const levels = [
        'error',
        'fatal',
        'warn',
        'info',
        'debug',
        'trace'
    ].concat(customLevels);
    if (typeof proto === 'function') {
        levels.forEach(function(level) {
            proto[level] = proto;
        });
    }
    if (opts.enabled === false || opts.browser.disabled) opts.level = 'silent';
    const level = opts.level || 'info';
    const logger = Object.create(proto);
    if (!logger.log) logger.log = noop;
    setupBaseLogFunctions(logger, levels, proto);
    // setup root hierarchy entry
    appendChildLogger({}, logger);
    Object.defineProperty(logger, 'levelVal', {
        get: getLevelVal
    });
    Object.defineProperty(logger, 'level', {
        get: getLevel,
        set: setLevel
    });
    const setOpts = {
        transmit,
        serialize,
        asObject: opts.browser.asObject,
        asObjectBindingsOnly: opts.browser.asObjectBindingsOnly,
        formatters: opts.browser.formatters,
        levels,
        timestamp: getTimeFunction(opts),
        messageKey: opts.messageKey || 'msg',
        onChild: opts.onChild || noop
    };
    logger.levels = getLevels(opts);
    logger.level = level;
    logger.isLevelEnabled = function(level) {
        if (!this.levels.values[level]) {
            return false;
        }
        return this.levels.values[level] >= this.levels.values[this.level];
    };
    logger.setMaxListeners = logger.getMaxListeners = logger.emit = logger.addListener = logger.on = logger.prependListener = logger.once = logger.prependOnceListener = logger.removeListener = logger.removeAllListeners = logger.listeners = logger.listenerCount = logger.eventNames = logger.write = logger.flush = noop;
    logger.serializers = serializers;
    logger._serialize = serialize;
    logger._stdErrSerialize = stdErrSerialize;
    logger.child = function(...args) {
        return child.call(this, setOpts, ...args);
    };
    if (transmit) logger._logEvent = createLogEventShape();
    function getLevelVal() {
        return levelToValue(this.level, this);
    }
    function getLevel() {
        return this._level;
    }
    function setLevel(level) {
        if (level !== 'silent' && !this.levels.values[level]) {
            throw Error('unknown level ' + level);
        }
        this._level = level;
        set(this, setOpts, logger, 'error'); // <-- must stay first
        set(this, setOpts, logger, 'fatal');
        set(this, setOpts, logger, 'warn');
        set(this, setOpts, logger, 'info');
        set(this, setOpts, logger, 'debug');
        set(this, setOpts, logger, 'trace');
        customLevels.forEach((level)=>{
            set(this, setOpts, logger, level);
        });
    }
    function child(setOpts, bindings, childOptions) {
        if (!bindings) {
            throw new Error('missing bindings for child Pino');
        }
        childOptions = childOptions || {};
        if (serialize && bindings.serializers) {
            childOptions.serializers = bindings.serializers;
        }
        const childOptionsSerializers = childOptions.serializers;
        if (serialize && childOptionsSerializers) {
            var childSerializers = Object.assign({}, serializers, childOptionsSerializers);
            var childSerialize = opts.browser.serialize === true ? Object.keys(childSerializers) : serialize;
            delete bindings.serializers;
            applySerializers([
                bindings
            ], childSerialize, childSerializers, this._stdErrSerialize);
        }
        function Child(parent) {
            this._childLevel = (parent._childLevel | 0) + 1;
            // make sure bindings are available in the `set` function
            this.bindings = bindings;
            if (childSerializers) {
                this.serializers = childSerializers;
                this._serialize = childSerialize;
            }
            if (transmit) {
                this._logEvent = createLogEventShape([].concat(parent._logEvent.bindings, bindings));
            }
        }
        Child.prototype = this;
        const newLogger = new Child(this);
        // must happen before the level is assigned
        appendChildLogger(this, newLogger);
        newLogger.child = function(...args) {
            return child.call(this, setOpts, ...args);
        };
        // required to actually initialize the logger functions for any given child
        newLogger.level = childOptions.level || this.level; // allow level to be set by childOptions
        setOpts.onChild(newLogger);
        return newLogger;
    }
    return logger;
}
function getLevels(opts) {
    const customLevels = opts.customLevels || {};
    const values = Object.assign({}, pino.levels.values, customLevels);
    const labels = Object.assign({}, pino.levels.labels, invertObject(customLevels));
    return {
        values,
        labels
    };
}
function invertObject(obj) {
    const inverted = {};
    Object.keys(obj).forEach(function(key) {
        inverted[obj[key]] = key;
    });
    return inverted;
}
pino.levels = {
    values: {
        fatal: 60,
        error: 50,
        warn: 40,
        info: 30,
        debug: 20,
        trace: 10
    },
    labels: {
        10: 'trace',
        20: 'debug',
        30: 'info',
        40: 'warn',
        50: 'error',
        60: 'fatal'
    }
};
pino.stdSerializers = stdSerializers;
pino.stdTimeFunctions = Object.assign({}, {
    nullTime,
    epochTime,
    unixTime,
    isoTime
});
function getBindingChain(logger) {
    const bindings = [];
    if (logger.bindings) {
        bindings.push(logger.bindings);
    }
    // traverse up the tree to get all bindings
    let hierarchy = logger[hierarchySymbol];
    while(hierarchy.parent){
        hierarchy = hierarchy.parent;
        if (hierarchy.logger.bindings) {
            bindings.push(hierarchy.logger.bindings);
        }
    }
    return bindings.reverse();
}
function set(self1, opts, rootLogger, level) {
    // override the current log functions with either `noop` or the base log function
    Object.defineProperty(self1, level, {
        value: levelToValue(self1.level, rootLogger) > levelToValue(level, rootLogger) ? noop : rootLogger[baseLogFunctionSymbol][level],
        writable: true,
        enumerable: true,
        configurable: true
    });
    if (self1[level] === noop) {
        if (!opts.transmit) return;
        const transmitLevel = opts.transmit.level || self1.level;
        const transmitValue = levelToValue(transmitLevel, rootLogger);
        const methodValue = levelToValue(level, rootLogger);
        if (methodValue < transmitValue) return;
    }
    // make sure the log format is correct
    self1[level] = createWrap(self1, opts, rootLogger, level);
    // prepend bindings if it is not the root logger
    const bindings = getBindingChain(self1);
    if (bindings.length === 0) {
        // early exit in case for rootLogger
        return;
    }
    self1[level] = prependBindingsInArguments(bindings, self1[level]);
}
function prependBindingsInArguments(bindings, logFunc) {
    return function() {
        return logFunc.apply(this, [
            ...bindings,
            ...arguments
        ]);
    };
}
function createWrap(self1, opts, rootLogger, level) {
    return function(write) {
        return function LOG() {
            const ts = opts.timestamp();
            const args = new Array(arguments.length);
            const proto = Object.getPrototypeOf && Object.getPrototypeOf(this) === _console ? _console : this;
            for(var i = 0; i < args.length; i++)args[i] = arguments[i];
            var argsIsSerialized = false;
            if (opts.serialize) {
                applySerializers(args, this._serialize, this.serializers, this._stdErrSerialize);
                argsIsSerialized = true;
            }
            if (opts.asObject || opts.formatters) {
                write.call(proto, ...asObject(this, level, args, ts, opts));
            } else write.apply(proto, args);
            if (opts.transmit) {
                const transmitLevel = opts.transmit.level || self1._level;
                const transmitValue = levelToValue(transmitLevel, rootLogger);
                const methodValue = levelToValue(level, rootLogger);
                if (methodValue < transmitValue) return;
                transmit(this, {
                    ts,
                    methodLevel: level,
                    methodValue,
                    transmitLevel,
                    transmitValue: rootLogger.levels.values[opts.transmit.level || self1._level],
                    send: opts.transmit.send,
                    val: levelToValue(self1._level, rootLogger)
                }, args, argsIsSerialized);
            }
        };
    }(self1[baseLogFunctionSymbol][level]);
}
function asObject(logger, level, args, ts, opts) {
    const { level: levelFormatter, log: logObjectFormatter = (obj)=>obj } = opts.formatters || {};
    const argsCloned = args.slice();
    let msg = argsCloned[0];
    const logObject = {};
    let lvl = (logger._childLevel | 0) + 1;
    if (lvl < 1) lvl = 1;
    if (ts) {
        logObject.time = ts;
    }
    if (levelFormatter) {
        const formattedLevel = levelFormatter(level, logger.levels.values[level]);
        Object.assign(logObject, formattedLevel);
    } else {
        logObject.level = logger.levels.values[level];
    }
    if (opts.asObjectBindingsOnly) {
        if (msg !== null && typeof msg === 'object') {
            while(lvl-- && typeof argsCloned[0] === 'object'){
                Object.assign(logObject, argsCloned.shift());
            }
        }
        const formattedLogObject = logObjectFormatter(logObject);
        return [
            formattedLogObject,
            ...argsCloned
        ];
    } else {
        // deliberate, catching objects, arrays
        if (msg !== null && typeof msg === 'object') {
            while(lvl-- && typeof argsCloned[0] === 'object'){
                Object.assign(logObject, argsCloned.shift());
            }
            msg = argsCloned.length ? format(argsCloned.shift(), argsCloned) : undefined;
        } else if (typeof msg === 'string') msg = format(argsCloned.shift(), argsCloned);
        if (msg !== undefined) logObject[opts.messageKey] = msg;
        const formattedLogObject = logObjectFormatter(logObject);
        return [
            formattedLogObject
        ];
    }
}
function applySerializers(args, serialize, serializers, stdErrSerialize) {
    for(const i in args){
        if (stdErrSerialize && args[i] instanceof Error) {
            args[i] = pino.stdSerializers.err(args[i]);
        } else if (typeof args[i] === 'object' && !Array.isArray(args[i]) && serialize) {
            for(const k in args[i]){
                if (serialize.indexOf(k) > -1 && k in serializers) {
                    args[i][k] = serializers[k](args[i][k]);
                }
            }
        }
    }
}
function transmit(logger, opts, args, argsIsSerialized = false) {
    const send = opts.send;
    const ts = opts.ts;
    const methodLevel = opts.methodLevel;
    const methodValue = opts.methodValue;
    const val = opts.val;
    const bindings = logger._logEvent.bindings;
    if (!argsIsSerialized) {
        applySerializers(args, logger._serialize || Object.keys(logger.serializers), logger.serializers, logger._stdErrSerialize === undefined ? true : logger._stdErrSerialize);
    }
    logger._logEvent.ts = ts;
    logger._logEvent.messages = args.filter(function(arg) {
        // bindings can only be objects, so reference equality check via indexOf is fine
        return bindings.indexOf(arg) === -1;
    });
    logger._logEvent.level.label = methodLevel;
    logger._logEvent.level.value = methodValue;
    send(methodLevel, logger._logEvent, val);
    logger._logEvent = createLogEventShape(bindings);
}
function createLogEventShape(bindings) {
    return {
        ts: 0,
        messages: [],
        bindings: bindings || [],
        level: {
            label: '',
            value: 0
        }
    };
}
function asErrValue(err) {
    const obj = {
        type: err.constructor.name,
        msg: err.message,
        stack: err.stack
    };
    for(const key in err){
        if (obj[key] === undefined) {
            obj[key] = err[key];
        }
    }
    return obj;
}
function getTimeFunction(opts) {
    if (typeof opts.timestamp === 'function') {
        return opts.timestamp;
    }
    if (opts.timestamp === false) {
        return nullTime;
    }
    return epochTime;
}
function mock() {
    return {};
}
function passthrough(a) {
    return a;
}
function noop() {}
function nullTime() {
    return false;
}
function epochTime() {
    return Date.now();
}
function unixTime() {
    return Math.round(Date.now() / 1000.0);
}
function isoTime() {
    return new Date(Date.now()).toISOString();
} // using Date.now() for testability
/* eslint-disable */ /* istanbul ignore next */ function pfGlobalThisOrFallback() {
    function defd(o) {
        return typeof o !== 'undefined' && o;
    }
    try {
        if (typeof globalThis !== 'undefined') return globalThis;
        Object.defineProperty(Object.prototype, 'globalThis', {
            get: function() {
                delete Object.prototype.globalThis;
                return this.globalThis = this;
            },
            configurable: true
        });
        return globalThis;
    } catch (e) {
        return defd(self) || defd(window) || defd(this) || {};
    }
}
/* eslint-enable */ module.exports.default = pino;
module.exports.pino = pino;
}),
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-wallet/node_modules/pino/browser.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const format = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/quick-format-unescaped/index.js [app-client] (ecmascript)");
module.exports = pino;
const _console = pfGlobalThisOrFallback().console || {};
const stdSerializers = {
    mapHttpRequest: mock,
    mapHttpResponse: mock,
    wrapRequestSerializer: passthrough,
    wrapResponseSerializer: passthrough,
    wrapErrorSerializer: passthrough,
    req: mock,
    res: mock,
    err: asErrValue,
    errWithCause: asErrValue
};
function levelToValue(level, logger) {
    return level === 'silent' ? Infinity : logger.levels.values[level];
}
const baseLogFunctionSymbol = Symbol('pino.logFuncs');
const hierarchySymbol = Symbol('pino.hierarchy');
const logFallbackMap = {
    error: 'log',
    fatal: 'error',
    warn: 'error',
    info: 'log',
    debug: 'log',
    trace: 'log'
};
function appendChildLogger(parentLogger, childLogger) {
    const newEntry = {
        logger: childLogger,
        parent: parentLogger[hierarchySymbol]
    };
    childLogger[hierarchySymbol] = newEntry;
}
function setupBaseLogFunctions(logger, levels, proto) {
    const logFunctions = {};
    levels.forEach((level)=>{
        logFunctions[level] = proto[level] ? proto[level] : _console[level] || _console[logFallbackMap[level] || 'log'] || noop;
    });
    logger[baseLogFunctionSymbol] = logFunctions;
}
function shouldSerialize(serialize, serializers) {
    if (Array.isArray(serialize)) {
        const hasToFilter = serialize.filter(function(k) {
            return k !== '!stdSerializers.err';
        });
        return hasToFilter;
    } else if (serialize === true) {
        return Object.keys(serializers);
    }
    return false;
}
function pino(opts) {
    opts = opts || {};
    opts.browser = opts.browser || {};
    const transmit = opts.browser.transmit;
    if (transmit && typeof transmit.send !== 'function') {
        throw Error('pino: transmit option must have a send function');
    }
    const proto = opts.browser.write || _console;
    if (opts.browser.write) opts.browser.asObject = true;
    const serializers = opts.serializers || {};
    const serialize = shouldSerialize(opts.browser.serialize, serializers);
    let stdErrSerialize = opts.browser.serialize;
    if (Array.isArray(opts.browser.serialize) && opts.browser.serialize.indexOf('!stdSerializers.err') > -1) stdErrSerialize = false;
    const customLevels = Object.keys(opts.customLevels || {});
    const levels = [
        'error',
        'fatal',
        'warn',
        'info',
        'debug',
        'trace'
    ].concat(customLevels);
    if (typeof proto === 'function') {
        levels.forEach(function(level) {
            proto[level] = proto;
        });
    }
    if (opts.enabled === false || opts.browser.disabled) opts.level = 'silent';
    const level = opts.level || 'info';
    const logger = Object.create(proto);
    if (!logger.log) logger.log = noop;
    setupBaseLogFunctions(logger, levels, proto);
    // setup root hierarchy entry
    appendChildLogger({}, logger);
    Object.defineProperty(logger, 'levelVal', {
        get: getLevelVal
    });
    Object.defineProperty(logger, 'level', {
        get: getLevel,
        set: setLevel
    });
    const setOpts = {
        transmit,
        serialize,
        asObject: opts.browser.asObject,
        asObjectBindingsOnly: opts.browser.asObjectBindingsOnly,
        formatters: opts.browser.formatters,
        levels,
        timestamp: getTimeFunction(opts),
        messageKey: opts.messageKey || 'msg',
        onChild: opts.onChild || noop
    };
    logger.levels = getLevels(opts);
    logger.level = level;
    logger.isLevelEnabled = function(level) {
        if (!this.levels.values[level]) {
            return false;
        }
        return this.levels.values[level] >= this.levels.values[this.level];
    };
    logger.setMaxListeners = logger.getMaxListeners = logger.emit = logger.addListener = logger.on = logger.prependListener = logger.once = logger.prependOnceListener = logger.removeListener = logger.removeAllListeners = logger.listeners = logger.listenerCount = logger.eventNames = logger.write = logger.flush = noop;
    logger.serializers = serializers;
    logger._serialize = serialize;
    logger._stdErrSerialize = stdErrSerialize;
    logger.child = function(...args) {
        return child.call(this, setOpts, ...args);
    };
    if (transmit) logger._logEvent = createLogEventShape();
    function getLevelVal() {
        return levelToValue(this.level, this);
    }
    function getLevel() {
        return this._level;
    }
    function setLevel(level) {
        if (level !== 'silent' && !this.levels.values[level]) {
            throw Error('unknown level ' + level);
        }
        this._level = level;
        set(this, setOpts, logger, 'error'); // <-- must stay first
        set(this, setOpts, logger, 'fatal');
        set(this, setOpts, logger, 'warn');
        set(this, setOpts, logger, 'info');
        set(this, setOpts, logger, 'debug');
        set(this, setOpts, logger, 'trace');
        customLevels.forEach((level)=>{
            set(this, setOpts, logger, level);
        });
    }
    function child(setOpts, bindings, childOptions) {
        if (!bindings) {
            throw new Error('missing bindings for child Pino');
        }
        childOptions = childOptions || {};
        if (serialize && bindings.serializers) {
            childOptions.serializers = bindings.serializers;
        }
        const childOptionsSerializers = childOptions.serializers;
        if (serialize && childOptionsSerializers) {
            var childSerializers = Object.assign({}, serializers, childOptionsSerializers);
            var childSerialize = opts.browser.serialize === true ? Object.keys(childSerializers) : serialize;
            delete bindings.serializers;
            applySerializers([
                bindings
            ], childSerialize, childSerializers, this._stdErrSerialize);
        }
        function Child(parent) {
            this._childLevel = (parent._childLevel | 0) + 1;
            // make sure bindings are available in the `set` function
            this.bindings = bindings;
            if (childSerializers) {
                this.serializers = childSerializers;
                this._serialize = childSerialize;
            }
            if (transmit) {
                this._logEvent = createLogEventShape([].concat(parent._logEvent.bindings, bindings));
            }
        }
        Child.prototype = this;
        const newLogger = new Child(this);
        // must happen before the level is assigned
        appendChildLogger(this, newLogger);
        newLogger.child = function(...args) {
            return child.call(this, setOpts, ...args);
        };
        // required to actually initialize the logger functions for any given child
        newLogger.level = childOptions.level || this.level; // allow level to be set by childOptions
        setOpts.onChild(newLogger);
        return newLogger;
    }
    return logger;
}
function getLevels(opts) {
    const customLevels = opts.customLevels || {};
    const values = Object.assign({}, pino.levels.values, customLevels);
    const labels = Object.assign({}, pino.levels.labels, invertObject(customLevels));
    return {
        values,
        labels
    };
}
function invertObject(obj) {
    const inverted = {};
    Object.keys(obj).forEach(function(key) {
        inverted[obj[key]] = key;
    });
    return inverted;
}
pino.levels = {
    values: {
        fatal: 60,
        error: 50,
        warn: 40,
        info: 30,
        debug: 20,
        trace: 10
    },
    labels: {
        10: 'trace',
        20: 'debug',
        30: 'info',
        40: 'warn',
        50: 'error',
        60: 'fatal'
    }
};
pino.stdSerializers = stdSerializers;
pino.stdTimeFunctions = Object.assign({}, {
    nullTime,
    epochTime,
    unixTime,
    isoTime
});
function getBindingChain(logger) {
    const bindings = [];
    if (logger.bindings) {
        bindings.push(logger.bindings);
    }
    // traverse up the tree to get all bindings
    let hierarchy = logger[hierarchySymbol];
    while(hierarchy.parent){
        hierarchy = hierarchy.parent;
        if (hierarchy.logger.bindings) {
            bindings.push(hierarchy.logger.bindings);
        }
    }
    return bindings.reverse();
}
function set(self1, opts, rootLogger, level) {
    // override the current log functions with either `noop` or the base log function
    Object.defineProperty(self1, level, {
        value: levelToValue(self1.level, rootLogger) > levelToValue(level, rootLogger) ? noop : rootLogger[baseLogFunctionSymbol][level],
        writable: true,
        enumerable: true,
        configurable: true
    });
    if (self1[level] === noop) {
        if (!opts.transmit) return;
        const transmitLevel = opts.transmit.level || self1.level;
        const transmitValue = levelToValue(transmitLevel, rootLogger);
        const methodValue = levelToValue(level, rootLogger);
        if (methodValue < transmitValue) return;
    }
    // make sure the log format is correct
    self1[level] = createWrap(self1, opts, rootLogger, level);
    // prepend bindings if it is not the root logger
    const bindings = getBindingChain(self1);
    if (bindings.length === 0) {
        // early exit in case for rootLogger
        return;
    }
    self1[level] = prependBindingsInArguments(bindings, self1[level]);
}
function prependBindingsInArguments(bindings, logFunc) {
    return function() {
        return logFunc.apply(this, [
            ...bindings,
            ...arguments
        ]);
    };
}
function createWrap(self1, opts, rootLogger, level) {
    return function(write) {
        return function LOG() {
            const ts = opts.timestamp();
            const args = new Array(arguments.length);
            const proto = Object.getPrototypeOf && Object.getPrototypeOf(this) === _console ? _console : this;
            for(var i = 0; i < args.length; i++)args[i] = arguments[i];
            var argsIsSerialized = false;
            if (opts.serialize) {
                applySerializers(args, this._serialize, this.serializers, this._stdErrSerialize);
                argsIsSerialized = true;
            }
            if (opts.asObject || opts.formatters) {
                write.call(proto, ...asObject(this, level, args, ts, opts));
            } else write.apply(proto, args);
            if (opts.transmit) {
                const transmitLevel = opts.transmit.level || self1._level;
                const transmitValue = levelToValue(transmitLevel, rootLogger);
                const methodValue = levelToValue(level, rootLogger);
                if (methodValue < transmitValue) return;
                transmit(this, {
                    ts,
                    methodLevel: level,
                    methodValue,
                    transmitLevel,
                    transmitValue: rootLogger.levels.values[opts.transmit.level || self1._level],
                    send: opts.transmit.send,
                    val: levelToValue(self1._level, rootLogger)
                }, args, argsIsSerialized);
            }
        };
    }(self1[baseLogFunctionSymbol][level]);
}
function asObject(logger, level, args, ts, opts) {
    const { level: levelFormatter, log: logObjectFormatter = (obj)=>obj } = opts.formatters || {};
    const argsCloned = args.slice();
    let msg = argsCloned[0];
    const logObject = {};
    let lvl = (logger._childLevel | 0) + 1;
    if (lvl < 1) lvl = 1;
    if (ts) {
        logObject.time = ts;
    }
    if (levelFormatter) {
        const formattedLevel = levelFormatter(level, logger.levels.values[level]);
        Object.assign(logObject, formattedLevel);
    } else {
        logObject.level = logger.levels.values[level];
    }
    if (opts.asObjectBindingsOnly) {
        if (msg !== null && typeof msg === 'object') {
            while(lvl-- && typeof argsCloned[0] === 'object'){
                Object.assign(logObject, argsCloned.shift());
            }
        }
        const formattedLogObject = logObjectFormatter(logObject);
        return [
            formattedLogObject,
            ...argsCloned
        ];
    } else {
        // deliberate, catching objects, arrays
        if (msg !== null && typeof msg === 'object') {
            while(lvl-- && typeof argsCloned[0] === 'object'){
                Object.assign(logObject, argsCloned.shift());
            }
            msg = argsCloned.length ? format(argsCloned.shift(), argsCloned) : undefined;
        } else if (typeof msg === 'string') msg = format(argsCloned.shift(), argsCloned);
        if (msg !== undefined) logObject[opts.messageKey] = msg;
        const formattedLogObject = logObjectFormatter(logObject);
        return [
            formattedLogObject
        ];
    }
}
function applySerializers(args, serialize, serializers, stdErrSerialize) {
    for(const i in args){
        if (stdErrSerialize && args[i] instanceof Error) {
            args[i] = pino.stdSerializers.err(args[i]);
        } else if (typeof args[i] === 'object' && !Array.isArray(args[i]) && serialize) {
            for(const k in args[i]){
                if (serialize.indexOf(k) > -1 && k in serializers) {
                    args[i][k] = serializers[k](args[i][k]);
                }
            }
        }
    }
}
function transmit(logger, opts, args, argsIsSerialized = false) {
    const send = opts.send;
    const ts = opts.ts;
    const methodLevel = opts.methodLevel;
    const methodValue = opts.methodValue;
    const val = opts.val;
    const bindings = logger._logEvent.bindings;
    if (!argsIsSerialized) {
        applySerializers(args, logger._serialize || Object.keys(logger.serializers), logger.serializers, logger._stdErrSerialize === undefined ? true : logger._stdErrSerialize);
    }
    logger._logEvent.ts = ts;
    logger._logEvent.messages = args.filter(function(arg) {
        // bindings can only be objects, so reference equality check via indexOf is fine
        return bindings.indexOf(arg) === -1;
    });
    logger._logEvent.level.label = methodLevel;
    logger._logEvent.level.value = methodValue;
    send(methodLevel, logger._logEvent, val);
    logger._logEvent = createLogEventShape(bindings);
}
function createLogEventShape(bindings) {
    return {
        ts: 0,
        messages: [],
        bindings: bindings || [],
        level: {
            label: '',
            value: 0
        }
    };
}
function asErrValue(err) {
    const obj = {
        type: err.constructor.name,
        msg: err.message,
        stack: err.stack
    };
    for(const key in err){
        if (obj[key] === undefined) {
            obj[key] = err[key];
        }
    }
    return obj;
}
function getTimeFunction(opts) {
    if (typeof opts.timestamp === 'function') {
        return opts.timestamp;
    }
    if (opts.timestamp === false) {
        return nullTime;
    }
    return epochTime;
}
function mock() {
    return {};
}
function passthrough(a) {
    return a;
}
function noop() {}
function nullTime() {
    return false;
}
function epochTime() {
    return Date.now();
}
function unixTime() {
    return Math.round(Date.now() / 1000.0);
}
function isoTime() {
    return new Date(Date.now()).toISOString();
} // using Date.now() for testability
/* eslint-disable */ /* istanbul ignore next */ function pfGlobalThisOrFallback() {
    function defd(o) {
        return typeof o !== 'undefined' && o;
    }
    try {
        if (typeof globalThis !== 'undefined') return globalThis;
        Object.defineProperty(Object.prototype, 'globalThis', {
            get: function() {
                delete Object.prototype.globalThis;
                return this.globalThis = this;
            },
            configurable: true
        });
        return globalThis;
    } catch (e) {
        return defd(self) || defd(window) || defd(this) || {};
    }
}
/* eslint-enable */ module.exports.default = pino;
module.exports.pino = pino;
}),
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit/node_modules/pino/browser.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const format = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/quick-format-unescaped/index.js [app-client] (ecmascript)");
module.exports = pino;
const _console = pfGlobalThisOrFallback().console || {};
const stdSerializers = {
    mapHttpRequest: mock,
    mapHttpResponse: mock,
    wrapRequestSerializer: passthrough,
    wrapResponseSerializer: passthrough,
    wrapErrorSerializer: passthrough,
    req: mock,
    res: mock,
    err: asErrValue,
    errWithCause: asErrValue
};
function levelToValue(level, logger) {
    return level === 'silent' ? Infinity : logger.levels.values[level];
}
const baseLogFunctionSymbol = Symbol('pino.logFuncs');
const hierarchySymbol = Symbol('pino.hierarchy');
const logFallbackMap = {
    error: 'log',
    fatal: 'error',
    warn: 'error',
    info: 'log',
    debug: 'log',
    trace: 'log'
};
function appendChildLogger(parentLogger, childLogger) {
    const newEntry = {
        logger: childLogger,
        parent: parentLogger[hierarchySymbol]
    };
    childLogger[hierarchySymbol] = newEntry;
}
function setupBaseLogFunctions(logger, levels, proto) {
    const logFunctions = {};
    levels.forEach((level)=>{
        logFunctions[level] = proto[level] ? proto[level] : _console[level] || _console[logFallbackMap[level] || 'log'] || noop;
    });
    logger[baseLogFunctionSymbol] = logFunctions;
}
function shouldSerialize(serialize, serializers) {
    if (Array.isArray(serialize)) {
        const hasToFilter = serialize.filter(function(k) {
            return k !== '!stdSerializers.err';
        });
        return hasToFilter;
    } else if (serialize === true) {
        return Object.keys(serializers);
    }
    return false;
}
function pino(opts) {
    opts = opts || {};
    opts.browser = opts.browser || {};
    const transmit = opts.browser.transmit;
    if (transmit && typeof transmit.send !== 'function') {
        throw Error('pino: transmit option must have a send function');
    }
    const proto = opts.browser.write || _console;
    if (opts.browser.write) opts.browser.asObject = true;
    const serializers = opts.serializers || {};
    const serialize = shouldSerialize(opts.browser.serialize, serializers);
    let stdErrSerialize = opts.browser.serialize;
    if (Array.isArray(opts.browser.serialize) && opts.browser.serialize.indexOf('!stdSerializers.err') > -1) stdErrSerialize = false;
    const customLevels = Object.keys(opts.customLevels || {});
    const levels = [
        'error',
        'fatal',
        'warn',
        'info',
        'debug',
        'trace'
    ].concat(customLevels);
    if (typeof proto === 'function') {
        levels.forEach(function(level) {
            proto[level] = proto;
        });
    }
    if (opts.enabled === false || opts.browser.disabled) opts.level = 'silent';
    const level = opts.level || 'info';
    const logger = Object.create(proto);
    if (!logger.log) logger.log = noop;
    setupBaseLogFunctions(logger, levels, proto);
    // setup root hierarchy entry
    appendChildLogger({}, logger);
    Object.defineProperty(logger, 'levelVal', {
        get: getLevelVal
    });
    Object.defineProperty(logger, 'level', {
        get: getLevel,
        set: setLevel
    });
    const setOpts = {
        transmit,
        serialize,
        asObject: opts.browser.asObject,
        asObjectBindingsOnly: opts.browser.asObjectBindingsOnly,
        formatters: opts.browser.formatters,
        levels,
        timestamp: getTimeFunction(opts),
        messageKey: opts.messageKey || 'msg',
        onChild: opts.onChild || noop
    };
    logger.levels = getLevels(opts);
    logger.level = level;
    logger.isLevelEnabled = function(level) {
        if (!this.levels.values[level]) {
            return false;
        }
        return this.levels.values[level] >= this.levels.values[this.level];
    };
    logger.setMaxListeners = logger.getMaxListeners = logger.emit = logger.addListener = logger.on = logger.prependListener = logger.once = logger.prependOnceListener = logger.removeListener = logger.removeAllListeners = logger.listeners = logger.listenerCount = logger.eventNames = logger.write = logger.flush = noop;
    logger.serializers = serializers;
    logger._serialize = serialize;
    logger._stdErrSerialize = stdErrSerialize;
    logger.child = function(...args) {
        return child.call(this, setOpts, ...args);
    };
    if (transmit) logger._logEvent = createLogEventShape();
    function getLevelVal() {
        return levelToValue(this.level, this);
    }
    function getLevel() {
        return this._level;
    }
    function setLevel(level) {
        if (level !== 'silent' && !this.levels.values[level]) {
            throw Error('unknown level ' + level);
        }
        this._level = level;
        set(this, setOpts, logger, 'error'); // <-- must stay first
        set(this, setOpts, logger, 'fatal');
        set(this, setOpts, logger, 'warn');
        set(this, setOpts, logger, 'info');
        set(this, setOpts, logger, 'debug');
        set(this, setOpts, logger, 'trace');
        customLevels.forEach((level)=>{
            set(this, setOpts, logger, level);
        });
    }
    function child(setOpts, bindings, childOptions) {
        if (!bindings) {
            throw new Error('missing bindings for child Pino');
        }
        childOptions = childOptions || {};
        if (serialize && bindings.serializers) {
            childOptions.serializers = bindings.serializers;
        }
        const childOptionsSerializers = childOptions.serializers;
        if (serialize && childOptionsSerializers) {
            var childSerializers = Object.assign({}, serializers, childOptionsSerializers);
            var childSerialize = opts.browser.serialize === true ? Object.keys(childSerializers) : serialize;
            delete bindings.serializers;
            applySerializers([
                bindings
            ], childSerialize, childSerializers, this._stdErrSerialize);
        }
        function Child(parent) {
            this._childLevel = (parent._childLevel | 0) + 1;
            // make sure bindings are available in the `set` function
            this.bindings = bindings;
            if (childSerializers) {
                this.serializers = childSerializers;
                this._serialize = childSerialize;
            }
            if (transmit) {
                this._logEvent = createLogEventShape([].concat(parent._logEvent.bindings, bindings));
            }
        }
        Child.prototype = this;
        const newLogger = new Child(this);
        // must happen before the level is assigned
        appendChildLogger(this, newLogger);
        newLogger.child = function(...args) {
            return child.call(this, setOpts, ...args);
        };
        // required to actually initialize the logger functions for any given child
        newLogger.level = childOptions.level || this.level; // allow level to be set by childOptions
        setOpts.onChild(newLogger);
        return newLogger;
    }
    return logger;
}
function getLevels(opts) {
    const customLevels = opts.customLevels || {};
    const values = Object.assign({}, pino.levels.values, customLevels);
    const labels = Object.assign({}, pino.levels.labels, invertObject(customLevels));
    return {
        values,
        labels
    };
}
function invertObject(obj) {
    const inverted = {};
    Object.keys(obj).forEach(function(key) {
        inverted[obj[key]] = key;
    });
    return inverted;
}
pino.levels = {
    values: {
        fatal: 60,
        error: 50,
        warn: 40,
        info: 30,
        debug: 20,
        trace: 10
    },
    labels: {
        10: 'trace',
        20: 'debug',
        30: 'info',
        40: 'warn',
        50: 'error',
        60: 'fatal'
    }
};
pino.stdSerializers = stdSerializers;
pino.stdTimeFunctions = Object.assign({}, {
    nullTime,
    epochTime,
    unixTime,
    isoTime
});
function getBindingChain(logger) {
    const bindings = [];
    if (logger.bindings) {
        bindings.push(logger.bindings);
    }
    // traverse up the tree to get all bindings
    let hierarchy = logger[hierarchySymbol];
    while(hierarchy.parent){
        hierarchy = hierarchy.parent;
        if (hierarchy.logger.bindings) {
            bindings.push(hierarchy.logger.bindings);
        }
    }
    return bindings.reverse();
}
function set(self1, opts, rootLogger, level) {
    // override the current log functions with either `noop` or the base log function
    Object.defineProperty(self1, level, {
        value: levelToValue(self1.level, rootLogger) > levelToValue(level, rootLogger) ? noop : rootLogger[baseLogFunctionSymbol][level],
        writable: true,
        enumerable: true,
        configurable: true
    });
    if (self1[level] === noop) {
        if (!opts.transmit) return;
        const transmitLevel = opts.transmit.level || self1.level;
        const transmitValue = levelToValue(transmitLevel, rootLogger);
        const methodValue = levelToValue(level, rootLogger);
        if (methodValue < transmitValue) return;
    }
    // make sure the log format is correct
    self1[level] = createWrap(self1, opts, rootLogger, level);
    // prepend bindings if it is not the root logger
    const bindings = getBindingChain(self1);
    if (bindings.length === 0) {
        // early exit in case for rootLogger
        return;
    }
    self1[level] = prependBindingsInArguments(bindings, self1[level]);
}
function prependBindingsInArguments(bindings, logFunc) {
    return function() {
        return logFunc.apply(this, [
            ...bindings,
            ...arguments
        ]);
    };
}
function createWrap(self1, opts, rootLogger, level) {
    return function(write) {
        return function LOG() {
            const ts = opts.timestamp();
            const args = new Array(arguments.length);
            const proto = Object.getPrototypeOf && Object.getPrototypeOf(this) === _console ? _console : this;
            for(var i = 0; i < args.length; i++)args[i] = arguments[i];
            var argsIsSerialized = false;
            if (opts.serialize) {
                applySerializers(args, this._serialize, this.serializers, this._stdErrSerialize);
                argsIsSerialized = true;
            }
            if (opts.asObject || opts.formatters) {
                write.call(proto, ...asObject(this, level, args, ts, opts));
            } else write.apply(proto, args);
            if (opts.transmit) {
                const transmitLevel = opts.transmit.level || self1._level;
                const transmitValue = levelToValue(transmitLevel, rootLogger);
                const methodValue = levelToValue(level, rootLogger);
                if (methodValue < transmitValue) return;
                transmit(this, {
                    ts,
                    methodLevel: level,
                    methodValue,
                    transmitLevel,
                    transmitValue: rootLogger.levels.values[opts.transmit.level || self1._level],
                    send: opts.transmit.send,
                    val: levelToValue(self1._level, rootLogger)
                }, args, argsIsSerialized);
            }
        };
    }(self1[baseLogFunctionSymbol][level]);
}
function asObject(logger, level, args, ts, opts) {
    const { level: levelFormatter, log: logObjectFormatter = (obj)=>obj } = opts.formatters || {};
    const argsCloned = args.slice();
    let msg = argsCloned[0];
    const logObject = {};
    let lvl = (logger._childLevel | 0) + 1;
    if (lvl < 1) lvl = 1;
    if (ts) {
        logObject.time = ts;
    }
    if (levelFormatter) {
        const formattedLevel = levelFormatter(level, logger.levels.values[level]);
        Object.assign(logObject, formattedLevel);
    } else {
        logObject.level = logger.levels.values[level];
    }
    if (opts.asObjectBindingsOnly) {
        if (msg !== null && typeof msg === 'object') {
            while(lvl-- && typeof argsCloned[0] === 'object'){
                Object.assign(logObject, argsCloned.shift());
            }
        }
        const formattedLogObject = logObjectFormatter(logObject);
        return [
            formattedLogObject,
            ...argsCloned
        ];
    } else {
        // deliberate, catching objects, arrays
        if (msg !== null && typeof msg === 'object') {
            while(lvl-- && typeof argsCloned[0] === 'object'){
                Object.assign(logObject, argsCloned.shift());
            }
            msg = argsCloned.length ? format(argsCloned.shift(), argsCloned) : undefined;
        } else if (typeof msg === 'string') msg = format(argsCloned.shift(), argsCloned);
        if (msg !== undefined) logObject[opts.messageKey] = msg;
        const formattedLogObject = logObjectFormatter(logObject);
        return [
            formattedLogObject
        ];
    }
}
function applySerializers(args, serialize, serializers, stdErrSerialize) {
    for(const i in args){
        if (stdErrSerialize && args[i] instanceof Error) {
            args[i] = pino.stdSerializers.err(args[i]);
        } else if (typeof args[i] === 'object' && !Array.isArray(args[i]) && serialize) {
            for(const k in args[i]){
                if (serialize.indexOf(k) > -1 && k in serializers) {
                    args[i][k] = serializers[k](args[i][k]);
                }
            }
        }
    }
}
function transmit(logger, opts, args, argsIsSerialized = false) {
    const send = opts.send;
    const ts = opts.ts;
    const methodLevel = opts.methodLevel;
    const methodValue = opts.methodValue;
    const val = opts.val;
    const bindings = logger._logEvent.bindings;
    if (!argsIsSerialized) {
        applySerializers(args, logger._serialize || Object.keys(logger.serializers), logger.serializers, logger._stdErrSerialize === undefined ? true : logger._stdErrSerialize);
    }
    logger._logEvent.ts = ts;
    logger._logEvent.messages = args.filter(function(arg) {
        // bindings can only be objects, so reference equality check via indexOf is fine
        return bindings.indexOf(arg) === -1;
    });
    logger._logEvent.level.label = methodLevel;
    logger._logEvent.level.value = methodValue;
    send(methodLevel, logger._logEvent, val);
    logger._logEvent = createLogEventShape(bindings);
}
function createLogEventShape(bindings) {
    return {
        ts: 0,
        messages: [],
        bindings: bindings || [],
        level: {
            label: '',
            value: 0
        }
    };
}
function asErrValue(err) {
    const obj = {
        type: err.constructor.name,
        msg: err.message,
        stack: err.stack
    };
    for(const key in err){
        if (obj[key] === undefined) {
            obj[key] = err[key];
        }
    }
    return obj;
}
function getTimeFunction(opts) {
    if (typeof opts.timestamp === 'function') {
        return opts.timestamp;
    }
    if (opts.timestamp === false) {
        return nullTime;
    }
    return epochTime;
}
function mock() {
    return {};
}
function passthrough(a) {
    return a;
}
function noop() {}
function nullTime() {
    return false;
}
function epochTime() {
    return Date.now();
}
function unixTime() {
    return Math.round(Date.now() / 1000.0);
}
function isoTime() {
    return new Date(Date.now()).toISOString();
} // using Date.now() for testability
/* eslint-disable */ /* istanbul ignore next */ function pfGlobalThisOrFallback() {
    function defd(o) {
        return typeof o !== 'undefined' && o;
    }
    try {
        if (typeof globalThis !== 'undefined') return globalThis;
        Object.defineProperty(Object.prototype, 'globalThis', {
            get: function() {
                delete Object.prototype.globalThis;
                return this.globalThis = this;
            },
            configurable: true
        });
        return globalThis;
    } catch (e) {
        return defd(self) || defd(window) || defd(this) || {};
    }
}
/* eslint-enable */ module.exports.default = pino;
module.exports.pino = pino;
}),
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-utils/node_modules/pino/browser.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const format = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/quick-format-unescaped/index.js [app-client] (ecmascript)");
module.exports = pino;
const _console = pfGlobalThisOrFallback().console || {};
const stdSerializers = {
    mapHttpRequest: mock,
    mapHttpResponse: mock,
    wrapRequestSerializer: passthrough,
    wrapResponseSerializer: passthrough,
    wrapErrorSerializer: passthrough,
    req: mock,
    res: mock,
    err: asErrValue,
    errWithCause: asErrValue
};
function levelToValue(level, logger) {
    return level === 'silent' ? Infinity : logger.levels.values[level];
}
const baseLogFunctionSymbol = Symbol('pino.logFuncs');
const hierarchySymbol = Symbol('pino.hierarchy');
const logFallbackMap = {
    error: 'log',
    fatal: 'error',
    warn: 'error',
    info: 'log',
    debug: 'log',
    trace: 'log'
};
function appendChildLogger(parentLogger, childLogger) {
    const newEntry = {
        logger: childLogger,
        parent: parentLogger[hierarchySymbol]
    };
    childLogger[hierarchySymbol] = newEntry;
}
function setupBaseLogFunctions(logger, levels, proto) {
    const logFunctions = {};
    levels.forEach((level)=>{
        logFunctions[level] = proto[level] ? proto[level] : _console[level] || _console[logFallbackMap[level] || 'log'] || noop;
    });
    logger[baseLogFunctionSymbol] = logFunctions;
}
function shouldSerialize(serialize, serializers) {
    if (Array.isArray(serialize)) {
        const hasToFilter = serialize.filter(function(k) {
            return k !== '!stdSerializers.err';
        });
        return hasToFilter;
    } else if (serialize === true) {
        return Object.keys(serializers);
    }
    return false;
}
function pino(opts) {
    opts = opts || {};
    opts.browser = opts.browser || {};
    const transmit = opts.browser.transmit;
    if (transmit && typeof transmit.send !== 'function') {
        throw Error('pino: transmit option must have a send function');
    }
    const proto = opts.browser.write || _console;
    if (opts.browser.write) opts.browser.asObject = true;
    const serializers = opts.serializers || {};
    const serialize = shouldSerialize(opts.browser.serialize, serializers);
    let stdErrSerialize = opts.browser.serialize;
    if (Array.isArray(opts.browser.serialize) && opts.browser.serialize.indexOf('!stdSerializers.err') > -1) stdErrSerialize = false;
    const customLevels = Object.keys(opts.customLevels || {});
    const levels = [
        'error',
        'fatal',
        'warn',
        'info',
        'debug',
        'trace'
    ].concat(customLevels);
    if (typeof proto === 'function') {
        levels.forEach(function(level) {
            proto[level] = proto;
        });
    }
    if (opts.enabled === false || opts.browser.disabled) opts.level = 'silent';
    const level = opts.level || 'info';
    const logger = Object.create(proto);
    if (!logger.log) logger.log = noop;
    setupBaseLogFunctions(logger, levels, proto);
    // setup root hierarchy entry
    appendChildLogger({}, logger);
    Object.defineProperty(logger, 'levelVal', {
        get: getLevelVal
    });
    Object.defineProperty(logger, 'level', {
        get: getLevel,
        set: setLevel
    });
    const setOpts = {
        transmit,
        serialize,
        asObject: opts.browser.asObject,
        asObjectBindingsOnly: opts.browser.asObjectBindingsOnly,
        formatters: opts.browser.formatters,
        levels,
        timestamp: getTimeFunction(opts),
        messageKey: opts.messageKey || 'msg',
        onChild: opts.onChild || noop
    };
    logger.levels = getLevels(opts);
    logger.level = level;
    logger.isLevelEnabled = function(level) {
        if (!this.levels.values[level]) {
            return false;
        }
        return this.levels.values[level] >= this.levels.values[this.level];
    };
    logger.setMaxListeners = logger.getMaxListeners = logger.emit = logger.addListener = logger.on = logger.prependListener = logger.once = logger.prependOnceListener = logger.removeListener = logger.removeAllListeners = logger.listeners = logger.listenerCount = logger.eventNames = logger.write = logger.flush = noop;
    logger.serializers = serializers;
    logger._serialize = serialize;
    logger._stdErrSerialize = stdErrSerialize;
    logger.child = function(...args) {
        return child.call(this, setOpts, ...args);
    };
    if (transmit) logger._logEvent = createLogEventShape();
    function getLevelVal() {
        return levelToValue(this.level, this);
    }
    function getLevel() {
        return this._level;
    }
    function setLevel(level) {
        if (level !== 'silent' && !this.levels.values[level]) {
            throw Error('unknown level ' + level);
        }
        this._level = level;
        set(this, setOpts, logger, 'error'); // <-- must stay first
        set(this, setOpts, logger, 'fatal');
        set(this, setOpts, logger, 'warn');
        set(this, setOpts, logger, 'info');
        set(this, setOpts, logger, 'debug');
        set(this, setOpts, logger, 'trace');
        customLevels.forEach((level)=>{
            set(this, setOpts, logger, level);
        });
    }
    function child(setOpts, bindings, childOptions) {
        if (!bindings) {
            throw new Error('missing bindings for child Pino');
        }
        childOptions = childOptions || {};
        if (serialize && bindings.serializers) {
            childOptions.serializers = bindings.serializers;
        }
        const childOptionsSerializers = childOptions.serializers;
        if (serialize && childOptionsSerializers) {
            var childSerializers = Object.assign({}, serializers, childOptionsSerializers);
            var childSerialize = opts.browser.serialize === true ? Object.keys(childSerializers) : serialize;
            delete bindings.serializers;
            applySerializers([
                bindings
            ], childSerialize, childSerializers, this._stdErrSerialize);
        }
        function Child(parent) {
            this._childLevel = (parent._childLevel | 0) + 1;
            // make sure bindings are available in the `set` function
            this.bindings = bindings;
            if (childSerializers) {
                this.serializers = childSerializers;
                this._serialize = childSerialize;
            }
            if (transmit) {
                this._logEvent = createLogEventShape([].concat(parent._logEvent.bindings, bindings));
            }
        }
        Child.prototype = this;
        const newLogger = new Child(this);
        // must happen before the level is assigned
        appendChildLogger(this, newLogger);
        newLogger.child = function(...args) {
            return child.call(this, setOpts, ...args);
        };
        // required to actually initialize the logger functions for any given child
        newLogger.level = childOptions.level || this.level; // allow level to be set by childOptions
        setOpts.onChild(newLogger);
        return newLogger;
    }
    return logger;
}
function getLevels(opts) {
    const customLevels = opts.customLevels || {};
    const values = Object.assign({}, pino.levels.values, customLevels);
    const labels = Object.assign({}, pino.levels.labels, invertObject(customLevels));
    return {
        values,
        labels
    };
}
function invertObject(obj) {
    const inverted = {};
    Object.keys(obj).forEach(function(key) {
        inverted[obj[key]] = key;
    });
    return inverted;
}
pino.levels = {
    values: {
        fatal: 60,
        error: 50,
        warn: 40,
        info: 30,
        debug: 20,
        trace: 10
    },
    labels: {
        10: 'trace',
        20: 'debug',
        30: 'info',
        40: 'warn',
        50: 'error',
        60: 'fatal'
    }
};
pino.stdSerializers = stdSerializers;
pino.stdTimeFunctions = Object.assign({}, {
    nullTime,
    epochTime,
    unixTime,
    isoTime
});
function getBindingChain(logger) {
    const bindings = [];
    if (logger.bindings) {
        bindings.push(logger.bindings);
    }
    // traverse up the tree to get all bindings
    let hierarchy = logger[hierarchySymbol];
    while(hierarchy.parent){
        hierarchy = hierarchy.parent;
        if (hierarchy.logger.bindings) {
            bindings.push(hierarchy.logger.bindings);
        }
    }
    return bindings.reverse();
}
function set(self1, opts, rootLogger, level) {
    // override the current log functions with either `noop` or the base log function
    Object.defineProperty(self1, level, {
        value: levelToValue(self1.level, rootLogger) > levelToValue(level, rootLogger) ? noop : rootLogger[baseLogFunctionSymbol][level],
        writable: true,
        enumerable: true,
        configurable: true
    });
    if (self1[level] === noop) {
        if (!opts.transmit) return;
        const transmitLevel = opts.transmit.level || self1.level;
        const transmitValue = levelToValue(transmitLevel, rootLogger);
        const methodValue = levelToValue(level, rootLogger);
        if (methodValue < transmitValue) return;
    }
    // make sure the log format is correct
    self1[level] = createWrap(self1, opts, rootLogger, level);
    // prepend bindings if it is not the root logger
    const bindings = getBindingChain(self1);
    if (bindings.length === 0) {
        // early exit in case for rootLogger
        return;
    }
    self1[level] = prependBindingsInArguments(bindings, self1[level]);
}
function prependBindingsInArguments(bindings, logFunc) {
    return function() {
        return logFunc.apply(this, [
            ...bindings,
            ...arguments
        ]);
    };
}
function createWrap(self1, opts, rootLogger, level) {
    return function(write) {
        return function LOG() {
            const ts = opts.timestamp();
            const args = new Array(arguments.length);
            const proto = Object.getPrototypeOf && Object.getPrototypeOf(this) === _console ? _console : this;
            for(var i = 0; i < args.length; i++)args[i] = arguments[i];
            var argsIsSerialized = false;
            if (opts.serialize) {
                applySerializers(args, this._serialize, this.serializers, this._stdErrSerialize);
                argsIsSerialized = true;
            }
            if (opts.asObject || opts.formatters) {
                write.call(proto, ...asObject(this, level, args, ts, opts));
            } else write.apply(proto, args);
            if (opts.transmit) {
                const transmitLevel = opts.transmit.level || self1._level;
                const transmitValue = levelToValue(transmitLevel, rootLogger);
                const methodValue = levelToValue(level, rootLogger);
                if (methodValue < transmitValue) return;
                transmit(this, {
                    ts,
                    methodLevel: level,
                    methodValue,
                    transmitLevel,
                    transmitValue: rootLogger.levels.values[opts.transmit.level || self1._level],
                    send: opts.transmit.send,
                    val: levelToValue(self1._level, rootLogger)
                }, args, argsIsSerialized);
            }
        };
    }(self1[baseLogFunctionSymbol][level]);
}
function asObject(logger, level, args, ts, opts) {
    const { level: levelFormatter, log: logObjectFormatter = (obj)=>obj } = opts.formatters || {};
    const argsCloned = args.slice();
    let msg = argsCloned[0];
    const logObject = {};
    let lvl = (logger._childLevel | 0) + 1;
    if (lvl < 1) lvl = 1;
    if (ts) {
        logObject.time = ts;
    }
    if (levelFormatter) {
        const formattedLevel = levelFormatter(level, logger.levels.values[level]);
        Object.assign(logObject, formattedLevel);
    } else {
        logObject.level = logger.levels.values[level];
    }
    if (opts.asObjectBindingsOnly) {
        if (msg !== null && typeof msg === 'object') {
            while(lvl-- && typeof argsCloned[0] === 'object'){
                Object.assign(logObject, argsCloned.shift());
            }
        }
        const formattedLogObject = logObjectFormatter(logObject);
        return [
            formattedLogObject,
            ...argsCloned
        ];
    } else {
        // deliberate, catching objects, arrays
        if (msg !== null && typeof msg === 'object') {
            while(lvl-- && typeof argsCloned[0] === 'object'){
                Object.assign(logObject, argsCloned.shift());
            }
            msg = argsCloned.length ? format(argsCloned.shift(), argsCloned) : undefined;
        } else if (typeof msg === 'string') msg = format(argsCloned.shift(), argsCloned);
        if (msg !== undefined) logObject[opts.messageKey] = msg;
        const formattedLogObject = logObjectFormatter(logObject);
        return [
            formattedLogObject
        ];
    }
}
function applySerializers(args, serialize, serializers, stdErrSerialize) {
    for(const i in args){
        if (stdErrSerialize && args[i] instanceof Error) {
            args[i] = pino.stdSerializers.err(args[i]);
        } else if (typeof args[i] === 'object' && !Array.isArray(args[i]) && serialize) {
            for(const k in args[i]){
                if (serialize.indexOf(k) > -1 && k in serializers) {
                    args[i][k] = serializers[k](args[i][k]);
                }
            }
        }
    }
}
function transmit(logger, opts, args, argsIsSerialized = false) {
    const send = opts.send;
    const ts = opts.ts;
    const methodLevel = opts.methodLevel;
    const methodValue = opts.methodValue;
    const val = opts.val;
    const bindings = logger._logEvent.bindings;
    if (!argsIsSerialized) {
        applySerializers(args, logger._serialize || Object.keys(logger.serializers), logger.serializers, logger._stdErrSerialize === undefined ? true : logger._stdErrSerialize);
    }
    logger._logEvent.ts = ts;
    logger._logEvent.messages = args.filter(function(arg) {
        // bindings can only be objects, so reference equality check via indexOf is fine
        return bindings.indexOf(arg) === -1;
    });
    logger._logEvent.level.label = methodLevel;
    logger._logEvent.level.value = methodValue;
    send(methodLevel, logger._logEvent, val);
    logger._logEvent = createLogEventShape(bindings);
}
function createLogEventShape(bindings) {
    return {
        ts: 0,
        messages: [],
        bindings: bindings || [],
        level: {
            label: '',
            value: 0
        }
    };
}
function asErrValue(err) {
    const obj = {
        type: err.constructor.name,
        msg: err.message,
        stack: err.stack
    };
    for(const key in err){
        if (obj[key] === undefined) {
            obj[key] = err[key];
        }
    }
    return obj;
}
function getTimeFunction(opts) {
    if (typeof opts.timestamp === 'function') {
        return opts.timestamp;
    }
    if (opts.timestamp === false) {
        return nullTime;
    }
    return epochTime;
}
function mock() {
    return {};
}
function passthrough(a) {
    return a;
}
function noop() {}
function nullTime() {
    return false;
}
function epochTime() {
    return Date.now();
}
function unixTime() {
    return Math.round(Date.now() / 1000.0);
}
function isoTime() {
    return new Date(Date.now()).toISOString();
} // using Date.now() for testability
/* eslint-disable */ /* istanbul ignore next */ function pfGlobalThisOrFallback() {
    function defd(o) {
        return typeof o !== 'undefined' && o;
    }
    try {
        if (typeof globalThis !== 'undefined') return globalThis;
        Object.defineProperty(Object.prototype, 'globalThis', {
            get: function() {
                delete Object.prototype.globalThis;
                return this.globalThis = this;
            },
            configurable: true
        });
        return globalThis;
    } catch (e) {
        return defd(self) || defd(window) || defd(this) || {};
    }
}
/* eslint-enable */ module.exports.default = pino;
module.exports.pino = pino;
}),
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-adapter-wagmi/node_modules/pino/browser.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const format = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/quick-format-unescaped/index.js [app-client] (ecmascript)");
module.exports = pino;
const _console = pfGlobalThisOrFallback().console || {};
const stdSerializers = {
    mapHttpRequest: mock,
    mapHttpResponse: mock,
    wrapRequestSerializer: passthrough,
    wrapResponseSerializer: passthrough,
    wrapErrorSerializer: passthrough,
    req: mock,
    res: mock,
    err: asErrValue,
    errWithCause: asErrValue
};
function levelToValue(level, logger) {
    return level === 'silent' ? Infinity : logger.levels.values[level];
}
const baseLogFunctionSymbol = Symbol('pino.logFuncs');
const hierarchySymbol = Symbol('pino.hierarchy');
const logFallbackMap = {
    error: 'log',
    fatal: 'error',
    warn: 'error',
    info: 'log',
    debug: 'log',
    trace: 'log'
};
function appendChildLogger(parentLogger, childLogger) {
    const newEntry = {
        logger: childLogger,
        parent: parentLogger[hierarchySymbol]
    };
    childLogger[hierarchySymbol] = newEntry;
}
function setupBaseLogFunctions(logger, levels, proto) {
    const logFunctions = {};
    levels.forEach((level)=>{
        logFunctions[level] = proto[level] ? proto[level] : _console[level] || _console[logFallbackMap[level] || 'log'] || noop;
    });
    logger[baseLogFunctionSymbol] = logFunctions;
}
function shouldSerialize(serialize, serializers) {
    if (Array.isArray(serialize)) {
        const hasToFilter = serialize.filter(function(k) {
            return k !== '!stdSerializers.err';
        });
        return hasToFilter;
    } else if (serialize === true) {
        return Object.keys(serializers);
    }
    return false;
}
function pino(opts) {
    opts = opts || {};
    opts.browser = opts.browser || {};
    const transmit = opts.browser.transmit;
    if (transmit && typeof transmit.send !== 'function') {
        throw Error('pino: transmit option must have a send function');
    }
    const proto = opts.browser.write || _console;
    if (opts.browser.write) opts.browser.asObject = true;
    const serializers = opts.serializers || {};
    const serialize = shouldSerialize(opts.browser.serialize, serializers);
    let stdErrSerialize = opts.browser.serialize;
    if (Array.isArray(opts.browser.serialize) && opts.browser.serialize.indexOf('!stdSerializers.err') > -1) stdErrSerialize = false;
    const customLevels = Object.keys(opts.customLevels || {});
    const levels = [
        'error',
        'fatal',
        'warn',
        'info',
        'debug',
        'trace'
    ].concat(customLevels);
    if (typeof proto === 'function') {
        levels.forEach(function(level) {
            proto[level] = proto;
        });
    }
    if (opts.enabled === false || opts.browser.disabled) opts.level = 'silent';
    const level = opts.level || 'info';
    const logger = Object.create(proto);
    if (!logger.log) logger.log = noop;
    setupBaseLogFunctions(logger, levels, proto);
    // setup root hierarchy entry
    appendChildLogger({}, logger);
    Object.defineProperty(logger, 'levelVal', {
        get: getLevelVal
    });
    Object.defineProperty(logger, 'level', {
        get: getLevel,
        set: setLevel
    });
    const setOpts = {
        transmit,
        serialize,
        asObject: opts.browser.asObject,
        asObjectBindingsOnly: opts.browser.asObjectBindingsOnly,
        formatters: opts.browser.formatters,
        levels,
        timestamp: getTimeFunction(opts),
        messageKey: opts.messageKey || 'msg',
        onChild: opts.onChild || noop
    };
    logger.levels = getLevels(opts);
    logger.level = level;
    logger.isLevelEnabled = function(level) {
        if (!this.levels.values[level]) {
            return false;
        }
        return this.levels.values[level] >= this.levels.values[this.level];
    };
    logger.setMaxListeners = logger.getMaxListeners = logger.emit = logger.addListener = logger.on = logger.prependListener = logger.once = logger.prependOnceListener = logger.removeListener = logger.removeAllListeners = logger.listeners = logger.listenerCount = logger.eventNames = logger.write = logger.flush = noop;
    logger.serializers = serializers;
    logger._serialize = serialize;
    logger._stdErrSerialize = stdErrSerialize;
    logger.child = function(...args) {
        return child.call(this, setOpts, ...args);
    };
    if (transmit) logger._logEvent = createLogEventShape();
    function getLevelVal() {
        return levelToValue(this.level, this);
    }
    function getLevel() {
        return this._level;
    }
    function setLevel(level) {
        if (level !== 'silent' && !this.levels.values[level]) {
            throw Error('unknown level ' + level);
        }
        this._level = level;
        set(this, setOpts, logger, 'error'); // <-- must stay first
        set(this, setOpts, logger, 'fatal');
        set(this, setOpts, logger, 'warn');
        set(this, setOpts, logger, 'info');
        set(this, setOpts, logger, 'debug');
        set(this, setOpts, logger, 'trace');
        customLevels.forEach((level)=>{
            set(this, setOpts, logger, level);
        });
    }
    function child(setOpts, bindings, childOptions) {
        if (!bindings) {
            throw new Error('missing bindings for child Pino');
        }
        childOptions = childOptions || {};
        if (serialize && bindings.serializers) {
            childOptions.serializers = bindings.serializers;
        }
        const childOptionsSerializers = childOptions.serializers;
        if (serialize && childOptionsSerializers) {
            var childSerializers = Object.assign({}, serializers, childOptionsSerializers);
            var childSerialize = opts.browser.serialize === true ? Object.keys(childSerializers) : serialize;
            delete bindings.serializers;
            applySerializers([
                bindings
            ], childSerialize, childSerializers, this._stdErrSerialize);
        }
        function Child(parent) {
            this._childLevel = (parent._childLevel | 0) + 1;
            // make sure bindings are available in the `set` function
            this.bindings = bindings;
            if (childSerializers) {
                this.serializers = childSerializers;
                this._serialize = childSerialize;
            }
            if (transmit) {
                this._logEvent = createLogEventShape([].concat(parent._logEvent.bindings, bindings));
            }
        }
        Child.prototype = this;
        const newLogger = new Child(this);
        // must happen before the level is assigned
        appendChildLogger(this, newLogger);
        newLogger.child = function(...args) {
            return child.call(this, setOpts, ...args);
        };
        // required to actually initialize the logger functions for any given child
        newLogger.level = childOptions.level || this.level; // allow level to be set by childOptions
        setOpts.onChild(newLogger);
        return newLogger;
    }
    return logger;
}
function getLevels(opts) {
    const customLevels = opts.customLevels || {};
    const values = Object.assign({}, pino.levels.values, customLevels);
    const labels = Object.assign({}, pino.levels.labels, invertObject(customLevels));
    return {
        values,
        labels
    };
}
function invertObject(obj) {
    const inverted = {};
    Object.keys(obj).forEach(function(key) {
        inverted[obj[key]] = key;
    });
    return inverted;
}
pino.levels = {
    values: {
        fatal: 60,
        error: 50,
        warn: 40,
        info: 30,
        debug: 20,
        trace: 10
    },
    labels: {
        10: 'trace',
        20: 'debug',
        30: 'info',
        40: 'warn',
        50: 'error',
        60: 'fatal'
    }
};
pino.stdSerializers = stdSerializers;
pino.stdTimeFunctions = Object.assign({}, {
    nullTime,
    epochTime,
    unixTime,
    isoTime
});
function getBindingChain(logger) {
    const bindings = [];
    if (logger.bindings) {
        bindings.push(logger.bindings);
    }
    // traverse up the tree to get all bindings
    let hierarchy = logger[hierarchySymbol];
    while(hierarchy.parent){
        hierarchy = hierarchy.parent;
        if (hierarchy.logger.bindings) {
            bindings.push(hierarchy.logger.bindings);
        }
    }
    return bindings.reverse();
}
function set(self1, opts, rootLogger, level) {
    // override the current log functions with either `noop` or the base log function
    Object.defineProperty(self1, level, {
        value: levelToValue(self1.level, rootLogger) > levelToValue(level, rootLogger) ? noop : rootLogger[baseLogFunctionSymbol][level],
        writable: true,
        enumerable: true,
        configurable: true
    });
    if (self1[level] === noop) {
        if (!opts.transmit) return;
        const transmitLevel = opts.transmit.level || self1.level;
        const transmitValue = levelToValue(transmitLevel, rootLogger);
        const methodValue = levelToValue(level, rootLogger);
        if (methodValue < transmitValue) return;
    }
    // make sure the log format is correct
    self1[level] = createWrap(self1, opts, rootLogger, level);
    // prepend bindings if it is not the root logger
    const bindings = getBindingChain(self1);
    if (bindings.length === 0) {
        // early exit in case for rootLogger
        return;
    }
    self1[level] = prependBindingsInArguments(bindings, self1[level]);
}
function prependBindingsInArguments(bindings, logFunc) {
    return function() {
        return logFunc.apply(this, [
            ...bindings,
            ...arguments
        ]);
    };
}
function createWrap(self1, opts, rootLogger, level) {
    return function(write) {
        return function LOG() {
            const ts = opts.timestamp();
            const args = new Array(arguments.length);
            const proto = Object.getPrototypeOf && Object.getPrototypeOf(this) === _console ? _console : this;
            for(var i = 0; i < args.length; i++)args[i] = arguments[i];
            var argsIsSerialized = false;
            if (opts.serialize) {
                applySerializers(args, this._serialize, this.serializers, this._stdErrSerialize);
                argsIsSerialized = true;
            }
            if (opts.asObject || opts.formatters) {
                write.call(proto, ...asObject(this, level, args, ts, opts));
            } else write.apply(proto, args);
            if (opts.transmit) {
                const transmitLevel = opts.transmit.level || self1._level;
                const transmitValue = levelToValue(transmitLevel, rootLogger);
                const methodValue = levelToValue(level, rootLogger);
                if (methodValue < transmitValue) return;
                transmit(this, {
                    ts,
                    methodLevel: level,
                    methodValue,
                    transmitLevel,
                    transmitValue: rootLogger.levels.values[opts.transmit.level || self1._level],
                    send: opts.transmit.send,
                    val: levelToValue(self1._level, rootLogger)
                }, args, argsIsSerialized);
            }
        };
    }(self1[baseLogFunctionSymbol][level]);
}
function asObject(logger, level, args, ts, opts) {
    const { level: levelFormatter, log: logObjectFormatter = (obj)=>obj } = opts.formatters || {};
    const argsCloned = args.slice();
    let msg = argsCloned[0];
    const logObject = {};
    let lvl = (logger._childLevel | 0) + 1;
    if (lvl < 1) lvl = 1;
    if (ts) {
        logObject.time = ts;
    }
    if (levelFormatter) {
        const formattedLevel = levelFormatter(level, logger.levels.values[level]);
        Object.assign(logObject, formattedLevel);
    } else {
        logObject.level = logger.levels.values[level];
    }
    if (opts.asObjectBindingsOnly) {
        if (msg !== null && typeof msg === 'object') {
            while(lvl-- && typeof argsCloned[0] === 'object'){
                Object.assign(logObject, argsCloned.shift());
            }
        }
        const formattedLogObject = logObjectFormatter(logObject);
        return [
            formattedLogObject,
            ...argsCloned
        ];
    } else {
        // deliberate, catching objects, arrays
        if (msg !== null && typeof msg === 'object') {
            while(lvl-- && typeof argsCloned[0] === 'object'){
                Object.assign(logObject, argsCloned.shift());
            }
            msg = argsCloned.length ? format(argsCloned.shift(), argsCloned) : undefined;
        } else if (typeof msg === 'string') msg = format(argsCloned.shift(), argsCloned);
        if (msg !== undefined) logObject[opts.messageKey] = msg;
        const formattedLogObject = logObjectFormatter(logObject);
        return [
            formattedLogObject
        ];
    }
}
function applySerializers(args, serialize, serializers, stdErrSerialize) {
    for(const i in args){
        if (stdErrSerialize && args[i] instanceof Error) {
            args[i] = pino.stdSerializers.err(args[i]);
        } else if (typeof args[i] === 'object' && !Array.isArray(args[i]) && serialize) {
            for(const k in args[i]){
                if (serialize.indexOf(k) > -1 && k in serializers) {
                    args[i][k] = serializers[k](args[i][k]);
                }
            }
        }
    }
}
function transmit(logger, opts, args, argsIsSerialized = false) {
    const send = opts.send;
    const ts = opts.ts;
    const methodLevel = opts.methodLevel;
    const methodValue = opts.methodValue;
    const val = opts.val;
    const bindings = logger._logEvent.bindings;
    if (!argsIsSerialized) {
        applySerializers(args, logger._serialize || Object.keys(logger.serializers), logger.serializers, logger._stdErrSerialize === undefined ? true : logger._stdErrSerialize);
    }
    logger._logEvent.ts = ts;
    logger._logEvent.messages = args.filter(function(arg) {
        // bindings can only be objects, so reference equality check via indexOf is fine
        return bindings.indexOf(arg) === -1;
    });
    logger._logEvent.level.label = methodLevel;
    logger._logEvent.level.value = methodValue;
    send(methodLevel, logger._logEvent, val);
    logger._logEvent = createLogEventShape(bindings);
}
function createLogEventShape(bindings) {
    return {
        ts: 0,
        messages: [],
        bindings: bindings || [],
        level: {
            label: '',
            value: 0
        }
    };
}
function asErrValue(err) {
    const obj = {
        type: err.constructor.name,
        msg: err.message,
        stack: err.stack
    };
    for(const key in err){
        if (obj[key] === undefined) {
            obj[key] = err[key];
        }
    }
    return obj;
}
function getTimeFunction(opts) {
    if (typeof opts.timestamp === 'function') {
        return opts.timestamp;
    }
    if (opts.timestamp === false) {
        return nullTime;
    }
    return epochTime;
}
function mock() {
    return {};
}
function passthrough(a) {
    return a;
}
function noop() {}
function nullTime() {
    return false;
}
function epochTime() {
    return Date.now();
}
function unixTime() {
    return Math.round(Date.now() / 1000.0);
}
function isoTime() {
    return new Date(Date.now()).toISOString();
} // using Date.now() for testability
/* eslint-disable */ /* istanbul ignore next */ function pfGlobalThisOrFallback() {
    function defd(o) {
        return typeof o !== 'undefined' && o;
    }
    try {
        if (typeof globalThis !== 'undefined') return globalThis;
        Object.defineProperty(Object.prototype, 'globalThis', {
            get: function() {
                delete Object.prototype.globalThis;
                return this.globalThis = this;
            },
            configurable: true
        });
        return globalThis;
    } catch (e) {
        return defd(self) || defd(window) || defd(this) || {};
    }
}
/* eslint-enable */ module.exports.default = pino;
module.exports.pino = pino;
}),
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-controllers/node_modules/@walletconnect/logger/dist/index.es.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MAX_LOG_SIZE_IN_BYTES_DEFAULT",
    ()=>i,
    "PINO_CUSTOM_CONTEXT_KEY",
    ()=>l,
    "PINO_LOGGER_DEFAULTS",
    ()=>b,
    "formatChildLoggerContext",
    ()=>m,
    "generateChildLogger",
    ()=>X,
    "generateClientLogger",
    ()=>I,
    "generatePlatformLogger",
    ()=>Y,
    "generateServerLogger",
    ()=>O,
    "getDefaultLoggerOptions",
    ()=>D,
    "getLoggerContext",
    ()=>w,
    "setLoggerContext",
    ()=>y
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$node_modules$2f$pino$2f$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-controllers/node_modules/pino/browser.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$walletconnect$2f$safe$2d$json$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/@walletconnect/safe-json/dist/esm/index.js [app-client] (ecmascript)");
;
;
;
const b = {
    level: "info"
}, l = "custom_context", i = 1e3 * 1024;
var C = Object.defineProperty, B = (r, e, t)=>e in r ? C(r, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: t
    }) : r[e] = t, s = (r, e, t)=>B(r, typeof e != "symbol" ? e + "" : e, t);
class S {
    constructor(e){
        s(this, "nodeValue"), s(this, "sizeInBytes"), s(this, "next"), this.nodeValue = e, this.sizeInBytes = new TextEncoder().encode(this.nodeValue).length, this.next = null;
    }
    get value() {
        return this.nodeValue;
    }
    get size() {
        return this.sizeInBytes;
    }
}
class v {
    constructor(e){
        s(this, "lengthInNodes"), s(this, "sizeInBytes"), s(this, "head"), s(this, "tail"), s(this, "maxSizeInBytes"), this.head = null, this.tail = null, this.lengthInNodes = 0, this.maxSizeInBytes = e, this.sizeInBytes = 0;
    }
    append(e) {
        const t = new S(e);
        if (t.size > this.maxSizeInBytes) throw new Error(`[LinkedList] Value too big to insert into list: ${e} with size ${t.size}`);
        for(; this.size + t.size > this.maxSizeInBytes;)this.shift();
        this.head ? (this.tail && (this.tail.next = t), this.tail = t) : (this.head = t, this.tail = t), this.lengthInNodes++, this.sizeInBytes += t.size;
    }
    shift() {
        if (!this.head) return;
        const e = this.head;
        this.head = this.head.next, this.head || (this.tail = null), this.lengthInNodes--, this.sizeInBytes -= e.size;
    }
    toArray() {
        const e = [];
        let t = this.head;
        for(; t !== null;)e.push(t.value), t = t.next;
        return e;
    }
    get length() {
        return this.lengthInNodes;
    }
    get size() {
        return this.sizeInBytes;
    }
    toOrderedArray() {
        return Array.from(this);
    }
    [Symbol.iterator]() {
        let e = this.head;
        return {
            next: ()=>{
                if (!e) return {
                    done: !0,
                    value: null
                };
                const t = e.value;
                return e = e.next, {
                    done: !1,
                    value: t
                };
            }
        };
    }
}
var _ = Object.defineProperty, x = (r, e, t)=>e in r ? _(r, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: t
    }) : r[e] = t, a = (r, e, t)=>x(r, typeof e != "symbol" ? e + "" : e, t);
class L {
    constructor(e, t = i){
        a(this, "logs"), a(this, "level"), a(this, "levelValue"), a(this, "MAX_LOG_SIZE_IN_BYTES"), this.level = e ?? "error", this.levelValue = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$node_modules$2f$pino$2f$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["levels"].values[this.level], this.MAX_LOG_SIZE_IN_BYTES = t, this.logs = new v(this.MAX_LOG_SIZE_IN_BYTES);
    }
    forwardToConsole(e, t) {
        t === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$node_modules$2f$pino$2f$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["levels"].values.error ? console.error(e) : t === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$node_modules$2f$pino$2f$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["levels"].values.warn ? console.warn(e) : t === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$node_modules$2f$pino$2f$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["levels"].values.debug ? console.debug(e) : t === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$node_modules$2f$pino$2f$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["levels"].values.trace ? console.trace(e) : console.log(e);
    }
    appendToLogs(e) {
        this.logs.append((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$walletconnect$2f$safe$2d$json$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeJsonStringify"])({
            timestamp: new Date().toISOString(),
            log: e
        }));
        const t = typeof e == "string" ? JSON.parse(e).level : e.level;
        t >= this.levelValue && this.forwardToConsole(e, t);
    }
    getLogs() {
        return this.logs;
    }
    clearLogs() {
        this.logs = new v(this.MAX_LOG_SIZE_IN_BYTES);
    }
    getLogArray() {
        return Array.from(this.logs);
    }
    logsToBlob(e) {
        const t = this.getLogArray();
        return t.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$walletconnect$2f$safe$2d$json$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeJsonStringify"])({
            extraMetadata: e
        })), new Blob(t, {
            type: "application/json"
        });
    }
}
var z = Object.defineProperty, T = (r, e, t)=>e in r ? z(r, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: t
    }) : r[e] = t, k = (r, e, t)=>T(r, typeof e != "symbol" ? e + "" : e, t);
class E {
    constructor(e, t = i){
        k(this, "baseChunkLogger"), this.baseChunkLogger = new L(e, t);
    }
    write(e) {
        this.baseChunkLogger.appendToLogs(e);
    }
    getLogs() {
        return this.baseChunkLogger.getLogs();
    }
    clearLogs() {
        this.baseChunkLogger.clearLogs();
    }
    getLogArray() {
        return this.baseChunkLogger.getLogArray();
    }
    logsToBlob(e) {
        return this.baseChunkLogger.logsToBlob(e);
    }
    downloadLogsBlobInBrowser(e) {
        const t = URL.createObjectURL(this.logsToBlob(e)), o = document.createElement("a");
        o.href = t, o.download = `walletconnect-logs-${new Date().toISOString()}.txt`, document.body.appendChild(o), o.click(), document.body.removeChild(o), URL.revokeObjectURL(t);
    }
}
var A = Object.defineProperty, $ = (r, e, t)=>e in r ? A(r, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: t
    }) : r[e] = t, N = (r, e, t)=>$(r, typeof e != "symbol" ? e + "" : e, t);
class j {
    constructor(e, t = i){
        N(this, "baseChunkLogger"), this.baseChunkLogger = new L(e, t);
    }
    write(e) {
        this.baseChunkLogger.appendToLogs(e);
    }
    getLogs() {
        return this.baseChunkLogger.getLogs();
    }
    clearLogs() {
        this.baseChunkLogger.clearLogs();
    }
    getLogArray() {
        return this.baseChunkLogger.getLogArray();
    }
    logsToBlob(e) {
        return this.baseChunkLogger.logsToBlob(e);
    }
}
var P = Object.defineProperty, V = Object.defineProperties, G = Object.getOwnPropertyDescriptors, p = Object.getOwnPropertySymbols, M = Object.prototype.hasOwnProperty, U = Object.prototype.propertyIsEnumerable, f = (r, e, t)=>e in r ? P(r, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: t
    }) : r[e] = t, g = (r, e)=>{
    for(var t in e || (e = {}))M.call(e, t) && f(r, t, e[t]);
    if (p) for (var t of p(e))U.call(e, t) && f(r, t, e[t]);
    return r;
}, h = (r, e)=>V(r, G(e));
function D(r) {
    return h(g({}, r), {
        level: r?.level || b.level
    });
}
function y(r, e, t = l) {
    return r[t] = e, r;
}
function w(r, e = l) {
    return r[e] || "";
}
function m(r, e, t = l) {
    const o = w(r, t);
    return o.trim() ? `${o}/${e}` : e;
}
function X(r, e, t = l) {
    const o = m(r, e, t), u = r.child({
        context: o
    });
    return y(u, o, t);
}
function I(r) {
    var e, t;
    const o = new E((e = r.opts) == null ? void 0 : e.level, r.maxSizeInBytes);
    return {
        logger: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$node_modules$2f$pino$2f$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(h(g({}, r.opts), {
            level: "trace",
            browser: h(g({}, (t = r.opts) == null ? void 0 : t.browser), {
                write: (u)=>o.write(u)
            })
        })),
        chunkLoggerController: o
    };
}
function O(r) {
    var e;
    const t = new j((e = r.opts) == null ? void 0 : e.level, r.maxSizeInBytes);
    return {
        logger: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$node_modules$2f$pino$2f$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(h(g({}, r.opts), {
            level: "trace"
        }), t),
        chunkLoggerController: t
    };
}
function Y(r) {
    return typeof r.loggerOverride < "u" && typeof r.loggerOverride != "string" ? {
        logger: r.loggerOverride,
        chunkLoggerController: null
    } : typeof window < "u" ? I(r) : O(r);
}
;
 //# sourceMappingURL=index.es.js.map
}),
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-wallet/node_modules/@walletconnect/logger/dist/index.es.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MAX_LOG_SIZE_IN_BYTES_DEFAULT",
    ()=>i,
    "PINO_CUSTOM_CONTEXT_KEY",
    ()=>l,
    "PINO_LOGGER_DEFAULTS",
    ()=>b,
    "formatChildLoggerContext",
    ()=>m,
    "generateChildLogger",
    ()=>X,
    "generateClientLogger",
    ()=>I,
    "generatePlatformLogger",
    ()=>Y,
    "generateServerLogger",
    ()=>O,
    "getDefaultLoggerOptions",
    ()=>D,
    "getLoggerContext",
    ()=>w,
    "setLoggerContext",
    ()=>y
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$wallet$2f$node_modules$2f$pino$2f$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-wallet/node_modules/pino/browser.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$walletconnect$2f$safe$2d$json$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/@walletconnect/safe-json/dist/esm/index.js [app-client] (ecmascript)");
;
;
;
const b = {
    level: "info"
}, l = "custom_context", i = 1e3 * 1024;
var C = Object.defineProperty, B = (r, e, t)=>e in r ? C(r, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: t
    }) : r[e] = t, s = (r, e, t)=>B(r, typeof e != "symbol" ? e + "" : e, t);
class S {
    constructor(e){
        s(this, "nodeValue"), s(this, "sizeInBytes"), s(this, "next"), this.nodeValue = e, this.sizeInBytes = new TextEncoder().encode(this.nodeValue).length, this.next = null;
    }
    get value() {
        return this.nodeValue;
    }
    get size() {
        return this.sizeInBytes;
    }
}
class v {
    constructor(e){
        s(this, "lengthInNodes"), s(this, "sizeInBytes"), s(this, "head"), s(this, "tail"), s(this, "maxSizeInBytes"), this.head = null, this.tail = null, this.lengthInNodes = 0, this.maxSizeInBytes = e, this.sizeInBytes = 0;
    }
    append(e) {
        const t = new S(e);
        if (t.size > this.maxSizeInBytes) throw new Error(`[LinkedList] Value too big to insert into list: ${e} with size ${t.size}`);
        for(; this.size + t.size > this.maxSizeInBytes;)this.shift();
        this.head ? (this.tail && (this.tail.next = t), this.tail = t) : (this.head = t, this.tail = t), this.lengthInNodes++, this.sizeInBytes += t.size;
    }
    shift() {
        if (!this.head) return;
        const e = this.head;
        this.head = this.head.next, this.head || (this.tail = null), this.lengthInNodes--, this.sizeInBytes -= e.size;
    }
    toArray() {
        const e = [];
        let t = this.head;
        for(; t !== null;)e.push(t.value), t = t.next;
        return e;
    }
    get length() {
        return this.lengthInNodes;
    }
    get size() {
        return this.sizeInBytes;
    }
    toOrderedArray() {
        return Array.from(this);
    }
    [Symbol.iterator]() {
        let e = this.head;
        return {
            next: ()=>{
                if (!e) return {
                    done: !0,
                    value: null
                };
                const t = e.value;
                return e = e.next, {
                    done: !1,
                    value: t
                };
            }
        };
    }
}
var _ = Object.defineProperty, x = (r, e, t)=>e in r ? _(r, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: t
    }) : r[e] = t, a = (r, e, t)=>x(r, typeof e != "symbol" ? e + "" : e, t);
class L {
    constructor(e, t = i){
        a(this, "logs"), a(this, "level"), a(this, "levelValue"), a(this, "MAX_LOG_SIZE_IN_BYTES"), this.level = e ?? "error", this.levelValue = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$wallet$2f$node_modules$2f$pino$2f$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["levels"].values[this.level], this.MAX_LOG_SIZE_IN_BYTES = t, this.logs = new v(this.MAX_LOG_SIZE_IN_BYTES);
    }
    forwardToConsole(e, t) {
        t === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$wallet$2f$node_modules$2f$pino$2f$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["levels"].values.error ? console.error(e) : t === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$wallet$2f$node_modules$2f$pino$2f$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["levels"].values.warn ? console.warn(e) : t === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$wallet$2f$node_modules$2f$pino$2f$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["levels"].values.debug ? console.debug(e) : t === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$wallet$2f$node_modules$2f$pino$2f$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["levels"].values.trace ? console.trace(e) : console.log(e);
    }
    appendToLogs(e) {
        this.logs.append((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$walletconnect$2f$safe$2d$json$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeJsonStringify"])({
            timestamp: new Date().toISOString(),
            log: e
        }));
        const t = typeof e == "string" ? JSON.parse(e).level : e.level;
        t >= this.levelValue && this.forwardToConsole(e, t);
    }
    getLogs() {
        return this.logs;
    }
    clearLogs() {
        this.logs = new v(this.MAX_LOG_SIZE_IN_BYTES);
    }
    getLogArray() {
        return Array.from(this.logs);
    }
    logsToBlob(e) {
        const t = this.getLogArray();
        return t.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$walletconnect$2f$safe$2d$json$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeJsonStringify"])({
            extraMetadata: e
        })), new Blob(t, {
            type: "application/json"
        });
    }
}
var z = Object.defineProperty, T = (r, e, t)=>e in r ? z(r, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: t
    }) : r[e] = t, k = (r, e, t)=>T(r, typeof e != "symbol" ? e + "" : e, t);
class E {
    constructor(e, t = i){
        k(this, "baseChunkLogger"), this.baseChunkLogger = new L(e, t);
    }
    write(e) {
        this.baseChunkLogger.appendToLogs(e);
    }
    getLogs() {
        return this.baseChunkLogger.getLogs();
    }
    clearLogs() {
        this.baseChunkLogger.clearLogs();
    }
    getLogArray() {
        return this.baseChunkLogger.getLogArray();
    }
    logsToBlob(e) {
        return this.baseChunkLogger.logsToBlob(e);
    }
    downloadLogsBlobInBrowser(e) {
        const t = URL.createObjectURL(this.logsToBlob(e)), o = document.createElement("a");
        o.href = t, o.download = `walletconnect-logs-${new Date().toISOString()}.txt`, document.body.appendChild(o), o.click(), document.body.removeChild(o), URL.revokeObjectURL(t);
    }
}
var A = Object.defineProperty, $ = (r, e, t)=>e in r ? A(r, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: t
    }) : r[e] = t, N = (r, e, t)=>$(r, typeof e != "symbol" ? e + "" : e, t);
class j {
    constructor(e, t = i){
        N(this, "baseChunkLogger"), this.baseChunkLogger = new L(e, t);
    }
    write(e) {
        this.baseChunkLogger.appendToLogs(e);
    }
    getLogs() {
        return this.baseChunkLogger.getLogs();
    }
    clearLogs() {
        this.baseChunkLogger.clearLogs();
    }
    getLogArray() {
        return this.baseChunkLogger.getLogArray();
    }
    logsToBlob(e) {
        return this.baseChunkLogger.logsToBlob(e);
    }
}
var P = Object.defineProperty, V = Object.defineProperties, G = Object.getOwnPropertyDescriptors, p = Object.getOwnPropertySymbols, M = Object.prototype.hasOwnProperty, U = Object.prototype.propertyIsEnumerable, f = (r, e, t)=>e in r ? P(r, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: t
    }) : r[e] = t, g = (r, e)=>{
    for(var t in e || (e = {}))M.call(e, t) && f(r, t, e[t]);
    if (p) for (var t of p(e))U.call(e, t) && f(r, t, e[t]);
    return r;
}, h = (r, e)=>V(r, G(e));
function D(r) {
    return h(g({}, r), {
        level: r?.level || b.level
    });
}
function y(r, e, t = l) {
    return r[t] = e, r;
}
function w(r, e = l) {
    return r[e] || "";
}
function m(r, e, t = l) {
    const o = w(r, t);
    return o.trim() ? `${o}/${e}` : e;
}
function X(r, e, t = l) {
    const o = m(r, e, t), u = r.child({
        context: o
    });
    return y(u, o, t);
}
function I(r) {
    var e, t;
    const o = new E((e = r.opts) == null ? void 0 : e.level, r.maxSizeInBytes);
    return {
        logger: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$wallet$2f$node_modules$2f$pino$2f$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(h(g({}, r.opts), {
            level: "trace",
            browser: h(g({}, (t = r.opts) == null ? void 0 : t.browser), {
                write: (u)=>o.write(u)
            })
        })),
        chunkLoggerController: o
    };
}
function O(r) {
    var e;
    const t = new j((e = r.opts) == null ? void 0 : e.level, r.maxSizeInBytes);
    return {
        logger: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$wallet$2f$node_modules$2f$pino$2f$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(h(g({}, r.opts), {
            level: "trace"
        }), t),
        chunkLoggerController: t
    };
}
function Y(r) {
    return typeof r.loggerOverride < "u" && typeof r.loggerOverride != "string" ? {
        logger: r.loggerOverride,
        chunkLoggerController: null
    } : typeof window < "u" ? I(r) : O(r);
}
;
 //# sourceMappingURL=index.es.js.map
}),
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit/node_modules/@walletconnect/logger/dist/index.es.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MAX_LOG_SIZE_IN_BYTES_DEFAULT",
    ()=>i,
    "PINO_CUSTOM_CONTEXT_KEY",
    ()=>l,
    "PINO_LOGGER_DEFAULTS",
    ()=>b,
    "formatChildLoggerContext",
    ()=>m,
    "generateChildLogger",
    ()=>X,
    "generateClientLogger",
    ()=>I,
    "generatePlatformLogger",
    ()=>Y,
    "generateServerLogger",
    ()=>O,
    "getDefaultLoggerOptions",
    ()=>D,
    "getLoggerContext",
    ()=>w,
    "setLoggerContext",
    ()=>y
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2f$node_modules$2f$pino$2f$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit/node_modules/pino/browser.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$walletconnect$2f$safe$2d$json$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/@walletconnect/safe-json/dist/esm/index.js [app-client] (ecmascript)");
;
;
;
const b = {
    level: "info"
}, l = "custom_context", i = 1e3 * 1024;
var C = Object.defineProperty, B = (r, e, t)=>e in r ? C(r, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: t
    }) : r[e] = t, s = (r, e, t)=>B(r, typeof e != "symbol" ? e + "" : e, t);
class S {
    constructor(e){
        s(this, "nodeValue"), s(this, "sizeInBytes"), s(this, "next"), this.nodeValue = e, this.sizeInBytes = new TextEncoder().encode(this.nodeValue).length, this.next = null;
    }
    get value() {
        return this.nodeValue;
    }
    get size() {
        return this.sizeInBytes;
    }
}
class v {
    constructor(e){
        s(this, "lengthInNodes"), s(this, "sizeInBytes"), s(this, "head"), s(this, "tail"), s(this, "maxSizeInBytes"), this.head = null, this.tail = null, this.lengthInNodes = 0, this.maxSizeInBytes = e, this.sizeInBytes = 0;
    }
    append(e) {
        const t = new S(e);
        if (t.size > this.maxSizeInBytes) throw new Error(`[LinkedList] Value too big to insert into list: ${e} with size ${t.size}`);
        for(; this.size + t.size > this.maxSizeInBytes;)this.shift();
        this.head ? (this.tail && (this.tail.next = t), this.tail = t) : (this.head = t, this.tail = t), this.lengthInNodes++, this.sizeInBytes += t.size;
    }
    shift() {
        if (!this.head) return;
        const e = this.head;
        this.head = this.head.next, this.head || (this.tail = null), this.lengthInNodes--, this.sizeInBytes -= e.size;
    }
    toArray() {
        const e = [];
        let t = this.head;
        for(; t !== null;)e.push(t.value), t = t.next;
        return e;
    }
    get length() {
        return this.lengthInNodes;
    }
    get size() {
        return this.sizeInBytes;
    }
    toOrderedArray() {
        return Array.from(this);
    }
    [Symbol.iterator]() {
        let e = this.head;
        return {
            next: ()=>{
                if (!e) return {
                    done: !0,
                    value: null
                };
                const t = e.value;
                return e = e.next, {
                    done: !1,
                    value: t
                };
            }
        };
    }
}
var _ = Object.defineProperty, x = (r, e, t)=>e in r ? _(r, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: t
    }) : r[e] = t, a = (r, e, t)=>x(r, typeof e != "symbol" ? e + "" : e, t);
class L {
    constructor(e, t = i){
        a(this, "logs"), a(this, "level"), a(this, "levelValue"), a(this, "MAX_LOG_SIZE_IN_BYTES"), this.level = e ?? "error", this.levelValue = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2f$node_modules$2f$pino$2f$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["levels"].values[this.level], this.MAX_LOG_SIZE_IN_BYTES = t, this.logs = new v(this.MAX_LOG_SIZE_IN_BYTES);
    }
    forwardToConsole(e, t) {
        t === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2f$node_modules$2f$pino$2f$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["levels"].values.error ? console.error(e) : t === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2f$node_modules$2f$pino$2f$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["levels"].values.warn ? console.warn(e) : t === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2f$node_modules$2f$pino$2f$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["levels"].values.debug ? console.debug(e) : t === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2f$node_modules$2f$pino$2f$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["levels"].values.trace ? console.trace(e) : console.log(e);
    }
    appendToLogs(e) {
        this.logs.append((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$walletconnect$2f$safe$2d$json$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeJsonStringify"])({
            timestamp: new Date().toISOString(),
            log: e
        }));
        const t = typeof e == "string" ? JSON.parse(e).level : e.level;
        t >= this.levelValue && this.forwardToConsole(e, t);
    }
    getLogs() {
        return this.logs;
    }
    clearLogs() {
        this.logs = new v(this.MAX_LOG_SIZE_IN_BYTES);
    }
    getLogArray() {
        return Array.from(this.logs);
    }
    logsToBlob(e) {
        const t = this.getLogArray();
        return t.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$walletconnect$2f$safe$2d$json$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeJsonStringify"])({
            extraMetadata: e
        })), new Blob(t, {
            type: "application/json"
        });
    }
}
var z = Object.defineProperty, T = (r, e, t)=>e in r ? z(r, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: t
    }) : r[e] = t, k = (r, e, t)=>T(r, typeof e != "symbol" ? e + "" : e, t);
class E {
    constructor(e, t = i){
        k(this, "baseChunkLogger"), this.baseChunkLogger = new L(e, t);
    }
    write(e) {
        this.baseChunkLogger.appendToLogs(e);
    }
    getLogs() {
        return this.baseChunkLogger.getLogs();
    }
    clearLogs() {
        this.baseChunkLogger.clearLogs();
    }
    getLogArray() {
        return this.baseChunkLogger.getLogArray();
    }
    logsToBlob(e) {
        return this.baseChunkLogger.logsToBlob(e);
    }
    downloadLogsBlobInBrowser(e) {
        const t = URL.createObjectURL(this.logsToBlob(e)), o = document.createElement("a");
        o.href = t, o.download = `walletconnect-logs-${new Date().toISOString()}.txt`, document.body.appendChild(o), o.click(), document.body.removeChild(o), URL.revokeObjectURL(t);
    }
}
var A = Object.defineProperty, $ = (r, e, t)=>e in r ? A(r, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: t
    }) : r[e] = t, N = (r, e, t)=>$(r, typeof e != "symbol" ? e + "" : e, t);
class j {
    constructor(e, t = i){
        N(this, "baseChunkLogger"), this.baseChunkLogger = new L(e, t);
    }
    write(e) {
        this.baseChunkLogger.appendToLogs(e);
    }
    getLogs() {
        return this.baseChunkLogger.getLogs();
    }
    clearLogs() {
        this.baseChunkLogger.clearLogs();
    }
    getLogArray() {
        return this.baseChunkLogger.getLogArray();
    }
    logsToBlob(e) {
        return this.baseChunkLogger.logsToBlob(e);
    }
}
var P = Object.defineProperty, V = Object.defineProperties, G = Object.getOwnPropertyDescriptors, p = Object.getOwnPropertySymbols, M = Object.prototype.hasOwnProperty, U = Object.prototype.propertyIsEnumerable, f = (r, e, t)=>e in r ? P(r, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: t
    }) : r[e] = t, g = (r, e)=>{
    for(var t in e || (e = {}))M.call(e, t) && f(r, t, e[t]);
    if (p) for (var t of p(e))U.call(e, t) && f(r, t, e[t]);
    return r;
}, h = (r, e)=>V(r, G(e));
function D(r) {
    return h(g({}, r), {
        level: r?.level || b.level
    });
}
function y(r, e, t = l) {
    return r[t] = e, r;
}
function w(r, e = l) {
    return r[e] || "";
}
function m(r, e, t = l) {
    const o = w(r, t);
    return o.trim() ? `${o}/${e}` : e;
}
function X(r, e, t = l) {
    const o = m(r, e, t), u = r.child({
        context: o
    });
    return y(u, o, t);
}
function I(r) {
    var e, t;
    const o = new E((e = r.opts) == null ? void 0 : e.level, r.maxSizeInBytes);
    return {
        logger: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2f$node_modules$2f$pino$2f$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(h(g({}, r.opts), {
            level: "trace",
            browser: h(g({}, (t = r.opts) == null ? void 0 : t.browser), {
                write: (u)=>o.write(u)
            })
        })),
        chunkLoggerController: o
    };
}
function O(r) {
    var e;
    const t = new j((e = r.opts) == null ? void 0 : e.level, r.maxSizeInBytes);
    return {
        logger: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2f$node_modules$2f$pino$2f$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(h(g({}, r.opts), {
            level: "trace"
        }), t),
        chunkLoggerController: t
    };
}
function Y(r) {
    return typeof r.loggerOverride < "u" && typeof r.loggerOverride != "string" ? {
        logger: r.loggerOverride,
        chunkLoggerController: null
    } : typeof window < "u" ? I(r) : O(r);
}
;
 //# sourceMappingURL=index.es.js.map
}),
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-utils/node_modules/@walletconnect/logger/dist/index.es.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MAX_LOG_SIZE_IN_BYTES_DEFAULT",
    ()=>i,
    "PINO_CUSTOM_CONTEXT_KEY",
    ()=>l,
    "PINO_LOGGER_DEFAULTS",
    ()=>b,
    "formatChildLoggerContext",
    ()=>m,
    "generateChildLogger",
    ()=>X,
    "generateClientLogger",
    ()=>I,
    "generatePlatformLogger",
    ()=>Y,
    "generateServerLogger",
    ()=>O,
    "getDefaultLoggerOptions",
    ()=>D,
    "getLoggerContext",
    ()=>w,
    "setLoggerContext",
    ()=>y
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$node_modules$2f$pino$2f$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-utils/node_modules/pino/browser.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$walletconnect$2f$safe$2d$json$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/@walletconnect/safe-json/dist/esm/index.js [app-client] (ecmascript)");
;
;
;
const b = {
    level: "info"
}, l = "custom_context", i = 1e3 * 1024;
var C = Object.defineProperty, B = (r, e, t)=>e in r ? C(r, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: t
    }) : r[e] = t, s = (r, e, t)=>B(r, typeof e != "symbol" ? e + "" : e, t);
class S {
    constructor(e){
        s(this, "nodeValue"), s(this, "sizeInBytes"), s(this, "next"), this.nodeValue = e, this.sizeInBytes = new TextEncoder().encode(this.nodeValue).length, this.next = null;
    }
    get value() {
        return this.nodeValue;
    }
    get size() {
        return this.sizeInBytes;
    }
}
class v {
    constructor(e){
        s(this, "lengthInNodes"), s(this, "sizeInBytes"), s(this, "head"), s(this, "tail"), s(this, "maxSizeInBytes"), this.head = null, this.tail = null, this.lengthInNodes = 0, this.maxSizeInBytes = e, this.sizeInBytes = 0;
    }
    append(e) {
        const t = new S(e);
        if (t.size > this.maxSizeInBytes) throw new Error(`[LinkedList] Value too big to insert into list: ${e} with size ${t.size}`);
        for(; this.size + t.size > this.maxSizeInBytes;)this.shift();
        this.head ? (this.tail && (this.tail.next = t), this.tail = t) : (this.head = t, this.tail = t), this.lengthInNodes++, this.sizeInBytes += t.size;
    }
    shift() {
        if (!this.head) return;
        const e = this.head;
        this.head = this.head.next, this.head || (this.tail = null), this.lengthInNodes--, this.sizeInBytes -= e.size;
    }
    toArray() {
        const e = [];
        let t = this.head;
        for(; t !== null;)e.push(t.value), t = t.next;
        return e;
    }
    get length() {
        return this.lengthInNodes;
    }
    get size() {
        return this.sizeInBytes;
    }
    toOrderedArray() {
        return Array.from(this);
    }
    [Symbol.iterator]() {
        let e = this.head;
        return {
            next: ()=>{
                if (!e) return {
                    done: !0,
                    value: null
                };
                const t = e.value;
                return e = e.next, {
                    done: !1,
                    value: t
                };
            }
        };
    }
}
var _ = Object.defineProperty, x = (r, e, t)=>e in r ? _(r, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: t
    }) : r[e] = t, a = (r, e, t)=>x(r, typeof e != "symbol" ? e + "" : e, t);
class L {
    constructor(e, t = i){
        a(this, "logs"), a(this, "level"), a(this, "levelValue"), a(this, "MAX_LOG_SIZE_IN_BYTES"), this.level = e ?? "error", this.levelValue = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$node_modules$2f$pino$2f$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["levels"].values[this.level], this.MAX_LOG_SIZE_IN_BYTES = t, this.logs = new v(this.MAX_LOG_SIZE_IN_BYTES);
    }
    forwardToConsole(e, t) {
        t === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$node_modules$2f$pino$2f$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["levels"].values.error ? console.error(e) : t === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$node_modules$2f$pino$2f$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["levels"].values.warn ? console.warn(e) : t === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$node_modules$2f$pino$2f$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["levels"].values.debug ? console.debug(e) : t === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$node_modules$2f$pino$2f$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["levels"].values.trace ? console.trace(e) : console.log(e);
    }
    appendToLogs(e) {
        this.logs.append((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$walletconnect$2f$safe$2d$json$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeJsonStringify"])({
            timestamp: new Date().toISOString(),
            log: e
        }));
        const t = typeof e == "string" ? JSON.parse(e).level : e.level;
        t >= this.levelValue && this.forwardToConsole(e, t);
    }
    getLogs() {
        return this.logs;
    }
    clearLogs() {
        this.logs = new v(this.MAX_LOG_SIZE_IN_BYTES);
    }
    getLogArray() {
        return Array.from(this.logs);
    }
    logsToBlob(e) {
        const t = this.getLogArray();
        return t.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$walletconnect$2f$safe$2d$json$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeJsonStringify"])({
            extraMetadata: e
        })), new Blob(t, {
            type: "application/json"
        });
    }
}
var z = Object.defineProperty, T = (r, e, t)=>e in r ? z(r, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: t
    }) : r[e] = t, k = (r, e, t)=>T(r, typeof e != "symbol" ? e + "" : e, t);
class E {
    constructor(e, t = i){
        k(this, "baseChunkLogger"), this.baseChunkLogger = new L(e, t);
    }
    write(e) {
        this.baseChunkLogger.appendToLogs(e);
    }
    getLogs() {
        return this.baseChunkLogger.getLogs();
    }
    clearLogs() {
        this.baseChunkLogger.clearLogs();
    }
    getLogArray() {
        return this.baseChunkLogger.getLogArray();
    }
    logsToBlob(e) {
        return this.baseChunkLogger.logsToBlob(e);
    }
    downloadLogsBlobInBrowser(e) {
        const t = URL.createObjectURL(this.logsToBlob(e)), o = document.createElement("a");
        o.href = t, o.download = `walletconnect-logs-${new Date().toISOString()}.txt`, document.body.appendChild(o), o.click(), document.body.removeChild(o), URL.revokeObjectURL(t);
    }
}
var A = Object.defineProperty, $ = (r, e, t)=>e in r ? A(r, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: t
    }) : r[e] = t, N = (r, e, t)=>$(r, typeof e != "symbol" ? e + "" : e, t);
class j {
    constructor(e, t = i){
        N(this, "baseChunkLogger"), this.baseChunkLogger = new L(e, t);
    }
    write(e) {
        this.baseChunkLogger.appendToLogs(e);
    }
    getLogs() {
        return this.baseChunkLogger.getLogs();
    }
    clearLogs() {
        this.baseChunkLogger.clearLogs();
    }
    getLogArray() {
        return this.baseChunkLogger.getLogArray();
    }
    logsToBlob(e) {
        return this.baseChunkLogger.logsToBlob(e);
    }
}
var P = Object.defineProperty, V = Object.defineProperties, G = Object.getOwnPropertyDescriptors, p = Object.getOwnPropertySymbols, M = Object.prototype.hasOwnProperty, U = Object.prototype.propertyIsEnumerable, f = (r, e, t)=>e in r ? P(r, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: t
    }) : r[e] = t, g = (r, e)=>{
    for(var t in e || (e = {}))M.call(e, t) && f(r, t, e[t]);
    if (p) for (var t of p(e))U.call(e, t) && f(r, t, e[t]);
    return r;
}, h = (r, e)=>V(r, G(e));
function D(r) {
    return h(g({}, r), {
        level: r?.level || b.level
    });
}
function y(r, e, t = l) {
    return r[t] = e, r;
}
function w(r, e = l) {
    return r[e] || "";
}
function m(r, e, t = l) {
    const o = w(r, t);
    return o.trim() ? `${o}/${e}` : e;
}
function X(r, e, t = l) {
    const o = m(r, e, t), u = r.child({
        context: o
    });
    return y(u, o, t);
}
function I(r) {
    var e, t;
    const o = new E((e = r.opts) == null ? void 0 : e.level, r.maxSizeInBytes);
    return {
        logger: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$node_modules$2f$pino$2f$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(h(g({}, r.opts), {
            level: "trace",
            browser: h(g({}, (t = r.opts) == null ? void 0 : t.browser), {
                write: (u)=>o.write(u)
            })
        })),
        chunkLoggerController: o
    };
}
function O(r) {
    var e;
    const t = new j((e = r.opts) == null ? void 0 : e.level, r.maxSizeInBytes);
    return {
        logger: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$node_modules$2f$pino$2f$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(h(g({}, r.opts), {
            level: "trace"
        }), t),
        chunkLoggerController: t
    };
}
function Y(r) {
    return typeof r.loggerOverride < "u" && typeof r.loggerOverride != "string" ? {
        logger: r.loggerOverride,
        chunkLoggerController: null
    } : typeof window < "u" ? I(r) : O(r);
}
;
 //# sourceMappingURL=index.es.js.map
}),
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-adapter-wagmi/node_modules/@walletconnect/logger/dist/index.es.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MAX_LOG_SIZE_IN_BYTES_DEFAULT",
    ()=>i,
    "PINO_CUSTOM_CONTEXT_KEY",
    ()=>l,
    "PINO_LOGGER_DEFAULTS",
    ()=>b,
    "formatChildLoggerContext",
    ()=>m,
    "generateChildLogger",
    ()=>X,
    "generateClientLogger",
    ()=>I,
    "generatePlatformLogger",
    ()=>Y,
    "generateServerLogger",
    ()=>O,
    "getDefaultLoggerOptions",
    ()=>D,
    "getLoggerContext",
    ()=>w,
    "setLoggerContext",
    ()=>y
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$adapter$2d$wagmi$2f$node_modules$2f$pino$2f$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-adapter-wagmi/node_modules/pino/browser.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$walletconnect$2f$safe$2d$json$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/@walletconnect/safe-json/dist/esm/index.js [app-client] (ecmascript)");
;
;
;
const b = {
    level: "info"
}, l = "custom_context", i = 1e3 * 1024;
var C = Object.defineProperty, B = (r, e, t)=>e in r ? C(r, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: t
    }) : r[e] = t, s = (r, e, t)=>B(r, typeof e != "symbol" ? e + "" : e, t);
class S {
    constructor(e){
        s(this, "nodeValue"), s(this, "sizeInBytes"), s(this, "next"), this.nodeValue = e, this.sizeInBytes = new TextEncoder().encode(this.nodeValue).length, this.next = null;
    }
    get value() {
        return this.nodeValue;
    }
    get size() {
        return this.sizeInBytes;
    }
}
class v {
    constructor(e){
        s(this, "lengthInNodes"), s(this, "sizeInBytes"), s(this, "head"), s(this, "tail"), s(this, "maxSizeInBytes"), this.head = null, this.tail = null, this.lengthInNodes = 0, this.maxSizeInBytes = e, this.sizeInBytes = 0;
    }
    append(e) {
        const t = new S(e);
        if (t.size > this.maxSizeInBytes) throw new Error(`[LinkedList] Value too big to insert into list: ${e} with size ${t.size}`);
        for(; this.size + t.size > this.maxSizeInBytes;)this.shift();
        this.head ? (this.tail && (this.tail.next = t), this.tail = t) : (this.head = t, this.tail = t), this.lengthInNodes++, this.sizeInBytes += t.size;
    }
    shift() {
        if (!this.head) return;
        const e = this.head;
        this.head = this.head.next, this.head || (this.tail = null), this.lengthInNodes--, this.sizeInBytes -= e.size;
    }
    toArray() {
        const e = [];
        let t = this.head;
        for(; t !== null;)e.push(t.value), t = t.next;
        return e;
    }
    get length() {
        return this.lengthInNodes;
    }
    get size() {
        return this.sizeInBytes;
    }
    toOrderedArray() {
        return Array.from(this);
    }
    [Symbol.iterator]() {
        let e = this.head;
        return {
            next: ()=>{
                if (!e) return {
                    done: !0,
                    value: null
                };
                const t = e.value;
                return e = e.next, {
                    done: !1,
                    value: t
                };
            }
        };
    }
}
var _ = Object.defineProperty, x = (r, e, t)=>e in r ? _(r, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: t
    }) : r[e] = t, a = (r, e, t)=>x(r, typeof e != "symbol" ? e + "" : e, t);
class L {
    constructor(e, t = i){
        a(this, "logs"), a(this, "level"), a(this, "levelValue"), a(this, "MAX_LOG_SIZE_IN_BYTES"), this.level = e ?? "error", this.levelValue = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$adapter$2d$wagmi$2f$node_modules$2f$pino$2f$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["levels"].values[this.level], this.MAX_LOG_SIZE_IN_BYTES = t, this.logs = new v(this.MAX_LOG_SIZE_IN_BYTES);
    }
    forwardToConsole(e, t) {
        t === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$adapter$2d$wagmi$2f$node_modules$2f$pino$2f$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["levels"].values.error ? console.error(e) : t === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$adapter$2d$wagmi$2f$node_modules$2f$pino$2f$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["levels"].values.warn ? console.warn(e) : t === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$adapter$2d$wagmi$2f$node_modules$2f$pino$2f$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["levels"].values.debug ? console.debug(e) : t === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$adapter$2d$wagmi$2f$node_modules$2f$pino$2f$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["levels"].values.trace ? console.trace(e) : console.log(e);
    }
    appendToLogs(e) {
        this.logs.append((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$walletconnect$2f$safe$2d$json$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeJsonStringify"])({
            timestamp: new Date().toISOString(),
            log: e
        }));
        const t = typeof e == "string" ? JSON.parse(e).level : e.level;
        t >= this.levelValue && this.forwardToConsole(e, t);
    }
    getLogs() {
        return this.logs;
    }
    clearLogs() {
        this.logs = new v(this.MAX_LOG_SIZE_IN_BYTES);
    }
    getLogArray() {
        return Array.from(this.logs);
    }
    logsToBlob(e) {
        const t = this.getLogArray();
        return t.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$walletconnect$2f$safe$2d$json$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["safeJsonStringify"])({
            extraMetadata: e
        })), new Blob(t, {
            type: "application/json"
        });
    }
}
var z = Object.defineProperty, T = (r, e, t)=>e in r ? z(r, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: t
    }) : r[e] = t, k = (r, e, t)=>T(r, typeof e != "symbol" ? e + "" : e, t);
class E {
    constructor(e, t = i){
        k(this, "baseChunkLogger"), this.baseChunkLogger = new L(e, t);
    }
    write(e) {
        this.baseChunkLogger.appendToLogs(e);
    }
    getLogs() {
        return this.baseChunkLogger.getLogs();
    }
    clearLogs() {
        this.baseChunkLogger.clearLogs();
    }
    getLogArray() {
        return this.baseChunkLogger.getLogArray();
    }
    logsToBlob(e) {
        return this.baseChunkLogger.logsToBlob(e);
    }
    downloadLogsBlobInBrowser(e) {
        const t = URL.createObjectURL(this.logsToBlob(e)), o = document.createElement("a");
        o.href = t, o.download = `walletconnect-logs-${new Date().toISOString()}.txt`, document.body.appendChild(o), o.click(), document.body.removeChild(o), URL.revokeObjectURL(t);
    }
}
var A = Object.defineProperty, $ = (r, e, t)=>e in r ? A(r, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: t
    }) : r[e] = t, N = (r, e, t)=>$(r, typeof e != "symbol" ? e + "" : e, t);
class j {
    constructor(e, t = i){
        N(this, "baseChunkLogger"), this.baseChunkLogger = new L(e, t);
    }
    write(e) {
        this.baseChunkLogger.appendToLogs(e);
    }
    getLogs() {
        return this.baseChunkLogger.getLogs();
    }
    clearLogs() {
        this.baseChunkLogger.clearLogs();
    }
    getLogArray() {
        return this.baseChunkLogger.getLogArray();
    }
    logsToBlob(e) {
        return this.baseChunkLogger.logsToBlob(e);
    }
}
var P = Object.defineProperty, V = Object.defineProperties, G = Object.getOwnPropertyDescriptors, p = Object.getOwnPropertySymbols, M = Object.prototype.hasOwnProperty, U = Object.prototype.propertyIsEnumerable, f = (r, e, t)=>e in r ? P(r, e, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: t
    }) : r[e] = t, g = (r, e)=>{
    for(var t in e || (e = {}))M.call(e, t) && f(r, t, e[t]);
    if (p) for (var t of p(e))U.call(e, t) && f(r, t, e[t]);
    return r;
}, h = (r, e)=>V(r, G(e));
function D(r) {
    return h(g({}, r), {
        level: r?.level || b.level
    });
}
function y(r, e, t = l) {
    return r[t] = e, r;
}
function w(r, e = l) {
    return r[e] || "";
}
function m(r, e, t = l) {
    const o = w(r, t);
    return o.trim() ? `${o}/${e}` : e;
}
function X(r, e, t = l) {
    const o = m(r, e, t), u = r.child({
        context: o
    });
    return y(u, o, t);
}
function I(r) {
    var e, t;
    const o = new E((e = r.opts) == null ? void 0 : e.level, r.maxSizeInBytes);
    return {
        logger: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$adapter$2d$wagmi$2f$node_modules$2f$pino$2f$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(h(g({}, r.opts), {
            level: "trace",
            browser: h(g({}, (t = r.opts) == null ? void 0 : t.browser), {
                write: (u)=>o.write(u)
            })
        })),
        chunkLoggerController: o
    };
}
function O(r) {
    var e;
    const t = new j((e = r.opts) == null ? void 0 : e.level, r.maxSizeInBytes);
    return {
        logger: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$adapter$2d$wagmi$2f$node_modules$2f$pino$2f$browser$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(h(g({}, r.opts), {
            level: "trace"
        }), t),
        chunkLoggerController: t
    };
}
function Y(r) {
    return typeof r.loggerOverride < "u" && typeof r.loggerOverride != "string" ? {
        logger: r.loggerOverride,
        chunkLoggerController: null
    } : typeof window < "u" ? I(r) : O(r);
}
;
 //# sourceMappingURL=index.es.js.map
}),
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-controllers/node_modules/@walletconnect/types/dist/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ICore",
    ()=>h,
    "ICrypto",
    ()=>g,
    "IEchoClient",
    ()=>O,
    "IEngine",
    ()=>V,
    "IEngineEvents",
    ()=>K,
    "IEventClient",
    ()=>R,
    "IExpirer",
    ()=>S,
    "IJsonRpcHistory",
    ()=>I,
    "IKeyChain",
    ()=>j,
    "IMessageTracker",
    ()=>y,
    "IPairing",
    ()=>$,
    "IPublisher",
    ()=>m,
    "IRelayer",
    ()=>d,
    "ISignClient",
    ()=>J,
    "ISignClientEvents",
    ()=>H,
    "IStore",
    ()=>f,
    "ISubscriber",
    ()=>P,
    "ISubscriberTopicMap",
    ()=>C,
    "IVerify",
    ()=>M
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$walletconnect$2f$events$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/@walletconnect/events/dist/esm/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$walletconnect$2f$events$2f$dist$2f$esm$2f$events$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/@walletconnect/events/dist/esm/events.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$events$2f$events$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/events/events.js [app-client] (ecmascript)");
;
;
var a = Object.defineProperty, u = (e, s, r)=>s in e ? a(e, s, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: r
    }) : e[s] = r, c = (e, s, r)=>u(e, typeof s != "symbol" ? s + "" : s, r);
class h extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$walletconnect$2f$events$2f$dist$2f$esm$2f$events$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IEvents"] {
    constructor(s){
        super(), this.opts = s, c(this, "protocol", "wc"), c(this, "version", 2);
    }
}
class g {
    constructor(s, r, t){
        this.core = s, this.logger = r;
    }
}
var p = Object.defineProperty, b = (e, s, r)=>s in e ? p(e, s, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: r
    }) : e[s] = r, v = (e, s, r)=>b(e, typeof s != "symbol" ? s + "" : s, r);
class I extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$walletconnect$2f$events$2f$dist$2f$esm$2f$events$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IEvents"] {
    constructor(s, r){
        super(), this.core = s, this.logger = r, v(this, "records", new Map);
    }
}
class y {
    constructor(s, r){
        this.logger = s, this.core = r;
    }
}
class m extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$walletconnect$2f$events$2f$dist$2f$esm$2f$events$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IEvents"] {
    constructor(s, r){
        super(), this.relayer = s, this.logger = r;
    }
}
class d extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$walletconnect$2f$events$2f$dist$2f$esm$2f$events$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IEvents"] {
    constructor(s){
        super();
    }
}
class f {
    constructor(s, r, t, q){
        this.core = s, this.logger = r, this.name = t;
    }
}
var E = Object.defineProperty, x = (e, s, r)=>s in e ? E(e, s, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: r
    }) : e[s] = r, w = (e, s, r)=>x(e, typeof s != "symbol" ? s + "" : s, r);
class C {
    constructor(){
        w(this, "map", new Map);
    }
}
class P extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$walletconnect$2f$events$2f$dist$2f$esm$2f$events$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IEvents"] {
    constructor(s, r){
        super(), this.relayer = s, this.logger = r;
    }
}
class j {
    constructor(s, r){
        this.core = s, this.logger = r;
    }
}
class S extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$walletconnect$2f$events$2f$dist$2f$esm$2f$events$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IEvents"] {
    constructor(s, r){
        super(), this.core = s, this.logger = r;
    }
}
class $ {
    constructor(s, r){
        this.logger = s, this.core = r;
    }
}
class M {
    constructor(s, r, t){
        this.core = s, this.logger = r, this.store = t;
    }
}
class O {
    constructor(s, r){
        this.projectId = s, this.logger = r;
    }
}
class R {
    constructor(s, r, t){
        this.core = s, this.logger = r, this.telemetryEnabled = t;
    }
}
var T = Object.defineProperty, k = (e, s, r)=>s in e ? T(e, s, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: r
    }) : e[s] = r, i = (e, s, r)=>k(e, typeof s != "symbol" ? s + "" : s, r);
class H extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$events$2f$events$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] {
    constructor(){
        super();
    }
}
class J {
    constructor(s){
        this.opts = s, i(this, "protocol", "wc"), i(this, "version", 2);
    }
}
class K extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$events$2f$events$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventEmitter"] {
    constructor(){
        super();
    }
}
class V {
    constructor(s){
        this.client = s;
    }
}
;
 //# sourceMappingURL=index.js.map
}),
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit/node_modules/@walletconnect/types/dist/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ICore",
    ()=>h,
    "ICrypto",
    ()=>g,
    "IEchoClient",
    ()=>O,
    "IEngine",
    ()=>V,
    "IEngineEvents",
    ()=>K,
    "IEventClient",
    ()=>R,
    "IExpirer",
    ()=>S,
    "IJsonRpcHistory",
    ()=>I,
    "IKeyChain",
    ()=>j,
    "IMessageTracker",
    ()=>y,
    "IPairing",
    ()=>$,
    "IPublisher",
    ()=>m,
    "IRelayer",
    ()=>d,
    "ISignClient",
    ()=>J,
    "ISignClientEvents",
    ()=>H,
    "IStore",
    ()=>f,
    "ISubscriber",
    ()=>P,
    "ISubscriberTopicMap",
    ()=>C,
    "IVerify",
    ()=>M
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$walletconnect$2f$events$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/@walletconnect/events/dist/esm/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$walletconnect$2f$events$2f$dist$2f$esm$2f$events$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/@walletconnect/events/dist/esm/events.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$events$2f$events$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/events/events.js [app-client] (ecmascript)");
;
;
var a = Object.defineProperty, u = (e, s, r)=>s in e ? a(e, s, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: r
    }) : e[s] = r, c = (e, s, r)=>u(e, typeof s != "symbol" ? s + "" : s, r);
class h extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$walletconnect$2f$events$2f$dist$2f$esm$2f$events$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IEvents"] {
    constructor(s){
        super(), this.opts = s, c(this, "protocol", "wc"), c(this, "version", 2);
    }
}
class g {
    constructor(s, r, t){
        this.core = s, this.logger = r;
    }
}
var p = Object.defineProperty, b = (e, s, r)=>s in e ? p(e, s, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: r
    }) : e[s] = r, v = (e, s, r)=>b(e, typeof s != "symbol" ? s + "" : s, r);
class I extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$walletconnect$2f$events$2f$dist$2f$esm$2f$events$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IEvents"] {
    constructor(s, r){
        super(), this.core = s, this.logger = r, v(this, "records", new Map);
    }
}
class y {
    constructor(s, r){
        this.logger = s, this.core = r;
    }
}
class m extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$walletconnect$2f$events$2f$dist$2f$esm$2f$events$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IEvents"] {
    constructor(s, r){
        super(), this.relayer = s, this.logger = r;
    }
}
class d extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$walletconnect$2f$events$2f$dist$2f$esm$2f$events$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IEvents"] {
    constructor(s){
        super();
    }
}
class f {
    constructor(s, r, t, q){
        this.core = s, this.logger = r, this.name = t;
    }
}
var E = Object.defineProperty, x = (e, s, r)=>s in e ? E(e, s, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: r
    }) : e[s] = r, w = (e, s, r)=>x(e, typeof s != "symbol" ? s + "" : s, r);
class C {
    constructor(){
        w(this, "map", new Map);
    }
}
class P extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$walletconnect$2f$events$2f$dist$2f$esm$2f$events$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IEvents"] {
    constructor(s, r){
        super(), this.relayer = s, this.logger = r;
    }
}
class j {
    constructor(s, r){
        this.core = s, this.logger = r;
    }
}
class S extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$walletconnect$2f$events$2f$dist$2f$esm$2f$events$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IEvents"] {
    constructor(s, r){
        super(), this.core = s, this.logger = r;
    }
}
class $ {
    constructor(s, r){
        this.logger = s, this.core = r;
    }
}
class M {
    constructor(s, r, t){
        this.core = s, this.logger = r, this.store = t;
    }
}
class O {
    constructor(s, r){
        this.projectId = s, this.logger = r;
    }
}
class R {
    constructor(s, r, t){
        this.core = s, this.logger = r, this.telemetryEnabled = t;
    }
}
var T = Object.defineProperty, k = (e, s, r)=>s in e ? T(e, s, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: r
    }) : e[s] = r, i = (e, s, r)=>k(e, typeof s != "symbol" ? s + "" : s, r);
class H extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$events$2f$events$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] {
    constructor(){
        super();
    }
}
class J {
    constructor(s){
        this.opts = s, i(this, "protocol", "wc"), i(this, "version", 2);
    }
}
class K extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$events$2f$events$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventEmitter"] {
    constructor(){
        super();
    }
}
class V {
    constructor(s){
        this.client = s;
    }
}
;
 //# sourceMappingURL=index.js.map
}),
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-adapter-wagmi/node_modules/@walletconnect/types/dist/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ICore",
    ()=>h,
    "ICrypto",
    ()=>g,
    "IEchoClient",
    ()=>O,
    "IEngine",
    ()=>V,
    "IEngineEvents",
    ()=>K,
    "IEventClient",
    ()=>R,
    "IExpirer",
    ()=>S,
    "IJsonRpcHistory",
    ()=>I,
    "IKeyChain",
    ()=>j,
    "IMessageTracker",
    ()=>y,
    "IPairing",
    ()=>$,
    "IPublisher",
    ()=>m,
    "IRelayer",
    ()=>d,
    "ISignClient",
    ()=>J,
    "ISignClientEvents",
    ()=>H,
    "IStore",
    ()=>f,
    "ISubscriber",
    ()=>P,
    "ISubscriberTopicMap",
    ()=>C,
    "IVerify",
    ()=>M
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$walletconnect$2f$events$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/@walletconnect/events/dist/esm/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$walletconnect$2f$events$2f$dist$2f$esm$2f$events$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/@walletconnect/events/dist/esm/events.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$events$2f$events$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/events/events.js [app-client] (ecmascript)");
;
;
var a = Object.defineProperty, u = (e, s, r)=>s in e ? a(e, s, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: r
    }) : e[s] = r, c = (e, s, r)=>u(e, typeof s != "symbol" ? s + "" : s, r);
class h extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$walletconnect$2f$events$2f$dist$2f$esm$2f$events$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IEvents"] {
    constructor(s){
        super(), this.opts = s, c(this, "protocol", "wc"), c(this, "version", 2);
    }
}
class g {
    constructor(s, r, t){
        this.core = s, this.logger = r;
    }
}
var p = Object.defineProperty, b = (e, s, r)=>s in e ? p(e, s, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: r
    }) : e[s] = r, v = (e, s, r)=>b(e, typeof s != "symbol" ? s + "" : s, r);
class I extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$walletconnect$2f$events$2f$dist$2f$esm$2f$events$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IEvents"] {
    constructor(s, r){
        super(), this.core = s, this.logger = r, v(this, "records", new Map);
    }
}
class y {
    constructor(s, r){
        this.logger = s, this.core = r;
    }
}
class m extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$walletconnect$2f$events$2f$dist$2f$esm$2f$events$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IEvents"] {
    constructor(s, r){
        super(), this.relayer = s, this.logger = r;
    }
}
class d extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$walletconnect$2f$events$2f$dist$2f$esm$2f$events$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IEvents"] {
    constructor(s){
        super();
    }
}
class f {
    constructor(s, r, t, q){
        this.core = s, this.logger = r, this.name = t;
    }
}
var E = Object.defineProperty, x = (e, s, r)=>s in e ? E(e, s, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: r
    }) : e[s] = r, w = (e, s, r)=>x(e, typeof s != "symbol" ? s + "" : s, r);
class C {
    constructor(){
        w(this, "map", new Map);
    }
}
class P extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$walletconnect$2f$events$2f$dist$2f$esm$2f$events$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IEvents"] {
    constructor(s, r){
        super(), this.relayer = s, this.logger = r;
    }
}
class j {
    constructor(s, r){
        this.core = s, this.logger = r;
    }
}
class S extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$walletconnect$2f$events$2f$dist$2f$esm$2f$events$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IEvents"] {
    constructor(s, r){
        super(), this.core = s, this.logger = r;
    }
}
class $ {
    constructor(s, r){
        this.logger = s, this.core = r;
    }
}
class M {
    constructor(s, r, t){
        this.core = s, this.logger = r, this.store = t;
    }
}
class O {
    constructor(s, r){
        this.projectId = s, this.logger = r;
    }
}
class R {
    constructor(s, r, t){
        this.core = s, this.logger = r, this.telemetryEnabled = t;
    }
}
var T = Object.defineProperty, k = (e, s, r)=>s in e ? T(e, s, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: r
    }) : e[s] = r, i = (e, s, r)=>k(e, typeof s != "symbol" ? s + "" : s, r);
class H extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$events$2f$events$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] {
    constructor(){
        super();
    }
}
class J {
    constructor(s){
        this.opts = s, i(this, "protocol", "wc"), i(this, "version", 2);
    }
}
class K extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$events$2f$events$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EventEmitter"] {
    constructor(){
        super();
    }
}
class V {
    constructor(s){
        this.client = s;
    }
}
;
 //# sourceMappingURL=index.js.map
}),
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-controllers/node_modules/base-x/src/esm/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// base-x encoding / decoding
// Copyright (c) 2018 base-x contributors
// Copyright (c) 2014-2018 The Bitcoin Core developers (base58.cpp)
// Distributed under the MIT software license, see the accompanying
// file LICENSE or http://www.opensource.org/licenses/mit-license.php.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
function base(ALPHABET) {
    if (ALPHABET.length >= 255) {
        throw new TypeError('Alphabet too long');
    }
    const BASE_MAP = new Uint8Array(256);
    for(let j = 0; j < BASE_MAP.length; j++){
        BASE_MAP[j] = 255;
    }
    for(let i = 0; i < ALPHABET.length; i++){
        const x = ALPHABET.charAt(i);
        const xc = x.charCodeAt(0);
        if (BASE_MAP[xc] !== 255) {
            throw new TypeError(x + ' is ambiguous');
        }
        BASE_MAP[xc] = i;
    }
    const BASE = ALPHABET.length;
    const LEADER = ALPHABET.charAt(0);
    const FACTOR = Math.log(BASE) / Math.log(256) // log(BASE) / log(256), rounded up
    ;
    const iFACTOR = Math.log(256) / Math.log(BASE) // log(256) / log(BASE), rounded up
    ;
    function encode(source) {
        // eslint-disable-next-line no-empty
        if (source instanceof Uint8Array) {} else if (ArrayBuffer.isView(source)) {
            source = new Uint8Array(source.buffer, source.byteOffset, source.byteLength);
        } else if (Array.isArray(source)) {
            source = Uint8Array.from(source);
        }
        if (!(source instanceof Uint8Array)) {
            throw new TypeError('Expected Uint8Array');
        }
        if (source.length === 0) {
            return '';
        }
        // Skip & count leading zeroes.
        let zeroes = 0;
        let length = 0;
        let pbegin = 0;
        const pend = source.length;
        while(pbegin !== pend && source[pbegin] === 0){
            pbegin++;
            zeroes++;
        }
        // Allocate enough space in big-endian base58 representation.
        const size = (pend - pbegin) * iFACTOR + 1 >>> 0;
        const b58 = new Uint8Array(size);
        // Process the bytes.
        while(pbegin !== pend){
            let carry = source[pbegin];
            // Apply "b58 = b58 * 256 + ch".
            let i = 0;
            for(let it1 = size - 1; (carry !== 0 || i < length) && it1 !== -1; it1--, i++){
                carry += 256 * b58[it1] >>> 0;
                b58[it1] = carry % BASE >>> 0;
                carry = carry / BASE >>> 0;
            }
            if (carry !== 0) {
                throw new Error('Non-zero carry');
            }
            length = i;
            pbegin++;
        }
        // Skip leading zeroes in base58 result.
        let it2 = size - length;
        while(it2 !== size && b58[it2] === 0){
            it2++;
        }
        // Translate the result into a string.
        let str = LEADER.repeat(zeroes);
        for(; it2 < size; ++it2){
            str += ALPHABET.charAt(b58[it2]);
        }
        return str;
    }
    function decodeUnsafe(source) {
        if (typeof source !== 'string') {
            throw new TypeError('Expected String');
        }
        if (source.length === 0) {
            return new Uint8Array();
        }
        let psz = 0;
        // Skip and count leading '1's.
        let zeroes = 0;
        let length = 0;
        while(source[psz] === LEADER){
            zeroes++;
            psz++;
        }
        // Allocate enough space in big-endian base256 representation.
        const size = (source.length - psz) * FACTOR + 1 >>> 0 // log(58) / log(256), rounded up.
        ;
        const b256 = new Uint8Array(size);
        // Process the characters.
        while(psz < source.length){
            // Find code of next character
            const charCode = source.charCodeAt(psz);
            // Base map can not be indexed using char code
            if (charCode > 255) {
                return;
            }
            // Decode character
            let carry = BASE_MAP[charCode];
            // Invalid character
            if (carry === 255) {
                return;
            }
            let i = 0;
            for(let it3 = size - 1; (carry !== 0 || i < length) && it3 !== -1; it3--, i++){
                carry += BASE * b256[it3] >>> 0;
                b256[it3] = carry % 256 >>> 0;
                carry = carry / 256 >>> 0;
            }
            if (carry !== 0) {
                throw new Error('Non-zero carry');
            }
            length = i;
            psz++;
        }
        // Skip leading zeroes in b256.
        let it4 = size - length;
        while(it4 !== size && b256[it4] === 0){
            it4++;
        }
        const vch = new Uint8Array(zeroes + (size - it4));
        let j = zeroes;
        while(it4 !== size){
            vch[j++] = b256[it4++];
        }
        return vch;
    }
    function decode(string) {
        const buffer = decodeUnsafe(string);
        if (buffer) {
            return buffer;
        }
        throw new Error('Non-base' + BASE + ' character');
    }
    return {
        encode,
        decodeUnsafe,
        decode
    };
}
const __TURBOPACK__default__export__ = base;
}),
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit/node_modules/base-x/src/esm/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// base-x encoding / decoding
// Copyright (c) 2018 base-x contributors
// Copyright (c) 2014-2018 The Bitcoin Core developers (base58.cpp)
// Distributed under the MIT software license, see the accompanying
// file LICENSE or http://www.opensource.org/licenses/mit-license.php.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
function base(ALPHABET) {
    if (ALPHABET.length >= 255) {
        throw new TypeError('Alphabet too long');
    }
    const BASE_MAP = new Uint8Array(256);
    for(let j = 0; j < BASE_MAP.length; j++){
        BASE_MAP[j] = 255;
    }
    for(let i = 0; i < ALPHABET.length; i++){
        const x = ALPHABET.charAt(i);
        const xc = x.charCodeAt(0);
        if (BASE_MAP[xc] !== 255) {
            throw new TypeError(x + ' is ambiguous');
        }
        BASE_MAP[xc] = i;
    }
    const BASE = ALPHABET.length;
    const LEADER = ALPHABET.charAt(0);
    const FACTOR = Math.log(BASE) / Math.log(256) // log(BASE) / log(256), rounded up
    ;
    const iFACTOR = Math.log(256) / Math.log(BASE) // log(256) / log(BASE), rounded up
    ;
    function encode(source) {
        // eslint-disable-next-line no-empty
        if (source instanceof Uint8Array) {} else if (ArrayBuffer.isView(source)) {
            source = new Uint8Array(source.buffer, source.byteOffset, source.byteLength);
        } else if (Array.isArray(source)) {
            source = Uint8Array.from(source);
        }
        if (!(source instanceof Uint8Array)) {
            throw new TypeError('Expected Uint8Array');
        }
        if (source.length === 0) {
            return '';
        }
        // Skip & count leading zeroes.
        let zeroes = 0;
        let length = 0;
        let pbegin = 0;
        const pend = source.length;
        while(pbegin !== pend && source[pbegin] === 0){
            pbegin++;
            zeroes++;
        }
        // Allocate enough space in big-endian base58 representation.
        const size = (pend - pbegin) * iFACTOR + 1 >>> 0;
        const b58 = new Uint8Array(size);
        // Process the bytes.
        while(pbegin !== pend){
            let carry = source[pbegin];
            // Apply "b58 = b58 * 256 + ch".
            let i = 0;
            for(let it1 = size - 1; (carry !== 0 || i < length) && it1 !== -1; it1--, i++){
                carry += 256 * b58[it1] >>> 0;
                b58[it1] = carry % BASE >>> 0;
                carry = carry / BASE >>> 0;
            }
            if (carry !== 0) {
                throw new Error('Non-zero carry');
            }
            length = i;
            pbegin++;
        }
        // Skip leading zeroes in base58 result.
        let it2 = size - length;
        while(it2 !== size && b58[it2] === 0){
            it2++;
        }
        // Translate the result into a string.
        let str = LEADER.repeat(zeroes);
        for(; it2 < size; ++it2){
            str += ALPHABET.charAt(b58[it2]);
        }
        return str;
    }
    function decodeUnsafe(source) {
        if (typeof source !== 'string') {
            throw new TypeError('Expected String');
        }
        if (source.length === 0) {
            return new Uint8Array();
        }
        let psz = 0;
        // Skip and count leading '1's.
        let zeroes = 0;
        let length = 0;
        while(source[psz] === LEADER){
            zeroes++;
            psz++;
        }
        // Allocate enough space in big-endian base256 representation.
        const size = (source.length - psz) * FACTOR + 1 >>> 0 // log(58) / log(256), rounded up.
        ;
        const b256 = new Uint8Array(size);
        // Process the characters.
        while(psz < source.length){
            // Find code of next character
            const charCode = source.charCodeAt(psz);
            // Base map can not be indexed using char code
            if (charCode > 255) {
                return;
            }
            // Decode character
            let carry = BASE_MAP[charCode];
            // Invalid character
            if (carry === 255) {
                return;
            }
            let i = 0;
            for(let it3 = size - 1; (carry !== 0 || i < length) && it3 !== -1; it3--, i++){
                carry += BASE * b256[it3] >>> 0;
                b256[it3] = carry % 256 >>> 0;
                carry = carry / 256 >>> 0;
            }
            if (carry !== 0) {
                throw new Error('Non-zero carry');
            }
            length = i;
            psz++;
        }
        // Skip leading zeroes in b256.
        let it4 = size - length;
        while(it4 !== size && b256[it4] === 0){
            it4++;
        }
        const vch = new Uint8Array(zeroes + (size - it4));
        let j = zeroes;
        while(it4 !== size){
            vch[j++] = b256[it4++];
        }
        return vch;
    }
    function decode(string) {
        const buffer = decodeUnsafe(string);
        if (buffer) {
            return buffer;
        }
        throw new Error('Non-base' + BASE + ' character');
    }
    return {
        encode,
        decodeUnsafe,
        decode
    };
}
const __TURBOPACK__default__export__ = base;
}),
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-adapter-wagmi/node_modules/base-x/src/esm/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// base-x encoding / decoding
// Copyright (c) 2018 base-x contributors
// Copyright (c) 2014-2018 The Bitcoin Core developers (base58.cpp)
// Distributed under the MIT software license, see the accompanying
// file LICENSE or http://www.opensource.org/licenses/mit-license.php.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
function base(ALPHABET) {
    if (ALPHABET.length >= 255) {
        throw new TypeError('Alphabet too long');
    }
    const BASE_MAP = new Uint8Array(256);
    for(let j = 0; j < BASE_MAP.length; j++){
        BASE_MAP[j] = 255;
    }
    for(let i = 0; i < ALPHABET.length; i++){
        const x = ALPHABET.charAt(i);
        const xc = x.charCodeAt(0);
        if (BASE_MAP[xc] !== 255) {
            throw new TypeError(x + ' is ambiguous');
        }
        BASE_MAP[xc] = i;
    }
    const BASE = ALPHABET.length;
    const LEADER = ALPHABET.charAt(0);
    const FACTOR = Math.log(BASE) / Math.log(256) // log(BASE) / log(256), rounded up
    ;
    const iFACTOR = Math.log(256) / Math.log(BASE) // log(256) / log(BASE), rounded up
    ;
    function encode(source) {
        // eslint-disable-next-line no-empty
        if (source instanceof Uint8Array) {} else if (ArrayBuffer.isView(source)) {
            source = new Uint8Array(source.buffer, source.byteOffset, source.byteLength);
        } else if (Array.isArray(source)) {
            source = Uint8Array.from(source);
        }
        if (!(source instanceof Uint8Array)) {
            throw new TypeError('Expected Uint8Array');
        }
        if (source.length === 0) {
            return '';
        }
        // Skip & count leading zeroes.
        let zeroes = 0;
        let length = 0;
        let pbegin = 0;
        const pend = source.length;
        while(pbegin !== pend && source[pbegin] === 0){
            pbegin++;
            zeroes++;
        }
        // Allocate enough space in big-endian base58 representation.
        const size = (pend - pbegin) * iFACTOR + 1 >>> 0;
        const b58 = new Uint8Array(size);
        // Process the bytes.
        while(pbegin !== pend){
            let carry = source[pbegin];
            // Apply "b58 = b58 * 256 + ch".
            let i = 0;
            for(let it1 = size - 1; (carry !== 0 || i < length) && it1 !== -1; it1--, i++){
                carry += 256 * b58[it1] >>> 0;
                b58[it1] = carry % BASE >>> 0;
                carry = carry / BASE >>> 0;
            }
            if (carry !== 0) {
                throw new Error('Non-zero carry');
            }
            length = i;
            pbegin++;
        }
        // Skip leading zeroes in base58 result.
        let it2 = size - length;
        while(it2 !== size && b58[it2] === 0){
            it2++;
        }
        // Translate the result into a string.
        let str = LEADER.repeat(zeroes);
        for(; it2 < size; ++it2){
            str += ALPHABET.charAt(b58[it2]);
        }
        return str;
    }
    function decodeUnsafe(source) {
        if (typeof source !== 'string') {
            throw new TypeError('Expected String');
        }
        if (source.length === 0) {
            return new Uint8Array();
        }
        let psz = 0;
        // Skip and count leading '1's.
        let zeroes = 0;
        let length = 0;
        while(source[psz] === LEADER){
            zeroes++;
            psz++;
        }
        // Allocate enough space in big-endian base256 representation.
        const size = (source.length - psz) * FACTOR + 1 >>> 0 // log(58) / log(256), rounded up.
        ;
        const b256 = new Uint8Array(size);
        // Process the characters.
        while(psz < source.length){
            // Find code of next character
            const charCode = source.charCodeAt(psz);
            // Base map can not be indexed using char code
            if (charCode > 255) {
                return;
            }
            // Decode character
            let carry = BASE_MAP[charCode];
            // Invalid character
            if (carry === 255) {
                return;
            }
            let i = 0;
            for(let it3 = size - 1; (carry !== 0 || i < length) && it3 !== -1; it3--, i++){
                carry += BASE * b256[it3] >>> 0;
                b256[it3] = carry % 256 >>> 0;
                carry = carry / 256 >>> 0;
            }
            if (carry !== 0) {
                throw new Error('Non-zero carry');
            }
            length = i;
            psz++;
        }
        // Skip leading zeroes in b256.
        let it4 = size - length;
        while(it4 !== size && b256[it4] === 0){
            it4++;
        }
        const vch = new Uint8Array(zeroes + (size - it4));
        let j = zeroes;
        while(it4 !== size){
            vch[j++] = b256[it4++];
        }
        return vch;
    }
    function decode(string) {
        const buffer = decodeUnsafe(string);
        if (buffer) {
            return buffer;
        }
        throw new Error('Non-base' + BASE + ' character');
    }
    return {
        encode,
        decodeUnsafe,
        decode
    };
}
const __TURBOPACK__default__export__ = base;
}),
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-controllers/node_modules/bs58/src/esm/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$node_modules$2f$base$2d$x$2f$src$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-controllers/node_modules/base-x/src/esm/index.js [app-client] (ecmascript)");
;
var ALPHABET = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz';
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$node_modules$2f$base$2d$x$2f$src$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(ALPHABET);
}),
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit/node_modules/bs58/src/esm/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2f$node_modules$2f$base$2d$x$2f$src$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit/node_modules/base-x/src/esm/index.js [app-client] (ecmascript)");
;
var ALPHABET = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz';
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2f$node_modules$2f$base$2d$x$2f$src$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(ALPHABET);
}),
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-adapter-wagmi/node_modules/bs58/src/esm/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$adapter$2d$wagmi$2f$node_modules$2f$base$2d$x$2f$src$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-adapter-wagmi/node_modules/base-x/src/esm/index.js [app-client] (ecmascript)");
;
var ALPHABET = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz';
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$adapter$2d$wagmi$2f$node_modules$2f$base$2d$x$2f$src$2f$esm$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(ALPHABET);
}),
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-controllers/node_modules/uint8arrays/esm/src/compare.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "compare",
    ()=>compare
]);
function compare(a, b) {
    for(let i = 0; i < a.byteLength; i++){
        if (a[i] < b[i]) {
            return -1;
        }
        if (a[i] > b[i]) {
            return 1;
        }
    }
    if (a.byteLength > b.byteLength) {
        return 1;
    }
    if (a.byteLength < b.byteLength) {
        return -1;
    }
    return 0;
}
}),
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-controllers/node_modules/uint8arrays/esm/src/util/as-uint8array.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "asUint8Array",
    ()=>asUint8Array
]);
function asUint8Array(buf) {
    if (globalThis.Buffer != null) {
        return new Uint8Array(buf.buffer, buf.byteOffset, buf.byteLength);
    }
    return buf;
}
}),
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-controllers/node_modules/uint8arrays/esm/src/alloc.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "alloc",
    ()=>alloc,
    "allocUnsafe",
    ()=>allocUnsafe
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$util$2f$as$2d$uint8array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-controllers/node_modules/uint8arrays/esm/src/util/as-uint8array.js [app-client] (ecmascript)");
;
function alloc(size = 0) {
    if (globalThis.Buffer != null && globalThis.Buffer.alloc != null) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$util$2f$as$2d$uint8array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["asUint8Array"])(globalThis.Buffer.alloc(size));
    }
    return new Uint8Array(size);
}
function allocUnsafe(size = 0) {
    if (globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$util$2f$as$2d$uint8array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["asUint8Array"])(globalThis.Buffer.allocUnsafe(size));
    }
    return new Uint8Array(size);
}
}),
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-controllers/node_modules/uint8arrays/esm/src/concat.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "concat",
    ()=>concat
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$alloc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-controllers/node_modules/uint8arrays/esm/src/alloc.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$util$2f$as$2d$uint8array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-controllers/node_modules/uint8arrays/esm/src/util/as-uint8array.js [app-client] (ecmascript)");
;
;
function concat(arrays, length) {
    if (!length) {
        length = arrays.reduce((acc, curr)=>acc + curr.length, 0);
    }
    const output = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$alloc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["allocUnsafe"])(length);
    let offset = 0;
    for (const arr of arrays){
        output.set(arr, offset);
        offset += arr.length;
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$util$2f$as$2d$uint8array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["asUint8Array"])(output);
}
}),
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-controllers/node_modules/uint8arrays/esm/src/equals.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "equals",
    ()=>equals
]);
function equals(a, b) {
    if (a === b) {
        return true;
    }
    if (a.byteLength !== b.byteLength) {
        return false;
    }
    for(let i = 0; i < a.byteLength; i++){
        if (a[i] !== b[i]) {
            return false;
        }
    }
    return true;
}
}),
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-controllers/node_modules/uint8arrays/esm/src/util/bases.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$multiformats$2f$esm$2f$src$2f$basics$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/multiformats/esm/src/basics.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$alloc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-controllers/node_modules/uint8arrays/esm/src/alloc.js [app-client] (ecmascript)");
;
;
function createCodec(name, prefix, encode, decode) {
    return {
        name,
        prefix,
        encoder: {
            name,
            prefix,
            encode
        },
        decoder: {
            decode
        }
    };
}
const string = createCodec('utf8', 'u', (buf)=>{
    const decoder = new TextDecoder('utf8');
    return 'u' + decoder.decode(buf);
}, (str)=>{
    const encoder = new TextEncoder();
    return encoder.encode(str.substring(1));
});
const ascii = createCodec('ascii', 'a', (buf)=>{
    let string = 'a';
    for(let i = 0; i < buf.length; i++){
        string += String.fromCharCode(buf[i]);
    }
    return string;
}, (str)=>{
    str = str.substring(1);
    const buf = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$alloc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["allocUnsafe"])(str.length);
    for(let i = 0; i < str.length; i++){
        buf[i] = str.charCodeAt(i);
    }
    return buf;
});
const BASES = {
    utf8: string,
    'utf-8': string,
    hex: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$multiformats$2f$esm$2f$src$2f$basics$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["bases"].base16,
    latin1: ascii,
    ascii: ascii,
    binary: ascii,
    ...__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$multiformats$2f$esm$2f$src$2f$basics$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["bases"]
};
const __TURBOPACK__default__export__ = BASES;
}),
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-controllers/node_modules/uint8arrays/esm/src/from-string.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "fromString",
    ()=>fromString
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$util$2f$bases$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-controllers/node_modules/uint8arrays/esm/src/util/bases.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$util$2f$as$2d$uint8array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-controllers/node_modules/uint8arrays/esm/src/util/as-uint8array.js [app-client] (ecmascript)");
;
;
function fromString(string, encoding = 'utf8') {
    const base = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$util$2f$bases$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"][encoding];
    if (!base) {
        throw new Error(`Unsupported encoding "${encoding}"`);
    }
    if ((encoding === 'utf8' || encoding === 'utf-8') && globalThis.Buffer != null && globalThis.Buffer.from != null) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$util$2f$as$2d$uint8array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["asUint8Array"])(globalThis.Buffer.from(string, 'utf-8'));
    }
    return base.decoder.decode(`${base.prefix}${string}`);
}
}),
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-controllers/node_modules/uint8arrays/esm/src/to-string.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "toString",
    ()=>toString
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$util$2f$bases$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-controllers/node_modules/uint8arrays/esm/src/util/bases.js [app-client] (ecmascript)");
;
function toString(array, encoding = 'utf8') {
    const base = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$util$2f$bases$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"][encoding];
    if (!base) {
        throw new Error(`Unsupported encoding "${encoding}"`);
    }
    if ((encoding === 'utf8' || encoding === 'utf-8') && globalThis.Buffer != null && globalThis.Buffer.from != null) {
        return globalThis.Buffer.from(array.buffer, array.byteOffset, array.byteLength).toString('utf8');
    }
    return base.encoder.encode(array).substring(1);
}
}),
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-controllers/node_modules/uint8arrays/esm/src/xor.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "xor",
    ()=>xor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$alloc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-controllers/node_modules/uint8arrays/esm/src/alloc.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$util$2f$as$2d$uint8array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-controllers/node_modules/uint8arrays/esm/src/util/as-uint8array.js [app-client] (ecmascript)");
;
;
function xor(a, b) {
    if (a.length !== b.length) {
        throw new Error('Inputs should have the same length');
    }
    const result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$alloc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["allocUnsafe"])(a.length);
    for(let i = 0; i < a.length; i++){
        result[i] = a[i] ^ b[i];
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$util$2f$as$2d$uint8array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["asUint8Array"])(result);
}
}),
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-controllers/node_modules/uint8arrays/esm/src/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$compare$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-controllers/node_modules/uint8arrays/esm/src/compare.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$concat$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-controllers/node_modules/uint8arrays/esm/src/concat.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$equals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-controllers/node_modules/uint8arrays/esm/src/equals.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$from$2d$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-controllers/node_modules/uint8arrays/esm/src/from-string.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$to$2d$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-controllers/node_modules/uint8arrays/esm/src/to-string.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$xor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-controllers/node_modules/uint8arrays/esm/src/xor.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
}),
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit/node_modules/uint8arrays/esm/src/compare.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "compare",
    ()=>compare
]);
function compare(a, b) {
    for(let i = 0; i < a.byteLength; i++){
        if (a[i] < b[i]) {
            return -1;
        }
        if (a[i] > b[i]) {
            return 1;
        }
    }
    if (a.byteLength > b.byteLength) {
        return 1;
    }
    if (a.byteLength < b.byteLength) {
        return -1;
    }
    return 0;
}
}),
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit/node_modules/uint8arrays/esm/src/util/as-uint8array.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "asUint8Array",
    ()=>asUint8Array
]);
function asUint8Array(buf) {
    if (globalThis.Buffer != null) {
        return new Uint8Array(buf.buffer, buf.byteOffset, buf.byteLength);
    }
    return buf;
}
}),
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit/node_modules/uint8arrays/esm/src/alloc.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "alloc",
    ()=>alloc,
    "allocUnsafe",
    ()=>allocUnsafe
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$util$2f$as$2d$uint8array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit/node_modules/uint8arrays/esm/src/util/as-uint8array.js [app-client] (ecmascript)");
;
function alloc(size = 0) {
    if (globalThis.Buffer != null && globalThis.Buffer.alloc != null) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$util$2f$as$2d$uint8array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["asUint8Array"])(globalThis.Buffer.alloc(size));
    }
    return new Uint8Array(size);
}
function allocUnsafe(size = 0) {
    if (globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$util$2f$as$2d$uint8array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["asUint8Array"])(globalThis.Buffer.allocUnsafe(size));
    }
    return new Uint8Array(size);
}
}),
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit/node_modules/uint8arrays/esm/src/concat.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "concat",
    ()=>concat
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$alloc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit/node_modules/uint8arrays/esm/src/alloc.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$util$2f$as$2d$uint8array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit/node_modules/uint8arrays/esm/src/util/as-uint8array.js [app-client] (ecmascript)");
;
;
function concat(arrays, length) {
    if (!length) {
        length = arrays.reduce((acc, curr)=>acc + curr.length, 0);
    }
    const output = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$alloc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["allocUnsafe"])(length);
    let offset = 0;
    for (const arr of arrays){
        output.set(arr, offset);
        offset += arr.length;
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$util$2f$as$2d$uint8array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["asUint8Array"])(output);
}
}),
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit/node_modules/uint8arrays/esm/src/equals.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "equals",
    ()=>equals
]);
function equals(a, b) {
    if (a === b) {
        return true;
    }
    if (a.byteLength !== b.byteLength) {
        return false;
    }
    for(let i = 0; i < a.byteLength; i++){
        if (a[i] !== b[i]) {
            return false;
        }
    }
    return true;
}
}),
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit/node_modules/uint8arrays/esm/src/util/bases.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$multiformats$2f$esm$2f$src$2f$basics$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/multiformats/esm/src/basics.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$alloc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit/node_modules/uint8arrays/esm/src/alloc.js [app-client] (ecmascript)");
;
;
function createCodec(name, prefix, encode, decode) {
    return {
        name,
        prefix,
        encoder: {
            name,
            prefix,
            encode
        },
        decoder: {
            decode
        }
    };
}
const string = createCodec('utf8', 'u', (buf)=>{
    const decoder = new TextDecoder('utf8');
    return 'u' + decoder.decode(buf);
}, (str)=>{
    const encoder = new TextEncoder();
    return encoder.encode(str.substring(1));
});
const ascii = createCodec('ascii', 'a', (buf)=>{
    let string = 'a';
    for(let i = 0; i < buf.length; i++){
        string += String.fromCharCode(buf[i]);
    }
    return string;
}, (str)=>{
    str = str.substring(1);
    const buf = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$alloc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["allocUnsafe"])(str.length);
    for(let i = 0; i < str.length; i++){
        buf[i] = str.charCodeAt(i);
    }
    return buf;
});
const BASES = {
    utf8: string,
    'utf-8': string,
    hex: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$multiformats$2f$esm$2f$src$2f$basics$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["bases"].base16,
    latin1: ascii,
    ascii: ascii,
    binary: ascii,
    ...__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$multiformats$2f$esm$2f$src$2f$basics$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["bases"]
};
const __TURBOPACK__default__export__ = BASES;
}),
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit/node_modules/uint8arrays/esm/src/from-string.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "fromString",
    ()=>fromString
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$util$2f$bases$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit/node_modules/uint8arrays/esm/src/util/bases.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$util$2f$as$2d$uint8array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit/node_modules/uint8arrays/esm/src/util/as-uint8array.js [app-client] (ecmascript)");
;
;
function fromString(string, encoding = 'utf8') {
    const base = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$util$2f$bases$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"][encoding];
    if (!base) {
        throw new Error(`Unsupported encoding "${encoding}"`);
    }
    if ((encoding === 'utf8' || encoding === 'utf-8') && globalThis.Buffer != null && globalThis.Buffer.from != null) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$util$2f$as$2d$uint8array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["asUint8Array"])(globalThis.Buffer.from(string, 'utf-8'));
    }
    return base.decoder.decode(`${base.prefix}${string}`);
}
}),
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit/node_modules/uint8arrays/esm/src/to-string.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "toString",
    ()=>toString
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$util$2f$bases$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit/node_modules/uint8arrays/esm/src/util/bases.js [app-client] (ecmascript)");
;
function toString(array, encoding = 'utf8') {
    const base = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$util$2f$bases$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"][encoding];
    if (!base) {
        throw new Error(`Unsupported encoding "${encoding}"`);
    }
    if ((encoding === 'utf8' || encoding === 'utf-8') && globalThis.Buffer != null && globalThis.Buffer.from != null) {
        return globalThis.Buffer.from(array.buffer, array.byteOffset, array.byteLength).toString('utf8');
    }
    return base.encoder.encode(array).substring(1);
}
}),
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit/node_modules/uint8arrays/esm/src/xor.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "xor",
    ()=>xor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$alloc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit/node_modules/uint8arrays/esm/src/alloc.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$util$2f$as$2d$uint8array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit/node_modules/uint8arrays/esm/src/util/as-uint8array.js [app-client] (ecmascript)");
;
;
function xor(a, b) {
    if (a.length !== b.length) {
        throw new Error('Inputs should have the same length');
    }
    const result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$alloc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["allocUnsafe"])(a.length);
    for(let i = 0; i < a.length; i++){
        result[i] = a[i] ^ b[i];
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$util$2f$as$2d$uint8array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["asUint8Array"])(result);
}
}),
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit/node_modules/uint8arrays/esm/src/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$compare$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit/node_modules/uint8arrays/esm/src/compare.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$concat$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit/node_modules/uint8arrays/esm/src/concat.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$equals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit/node_modules/uint8arrays/esm/src/equals.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$from$2d$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit/node_modules/uint8arrays/esm/src/from-string.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$to$2d$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit/node_modules/uint8arrays/esm/src/to-string.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$xor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit/node_modules/uint8arrays/esm/src/xor.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
}),
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-adapter-wagmi/node_modules/uint8arrays/esm/src/compare.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "compare",
    ()=>compare
]);
function compare(a, b) {
    for(let i = 0; i < a.byteLength; i++){
        if (a[i] < b[i]) {
            return -1;
        }
        if (a[i] > b[i]) {
            return 1;
        }
    }
    if (a.byteLength > b.byteLength) {
        return 1;
    }
    if (a.byteLength < b.byteLength) {
        return -1;
    }
    return 0;
}
}),
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-adapter-wagmi/node_modules/uint8arrays/esm/src/util/as-uint8array.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "asUint8Array",
    ()=>asUint8Array
]);
function asUint8Array(buf) {
    if (globalThis.Buffer != null) {
        return new Uint8Array(buf.buffer, buf.byteOffset, buf.byteLength);
    }
    return buf;
}
}),
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-adapter-wagmi/node_modules/uint8arrays/esm/src/alloc.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "alloc",
    ()=>alloc,
    "allocUnsafe",
    ()=>allocUnsafe
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$adapter$2d$wagmi$2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$util$2f$as$2d$uint8array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-adapter-wagmi/node_modules/uint8arrays/esm/src/util/as-uint8array.js [app-client] (ecmascript)");
;
function alloc(size = 0) {
    if (globalThis.Buffer != null && globalThis.Buffer.alloc != null) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$adapter$2d$wagmi$2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$util$2f$as$2d$uint8array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["asUint8Array"])(globalThis.Buffer.alloc(size));
    }
    return new Uint8Array(size);
}
function allocUnsafe(size = 0) {
    if (globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$adapter$2d$wagmi$2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$util$2f$as$2d$uint8array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["asUint8Array"])(globalThis.Buffer.allocUnsafe(size));
    }
    return new Uint8Array(size);
}
}),
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-adapter-wagmi/node_modules/uint8arrays/esm/src/concat.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "concat",
    ()=>concat
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$adapter$2d$wagmi$2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$alloc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-adapter-wagmi/node_modules/uint8arrays/esm/src/alloc.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$adapter$2d$wagmi$2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$util$2f$as$2d$uint8array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-adapter-wagmi/node_modules/uint8arrays/esm/src/util/as-uint8array.js [app-client] (ecmascript)");
;
;
function concat(arrays, length) {
    if (!length) {
        length = arrays.reduce((acc, curr)=>acc + curr.length, 0);
    }
    const output = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$adapter$2d$wagmi$2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$alloc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["allocUnsafe"])(length);
    let offset = 0;
    for (const arr of arrays){
        output.set(arr, offset);
        offset += arr.length;
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$adapter$2d$wagmi$2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$util$2f$as$2d$uint8array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["asUint8Array"])(output);
}
}),
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-adapter-wagmi/node_modules/uint8arrays/esm/src/equals.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "equals",
    ()=>equals
]);
function equals(a, b) {
    if (a === b) {
        return true;
    }
    if (a.byteLength !== b.byteLength) {
        return false;
    }
    for(let i = 0; i < a.byteLength; i++){
        if (a[i] !== b[i]) {
            return false;
        }
    }
    return true;
}
}),
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-adapter-wagmi/node_modules/uint8arrays/esm/src/util/bases.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$multiformats$2f$esm$2f$src$2f$basics$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/multiformats/esm/src/basics.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$adapter$2d$wagmi$2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$alloc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-adapter-wagmi/node_modules/uint8arrays/esm/src/alloc.js [app-client] (ecmascript)");
;
;
function createCodec(name, prefix, encode, decode) {
    return {
        name,
        prefix,
        encoder: {
            name,
            prefix,
            encode
        },
        decoder: {
            decode
        }
    };
}
const string = createCodec('utf8', 'u', (buf)=>{
    const decoder = new TextDecoder('utf8');
    return 'u' + decoder.decode(buf);
}, (str)=>{
    const encoder = new TextEncoder();
    return encoder.encode(str.substring(1));
});
const ascii = createCodec('ascii', 'a', (buf)=>{
    let string = 'a';
    for(let i = 0; i < buf.length; i++){
        string += String.fromCharCode(buf[i]);
    }
    return string;
}, (str)=>{
    str = str.substring(1);
    const buf = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$adapter$2d$wagmi$2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$alloc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["allocUnsafe"])(str.length);
    for(let i = 0; i < str.length; i++){
        buf[i] = str.charCodeAt(i);
    }
    return buf;
});
const BASES = {
    utf8: string,
    'utf-8': string,
    hex: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$multiformats$2f$esm$2f$src$2f$basics$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["bases"].base16,
    latin1: ascii,
    ascii: ascii,
    binary: ascii,
    ...__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$multiformats$2f$esm$2f$src$2f$basics$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["bases"]
};
const __TURBOPACK__default__export__ = BASES;
}),
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-adapter-wagmi/node_modules/uint8arrays/esm/src/from-string.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "fromString",
    ()=>fromString
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$adapter$2d$wagmi$2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$util$2f$bases$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-adapter-wagmi/node_modules/uint8arrays/esm/src/util/bases.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$adapter$2d$wagmi$2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$util$2f$as$2d$uint8array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-adapter-wagmi/node_modules/uint8arrays/esm/src/util/as-uint8array.js [app-client] (ecmascript)");
;
;
function fromString(string, encoding = 'utf8') {
    const base = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$adapter$2d$wagmi$2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$util$2f$bases$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"][encoding];
    if (!base) {
        throw new Error(`Unsupported encoding "${encoding}"`);
    }
    if ((encoding === 'utf8' || encoding === 'utf-8') && globalThis.Buffer != null && globalThis.Buffer.from != null) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$adapter$2d$wagmi$2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$util$2f$as$2d$uint8array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["asUint8Array"])(globalThis.Buffer.from(string, 'utf-8'));
    }
    return base.decoder.decode(`${base.prefix}${string}`);
}
}),
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-adapter-wagmi/node_modules/uint8arrays/esm/src/to-string.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "toString",
    ()=>toString
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$adapter$2d$wagmi$2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$util$2f$bases$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-adapter-wagmi/node_modules/uint8arrays/esm/src/util/bases.js [app-client] (ecmascript)");
;
function toString(array, encoding = 'utf8') {
    const base = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$adapter$2d$wagmi$2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$util$2f$bases$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"][encoding];
    if (!base) {
        throw new Error(`Unsupported encoding "${encoding}"`);
    }
    if ((encoding === 'utf8' || encoding === 'utf-8') && globalThis.Buffer != null && globalThis.Buffer.from != null) {
        return globalThis.Buffer.from(array.buffer, array.byteOffset, array.byteLength).toString('utf8');
    }
    return base.encoder.encode(array).substring(1);
}
}),
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-adapter-wagmi/node_modules/uint8arrays/esm/src/xor.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "xor",
    ()=>xor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$adapter$2d$wagmi$2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$alloc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-adapter-wagmi/node_modules/uint8arrays/esm/src/alloc.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$adapter$2d$wagmi$2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$util$2f$as$2d$uint8array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-adapter-wagmi/node_modules/uint8arrays/esm/src/util/as-uint8array.js [app-client] (ecmascript)");
;
;
function xor(a, b) {
    if (a.length !== b.length) {
        throw new Error('Inputs should have the same length');
    }
    const result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$adapter$2d$wagmi$2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$alloc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["allocUnsafe"])(a.length);
    for(let i = 0; i < a.length; i++){
        result[i] = a[i] ^ b[i];
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$adapter$2d$wagmi$2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$util$2f$as$2d$uint8array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["asUint8Array"])(result);
}
}),
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-adapter-wagmi/node_modules/uint8arrays/esm/src/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$adapter$2d$wagmi$2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$compare$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-adapter-wagmi/node_modules/uint8arrays/esm/src/compare.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$adapter$2d$wagmi$2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$concat$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-adapter-wagmi/node_modules/uint8arrays/esm/src/concat.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$adapter$2d$wagmi$2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$equals$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-adapter-wagmi/node_modules/uint8arrays/esm/src/equals.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$adapter$2d$wagmi$2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$from$2d$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-adapter-wagmi/node_modules/uint8arrays/esm/src/from-string.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$adapter$2d$wagmi$2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$to$2d$string$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-adapter-wagmi/node_modules/uint8arrays/esm/src/to-string.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$adapter$2d$wagmi$2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$xor$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-adapter-wagmi/node_modules/uint8arrays/esm/src/xor.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
}),
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-utils/dist/esm/src/ErrorUtil.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ErrorUtil",
    ()=>ErrorUtil
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$SafeLocalStorage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-common/dist/esm/src/utils/SafeLocalStorage.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/OptionsController.js [app-client] (ecmascript)");
;
;
const abortController = new AbortController();
const ErrorUtil = {
    EmbeddedWalletAbortController: abortController,
    /**
     * Universal Provider errors. Make sure the `message` is matching with the errors thrown by the Universal Provider.
     * We use the `alertErrorKey` to map the error to the correct AppKit alert error.
     */ UniversalProviderErrors: {
        UNAUTHORIZED_DOMAIN_NOT_ALLOWED: {
            message: 'Unauthorized: origin not allowed',
            alertErrorKey: 'ORIGIN_NOT_ALLOWED'
        },
        JWT_VALIDATION_ERROR: {
            message: 'JWT validation error: JWT Token is not yet valid',
            alertErrorKey: 'JWT_TOKEN_NOT_VALID'
        },
        INVALID_KEY: {
            message: 'Unauthorized: invalid key',
            alertErrorKey: 'INVALID_PROJECT_ID'
        }
    },
    ALERT_ERRORS: {
        SWITCH_NETWORK_NOT_FOUND: {
            code: 'APKT001',
            displayMessage: 'Network Not Found',
            debugMessage: 'The specified network is not recognized. Please ensure it is included in the `networks` array of your `createAppKit` configuration.'
        },
        ORIGIN_NOT_ALLOWED: {
            code: 'APKT002',
            displayMessage: 'Invalid App Configuration',
            debugMessage: ()=>`The origin ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$SafeLocalStorage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSafe"])() ? window.origin : 'unknown'} is not in your allow list. Please update your allowed domains at https://dashboard.reown.com. [PID: ${__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OptionsController"].state.projectId}]`
        },
        IFRAME_LOAD_FAILED: {
            code: 'APKT003',
            displayMessage: 'Network Error: Wallet Load Failed',
            debugMessage: ()=>'Failed to load the embedded wallet. This may be due to network issues or server downtime. Please check your network connection and try again shortly. Contact support if the issue persists.'
        },
        IFRAME_REQUEST_TIMEOUT: {
            code: 'APKT004',
            displayMessage: 'Wallet Request Timeout',
            debugMessage: ()=>'The request to the embedded wallet timed out. Please check your network connection and try again shortly. Contact support if the issue persists.'
        },
        UNVERIFIED_DOMAIN: {
            code: 'APKT005',
            displayMessage: 'Unverified Domain',
            debugMessage: ()=>'Embedded wallet load failed. Ensure your domain is verified in https://dashboard.reown.com.'
        },
        JWT_TOKEN_NOT_VALID: {
            code: 'APKT006',
            displayMessage: 'Session Expired',
            debugMessage: 'Your session is invalid or expired. Please check your system’s date and time settings, then reconnect.'
        },
        INVALID_PROJECT_ID: {
            code: 'APKT007',
            displayMessage: 'Invalid Project ID',
            debugMessage: 'The specified project ID is invalid. Please visit https://dashboard.reown.com to obtain a valid project ID.'
        },
        PROJECT_ID_NOT_CONFIGURED: {
            code: 'APKT008',
            displayMessage: 'Project ID Missing',
            debugMessage: 'No project ID is configured. You can create and configure a project ID at https://dashboard.reown.com.'
        },
        SERVER_ERROR_APP_CONFIGURATION: {
            code: 'APKT009',
            displayMessage: 'Server Error',
            debugMessage: (errorMessage)=>`Unable to fetch App Configuration. ${errorMessage}. Please check your network connection and try again shortly. Contact support if the issue persists.`
        },
        RATE_LIMITED_APP_CONFIGURATION: {
            code: 'APKT010',
            displayMessage: 'Rate Limited',
            debugMessage: 'You have been rate limited while retrieving App Configuration. Please wait a few minutes and try again. Contact support if the issue persists.'
        }
    },
    ALERT_WARNINGS: {
        LOCAL_CONFIGURATION_IGNORED: {
            debugMessage: (warningMessage)=>`[Reown Config Notice] ${warningMessage}`
        },
        INACTIVE_NAMESPACE_NOT_CONNECTED: {
            code: 'APKTW001',
            displayMessage: 'Inactive Namespace Not Connected',
            debugMessage: (namespace, errorMessage)=>`An error occurred while connecting an inactive namespace ${namespace}: "${errorMessage}"`
        },
        INVALID_EMAIL: {
            code: 'APKTW002',
            displayMessage: 'Invalid Email Address',
            debugMessage: 'Please enter a valid email address'
        }
    }
}; //# sourceMappingURL=ErrorUtil.js.map
}),
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-utils/dist/esm/src/ConstantsUtil.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ConstantsUtil",
    ()=>ConstantsUtil
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-common/dist/esm/src/utils/ConstantsUtil.js [app-client] (ecmascript)");
;
const ConstantsUtil = {
    /* Connector names */ METMASK_CONNECTOR_NAME: 'MetaMask',
    TRUST_CONNECTOR_NAME: 'Trust Wallet',
    SOLFLARE_CONNECTOR_NAME: 'Solflare',
    PHANTOM_CONNECTOR_NAME: 'Phantom',
    COIN98_CONNECTOR_NAME: 'Coin98',
    MAGIC_EDEN_CONNECTOR_NAME: 'Magic Eden',
    BACKPACK_CONNECTOR_NAME: 'Backpack',
    BITGET_CONNECTOR_NAME: 'Bitget Wallet',
    FRONTIER_CONNECTOR_NAME: 'Frontier',
    XVERSE_CONNECTOR_NAME: 'Xverse Wallet',
    LEATHER_CONNECTOR_NAME: 'Leather',
    OKX_CONNECTOR_NAME: 'OKX Wallet',
    EIP155: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].CHAIN.EVM,
    ADD_CHAIN_METHOD: 'wallet_addEthereumChain',
    EIP6963_ANNOUNCE_EVENT: 'eip6963:announceProvider',
    EIP6963_REQUEST_EVENT: 'eip6963:requestProvider',
    CONNECTOR_RDNS_MAP: {
        coinbaseWallet: 'com.coinbase.wallet',
        coinbaseWalletSDK: 'com.coinbase.wallet'
    },
    CONNECTOR_TYPE_EXTERNAL: 'EXTERNAL',
    CONNECTOR_TYPE_WALLET_CONNECT: 'WALLET_CONNECT',
    CONNECTOR_TYPE_INJECTED: 'INJECTED',
    CONNECTOR_TYPE_ANNOUNCED: 'ANNOUNCED',
    CONNECTOR_TYPE_AUTH: 'AUTH',
    CONNECTOR_TYPE_MULTI_CHAIN: 'MULTI_CHAIN',
    CONNECTOR_TYPE_W3M_AUTH: 'AUTH',
    getSDKVersionWarningMessage (currentVersion, latestVersion) {
        return `
     @@@@@@@           @@@@@@@@@@@@@@@@@@      
   @@@@@@@@@@@      @@@@@@@@@@@@@@@@@@@@@@@@   
  @@@@@@@@@@@@@    @@@@@@@@@@@@@@@@@@@@@@@@@@  
 @@@@@@@@@@@@@@@  @@@@@@@@@@@@@@@@@@@@@@@@@@@  
 @@@@@@@@@@@@@@@  @@@@@@@@@@@@@@   @@@@@@@@@@@ 
 @@@@@@@@@@@@@@@  @@@@@@@@@@@@@   @@@@@@@@@@@@ 
 @@@@@@@@@@@@@@@  @@@@@@@@@@@@@  @@@@@@@@@@@@@
 @@@@@@@@@@@@@@@  @@@@@@@@@@@@   @@@@@@@@@@@@@    
 @@@@@@   @@@@@@  @@@@@@@@@@@   @@@@@@@@@@@@@@    
 @@@@@@   @@@@@@  @@@@@@@@@@@  @@@@@@@@@@@@@@@ 
 @@@@@@@@@@@@@@@  @@@@@@@@@@   @@@@@@@@@@@@@@@ 
 @@@@@@@@@@@@@@@  @@@@@@@@@@@@@@@@@@@@@@@@@@@  
  @@@@@@@@@@@@@    @@@@@@@@@@@@@@@@@@@@@@@@@@  
   @@@@@@@@@@@      @@@@@@@@@@@@@@@@@@@@@@@@   
      @@@@@            @@@@@@@@@@@@@@@@@@  
      
AppKit SDK version ${currentVersion} is outdated. Latest version is ${latestVersion}. Please update to the latest version for bug fixes and new features.
            
Changelog: https://github.com/reown-com/appkit/releases
NPM Registry: https://www.npmjs.com/package/@reown/appkit`;
    }
}; //# sourceMappingURL=ConstantsUtil.js.map
}),
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-utils/dist/esm/src/HelpersUtil.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HelpersUtil",
    ()=>HelpersUtil
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-common/dist/esm/src/utils/ConstantsUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ChainController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectorController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ConnectorController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$StorageUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-controllers/dist/esm/src/utils/StorageUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$dist$2f$esm$2f$src$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-utils/dist/esm/src/ConstantsUtil.js [app-client] (ecmascript)");
;
;
;
const HelpersUtil = {
    getCaipTokens (tokens) {
        if (!tokens) {
            return undefined;
        }
        const caipTokens = {};
        Object.entries(tokens).forEach(([id, token])=>{
            caipTokens[`${__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$dist$2f$esm$2f$src$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].EIP155}:${id}`] = token;
        });
        return caipTokens;
    },
    isLowerCaseMatch (str1, str2) {
        return str1?.toLowerCase() === str2?.toLowerCase();
    },
    /**
     * Iterates the Auth connector supported chains and returns the namespace that is last connected to the active chain.
     * @returns ChainNamespace | undefined
     */ getActiveNamespaceConnectedToAuth () {
        const activeChain = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].state.activeChain;
        return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].AUTH_CONNECTOR_SUPPORTED_CHAINS.find((chain)=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectorController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConnectorController"].getConnectorId(chain) === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].CONNECTOR_ID.AUTH && chain === activeChain);
    },
    /**
     * Runs a condition function again and again until it returns true or the max number of tries is reached.
     *
     * @param conditionFn - A function (can be async) that returns true when the condition is met.
     * @param intervalMs - Time to wait between tries, in milliseconds.
     * @param maxRetries - Maximum number of times to try before stopping.
     * @returns A Promise that resolves to true if the condition becomes true in time, or false if it doesn't.
     */ withRetry ({ conditionFn, intervalMs, maxRetries }) {
        let attempts = 0;
        return new Promise((resolve)=>{
            async function tryCheck() {
                attempts += 1;
                const result = await conditionFn();
                if (result) {
                    return resolve(true);
                }
                if (attempts >= maxRetries) {
                    return resolve(false);
                }
                setTimeout(tryCheck, intervalMs);
                return null;
            }
            tryCheck();
        });
    },
    /**
     * Returns the chain namespace from user's chainId which is returned from Auth provider.
     * @param chainId - The chainId to parse.
     * @returns The chain namespace.
     */ userChainIdToChainNamespace (chainId) {
        if (typeof chainId === 'number') {
            return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].CHAIN.EVM;
        }
        const [namespace] = chainId.split(':');
        return namespace;
    },
    /**
     * Get all auth namespaces except the active one
     * @param activeNamespace - The active namespace
     * @returns All auth namespaces except the active one
     */ getOtherAuthNamespaces (activeNamespace) {
        if (!activeNamespace) {
            return [];
        }
        const authNamespaces = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].AUTH_CONNECTOR_SUPPORTED_CHAINS;
        const otherAuthNamespaces = authNamespaces.filter((ns)=>ns !== activeNamespace);
        return otherAuthNamespaces;
    },
    /**
     * Gets the storage info for a connector
     * @param connectorId - The ID of the connector
     * @param namespace - The namespace of the connector
     * @returns
     */ getConnectorStorageInfo (connectorId, namespace) {
        const storageConnectionsByNamespace = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$StorageUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StorageUtil"].getConnections();
        const storageConnections = storageConnectionsByNamespace[namespace] ?? [];
        return {
            hasDisconnected: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$StorageUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StorageUtil"].isConnectorDisconnected(connectorId, namespace),
            hasConnected: storageConnections.some((c)=>HelpersUtil.isLowerCaseMatch(c.connectorId, connectorId))
        };
    }
}; //# sourceMappingURL=HelpersUtil.js.map
}),
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-utils/dist/esm/src/PresetsUtil.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PresetsUtil",
    ()=>PresetsUtil
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-common/dist/esm/src/utils/ConstantsUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$dist$2f$esm$2f$src$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-utils/dist/esm/src/ConstantsUtil.js [app-client] (ecmascript)");
;
;
const PresetsUtil = {
    ConnectorExplorerIds: {
        [__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].CONNECTOR_ID.COINBASE]: 'fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa',
        [__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].CONNECTOR_ID.COINBASE_SDK]: 'fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa',
        [__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].CONNECTOR_ID.BASE_ACCOUNT]: 'fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa',
        [__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].CONNECTOR_ID.SAFE]: '225affb176778569276e484e1b92637ad061b01e13a048b35a9d280c3b58970f',
        [__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].CONNECTOR_ID.LEDGER]: '19177a98252e07ddfc9af2083ba8e07ef627cb6103467ffebb3f8f4205fd7927',
        [__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].CONNECTOR_ID.OKX]: '971e689d0a5be527bac79629b4ee9b925e82208e5168b733496a09c0faed0709',
        /* Connector names */ [__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$dist$2f$esm$2f$src$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].METMASK_CONNECTOR_NAME]: 'c57ca95b47569778a828d19178114f4db188b89b763c899ba0be274e97267d96',
        [__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$dist$2f$esm$2f$src$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].TRUST_CONNECTOR_NAME]: '4622a2b2d6af1c9844944291e5e7351a6aa24cd7b23099efac1b2fd875da31a0',
        [__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$dist$2f$esm$2f$src$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].SOLFLARE_CONNECTOR_NAME]: '1ca0bdd4747578705b1939af023d120677c64fe6ca76add81fda36e350605e79',
        [__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$dist$2f$esm$2f$src$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].PHANTOM_CONNECTOR_NAME]: 'a797aa35c0fadbfc1a53e7f675162ed5226968b44a19ee3d24385c64d1d3c393',
        [__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$dist$2f$esm$2f$src$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].COIN98_CONNECTOR_NAME]: '2a3c89040ac3b723a1972a33a125b1db11e258a6975d3a61252cd64e6ea5ea01',
        [__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$dist$2f$esm$2f$src$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].MAGIC_EDEN_CONNECTOR_NAME]: '8b830a2b724a9c3fbab63af6f55ed29c9dfa8a55e732dc88c80a196a2ba136c6',
        [__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$dist$2f$esm$2f$src$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].BACKPACK_CONNECTOR_NAME]: '2bd8c14e035c2d48f184aaa168559e86b0e3433228d3c4075900a221785019b0',
        [__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$dist$2f$esm$2f$src$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].BITGET_CONNECTOR_NAME]: '38f5d18bd8522c244bdd70cb4a68e0e718865155811c043f052fb9f1c51de662',
        [__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$dist$2f$esm$2f$src$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].FRONTIER_CONNECTOR_NAME]: '85db431492aa2e8672e93f4ea7acf10c88b97b867b0d373107af63dc4880f041',
        [__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$dist$2f$esm$2f$src$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].XVERSE_CONNECTOR_NAME]: '2a87d74ae02e10bdd1f51f7ce6c4e1cc53cd5f2c0b6b5ad0d7b3007d2b13de7b',
        [__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$dist$2f$esm$2f$src$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].LEATHER_CONNECTOR_NAME]: '483afe1df1df63daf313109971ff3ef8356ddf1cc4e45877d205eee0b7893a13',
        [__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$dist$2f$esm$2f$src$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].OKX_CONNECTOR_NAME]: '971e689d0a5be527bac79629b4ee9b925e82208e5168b733496a09c0faed0709'
    },
    NetworkImageIds: {
        // Ethereum
        1: 'ba0ba0cd-17c6-4806-ad93-f9d174f17900',
        // Arbitrum
        42161: '3bff954d-5cb0-47a0-9a23-d20192e74600',
        // Avalanche
        43114: '30c46e53-e989-45fb-4549-be3bd4eb3b00',
        // Binance Smart Chain
        56: '93564157-2e8e-4ce7-81df-b264dbee9b00',
        // Fantom
        250: '06b26297-fe0c-4733-5d6b-ffa5498aac00',
        // Optimism
        10: 'ab9c186a-c52f-464b-2906-ca59d760a400',
        // Polygon
        137: '41d04d42-da3b-4453-8506-668cc0727900',
        // Mantle
        5000: 'e86fae9b-b770-4eea-e520-150e12c81100',
        // Hedera Mainnet
        295: '6a97d510-cac8-4e58-c7ce-e8681b044c00',
        // Sepolia
        11_155_111: 'e909ea0a-f92a-4512-c8fc-748044ea6800',
        // Base Sepolia
        84532: 'a18a7ecd-e307-4360-4746-283182228e00',
        // Unichain Sepolia
        1301: '4eeea7ef-0014-4649-5d1d-07271a80f600',
        // Unichain Mainnet
        130: '2257980a-3463-48c6-cbac-a42d2a956e00',
        // Monad Testnet
        10_143: '0a728e83-bacb-46db-7844-948f05434900',
        // Gnosis
        100: '02b53f6a-e3d4-479e-1cb4-21178987d100',
        // EVMos
        9001: 'f926ff41-260d-4028-635e-91913fc28e00',
        // ZkSync
        324: 'b310f07f-4ef7-49f3-7073-2a0a39685800',
        // Filecoin
        314: '5a73b3dd-af74-424e-cae0-0de859ee9400',
        // Iotx
        4689: '34e68754-e536-40da-c153-6ef2e7188a00',
        // Metis,
        1088: '3897a66d-40b9-4833-162f-a2c90531c900',
        // Moonbeam
        1284: '161038da-44ae-4ec7-1208-0ea569454b00',
        // Moonriver
        1285: 'f1d73bb6-5450-4e18-38f7-fb6484264a00',
        // Zora
        7777777: '845c60df-d429-4991-e687-91ae45791600',
        // Celo
        42220: 'ab781bbc-ccc6-418d-d32d-789b15da1f00',
        // Base
        8453: '7289c336-3981-4081-c5f4-efc26ac64a00',
        // Aurora
        1313161554: '3ff73439-a619-4894-9262-4470c773a100',
        // Ronin Mainnet
        2020: 'b8101fc0-9c19-4b6f-ec65-f6dfff106e00',
        // Saigon Testnet (a.k.a. Ronin)
        2021: 'b8101fc0-9c19-4b6f-ec65-f6dfff106e00',
        // Berachain Mainnet
        80094: 'e329c2c9-59b0-4a02-83e4-212ff3779900',
        // Abstract Mainnet
        2741: 'fc2427d1-5af9-4a9c-8da5-6f94627cd900',
        // Solana networks
        '5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp': 'a1b58899-f671-4276-6a5e-56ca5bd59700',
        '4uhcVJyU9pJkvQyS88uRDiswHXSCkY3z': 'a1b58899-f671-4276-6a5e-56ca5bd59700',
        EtWTRABZaYq6iMfeYKouRu166VU2xqa1: 'a1b58899-f671-4276-6a5e-56ca5bd59700',
        // Bitcoin
        '000000000019d6689c085ae165831e93': '0b4838db-0161-4ffe-022d-532bf03dba00',
        // Bitcoin Testnet
        '000000000933ea01ad0ee984209779ba': '39354064-d79b-420b-065d-f980c4b78200',
        // Bitcoin Signet
        '00000008819873e925422c1ff0f99f7c': 'b3406e4a-bbfc-44fb-e3a6-89673c78b700'
    },
    ConnectorImageIds: {
        [__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].CONNECTOR_ID.COINBASE]: '0c2840c3-5b04-4c44-9661-fbd4b49e1800',
        [__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].CONNECTOR_ID.COINBASE_SDK]: '0c2840c3-5b04-4c44-9661-fbd4b49e1800',
        [__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].CONNECTOR_ID.BASE_ACCOUNT]: 'bba2c8be-7fd1-463e-42b1-796ecb0ad200',
        [__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].CONNECTOR_ID.SAFE]: '461db637-8616-43ce-035a-d89b8a1d5800',
        [__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].CONNECTOR_ID.LEDGER]: '54a1aa77-d202-4f8d-0fb2-5d2bb6db0300',
        [__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].CONNECTOR_ID.WALLET_CONNECT]: 'ef1a1fcf-7fe8-4d69-bd6d-fda1345b4400',
        [__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].CONNECTOR_ID.INJECTED]: '07ba87ed-43aa-4adf-4540-9e6a2b9cae00'
    },
    ConnectorNamesMap: {
        [__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].CONNECTOR_ID.INJECTED]: 'Browser Wallet',
        [__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].CONNECTOR_ID.WALLET_CONNECT]: 'WalletConnect',
        [__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].CONNECTOR_ID.COINBASE]: 'Coinbase',
        [__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].CONNECTOR_ID.COINBASE_SDK]: 'Coinbase',
        [__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].CONNECTOR_ID.BASE_ACCOUNT]: 'Base Account',
        [__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].CONNECTOR_ID.LEDGER]: 'Ledger',
        [__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].CONNECTOR_ID.SAFE]: 'Safe'
    },
    ConnectorTypesMap: {
        [__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].CONNECTOR_ID.INJECTED]: 'INJECTED',
        [__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].CONNECTOR_ID.WALLET_CONNECT]: 'WALLET_CONNECT',
        [__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].CONNECTOR_ID.EIP6963]: 'ANNOUNCED',
        [__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].CONNECTOR_ID.AUTH]: 'AUTH',
        [__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$dist$2f$esm$2f$src$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].CONNECTOR_TYPE_AUTH]: 'AUTH'
    },
    WalletConnectRpcChainIds: [
        // Ethereum
        1,
        // Ethereum Goerli
        5,
        // Ethereum Sepolia
        11155111,
        // Optimism
        10,
        // Optimism Goerli
        420,
        // Arbitrum
        42161,
        // Arbitrum Goerli
        421613,
        // Polygon
        137,
        // Polygon Mumbai
        80001,
        // Celo Mainnet
        42220,
        // Aurora
        1313161554,
        // Aurora Testnet
        1313161555,
        // Binance Smart Chain
        56,
        // Binance Smart Chain Testnet
        97,
        // Avalanche C-Chain
        43114,
        // Avalanche Fuji Testnet
        43113,
        // Gnosis Chain
        100,
        // Base
        8453,
        // Base Goerli
        84531,
        // Zora
        7777777,
        // Zora Goerli
        999,
        // ZkSync Era Mainnet
        324,
        // ZkSync Era Testnet
        280
    ]
}; //# sourceMappingURL=PresetsUtil.js.map
}),
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-utils/dist/esm/src/CaipNetworkUtil.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CaipNetworksUtil",
    ()=>CaipNetworksUtil,
    "getBlockchainApiRpcUrl",
    ()=>getBlockchainApiRpcUrl
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$transports$2f$fallback$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/viem/_esm/clients/transports/fallback.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$transports$2f$http$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/viem/_esm/clients/transports/http.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-common/dist/esm/src/utils/ConstantsUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ChainController.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$StorageUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-controllers/dist/esm/src/utils/StorageUtil.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$dist$2f$esm$2f$src$2f$PresetsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-utils/dist/esm/src/PresetsUtil.js [app-client] (ecmascript)");
;
;
;
;
const RPC_URL_HOST = 'rpc.walletconnect.org';
function getBlockchainApiRpcUrl(caipNetworkId, projectId) {
    const url = new URL('https://rpc.walletconnect.org/v1/');
    url.searchParams.set('chainId', caipNetworkId);
    url.searchParams.set('projectId', projectId);
    return url.toString();
}
const WC_HTTP_RPC_SUPPORTED_CHAINS = [
    'near:mainnet',
    'solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp',
    'eip155:1101',
    'eip155:56',
    'eip155:42161',
    'eip155:7777777',
    'eip155:59144',
    'eip155:324',
    'solana:EtWTRABZaYq6iMfeYKouRu166VU2xqa1',
    'eip155:5000',
    'solana:4sgjmw1sunhzsxgspuhpqldx6wiyjntz',
    'eip155:80084',
    'eip155:5003',
    'eip155:100',
    'eip155:8453',
    'eip155:42220',
    'eip155:1313161555',
    'eip155:17000',
    'eip155:1',
    'eip155:300',
    'eip155:1313161554',
    'eip155:1329',
    'eip155:84532',
    'eip155:421614',
    'eip155:11155111',
    'eip155:8217',
    'eip155:43114',
    'solana:4uhcVJyU9pJkvQyS88uRDiswHXSCkY3z',
    'eip155:999999999',
    'eip155:11155420',
    'eip155:80002',
    'eip155:97',
    'eip155:43113',
    'eip155:137',
    'eip155:10',
    'eip155:1301',
    'eip155:80094',
    'eip155:80069',
    'eip155:560048',
    'eip155:31',
    'eip155:2818',
    'eip155:57054',
    'eip155:911867',
    'eip155:534351',
    'eip155:1112',
    'eip155:534352',
    'eip155:1111',
    'eip155:146',
    'eip155:130',
    'eip155:1284',
    'eip155:30',
    'eip155:2810',
    'bip122:000000000019d6689c085ae165831e93',
    'bip122:000000000933ea01ad0ee984209779ba'
];
const CaipNetworksUtil = {
    /**
     * Extends the RPC URL with the project ID if the RPC URL is a Reown URL
     * @param rpcUrl - The RPC URL to extend
     * @param projectId - The project ID to extend the RPC URL with
     * @returns The extended RPC URL
     */ extendRpcUrlWithProjectId (rpcUrl, projectId) {
        let isReownUrl = false;
        try {
            const url = new URL(rpcUrl);
            isReownUrl = url.host === RPC_URL_HOST;
        } catch (e) {
            isReownUrl = false;
        }
        if (isReownUrl) {
            const url = new URL(rpcUrl);
            if (!url.searchParams.has('projectId')) {
                url.searchParams.set('projectId', projectId);
            }
            return url.toString();
        }
        return rpcUrl;
    },
    isCaipNetwork (network) {
        return 'chainNamespace' in network && 'caipNetworkId' in network;
    },
    getChainNamespace (network) {
        if (this.isCaipNetwork(network)) {
            return network.chainNamespace;
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].CHAIN.EVM;
    },
    getCaipNetworkId (network) {
        if (this.isCaipNetwork(network)) {
            return network.caipNetworkId;
        }
        return `${__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].CHAIN.EVM}:${network.id}`;
    },
    // eslint-disable-next-line max-params
    getDefaultRpcUrl (caipNetwork, caipNetworkId, projectId) {
        const defaultRpcUrl = caipNetwork.rpcUrls?.default?.http?.[0];
        if (WC_HTTP_RPC_SUPPORTED_CHAINS.includes(caipNetworkId)) {
            return getBlockchainApiRpcUrl(caipNetworkId, projectId);
        }
        return defaultRpcUrl || '';
    },
    /**
     * Extends the CaipNetwork object with the image ID and image URL if the image ID is not provided
     * @param params - The parameters object
     * @param params.caipNetwork - The CaipNetwork object to extend
     * @param params.networkImageIds - The network image IDs
     * @param params.customNetworkImageUrls - The custom network image URLs
     * @param params.projectId - The project ID
     * @param params.customRpc - Boolean to indicate if the custom RPC URL should be used
     * @param params.customRpcUrls - The map of chain and custom RPC URLs to be used by the AppKit
     * @returns The extended array of CaipNetwork objects
     */ extendCaipNetwork (caipNetwork, { customNetworkImageUrls, projectId, customRpcUrls }) {
        const chainNamespace = this.getChainNamespace(caipNetwork);
        const caipNetworkId = this.getCaipNetworkId(caipNetwork);
        const networkDefaultRpcUrl = caipNetwork.rpcUrls?.default?.http?.[0];
        const reownRpcUrl = this.getDefaultRpcUrl(caipNetwork, caipNetworkId, projectId);
        const chainDefaultRpcUrl = caipNetwork?.rpcUrls?.['chainDefault']?.http?.[0] || networkDefaultRpcUrl;
        const customRpcUrlsOfNetwork = customRpcUrls?.[caipNetworkId]?.map((i)=>i.url) || [];
        const rpcUrls = [
            ...customRpcUrlsOfNetwork,
            ...reownRpcUrl ? [
                reownRpcUrl
            ] : []
        ];
        const rpcUrlsWithoutReown = [
            ...customRpcUrlsOfNetwork
        ];
        if (chainDefaultRpcUrl && !rpcUrlsWithoutReown.includes(chainDefaultRpcUrl)) {
            rpcUrlsWithoutReown.push(chainDefaultRpcUrl);
        }
        return {
            ...caipNetwork,
            chainNamespace,
            caipNetworkId,
            assets: {
                imageId: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$dist$2f$esm$2f$src$2f$PresetsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PresetsUtil"].NetworkImageIds[caipNetwork.id],
                imageUrl: customNetworkImageUrls?.[caipNetwork.id]
            },
            rpcUrls: {
                ...caipNetwork.rpcUrls,
                default: {
                    http: rpcUrls
                },
                // Save the networks original RPC URL default
                chainDefault: {
                    http: rpcUrlsWithoutReown
                }
            }
        };
    },
    /**
     * Extends the array of CaipNetwork objects with the image ID and image URL if the image ID is not provided
     * @param caipNetworks - The array of CaipNetwork objects to extend
     * @param params - The parameters object
     * @param params.networkImageIds - The network image IDs
     * @param params.customNetworkImageUrls - The custom network image URLs
     * @param params.customRpcUrls - The map of chain and custom RPC URLs to be used by the AppKit
     * @param params.projectId - The project ID
     * @returns The extended array of CaipNetwork objects
     */ extendCaipNetworks (caipNetworks, { customNetworkImageUrls, projectId, customRpcUrls }) {
        return caipNetworks.map((caipNetwork)=>CaipNetworksUtil.extendCaipNetwork(caipNetwork, {
                customNetworkImageUrls,
                customRpcUrls,
                projectId
            }));
    },
    getViemTransport (caipNetwork, projectId, customRpcUrls) {
        const transports = [];
        // Add custom RPC URLs
        customRpcUrls?.forEach((rpcUrl)=>{
            transports.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$transports$2f$http$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["http"])(rpcUrl.url, rpcUrl.config));
        });
        // Add Reown RPC URL
        if (WC_HTTP_RPC_SUPPORTED_CHAINS.includes(caipNetwork.caipNetworkId)) {
            transports.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$transports$2f$http$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["http"])(getBlockchainApiRpcUrl(caipNetwork.caipNetworkId, projectId), {
                /*
                 * The Blockchain API uses "Content-Type: text/plain" to avoid OPTIONS preflight requests
                 * It will only work for viem >= 2.17.7
                 */ fetchOptions: {
                    headers: {
                        'Content-Type': 'text/plain'
                    }
                }
            }));
        }
        // Add original fallback transports
        caipNetwork?.rpcUrls?.default?.http?.forEach((rpcUrl)=>{
            transports.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$transports$2f$http$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["http"])(rpcUrl));
        });
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$transports$2f$fallback$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fallback"])(transports);
    },
    extendWagmiTransports (caipNetwork, projectId, transport) {
        if (WC_HTTP_RPC_SUPPORTED_CHAINS.includes(caipNetwork.caipNetworkId)) {
            const reownRpcUrl = this.getDefaultRpcUrl(caipNetwork, caipNetwork.caipNetworkId, projectId);
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$transports$2f$fallback$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fallback"])([
                transport,
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$transports$2f$http$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["http"])(reownRpcUrl)
            ]);
        }
        return transport;
    },
    /**
     * Generates the unsupported network object with the given CaipNetwork ID
     * @param caipNetworkId - The CAIP network ID
     * @returns The unsupported CAIP network object
     */ getUnsupportedNetwork (caipNetworkId) {
        return {
            id: caipNetworkId.split(':')[1],
            caipNetworkId,
            name: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConstantsUtil"].UNSUPPORTED_NETWORK_NAME,
            chainNamespace: caipNetworkId.split(':')[0],
            nativeCurrency: {
                name: '',
                decimals: 0,
                symbol: ''
            },
            rpcUrls: {
                default: {
                    http: []
                }
            }
        };
    },
    /**
     * Gets the CaipNetwork object from the storage if `@appkit/active_caip_network_id` is being set
     * @returns CaipNetwork or undefined
     */ getCaipNetworkFromStorage (defaultCaipNetwork) {
        const caipNetworkIdFromStorage = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$StorageUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StorageUtil"].getActiveCaipNetworkId();
        const caipNetworks = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].getAllRequestedCaipNetworks();
        const availableNamespaces = Array.from(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ChainController"].state.chains?.keys() || []);
        const namespace = caipNetworkIdFromStorage?.split(':')[0];
        const isNamespaceAvailable = namespace ? availableNamespaces.includes(namespace) : false;
        const caipNetwork = caipNetworks?.find((cn)=>cn.caipNetworkId === caipNetworkIdFromStorage);
        const isUnsupportedNetwork = isNamespaceAvailable && !caipNetwork && caipNetworkIdFromStorage;
        if (isUnsupportedNetwork) {
            return this.getUnsupportedNetwork(caipNetworkIdFromStorage);
        }
        if (caipNetwork) {
            return caipNetwork;
        }
        if (defaultCaipNetwork) {
            return defaultCaipNetwork;
        }
        return caipNetworks?.[0];
    }
}; //# sourceMappingURL=CaipNetworkUtil.js.map
}),
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-utils/dist/esm/src/LoggerUtil.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LoggerUtil",
    ()=>LoggerUtil
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$node_modules$2f40$walletconnect$2f$logger$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-utils/node_modules/@walletconnect/logger/dist/index.es.js [app-client] (ecmascript) <locals>");
;
const LoggerUtil = {
    createLogger (onError, level = 'error') {
        const loggerOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$node_modules$2f40$walletconnect$2f$logger$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getDefaultLoggerOptions"])({
            level
        });
        const { logger } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$node_modules$2f40$walletconnect$2f$logger$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["generatePlatformLogger"])({
            opts: loggerOptions
        });
        logger.error = (...args)=>{
            for (const arg of args){
                if (arg instanceof Error) {
                    onError(arg, ...args);
                    return;
                }
            }
            onError(undefined, ...args);
        };
        return logger;
    }
}; //# sourceMappingURL=LoggerUtil.js.map
}),
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-utils/dist/esm/src/TokenUtil.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TokenUtil",
    ()=>TokenUtil
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$ExchangeUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-controllers/dist/esm/src/utils/ExchangeUtil.js [app-client] (ecmascript)");
;
const TokenUtil = {
    TOKEN_ADDRESSES_BY_SYMBOL: {
        USDC: {
            8453: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$ExchangeUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["baseUSDC"].asset,
            84532: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$ExchangeUtil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["baseSepoliaUSDC"].asset
        }
    },
    getTokenSymbolByAddress (tokenAddress) {
        if (!tokenAddress) {
            return undefined;
        }
        const [symbol] = Object.entries(TokenUtil.TOKEN_ADDRESSES_BY_SYMBOL).find(([_, addressesByChain])=>Object.values(addressesByChain).includes(tokenAddress)) ?? [];
        return symbol;
    }
}; //# sourceMappingURL=TokenUtil.js.map
}),
]);

//# sourceMappingURL=89298_%40reown_21736721._.js.map