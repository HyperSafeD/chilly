module.exports = [
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-common/dist/esm/src/utils/ConstantsUtil.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ConstantsUtil",
    ()=>ConstantsUtil
]);
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
    SECURE_SITE_SDK_ORIGIN: (typeof process !== 'undefined' && typeof process.env !== 'undefined' ? process.env['NEXT_PUBLIC_SECURE_SITE_ORIGIN'] : undefined) || 'https://secure.walletconnect.org',
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
    IS_DEVELOPMENT: typeof process !== 'undefined' && ("TURBOPACK compile-time value", "development") === 'development',
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
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-common/dist/esm/src/utils/SafeLocalStorage.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
        if (isSafe() && value !== undefined) //TURBOPACK unreachable
        ;
    },
    getItem (key) {
        if (isSafe()) //TURBOPACK unreachable
        ;
        return undefined;
    },
    removeItem (key) {
        if (isSafe()) //TURBOPACK unreachable
        ;
    },
    clear () {
        if (isSafe()) //TURBOPACK unreachable
        ;
    }
};
function isSafe() {
    return ("TURBOPACK compile-time value", "undefined") !== 'undefined' && typeof localStorage !== 'undefined';
} //# sourceMappingURL=SafeLocalStorage.js.map
}),
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-common/dist/esm/src/utils/NetworkUtil.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AVAILABLE_NAMESPACES",
    ()=>AVAILABLE_NAMESPACES,
    "NetworkUtil",
    ()=>NetworkUtil
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-common/dist/esm/src/utils/ConstantsUtil.js [app-ssr] (ecmascript)");
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
        return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ConstantsUtil"].CHAIN_NAME_MAP?.[namespace] || undefined;
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
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-common/dist/esm/src/utils/ParseUtil.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-common/dist/esm/src/utils/ThemeUtil.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-common/dist/esm/src/utils/ErrorUtil.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-common/dist/esm/src/utils/NumberUtil.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NumberUtil",
    ()=>NumberUtil
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$big$2e$js$2f$big$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/big.js/big.mjs [app-ssr] (ecmascript)");
;
const NumberUtil = {
    bigNumber (value) {
        if (!value) {
            return new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$big$2e$js$2f$big$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](0);
        }
        return new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$big$2e$js$2f$big$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](value);
    },
    multiply (a, b) {
        if (a === undefined || b === undefined) {
            return new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$big$2e$js$2f$big$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](0);
        }
        const aBigNumber = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$big$2e$js$2f$big$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](a);
        const bBigNumber = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$big$2e$js$2f$big$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](b);
        return aBigNumber.times(bBigNumber);
    },
    toFixed (value, decimals = 2) {
        if (value === undefined || value === '') {
            return new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$big$2e$js$2f$big$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](0).toFixed(decimals);
        }
        return new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$big$2e$js$2f$big$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](value).toFixed(decimals);
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
        return new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$big$2e$js$2f$big$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](sanitizedValue).toNumber();
    }
}; //# sourceMappingURL=NumberUtil.js.map
}),
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-common/dist/esm/src/contracts/erc20.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-common/dist/esm/src/contracts/swap.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-common/dist/esm/src/contracts/usdt.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-common/dist/esm/src/utils/ContractUtil.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ContractUtil",
    ()=>ContractUtil
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$contracts$2f$erc20$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-common/dist/esm/src/contracts/erc20.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$contracts$2f$swap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-common/dist/esm/src/contracts/swap.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$contracts$2f$usdt$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-common/dist/esm/src/contracts/usdt.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-common/dist/esm/src/utils/ConstantsUtil.js [app-ssr] (ecmascript)");
;
;
;
;
const ContractUtil = {
    getERC20Abi: (tokenAddress)=>{
        if (__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ConstantsUtil"].USDT_CONTRACT_ADDRESSES.includes(tokenAddress)) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$contracts$2f$usdt$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usdtABI"];
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$contracts$2f$erc20$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["erc20ABI"];
    },
    getSwapAbi: ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$contracts$2f$swap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["swapABI"]
}; //# sourceMappingURL=ContractUtil.js.map
}),
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-common/dist/esm/src/utils/DateUtil.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DateUtil",
    ()=>DateUtil
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$dayjs$2f$dayjs$2e$min$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/dayjs/dayjs.min.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$dayjs$2f$locale$2f$en$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/dayjs/locale/en.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$dayjs$2f$plugin$2f$relativeTime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/dayjs/plugin/relativeTime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$dayjs$2f$plugin$2f$updateLocale$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/dayjs/plugin/updateLocale.js [app-ssr] (ecmascript)");
;
;
;
;
__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$dayjs$2f$dayjs$2e$min$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].extend(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$dayjs$2f$plugin$2f$relativeTime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]);
__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$dayjs$2f$dayjs$2e$min$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].extend(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$dayjs$2f$plugin$2f$updateLocale$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]);
const localeObject = {
    ...__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$dayjs$2f$locale$2f$en$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
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
__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$dayjs$2f$dayjs$2e$min$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].locale('en-web3-modal', localeObject);
const DateUtil = {
    getMonthNameByIndex (monthIndex) {
        return MONTH_NAMES[monthIndex];
    },
    getYear (date = new Date().toISOString()) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$dayjs$2f$dayjs$2e$min$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(date).year();
    },
    getRelativeDateFromNow (date) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$dayjs$2f$dayjs$2e$min$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(date).locale('en-web3-modal').fromNow(true);
    },
    formatDate (date, format = 'DD MMM') {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$dayjs$2f$dayjs$2e$min$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(date).format(format);
    }
}; //# sourceMappingURL=DateUtil.js.map
}),
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-common/dist/esm/src/utils/NavigationUtil.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-controllers/node_modules/on-exit-leak-free/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const refs = {
    exit: [],
    beforeExit: []
};
const functions = {
    exit: onExit,
    beforeExit: onBeforeExit
};
let registry;
function ensureRegistry() {
    if (registry === undefined) {
        registry = new FinalizationRegistry(clear);
    }
}
function install(event) {
    if (refs[event].length > 0) {
        return;
    }
    process.on(event, functions[event]);
}
function uninstall(event) {
    if (refs[event].length > 0) {
        return;
    }
    process.removeListener(event, functions[event]);
    if (refs.exit.length === 0 && refs.beforeExit.length === 0) {
        registry = undefined;
    }
}
function onExit() {
    callRefs('exit');
}
function onBeforeExit() {
    callRefs('beforeExit');
}
function callRefs(event) {
    for (const ref of refs[event]){
        const obj = ref.deref();
        const fn = ref.fn;
        // This should always happen, however GC is
        // undeterministic so it might not happen.
        /* istanbul ignore else */ if (obj !== undefined) {
            fn(obj, event);
        }
    }
    refs[event] = [];
}
function clear(ref) {
    for (const event of [
        'exit',
        'beforeExit'
    ]){
        const index = refs[event].indexOf(ref);
        refs[event].splice(index, index + 1);
        uninstall(event);
    }
}
function _register(event, obj, fn) {
    if (obj === undefined) {
        throw new Error('the object can\'t be undefined');
    }
    install(event);
    const ref = new WeakRef(obj);
    ref.fn = fn;
    ensureRegistry();
    registry.register(obj, ref);
    refs[event].push(ref);
}
function register(obj, fn) {
    _register('exit', obj, fn);
}
function registerBeforeExit(obj, fn) {
    _register('beforeExit', obj, fn);
}
function unregister(obj) {
    if (registry === undefined) {
        return;
    }
    registry.unregister(obj);
    for (const event of [
        'exit',
        'beforeExit'
    ]){
        refs[event] = refs[event].filter((ref)=>{
            const _obj = ref.deref();
            return _obj && _obj !== obj;
        });
        uninstall(event);
    }
}
module.exports = {
    register,
    registerBeforeExit,
    unregister
};
}),
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-wallet/node_modules/on-exit-leak-free/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const refs = {
    exit: [],
    beforeExit: []
};
const functions = {
    exit: onExit,
    beforeExit: onBeforeExit
};
let registry;
function ensureRegistry() {
    if (registry === undefined) {
        registry = new FinalizationRegistry(clear);
    }
}
function install(event) {
    if (refs[event].length > 0) {
        return;
    }
    process.on(event, functions[event]);
}
function uninstall(event) {
    if (refs[event].length > 0) {
        return;
    }
    process.removeListener(event, functions[event]);
    if (refs.exit.length === 0 && refs.beforeExit.length === 0) {
        registry = undefined;
    }
}
function onExit() {
    callRefs('exit');
}
function onBeforeExit() {
    callRefs('beforeExit');
}
function callRefs(event) {
    for (const ref of refs[event]){
        const obj = ref.deref();
        const fn = ref.fn;
        // This should always happen, however GC is
        // undeterministic so it might not happen.
        /* istanbul ignore else */ if (obj !== undefined) {
            fn(obj, event);
        }
    }
    refs[event] = [];
}
function clear(ref) {
    for (const event of [
        'exit',
        'beforeExit'
    ]){
        const index = refs[event].indexOf(ref);
        refs[event].splice(index, index + 1);
        uninstall(event);
    }
}
function _register(event, obj, fn) {
    if (obj === undefined) {
        throw new Error('the object can\'t be undefined');
    }
    install(event);
    const ref = new WeakRef(obj);
    ref.fn = fn;
    ensureRegistry();
    registry.register(obj, ref);
    refs[event].push(ref);
}
function register(obj, fn) {
    _register('exit', obj, fn);
}
function registerBeforeExit(obj, fn) {
    _register('beforeExit', obj, fn);
}
function unregister(obj) {
    if (registry === undefined) {
        return;
    }
    registry.unregister(obj);
    for (const event of [
        'exit',
        'beforeExit'
    ]){
        refs[event] = refs[event].filter((ref)=>{
            const _obj = ref.deref();
            return _obj && _obj !== obj;
        });
        uninstall(event);
    }
}
module.exports = {
    register,
    registerBeforeExit,
    unregister
};
}),
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit/node_modules/on-exit-leak-free/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const refs = {
    exit: [],
    beforeExit: []
};
const functions = {
    exit: onExit,
    beforeExit: onBeforeExit
};
let registry;
function ensureRegistry() {
    if (registry === undefined) {
        registry = new FinalizationRegistry(clear);
    }
}
function install(event) {
    if (refs[event].length > 0) {
        return;
    }
    process.on(event, functions[event]);
}
function uninstall(event) {
    if (refs[event].length > 0) {
        return;
    }
    process.removeListener(event, functions[event]);
    if (refs.exit.length === 0 && refs.beforeExit.length === 0) {
        registry = undefined;
    }
}
function onExit() {
    callRefs('exit');
}
function onBeforeExit() {
    callRefs('beforeExit');
}
function callRefs(event) {
    for (const ref of refs[event]){
        const obj = ref.deref();
        const fn = ref.fn;
        // This should always happen, however GC is
        // undeterministic so it might not happen.
        /* istanbul ignore else */ if (obj !== undefined) {
            fn(obj, event);
        }
    }
    refs[event] = [];
}
function clear(ref) {
    for (const event of [
        'exit',
        'beforeExit'
    ]){
        const index = refs[event].indexOf(ref);
        refs[event].splice(index, index + 1);
        uninstall(event);
    }
}
function _register(event, obj, fn) {
    if (obj === undefined) {
        throw new Error('the object can\'t be undefined');
    }
    install(event);
    const ref = new WeakRef(obj);
    ref.fn = fn;
    ensureRegistry();
    registry.register(obj, ref);
    refs[event].push(ref);
}
function register(obj, fn) {
    _register('exit', obj, fn);
}
function registerBeforeExit(obj, fn) {
    _register('beforeExit', obj, fn);
}
function unregister(obj) {
    if (registry === undefined) {
        return;
    }
    registry.unregister(obj);
    for (const event of [
        'exit',
        'beforeExit'
    ]){
        refs[event] = refs[event].filter((ref)=>{
            const _obj = ref.deref();
            return _obj && _obj !== obj;
        });
        uninstall(event);
    }
}
module.exports = {
    register,
    registerBeforeExit,
    unregister
};
}),
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-utils/node_modules/on-exit-leak-free/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const refs = {
    exit: [],
    beforeExit: []
};
const functions = {
    exit: onExit,
    beforeExit: onBeforeExit
};
let registry;
function ensureRegistry() {
    if (registry === undefined) {
        registry = new FinalizationRegistry(clear);
    }
}
function install(event) {
    if (refs[event].length > 0) {
        return;
    }
    process.on(event, functions[event]);
}
function uninstall(event) {
    if (refs[event].length > 0) {
        return;
    }
    process.removeListener(event, functions[event]);
    if (refs.exit.length === 0 && refs.beforeExit.length === 0) {
        registry = undefined;
    }
}
function onExit() {
    callRefs('exit');
}
function onBeforeExit() {
    callRefs('beforeExit');
}
function callRefs(event) {
    for (const ref of refs[event]){
        const obj = ref.deref();
        const fn = ref.fn;
        // This should always happen, however GC is
        // undeterministic so it might not happen.
        /* istanbul ignore else */ if (obj !== undefined) {
            fn(obj, event);
        }
    }
    refs[event] = [];
}
function clear(ref) {
    for (const event of [
        'exit',
        'beforeExit'
    ]){
        const index = refs[event].indexOf(ref);
        refs[event].splice(index, index + 1);
        uninstall(event);
    }
}
function _register(event, obj, fn) {
    if (obj === undefined) {
        throw new Error('the object can\'t be undefined');
    }
    install(event);
    const ref = new WeakRef(obj);
    ref.fn = fn;
    ensureRegistry();
    registry.register(obj, ref);
    refs[event].push(ref);
}
function register(obj, fn) {
    _register('exit', obj, fn);
}
function registerBeforeExit(obj, fn) {
    _register('beforeExit', obj, fn);
}
function unregister(obj) {
    if (registry === undefined) {
        return;
    }
    registry.unregister(obj);
    for (const event of [
        'exit',
        'beforeExit'
    ]){
        refs[event] = refs[event].filter((ref)=>{
            const _obj = ref.deref();
            return _obj && _obj !== obj;
        });
        uninstall(event);
    }
}
module.exports = {
    register,
    registerBeforeExit,
    unregister
};
}),
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-adapter-wagmi/node_modules/on-exit-leak-free/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const refs = {
    exit: [],
    beforeExit: []
};
const functions = {
    exit: onExit,
    beforeExit: onBeforeExit
};
let registry;
function ensureRegistry() {
    if (registry === undefined) {
        registry = new FinalizationRegistry(clear);
    }
}
function install(event) {
    if (refs[event].length > 0) {
        return;
    }
    process.on(event, functions[event]);
}
function uninstall(event) {
    if (refs[event].length > 0) {
        return;
    }
    process.removeListener(event, functions[event]);
    if (refs.exit.length === 0 && refs.beforeExit.length === 0) {
        registry = undefined;
    }
}
function onExit() {
    callRefs('exit');
}
function onBeforeExit() {
    callRefs('beforeExit');
}
function callRefs(event) {
    for (const ref of refs[event]){
        const obj = ref.deref();
        const fn = ref.fn;
        // This should always happen, however GC is
        // undeterministic so it might not happen.
        /* istanbul ignore else */ if (obj !== undefined) {
            fn(obj, event);
        }
    }
    refs[event] = [];
}
function clear(ref) {
    for (const event of [
        'exit',
        'beforeExit'
    ]){
        const index = refs[event].indexOf(ref);
        refs[event].splice(index, index + 1);
        uninstall(event);
    }
}
function _register(event, obj, fn) {
    if (obj === undefined) {
        throw new Error('the object can\'t be undefined');
    }
    install(event);
    const ref = new WeakRef(obj);
    ref.fn = fn;
    ensureRegistry();
    registry.register(obj, ref);
    refs[event].push(ref);
}
function register(obj, fn) {
    _register('exit', obj, fn);
}
function registerBeforeExit(obj, fn) {
    _register('beforeExit', obj, fn);
}
function unregister(obj) {
    if (registry === undefined) {
        return;
    }
    registry.unregister(obj);
    for (const event of [
        'exit',
        'beforeExit'
    ]){
        refs[event] = refs[event].filter((ref)=>{
            const _obj = ref.deref();
            return _obj && _obj !== obj;
        });
        uninstall(event);
    }
}
module.exports = {
    register,
    registerBeforeExit,
    unregister
};
}),
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-controllers/node_modules/thread-stream/package.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v({"name":"thread-stream","version":"3.1.0","description":"A streaming way to send data to a Node.js Worker Thread","main":"index.js","types":"index.d.ts","dependencies":{"real-require":"^0.2.0"},"devDependencies":{"@types/node":"^20.1.0","@types/tap":"^15.0.0","@yao-pkg/pkg":"^5.11.5","desm":"^1.3.0","fastbench":"^1.0.1","husky":"^9.0.6","pino-elasticsearch":"^8.0.0","sonic-boom":"^4.0.1","standard":"^17.0.0","tap":"^16.2.0","ts-node":"^10.8.0","typescript":"^5.3.2","why-is-node-running":"^2.2.2"},"scripts":{"build":"tsc --noEmit","test":"standard && npm run build && npm run transpile && tap \"test/**/*.test.*js\" && tap --ts test/*.test.*ts","test:ci":"standard && npm run transpile && npm run test:ci:js && npm run test:ci:ts","test:ci:js":"tap --no-check-coverage --timeout=120 --coverage-report=lcovonly \"test/**/*.test.*js\"","test:ci:ts":"tap --ts --no-check-coverage --coverage-report=lcovonly \"test/**/*.test.*ts\"","test:yarn":"npm run transpile && tap \"test/**/*.test.js\" --no-check-coverage","transpile":"sh ./test/ts/transpile.sh","prepare":"husky install"},"standard":{"ignore":["test/ts/**/*","test/syntax-error.mjs"]},"repository":{"type":"git","url":"git+https://github.com/mcollina/thread-stream.git"},"keywords":["worker","thread","threads","stream"],"author":"Matteo Collina <hello@matteocollina.com>","license":"MIT","bugs":{"url":"https://github.com/mcollina/thread-stream/issues"},"homepage":"https://github.com/mcollina/thread-stream#readme"});}),
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-controllers/node_modules/thread-stream/lib/wait.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const MAX_TIMEOUT = 1000;
function wait(state, index, expected, timeout, done) {
    const max = Date.now() + timeout;
    let current = Atomics.load(state, index);
    if (current === expected) {
        done(null, 'ok');
        return;
    }
    let prior = current;
    const check = (backoff)=>{
        if (Date.now() > max) {
            done(null, 'timed-out');
        } else {
            setTimeout(()=>{
                prior = current;
                current = Atomics.load(state, index);
                if (current === prior) {
                    check(backoff >= MAX_TIMEOUT ? MAX_TIMEOUT : backoff * 2);
                } else {
                    if (current === expected) done(null, 'ok');
                    else done(null, 'not-equal');
                }
            }, backoff);
        }
    };
    check(1);
}
// let waitDiffCount = 0
function waitDiff(state, index, expected, timeout, done) {
    // const id = waitDiffCount++
    // process._rawDebug(`>>> waitDiff ${id}`)
    const max = Date.now() + timeout;
    let current = Atomics.load(state, index);
    if (current !== expected) {
        done(null, 'ok');
        return;
    }
    const check = (backoff)=>{
        // process._rawDebug(`${id} ${index} current ${current} expected ${expected}`)
        // process._rawDebug('' + backoff)
        if (Date.now() > max) {
            done(null, 'timed-out');
        } else {
            setTimeout(()=>{
                current = Atomics.load(state, index);
                if (current !== expected) {
                    done(null, 'ok');
                } else {
                    check(backoff >= MAX_TIMEOUT ? MAX_TIMEOUT : backoff * 2);
                }
            }, backoff);
        }
    };
    check(1);
}
module.exports = {
    wait,
    waitDiff
};
}),
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-controllers/node_modules/thread-stream/lib/indexes.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const WRITE_INDEX = 4;
const READ_INDEX = 8;
module.exports = {
    WRITE_INDEX,
    READ_INDEX
};
}),
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-controllers/node_modules/thread-stream/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const { version } = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-controllers/node_modules/thread-stream/package.json (json)");
const { EventEmitter } = __turbopack_context__.r("[externals]/events [external] (events, cjs)");
const { Worker } = __turbopack_context__.r("[externals]/worker_threads [external] (worker_threads, cjs)");
const { join } = __turbopack_context__.r("[externals]/path [external] (path, cjs)");
const { pathToFileURL } = __turbopack_context__.r("[externals]/url [external] (url, cjs)");
const { wait } = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-controllers/node_modules/thread-stream/lib/wait.js [app-ssr] (ecmascript)");
const { WRITE_INDEX, READ_INDEX } = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-controllers/node_modules/thread-stream/lib/indexes.js [app-ssr] (ecmascript)");
const buffer = __turbopack_context__.r("[externals]/buffer [external] (buffer, cjs)");
const assert = __turbopack_context__.r("[externals]/assert [external] (assert, cjs)");
const kImpl = Symbol('kImpl');
// V8 limit for string size
const MAX_STRING = buffer.constants.MAX_STRING_LENGTH;
class FakeWeakRef {
    constructor(value){
        this._value = value;
    }
    deref() {
        return this._value;
    }
}
class FakeFinalizationRegistry {
    register() {}
    unregister() {}
}
// Currently using FinalizationRegistry with code coverage breaks the world
// Ref: https://github.com/nodejs/node/issues/49344
const FinalizationRegistry = process.env.NODE_V8_COVERAGE ? FakeFinalizationRegistry : /*TURBOPACK member replacement*/ __turbopack_context__.g.FinalizationRegistry || FakeFinalizationRegistry;
const WeakRef = process.env.NODE_V8_COVERAGE ? FakeWeakRef : /*TURBOPACK member replacement*/ __turbopack_context__.g.WeakRef || FakeWeakRef;
const registry = new FinalizationRegistry((worker)=>{
    if (worker.exited) {
        return;
    }
    worker.terminate();
});
function createWorker(stream, opts) {
    const { filename, workerData } = opts;
    const bundlerOverrides = '__bundlerPathsOverrides' in globalThis ? globalThis.__bundlerPathsOverrides : {};
    const toExecute = bundlerOverrides['thread-stream-worker'] || join(("TURBOPACK compile-time value", "/ROOT/Desktop/walletconnect/chilly/node_modules/@reown/appkit-controllers/node_modules/thread-stream"), 'lib', 'worker.js');
    const worker = new Worker(toExecute, {
        ...opts.workerOpts,
        trackUnmanagedFds: false,
        workerData: {
            filename: filename.indexOf('file://') === 0 ? filename : pathToFileURL(filename).href,
            dataBuf: stream[kImpl].dataBuf,
            stateBuf: stream[kImpl].stateBuf,
            workerData: {
                $context: {
                    threadStreamVersion: version
                },
                ...workerData
            }
        }
    });
    // We keep a strong reference for now,
    // we need to start writing first
    worker.stream = new FakeWeakRef(stream);
    worker.on('message', onWorkerMessage);
    worker.on('exit', onWorkerExit);
    registry.register(stream, worker);
    return worker;
}
function drain(stream) {
    assert(!stream[kImpl].sync);
    if (stream[kImpl].needDrain) {
        stream[kImpl].needDrain = false;
        stream.emit('drain');
    }
}
function nextFlush(stream) {
    const writeIndex = Atomics.load(stream[kImpl].state, WRITE_INDEX);
    let leftover = stream[kImpl].data.length - writeIndex;
    if (leftover > 0) {
        if (stream[kImpl].buf.length === 0) {
            stream[kImpl].flushing = false;
            if (stream[kImpl].ending) {
                end(stream);
            } else if (stream[kImpl].needDrain) {
                process.nextTick(drain, stream);
            }
            return;
        }
        let toWrite = stream[kImpl].buf.slice(0, leftover);
        let toWriteBytes = Buffer.byteLength(toWrite);
        if (toWriteBytes <= leftover) {
            stream[kImpl].buf = stream[kImpl].buf.slice(leftover);
            // process._rawDebug('writing ' + toWrite.length)
            write(stream, toWrite, nextFlush.bind(null, stream));
        } else {
            // multi-byte utf-8
            stream.flush(()=>{
                // err is already handled in flush()
                if (stream.destroyed) {
                    return;
                }
                Atomics.store(stream[kImpl].state, READ_INDEX, 0);
                Atomics.store(stream[kImpl].state, WRITE_INDEX, 0);
                // Find a toWrite length that fits the buffer
                // it must exists as the buffer is at least 4 bytes length
                // and the max utf-8 length for a char is 4 bytes.
                while(toWriteBytes > stream[kImpl].data.length){
                    leftover = leftover / 2;
                    toWrite = stream[kImpl].buf.slice(0, leftover);
                    toWriteBytes = Buffer.byteLength(toWrite);
                }
                stream[kImpl].buf = stream[kImpl].buf.slice(leftover);
                write(stream, toWrite, nextFlush.bind(null, stream));
            });
        }
    } else if (leftover === 0) {
        if (writeIndex === 0 && stream[kImpl].buf.length === 0) {
            // we had a flushSync in the meanwhile
            return;
        }
        stream.flush(()=>{
            Atomics.store(stream[kImpl].state, READ_INDEX, 0);
            Atomics.store(stream[kImpl].state, WRITE_INDEX, 0);
            nextFlush(stream);
        });
    } else {
        // This should never happen
        destroy(stream, new Error('overwritten'));
    }
}
function onWorkerMessage(msg) {
    const stream = this.stream.deref();
    if (stream === undefined) {
        this.exited = true;
        // Terminate the worker.
        this.terminate();
        return;
    }
    switch(msg.code){
        case 'READY':
            // Replace the FakeWeakRef with a
            // proper one.
            this.stream = new WeakRef(stream);
            stream.flush(()=>{
                stream[kImpl].ready = true;
                stream.emit('ready');
            });
            break;
        case 'ERROR':
            destroy(stream, msg.err);
            break;
        case 'EVENT':
            if (Array.isArray(msg.args)) {
                stream.emit(msg.name, ...msg.args);
            } else {
                stream.emit(msg.name, msg.args);
            }
            break;
        case 'WARNING':
            process.emitWarning(msg.err);
            break;
        default:
            destroy(stream, new Error('this should not happen: ' + msg.code));
    }
}
function onWorkerExit(code) {
    const stream = this.stream.deref();
    if (stream === undefined) {
        // Nothing to do, the worker already exit
        return;
    }
    registry.unregister(stream);
    stream.worker.exited = true;
    stream.worker.off('exit', onWorkerExit);
    destroy(stream, code !== 0 ? new Error('the worker thread exited') : null);
}
class ThreadStream extends EventEmitter {
    constructor(opts = {}){
        super();
        if (opts.bufferSize < 4) {
            throw new Error('bufferSize must at least fit a 4-byte utf-8 char');
        }
        this[kImpl] = {};
        this[kImpl].stateBuf = new SharedArrayBuffer(128);
        this[kImpl].state = new Int32Array(this[kImpl].stateBuf);
        this[kImpl].dataBuf = new SharedArrayBuffer(opts.bufferSize || 4 * 1024 * 1024);
        this[kImpl].data = Buffer.from(this[kImpl].dataBuf);
        this[kImpl].sync = opts.sync || false;
        this[kImpl].ending = false;
        this[kImpl].ended = false;
        this[kImpl].needDrain = false;
        this[kImpl].destroyed = false;
        this[kImpl].flushing = false;
        this[kImpl].ready = false;
        this[kImpl].finished = false;
        this[kImpl].errored = null;
        this[kImpl].closed = false;
        this[kImpl].buf = '';
        // TODO (fix): Make private?
        this.worker = createWorker(this, opts); // TODO (fix): make private
        this.on('message', (message, transferList)=>{
            this.worker.postMessage(message, transferList);
        });
    }
    write(data) {
        if (this[kImpl].destroyed) {
            error(this, new Error('the worker has exited'));
            return false;
        }
        if (this[kImpl].ending) {
            error(this, new Error('the worker is ending'));
            return false;
        }
        if (this[kImpl].flushing && this[kImpl].buf.length + data.length >= MAX_STRING) {
            try {
                writeSync(this);
                this[kImpl].flushing = true;
            } catch (err) {
                destroy(this, err);
                return false;
            }
        }
        this[kImpl].buf += data;
        if (this[kImpl].sync) {
            try {
                writeSync(this);
                return true;
            } catch (err) {
                destroy(this, err);
                return false;
            }
        }
        if (!this[kImpl].flushing) {
            this[kImpl].flushing = true;
            setImmediate(nextFlush, this);
        }
        this[kImpl].needDrain = this[kImpl].data.length - this[kImpl].buf.length - Atomics.load(this[kImpl].state, WRITE_INDEX) <= 0;
        return !this[kImpl].needDrain;
    }
    end() {
        if (this[kImpl].destroyed) {
            return;
        }
        this[kImpl].ending = true;
        end(this);
    }
    flush(cb) {
        if (this[kImpl].destroyed) {
            if (typeof cb === 'function') {
                process.nextTick(cb, new Error('the worker has exited'));
            }
            return;
        }
        // TODO write all .buf
        const writeIndex = Atomics.load(this[kImpl].state, WRITE_INDEX);
        // process._rawDebug(`(flush) readIndex (${Atomics.load(this.state, READ_INDEX)}) writeIndex (${Atomics.load(this.state, WRITE_INDEX)})`)
        wait(this[kImpl].state, READ_INDEX, writeIndex, Infinity, (err, res)=>{
            if (err) {
                destroy(this, err);
                process.nextTick(cb, err);
                return;
            }
            if (res === 'not-equal') {
                // TODO handle deadlock
                this.flush(cb);
                return;
            }
            process.nextTick(cb);
        });
    }
    flushSync() {
        if (this[kImpl].destroyed) {
            return;
        }
        writeSync(this);
        flushSync(this);
    }
    unref() {
        this.worker.unref();
    }
    ref() {
        this.worker.ref();
    }
    get ready() {
        return this[kImpl].ready;
    }
    get destroyed() {
        return this[kImpl].destroyed;
    }
    get closed() {
        return this[kImpl].closed;
    }
    get writable() {
        return !this[kImpl].destroyed && !this[kImpl].ending;
    }
    get writableEnded() {
        return this[kImpl].ending;
    }
    get writableFinished() {
        return this[kImpl].finished;
    }
    get writableNeedDrain() {
        return this[kImpl].needDrain;
    }
    get writableObjectMode() {
        return false;
    }
    get writableErrored() {
        return this[kImpl].errored;
    }
}
function error(stream, err) {
    setImmediate(()=>{
        stream.emit('error', err);
    });
}
function destroy(stream, err) {
    if (stream[kImpl].destroyed) {
        return;
    }
    stream[kImpl].destroyed = true;
    if (err) {
        stream[kImpl].errored = err;
        error(stream, err);
    }
    if (!stream.worker.exited) {
        stream.worker.terminate().catch(()=>{}).then(()=>{
            stream[kImpl].closed = true;
            stream.emit('close');
        });
    } else {
        setImmediate(()=>{
            stream[kImpl].closed = true;
            stream.emit('close');
        });
    }
}
function write(stream, data, cb) {
    // data is smaller than the shared buffer length
    const current = Atomics.load(stream[kImpl].state, WRITE_INDEX);
    const length = Buffer.byteLength(data);
    stream[kImpl].data.write(data, current);
    Atomics.store(stream[kImpl].state, WRITE_INDEX, current + length);
    Atomics.notify(stream[kImpl].state, WRITE_INDEX);
    cb();
    return true;
}
function end(stream) {
    if (stream[kImpl].ended || !stream[kImpl].ending || stream[kImpl].flushing) {
        return;
    }
    stream[kImpl].ended = true;
    try {
        stream.flushSync();
        let readIndex = Atomics.load(stream[kImpl].state, READ_INDEX);
        // process._rawDebug('writing index')
        Atomics.store(stream[kImpl].state, WRITE_INDEX, -1);
        // process._rawDebug(`(end) readIndex (${Atomics.load(stream.state, READ_INDEX)}) writeIndex (${Atomics.load(stream.state, WRITE_INDEX)})`)
        Atomics.notify(stream[kImpl].state, WRITE_INDEX);
        // Wait for the process to complete
        let spins = 0;
        while(readIndex !== -1){
            // process._rawDebug(`read = ${read}`)
            Atomics.wait(stream[kImpl].state, READ_INDEX, readIndex, 1000);
            readIndex = Atomics.load(stream[kImpl].state, READ_INDEX);
            if (readIndex === -2) {
                destroy(stream, new Error('end() failed'));
                return;
            }
            if (++spins === 10) {
                destroy(stream, new Error('end() took too long (10s)'));
                return;
            }
        }
        process.nextTick(()=>{
            stream[kImpl].finished = true;
            stream.emit('finish');
        });
    } catch (err) {
        destroy(stream, err);
    }
// process._rawDebug('end finished...')
}
function writeSync(stream) {
    const cb = ()=>{
        if (stream[kImpl].ending) {
            end(stream);
        } else if (stream[kImpl].needDrain) {
            process.nextTick(drain, stream);
        }
    };
    stream[kImpl].flushing = false;
    while(stream[kImpl].buf.length !== 0){
        const writeIndex = Atomics.load(stream[kImpl].state, WRITE_INDEX);
        let leftover = stream[kImpl].data.length - writeIndex;
        if (leftover === 0) {
            flushSync(stream);
            Atomics.store(stream[kImpl].state, READ_INDEX, 0);
            Atomics.store(stream[kImpl].state, WRITE_INDEX, 0);
            continue;
        } else if (leftover < 0) {
            // stream should never happen
            throw new Error('overwritten');
        }
        let toWrite = stream[kImpl].buf.slice(0, leftover);
        let toWriteBytes = Buffer.byteLength(toWrite);
        if (toWriteBytes <= leftover) {
            stream[kImpl].buf = stream[kImpl].buf.slice(leftover);
            // process._rawDebug('writing ' + toWrite.length)
            write(stream, toWrite, cb);
        } else {
            // multi-byte utf-8
            flushSync(stream);
            Atomics.store(stream[kImpl].state, READ_INDEX, 0);
            Atomics.store(stream[kImpl].state, WRITE_INDEX, 0);
            // Find a toWrite length that fits the buffer
            // it must exists as the buffer is at least 4 bytes length
            // and the max utf-8 length for a char is 4 bytes.
            while(toWriteBytes > stream[kImpl].buf.length){
                leftover = leftover / 2;
                toWrite = stream[kImpl].buf.slice(0, leftover);
                toWriteBytes = Buffer.byteLength(toWrite);
            }
            stream[kImpl].buf = stream[kImpl].buf.slice(leftover);
            write(stream, toWrite, cb);
        }
    }
}
function flushSync(stream) {
    if (stream[kImpl].flushing) {
        throw new Error('unable to flush while flushing');
    }
    // process._rawDebug('flushSync started')
    const writeIndex = Atomics.load(stream[kImpl].state, WRITE_INDEX);
    let spins = 0;
    // TODO handle deadlock
    while(true){
        const readIndex = Atomics.load(stream[kImpl].state, READ_INDEX);
        if (readIndex === -2) {
            throw Error('_flushSync failed');
        }
        // process._rawDebug(`(flushSync) readIndex (${readIndex}) writeIndex (${writeIndex})`)
        if (readIndex !== writeIndex) {
            // TODO stream timeouts for some reason.
            Atomics.wait(stream[kImpl].state, READ_INDEX, readIndex, 1000);
        } else {
            break;
        }
        if (++spins === 10) {
            throw new Error('_flushSync took too long (10s)');
        }
    }
// process._rawDebug('flushSync finished')
}
module.exports = ThreadStream;
}),
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-wallet/node_modules/thread-stream/package.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v({"name":"thread-stream","version":"3.1.0","description":"A streaming way to send data to a Node.js Worker Thread","main":"index.js","types":"index.d.ts","dependencies":{"real-require":"^0.2.0"},"devDependencies":{"@types/node":"^20.1.0","@types/tap":"^15.0.0","@yao-pkg/pkg":"^5.11.5","desm":"^1.3.0","fastbench":"^1.0.1","husky":"^9.0.6","pino-elasticsearch":"^8.0.0","sonic-boom":"^4.0.1","standard":"^17.0.0","tap":"^16.2.0","ts-node":"^10.8.0","typescript":"^5.3.2","why-is-node-running":"^2.2.2"},"scripts":{"build":"tsc --noEmit","test":"standard && npm run build && npm run transpile && tap \"test/**/*.test.*js\" && tap --ts test/*.test.*ts","test:ci":"standard && npm run transpile && npm run test:ci:js && npm run test:ci:ts","test:ci:js":"tap --no-check-coverage --timeout=120 --coverage-report=lcovonly \"test/**/*.test.*js\"","test:ci:ts":"tap --ts --no-check-coverage --coverage-report=lcovonly \"test/**/*.test.*ts\"","test:yarn":"npm run transpile && tap \"test/**/*.test.js\" --no-check-coverage","transpile":"sh ./test/ts/transpile.sh","prepare":"husky install"},"standard":{"ignore":["test/ts/**/*","test/syntax-error.mjs"]},"repository":{"type":"git","url":"git+https://github.com/mcollina/thread-stream.git"},"keywords":["worker","thread","threads","stream"],"author":"Matteo Collina <hello@matteocollina.com>","license":"MIT","bugs":{"url":"https://github.com/mcollina/thread-stream/issues"},"homepage":"https://github.com/mcollina/thread-stream#readme"});}),
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-wallet/node_modules/thread-stream/lib/wait.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const MAX_TIMEOUT = 1000;
function wait(state, index, expected, timeout, done) {
    const max = Date.now() + timeout;
    let current = Atomics.load(state, index);
    if (current === expected) {
        done(null, 'ok');
        return;
    }
    let prior = current;
    const check = (backoff)=>{
        if (Date.now() > max) {
            done(null, 'timed-out');
        } else {
            setTimeout(()=>{
                prior = current;
                current = Atomics.load(state, index);
                if (current === prior) {
                    check(backoff >= MAX_TIMEOUT ? MAX_TIMEOUT : backoff * 2);
                } else {
                    if (current === expected) done(null, 'ok');
                    else done(null, 'not-equal');
                }
            }, backoff);
        }
    };
    check(1);
}
// let waitDiffCount = 0
function waitDiff(state, index, expected, timeout, done) {
    // const id = waitDiffCount++
    // process._rawDebug(`>>> waitDiff ${id}`)
    const max = Date.now() + timeout;
    let current = Atomics.load(state, index);
    if (current !== expected) {
        done(null, 'ok');
        return;
    }
    const check = (backoff)=>{
        // process._rawDebug(`${id} ${index} current ${current} expected ${expected}`)
        // process._rawDebug('' + backoff)
        if (Date.now() > max) {
            done(null, 'timed-out');
        } else {
            setTimeout(()=>{
                current = Atomics.load(state, index);
                if (current !== expected) {
                    done(null, 'ok');
                } else {
                    check(backoff >= MAX_TIMEOUT ? MAX_TIMEOUT : backoff * 2);
                }
            }, backoff);
        }
    };
    check(1);
}
module.exports = {
    wait,
    waitDiff
};
}),
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-wallet/node_modules/thread-stream/lib/indexes.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const WRITE_INDEX = 4;
const READ_INDEX = 8;
module.exports = {
    WRITE_INDEX,
    READ_INDEX
};
}),
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-wallet/node_modules/thread-stream/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const { version } = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-wallet/node_modules/thread-stream/package.json (json)");
const { EventEmitter } = __turbopack_context__.r("[externals]/events [external] (events, cjs)");
const { Worker } = __turbopack_context__.r("[externals]/worker_threads [external] (worker_threads, cjs)");
const { join } = __turbopack_context__.r("[externals]/path [external] (path, cjs)");
const { pathToFileURL } = __turbopack_context__.r("[externals]/url [external] (url, cjs)");
const { wait } = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-wallet/node_modules/thread-stream/lib/wait.js [app-ssr] (ecmascript)");
const { WRITE_INDEX, READ_INDEX } = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-wallet/node_modules/thread-stream/lib/indexes.js [app-ssr] (ecmascript)");
const buffer = __turbopack_context__.r("[externals]/buffer [external] (buffer, cjs)");
const assert = __turbopack_context__.r("[externals]/assert [external] (assert, cjs)");
const kImpl = Symbol('kImpl');
// V8 limit for string size
const MAX_STRING = buffer.constants.MAX_STRING_LENGTH;
class FakeWeakRef {
    constructor(value){
        this._value = value;
    }
    deref() {
        return this._value;
    }
}
class FakeFinalizationRegistry {
    register() {}
    unregister() {}
}
// Currently using FinalizationRegistry with code coverage breaks the world
// Ref: https://github.com/nodejs/node/issues/49344
const FinalizationRegistry = process.env.NODE_V8_COVERAGE ? FakeFinalizationRegistry : /*TURBOPACK member replacement*/ __turbopack_context__.g.FinalizationRegistry || FakeFinalizationRegistry;
const WeakRef = process.env.NODE_V8_COVERAGE ? FakeWeakRef : /*TURBOPACK member replacement*/ __turbopack_context__.g.WeakRef || FakeWeakRef;
const registry = new FinalizationRegistry((worker)=>{
    if (worker.exited) {
        return;
    }
    worker.terminate();
});
function createWorker(stream, opts) {
    const { filename, workerData } = opts;
    const bundlerOverrides = '__bundlerPathsOverrides' in globalThis ? globalThis.__bundlerPathsOverrides : {};
    const toExecute = bundlerOverrides['thread-stream-worker'] || join(("TURBOPACK compile-time value", "/ROOT/Desktop/walletconnect/chilly/node_modules/@reown/appkit-wallet/node_modules/thread-stream"), 'lib', 'worker.js');
    const worker = new Worker(toExecute, {
        ...opts.workerOpts,
        trackUnmanagedFds: false,
        workerData: {
            filename: filename.indexOf('file://') === 0 ? filename : pathToFileURL(filename).href,
            dataBuf: stream[kImpl].dataBuf,
            stateBuf: stream[kImpl].stateBuf,
            workerData: {
                $context: {
                    threadStreamVersion: version
                },
                ...workerData
            }
        }
    });
    // We keep a strong reference for now,
    // we need to start writing first
    worker.stream = new FakeWeakRef(stream);
    worker.on('message', onWorkerMessage);
    worker.on('exit', onWorkerExit);
    registry.register(stream, worker);
    return worker;
}
function drain(stream) {
    assert(!stream[kImpl].sync);
    if (stream[kImpl].needDrain) {
        stream[kImpl].needDrain = false;
        stream.emit('drain');
    }
}
function nextFlush(stream) {
    const writeIndex = Atomics.load(stream[kImpl].state, WRITE_INDEX);
    let leftover = stream[kImpl].data.length - writeIndex;
    if (leftover > 0) {
        if (stream[kImpl].buf.length === 0) {
            stream[kImpl].flushing = false;
            if (stream[kImpl].ending) {
                end(stream);
            } else if (stream[kImpl].needDrain) {
                process.nextTick(drain, stream);
            }
            return;
        }
        let toWrite = stream[kImpl].buf.slice(0, leftover);
        let toWriteBytes = Buffer.byteLength(toWrite);
        if (toWriteBytes <= leftover) {
            stream[kImpl].buf = stream[kImpl].buf.slice(leftover);
            // process._rawDebug('writing ' + toWrite.length)
            write(stream, toWrite, nextFlush.bind(null, stream));
        } else {
            // multi-byte utf-8
            stream.flush(()=>{
                // err is already handled in flush()
                if (stream.destroyed) {
                    return;
                }
                Atomics.store(stream[kImpl].state, READ_INDEX, 0);
                Atomics.store(stream[kImpl].state, WRITE_INDEX, 0);
                // Find a toWrite length that fits the buffer
                // it must exists as the buffer is at least 4 bytes length
                // and the max utf-8 length for a char is 4 bytes.
                while(toWriteBytes > stream[kImpl].data.length){
                    leftover = leftover / 2;
                    toWrite = stream[kImpl].buf.slice(0, leftover);
                    toWriteBytes = Buffer.byteLength(toWrite);
                }
                stream[kImpl].buf = stream[kImpl].buf.slice(leftover);
                write(stream, toWrite, nextFlush.bind(null, stream));
            });
        }
    } else if (leftover === 0) {
        if (writeIndex === 0 && stream[kImpl].buf.length === 0) {
            // we had a flushSync in the meanwhile
            return;
        }
        stream.flush(()=>{
            Atomics.store(stream[kImpl].state, READ_INDEX, 0);
            Atomics.store(stream[kImpl].state, WRITE_INDEX, 0);
            nextFlush(stream);
        });
    } else {
        // This should never happen
        destroy(stream, new Error('overwritten'));
    }
}
function onWorkerMessage(msg) {
    const stream = this.stream.deref();
    if (stream === undefined) {
        this.exited = true;
        // Terminate the worker.
        this.terminate();
        return;
    }
    switch(msg.code){
        case 'READY':
            // Replace the FakeWeakRef with a
            // proper one.
            this.stream = new WeakRef(stream);
            stream.flush(()=>{
                stream[kImpl].ready = true;
                stream.emit('ready');
            });
            break;
        case 'ERROR':
            destroy(stream, msg.err);
            break;
        case 'EVENT':
            if (Array.isArray(msg.args)) {
                stream.emit(msg.name, ...msg.args);
            } else {
                stream.emit(msg.name, msg.args);
            }
            break;
        case 'WARNING':
            process.emitWarning(msg.err);
            break;
        default:
            destroy(stream, new Error('this should not happen: ' + msg.code));
    }
}
function onWorkerExit(code) {
    const stream = this.stream.deref();
    if (stream === undefined) {
        // Nothing to do, the worker already exit
        return;
    }
    registry.unregister(stream);
    stream.worker.exited = true;
    stream.worker.off('exit', onWorkerExit);
    destroy(stream, code !== 0 ? new Error('the worker thread exited') : null);
}
class ThreadStream extends EventEmitter {
    constructor(opts = {}){
        super();
        if (opts.bufferSize < 4) {
            throw new Error('bufferSize must at least fit a 4-byte utf-8 char');
        }
        this[kImpl] = {};
        this[kImpl].stateBuf = new SharedArrayBuffer(128);
        this[kImpl].state = new Int32Array(this[kImpl].stateBuf);
        this[kImpl].dataBuf = new SharedArrayBuffer(opts.bufferSize || 4 * 1024 * 1024);
        this[kImpl].data = Buffer.from(this[kImpl].dataBuf);
        this[kImpl].sync = opts.sync || false;
        this[kImpl].ending = false;
        this[kImpl].ended = false;
        this[kImpl].needDrain = false;
        this[kImpl].destroyed = false;
        this[kImpl].flushing = false;
        this[kImpl].ready = false;
        this[kImpl].finished = false;
        this[kImpl].errored = null;
        this[kImpl].closed = false;
        this[kImpl].buf = '';
        // TODO (fix): Make private?
        this.worker = createWorker(this, opts); // TODO (fix): make private
        this.on('message', (message, transferList)=>{
            this.worker.postMessage(message, transferList);
        });
    }
    write(data) {
        if (this[kImpl].destroyed) {
            error(this, new Error('the worker has exited'));
            return false;
        }
        if (this[kImpl].ending) {
            error(this, new Error('the worker is ending'));
            return false;
        }
        if (this[kImpl].flushing && this[kImpl].buf.length + data.length >= MAX_STRING) {
            try {
                writeSync(this);
                this[kImpl].flushing = true;
            } catch (err) {
                destroy(this, err);
                return false;
            }
        }
        this[kImpl].buf += data;
        if (this[kImpl].sync) {
            try {
                writeSync(this);
                return true;
            } catch (err) {
                destroy(this, err);
                return false;
            }
        }
        if (!this[kImpl].flushing) {
            this[kImpl].flushing = true;
            setImmediate(nextFlush, this);
        }
        this[kImpl].needDrain = this[kImpl].data.length - this[kImpl].buf.length - Atomics.load(this[kImpl].state, WRITE_INDEX) <= 0;
        return !this[kImpl].needDrain;
    }
    end() {
        if (this[kImpl].destroyed) {
            return;
        }
        this[kImpl].ending = true;
        end(this);
    }
    flush(cb) {
        if (this[kImpl].destroyed) {
            if (typeof cb === 'function') {
                process.nextTick(cb, new Error('the worker has exited'));
            }
            return;
        }
        // TODO write all .buf
        const writeIndex = Atomics.load(this[kImpl].state, WRITE_INDEX);
        // process._rawDebug(`(flush) readIndex (${Atomics.load(this.state, READ_INDEX)}) writeIndex (${Atomics.load(this.state, WRITE_INDEX)})`)
        wait(this[kImpl].state, READ_INDEX, writeIndex, Infinity, (err, res)=>{
            if (err) {
                destroy(this, err);
                process.nextTick(cb, err);
                return;
            }
            if (res === 'not-equal') {
                // TODO handle deadlock
                this.flush(cb);
                return;
            }
            process.nextTick(cb);
        });
    }
    flushSync() {
        if (this[kImpl].destroyed) {
            return;
        }
        writeSync(this);
        flushSync(this);
    }
    unref() {
        this.worker.unref();
    }
    ref() {
        this.worker.ref();
    }
    get ready() {
        return this[kImpl].ready;
    }
    get destroyed() {
        return this[kImpl].destroyed;
    }
    get closed() {
        return this[kImpl].closed;
    }
    get writable() {
        return !this[kImpl].destroyed && !this[kImpl].ending;
    }
    get writableEnded() {
        return this[kImpl].ending;
    }
    get writableFinished() {
        return this[kImpl].finished;
    }
    get writableNeedDrain() {
        return this[kImpl].needDrain;
    }
    get writableObjectMode() {
        return false;
    }
    get writableErrored() {
        return this[kImpl].errored;
    }
}
function error(stream, err) {
    setImmediate(()=>{
        stream.emit('error', err);
    });
}
function destroy(stream, err) {
    if (stream[kImpl].destroyed) {
        return;
    }
    stream[kImpl].destroyed = true;
    if (err) {
        stream[kImpl].errored = err;
        error(stream, err);
    }
    if (!stream.worker.exited) {
        stream.worker.terminate().catch(()=>{}).then(()=>{
            stream[kImpl].closed = true;
            stream.emit('close');
        });
    } else {
        setImmediate(()=>{
            stream[kImpl].closed = true;
            stream.emit('close');
        });
    }
}
function write(stream, data, cb) {
    // data is smaller than the shared buffer length
    const current = Atomics.load(stream[kImpl].state, WRITE_INDEX);
    const length = Buffer.byteLength(data);
    stream[kImpl].data.write(data, current);
    Atomics.store(stream[kImpl].state, WRITE_INDEX, current + length);
    Atomics.notify(stream[kImpl].state, WRITE_INDEX);
    cb();
    return true;
}
function end(stream) {
    if (stream[kImpl].ended || !stream[kImpl].ending || stream[kImpl].flushing) {
        return;
    }
    stream[kImpl].ended = true;
    try {
        stream.flushSync();
        let readIndex = Atomics.load(stream[kImpl].state, READ_INDEX);
        // process._rawDebug('writing index')
        Atomics.store(stream[kImpl].state, WRITE_INDEX, -1);
        // process._rawDebug(`(end) readIndex (${Atomics.load(stream.state, READ_INDEX)}) writeIndex (${Atomics.load(stream.state, WRITE_INDEX)})`)
        Atomics.notify(stream[kImpl].state, WRITE_INDEX);
        // Wait for the process to complete
        let spins = 0;
        while(readIndex !== -1){
            // process._rawDebug(`read = ${read}`)
            Atomics.wait(stream[kImpl].state, READ_INDEX, readIndex, 1000);
            readIndex = Atomics.load(stream[kImpl].state, READ_INDEX);
            if (readIndex === -2) {
                destroy(stream, new Error('end() failed'));
                return;
            }
            if (++spins === 10) {
                destroy(stream, new Error('end() took too long (10s)'));
                return;
            }
        }
        process.nextTick(()=>{
            stream[kImpl].finished = true;
            stream.emit('finish');
        });
    } catch (err) {
        destroy(stream, err);
    }
// process._rawDebug('end finished...')
}
function writeSync(stream) {
    const cb = ()=>{
        if (stream[kImpl].ending) {
            end(stream);
        } else if (stream[kImpl].needDrain) {
            process.nextTick(drain, stream);
        }
    };
    stream[kImpl].flushing = false;
    while(stream[kImpl].buf.length !== 0){
        const writeIndex = Atomics.load(stream[kImpl].state, WRITE_INDEX);
        let leftover = stream[kImpl].data.length - writeIndex;
        if (leftover === 0) {
            flushSync(stream);
            Atomics.store(stream[kImpl].state, READ_INDEX, 0);
            Atomics.store(stream[kImpl].state, WRITE_INDEX, 0);
            continue;
        } else if (leftover < 0) {
            // stream should never happen
            throw new Error('overwritten');
        }
        let toWrite = stream[kImpl].buf.slice(0, leftover);
        let toWriteBytes = Buffer.byteLength(toWrite);
        if (toWriteBytes <= leftover) {
            stream[kImpl].buf = stream[kImpl].buf.slice(leftover);
            // process._rawDebug('writing ' + toWrite.length)
            write(stream, toWrite, cb);
        } else {
            // multi-byte utf-8
            flushSync(stream);
            Atomics.store(stream[kImpl].state, READ_INDEX, 0);
            Atomics.store(stream[kImpl].state, WRITE_INDEX, 0);
            // Find a toWrite length that fits the buffer
            // it must exists as the buffer is at least 4 bytes length
            // and the max utf-8 length for a char is 4 bytes.
            while(toWriteBytes > stream[kImpl].buf.length){
                leftover = leftover / 2;
                toWrite = stream[kImpl].buf.slice(0, leftover);
                toWriteBytes = Buffer.byteLength(toWrite);
            }
            stream[kImpl].buf = stream[kImpl].buf.slice(leftover);
            write(stream, toWrite, cb);
        }
    }
}
function flushSync(stream) {
    if (stream[kImpl].flushing) {
        throw new Error('unable to flush while flushing');
    }
    // process._rawDebug('flushSync started')
    const writeIndex = Atomics.load(stream[kImpl].state, WRITE_INDEX);
    let spins = 0;
    // TODO handle deadlock
    while(true){
        const readIndex = Atomics.load(stream[kImpl].state, READ_INDEX);
        if (readIndex === -2) {
            throw Error('_flushSync failed');
        }
        // process._rawDebug(`(flushSync) readIndex (${readIndex}) writeIndex (${writeIndex})`)
        if (readIndex !== writeIndex) {
            // TODO stream timeouts for some reason.
            Atomics.wait(stream[kImpl].state, READ_INDEX, readIndex, 1000);
        } else {
            break;
        }
        if (++spins === 10) {
            throw new Error('_flushSync took too long (10s)');
        }
    }
// process._rawDebug('flushSync finished')
}
module.exports = ThreadStream;
}),
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit/node_modules/thread-stream/package.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v({"name":"thread-stream","version":"3.1.0","description":"A streaming way to send data to a Node.js Worker Thread","main":"index.js","types":"index.d.ts","dependencies":{"real-require":"^0.2.0"},"devDependencies":{"@types/node":"^20.1.0","@types/tap":"^15.0.0","@yao-pkg/pkg":"^5.11.5","desm":"^1.3.0","fastbench":"^1.0.1","husky":"^9.0.6","pino-elasticsearch":"^8.0.0","sonic-boom":"^4.0.1","standard":"^17.0.0","tap":"^16.2.0","ts-node":"^10.8.0","typescript":"^5.3.2","why-is-node-running":"^2.2.2"},"scripts":{"build":"tsc --noEmit","test":"standard && npm run build && npm run transpile && tap \"test/**/*.test.*js\" && tap --ts test/*.test.*ts","test:ci":"standard && npm run transpile && npm run test:ci:js && npm run test:ci:ts","test:ci:js":"tap --no-check-coverage --timeout=120 --coverage-report=lcovonly \"test/**/*.test.*js\"","test:ci:ts":"tap --ts --no-check-coverage --coverage-report=lcovonly \"test/**/*.test.*ts\"","test:yarn":"npm run transpile && tap \"test/**/*.test.js\" --no-check-coverage","transpile":"sh ./test/ts/transpile.sh","prepare":"husky install"},"standard":{"ignore":["test/ts/**/*","test/syntax-error.mjs"]},"repository":{"type":"git","url":"git+https://github.com/mcollina/thread-stream.git"},"keywords":["worker","thread","threads","stream"],"author":"Matteo Collina <hello@matteocollina.com>","license":"MIT","bugs":{"url":"https://github.com/mcollina/thread-stream/issues"},"homepage":"https://github.com/mcollina/thread-stream#readme"});}),
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit/node_modules/thread-stream/lib/wait.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const MAX_TIMEOUT = 1000;
function wait(state, index, expected, timeout, done) {
    const max = Date.now() + timeout;
    let current = Atomics.load(state, index);
    if (current === expected) {
        done(null, 'ok');
        return;
    }
    let prior = current;
    const check = (backoff)=>{
        if (Date.now() > max) {
            done(null, 'timed-out');
        } else {
            setTimeout(()=>{
                prior = current;
                current = Atomics.load(state, index);
                if (current === prior) {
                    check(backoff >= MAX_TIMEOUT ? MAX_TIMEOUT : backoff * 2);
                } else {
                    if (current === expected) done(null, 'ok');
                    else done(null, 'not-equal');
                }
            }, backoff);
        }
    };
    check(1);
}
// let waitDiffCount = 0
function waitDiff(state, index, expected, timeout, done) {
    // const id = waitDiffCount++
    // process._rawDebug(`>>> waitDiff ${id}`)
    const max = Date.now() + timeout;
    let current = Atomics.load(state, index);
    if (current !== expected) {
        done(null, 'ok');
        return;
    }
    const check = (backoff)=>{
        // process._rawDebug(`${id} ${index} current ${current} expected ${expected}`)
        // process._rawDebug('' + backoff)
        if (Date.now() > max) {
            done(null, 'timed-out');
        } else {
            setTimeout(()=>{
                current = Atomics.load(state, index);
                if (current !== expected) {
                    done(null, 'ok');
                } else {
                    check(backoff >= MAX_TIMEOUT ? MAX_TIMEOUT : backoff * 2);
                }
            }, backoff);
        }
    };
    check(1);
}
module.exports = {
    wait,
    waitDiff
};
}),
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit/node_modules/thread-stream/lib/indexes.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const WRITE_INDEX = 4;
const READ_INDEX = 8;
module.exports = {
    WRITE_INDEX,
    READ_INDEX
};
}),
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit/node_modules/thread-stream/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const { version } = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit/node_modules/thread-stream/package.json (json)");
const { EventEmitter } = __turbopack_context__.r("[externals]/events [external] (events, cjs)");
const { Worker } = __turbopack_context__.r("[externals]/worker_threads [external] (worker_threads, cjs)");
const { join } = __turbopack_context__.r("[externals]/path [external] (path, cjs)");
const { pathToFileURL } = __turbopack_context__.r("[externals]/url [external] (url, cjs)");
const { wait } = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit/node_modules/thread-stream/lib/wait.js [app-ssr] (ecmascript)");
const { WRITE_INDEX, READ_INDEX } = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit/node_modules/thread-stream/lib/indexes.js [app-ssr] (ecmascript)");
const buffer = __turbopack_context__.r("[externals]/buffer [external] (buffer, cjs)");
const assert = __turbopack_context__.r("[externals]/assert [external] (assert, cjs)");
const kImpl = Symbol('kImpl');
// V8 limit for string size
const MAX_STRING = buffer.constants.MAX_STRING_LENGTH;
class FakeWeakRef {
    constructor(value){
        this._value = value;
    }
    deref() {
        return this._value;
    }
}
class FakeFinalizationRegistry {
    register() {}
    unregister() {}
}
// Currently using FinalizationRegistry with code coverage breaks the world
// Ref: https://github.com/nodejs/node/issues/49344
const FinalizationRegistry = process.env.NODE_V8_COVERAGE ? FakeFinalizationRegistry : /*TURBOPACK member replacement*/ __turbopack_context__.g.FinalizationRegistry || FakeFinalizationRegistry;
const WeakRef = process.env.NODE_V8_COVERAGE ? FakeWeakRef : /*TURBOPACK member replacement*/ __turbopack_context__.g.WeakRef || FakeWeakRef;
const registry = new FinalizationRegistry((worker)=>{
    if (worker.exited) {
        return;
    }
    worker.terminate();
});
function createWorker(stream, opts) {
    const { filename, workerData } = opts;
    const bundlerOverrides = '__bundlerPathsOverrides' in globalThis ? globalThis.__bundlerPathsOverrides : {};
    const toExecute = bundlerOverrides['thread-stream-worker'] || join(("TURBOPACK compile-time value", "/ROOT/Desktop/walletconnect/chilly/node_modules/@reown/appkit/node_modules/thread-stream"), 'lib', 'worker.js');
    const worker = new Worker(toExecute, {
        ...opts.workerOpts,
        trackUnmanagedFds: false,
        workerData: {
            filename: filename.indexOf('file://') === 0 ? filename : pathToFileURL(filename).href,
            dataBuf: stream[kImpl].dataBuf,
            stateBuf: stream[kImpl].stateBuf,
            workerData: {
                $context: {
                    threadStreamVersion: version
                },
                ...workerData
            }
        }
    });
    // We keep a strong reference for now,
    // we need to start writing first
    worker.stream = new FakeWeakRef(stream);
    worker.on('message', onWorkerMessage);
    worker.on('exit', onWorkerExit);
    registry.register(stream, worker);
    return worker;
}
function drain(stream) {
    assert(!stream[kImpl].sync);
    if (stream[kImpl].needDrain) {
        stream[kImpl].needDrain = false;
        stream.emit('drain');
    }
}
function nextFlush(stream) {
    const writeIndex = Atomics.load(stream[kImpl].state, WRITE_INDEX);
    let leftover = stream[kImpl].data.length - writeIndex;
    if (leftover > 0) {
        if (stream[kImpl].buf.length === 0) {
            stream[kImpl].flushing = false;
            if (stream[kImpl].ending) {
                end(stream);
            } else if (stream[kImpl].needDrain) {
                process.nextTick(drain, stream);
            }
            return;
        }
        let toWrite = stream[kImpl].buf.slice(0, leftover);
        let toWriteBytes = Buffer.byteLength(toWrite);
        if (toWriteBytes <= leftover) {
            stream[kImpl].buf = stream[kImpl].buf.slice(leftover);
            // process._rawDebug('writing ' + toWrite.length)
            write(stream, toWrite, nextFlush.bind(null, stream));
        } else {
            // multi-byte utf-8
            stream.flush(()=>{
                // err is already handled in flush()
                if (stream.destroyed) {
                    return;
                }
                Atomics.store(stream[kImpl].state, READ_INDEX, 0);
                Atomics.store(stream[kImpl].state, WRITE_INDEX, 0);
                // Find a toWrite length that fits the buffer
                // it must exists as the buffer is at least 4 bytes length
                // and the max utf-8 length for a char is 4 bytes.
                while(toWriteBytes > stream[kImpl].data.length){
                    leftover = leftover / 2;
                    toWrite = stream[kImpl].buf.slice(0, leftover);
                    toWriteBytes = Buffer.byteLength(toWrite);
                }
                stream[kImpl].buf = stream[kImpl].buf.slice(leftover);
                write(stream, toWrite, nextFlush.bind(null, stream));
            });
        }
    } else if (leftover === 0) {
        if (writeIndex === 0 && stream[kImpl].buf.length === 0) {
            // we had a flushSync in the meanwhile
            return;
        }
        stream.flush(()=>{
            Atomics.store(stream[kImpl].state, READ_INDEX, 0);
            Atomics.store(stream[kImpl].state, WRITE_INDEX, 0);
            nextFlush(stream);
        });
    } else {
        // This should never happen
        destroy(stream, new Error('overwritten'));
    }
}
function onWorkerMessage(msg) {
    const stream = this.stream.deref();
    if (stream === undefined) {
        this.exited = true;
        // Terminate the worker.
        this.terminate();
        return;
    }
    switch(msg.code){
        case 'READY':
            // Replace the FakeWeakRef with a
            // proper one.
            this.stream = new WeakRef(stream);
            stream.flush(()=>{
                stream[kImpl].ready = true;
                stream.emit('ready');
            });
            break;
        case 'ERROR':
            destroy(stream, msg.err);
            break;
        case 'EVENT':
            if (Array.isArray(msg.args)) {
                stream.emit(msg.name, ...msg.args);
            } else {
                stream.emit(msg.name, msg.args);
            }
            break;
        case 'WARNING':
            process.emitWarning(msg.err);
            break;
        default:
            destroy(stream, new Error('this should not happen: ' + msg.code));
    }
}
function onWorkerExit(code) {
    const stream = this.stream.deref();
    if (stream === undefined) {
        // Nothing to do, the worker already exit
        return;
    }
    registry.unregister(stream);
    stream.worker.exited = true;
    stream.worker.off('exit', onWorkerExit);
    destroy(stream, code !== 0 ? new Error('the worker thread exited') : null);
}
class ThreadStream extends EventEmitter {
    constructor(opts = {}){
        super();
        if (opts.bufferSize < 4) {
            throw new Error('bufferSize must at least fit a 4-byte utf-8 char');
        }
        this[kImpl] = {};
        this[kImpl].stateBuf = new SharedArrayBuffer(128);
        this[kImpl].state = new Int32Array(this[kImpl].stateBuf);
        this[kImpl].dataBuf = new SharedArrayBuffer(opts.bufferSize || 4 * 1024 * 1024);
        this[kImpl].data = Buffer.from(this[kImpl].dataBuf);
        this[kImpl].sync = opts.sync || false;
        this[kImpl].ending = false;
        this[kImpl].ended = false;
        this[kImpl].needDrain = false;
        this[kImpl].destroyed = false;
        this[kImpl].flushing = false;
        this[kImpl].ready = false;
        this[kImpl].finished = false;
        this[kImpl].errored = null;
        this[kImpl].closed = false;
        this[kImpl].buf = '';
        // TODO (fix): Make private?
        this.worker = createWorker(this, opts); // TODO (fix): make private
        this.on('message', (message, transferList)=>{
            this.worker.postMessage(message, transferList);
        });
    }
    write(data) {
        if (this[kImpl].destroyed) {
            error(this, new Error('the worker has exited'));
            return false;
        }
        if (this[kImpl].ending) {
            error(this, new Error('the worker is ending'));
            return false;
        }
        if (this[kImpl].flushing && this[kImpl].buf.length + data.length >= MAX_STRING) {
            try {
                writeSync(this);
                this[kImpl].flushing = true;
            } catch (err) {
                destroy(this, err);
                return false;
            }
        }
        this[kImpl].buf += data;
        if (this[kImpl].sync) {
            try {
                writeSync(this);
                return true;
            } catch (err) {
                destroy(this, err);
                return false;
            }
        }
        if (!this[kImpl].flushing) {
            this[kImpl].flushing = true;
            setImmediate(nextFlush, this);
        }
        this[kImpl].needDrain = this[kImpl].data.length - this[kImpl].buf.length - Atomics.load(this[kImpl].state, WRITE_INDEX) <= 0;
        return !this[kImpl].needDrain;
    }
    end() {
        if (this[kImpl].destroyed) {
            return;
        }
        this[kImpl].ending = true;
        end(this);
    }
    flush(cb) {
        if (this[kImpl].destroyed) {
            if (typeof cb === 'function') {
                process.nextTick(cb, new Error('the worker has exited'));
            }
            return;
        }
        // TODO write all .buf
        const writeIndex = Atomics.load(this[kImpl].state, WRITE_INDEX);
        // process._rawDebug(`(flush) readIndex (${Atomics.load(this.state, READ_INDEX)}) writeIndex (${Atomics.load(this.state, WRITE_INDEX)})`)
        wait(this[kImpl].state, READ_INDEX, writeIndex, Infinity, (err, res)=>{
            if (err) {
                destroy(this, err);
                process.nextTick(cb, err);
                return;
            }
            if (res === 'not-equal') {
                // TODO handle deadlock
                this.flush(cb);
                return;
            }
            process.nextTick(cb);
        });
    }
    flushSync() {
        if (this[kImpl].destroyed) {
            return;
        }
        writeSync(this);
        flushSync(this);
    }
    unref() {
        this.worker.unref();
    }
    ref() {
        this.worker.ref();
    }
    get ready() {
        return this[kImpl].ready;
    }
    get destroyed() {
        return this[kImpl].destroyed;
    }
    get closed() {
        return this[kImpl].closed;
    }
    get writable() {
        return !this[kImpl].destroyed && !this[kImpl].ending;
    }
    get writableEnded() {
        return this[kImpl].ending;
    }
    get writableFinished() {
        return this[kImpl].finished;
    }
    get writableNeedDrain() {
        return this[kImpl].needDrain;
    }
    get writableObjectMode() {
        return false;
    }
    get writableErrored() {
        return this[kImpl].errored;
    }
}
function error(stream, err) {
    setImmediate(()=>{
        stream.emit('error', err);
    });
}
function destroy(stream, err) {
    if (stream[kImpl].destroyed) {
        return;
    }
    stream[kImpl].destroyed = true;
    if (err) {
        stream[kImpl].errored = err;
        error(stream, err);
    }
    if (!stream.worker.exited) {
        stream.worker.terminate().catch(()=>{}).then(()=>{
            stream[kImpl].closed = true;
            stream.emit('close');
        });
    } else {
        setImmediate(()=>{
            stream[kImpl].closed = true;
            stream.emit('close');
        });
    }
}
function write(stream, data, cb) {
    // data is smaller than the shared buffer length
    const current = Atomics.load(stream[kImpl].state, WRITE_INDEX);
    const length = Buffer.byteLength(data);
    stream[kImpl].data.write(data, current);
    Atomics.store(stream[kImpl].state, WRITE_INDEX, current + length);
    Atomics.notify(stream[kImpl].state, WRITE_INDEX);
    cb();
    return true;
}
function end(stream) {
    if (stream[kImpl].ended || !stream[kImpl].ending || stream[kImpl].flushing) {
        return;
    }
    stream[kImpl].ended = true;
    try {
        stream.flushSync();
        let readIndex = Atomics.load(stream[kImpl].state, READ_INDEX);
        // process._rawDebug('writing index')
        Atomics.store(stream[kImpl].state, WRITE_INDEX, -1);
        // process._rawDebug(`(end) readIndex (${Atomics.load(stream.state, READ_INDEX)}) writeIndex (${Atomics.load(stream.state, WRITE_INDEX)})`)
        Atomics.notify(stream[kImpl].state, WRITE_INDEX);
        // Wait for the process to complete
        let spins = 0;
        while(readIndex !== -1){
            // process._rawDebug(`read = ${read}`)
            Atomics.wait(stream[kImpl].state, READ_INDEX, readIndex, 1000);
            readIndex = Atomics.load(stream[kImpl].state, READ_INDEX);
            if (readIndex === -2) {
                destroy(stream, new Error('end() failed'));
                return;
            }
            if (++spins === 10) {
                destroy(stream, new Error('end() took too long (10s)'));
                return;
            }
        }
        process.nextTick(()=>{
            stream[kImpl].finished = true;
            stream.emit('finish');
        });
    } catch (err) {
        destroy(stream, err);
    }
// process._rawDebug('end finished...')
}
function writeSync(stream) {
    const cb = ()=>{
        if (stream[kImpl].ending) {
            end(stream);
        } else if (stream[kImpl].needDrain) {
            process.nextTick(drain, stream);
        }
    };
    stream[kImpl].flushing = false;
    while(stream[kImpl].buf.length !== 0){
        const writeIndex = Atomics.load(stream[kImpl].state, WRITE_INDEX);
        let leftover = stream[kImpl].data.length - writeIndex;
        if (leftover === 0) {
            flushSync(stream);
            Atomics.store(stream[kImpl].state, READ_INDEX, 0);
            Atomics.store(stream[kImpl].state, WRITE_INDEX, 0);
            continue;
        } else if (leftover < 0) {
            // stream should never happen
            throw new Error('overwritten');
        }
        let toWrite = stream[kImpl].buf.slice(0, leftover);
        let toWriteBytes = Buffer.byteLength(toWrite);
        if (toWriteBytes <= leftover) {
            stream[kImpl].buf = stream[kImpl].buf.slice(leftover);
            // process._rawDebug('writing ' + toWrite.length)
            write(stream, toWrite, cb);
        } else {
            // multi-byte utf-8
            flushSync(stream);
            Atomics.store(stream[kImpl].state, READ_INDEX, 0);
            Atomics.store(stream[kImpl].state, WRITE_INDEX, 0);
            // Find a toWrite length that fits the buffer
            // it must exists as the buffer is at least 4 bytes length
            // and the max utf-8 length for a char is 4 bytes.
            while(toWriteBytes > stream[kImpl].buf.length){
                leftover = leftover / 2;
                toWrite = stream[kImpl].buf.slice(0, leftover);
                toWriteBytes = Buffer.byteLength(toWrite);
            }
            stream[kImpl].buf = stream[kImpl].buf.slice(leftover);
            write(stream, toWrite, cb);
        }
    }
}
function flushSync(stream) {
    if (stream[kImpl].flushing) {
        throw new Error('unable to flush while flushing');
    }
    // process._rawDebug('flushSync started')
    const writeIndex = Atomics.load(stream[kImpl].state, WRITE_INDEX);
    let spins = 0;
    // TODO handle deadlock
    while(true){
        const readIndex = Atomics.load(stream[kImpl].state, READ_INDEX);
        if (readIndex === -2) {
            throw Error('_flushSync failed');
        }
        // process._rawDebug(`(flushSync) readIndex (${readIndex}) writeIndex (${writeIndex})`)
        if (readIndex !== writeIndex) {
            // TODO stream timeouts for some reason.
            Atomics.wait(stream[kImpl].state, READ_INDEX, readIndex, 1000);
        } else {
            break;
        }
        if (++spins === 10) {
            throw new Error('_flushSync took too long (10s)');
        }
    }
// process._rawDebug('flushSync finished')
}
module.exports = ThreadStream;
}),
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-utils/node_modules/thread-stream/package.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v({"name":"thread-stream","version":"3.1.0","description":"A streaming way to send data to a Node.js Worker Thread","main":"index.js","types":"index.d.ts","dependencies":{"real-require":"^0.2.0"},"devDependencies":{"@types/node":"^20.1.0","@types/tap":"^15.0.0","@yao-pkg/pkg":"^5.11.5","desm":"^1.3.0","fastbench":"^1.0.1","husky":"^9.0.6","pino-elasticsearch":"^8.0.0","sonic-boom":"^4.0.1","standard":"^17.0.0","tap":"^16.2.0","ts-node":"^10.8.0","typescript":"^5.3.2","why-is-node-running":"^2.2.2"},"scripts":{"build":"tsc --noEmit","test":"standard && npm run build && npm run transpile && tap \"test/**/*.test.*js\" && tap --ts test/*.test.*ts","test:ci":"standard && npm run transpile && npm run test:ci:js && npm run test:ci:ts","test:ci:js":"tap --no-check-coverage --timeout=120 --coverage-report=lcovonly \"test/**/*.test.*js\"","test:ci:ts":"tap --ts --no-check-coverage --coverage-report=lcovonly \"test/**/*.test.*ts\"","test:yarn":"npm run transpile && tap \"test/**/*.test.js\" --no-check-coverage","transpile":"sh ./test/ts/transpile.sh","prepare":"husky install"},"standard":{"ignore":["test/ts/**/*","test/syntax-error.mjs"]},"repository":{"type":"git","url":"git+https://github.com/mcollina/thread-stream.git"},"keywords":["worker","thread","threads","stream"],"author":"Matteo Collina <hello@matteocollina.com>","license":"MIT","bugs":{"url":"https://github.com/mcollina/thread-stream/issues"},"homepage":"https://github.com/mcollina/thread-stream#readme"});}),
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-utils/node_modules/thread-stream/lib/wait.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const MAX_TIMEOUT = 1000;
function wait(state, index, expected, timeout, done) {
    const max = Date.now() + timeout;
    let current = Atomics.load(state, index);
    if (current === expected) {
        done(null, 'ok');
        return;
    }
    let prior = current;
    const check = (backoff)=>{
        if (Date.now() > max) {
            done(null, 'timed-out');
        } else {
            setTimeout(()=>{
                prior = current;
                current = Atomics.load(state, index);
                if (current === prior) {
                    check(backoff >= MAX_TIMEOUT ? MAX_TIMEOUT : backoff * 2);
                } else {
                    if (current === expected) done(null, 'ok');
                    else done(null, 'not-equal');
                }
            }, backoff);
        }
    };
    check(1);
}
// let waitDiffCount = 0
function waitDiff(state, index, expected, timeout, done) {
    // const id = waitDiffCount++
    // process._rawDebug(`>>> waitDiff ${id}`)
    const max = Date.now() + timeout;
    let current = Atomics.load(state, index);
    if (current !== expected) {
        done(null, 'ok');
        return;
    }
    const check = (backoff)=>{
        // process._rawDebug(`${id} ${index} current ${current} expected ${expected}`)
        // process._rawDebug('' + backoff)
        if (Date.now() > max) {
            done(null, 'timed-out');
        } else {
            setTimeout(()=>{
                current = Atomics.load(state, index);
                if (current !== expected) {
                    done(null, 'ok');
                } else {
                    check(backoff >= MAX_TIMEOUT ? MAX_TIMEOUT : backoff * 2);
                }
            }, backoff);
        }
    };
    check(1);
}
module.exports = {
    wait,
    waitDiff
};
}),
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-utils/node_modules/thread-stream/lib/indexes.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const WRITE_INDEX = 4;
const READ_INDEX = 8;
module.exports = {
    WRITE_INDEX,
    READ_INDEX
};
}),
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-utils/node_modules/thread-stream/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const { version } = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-utils/node_modules/thread-stream/package.json (json)");
const { EventEmitter } = __turbopack_context__.r("[externals]/events [external] (events, cjs)");
const { Worker } = __turbopack_context__.r("[externals]/worker_threads [external] (worker_threads, cjs)");
const { join } = __turbopack_context__.r("[externals]/path [external] (path, cjs)");
const { pathToFileURL } = __turbopack_context__.r("[externals]/url [external] (url, cjs)");
const { wait } = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-utils/node_modules/thread-stream/lib/wait.js [app-ssr] (ecmascript)");
const { WRITE_INDEX, READ_INDEX } = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-utils/node_modules/thread-stream/lib/indexes.js [app-ssr] (ecmascript)");
const buffer = __turbopack_context__.r("[externals]/buffer [external] (buffer, cjs)");
const assert = __turbopack_context__.r("[externals]/assert [external] (assert, cjs)");
const kImpl = Symbol('kImpl');
// V8 limit for string size
const MAX_STRING = buffer.constants.MAX_STRING_LENGTH;
class FakeWeakRef {
    constructor(value){
        this._value = value;
    }
    deref() {
        return this._value;
    }
}
class FakeFinalizationRegistry {
    register() {}
    unregister() {}
}
// Currently using FinalizationRegistry with code coverage breaks the world
// Ref: https://github.com/nodejs/node/issues/49344
const FinalizationRegistry = process.env.NODE_V8_COVERAGE ? FakeFinalizationRegistry : /*TURBOPACK member replacement*/ __turbopack_context__.g.FinalizationRegistry || FakeFinalizationRegistry;
const WeakRef = process.env.NODE_V8_COVERAGE ? FakeWeakRef : /*TURBOPACK member replacement*/ __turbopack_context__.g.WeakRef || FakeWeakRef;
const registry = new FinalizationRegistry((worker)=>{
    if (worker.exited) {
        return;
    }
    worker.terminate();
});
function createWorker(stream, opts) {
    const { filename, workerData } = opts;
    const bundlerOverrides = '__bundlerPathsOverrides' in globalThis ? globalThis.__bundlerPathsOverrides : {};
    const toExecute = bundlerOverrides['thread-stream-worker'] || join(("TURBOPACK compile-time value", "/ROOT/Desktop/walletconnect/chilly/node_modules/@reown/appkit-utils/node_modules/thread-stream"), 'lib', 'worker.js');
    const worker = new Worker(toExecute, {
        ...opts.workerOpts,
        trackUnmanagedFds: false,
        workerData: {
            filename: filename.indexOf('file://') === 0 ? filename : pathToFileURL(filename).href,
            dataBuf: stream[kImpl].dataBuf,
            stateBuf: stream[kImpl].stateBuf,
            workerData: {
                $context: {
                    threadStreamVersion: version
                },
                ...workerData
            }
        }
    });
    // We keep a strong reference for now,
    // we need to start writing first
    worker.stream = new FakeWeakRef(stream);
    worker.on('message', onWorkerMessage);
    worker.on('exit', onWorkerExit);
    registry.register(stream, worker);
    return worker;
}
function drain(stream) {
    assert(!stream[kImpl].sync);
    if (stream[kImpl].needDrain) {
        stream[kImpl].needDrain = false;
        stream.emit('drain');
    }
}
function nextFlush(stream) {
    const writeIndex = Atomics.load(stream[kImpl].state, WRITE_INDEX);
    let leftover = stream[kImpl].data.length - writeIndex;
    if (leftover > 0) {
        if (stream[kImpl].buf.length === 0) {
            stream[kImpl].flushing = false;
            if (stream[kImpl].ending) {
                end(stream);
            } else if (stream[kImpl].needDrain) {
                process.nextTick(drain, stream);
            }
            return;
        }
        let toWrite = stream[kImpl].buf.slice(0, leftover);
        let toWriteBytes = Buffer.byteLength(toWrite);
        if (toWriteBytes <= leftover) {
            stream[kImpl].buf = stream[kImpl].buf.slice(leftover);
            // process._rawDebug('writing ' + toWrite.length)
            write(stream, toWrite, nextFlush.bind(null, stream));
        } else {
            // multi-byte utf-8
            stream.flush(()=>{
                // err is already handled in flush()
                if (stream.destroyed) {
                    return;
                }
                Atomics.store(stream[kImpl].state, READ_INDEX, 0);
                Atomics.store(stream[kImpl].state, WRITE_INDEX, 0);
                // Find a toWrite length that fits the buffer
                // it must exists as the buffer is at least 4 bytes length
                // and the max utf-8 length for a char is 4 bytes.
                while(toWriteBytes > stream[kImpl].data.length){
                    leftover = leftover / 2;
                    toWrite = stream[kImpl].buf.slice(0, leftover);
                    toWriteBytes = Buffer.byteLength(toWrite);
                }
                stream[kImpl].buf = stream[kImpl].buf.slice(leftover);
                write(stream, toWrite, nextFlush.bind(null, stream));
            });
        }
    } else if (leftover === 0) {
        if (writeIndex === 0 && stream[kImpl].buf.length === 0) {
            // we had a flushSync in the meanwhile
            return;
        }
        stream.flush(()=>{
            Atomics.store(stream[kImpl].state, READ_INDEX, 0);
            Atomics.store(stream[kImpl].state, WRITE_INDEX, 0);
            nextFlush(stream);
        });
    } else {
        // This should never happen
        destroy(stream, new Error('overwritten'));
    }
}
function onWorkerMessage(msg) {
    const stream = this.stream.deref();
    if (stream === undefined) {
        this.exited = true;
        // Terminate the worker.
        this.terminate();
        return;
    }
    switch(msg.code){
        case 'READY':
            // Replace the FakeWeakRef with a
            // proper one.
            this.stream = new WeakRef(stream);
            stream.flush(()=>{
                stream[kImpl].ready = true;
                stream.emit('ready');
            });
            break;
        case 'ERROR':
            destroy(stream, msg.err);
            break;
        case 'EVENT':
            if (Array.isArray(msg.args)) {
                stream.emit(msg.name, ...msg.args);
            } else {
                stream.emit(msg.name, msg.args);
            }
            break;
        case 'WARNING':
            process.emitWarning(msg.err);
            break;
        default:
            destroy(stream, new Error('this should not happen: ' + msg.code));
    }
}
function onWorkerExit(code) {
    const stream = this.stream.deref();
    if (stream === undefined) {
        // Nothing to do, the worker already exit
        return;
    }
    registry.unregister(stream);
    stream.worker.exited = true;
    stream.worker.off('exit', onWorkerExit);
    destroy(stream, code !== 0 ? new Error('the worker thread exited') : null);
}
class ThreadStream extends EventEmitter {
    constructor(opts = {}){
        super();
        if (opts.bufferSize < 4) {
            throw new Error('bufferSize must at least fit a 4-byte utf-8 char');
        }
        this[kImpl] = {};
        this[kImpl].stateBuf = new SharedArrayBuffer(128);
        this[kImpl].state = new Int32Array(this[kImpl].stateBuf);
        this[kImpl].dataBuf = new SharedArrayBuffer(opts.bufferSize || 4 * 1024 * 1024);
        this[kImpl].data = Buffer.from(this[kImpl].dataBuf);
        this[kImpl].sync = opts.sync || false;
        this[kImpl].ending = false;
        this[kImpl].ended = false;
        this[kImpl].needDrain = false;
        this[kImpl].destroyed = false;
        this[kImpl].flushing = false;
        this[kImpl].ready = false;
        this[kImpl].finished = false;
        this[kImpl].errored = null;
        this[kImpl].closed = false;
        this[kImpl].buf = '';
        // TODO (fix): Make private?
        this.worker = createWorker(this, opts); // TODO (fix): make private
        this.on('message', (message, transferList)=>{
            this.worker.postMessage(message, transferList);
        });
    }
    write(data) {
        if (this[kImpl].destroyed) {
            error(this, new Error('the worker has exited'));
            return false;
        }
        if (this[kImpl].ending) {
            error(this, new Error('the worker is ending'));
            return false;
        }
        if (this[kImpl].flushing && this[kImpl].buf.length + data.length >= MAX_STRING) {
            try {
                writeSync(this);
                this[kImpl].flushing = true;
            } catch (err) {
                destroy(this, err);
                return false;
            }
        }
        this[kImpl].buf += data;
        if (this[kImpl].sync) {
            try {
                writeSync(this);
                return true;
            } catch (err) {
                destroy(this, err);
                return false;
            }
        }
        if (!this[kImpl].flushing) {
            this[kImpl].flushing = true;
            setImmediate(nextFlush, this);
        }
        this[kImpl].needDrain = this[kImpl].data.length - this[kImpl].buf.length - Atomics.load(this[kImpl].state, WRITE_INDEX) <= 0;
        return !this[kImpl].needDrain;
    }
    end() {
        if (this[kImpl].destroyed) {
            return;
        }
        this[kImpl].ending = true;
        end(this);
    }
    flush(cb) {
        if (this[kImpl].destroyed) {
            if (typeof cb === 'function') {
                process.nextTick(cb, new Error('the worker has exited'));
            }
            return;
        }
        // TODO write all .buf
        const writeIndex = Atomics.load(this[kImpl].state, WRITE_INDEX);
        // process._rawDebug(`(flush) readIndex (${Atomics.load(this.state, READ_INDEX)}) writeIndex (${Atomics.load(this.state, WRITE_INDEX)})`)
        wait(this[kImpl].state, READ_INDEX, writeIndex, Infinity, (err, res)=>{
            if (err) {
                destroy(this, err);
                process.nextTick(cb, err);
                return;
            }
            if (res === 'not-equal') {
                // TODO handle deadlock
                this.flush(cb);
                return;
            }
            process.nextTick(cb);
        });
    }
    flushSync() {
        if (this[kImpl].destroyed) {
            return;
        }
        writeSync(this);
        flushSync(this);
    }
    unref() {
        this.worker.unref();
    }
    ref() {
        this.worker.ref();
    }
    get ready() {
        return this[kImpl].ready;
    }
    get destroyed() {
        return this[kImpl].destroyed;
    }
    get closed() {
        return this[kImpl].closed;
    }
    get writable() {
        return !this[kImpl].destroyed && !this[kImpl].ending;
    }
    get writableEnded() {
        return this[kImpl].ending;
    }
    get writableFinished() {
        return this[kImpl].finished;
    }
    get writableNeedDrain() {
        return this[kImpl].needDrain;
    }
    get writableObjectMode() {
        return false;
    }
    get writableErrored() {
        return this[kImpl].errored;
    }
}
function error(stream, err) {
    setImmediate(()=>{
        stream.emit('error', err);
    });
}
function destroy(stream, err) {
    if (stream[kImpl].destroyed) {
        return;
    }
    stream[kImpl].destroyed = true;
    if (err) {
        stream[kImpl].errored = err;
        error(stream, err);
    }
    if (!stream.worker.exited) {
        stream.worker.terminate().catch(()=>{}).then(()=>{
            stream[kImpl].closed = true;
            stream.emit('close');
        });
    } else {
        setImmediate(()=>{
            stream[kImpl].closed = true;
            stream.emit('close');
        });
    }
}
function write(stream, data, cb) {
    // data is smaller than the shared buffer length
    const current = Atomics.load(stream[kImpl].state, WRITE_INDEX);
    const length = Buffer.byteLength(data);
    stream[kImpl].data.write(data, current);
    Atomics.store(stream[kImpl].state, WRITE_INDEX, current + length);
    Atomics.notify(stream[kImpl].state, WRITE_INDEX);
    cb();
    return true;
}
function end(stream) {
    if (stream[kImpl].ended || !stream[kImpl].ending || stream[kImpl].flushing) {
        return;
    }
    stream[kImpl].ended = true;
    try {
        stream.flushSync();
        let readIndex = Atomics.load(stream[kImpl].state, READ_INDEX);
        // process._rawDebug('writing index')
        Atomics.store(stream[kImpl].state, WRITE_INDEX, -1);
        // process._rawDebug(`(end) readIndex (${Atomics.load(stream.state, READ_INDEX)}) writeIndex (${Atomics.load(stream.state, WRITE_INDEX)})`)
        Atomics.notify(stream[kImpl].state, WRITE_INDEX);
        // Wait for the process to complete
        let spins = 0;
        while(readIndex !== -1){
            // process._rawDebug(`read = ${read}`)
            Atomics.wait(stream[kImpl].state, READ_INDEX, readIndex, 1000);
            readIndex = Atomics.load(stream[kImpl].state, READ_INDEX);
            if (readIndex === -2) {
                destroy(stream, new Error('end() failed'));
                return;
            }
            if (++spins === 10) {
                destroy(stream, new Error('end() took too long (10s)'));
                return;
            }
        }
        process.nextTick(()=>{
            stream[kImpl].finished = true;
            stream.emit('finish');
        });
    } catch (err) {
        destroy(stream, err);
    }
// process._rawDebug('end finished...')
}
function writeSync(stream) {
    const cb = ()=>{
        if (stream[kImpl].ending) {
            end(stream);
        } else if (stream[kImpl].needDrain) {
            process.nextTick(drain, stream);
        }
    };
    stream[kImpl].flushing = false;
    while(stream[kImpl].buf.length !== 0){
        const writeIndex = Atomics.load(stream[kImpl].state, WRITE_INDEX);
        let leftover = stream[kImpl].data.length - writeIndex;
        if (leftover === 0) {
            flushSync(stream);
            Atomics.store(stream[kImpl].state, READ_INDEX, 0);
            Atomics.store(stream[kImpl].state, WRITE_INDEX, 0);
            continue;
        } else if (leftover < 0) {
            // stream should never happen
            throw new Error('overwritten');
        }
        let toWrite = stream[kImpl].buf.slice(0, leftover);
        let toWriteBytes = Buffer.byteLength(toWrite);
        if (toWriteBytes <= leftover) {
            stream[kImpl].buf = stream[kImpl].buf.slice(leftover);
            // process._rawDebug('writing ' + toWrite.length)
            write(stream, toWrite, cb);
        } else {
            // multi-byte utf-8
            flushSync(stream);
            Atomics.store(stream[kImpl].state, READ_INDEX, 0);
            Atomics.store(stream[kImpl].state, WRITE_INDEX, 0);
            // Find a toWrite length that fits the buffer
            // it must exists as the buffer is at least 4 bytes length
            // and the max utf-8 length for a char is 4 bytes.
            while(toWriteBytes > stream[kImpl].buf.length){
                leftover = leftover / 2;
                toWrite = stream[kImpl].buf.slice(0, leftover);
                toWriteBytes = Buffer.byteLength(toWrite);
            }
            stream[kImpl].buf = stream[kImpl].buf.slice(leftover);
            write(stream, toWrite, cb);
        }
    }
}
function flushSync(stream) {
    if (stream[kImpl].flushing) {
        throw new Error('unable to flush while flushing');
    }
    // process._rawDebug('flushSync started')
    const writeIndex = Atomics.load(stream[kImpl].state, WRITE_INDEX);
    let spins = 0;
    // TODO handle deadlock
    while(true){
        const readIndex = Atomics.load(stream[kImpl].state, READ_INDEX);
        if (readIndex === -2) {
            throw Error('_flushSync failed');
        }
        // process._rawDebug(`(flushSync) readIndex (${readIndex}) writeIndex (${writeIndex})`)
        if (readIndex !== writeIndex) {
            // TODO stream timeouts for some reason.
            Atomics.wait(stream[kImpl].state, READ_INDEX, readIndex, 1000);
        } else {
            break;
        }
        if (++spins === 10) {
            throw new Error('_flushSync took too long (10s)');
        }
    }
// process._rawDebug('flushSync finished')
}
module.exports = ThreadStream;
}),
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-adapter-wagmi/node_modules/thread-stream/package.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v({"name":"thread-stream","version":"3.1.0","description":"A streaming way to send data to a Node.js Worker Thread","main":"index.js","types":"index.d.ts","dependencies":{"real-require":"^0.2.0"},"devDependencies":{"@types/node":"^20.1.0","@types/tap":"^15.0.0","@yao-pkg/pkg":"^5.11.5","desm":"^1.3.0","fastbench":"^1.0.1","husky":"^9.0.6","pino-elasticsearch":"^8.0.0","sonic-boom":"^4.0.1","standard":"^17.0.0","tap":"^16.2.0","ts-node":"^10.8.0","typescript":"^5.3.2","why-is-node-running":"^2.2.2"},"scripts":{"build":"tsc --noEmit","test":"standard && npm run build && npm run transpile && tap \"test/**/*.test.*js\" && tap --ts test/*.test.*ts","test:ci":"standard && npm run transpile && npm run test:ci:js && npm run test:ci:ts","test:ci:js":"tap --no-check-coverage --timeout=120 --coverage-report=lcovonly \"test/**/*.test.*js\"","test:ci:ts":"tap --ts --no-check-coverage --coverage-report=lcovonly \"test/**/*.test.*ts\"","test:yarn":"npm run transpile && tap \"test/**/*.test.js\" --no-check-coverage","transpile":"sh ./test/ts/transpile.sh","prepare":"husky install"},"standard":{"ignore":["test/ts/**/*","test/syntax-error.mjs"]},"repository":{"type":"git","url":"git+https://github.com/mcollina/thread-stream.git"},"keywords":["worker","thread","threads","stream"],"author":"Matteo Collina <hello@matteocollina.com>","license":"MIT","bugs":{"url":"https://github.com/mcollina/thread-stream/issues"},"homepage":"https://github.com/mcollina/thread-stream#readme"});}),
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-adapter-wagmi/node_modules/thread-stream/lib/wait.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const MAX_TIMEOUT = 1000;
function wait(state, index, expected, timeout, done) {
    const max = Date.now() + timeout;
    let current = Atomics.load(state, index);
    if (current === expected) {
        done(null, 'ok');
        return;
    }
    let prior = current;
    const check = (backoff)=>{
        if (Date.now() > max) {
            done(null, 'timed-out');
        } else {
            setTimeout(()=>{
                prior = current;
                current = Atomics.load(state, index);
                if (current === prior) {
                    check(backoff >= MAX_TIMEOUT ? MAX_TIMEOUT : backoff * 2);
                } else {
                    if (current === expected) done(null, 'ok');
                    else done(null, 'not-equal');
                }
            }, backoff);
        }
    };
    check(1);
}
// let waitDiffCount = 0
function waitDiff(state, index, expected, timeout, done) {
    // const id = waitDiffCount++
    // process._rawDebug(`>>> waitDiff ${id}`)
    const max = Date.now() + timeout;
    let current = Atomics.load(state, index);
    if (current !== expected) {
        done(null, 'ok');
        return;
    }
    const check = (backoff)=>{
        // process._rawDebug(`${id} ${index} current ${current} expected ${expected}`)
        // process._rawDebug('' + backoff)
        if (Date.now() > max) {
            done(null, 'timed-out');
        } else {
            setTimeout(()=>{
                current = Atomics.load(state, index);
                if (current !== expected) {
                    done(null, 'ok');
                } else {
                    check(backoff >= MAX_TIMEOUT ? MAX_TIMEOUT : backoff * 2);
                }
            }, backoff);
        }
    };
    check(1);
}
module.exports = {
    wait,
    waitDiff
};
}),
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-adapter-wagmi/node_modules/thread-stream/lib/indexes.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const WRITE_INDEX = 4;
const READ_INDEX = 8;
module.exports = {
    WRITE_INDEX,
    READ_INDEX
};
}),
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-adapter-wagmi/node_modules/thread-stream/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const { version } = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-adapter-wagmi/node_modules/thread-stream/package.json (json)");
const { EventEmitter } = __turbopack_context__.r("[externals]/events [external] (events, cjs)");
const { Worker } = __turbopack_context__.r("[externals]/worker_threads [external] (worker_threads, cjs)");
const { join } = __turbopack_context__.r("[externals]/path [external] (path, cjs)");
const { pathToFileURL } = __turbopack_context__.r("[externals]/url [external] (url, cjs)");
const { wait } = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-adapter-wagmi/node_modules/thread-stream/lib/wait.js [app-ssr] (ecmascript)");
const { WRITE_INDEX, READ_INDEX } = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-adapter-wagmi/node_modules/thread-stream/lib/indexes.js [app-ssr] (ecmascript)");
const buffer = __turbopack_context__.r("[externals]/buffer [external] (buffer, cjs)");
const assert = __turbopack_context__.r("[externals]/assert [external] (assert, cjs)");
const kImpl = Symbol('kImpl');
// V8 limit for string size
const MAX_STRING = buffer.constants.MAX_STRING_LENGTH;
class FakeWeakRef {
    constructor(value){
        this._value = value;
    }
    deref() {
        return this._value;
    }
}
class FakeFinalizationRegistry {
    register() {}
    unregister() {}
}
// Currently using FinalizationRegistry with code coverage breaks the world
// Ref: https://github.com/nodejs/node/issues/49344
const FinalizationRegistry = process.env.NODE_V8_COVERAGE ? FakeFinalizationRegistry : /*TURBOPACK member replacement*/ __turbopack_context__.g.FinalizationRegistry || FakeFinalizationRegistry;
const WeakRef = process.env.NODE_V8_COVERAGE ? FakeWeakRef : /*TURBOPACK member replacement*/ __turbopack_context__.g.WeakRef || FakeWeakRef;
const registry = new FinalizationRegistry((worker)=>{
    if (worker.exited) {
        return;
    }
    worker.terminate();
});
function createWorker(stream, opts) {
    const { filename, workerData } = opts;
    const bundlerOverrides = '__bundlerPathsOverrides' in globalThis ? globalThis.__bundlerPathsOverrides : {};
    const toExecute = bundlerOverrides['thread-stream-worker'] || join(("TURBOPACK compile-time value", "/ROOT/Desktop/walletconnect/chilly/node_modules/@reown/appkit-adapter-wagmi/node_modules/thread-stream"), 'lib', 'worker.js');
    const worker = new Worker(toExecute, {
        ...opts.workerOpts,
        trackUnmanagedFds: false,
        workerData: {
            filename: filename.indexOf('file://') === 0 ? filename : pathToFileURL(filename).href,
            dataBuf: stream[kImpl].dataBuf,
            stateBuf: stream[kImpl].stateBuf,
            workerData: {
                $context: {
                    threadStreamVersion: version
                },
                ...workerData
            }
        }
    });
    // We keep a strong reference for now,
    // we need to start writing first
    worker.stream = new FakeWeakRef(stream);
    worker.on('message', onWorkerMessage);
    worker.on('exit', onWorkerExit);
    registry.register(stream, worker);
    return worker;
}
function drain(stream) {
    assert(!stream[kImpl].sync);
    if (stream[kImpl].needDrain) {
        stream[kImpl].needDrain = false;
        stream.emit('drain');
    }
}
function nextFlush(stream) {
    const writeIndex = Atomics.load(stream[kImpl].state, WRITE_INDEX);
    let leftover = stream[kImpl].data.length - writeIndex;
    if (leftover > 0) {
        if (stream[kImpl].buf.length === 0) {
            stream[kImpl].flushing = false;
            if (stream[kImpl].ending) {
                end(stream);
            } else if (stream[kImpl].needDrain) {
                process.nextTick(drain, stream);
            }
            return;
        }
        let toWrite = stream[kImpl].buf.slice(0, leftover);
        let toWriteBytes = Buffer.byteLength(toWrite);
        if (toWriteBytes <= leftover) {
            stream[kImpl].buf = stream[kImpl].buf.slice(leftover);
            // process._rawDebug('writing ' + toWrite.length)
            write(stream, toWrite, nextFlush.bind(null, stream));
        } else {
            // multi-byte utf-8
            stream.flush(()=>{
                // err is already handled in flush()
                if (stream.destroyed) {
                    return;
                }
                Atomics.store(stream[kImpl].state, READ_INDEX, 0);
                Atomics.store(stream[kImpl].state, WRITE_INDEX, 0);
                // Find a toWrite length that fits the buffer
                // it must exists as the buffer is at least 4 bytes length
                // and the max utf-8 length for a char is 4 bytes.
                while(toWriteBytes > stream[kImpl].data.length){
                    leftover = leftover / 2;
                    toWrite = stream[kImpl].buf.slice(0, leftover);
                    toWriteBytes = Buffer.byteLength(toWrite);
                }
                stream[kImpl].buf = stream[kImpl].buf.slice(leftover);
                write(stream, toWrite, nextFlush.bind(null, stream));
            });
        }
    } else if (leftover === 0) {
        if (writeIndex === 0 && stream[kImpl].buf.length === 0) {
            // we had a flushSync in the meanwhile
            return;
        }
        stream.flush(()=>{
            Atomics.store(stream[kImpl].state, READ_INDEX, 0);
            Atomics.store(stream[kImpl].state, WRITE_INDEX, 0);
            nextFlush(stream);
        });
    } else {
        // This should never happen
        destroy(stream, new Error('overwritten'));
    }
}
function onWorkerMessage(msg) {
    const stream = this.stream.deref();
    if (stream === undefined) {
        this.exited = true;
        // Terminate the worker.
        this.terminate();
        return;
    }
    switch(msg.code){
        case 'READY':
            // Replace the FakeWeakRef with a
            // proper one.
            this.stream = new WeakRef(stream);
            stream.flush(()=>{
                stream[kImpl].ready = true;
                stream.emit('ready');
            });
            break;
        case 'ERROR':
            destroy(stream, msg.err);
            break;
        case 'EVENT':
            if (Array.isArray(msg.args)) {
                stream.emit(msg.name, ...msg.args);
            } else {
                stream.emit(msg.name, msg.args);
            }
            break;
        case 'WARNING':
            process.emitWarning(msg.err);
            break;
        default:
            destroy(stream, new Error('this should not happen: ' + msg.code));
    }
}
function onWorkerExit(code) {
    const stream = this.stream.deref();
    if (stream === undefined) {
        // Nothing to do, the worker already exit
        return;
    }
    registry.unregister(stream);
    stream.worker.exited = true;
    stream.worker.off('exit', onWorkerExit);
    destroy(stream, code !== 0 ? new Error('the worker thread exited') : null);
}
class ThreadStream extends EventEmitter {
    constructor(opts = {}){
        super();
        if (opts.bufferSize < 4) {
            throw new Error('bufferSize must at least fit a 4-byte utf-8 char');
        }
        this[kImpl] = {};
        this[kImpl].stateBuf = new SharedArrayBuffer(128);
        this[kImpl].state = new Int32Array(this[kImpl].stateBuf);
        this[kImpl].dataBuf = new SharedArrayBuffer(opts.bufferSize || 4 * 1024 * 1024);
        this[kImpl].data = Buffer.from(this[kImpl].dataBuf);
        this[kImpl].sync = opts.sync || false;
        this[kImpl].ending = false;
        this[kImpl].ended = false;
        this[kImpl].needDrain = false;
        this[kImpl].destroyed = false;
        this[kImpl].flushing = false;
        this[kImpl].ready = false;
        this[kImpl].finished = false;
        this[kImpl].errored = null;
        this[kImpl].closed = false;
        this[kImpl].buf = '';
        // TODO (fix): Make private?
        this.worker = createWorker(this, opts); // TODO (fix): make private
        this.on('message', (message, transferList)=>{
            this.worker.postMessage(message, transferList);
        });
    }
    write(data) {
        if (this[kImpl].destroyed) {
            error(this, new Error('the worker has exited'));
            return false;
        }
        if (this[kImpl].ending) {
            error(this, new Error('the worker is ending'));
            return false;
        }
        if (this[kImpl].flushing && this[kImpl].buf.length + data.length >= MAX_STRING) {
            try {
                writeSync(this);
                this[kImpl].flushing = true;
            } catch (err) {
                destroy(this, err);
                return false;
            }
        }
        this[kImpl].buf += data;
        if (this[kImpl].sync) {
            try {
                writeSync(this);
                return true;
            } catch (err) {
                destroy(this, err);
                return false;
            }
        }
        if (!this[kImpl].flushing) {
            this[kImpl].flushing = true;
            setImmediate(nextFlush, this);
        }
        this[kImpl].needDrain = this[kImpl].data.length - this[kImpl].buf.length - Atomics.load(this[kImpl].state, WRITE_INDEX) <= 0;
        return !this[kImpl].needDrain;
    }
    end() {
        if (this[kImpl].destroyed) {
            return;
        }
        this[kImpl].ending = true;
        end(this);
    }
    flush(cb) {
        if (this[kImpl].destroyed) {
            if (typeof cb === 'function') {
                process.nextTick(cb, new Error('the worker has exited'));
            }
            return;
        }
        // TODO write all .buf
        const writeIndex = Atomics.load(this[kImpl].state, WRITE_INDEX);
        // process._rawDebug(`(flush) readIndex (${Atomics.load(this.state, READ_INDEX)}) writeIndex (${Atomics.load(this.state, WRITE_INDEX)})`)
        wait(this[kImpl].state, READ_INDEX, writeIndex, Infinity, (err, res)=>{
            if (err) {
                destroy(this, err);
                process.nextTick(cb, err);
                return;
            }
            if (res === 'not-equal') {
                // TODO handle deadlock
                this.flush(cb);
                return;
            }
            process.nextTick(cb);
        });
    }
    flushSync() {
        if (this[kImpl].destroyed) {
            return;
        }
        writeSync(this);
        flushSync(this);
    }
    unref() {
        this.worker.unref();
    }
    ref() {
        this.worker.ref();
    }
    get ready() {
        return this[kImpl].ready;
    }
    get destroyed() {
        return this[kImpl].destroyed;
    }
    get closed() {
        return this[kImpl].closed;
    }
    get writable() {
        return !this[kImpl].destroyed && !this[kImpl].ending;
    }
    get writableEnded() {
        return this[kImpl].ending;
    }
    get writableFinished() {
        return this[kImpl].finished;
    }
    get writableNeedDrain() {
        return this[kImpl].needDrain;
    }
    get writableObjectMode() {
        return false;
    }
    get writableErrored() {
        return this[kImpl].errored;
    }
}
function error(stream, err) {
    setImmediate(()=>{
        stream.emit('error', err);
    });
}
function destroy(stream, err) {
    if (stream[kImpl].destroyed) {
        return;
    }
    stream[kImpl].destroyed = true;
    if (err) {
        stream[kImpl].errored = err;
        error(stream, err);
    }
    if (!stream.worker.exited) {
        stream.worker.terminate().catch(()=>{}).then(()=>{
            stream[kImpl].closed = true;
            stream.emit('close');
        });
    } else {
        setImmediate(()=>{
            stream[kImpl].closed = true;
            stream.emit('close');
        });
    }
}
function write(stream, data, cb) {
    // data is smaller than the shared buffer length
    const current = Atomics.load(stream[kImpl].state, WRITE_INDEX);
    const length = Buffer.byteLength(data);
    stream[kImpl].data.write(data, current);
    Atomics.store(stream[kImpl].state, WRITE_INDEX, current + length);
    Atomics.notify(stream[kImpl].state, WRITE_INDEX);
    cb();
    return true;
}
function end(stream) {
    if (stream[kImpl].ended || !stream[kImpl].ending || stream[kImpl].flushing) {
        return;
    }
    stream[kImpl].ended = true;
    try {
        stream.flushSync();
        let readIndex = Atomics.load(stream[kImpl].state, READ_INDEX);
        // process._rawDebug('writing index')
        Atomics.store(stream[kImpl].state, WRITE_INDEX, -1);
        // process._rawDebug(`(end) readIndex (${Atomics.load(stream.state, READ_INDEX)}) writeIndex (${Atomics.load(stream.state, WRITE_INDEX)})`)
        Atomics.notify(stream[kImpl].state, WRITE_INDEX);
        // Wait for the process to complete
        let spins = 0;
        while(readIndex !== -1){
            // process._rawDebug(`read = ${read}`)
            Atomics.wait(stream[kImpl].state, READ_INDEX, readIndex, 1000);
            readIndex = Atomics.load(stream[kImpl].state, READ_INDEX);
            if (readIndex === -2) {
                destroy(stream, new Error('end() failed'));
                return;
            }
            if (++spins === 10) {
                destroy(stream, new Error('end() took too long (10s)'));
                return;
            }
        }
        process.nextTick(()=>{
            stream[kImpl].finished = true;
            stream.emit('finish');
        });
    } catch (err) {
        destroy(stream, err);
    }
// process._rawDebug('end finished...')
}
function writeSync(stream) {
    const cb = ()=>{
        if (stream[kImpl].ending) {
            end(stream);
        } else if (stream[kImpl].needDrain) {
            process.nextTick(drain, stream);
        }
    };
    stream[kImpl].flushing = false;
    while(stream[kImpl].buf.length !== 0){
        const writeIndex = Atomics.load(stream[kImpl].state, WRITE_INDEX);
        let leftover = stream[kImpl].data.length - writeIndex;
        if (leftover === 0) {
            flushSync(stream);
            Atomics.store(stream[kImpl].state, READ_INDEX, 0);
            Atomics.store(stream[kImpl].state, WRITE_INDEX, 0);
            continue;
        } else if (leftover < 0) {
            // stream should never happen
            throw new Error('overwritten');
        }
        let toWrite = stream[kImpl].buf.slice(0, leftover);
        let toWriteBytes = Buffer.byteLength(toWrite);
        if (toWriteBytes <= leftover) {
            stream[kImpl].buf = stream[kImpl].buf.slice(leftover);
            // process._rawDebug('writing ' + toWrite.length)
            write(stream, toWrite, cb);
        } else {
            // multi-byte utf-8
            flushSync(stream);
            Atomics.store(stream[kImpl].state, READ_INDEX, 0);
            Atomics.store(stream[kImpl].state, WRITE_INDEX, 0);
            // Find a toWrite length that fits the buffer
            // it must exists as the buffer is at least 4 bytes length
            // and the max utf-8 length for a char is 4 bytes.
            while(toWriteBytes > stream[kImpl].buf.length){
                leftover = leftover / 2;
                toWrite = stream[kImpl].buf.slice(0, leftover);
                toWriteBytes = Buffer.byteLength(toWrite);
            }
            stream[kImpl].buf = stream[kImpl].buf.slice(leftover);
            write(stream, toWrite, cb);
        }
    }
}
function flushSync(stream) {
    if (stream[kImpl].flushing) {
        throw new Error('unable to flush while flushing');
    }
    // process._rawDebug('flushSync started')
    const writeIndex = Atomics.load(stream[kImpl].state, WRITE_INDEX);
    let spins = 0;
    // TODO handle deadlock
    while(true){
        const readIndex = Atomics.load(stream[kImpl].state, READ_INDEX);
        if (readIndex === -2) {
            throw Error('_flushSync failed');
        }
        // process._rawDebug(`(flushSync) readIndex (${readIndex}) writeIndex (${writeIndex})`)
        if (readIndex !== writeIndex) {
            // TODO stream timeouts for some reason.
            Atomics.wait(stream[kImpl].state, READ_INDEX, readIndex, 1000);
        } else {
            break;
        }
        if (++spins === 10) {
            throw new Error('_flushSync took too long (10s)');
        }
    }
// process._rawDebug('flushSync finished')
}
module.exports = ThreadStream;
}),
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-controllers/node_modules/pino-std-serializers/lib/err-helpers.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// **************************************************************
// * Code initially copied/adapted from "pony-cause" npm module *
// * Please upstream improvements there                         *
// **************************************************************
const isErrorLike = (err)=>{
    return err && typeof err.message === 'string';
};
/**
 * @param {Error|{ cause?: unknown|(()=>err)}} err
 * @returns {Error|Object|undefined}
 */ const getErrorCause = (err)=>{
    if (!err) return;
    /** @type {unknown} */ // @ts-ignore
    const cause = err.cause;
    // VError / NError style causes
    if (typeof cause === 'function') {
        // @ts-ignore
        const causeResult = err.cause();
        return isErrorLike(causeResult) ? causeResult : undefined;
    } else {
        return isErrorLike(cause) ? cause : undefined;
    }
};
/**
 * Internal method that keeps a track of which error we have already added, to avoid circular recursion
 *
 * @private
 * @param {Error} err
 * @param {Set<Error>} seen
 * @returns {string}
 */ const _stackWithCauses = (err, seen)=>{
    if (!isErrorLike(err)) return '';
    const stack = err.stack || '';
    // Ensure we don't go circular or crazily deep
    if (seen.has(err)) {
        return stack + '\ncauses have become circular...';
    }
    const cause = getErrorCause(err);
    if (cause) {
        seen.add(err);
        return stack + '\ncaused by: ' + _stackWithCauses(cause, seen);
    } else {
        return stack;
    }
};
/**
 * @param {Error} err
 * @returns {string}
 */ const stackWithCauses = (err)=>_stackWithCauses(err, new Set());
/**
 * Internal method that keeps a track of which error we have already added, to avoid circular recursion
 *
 * @private
 * @param {Error} err
 * @param {Set<Error>} seen
 * @param {boolean} [skip]
 * @returns {string}
 */ const _messageWithCauses = (err, seen, skip)=>{
    if (!isErrorLike(err)) return '';
    const message = skip ? '' : err.message || '';
    // Ensure we don't go circular or crazily deep
    if (seen.has(err)) {
        return message + ': ...';
    }
    const cause = getErrorCause(err);
    if (cause) {
        seen.add(err);
        // @ts-ignore
        const skipIfVErrorStyleCause = typeof err.cause === 'function';
        return message + (skipIfVErrorStyleCause ? '' : ': ') + _messageWithCauses(cause, seen, skipIfVErrorStyleCause);
    } else {
        return message;
    }
};
/**
 * @param {Error} err
 * @returns {string}
 */ const messageWithCauses = (err)=>_messageWithCauses(err, new Set());
module.exports = {
    isErrorLike,
    getErrorCause,
    stackWithCauses,
    messageWithCauses
};
}),
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-controllers/node_modules/pino-std-serializers/lib/err-proto.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const seen = Symbol('circular-ref-tag');
const rawSymbol = Symbol('pino-raw-err-ref');
const pinoErrProto = Object.create({}, {
    type: {
        enumerable: true,
        writable: true,
        value: undefined
    },
    message: {
        enumerable: true,
        writable: true,
        value: undefined
    },
    stack: {
        enumerable: true,
        writable: true,
        value: undefined
    },
    aggregateErrors: {
        enumerable: true,
        writable: true,
        value: undefined
    },
    raw: {
        enumerable: false,
        get: function() {
            return this[rawSymbol];
        },
        set: function(val) {
            this[rawSymbol] = val;
        }
    }
});
Object.defineProperty(pinoErrProto, rawSymbol, {
    writable: true,
    value: {}
});
module.exports = {
    pinoErrProto,
    pinoErrorSymbols: {
        seen,
        rawSymbol
    }
};
}),
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-controllers/node_modules/pino-std-serializers/lib/err.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = errSerializer;
const { messageWithCauses, stackWithCauses, isErrorLike } = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-controllers/node_modules/pino-std-serializers/lib/err-helpers.js [app-ssr] (ecmascript)");
const { pinoErrProto, pinoErrorSymbols } = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-controllers/node_modules/pino-std-serializers/lib/err-proto.js [app-ssr] (ecmascript)");
const { seen } = pinoErrorSymbols;
const { toString } = Object.prototype;
function errSerializer(err) {
    if (!isErrorLike(err)) {
        return err;
    }
    err[seen] = undefined; // tag to prevent re-looking at this
    const _err = Object.create(pinoErrProto);
    _err.type = toString.call(err.constructor) === '[object Function]' ? err.constructor.name : err.name;
    _err.message = messageWithCauses(err);
    _err.stack = stackWithCauses(err);
    if (Array.isArray(err.errors)) {
        _err.aggregateErrors = err.errors.map((err)=>errSerializer(err));
    }
    for(const key in err){
        if (_err[key] === undefined) {
            const val = err[key];
            if (isErrorLike(val)) {
                // We append cause messages and stacks to _err, therefore skipping causes here
                if (key !== 'cause' && !Object.prototype.hasOwnProperty.call(val, seen)) {
                    _err[key] = errSerializer(val);
                }
            } else {
                _err[key] = val;
            }
        }
    }
    delete err[seen]; // clean up tag in case err is serialized again later
    _err.raw = err;
    return _err;
}
}),
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-controllers/node_modules/pino-std-serializers/lib/err-with-cause.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = errWithCauseSerializer;
const { isErrorLike } = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-controllers/node_modules/pino-std-serializers/lib/err-helpers.js [app-ssr] (ecmascript)");
const { pinoErrProto, pinoErrorSymbols } = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-controllers/node_modules/pino-std-serializers/lib/err-proto.js [app-ssr] (ecmascript)");
const { seen } = pinoErrorSymbols;
const { toString } = Object.prototype;
function errWithCauseSerializer(err) {
    if (!isErrorLike(err)) {
        return err;
    }
    err[seen] = undefined; // tag to prevent re-looking at this
    const _err = Object.create(pinoErrProto);
    _err.type = toString.call(err.constructor) === '[object Function]' ? err.constructor.name : err.name;
    _err.message = err.message;
    _err.stack = err.stack;
    if (Array.isArray(err.errors)) {
        _err.aggregateErrors = err.errors.map((err)=>errWithCauseSerializer(err));
    }
    if (isErrorLike(err.cause) && !Object.prototype.hasOwnProperty.call(err.cause, seen)) {
        _err.cause = errWithCauseSerializer(err.cause);
    }
    for(const key in err){
        if (_err[key] === undefined) {
            const val = err[key];
            if (isErrorLike(val)) {
                if (!Object.prototype.hasOwnProperty.call(val, seen)) {
                    _err[key] = errWithCauseSerializer(val);
                }
            } else {
                _err[key] = val;
            }
        }
    }
    delete err[seen]; // clean up tag in case err is serialized again later
    _err.raw = err;
    return _err;
}
}),
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-controllers/node_modules/pino-std-serializers/lib/req.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = {
    mapHttpRequest,
    reqSerializer
};
const rawSymbol = Symbol('pino-raw-req-ref');
const pinoReqProto = Object.create({}, {
    id: {
        enumerable: true,
        writable: true,
        value: ''
    },
    method: {
        enumerable: true,
        writable: true,
        value: ''
    },
    url: {
        enumerable: true,
        writable: true,
        value: ''
    },
    query: {
        enumerable: true,
        writable: true,
        value: ''
    },
    params: {
        enumerable: true,
        writable: true,
        value: ''
    },
    headers: {
        enumerable: true,
        writable: true,
        value: {}
    },
    remoteAddress: {
        enumerable: true,
        writable: true,
        value: ''
    },
    remotePort: {
        enumerable: true,
        writable: true,
        value: ''
    },
    raw: {
        enumerable: false,
        get: function() {
            return this[rawSymbol];
        },
        set: function(val) {
            this[rawSymbol] = val;
        }
    }
});
Object.defineProperty(pinoReqProto, rawSymbol, {
    writable: true,
    value: {}
});
function reqSerializer(req) {
    // req.info is for hapi compat.
    const connection = req.info || req.socket;
    const _req = Object.create(pinoReqProto);
    _req.id = typeof req.id === 'function' ? req.id() : req.id || (req.info ? req.info.id : undefined);
    _req.method = req.method;
    // req.originalUrl is for expressjs compat.
    if (req.originalUrl) {
        _req.url = req.originalUrl;
    } else {
        const path = req.path;
        // path for safe hapi compat.
        _req.url = typeof path === 'string' ? path : req.url ? req.url.path || req.url : undefined;
    }
    if (req.query) {
        _req.query = req.query;
    }
    if (req.params) {
        _req.params = req.params;
    }
    _req.headers = req.headers;
    _req.remoteAddress = connection && connection.remoteAddress;
    _req.remotePort = connection && connection.remotePort;
    // req.raw is  for hapi compat/equivalence
    _req.raw = req.raw || req;
    return _req;
}
function mapHttpRequest(req) {
    return {
        req: reqSerializer(req)
    };
}
}),
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-controllers/node_modules/pino-std-serializers/lib/res.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = {
    mapHttpResponse,
    resSerializer
};
const rawSymbol = Symbol('pino-raw-res-ref');
const pinoResProto = Object.create({}, {
    statusCode: {
        enumerable: true,
        writable: true,
        value: 0
    },
    headers: {
        enumerable: true,
        writable: true,
        value: ''
    },
    raw: {
        enumerable: false,
        get: function() {
            return this[rawSymbol];
        },
        set: function(val) {
            this[rawSymbol] = val;
        }
    }
});
Object.defineProperty(pinoResProto, rawSymbol, {
    writable: true,
    value: {}
});
function resSerializer(res) {
    const _res = Object.create(pinoResProto);
    _res.statusCode = res.headersSent ? res.statusCode : null;
    _res.headers = res.getHeaders ? res.getHeaders() : res._headers;
    _res.raw = res;
    return _res;
}
function mapHttpResponse(res) {
    return {
        res: resSerializer(res)
    };
}
}),
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-controllers/node_modules/pino-std-serializers/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const errSerializer = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-controllers/node_modules/pino-std-serializers/lib/err.js [app-ssr] (ecmascript)");
const errWithCauseSerializer = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-controllers/node_modules/pino-std-serializers/lib/err-with-cause.js [app-ssr] (ecmascript)");
const reqSerializers = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-controllers/node_modules/pino-std-serializers/lib/req.js [app-ssr] (ecmascript)");
const resSerializers = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-controllers/node_modules/pino-std-serializers/lib/res.js [app-ssr] (ecmascript)");
module.exports = {
    err: errSerializer,
    errWithCause: errWithCauseSerializer,
    mapHttpRequest: reqSerializers.mapHttpRequest,
    mapHttpResponse: resSerializers.mapHttpResponse,
    req: reqSerializers.reqSerializer,
    res: resSerializers.resSerializer,
    wrapErrorSerializer: function wrapErrorSerializer(customSerializer) {
        if (customSerializer === errSerializer) return customSerializer;
        return function wrapErrSerializer(err) {
            return customSerializer(errSerializer(err));
        };
    },
    wrapRequestSerializer: function wrapRequestSerializer(customSerializer) {
        if (customSerializer === reqSerializers.reqSerializer) return customSerializer;
        return function wrappedReqSerializer(req) {
            return customSerializer(reqSerializers.reqSerializer(req));
        };
    },
    wrapResponseSerializer: function wrapResponseSerializer(customSerializer) {
        if (customSerializer === resSerializers.resSerializer) return customSerializer;
        return function wrappedResSerializer(res) {
            return customSerializer(resSerializers.resSerializer(res));
        };
    }
};
}),
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-wallet/node_modules/pino-std-serializers/lib/err-helpers.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// **************************************************************
// * Code initially copied/adapted from "pony-cause" npm module *
// * Please upstream improvements there                         *
// **************************************************************
const isErrorLike = (err)=>{
    return err && typeof err.message === 'string';
};
/**
 * @param {Error|{ cause?: unknown|(()=>err)}} err
 * @returns {Error|Object|undefined}
 */ const getErrorCause = (err)=>{
    if (!err) return;
    /** @type {unknown} */ // @ts-ignore
    const cause = err.cause;
    // VError / NError style causes
    if (typeof cause === 'function') {
        // @ts-ignore
        const causeResult = err.cause();
        return isErrorLike(causeResult) ? causeResult : undefined;
    } else {
        return isErrorLike(cause) ? cause : undefined;
    }
};
/**
 * Internal method that keeps a track of which error we have already added, to avoid circular recursion
 *
 * @private
 * @param {Error} err
 * @param {Set<Error>} seen
 * @returns {string}
 */ const _stackWithCauses = (err, seen)=>{
    if (!isErrorLike(err)) return '';
    const stack = err.stack || '';
    // Ensure we don't go circular or crazily deep
    if (seen.has(err)) {
        return stack + '\ncauses have become circular...';
    }
    const cause = getErrorCause(err);
    if (cause) {
        seen.add(err);
        return stack + '\ncaused by: ' + _stackWithCauses(cause, seen);
    } else {
        return stack;
    }
};
/**
 * @param {Error} err
 * @returns {string}
 */ const stackWithCauses = (err)=>_stackWithCauses(err, new Set());
/**
 * Internal method that keeps a track of which error we have already added, to avoid circular recursion
 *
 * @private
 * @param {Error} err
 * @param {Set<Error>} seen
 * @param {boolean} [skip]
 * @returns {string}
 */ const _messageWithCauses = (err, seen, skip)=>{
    if (!isErrorLike(err)) return '';
    const message = skip ? '' : err.message || '';
    // Ensure we don't go circular or crazily deep
    if (seen.has(err)) {
        return message + ': ...';
    }
    const cause = getErrorCause(err);
    if (cause) {
        seen.add(err);
        // @ts-ignore
        const skipIfVErrorStyleCause = typeof err.cause === 'function';
        return message + (skipIfVErrorStyleCause ? '' : ': ') + _messageWithCauses(cause, seen, skipIfVErrorStyleCause);
    } else {
        return message;
    }
};
/**
 * @param {Error} err
 * @returns {string}
 */ const messageWithCauses = (err)=>_messageWithCauses(err, new Set());
module.exports = {
    isErrorLike,
    getErrorCause,
    stackWithCauses,
    messageWithCauses
};
}),
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-wallet/node_modules/pino-std-serializers/lib/err-proto.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const seen = Symbol('circular-ref-tag');
const rawSymbol = Symbol('pino-raw-err-ref');
const pinoErrProto = Object.create({}, {
    type: {
        enumerable: true,
        writable: true,
        value: undefined
    },
    message: {
        enumerable: true,
        writable: true,
        value: undefined
    },
    stack: {
        enumerable: true,
        writable: true,
        value: undefined
    },
    aggregateErrors: {
        enumerable: true,
        writable: true,
        value: undefined
    },
    raw: {
        enumerable: false,
        get: function() {
            return this[rawSymbol];
        },
        set: function(val) {
            this[rawSymbol] = val;
        }
    }
});
Object.defineProperty(pinoErrProto, rawSymbol, {
    writable: true,
    value: {}
});
module.exports = {
    pinoErrProto,
    pinoErrorSymbols: {
        seen,
        rawSymbol
    }
};
}),
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-wallet/node_modules/pino-std-serializers/lib/err.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = errSerializer;
const { messageWithCauses, stackWithCauses, isErrorLike } = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-wallet/node_modules/pino-std-serializers/lib/err-helpers.js [app-ssr] (ecmascript)");
const { pinoErrProto, pinoErrorSymbols } = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-wallet/node_modules/pino-std-serializers/lib/err-proto.js [app-ssr] (ecmascript)");
const { seen } = pinoErrorSymbols;
const { toString } = Object.prototype;
function errSerializer(err) {
    if (!isErrorLike(err)) {
        return err;
    }
    err[seen] = undefined; // tag to prevent re-looking at this
    const _err = Object.create(pinoErrProto);
    _err.type = toString.call(err.constructor) === '[object Function]' ? err.constructor.name : err.name;
    _err.message = messageWithCauses(err);
    _err.stack = stackWithCauses(err);
    if (Array.isArray(err.errors)) {
        _err.aggregateErrors = err.errors.map((err)=>errSerializer(err));
    }
    for(const key in err){
        if (_err[key] === undefined) {
            const val = err[key];
            if (isErrorLike(val)) {
                // We append cause messages and stacks to _err, therefore skipping causes here
                if (key !== 'cause' && !Object.prototype.hasOwnProperty.call(val, seen)) {
                    _err[key] = errSerializer(val);
                }
            } else {
                _err[key] = val;
            }
        }
    }
    delete err[seen]; // clean up tag in case err is serialized again later
    _err.raw = err;
    return _err;
}
}),
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-wallet/node_modules/pino-std-serializers/lib/err-with-cause.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = errWithCauseSerializer;
const { isErrorLike } = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-wallet/node_modules/pino-std-serializers/lib/err-helpers.js [app-ssr] (ecmascript)");
const { pinoErrProto, pinoErrorSymbols } = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-wallet/node_modules/pino-std-serializers/lib/err-proto.js [app-ssr] (ecmascript)");
const { seen } = pinoErrorSymbols;
const { toString } = Object.prototype;
function errWithCauseSerializer(err) {
    if (!isErrorLike(err)) {
        return err;
    }
    err[seen] = undefined; // tag to prevent re-looking at this
    const _err = Object.create(pinoErrProto);
    _err.type = toString.call(err.constructor) === '[object Function]' ? err.constructor.name : err.name;
    _err.message = err.message;
    _err.stack = err.stack;
    if (Array.isArray(err.errors)) {
        _err.aggregateErrors = err.errors.map((err)=>errWithCauseSerializer(err));
    }
    if (isErrorLike(err.cause) && !Object.prototype.hasOwnProperty.call(err.cause, seen)) {
        _err.cause = errWithCauseSerializer(err.cause);
    }
    for(const key in err){
        if (_err[key] === undefined) {
            const val = err[key];
            if (isErrorLike(val)) {
                if (!Object.prototype.hasOwnProperty.call(val, seen)) {
                    _err[key] = errWithCauseSerializer(val);
                }
            } else {
                _err[key] = val;
            }
        }
    }
    delete err[seen]; // clean up tag in case err is serialized again later
    _err.raw = err;
    return _err;
}
}),
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-wallet/node_modules/pino-std-serializers/lib/req.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = {
    mapHttpRequest,
    reqSerializer
};
const rawSymbol = Symbol('pino-raw-req-ref');
const pinoReqProto = Object.create({}, {
    id: {
        enumerable: true,
        writable: true,
        value: ''
    },
    method: {
        enumerable: true,
        writable: true,
        value: ''
    },
    url: {
        enumerable: true,
        writable: true,
        value: ''
    },
    query: {
        enumerable: true,
        writable: true,
        value: ''
    },
    params: {
        enumerable: true,
        writable: true,
        value: ''
    },
    headers: {
        enumerable: true,
        writable: true,
        value: {}
    },
    remoteAddress: {
        enumerable: true,
        writable: true,
        value: ''
    },
    remotePort: {
        enumerable: true,
        writable: true,
        value: ''
    },
    raw: {
        enumerable: false,
        get: function() {
            return this[rawSymbol];
        },
        set: function(val) {
            this[rawSymbol] = val;
        }
    }
});
Object.defineProperty(pinoReqProto, rawSymbol, {
    writable: true,
    value: {}
});
function reqSerializer(req) {
    // req.info is for hapi compat.
    const connection = req.info || req.socket;
    const _req = Object.create(pinoReqProto);
    _req.id = typeof req.id === 'function' ? req.id() : req.id || (req.info ? req.info.id : undefined);
    _req.method = req.method;
    // req.originalUrl is for expressjs compat.
    if (req.originalUrl) {
        _req.url = req.originalUrl;
    } else {
        const path = req.path;
        // path for safe hapi compat.
        _req.url = typeof path === 'string' ? path : req.url ? req.url.path || req.url : undefined;
    }
    if (req.query) {
        _req.query = req.query;
    }
    if (req.params) {
        _req.params = req.params;
    }
    _req.headers = req.headers;
    _req.remoteAddress = connection && connection.remoteAddress;
    _req.remotePort = connection && connection.remotePort;
    // req.raw is  for hapi compat/equivalence
    _req.raw = req.raw || req;
    return _req;
}
function mapHttpRequest(req) {
    return {
        req: reqSerializer(req)
    };
}
}),
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-wallet/node_modules/pino-std-serializers/lib/res.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = {
    mapHttpResponse,
    resSerializer
};
const rawSymbol = Symbol('pino-raw-res-ref');
const pinoResProto = Object.create({}, {
    statusCode: {
        enumerable: true,
        writable: true,
        value: 0
    },
    headers: {
        enumerable: true,
        writable: true,
        value: ''
    },
    raw: {
        enumerable: false,
        get: function() {
            return this[rawSymbol];
        },
        set: function(val) {
            this[rawSymbol] = val;
        }
    }
});
Object.defineProperty(pinoResProto, rawSymbol, {
    writable: true,
    value: {}
});
function resSerializer(res) {
    const _res = Object.create(pinoResProto);
    _res.statusCode = res.headersSent ? res.statusCode : null;
    _res.headers = res.getHeaders ? res.getHeaders() : res._headers;
    _res.raw = res;
    return _res;
}
function mapHttpResponse(res) {
    return {
        res: resSerializer(res)
    };
}
}),
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-wallet/node_modules/pino-std-serializers/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const errSerializer = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-wallet/node_modules/pino-std-serializers/lib/err.js [app-ssr] (ecmascript)");
const errWithCauseSerializer = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-wallet/node_modules/pino-std-serializers/lib/err-with-cause.js [app-ssr] (ecmascript)");
const reqSerializers = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-wallet/node_modules/pino-std-serializers/lib/req.js [app-ssr] (ecmascript)");
const resSerializers = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-wallet/node_modules/pino-std-serializers/lib/res.js [app-ssr] (ecmascript)");
module.exports = {
    err: errSerializer,
    errWithCause: errWithCauseSerializer,
    mapHttpRequest: reqSerializers.mapHttpRequest,
    mapHttpResponse: resSerializers.mapHttpResponse,
    req: reqSerializers.reqSerializer,
    res: resSerializers.resSerializer,
    wrapErrorSerializer: function wrapErrorSerializer(customSerializer) {
        if (customSerializer === errSerializer) return customSerializer;
        return function wrapErrSerializer(err) {
            return customSerializer(errSerializer(err));
        };
    },
    wrapRequestSerializer: function wrapRequestSerializer(customSerializer) {
        if (customSerializer === reqSerializers.reqSerializer) return customSerializer;
        return function wrappedReqSerializer(req) {
            return customSerializer(reqSerializers.reqSerializer(req));
        };
    },
    wrapResponseSerializer: function wrapResponseSerializer(customSerializer) {
        if (customSerializer === resSerializers.resSerializer) return customSerializer;
        return function wrappedResSerializer(res) {
            return customSerializer(resSerializers.resSerializer(res));
        };
    }
};
}),
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit/node_modules/pino-std-serializers/lib/err-helpers.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// **************************************************************
// * Code initially copied/adapted from "pony-cause" npm module *
// * Please upstream improvements there                         *
// **************************************************************
const isErrorLike = (err)=>{
    return err && typeof err.message === 'string';
};
/**
 * @param {Error|{ cause?: unknown|(()=>err)}} err
 * @returns {Error|Object|undefined}
 */ const getErrorCause = (err)=>{
    if (!err) return;
    /** @type {unknown} */ // @ts-ignore
    const cause = err.cause;
    // VError / NError style causes
    if (typeof cause === 'function') {
        // @ts-ignore
        const causeResult = err.cause();
        return isErrorLike(causeResult) ? causeResult : undefined;
    } else {
        return isErrorLike(cause) ? cause : undefined;
    }
};
/**
 * Internal method that keeps a track of which error we have already added, to avoid circular recursion
 *
 * @private
 * @param {Error} err
 * @param {Set<Error>} seen
 * @returns {string}
 */ const _stackWithCauses = (err, seen)=>{
    if (!isErrorLike(err)) return '';
    const stack = err.stack || '';
    // Ensure we don't go circular or crazily deep
    if (seen.has(err)) {
        return stack + '\ncauses have become circular...';
    }
    const cause = getErrorCause(err);
    if (cause) {
        seen.add(err);
        return stack + '\ncaused by: ' + _stackWithCauses(cause, seen);
    } else {
        return stack;
    }
};
/**
 * @param {Error} err
 * @returns {string}
 */ const stackWithCauses = (err)=>_stackWithCauses(err, new Set());
/**
 * Internal method that keeps a track of which error we have already added, to avoid circular recursion
 *
 * @private
 * @param {Error} err
 * @param {Set<Error>} seen
 * @param {boolean} [skip]
 * @returns {string}
 */ const _messageWithCauses = (err, seen, skip)=>{
    if (!isErrorLike(err)) return '';
    const message = skip ? '' : err.message || '';
    // Ensure we don't go circular or crazily deep
    if (seen.has(err)) {
        return message + ': ...';
    }
    const cause = getErrorCause(err);
    if (cause) {
        seen.add(err);
        // @ts-ignore
        const skipIfVErrorStyleCause = typeof err.cause === 'function';
        return message + (skipIfVErrorStyleCause ? '' : ': ') + _messageWithCauses(cause, seen, skipIfVErrorStyleCause);
    } else {
        return message;
    }
};
/**
 * @param {Error} err
 * @returns {string}
 */ const messageWithCauses = (err)=>_messageWithCauses(err, new Set());
module.exports = {
    isErrorLike,
    getErrorCause,
    stackWithCauses,
    messageWithCauses
};
}),
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit/node_modules/pino-std-serializers/lib/err-proto.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const seen = Symbol('circular-ref-tag');
const rawSymbol = Symbol('pino-raw-err-ref');
const pinoErrProto = Object.create({}, {
    type: {
        enumerable: true,
        writable: true,
        value: undefined
    },
    message: {
        enumerable: true,
        writable: true,
        value: undefined
    },
    stack: {
        enumerable: true,
        writable: true,
        value: undefined
    },
    aggregateErrors: {
        enumerable: true,
        writable: true,
        value: undefined
    },
    raw: {
        enumerable: false,
        get: function() {
            return this[rawSymbol];
        },
        set: function(val) {
            this[rawSymbol] = val;
        }
    }
});
Object.defineProperty(pinoErrProto, rawSymbol, {
    writable: true,
    value: {}
});
module.exports = {
    pinoErrProto,
    pinoErrorSymbols: {
        seen,
        rawSymbol
    }
};
}),
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit/node_modules/pino-std-serializers/lib/err.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = errSerializer;
const { messageWithCauses, stackWithCauses, isErrorLike } = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit/node_modules/pino-std-serializers/lib/err-helpers.js [app-ssr] (ecmascript)");
const { pinoErrProto, pinoErrorSymbols } = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit/node_modules/pino-std-serializers/lib/err-proto.js [app-ssr] (ecmascript)");
const { seen } = pinoErrorSymbols;
const { toString } = Object.prototype;
function errSerializer(err) {
    if (!isErrorLike(err)) {
        return err;
    }
    err[seen] = undefined; // tag to prevent re-looking at this
    const _err = Object.create(pinoErrProto);
    _err.type = toString.call(err.constructor) === '[object Function]' ? err.constructor.name : err.name;
    _err.message = messageWithCauses(err);
    _err.stack = stackWithCauses(err);
    if (Array.isArray(err.errors)) {
        _err.aggregateErrors = err.errors.map((err)=>errSerializer(err));
    }
    for(const key in err){
        if (_err[key] === undefined) {
            const val = err[key];
            if (isErrorLike(val)) {
                // We append cause messages and stacks to _err, therefore skipping causes here
                if (key !== 'cause' && !Object.prototype.hasOwnProperty.call(val, seen)) {
                    _err[key] = errSerializer(val);
                }
            } else {
                _err[key] = val;
            }
        }
    }
    delete err[seen]; // clean up tag in case err is serialized again later
    _err.raw = err;
    return _err;
}
}),
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit/node_modules/pino-std-serializers/lib/err-with-cause.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = errWithCauseSerializer;
const { isErrorLike } = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit/node_modules/pino-std-serializers/lib/err-helpers.js [app-ssr] (ecmascript)");
const { pinoErrProto, pinoErrorSymbols } = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit/node_modules/pino-std-serializers/lib/err-proto.js [app-ssr] (ecmascript)");
const { seen } = pinoErrorSymbols;
const { toString } = Object.prototype;
function errWithCauseSerializer(err) {
    if (!isErrorLike(err)) {
        return err;
    }
    err[seen] = undefined; // tag to prevent re-looking at this
    const _err = Object.create(pinoErrProto);
    _err.type = toString.call(err.constructor) === '[object Function]' ? err.constructor.name : err.name;
    _err.message = err.message;
    _err.stack = err.stack;
    if (Array.isArray(err.errors)) {
        _err.aggregateErrors = err.errors.map((err)=>errWithCauseSerializer(err));
    }
    if (isErrorLike(err.cause) && !Object.prototype.hasOwnProperty.call(err.cause, seen)) {
        _err.cause = errWithCauseSerializer(err.cause);
    }
    for(const key in err){
        if (_err[key] === undefined) {
            const val = err[key];
            if (isErrorLike(val)) {
                if (!Object.prototype.hasOwnProperty.call(val, seen)) {
                    _err[key] = errWithCauseSerializer(val);
                }
            } else {
                _err[key] = val;
            }
        }
    }
    delete err[seen]; // clean up tag in case err is serialized again later
    _err.raw = err;
    return _err;
}
}),
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit/node_modules/pino-std-serializers/lib/req.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = {
    mapHttpRequest,
    reqSerializer
};
const rawSymbol = Symbol('pino-raw-req-ref');
const pinoReqProto = Object.create({}, {
    id: {
        enumerable: true,
        writable: true,
        value: ''
    },
    method: {
        enumerable: true,
        writable: true,
        value: ''
    },
    url: {
        enumerable: true,
        writable: true,
        value: ''
    },
    query: {
        enumerable: true,
        writable: true,
        value: ''
    },
    params: {
        enumerable: true,
        writable: true,
        value: ''
    },
    headers: {
        enumerable: true,
        writable: true,
        value: {}
    },
    remoteAddress: {
        enumerable: true,
        writable: true,
        value: ''
    },
    remotePort: {
        enumerable: true,
        writable: true,
        value: ''
    },
    raw: {
        enumerable: false,
        get: function() {
            return this[rawSymbol];
        },
        set: function(val) {
            this[rawSymbol] = val;
        }
    }
});
Object.defineProperty(pinoReqProto, rawSymbol, {
    writable: true,
    value: {}
});
function reqSerializer(req) {
    // req.info is for hapi compat.
    const connection = req.info || req.socket;
    const _req = Object.create(pinoReqProto);
    _req.id = typeof req.id === 'function' ? req.id() : req.id || (req.info ? req.info.id : undefined);
    _req.method = req.method;
    // req.originalUrl is for expressjs compat.
    if (req.originalUrl) {
        _req.url = req.originalUrl;
    } else {
        const path = req.path;
        // path for safe hapi compat.
        _req.url = typeof path === 'string' ? path : req.url ? req.url.path || req.url : undefined;
    }
    if (req.query) {
        _req.query = req.query;
    }
    if (req.params) {
        _req.params = req.params;
    }
    _req.headers = req.headers;
    _req.remoteAddress = connection && connection.remoteAddress;
    _req.remotePort = connection && connection.remotePort;
    // req.raw is  for hapi compat/equivalence
    _req.raw = req.raw || req;
    return _req;
}
function mapHttpRequest(req) {
    return {
        req: reqSerializer(req)
    };
}
}),
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit/node_modules/pino-std-serializers/lib/res.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = {
    mapHttpResponse,
    resSerializer
};
const rawSymbol = Symbol('pino-raw-res-ref');
const pinoResProto = Object.create({}, {
    statusCode: {
        enumerable: true,
        writable: true,
        value: 0
    },
    headers: {
        enumerable: true,
        writable: true,
        value: ''
    },
    raw: {
        enumerable: false,
        get: function() {
            return this[rawSymbol];
        },
        set: function(val) {
            this[rawSymbol] = val;
        }
    }
});
Object.defineProperty(pinoResProto, rawSymbol, {
    writable: true,
    value: {}
});
function resSerializer(res) {
    const _res = Object.create(pinoResProto);
    _res.statusCode = res.headersSent ? res.statusCode : null;
    _res.headers = res.getHeaders ? res.getHeaders() : res._headers;
    _res.raw = res;
    return _res;
}
function mapHttpResponse(res) {
    return {
        res: resSerializer(res)
    };
}
}),
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit/node_modules/pino-std-serializers/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const errSerializer = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit/node_modules/pino-std-serializers/lib/err.js [app-ssr] (ecmascript)");
const errWithCauseSerializer = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit/node_modules/pino-std-serializers/lib/err-with-cause.js [app-ssr] (ecmascript)");
const reqSerializers = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit/node_modules/pino-std-serializers/lib/req.js [app-ssr] (ecmascript)");
const resSerializers = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit/node_modules/pino-std-serializers/lib/res.js [app-ssr] (ecmascript)");
module.exports = {
    err: errSerializer,
    errWithCause: errWithCauseSerializer,
    mapHttpRequest: reqSerializers.mapHttpRequest,
    mapHttpResponse: resSerializers.mapHttpResponse,
    req: reqSerializers.reqSerializer,
    res: resSerializers.resSerializer,
    wrapErrorSerializer: function wrapErrorSerializer(customSerializer) {
        if (customSerializer === errSerializer) return customSerializer;
        return function wrapErrSerializer(err) {
            return customSerializer(errSerializer(err));
        };
    },
    wrapRequestSerializer: function wrapRequestSerializer(customSerializer) {
        if (customSerializer === reqSerializers.reqSerializer) return customSerializer;
        return function wrappedReqSerializer(req) {
            return customSerializer(reqSerializers.reqSerializer(req));
        };
    },
    wrapResponseSerializer: function wrapResponseSerializer(customSerializer) {
        if (customSerializer === resSerializers.resSerializer) return customSerializer;
        return function wrappedResSerializer(res) {
            return customSerializer(resSerializers.resSerializer(res));
        };
    }
};
}),
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-utils/node_modules/pino-std-serializers/lib/err-helpers.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// **************************************************************
// * Code initially copied/adapted from "pony-cause" npm module *
// * Please upstream improvements there                         *
// **************************************************************
const isErrorLike = (err)=>{
    return err && typeof err.message === 'string';
};
/**
 * @param {Error|{ cause?: unknown|(()=>err)}} err
 * @returns {Error|Object|undefined}
 */ const getErrorCause = (err)=>{
    if (!err) return;
    /** @type {unknown} */ // @ts-ignore
    const cause = err.cause;
    // VError / NError style causes
    if (typeof cause === 'function') {
        // @ts-ignore
        const causeResult = err.cause();
        return isErrorLike(causeResult) ? causeResult : undefined;
    } else {
        return isErrorLike(cause) ? cause : undefined;
    }
};
/**
 * Internal method that keeps a track of which error we have already added, to avoid circular recursion
 *
 * @private
 * @param {Error} err
 * @param {Set<Error>} seen
 * @returns {string}
 */ const _stackWithCauses = (err, seen)=>{
    if (!isErrorLike(err)) return '';
    const stack = err.stack || '';
    // Ensure we don't go circular or crazily deep
    if (seen.has(err)) {
        return stack + '\ncauses have become circular...';
    }
    const cause = getErrorCause(err);
    if (cause) {
        seen.add(err);
        return stack + '\ncaused by: ' + _stackWithCauses(cause, seen);
    } else {
        return stack;
    }
};
/**
 * @param {Error} err
 * @returns {string}
 */ const stackWithCauses = (err)=>_stackWithCauses(err, new Set());
/**
 * Internal method that keeps a track of which error we have already added, to avoid circular recursion
 *
 * @private
 * @param {Error} err
 * @param {Set<Error>} seen
 * @param {boolean} [skip]
 * @returns {string}
 */ const _messageWithCauses = (err, seen, skip)=>{
    if (!isErrorLike(err)) return '';
    const message = skip ? '' : err.message || '';
    // Ensure we don't go circular or crazily deep
    if (seen.has(err)) {
        return message + ': ...';
    }
    const cause = getErrorCause(err);
    if (cause) {
        seen.add(err);
        // @ts-ignore
        const skipIfVErrorStyleCause = typeof err.cause === 'function';
        return message + (skipIfVErrorStyleCause ? '' : ': ') + _messageWithCauses(cause, seen, skipIfVErrorStyleCause);
    } else {
        return message;
    }
};
/**
 * @param {Error} err
 * @returns {string}
 */ const messageWithCauses = (err)=>_messageWithCauses(err, new Set());
module.exports = {
    isErrorLike,
    getErrorCause,
    stackWithCauses,
    messageWithCauses
};
}),
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-utils/node_modules/pino-std-serializers/lib/err-proto.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const seen = Symbol('circular-ref-tag');
const rawSymbol = Symbol('pino-raw-err-ref');
const pinoErrProto = Object.create({}, {
    type: {
        enumerable: true,
        writable: true,
        value: undefined
    },
    message: {
        enumerable: true,
        writable: true,
        value: undefined
    },
    stack: {
        enumerable: true,
        writable: true,
        value: undefined
    },
    aggregateErrors: {
        enumerable: true,
        writable: true,
        value: undefined
    },
    raw: {
        enumerable: false,
        get: function() {
            return this[rawSymbol];
        },
        set: function(val) {
            this[rawSymbol] = val;
        }
    }
});
Object.defineProperty(pinoErrProto, rawSymbol, {
    writable: true,
    value: {}
});
module.exports = {
    pinoErrProto,
    pinoErrorSymbols: {
        seen,
        rawSymbol
    }
};
}),
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-utils/node_modules/pino-std-serializers/lib/err.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = errSerializer;
const { messageWithCauses, stackWithCauses, isErrorLike } = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-utils/node_modules/pino-std-serializers/lib/err-helpers.js [app-ssr] (ecmascript)");
const { pinoErrProto, pinoErrorSymbols } = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-utils/node_modules/pino-std-serializers/lib/err-proto.js [app-ssr] (ecmascript)");
const { seen } = pinoErrorSymbols;
const { toString } = Object.prototype;
function errSerializer(err) {
    if (!isErrorLike(err)) {
        return err;
    }
    err[seen] = undefined; // tag to prevent re-looking at this
    const _err = Object.create(pinoErrProto);
    _err.type = toString.call(err.constructor) === '[object Function]' ? err.constructor.name : err.name;
    _err.message = messageWithCauses(err);
    _err.stack = stackWithCauses(err);
    if (Array.isArray(err.errors)) {
        _err.aggregateErrors = err.errors.map((err)=>errSerializer(err));
    }
    for(const key in err){
        if (_err[key] === undefined) {
            const val = err[key];
            if (isErrorLike(val)) {
                // We append cause messages and stacks to _err, therefore skipping causes here
                if (key !== 'cause' && !Object.prototype.hasOwnProperty.call(val, seen)) {
                    _err[key] = errSerializer(val);
                }
            } else {
                _err[key] = val;
            }
        }
    }
    delete err[seen]; // clean up tag in case err is serialized again later
    _err.raw = err;
    return _err;
}
}),
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-utils/node_modules/pino-std-serializers/lib/err-with-cause.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = errWithCauseSerializer;
const { isErrorLike } = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-utils/node_modules/pino-std-serializers/lib/err-helpers.js [app-ssr] (ecmascript)");
const { pinoErrProto, pinoErrorSymbols } = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-utils/node_modules/pino-std-serializers/lib/err-proto.js [app-ssr] (ecmascript)");
const { seen } = pinoErrorSymbols;
const { toString } = Object.prototype;
function errWithCauseSerializer(err) {
    if (!isErrorLike(err)) {
        return err;
    }
    err[seen] = undefined; // tag to prevent re-looking at this
    const _err = Object.create(pinoErrProto);
    _err.type = toString.call(err.constructor) === '[object Function]' ? err.constructor.name : err.name;
    _err.message = err.message;
    _err.stack = err.stack;
    if (Array.isArray(err.errors)) {
        _err.aggregateErrors = err.errors.map((err)=>errWithCauseSerializer(err));
    }
    if (isErrorLike(err.cause) && !Object.prototype.hasOwnProperty.call(err.cause, seen)) {
        _err.cause = errWithCauseSerializer(err.cause);
    }
    for(const key in err){
        if (_err[key] === undefined) {
            const val = err[key];
            if (isErrorLike(val)) {
                if (!Object.prototype.hasOwnProperty.call(val, seen)) {
                    _err[key] = errWithCauseSerializer(val);
                }
            } else {
                _err[key] = val;
            }
        }
    }
    delete err[seen]; // clean up tag in case err is serialized again later
    _err.raw = err;
    return _err;
}
}),
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-utils/node_modules/pino-std-serializers/lib/req.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = {
    mapHttpRequest,
    reqSerializer
};
const rawSymbol = Symbol('pino-raw-req-ref');
const pinoReqProto = Object.create({}, {
    id: {
        enumerable: true,
        writable: true,
        value: ''
    },
    method: {
        enumerable: true,
        writable: true,
        value: ''
    },
    url: {
        enumerable: true,
        writable: true,
        value: ''
    },
    query: {
        enumerable: true,
        writable: true,
        value: ''
    },
    params: {
        enumerable: true,
        writable: true,
        value: ''
    },
    headers: {
        enumerable: true,
        writable: true,
        value: {}
    },
    remoteAddress: {
        enumerable: true,
        writable: true,
        value: ''
    },
    remotePort: {
        enumerable: true,
        writable: true,
        value: ''
    },
    raw: {
        enumerable: false,
        get: function() {
            return this[rawSymbol];
        },
        set: function(val) {
            this[rawSymbol] = val;
        }
    }
});
Object.defineProperty(pinoReqProto, rawSymbol, {
    writable: true,
    value: {}
});
function reqSerializer(req) {
    // req.info is for hapi compat.
    const connection = req.info || req.socket;
    const _req = Object.create(pinoReqProto);
    _req.id = typeof req.id === 'function' ? req.id() : req.id || (req.info ? req.info.id : undefined);
    _req.method = req.method;
    // req.originalUrl is for expressjs compat.
    if (req.originalUrl) {
        _req.url = req.originalUrl;
    } else {
        const path = req.path;
        // path for safe hapi compat.
        _req.url = typeof path === 'string' ? path : req.url ? req.url.path || req.url : undefined;
    }
    if (req.query) {
        _req.query = req.query;
    }
    if (req.params) {
        _req.params = req.params;
    }
    _req.headers = req.headers;
    _req.remoteAddress = connection && connection.remoteAddress;
    _req.remotePort = connection && connection.remotePort;
    // req.raw is  for hapi compat/equivalence
    _req.raw = req.raw || req;
    return _req;
}
function mapHttpRequest(req) {
    return {
        req: reqSerializer(req)
    };
}
}),
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-utils/node_modules/pino-std-serializers/lib/res.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = {
    mapHttpResponse,
    resSerializer
};
const rawSymbol = Symbol('pino-raw-res-ref');
const pinoResProto = Object.create({}, {
    statusCode: {
        enumerable: true,
        writable: true,
        value: 0
    },
    headers: {
        enumerable: true,
        writable: true,
        value: ''
    },
    raw: {
        enumerable: false,
        get: function() {
            return this[rawSymbol];
        },
        set: function(val) {
            this[rawSymbol] = val;
        }
    }
});
Object.defineProperty(pinoResProto, rawSymbol, {
    writable: true,
    value: {}
});
function resSerializer(res) {
    const _res = Object.create(pinoResProto);
    _res.statusCode = res.headersSent ? res.statusCode : null;
    _res.headers = res.getHeaders ? res.getHeaders() : res._headers;
    _res.raw = res;
    return _res;
}
function mapHttpResponse(res) {
    return {
        res: resSerializer(res)
    };
}
}),
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-utils/node_modules/pino-std-serializers/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const errSerializer = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-utils/node_modules/pino-std-serializers/lib/err.js [app-ssr] (ecmascript)");
const errWithCauseSerializer = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-utils/node_modules/pino-std-serializers/lib/err-with-cause.js [app-ssr] (ecmascript)");
const reqSerializers = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-utils/node_modules/pino-std-serializers/lib/req.js [app-ssr] (ecmascript)");
const resSerializers = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-utils/node_modules/pino-std-serializers/lib/res.js [app-ssr] (ecmascript)");
module.exports = {
    err: errSerializer,
    errWithCause: errWithCauseSerializer,
    mapHttpRequest: reqSerializers.mapHttpRequest,
    mapHttpResponse: resSerializers.mapHttpResponse,
    req: reqSerializers.reqSerializer,
    res: resSerializers.resSerializer,
    wrapErrorSerializer: function wrapErrorSerializer(customSerializer) {
        if (customSerializer === errSerializer) return customSerializer;
        return function wrapErrSerializer(err) {
            return customSerializer(errSerializer(err));
        };
    },
    wrapRequestSerializer: function wrapRequestSerializer(customSerializer) {
        if (customSerializer === reqSerializers.reqSerializer) return customSerializer;
        return function wrappedReqSerializer(req) {
            return customSerializer(reqSerializers.reqSerializer(req));
        };
    },
    wrapResponseSerializer: function wrapResponseSerializer(customSerializer) {
        if (customSerializer === resSerializers.resSerializer) return customSerializer;
        return function wrappedResSerializer(res) {
            return customSerializer(resSerializers.resSerializer(res));
        };
    }
};
}),
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-adapter-wagmi/node_modules/pino-std-serializers/lib/err-helpers.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// **************************************************************
// * Code initially copied/adapted from "pony-cause" npm module *
// * Please upstream improvements there                         *
// **************************************************************
const isErrorLike = (err)=>{
    return err && typeof err.message === 'string';
};
/**
 * @param {Error|{ cause?: unknown|(()=>err)}} err
 * @returns {Error|Object|undefined}
 */ const getErrorCause = (err)=>{
    if (!err) return;
    /** @type {unknown} */ // @ts-ignore
    const cause = err.cause;
    // VError / NError style causes
    if (typeof cause === 'function') {
        // @ts-ignore
        const causeResult = err.cause();
        return isErrorLike(causeResult) ? causeResult : undefined;
    } else {
        return isErrorLike(cause) ? cause : undefined;
    }
};
/**
 * Internal method that keeps a track of which error we have already added, to avoid circular recursion
 *
 * @private
 * @param {Error} err
 * @param {Set<Error>} seen
 * @returns {string}
 */ const _stackWithCauses = (err, seen)=>{
    if (!isErrorLike(err)) return '';
    const stack = err.stack || '';
    // Ensure we don't go circular or crazily deep
    if (seen.has(err)) {
        return stack + '\ncauses have become circular...';
    }
    const cause = getErrorCause(err);
    if (cause) {
        seen.add(err);
        return stack + '\ncaused by: ' + _stackWithCauses(cause, seen);
    } else {
        return stack;
    }
};
/**
 * @param {Error} err
 * @returns {string}
 */ const stackWithCauses = (err)=>_stackWithCauses(err, new Set());
/**
 * Internal method that keeps a track of which error we have already added, to avoid circular recursion
 *
 * @private
 * @param {Error} err
 * @param {Set<Error>} seen
 * @param {boolean} [skip]
 * @returns {string}
 */ const _messageWithCauses = (err, seen, skip)=>{
    if (!isErrorLike(err)) return '';
    const message = skip ? '' : err.message || '';
    // Ensure we don't go circular or crazily deep
    if (seen.has(err)) {
        return message + ': ...';
    }
    const cause = getErrorCause(err);
    if (cause) {
        seen.add(err);
        // @ts-ignore
        const skipIfVErrorStyleCause = typeof err.cause === 'function';
        return message + (skipIfVErrorStyleCause ? '' : ': ') + _messageWithCauses(cause, seen, skipIfVErrorStyleCause);
    } else {
        return message;
    }
};
/**
 * @param {Error} err
 * @returns {string}
 */ const messageWithCauses = (err)=>_messageWithCauses(err, new Set());
module.exports = {
    isErrorLike,
    getErrorCause,
    stackWithCauses,
    messageWithCauses
};
}),
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-adapter-wagmi/node_modules/pino-std-serializers/lib/err-proto.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const seen = Symbol('circular-ref-tag');
const rawSymbol = Symbol('pino-raw-err-ref');
const pinoErrProto = Object.create({}, {
    type: {
        enumerable: true,
        writable: true,
        value: undefined
    },
    message: {
        enumerable: true,
        writable: true,
        value: undefined
    },
    stack: {
        enumerable: true,
        writable: true,
        value: undefined
    },
    aggregateErrors: {
        enumerable: true,
        writable: true,
        value: undefined
    },
    raw: {
        enumerable: false,
        get: function() {
            return this[rawSymbol];
        },
        set: function(val) {
            this[rawSymbol] = val;
        }
    }
});
Object.defineProperty(pinoErrProto, rawSymbol, {
    writable: true,
    value: {}
});
module.exports = {
    pinoErrProto,
    pinoErrorSymbols: {
        seen,
        rawSymbol
    }
};
}),
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-adapter-wagmi/node_modules/pino-std-serializers/lib/err.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = errSerializer;
const { messageWithCauses, stackWithCauses, isErrorLike } = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-adapter-wagmi/node_modules/pino-std-serializers/lib/err-helpers.js [app-ssr] (ecmascript)");
const { pinoErrProto, pinoErrorSymbols } = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-adapter-wagmi/node_modules/pino-std-serializers/lib/err-proto.js [app-ssr] (ecmascript)");
const { seen } = pinoErrorSymbols;
const { toString } = Object.prototype;
function errSerializer(err) {
    if (!isErrorLike(err)) {
        return err;
    }
    err[seen] = undefined; // tag to prevent re-looking at this
    const _err = Object.create(pinoErrProto);
    _err.type = toString.call(err.constructor) === '[object Function]' ? err.constructor.name : err.name;
    _err.message = messageWithCauses(err);
    _err.stack = stackWithCauses(err);
    if (Array.isArray(err.errors)) {
        _err.aggregateErrors = err.errors.map((err)=>errSerializer(err));
    }
    for(const key in err){
        if (_err[key] === undefined) {
            const val = err[key];
            if (isErrorLike(val)) {
                // We append cause messages and stacks to _err, therefore skipping causes here
                if (key !== 'cause' && !Object.prototype.hasOwnProperty.call(val, seen)) {
                    _err[key] = errSerializer(val);
                }
            } else {
                _err[key] = val;
            }
        }
    }
    delete err[seen]; // clean up tag in case err is serialized again later
    _err.raw = err;
    return _err;
}
}),
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-adapter-wagmi/node_modules/pino-std-serializers/lib/err-with-cause.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = errWithCauseSerializer;
const { isErrorLike } = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-adapter-wagmi/node_modules/pino-std-serializers/lib/err-helpers.js [app-ssr] (ecmascript)");
const { pinoErrProto, pinoErrorSymbols } = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-adapter-wagmi/node_modules/pino-std-serializers/lib/err-proto.js [app-ssr] (ecmascript)");
const { seen } = pinoErrorSymbols;
const { toString } = Object.prototype;
function errWithCauseSerializer(err) {
    if (!isErrorLike(err)) {
        return err;
    }
    err[seen] = undefined; // tag to prevent re-looking at this
    const _err = Object.create(pinoErrProto);
    _err.type = toString.call(err.constructor) === '[object Function]' ? err.constructor.name : err.name;
    _err.message = err.message;
    _err.stack = err.stack;
    if (Array.isArray(err.errors)) {
        _err.aggregateErrors = err.errors.map((err)=>errWithCauseSerializer(err));
    }
    if (isErrorLike(err.cause) && !Object.prototype.hasOwnProperty.call(err.cause, seen)) {
        _err.cause = errWithCauseSerializer(err.cause);
    }
    for(const key in err){
        if (_err[key] === undefined) {
            const val = err[key];
            if (isErrorLike(val)) {
                if (!Object.prototype.hasOwnProperty.call(val, seen)) {
                    _err[key] = errWithCauseSerializer(val);
                }
            } else {
                _err[key] = val;
            }
        }
    }
    delete err[seen]; // clean up tag in case err is serialized again later
    _err.raw = err;
    return _err;
}
}),
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-adapter-wagmi/node_modules/pino-std-serializers/lib/req.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = {
    mapHttpRequest,
    reqSerializer
};
const rawSymbol = Symbol('pino-raw-req-ref');
const pinoReqProto = Object.create({}, {
    id: {
        enumerable: true,
        writable: true,
        value: ''
    },
    method: {
        enumerable: true,
        writable: true,
        value: ''
    },
    url: {
        enumerable: true,
        writable: true,
        value: ''
    },
    query: {
        enumerable: true,
        writable: true,
        value: ''
    },
    params: {
        enumerable: true,
        writable: true,
        value: ''
    },
    headers: {
        enumerable: true,
        writable: true,
        value: {}
    },
    remoteAddress: {
        enumerable: true,
        writable: true,
        value: ''
    },
    remotePort: {
        enumerable: true,
        writable: true,
        value: ''
    },
    raw: {
        enumerable: false,
        get: function() {
            return this[rawSymbol];
        },
        set: function(val) {
            this[rawSymbol] = val;
        }
    }
});
Object.defineProperty(pinoReqProto, rawSymbol, {
    writable: true,
    value: {}
});
function reqSerializer(req) {
    // req.info is for hapi compat.
    const connection = req.info || req.socket;
    const _req = Object.create(pinoReqProto);
    _req.id = typeof req.id === 'function' ? req.id() : req.id || (req.info ? req.info.id : undefined);
    _req.method = req.method;
    // req.originalUrl is for expressjs compat.
    if (req.originalUrl) {
        _req.url = req.originalUrl;
    } else {
        const path = req.path;
        // path for safe hapi compat.
        _req.url = typeof path === 'string' ? path : req.url ? req.url.path || req.url : undefined;
    }
    if (req.query) {
        _req.query = req.query;
    }
    if (req.params) {
        _req.params = req.params;
    }
    _req.headers = req.headers;
    _req.remoteAddress = connection && connection.remoteAddress;
    _req.remotePort = connection && connection.remotePort;
    // req.raw is  for hapi compat/equivalence
    _req.raw = req.raw || req;
    return _req;
}
function mapHttpRequest(req) {
    return {
        req: reqSerializer(req)
    };
}
}),
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-adapter-wagmi/node_modules/pino-std-serializers/lib/res.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = {
    mapHttpResponse,
    resSerializer
};
const rawSymbol = Symbol('pino-raw-res-ref');
const pinoResProto = Object.create({}, {
    statusCode: {
        enumerable: true,
        writable: true,
        value: 0
    },
    headers: {
        enumerable: true,
        writable: true,
        value: ''
    },
    raw: {
        enumerable: false,
        get: function() {
            return this[rawSymbol];
        },
        set: function(val) {
            this[rawSymbol] = val;
        }
    }
});
Object.defineProperty(pinoResProto, rawSymbol, {
    writable: true,
    value: {}
});
function resSerializer(res) {
    const _res = Object.create(pinoResProto);
    _res.statusCode = res.headersSent ? res.statusCode : null;
    _res.headers = res.getHeaders ? res.getHeaders() : res._headers;
    _res.raw = res;
    return _res;
}
function mapHttpResponse(res) {
    return {
        res: resSerializer(res)
    };
}
}),
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-adapter-wagmi/node_modules/pino-std-serializers/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const errSerializer = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-adapter-wagmi/node_modules/pino-std-serializers/lib/err.js [app-ssr] (ecmascript)");
const errWithCauseSerializer = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-adapter-wagmi/node_modules/pino-std-serializers/lib/err-with-cause.js [app-ssr] (ecmascript)");
const reqSerializers = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-adapter-wagmi/node_modules/pino-std-serializers/lib/req.js [app-ssr] (ecmascript)");
const resSerializers = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-adapter-wagmi/node_modules/pino-std-serializers/lib/res.js [app-ssr] (ecmascript)");
module.exports = {
    err: errSerializer,
    errWithCause: errWithCauseSerializer,
    mapHttpRequest: reqSerializers.mapHttpRequest,
    mapHttpResponse: resSerializers.mapHttpResponse,
    req: reqSerializers.reqSerializer,
    res: resSerializers.resSerializer,
    wrapErrorSerializer: function wrapErrorSerializer(customSerializer) {
        if (customSerializer === errSerializer) return customSerializer;
        return function wrapErrSerializer(err) {
            return customSerializer(errSerializer(err));
        };
    },
    wrapRequestSerializer: function wrapRequestSerializer(customSerializer) {
        if (customSerializer === reqSerializers.reqSerializer) return customSerializer;
        return function wrappedReqSerializer(req) {
            return customSerializer(reqSerializers.reqSerializer(req));
        };
    },
    wrapResponseSerializer: function wrapResponseSerializer(customSerializer) {
        if (customSerializer === resSerializers.resSerializer) return customSerializer;
        return function wrappedResSerializer(res) {
            return customSerializer(resSerializers.resSerializer(res));
        };
    }
};
}),
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-controllers/node_modules/sonic-boom/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const fs = __turbopack_context__.r("[externals]/fs [external] (fs, cjs)");
const EventEmitter = __turbopack_context__.r("[externals]/events [external] (events, cjs)");
const inherits = __turbopack_context__.r("[externals]/util [external] (util, cjs)").inherits;
const path = __turbopack_context__.r("[externals]/path [external] (path, cjs)");
const sleep = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/atomic-sleep/index.js [app-ssr] (ecmascript)");
const assert = __turbopack_context__.r("[externals]/assert [external] (assert, cjs)");
const BUSY_WRITE_TIMEOUT = 100;
const kEmptyBuffer = Buffer.allocUnsafe(0);
// 16 KB. Don't write more than docker buffer size.
// https://github.com/moby/moby/blob/513ec73831269947d38a644c278ce3cac36783b2/daemon/logger/copier.go#L13
const MAX_WRITE = 16 * 1024;
const kContentModeBuffer = 'buffer';
const kContentModeUtf8 = 'utf8';
const [major, minor] = (process.versions.node || '0.0').split('.').map(Number);
const kCopyBuffer = major >= 22 && minor >= 7;
function openFile(file, sonic) {
    sonic._opening = true;
    sonic._writing = true;
    sonic._asyncDrainScheduled = false;
    // NOTE: 'error' and 'ready' events emitted below only relevant when sonic.sync===false
    // for sync mode, there is no way to add a listener that will receive these
    function fileOpened(err, fd) {
        if (err) {
            sonic._reopening = false;
            sonic._writing = false;
            sonic._opening = false;
            if (sonic.sync) {
                process.nextTick(()=>{
                    if (sonic.listenerCount('error') > 0) {
                        sonic.emit('error', err);
                    }
                });
            } else {
                sonic.emit('error', err);
            }
            return;
        }
        const reopening = sonic._reopening;
        sonic.fd = fd;
        sonic.file = file;
        sonic._reopening = false;
        sonic._opening = false;
        sonic._writing = false;
        if (sonic.sync) {
            process.nextTick(()=>sonic.emit('ready'));
        } else {
            sonic.emit('ready');
        }
        if (sonic.destroyed) {
            return;
        }
        // start
        if (!sonic._writing && sonic._len > sonic.minLength || sonic._flushPending) {
            sonic._actualWrite();
        } else if (reopening) {
            process.nextTick(()=>sonic.emit('drain'));
        }
    }
    const flags = sonic.append ? 'a' : 'w';
    const mode = sonic.mode;
    if (sonic.sync) {
        try {
            if (sonic.mkdir) fs.mkdirSync(path.dirname(file), {
                recursive: true
            });
            const fd = fs.openSync(file, flags, mode);
            fileOpened(null, fd);
        } catch (err) {
            fileOpened(err);
            throw err;
        }
    } else if (sonic.mkdir) {
        fs.mkdir(path.dirname(file), {
            recursive: true
        }, (err)=>{
            if (err) return fileOpened(err);
            fs.open(file, flags, mode, fileOpened);
        });
    } else {
        fs.open(file, flags, mode, fileOpened);
    }
}
function SonicBoom(opts) {
    if (!(this instanceof SonicBoom)) {
        return new SonicBoom(opts);
    }
    let { fd, dest, minLength, maxLength, maxWrite, periodicFlush, sync, append = true, mkdir, retryEAGAIN, fsync, contentMode, mode } = opts || {};
    fd = fd || dest;
    this._len = 0;
    this.fd = -1;
    this._bufs = [];
    this._lens = [];
    this._writing = false;
    this._ending = false;
    this._reopening = false;
    this._asyncDrainScheduled = false;
    this._flushPending = false;
    this._hwm = Math.max(minLength || 0, 16387);
    this.file = null;
    this.destroyed = false;
    this.minLength = minLength || 0;
    this.maxLength = maxLength || 0;
    this.maxWrite = maxWrite || MAX_WRITE;
    this._periodicFlush = periodicFlush || 0;
    this._periodicFlushTimer = undefined;
    this.sync = sync || false;
    this.writable = true;
    this._fsync = fsync || false;
    this.append = append || false;
    this.mode = mode;
    this.retryEAGAIN = retryEAGAIN || (()=>true);
    this.mkdir = mkdir || false;
    let fsWriteSync;
    let fsWrite;
    if (contentMode === kContentModeBuffer) {
        this._writingBuf = kEmptyBuffer;
        this.write = writeBuffer;
        this.flush = flushBuffer;
        this.flushSync = flushBufferSync;
        this._actualWrite = actualWriteBuffer;
        fsWriteSync = ()=>fs.writeSync(this.fd, this._writingBuf);
        fsWrite = ()=>fs.write(this.fd, this._writingBuf, this.release);
    } else if (contentMode === undefined || contentMode === kContentModeUtf8) {
        this._writingBuf = '';
        this.write = write;
        this.flush = flush;
        this.flushSync = flushSync;
        this._actualWrite = actualWrite;
        fsWriteSync = ()=>fs.writeSync(this.fd, this._writingBuf, 'utf8');
        fsWrite = ()=>fs.write(this.fd, this._writingBuf, 'utf8', this.release);
    } else {
        throw new Error(`SonicBoom supports "${kContentModeUtf8}" and "${kContentModeBuffer}", but passed ${contentMode}`);
    }
    if (typeof fd === 'number') {
        this.fd = fd;
        process.nextTick(()=>this.emit('ready'));
    } else if (typeof fd === 'string') {
        openFile(fd, this);
    } else {
        throw new Error('SonicBoom supports only file descriptors and files');
    }
    if (this.minLength >= this.maxWrite) {
        throw new Error(`minLength should be smaller than maxWrite (${this.maxWrite})`);
    }
    this.release = (err, n)=>{
        if (err) {
            if ((err.code === 'EAGAIN' || err.code === 'EBUSY') && this.retryEAGAIN(err, this._writingBuf.length, this._len - this._writingBuf.length)) {
                if (this.sync) {
                    // This error code should not happen in sync mode, because it is
                    // not using the underlining operating system asynchronous functions.
                    // However it happens, and so we handle it.
                    // Ref: https://github.com/pinojs/pino/issues/783
                    try {
                        sleep(BUSY_WRITE_TIMEOUT);
                        this.release(undefined, 0);
                    } catch (err) {
                        this.release(err);
                    }
                } else {
                    // Let's give the destination some time to process the chunk.
                    setTimeout(fsWrite, BUSY_WRITE_TIMEOUT);
                }
            } else {
                this._writing = false;
                this.emit('error', err);
            }
            return;
        }
        this.emit('write', n);
        const releasedBufObj = releaseWritingBuf(this._writingBuf, this._len, n);
        this._len = releasedBufObj.len;
        this._writingBuf = releasedBufObj.writingBuf;
        if (this._writingBuf.length) {
            if (!this.sync) {
                fsWrite();
                return;
            }
            try {
                do {
                    const n = fsWriteSync();
                    const releasedBufObj = releaseWritingBuf(this._writingBuf, this._len, n);
                    this._len = releasedBufObj.len;
                    this._writingBuf = releasedBufObj.writingBuf;
                }while (this._writingBuf.length)
            } catch (err) {
                this.release(err);
                return;
            }
        }
        if (this._fsync) {
            fs.fsyncSync(this.fd);
        }
        const len = this._len;
        if (this._reopening) {
            this._writing = false;
            this._reopening = false;
            this.reopen();
        } else if (len > this.minLength) {
            this._actualWrite();
        } else if (this._ending) {
            if (len > 0) {
                this._actualWrite();
            } else {
                this._writing = false;
                actualClose(this);
            }
        } else {
            this._writing = false;
            if (this.sync) {
                if (!this._asyncDrainScheduled) {
                    this._asyncDrainScheduled = true;
                    process.nextTick(emitDrain, this);
                }
            } else {
                this.emit('drain');
            }
        }
    };
    this.on('newListener', function(name) {
        if (name === 'drain') {
            this._asyncDrainScheduled = false;
        }
    });
    if (this._periodicFlush !== 0) {
        this._periodicFlushTimer = setInterval(()=>this.flush(null), this._periodicFlush);
        this._periodicFlushTimer.unref();
    }
}
/**
 * Release the writingBuf after fs.write n bytes data
 * @param {string | Buffer} writingBuf - currently writing buffer, usually be instance._writingBuf.
 * @param {number} len - currently buffer length, usually be instance._len.
 * @param {number} n - number of bytes fs already written
 * @returns {{writingBuf: string | Buffer, len: number}} released writingBuf and length
 */ function releaseWritingBuf(writingBuf, len, n) {
    // if Buffer.byteLength is equal to n, that means writingBuf contains no multi-byte character
    if (typeof writingBuf === 'string' && Buffer.byteLength(writingBuf) !== n) {
        // Since the fs.write callback parameter `n` means how many bytes the passed of string
        // We calculate the original string length for avoiding the multi-byte character issue
        n = Buffer.from(writingBuf).subarray(0, n).toString().length;
    }
    len = Math.max(len - n, 0);
    writingBuf = writingBuf.slice(n);
    return {
        writingBuf,
        len
    };
}
function emitDrain(sonic) {
    const hasListeners = sonic.listenerCount('drain') > 0;
    if (!hasListeners) return;
    sonic._asyncDrainScheduled = false;
    sonic.emit('drain');
}
inherits(SonicBoom, EventEmitter);
function mergeBuf(bufs, len) {
    if (bufs.length === 0) {
        return kEmptyBuffer;
    }
    if (bufs.length === 1) {
        return bufs[0];
    }
    return Buffer.concat(bufs, len);
}
function write(data) {
    if (this.destroyed) {
        throw new Error('SonicBoom destroyed');
    }
    const len = this._len + data.length;
    const bufs = this._bufs;
    if (this.maxLength && len > this.maxLength) {
        this.emit('drop', data);
        return this._len < this._hwm;
    }
    if (bufs.length === 0 || bufs[bufs.length - 1].length + data.length > this.maxWrite) {
        bufs.push('' + data);
    } else {
        bufs[bufs.length - 1] += data;
    }
    this._len = len;
    if (!this._writing && this._len >= this.minLength) {
        this._actualWrite();
    }
    return this._len < this._hwm;
}
function writeBuffer(data) {
    if (this.destroyed) {
        throw new Error('SonicBoom destroyed');
    }
    const len = this._len + data.length;
    const bufs = this._bufs;
    const lens = this._lens;
    if (this.maxLength && len > this.maxLength) {
        this.emit('drop', data);
        return this._len < this._hwm;
    }
    if (bufs.length === 0 || lens[lens.length - 1] + data.length > this.maxWrite) {
        bufs.push([
            data
        ]);
        lens.push(data.length);
    } else {
        bufs[bufs.length - 1].push(data);
        lens[lens.length - 1] += data.length;
    }
    this._len = len;
    if (!this._writing && this._len >= this.minLength) {
        this._actualWrite();
    }
    return this._len < this._hwm;
}
function callFlushCallbackOnDrain(cb) {
    this._flushPending = true;
    const onDrain = ()=>{
        // only if _fsync is false to avoid double fsync
        if (!this._fsync) {
            try {
                fs.fsync(this.fd, (err)=>{
                    this._flushPending = false;
                    cb(err);
                });
            } catch (err) {
                cb(err);
            }
        } else {
            this._flushPending = false;
            cb();
        }
        this.off('error', onError);
    };
    const onError = (err)=>{
        this._flushPending = false;
        cb(err);
        this.off('drain', onDrain);
    };
    this.once('drain', onDrain);
    this.once('error', onError);
}
function flush(cb) {
    if (cb != null && typeof cb !== 'function') {
        throw new Error('flush cb must be a function');
    }
    if (this.destroyed) {
        const error = new Error('SonicBoom destroyed');
        if (cb) {
            cb(error);
            return;
        }
        throw error;
    }
    if (this.minLength <= 0) {
        cb?.();
        return;
    }
    if (cb) {
        callFlushCallbackOnDrain.call(this, cb);
    }
    if (this._writing) {
        return;
    }
    if (this._bufs.length === 0) {
        this._bufs.push('');
    }
    this._actualWrite();
}
function flushBuffer(cb) {
    if (cb != null && typeof cb !== 'function') {
        throw new Error('flush cb must be a function');
    }
    if (this.destroyed) {
        const error = new Error('SonicBoom destroyed');
        if (cb) {
            cb(error);
            return;
        }
        throw error;
    }
    if (this.minLength <= 0) {
        cb?.();
        return;
    }
    if (cb) {
        callFlushCallbackOnDrain.call(this, cb);
    }
    if (this._writing) {
        return;
    }
    if (this._bufs.length === 0) {
        this._bufs.push([]);
        this._lens.push(0);
    }
    this._actualWrite();
}
SonicBoom.prototype.reopen = function(file) {
    if (this.destroyed) {
        throw new Error('SonicBoom destroyed');
    }
    if (this._opening) {
        this.once('ready', ()=>{
            this.reopen(file);
        });
        return;
    }
    if (this._ending) {
        return;
    }
    if (!this.file) {
        throw new Error('Unable to reopen a file descriptor, you must pass a file to SonicBoom');
    }
    if (file) {
        this.file = file;
    }
    this._reopening = true;
    if (this._writing) {
        return;
    }
    const fd = this.fd;
    this.once('ready', ()=>{
        if (fd !== this.fd) {
            fs.close(fd, (err)=>{
                if (err) {
                    return this.emit('error', err);
                }
            });
        }
    });
    openFile(this.file, this);
};
SonicBoom.prototype.end = function() {
    if (this.destroyed) {
        throw new Error('SonicBoom destroyed');
    }
    if (this._opening) {
        this.once('ready', ()=>{
            this.end();
        });
        return;
    }
    if (this._ending) {
        return;
    }
    this._ending = true;
    if (this._writing) {
        return;
    }
    if (this._len > 0 && this.fd >= 0) {
        this._actualWrite();
    } else {
        actualClose(this);
    }
};
function flushSync() {
    if (this.destroyed) {
        throw new Error('SonicBoom destroyed');
    }
    if (this.fd < 0) {
        throw new Error('sonic boom is not ready yet');
    }
    if (!this._writing && this._writingBuf.length > 0) {
        this._bufs.unshift(this._writingBuf);
        this._writingBuf = '';
    }
    let buf = '';
    while(this._bufs.length || buf){
        if (buf.length <= 0) {
            buf = this._bufs[0];
        }
        try {
            const n = fs.writeSync(this.fd, buf, 'utf8');
            const releasedBufObj = releaseWritingBuf(buf, this._len, n);
            buf = releasedBufObj.writingBuf;
            this._len = releasedBufObj.len;
            if (buf.length <= 0) {
                this._bufs.shift();
            }
        } catch (err) {
            const shouldRetry = err.code === 'EAGAIN' || err.code === 'EBUSY';
            if (shouldRetry && !this.retryEAGAIN(err, buf.length, this._len - buf.length)) {
                throw err;
            }
            sleep(BUSY_WRITE_TIMEOUT);
        }
    }
    try {
        fs.fsyncSync(this.fd);
    } catch  {
    // Skip the error. The fd might not support fsync.
    }
}
function flushBufferSync() {
    if (this.destroyed) {
        throw new Error('SonicBoom destroyed');
    }
    if (this.fd < 0) {
        throw new Error('sonic boom is not ready yet');
    }
    if (!this._writing && this._writingBuf.length > 0) {
        this._bufs.unshift([
            this._writingBuf
        ]);
        this._writingBuf = kEmptyBuffer;
    }
    let buf = kEmptyBuffer;
    while(this._bufs.length || buf.length){
        if (buf.length <= 0) {
            buf = mergeBuf(this._bufs[0], this._lens[0]);
        }
        try {
            const n = fs.writeSync(this.fd, buf);
            buf = buf.subarray(n);
            this._len = Math.max(this._len - n, 0);
            if (buf.length <= 0) {
                this._bufs.shift();
                this._lens.shift();
            }
        } catch (err) {
            const shouldRetry = err.code === 'EAGAIN' || err.code === 'EBUSY';
            if (shouldRetry && !this.retryEAGAIN(err, buf.length, this._len - buf.length)) {
                throw err;
            }
            sleep(BUSY_WRITE_TIMEOUT);
        }
    }
}
SonicBoom.prototype.destroy = function() {
    if (this.destroyed) {
        return;
    }
    actualClose(this);
};
function actualWrite() {
    const release = this.release;
    this._writing = true;
    this._writingBuf = this._writingBuf || this._bufs.shift() || '';
    if (this.sync) {
        try {
            const written = fs.writeSync(this.fd, this._writingBuf, 'utf8');
            release(null, written);
        } catch (err) {
            release(err);
        }
    } else {
        fs.write(this.fd, this._writingBuf, 'utf8', release);
    }
}
function actualWriteBuffer() {
    const release = this.release;
    this._writing = true;
    this._writingBuf = this._writingBuf.length ? this._writingBuf : mergeBuf(this._bufs.shift(), this._lens.shift());
    if (this.sync) {
        try {
            const written = fs.writeSync(this.fd, this._writingBuf);
            release(null, written);
        } catch (err) {
            release(err);
        }
    } else {
        // fs.write will need to copy string to buffer anyway so
        // we do it here to avoid the overhead of calculating the buffer size
        // in releaseWritingBuf.
        if (kCopyBuffer) {
            this._writingBuf = Buffer.from(this._writingBuf);
        }
        fs.write(this.fd, this._writingBuf, release);
    }
}
function actualClose(sonic) {
    if (sonic.fd === -1) {
        sonic.once('ready', actualClose.bind(null, sonic));
        return;
    }
    if (sonic._periodicFlushTimer !== undefined) {
        clearInterval(sonic._periodicFlushTimer);
    }
    sonic.destroyed = true;
    sonic._bufs = [];
    sonic._lens = [];
    assert(typeof sonic.fd === 'number', `sonic.fd must be a number, got ${typeof sonic.fd}`);
    try {
        fs.fsync(sonic.fd, closeWrapped);
    } catch  {}
    function closeWrapped() {
        // We skip errors in fsync
        if (sonic.fd !== 1 && sonic.fd !== 2) {
            fs.close(sonic.fd, done);
        } else {
            done();
        }
    }
    function done(err) {
        if (err) {
            sonic.emit('error', err);
            return;
        }
        if (sonic._ending && !sonic._writing) {
            sonic.emit('finish');
        }
        sonic.emit('close');
    }
}
/**
 * These export configurations enable JS and TS developers
 * to consumer SonicBoom in whatever way best suits their needs.
 * Some examples of supported import syntax includes:
 * - `const SonicBoom = require('SonicBoom')`
 * - `const { SonicBoom } = require('SonicBoom')`
 * - `import * as SonicBoom from 'SonicBoom'`
 * - `import { SonicBoom } from 'SonicBoom'`
 * - `import SonicBoom from 'SonicBoom'`
 */ SonicBoom.SonicBoom = SonicBoom;
SonicBoom.default = SonicBoom;
module.exports = SonicBoom;
}),
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-wallet/node_modules/sonic-boom/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const fs = __turbopack_context__.r("[externals]/fs [external] (fs, cjs)");
const EventEmitter = __turbopack_context__.r("[externals]/events [external] (events, cjs)");
const inherits = __turbopack_context__.r("[externals]/util [external] (util, cjs)").inherits;
const path = __turbopack_context__.r("[externals]/path [external] (path, cjs)");
const sleep = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/atomic-sleep/index.js [app-ssr] (ecmascript)");
const assert = __turbopack_context__.r("[externals]/assert [external] (assert, cjs)");
const BUSY_WRITE_TIMEOUT = 100;
const kEmptyBuffer = Buffer.allocUnsafe(0);
// 16 KB. Don't write more than docker buffer size.
// https://github.com/moby/moby/blob/513ec73831269947d38a644c278ce3cac36783b2/daemon/logger/copier.go#L13
const MAX_WRITE = 16 * 1024;
const kContentModeBuffer = 'buffer';
const kContentModeUtf8 = 'utf8';
const [major, minor] = (process.versions.node || '0.0').split('.').map(Number);
const kCopyBuffer = major >= 22 && minor >= 7;
function openFile(file, sonic) {
    sonic._opening = true;
    sonic._writing = true;
    sonic._asyncDrainScheduled = false;
    // NOTE: 'error' and 'ready' events emitted below only relevant when sonic.sync===false
    // for sync mode, there is no way to add a listener that will receive these
    function fileOpened(err, fd) {
        if (err) {
            sonic._reopening = false;
            sonic._writing = false;
            sonic._opening = false;
            if (sonic.sync) {
                process.nextTick(()=>{
                    if (sonic.listenerCount('error') > 0) {
                        sonic.emit('error', err);
                    }
                });
            } else {
                sonic.emit('error', err);
            }
            return;
        }
        const reopening = sonic._reopening;
        sonic.fd = fd;
        sonic.file = file;
        sonic._reopening = false;
        sonic._opening = false;
        sonic._writing = false;
        if (sonic.sync) {
            process.nextTick(()=>sonic.emit('ready'));
        } else {
            sonic.emit('ready');
        }
        if (sonic.destroyed) {
            return;
        }
        // start
        if (!sonic._writing && sonic._len > sonic.minLength || sonic._flushPending) {
            sonic._actualWrite();
        } else if (reopening) {
            process.nextTick(()=>sonic.emit('drain'));
        }
    }
    const flags = sonic.append ? 'a' : 'w';
    const mode = sonic.mode;
    if (sonic.sync) {
        try {
            if (sonic.mkdir) fs.mkdirSync(path.dirname(file), {
                recursive: true
            });
            const fd = fs.openSync(file, flags, mode);
            fileOpened(null, fd);
        } catch (err) {
            fileOpened(err);
            throw err;
        }
    } else if (sonic.mkdir) {
        fs.mkdir(path.dirname(file), {
            recursive: true
        }, (err)=>{
            if (err) return fileOpened(err);
            fs.open(file, flags, mode, fileOpened);
        });
    } else {
        fs.open(file, flags, mode, fileOpened);
    }
}
function SonicBoom(opts) {
    if (!(this instanceof SonicBoom)) {
        return new SonicBoom(opts);
    }
    let { fd, dest, minLength, maxLength, maxWrite, periodicFlush, sync, append = true, mkdir, retryEAGAIN, fsync, contentMode, mode } = opts || {};
    fd = fd || dest;
    this._len = 0;
    this.fd = -1;
    this._bufs = [];
    this._lens = [];
    this._writing = false;
    this._ending = false;
    this._reopening = false;
    this._asyncDrainScheduled = false;
    this._flushPending = false;
    this._hwm = Math.max(minLength || 0, 16387);
    this.file = null;
    this.destroyed = false;
    this.minLength = minLength || 0;
    this.maxLength = maxLength || 0;
    this.maxWrite = maxWrite || MAX_WRITE;
    this._periodicFlush = periodicFlush || 0;
    this._periodicFlushTimer = undefined;
    this.sync = sync || false;
    this.writable = true;
    this._fsync = fsync || false;
    this.append = append || false;
    this.mode = mode;
    this.retryEAGAIN = retryEAGAIN || (()=>true);
    this.mkdir = mkdir || false;
    let fsWriteSync;
    let fsWrite;
    if (contentMode === kContentModeBuffer) {
        this._writingBuf = kEmptyBuffer;
        this.write = writeBuffer;
        this.flush = flushBuffer;
        this.flushSync = flushBufferSync;
        this._actualWrite = actualWriteBuffer;
        fsWriteSync = ()=>fs.writeSync(this.fd, this._writingBuf);
        fsWrite = ()=>fs.write(this.fd, this._writingBuf, this.release);
    } else if (contentMode === undefined || contentMode === kContentModeUtf8) {
        this._writingBuf = '';
        this.write = write;
        this.flush = flush;
        this.flushSync = flushSync;
        this._actualWrite = actualWrite;
        fsWriteSync = ()=>fs.writeSync(this.fd, this._writingBuf, 'utf8');
        fsWrite = ()=>fs.write(this.fd, this._writingBuf, 'utf8', this.release);
    } else {
        throw new Error(`SonicBoom supports "${kContentModeUtf8}" and "${kContentModeBuffer}", but passed ${contentMode}`);
    }
    if (typeof fd === 'number') {
        this.fd = fd;
        process.nextTick(()=>this.emit('ready'));
    } else if (typeof fd === 'string') {
        openFile(fd, this);
    } else {
        throw new Error('SonicBoom supports only file descriptors and files');
    }
    if (this.minLength >= this.maxWrite) {
        throw new Error(`minLength should be smaller than maxWrite (${this.maxWrite})`);
    }
    this.release = (err, n)=>{
        if (err) {
            if ((err.code === 'EAGAIN' || err.code === 'EBUSY') && this.retryEAGAIN(err, this._writingBuf.length, this._len - this._writingBuf.length)) {
                if (this.sync) {
                    // This error code should not happen in sync mode, because it is
                    // not using the underlining operating system asynchronous functions.
                    // However it happens, and so we handle it.
                    // Ref: https://github.com/pinojs/pino/issues/783
                    try {
                        sleep(BUSY_WRITE_TIMEOUT);
                        this.release(undefined, 0);
                    } catch (err) {
                        this.release(err);
                    }
                } else {
                    // Let's give the destination some time to process the chunk.
                    setTimeout(fsWrite, BUSY_WRITE_TIMEOUT);
                }
            } else {
                this._writing = false;
                this.emit('error', err);
            }
            return;
        }
        this.emit('write', n);
        const releasedBufObj = releaseWritingBuf(this._writingBuf, this._len, n);
        this._len = releasedBufObj.len;
        this._writingBuf = releasedBufObj.writingBuf;
        if (this._writingBuf.length) {
            if (!this.sync) {
                fsWrite();
                return;
            }
            try {
                do {
                    const n = fsWriteSync();
                    const releasedBufObj = releaseWritingBuf(this._writingBuf, this._len, n);
                    this._len = releasedBufObj.len;
                    this._writingBuf = releasedBufObj.writingBuf;
                }while (this._writingBuf.length)
            } catch (err) {
                this.release(err);
                return;
            }
        }
        if (this._fsync) {
            fs.fsyncSync(this.fd);
        }
        const len = this._len;
        if (this._reopening) {
            this._writing = false;
            this._reopening = false;
            this.reopen();
        } else if (len > this.minLength) {
            this._actualWrite();
        } else if (this._ending) {
            if (len > 0) {
                this._actualWrite();
            } else {
                this._writing = false;
                actualClose(this);
            }
        } else {
            this._writing = false;
            if (this.sync) {
                if (!this._asyncDrainScheduled) {
                    this._asyncDrainScheduled = true;
                    process.nextTick(emitDrain, this);
                }
            } else {
                this.emit('drain');
            }
        }
    };
    this.on('newListener', function(name) {
        if (name === 'drain') {
            this._asyncDrainScheduled = false;
        }
    });
    if (this._periodicFlush !== 0) {
        this._periodicFlushTimer = setInterval(()=>this.flush(null), this._periodicFlush);
        this._periodicFlushTimer.unref();
    }
}
/**
 * Release the writingBuf after fs.write n bytes data
 * @param {string | Buffer} writingBuf - currently writing buffer, usually be instance._writingBuf.
 * @param {number} len - currently buffer length, usually be instance._len.
 * @param {number} n - number of bytes fs already written
 * @returns {{writingBuf: string | Buffer, len: number}} released writingBuf and length
 */ function releaseWritingBuf(writingBuf, len, n) {
    // if Buffer.byteLength is equal to n, that means writingBuf contains no multi-byte character
    if (typeof writingBuf === 'string' && Buffer.byteLength(writingBuf) !== n) {
        // Since the fs.write callback parameter `n` means how many bytes the passed of string
        // We calculate the original string length for avoiding the multi-byte character issue
        n = Buffer.from(writingBuf).subarray(0, n).toString().length;
    }
    len = Math.max(len - n, 0);
    writingBuf = writingBuf.slice(n);
    return {
        writingBuf,
        len
    };
}
function emitDrain(sonic) {
    const hasListeners = sonic.listenerCount('drain') > 0;
    if (!hasListeners) return;
    sonic._asyncDrainScheduled = false;
    sonic.emit('drain');
}
inherits(SonicBoom, EventEmitter);
function mergeBuf(bufs, len) {
    if (bufs.length === 0) {
        return kEmptyBuffer;
    }
    if (bufs.length === 1) {
        return bufs[0];
    }
    return Buffer.concat(bufs, len);
}
function write(data) {
    if (this.destroyed) {
        throw new Error('SonicBoom destroyed');
    }
    const len = this._len + data.length;
    const bufs = this._bufs;
    if (this.maxLength && len > this.maxLength) {
        this.emit('drop', data);
        return this._len < this._hwm;
    }
    if (bufs.length === 0 || bufs[bufs.length - 1].length + data.length > this.maxWrite) {
        bufs.push('' + data);
    } else {
        bufs[bufs.length - 1] += data;
    }
    this._len = len;
    if (!this._writing && this._len >= this.minLength) {
        this._actualWrite();
    }
    return this._len < this._hwm;
}
function writeBuffer(data) {
    if (this.destroyed) {
        throw new Error('SonicBoom destroyed');
    }
    const len = this._len + data.length;
    const bufs = this._bufs;
    const lens = this._lens;
    if (this.maxLength && len > this.maxLength) {
        this.emit('drop', data);
        return this._len < this._hwm;
    }
    if (bufs.length === 0 || lens[lens.length - 1] + data.length > this.maxWrite) {
        bufs.push([
            data
        ]);
        lens.push(data.length);
    } else {
        bufs[bufs.length - 1].push(data);
        lens[lens.length - 1] += data.length;
    }
    this._len = len;
    if (!this._writing && this._len >= this.minLength) {
        this._actualWrite();
    }
    return this._len < this._hwm;
}
function callFlushCallbackOnDrain(cb) {
    this._flushPending = true;
    const onDrain = ()=>{
        // only if _fsync is false to avoid double fsync
        if (!this._fsync) {
            try {
                fs.fsync(this.fd, (err)=>{
                    this._flushPending = false;
                    cb(err);
                });
            } catch (err) {
                cb(err);
            }
        } else {
            this._flushPending = false;
            cb();
        }
        this.off('error', onError);
    };
    const onError = (err)=>{
        this._flushPending = false;
        cb(err);
        this.off('drain', onDrain);
    };
    this.once('drain', onDrain);
    this.once('error', onError);
}
function flush(cb) {
    if (cb != null && typeof cb !== 'function') {
        throw new Error('flush cb must be a function');
    }
    if (this.destroyed) {
        const error = new Error('SonicBoom destroyed');
        if (cb) {
            cb(error);
            return;
        }
        throw error;
    }
    if (this.minLength <= 0) {
        cb?.();
        return;
    }
    if (cb) {
        callFlushCallbackOnDrain.call(this, cb);
    }
    if (this._writing) {
        return;
    }
    if (this._bufs.length === 0) {
        this._bufs.push('');
    }
    this._actualWrite();
}
function flushBuffer(cb) {
    if (cb != null && typeof cb !== 'function') {
        throw new Error('flush cb must be a function');
    }
    if (this.destroyed) {
        const error = new Error('SonicBoom destroyed');
        if (cb) {
            cb(error);
            return;
        }
        throw error;
    }
    if (this.minLength <= 0) {
        cb?.();
        return;
    }
    if (cb) {
        callFlushCallbackOnDrain.call(this, cb);
    }
    if (this._writing) {
        return;
    }
    if (this._bufs.length === 0) {
        this._bufs.push([]);
        this._lens.push(0);
    }
    this._actualWrite();
}
SonicBoom.prototype.reopen = function(file) {
    if (this.destroyed) {
        throw new Error('SonicBoom destroyed');
    }
    if (this._opening) {
        this.once('ready', ()=>{
            this.reopen(file);
        });
        return;
    }
    if (this._ending) {
        return;
    }
    if (!this.file) {
        throw new Error('Unable to reopen a file descriptor, you must pass a file to SonicBoom');
    }
    if (file) {
        this.file = file;
    }
    this._reopening = true;
    if (this._writing) {
        return;
    }
    const fd = this.fd;
    this.once('ready', ()=>{
        if (fd !== this.fd) {
            fs.close(fd, (err)=>{
                if (err) {
                    return this.emit('error', err);
                }
            });
        }
    });
    openFile(this.file, this);
};
SonicBoom.prototype.end = function() {
    if (this.destroyed) {
        throw new Error('SonicBoom destroyed');
    }
    if (this._opening) {
        this.once('ready', ()=>{
            this.end();
        });
        return;
    }
    if (this._ending) {
        return;
    }
    this._ending = true;
    if (this._writing) {
        return;
    }
    if (this._len > 0 && this.fd >= 0) {
        this._actualWrite();
    } else {
        actualClose(this);
    }
};
function flushSync() {
    if (this.destroyed) {
        throw new Error('SonicBoom destroyed');
    }
    if (this.fd < 0) {
        throw new Error('sonic boom is not ready yet');
    }
    if (!this._writing && this._writingBuf.length > 0) {
        this._bufs.unshift(this._writingBuf);
        this._writingBuf = '';
    }
    let buf = '';
    while(this._bufs.length || buf){
        if (buf.length <= 0) {
            buf = this._bufs[0];
        }
        try {
            const n = fs.writeSync(this.fd, buf, 'utf8');
            const releasedBufObj = releaseWritingBuf(buf, this._len, n);
            buf = releasedBufObj.writingBuf;
            this._len = releasedBufObj.len;
            if (buf.length <= 0) {
                this._bufs.shift();
            }
        } catch (err) {
            const shouldRetry = err.code === 'EAGAIN' || err.code === 'EBUSY';
            if (shouldRetry && !this.retryEAGAIN(err, buf.length, this._len - buf.length)) {
                throw err;
            }
            sleep(BUSY_WRITE_TIMEOUT);
        }
    }
    try {
        fs.fsyncSync(this.fd);
    } catch  {
    // Skip the error. The fd might not support fsync.
    }
}
function flushBufferSync() {
    if (this.destroyed) {
        throw new Error('SonicBoom destroyed');
    }
    if (this.fd < 0) {
        throw new Error('sonic boom is not ready yet');
    }
    if (!this._writing && this._writingBuf.length > 0) {
        this._bufs.unshift([
            this._writingBuf
        ]);
        this._writingBuf = kEmptyBuffer;
    }
    let buf = kEmptyBuffer;
    while(this._bufs.length || buf.length){
        if (buf.length <= 0) {
            buf = mergeBuf(this._bufs[0], this._lens[0]);
        }
        try {
            const n = fs.writeSync(this.fd, buf);
            buf = buf.subarray(n);
            this._len = Math.max(this._len - n, 0);
            if (buf.length <= 0) {
                this._bufs.shift();
                this._lens.shift();
            }
        } catch (err) {
            const shouldRetry = err.code === 'EAGAIN' || err.code === 'EBUSY';
            if (shouldRetry && !this.retryEAGAIN(err, buf.length, this._len - buf.length)) {
                throw err;
            }
            sleep(BUSY_WRITE_TIMEOUT);
        }
    }
}
SonicBoom.prototype.destroy = function() {
    if (this.destroyed) {
        return;
    }
    actualClose(this);
};
function actualWrite() {
    const release = this.release;
    this._writing = true;
    this._writingBuf = this._writingBuf || this._bufs.shift() || '';
    if (this.sync) {
        try {
            const written = fs.writeSync(this.fd, this._writingBuf, 'utf8');
            release(null, written);
        } catch (err) {
            release(err);
        }
    } else {
        fs.write(this.fd, this._writingBuf, 'utf8', release);
    }
}
function actualWriteBuffer() {
    const release = this.release;
    this._writing = true;
    this._writingBuf = this._writingBuf.length ? this._writingBuf : mergeBuf(this._bufs.shift(), this._lens.shift());
    if (this.sync) {
        try {
            const written = fs.writeSync(this.fd, this._writingBuf);
            release(null, written);
        } catch (err) {
            release(err);
        }
    } else {
        // fs.write will need to copy string to buffer anyway so
        // we do it here to avoid the overhead of calculating the buffer size
        // in releaseWritingBuf.
        if (kCopyBuffer) {
            this._writingBuf = Buffer.from(this._writingBuf);
        }
        fs.write(this.fd, this._writingBuf, release);
    }
}
function actualClose(sonic) {
    if (sonic.fd === -1) {
        sonic.once('ready', actualClose.bind(null, sonic));
        return;
    }
    if (sonic._periodicFlushTimer !== undefined) {
        clearInterval(sonic._periodicFlushTimer);
    }
    sonic.destroyed = true;
    sonic._bufs = [];
    sonic._lens = [];
    assert(typeof sonic.fd === 'number', `sonic.fd must be a number, got ${typeof sonic.fd}`);
    try {
        fs.fsync(sonic.fd, closeWrapped);
    } catch  {}
    function closeWrapped() {
        // We skip errors in fsync
        if (sonic.fd !== 1 && sonic.fd !== 2) {
            fs.close(sonic.fd, done);
        } else {
            done();
        }
    }
    function done(err) {
        if (err) {
            sonic.emit('error', err);
            return;
        }
        if (sonic._ending && !sonic._writing) {
            sonic.emit('finish');
        }
        sonic.emit('close');
    }
}
/**
 * These export configurations enable JS and TS developers
 * to consumer SonicBoom in whatever way best suits their needs.
 * Some examples of supported import syntax includes:
 * - `const SonicBoom = require('SonicBoom')`
 * - `const { SonicBoom } = require('SonicBoom')`
 * - `import * as SonicBoom from 'SonicBoom'`
 * - `import { SonicBoom } from 'SonicBoom'`
 * - `import SonicBoom from 'SonicBoom'`
 */ SonicBoom.SonicBoom = SonicBoom;
SonicBoom.default = SonicBoom;
module.exports = SonicBoom;
}),
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit/node_modules/sonic-boom/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const fs = __turbopack_context__.r("[externals]/fs [external] (fs, cjs)");
const EventEmitter = __turbopack_context__.r("[externals]/events [external] (events, cjs)");
const inherits = __turbopack_context__.r("[externals]/util [external] (util, cjs)").inherits;
const path = __turbopack_context__.r("[externals]/path [external] (path, cjs)");
const sleep = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/atomic-sleep/index.js [app-ssr] (ecmascript)");
const assert = __turbopack_context__.r("[externals]/assert [external] (assert, cjs)");
const BUSY_WRITE_TIMEOUT = 100;
const kEmptyBuffer = Buffer.allocUnsafe(0);
// 16 KB. Don't write more than docker buffer size.
// https://github.com/moby/moby/blob/513ec73831269947d38a644c278ce3cac36783b2/daemon/logger/copier.go#L13
const MAX_WRITE = 16 * 1024;
const kContentModeBuffer = 'buffer';
const kContentModeUtf8 = 'utf8';
const [major, minor] = (process.versions.node || '0.0').split('.').map(Number);
const kCopyBuffer = major >= 22 && minor >= 7;
function openFile(file, sonic) {
    sonic._opening = true;
    sonic._writing = true;
    sonic._asyncDrainScheduled = false;
    // NOTE: 'error' and 'ready' events emitted below only relevant when sonic.sync===false
    // for sync mode, there is no way to add a listener that will receive these
    function fileOpened(err, fd) {
        if (err) {
            sonic._reopening = false;
            sonic._writing = false;
            sonic._opening = false;
            if (sonic.sync) {
                process.nextTick(()=>{
                    if (sonic.listenerCount('error') > 0) {
                        sonic.emit('error', err);
                    }
                });
            } else {
                sonic.emit('error', err);
            }
            return;
        }
        const reopening = sonic._reopening;
        sonic.fd = fd;
        sonic.file = file;
        sonic._reopening = false;
        sonic._opening = false;
        sonic._writing = false;
        if (sonic.sync) {
            process.nextTick(()=>sonic.emit('ready'));
        } else {
            sonic.emit('ready');
        }
        if (sonic.destroyed) {
            return;
        }
        // start
        if (!sonic._writing && sonic._len > sonic.minLength || sonic._flushPending) {
            sonic._actualWrite();
        } else if (reopening) {
            process.nextTick(()=>sonic.emit('drain'));
        }
    }
    const flags = sonic.append ? 'a' : 'w';
    const mode = sonic.mode;
    if (sonic.sync) {
        try {
            if (sonic.mkdir) fs.mkdirSync(path.dirname(file), {
                recursive: true
            });
            const fd = fs.openSync(file, flags, mode);
            fileOpened(null, fd);
        } catch (err) {
            fileOpened(err);
            throw err;
        }
    } else if (sonic.mkdir) {
        fs.mkdir(path.dirname(file), {
            recursive: true
        }, (err)=>{
            if (err) return fileOpened(err);
            fs.open(file, flags, mode, fileOpened);
        });
    } else {
        fs.open(file, flags, mode, fileOpened);
    }
}
function SonicBoom(opts) {
    if (!(this instanceof SonicBoom)) {
        return new SonicBoom(opts);
    }
    let { fd, dest, minLength, maxLength, maxWrite, periodicFlush, sync, append = true, mkdir, retryEAGAIN, fsync, contentMode, mode } = opts || {};
    fd = fd || dest;
    this._len = 0;
    this.fd = -1;
    this._bufs = [];
    this._lens = [];
    this._writing = false;
    this._ending = false;
    this._reopening = false;
    this._asyncDrainScheduled = false;
    this._flushPending = false;
    this._hwm = Math.max(minLength || 0, 16387);
    this.file = null;
    this.destroyed = false;
    this.minLength = minLength || 0;
    this.maxLength = maxLength || 0;
    this.maxWrite = maxWrite || MAX_WRITE;
    this._periodicFlush = periodicFlush || 0;
    this._periodicFlushTimer = undefined;
    this.sync = sync || false;
    this.writable = true;
    this._fsync = fsync || false;
    this.append = append || false;
    this.mode = mode;
    this.retryEAGAIN = retryEAGAIN || (()=>true);
    this.mkdir = mkdir || false;
    let fsWriteSync;
    let fsWrite;
    if (contentMode === kContentModeBuffer) {
        this._writingBuf = kEmptyBuffer;
        this.write = writeBuffer;
        this.flush = flushBuffer;
        this.flushSync = flushBufferSync;
        this._actualWrite = actualWriteBuffer;
        fsWriteSync = ()=>fs.writeSync(this.fd, this._writingBuf);
        fsWrite = ()=>fs.write(this.fd, this._writingBuf, this.release);
    } else if (contentMode === undefined || contentMode === kContentModeUtf8) {
        this._writingBuf = '';
        this.write = write;
        this.flush = flush;
        this.flushSync = flushSync;
        this._actualWrite = actualWrite;
        fsWriteSync = ()=>fs.writeSync(this.fd, this._writingBuf, 'utf8');
        fsWrite = ()=>fs.write(this.fd, this._writingBuf, 'utf8', this.release);
    } else {
        throw new Error(`SonicBoom supports "${kContentModeUtf8}" and "${kContentModeBuffer}", but passed ${contentMode}`);
    }
    if (typeof fd === 'number') {
        this.fd = fd;
        process.nextTick(()=>this.emit('ready'));
    } else if (typeof fd === 'string') {
        openFile(fd, this);
    } else {
        throw new Error('SonicBoom supports only file descriptors and files');
    }
    if (this.minLength >= this.maxWrite) {
        throw new Error(`minLength should be smaller than maxWrite (${this.maxWrite})`);
    }
    this.release = (err, n)=>{
        if (err) {
            if ((err.code === 'EAGAIN' || err.code === 'EBUSY') && this.retryEAGAIN(err, this._writingBuf.length, this._len - this._writingBuf.length)) {
                if (this.sync) {
                    // This error code should not happen in sync mode, because it is
                    // not using the underlining operating system asynchronous functions.
                    // However it happens, and so we handle it.
                    // Ref: https://github.com/pinojs/pino/issues/783
                    try {
                        sleep(BUSY_WRITE_TIMEOUT);
                        this.release(undefined, 0);
                    } catch (err) {
                        this.release(err);
                    }
                } else {
                    // Let's give the destination some time to process the chunk.
                    setTimeout(fsWrite, BUSY_WRITE_TIMEOUT);
                }
            } else {
                this._writing = false;
                this.emit('error', err);
            }
            return;
        }
        this.emit('write', n);
        const releasedBufObj = releaseWritingBuf(this._writingBuf, this._len, n);
        this._len = releasedBufObj.len;
        this._writingBuf = releasedBufObj.writingBuf;
        if (this._writingBuf.length) {
            if (!this.sync) {
                fsWrite();
                return;
            }
            try {
                do {
                    const n = fsWriteSync();
                    const releasedBufObj = releaseWritingBuf(this._writingBuf, this._len, n);
                    this._len = releasedBufObj.len;
                    this._writingBuf = releasedBufObj.writingBuf;
                }while (this._writingBuf.length)
            } catch (err) {
                this.release(err);
                return;
            }
        }
        if (this._fsync) {
            fs.fsyncSync(this.fd);
        }
        const len = this._len;
        if (this._reopening) {
            this._writing = false;
            this._reopening = false;
            this.reopen();
        } else if (len > this.minLength) {
            this._actualWrite();
        } else if (this._ending) {
            if (len > 0) {
                this._actualWrite();
            } else {
                this._writing = false;
                actualClose(this);
            }
        } else {
            this._writing = false;
            if (this.sync) {
                if (!this._asyncDrainScheduled) {
                    this._asyncDrainScheduled = true;
                    process.nextTick(emitDrain, this);
                }
            } else {
                this.emit('drain');
            }
        }
    };
    this.on('newListener', function(name) {
        if (name === 'drain') {
            this._asyncDrainScheduled = false;
        }
    });
    if (this._periodicFlush !== 0) {
        this._periodicFlushTimer = setInterval(()=>this.flush(null), this._periodicFlush);
        this._periodicFlushTimer.unref();
    }
}
/**
 * Release the writingBuf after fs.write n bytes data
 * @param {string | Buffer} writingBuf - currently writing buffer, usually be instance._writingBuf.
 * @param {number} len - currently buffer length, usually be instance._len.
 * @param {number} n - number of bytes fs already written
 * @returns {{writingBuf: string | Buffer, len: number}} released writingBuf and length
 */ function releaseWritingBuf(writingBuf, len, n) {
    // if Buffer.byteLength is equal to n, that means writingBuf contains no multi-byte character
    if (typeof writingBuf === 'string' && Buffer.byteLength(writingBuf) !== n) {
        // Since the fs.write callback parameter `n` means how many bytes the passed of string
        // We calculate the original string length for avoiding the multi-byte character issue
        n = Buffer.from(writingBuf).subarray(0, n).toString().length;
    }
    len = Math.max(len - n, 0);
    writingBuf = writingBuf.slice(n);
    return {
        writingBuf,
        len
    };
}
function emitDrain(sonic) {
    const hasListeners = sonic.listenerCount('drain') > 0;
    if (!hasListeners) return;
    sonic._asyncDrainScheduled = false;
    sonic.emit('drain');
}
inherits(SonicBoom, EventEmitter);
function mergeBuf(bufs, len) {
    if (bufs.length === 0) {
        return kEmptyBuffer;
    }
    if (bufs.length === 1) {
        return bufs[0];
    }
    return Buffer.concat(bufs, len);
}
function write(data) {
    if (this.destroyed) {
        throw new Error('SonicBoom destroyed');
    }
    const len = this._len + data.length;
    const bufs = this._bufs;
    if (this.maxLength && len > this.maxLength) {
        this.emit('drop', data);
        return this._len < this._hwm;
    }
    if (bufs.length === 0 || bufs[bufs.length - 1].length + data.length > this.maxWrite) {
        bufs.push('' + data);
    } else {
        bufs[bufs.length - 1] += data;
    }
    this._len = len;
    if (!this._writing && this._len >= this.minLength) {
        this._actualWrite();
    }
    return this._len < this._hwm;
}
function writeBuffer(data) {
    if (this.destroyed) {
        throw new Error('SonicBoom destroyed');
    }
    const len = this._len + data.length;
    const bufs = this._bufs;
    const lens = this._lens;
    if (this.maxLength && len > this.maxLength) {
        this.emit('drop', data);
        return this._len < this._hwm;
    }
    if (bufs.length === 0 || lens[lens.length - 1] + data.length > this.maxWrite) {
        bufs.push([
            data
        ]);
        lens.push(data.length);
    } else {
        bufs[bufs.length - 1].push(data);
        lens[lens.length - 1] += data.length;
    }
    this._len = len;
    if (!this._writing && this._len >= this.minLength) {
        this._actualWrite();
    }
    return this._len < this._hwm;
}
function callFlushCallbackOnDrain(cb) {
    this._flushPending = true;
    const onDrain = ()=>{
        // only if _fsync is false to avoid double fsync
        if (!this._fsync) {
            try {
                fs.fsync(this.fd, (err)=>{
                    this._flushPending = false;
                    cb(err);
                });
            } catch (err) {
                cb(err);
            }
        } else {
            this._flushPending = false;
            cb();
        }
        this.off('error', onError);
    };
    const onError = (err)=>{
        this._flushPending = false;
        cb(err);
        this.off('drain', onDrain);
    };
    this.once('drain', onDrain);
    this.once('error', onError);
}
function flush(cb) {
    if (cb != null && typeof cb !== 'function') {
        throw new Error('flush cb must be a function');
    }
    if (this.destroyed) {
        const error = new Error('SonicBoom destroyed');
        if (cb) {
            cb(error);
            return;
        }
        throw error;
    }
    if (this.minLength <= 0) {
        cb?.();
        return;
    }
    if (cb) {
        callFlushCallbackOnDrain.call(this, cb);
    }
    if (this._writing) {
        return;
    }
    if (this._bufs.length === 0) {
        this._bufs.push('');
    }
    this._actualWrite();
}
function flushBuffer(cb) {
    if (cb != null && typeof cb !== 'function') {
        throw new Error('flush cb must be a function');
    }
    if (this.destroyed) {
        const error = new Error('SonicBoom destroyed');
        if (cb) {
            cb(error);
            return;
        }
        throw error;
    }
    if (this.minLength <= 0) {
        cb?.();
        return;
    }
    if (cb) {
        callFlushCallbackOnDrain.call(this, cb);
    }
    if (this._writing) {
        return;
    }
    if (this._bufs.length === 0) {
        this._bufs.push([]);
        this._lens.push(0);
    }
    this._actualWrite();
}
SonicBoom.prototype.reopen = function(file) {
    if (this.destroyed) {
        throw new Error('SonicBoom destroyed');
    }
    if (this._opening) {
        this.once('ready', ()=>{
            this.reopen(file);
        });
        return;
    }
    if (this._ending) {
        return;
    }
    if (!this.file) {
        throw new Error('Unable to reopen a file descriptor, you must pass a file to SonicBoom');
    }
    if (file) {
        this.file = file;
    }
    this._reopening = true;
    if (this._writing) {
        return;
    }
    const fd = this.fd;
    this.once('ready', ()=>{
        if (fd !== this.fd) {
            fs.close(fd, (err)=>{
                if (err) {
                    return this.emit('error', err);
                }
            });
        }
    });
    openFile(this.file, this);
};
SonicBoom.prototype.end = function() {
    if (this.destroyed) {
        throw new Error('SonicBoom destroyed');
    }
    if (this._opening) {
        this.once('ready', ()=>{
            this.end();
        });
        return;
    }
    if (this._ending) {
        return;
    }
    this._ending = true;
    if (this._writing) {
        return;
    }
    if (this._len > 0 && this.fd >= 0) {
        this._actualWrite();
    } else {
        actualClose(this);
    }
};
function flushSync() {
    if (this.destroyed) {
        throw new Error('SonicBoom destroyed');
    }
    if (this.fd < 0) {
        throw new Error('sonic boom is not ready yet');
    }
    if (!this._writing && this._writingBuf.length > 0) {
        this._bufs.unshift(this._writingBuf);
        this._writingBuf = '';
    }
    let buf = '';
    while(this._bufs.length || buf){
        if (buf.length <= 0) {
            buf = this._bufs[0];
        }
        try {
            const n = fs.writeSync(this.fd, buf, 'utf8');
            const releasedBufObj = releaseWritingBuf(buf, this._len, n);
            buf = releasedBufObj.writingBuf;
            this._len = releasedBufObj.len;
            if (buf.length <= 0) {
                this._bufs.shift();
            }
        } catch (err) {
            const shouldRetry = err.code === 'EAGAIN' || err.code === 'EBUSY';
            if (shouldRetry && !this.retryEAGAIN(err, buf.length, this._len - buf.length)) {
                throw err;
            }
            sleep(BUSY_WRITE_TIMEOUT);
        }
    }
    try {
        fs.fsyncSync(this.fd);
    } catch  {
    // Skip the error. The fd might not support fsync.
    }
}
function flushBufferSync() {
    if (this.destroyed) {
        throw new Error('SonicBoom destroyed');
    }
    if (this.fd < 0) {
        throw new Error('sonic boom is not ready yet');
    }
    if (!this._writing && this._writingBuf.length > 0) {
        this._bufs.unshift([
            this._writingBuf
        ]);
        this._writingBuf = kEmptyBuffer;
    }
    let buf = kEmptyBuffer;
    while(this._bufs.length || buf.length){
        if (buf.length <= 0) {
            buf = mergeBuf(this._bufs[0], this._lens[0]);
        }
        try {
            const n = fs.writeSync(this.fd, buf);
            buf = buf.subarray(n);
            this._len = Math.max(this._len - n, 0);
            if (buf.length <= 0) {
                this._bufs.shift();
                this._lens.shift();
            }
        } catch (err) {
            const shouldRetry = err.code === 'EAGAIN' || err.code === 'EBUSY';
            if (shouldRetry && !this.retryEAGAIN(err, buf.length, this._len - buf.length)) {
                throw err;
            }
            sleep(BUSY_WRITE_TIMEOUT);
        }
    }
}
SonicBoom.prototype.destroy = function() {
    if (this.destroyed) {
        return;
    }
    actualClose(this);
};
function actualWrite() {
    const release = this.release;
    this._writing = true;
    this._writingBuf = this._writingBuf || this._bufs.shift() || '';
    if (this.sync) {
        try {
            const written = fs.writeSync(this.fd, this._writingBuf, 'utf8');
            release(null, written);
        } catch (err) {
            release(err);
        }
    } else {
        fs.write(this.fd, this._writingBuf, 'utf8', release);
    }
}
function actualWriteBuffer() {
    const release = this.release;
    this._writing = true;
    this._writingBuf = this._writingBuf.length ? this._writingBuf : mergeBuf(this._bufs.shift(), this._lens.shift());
    if (this.sync) {
        try {
            const written = fs.writeSync(this.fd, this._writingBuf);
            release(null, written);
        } catch (err) {
            release(err);
        }
    } else {
        // fs.write will need to copy string to buffer anyway so
        // we do it here to avoid the overhead of calculating the buffer size
        // in releaseWritingBuf.
        if (kCopyBuffer) {
            this._writingBuf = Buffer.from(this._writingBuf);
        }
        fs.write(this.fd, this._writingBuf, release);
    }
}
function actualClose(sonic) {
    if (sonic.fd === -1) {
        sonic.once('ready', actualClose.bind(null, sonic));
        return;
    }
    if (sonic._periodicFlushTimer !== undefined) {
        clearInterval(sonic._periodicFlushTimer);
    }
    sonic.destroyed = true;
    sonic._bufs = [];
    sonic._lens = [];
    assert(typeof sonic.fd === 'number', `sonic.fd must be a number, got ${typeof sonic.fd}`);
    try {
        fs.fsync(sonic.fd, closeWrapped);
    } catch  {}
    function closeWrapped() {
        // We skip errors in fsync
        if (sonic.fd !== 1 && sonic.fd !== 2) {
            fs.close(sonic.fd, done);
        } else {
            done();
        }
    }
    function done(err) {
        if (err) {
            sonic.emit('error', err);
            return;
        }
        if (sonic._ending && !sonic._writing) {
            sonic.emit('finish');
        }
        sonic.emit('close');
    }
}
/**
 * These export configurations enable JS and TS developers
 * to consumer SonicBoom in whatever way best suits their needs.
 * Some examples of supported import syntax includes:
 * - `const SonicBoom = require('SonicBoom')`
 * - `const { SonicBoom } = require('SonicBoom')`
 * - `import * as SonicBoom from 'SonicBoom'`
 * - `import { SonicBoom } from 'SonicBoom'`
 * - `import SonicBoom from 'SonicBoom'`
 */ SonicBoom.SonicBoom = SonicBoom;
SonicBoom.default = SonicBoom;
module.exports = SonicBoom;
}),
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-utils/node_modules/sonic-boom/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const fs = __turbopack_context__.r("[externals]/fs [external] (fs, cjs)");
const EventEmitter = __turbopack_context__.r("[externals]/events [external] (events, cjs)");
const inherits = __turbopack_context__.r("[externals]/util [external] (util, cjs)").inherits;
const path = __turbopack_context__.r("[externals]/path [external] (path, cjs)");
const sleep = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/atomic-sleep/index.js [app-ssr] (ecmascript)");
const assert = __turbopack_context__.r("[externals]/assert [external] (assert, cjs)");
const BUSY_WRITE_TIMEOUT = 100;
const kEmptyBuffer = Buffer.allocUnsafe(0);
// 16 KB. Don't write more than docker buffer size.
// https://github.com/moby/moby/blob/513ec73831269947d38a644c278ce3cac36783b2/daemon/logger/copier.go#L13
const MAX_WRITE = 16 * 1024;
const kContentModeBuffer = 'buffer';
const kContentModeUtf8 = 'utf8';
const [major, minor] = (process.versions.node || '0.0').split('.').map(Number);
const kCopyBuffer = major >= 22 && minor >= 7;
function openFile(file, sonic) {
    sonic._opening = true;
    sonic._writing = true;
    sonic._asyncDrainScheduled = false;
    // NOTE: 'error' and 'ready' events emitted below only relevant when sonic.sync===false
    // for sync mode, there is no way to add a listener that will receive these
    function fileOpened(err, fd) {
        if (err) {
            sonic._reopening = false;
            sonic._writing = false;
            sonic._opening = false;
            if (sonic.sync) {
                process.nextTick(()=>{
                    if (sonic.listenerCount('error') > 0) {
                        sonic.emit('error', err);
                    }
                });
            } else {
                sonic.emit('error', err);
            }
            return;
        }
        const reopening = sonic._reopening;
        sonic.fd = fd;
        sonic.file = file;
        sonic._reopening = false;
        sonic._opening = false;
        sonic._writing = false;
        if (sonic.sync) {
            process.nextTick(()=>sonic.emit('ready'));
        } else {
            sonic.emit('ready');
        }
        if (sonic.destroyed) {
            return;
        }
        // start
        if (!sonic._writing && sonic._len > sonic.minLength || sonic._flushPending) {
            sonic._actualWrite();
        } else if (reopening) {
            process.nextTick(()=>sonic.emit('drain'));
        }
    }
    const flags = sonic.append ? 'a' : 'w';
    const mode = sonic.mode;
    if (sonic.sync) {
        try {
            if (sonic.mkdir) fs.mkdirSync(path.dirname(file), {
                recursive: true
            });
            const fd = fs.openSync(file, flags, mode);
            fileOpened(null, fd);
        } catch (err) {
            fileOpened(err);
            throw err;
        }
    } else if (sonic.mkdir) {
        fs.mkdir(path.dirname(file), {
            recursive: true
        }, (err)=>{
            if (err) return fileOpened(err);
            fs.open(file, flags, mode, fileOpened);
        });
    } else {
        fs.open(file, flags, mode, fileOpened);
    }
}
function SonicBoom(opts) {
    if (!(this instanceof SonicBoom)) {
        return new SonicBoom(opts);
    }
    let { fd, dest, minLength, maxLength, maxWrite, periodicFlush, sync, append = true, mkdir, retryEAGAIN, fsync, contentMode, mode } = opts || {};
    fd = fd || dest;
    this._len = 0;
    this.fd = -1;
    this._bufs = [];
    this._lens = [];
    this._writing = false;
    this._ending = false;
    this._reopening = false;
    this._asyncDrainScheduled = false;
    this._flushPending = false;
    this._hwm = Math.max(minLength || 0, 16387);
    this.file = null;
    this.destroyed = false;
    this.minLength = minLength || 0;
    this.maxLength = maxLength || 0;
    this.maxWrite = maxWrite || MAX_WRITE;
    this._periodicFlush = periodicFlush || 0;
    this._periodicFlushTimer = undefined;
    this.sync = sync || false;
    this.writable = true;
    this._fsync = fsync || false;
    this.append = append || false;
    this.mode = mode;
    this.retryEAGAIN = retryEAGAIN || (()=>true);
    this.mkdir = mkdir || false;
    let fsWriteSync;
    let fsWrite;
    if (contentMode === kContentModeBuffer) {
        this._writingBuf = kEmptyBuffer;
        this.write = writeBuffer;
        this.flush = flushBuffer;
        this.flushSync = flushBufferSync;
        this._actualWrite = actualWriteBuffer;
        fsWriteSync = ()=>fs.writeSync(this.fd, this._writingBuf);
        fsWrite = ()=>fs.write(this.fd, this._writingBuf, this.release);
    } else if (contentMode === undefined || contentMode === kContentModeUtf8) {
        this._writingBuf = '';
        this.write = write;
        this.flush = flush;
        this.flushSync = flushSync;
        this._actualWrite = actualWrite;
        fsWriteSync = ()=>fs.writeSync(this.fd, this._writingBuf, 'utf8');
        fsWrite = ()=>fs.write(this.fd, this._writingBuf, 'utf8', this.release);
    } else {
        throw new Error(`SonicBoom supports "${kContentModeUtf8}" and "${kContentModeBuffer}", but passed ${contentMode}`);
    }
    if (typeof fd === 'number') {
        this.fd = fd;
        process.nextTick(()=>this.emit('ready'));
    } else if (typeof fd === 'string') {
        openFile(fd, this);
    } else {
        throw new Error('SonicBoom supports only file descriptors and files');
    }
    if (this.minLength >= this.maxWrite) {
        throw new Error(`minLength should be smaller than maxWrite (${this.maxWrite})`);
    }
    this.release = (err, n)=>{
        if (err) {
            if ((err.code === 'EAGAIN' || err.code === 'EBUSY') && this.retryEAGAIN(err, this._writingBuf.length, this._len - this._writingBuf.length)) {
                if (this.sync) {
                    // This error code should not happen in sync mode, because it is
                    // not using the underlining operating system asynchronous functions.
                    // However it happens, and so we handle it.
                    // Ref: https://github.com/pinojs/pino/issues/783
                    try {
                        sleep(BUSY_WRITE_TIMEOUT);
                        this.release(undefined, 0);
                    } catch (err) {
                        this.release(err);
                    }
                } else {
                    // Let's give the destination some time to process the chunk.
                    setTimeout(fsWrite, BUSY_WRITE_TIMEOUT);
                }
            } else {
                this._writing = false;
                this.emit('error', err);
            }
            return;
        }
        this.emit('write', n);
        const releasedBufObj = releaseWritingBuf(this._writingBuf, this._len, n);
        this._len = releasedBufObj.len;
        this._writingBuf = releasedBufObj.writingBuf;
        if (this._writingBuf.length) {
            if (!this.sync) {
                fsWrite();
                return;
            }
            try {
                do {
                    const n = fsWriteSync();
                    const releasedBufObj = releaseWritingBuf(this._writingBuf, this._len, n);
                    this._len = releasedBufObj.len;
                    this._writingBuf = releasedBufObj.writingBuf;
                }while (this._writingBuf.length)
            } catch (err) {
                this.release(err);
                return;
            }
        }
        if (this._fsync) {
            fs.fsyncSync(this.fd);
        }
        const len = this._len;
        if (this._reopening) {
            this._writing = false;
            this._reopening = false;
            this.reopen();
        } else if (len > this.minLength) {
            this._actualWrite();
        } else if (this._ending) {
            if (len > 0) {
                this._actualWrite();
            } else {
                this._writing = false;
                actualClose(this);
            }
        } else {
            this._writing = false;
            if (this.sync) {
                if (!this._asyncDrainScheduled) {
                    this._asyncDrainScheduled = true;
                    process.nextTick(emitDrain, this);
                }
            } else {
                this.emit('drain');
            }
        }
    };
    this.on('newListener', function(name) {
        if (name === 'drain') {
            this._asyncDrainScheduled = false;
        }
    });
    if (this._periodicFlush !== 0) {
        this._periodicFlushTimer = setInterval(()=>this.flush(null), this._periodicFlush);
        this._periodicFlushTimer.unref();
    }
}
/**
 * Release the writingBuf after fs.write n bytes data
 * @param {string | Buffer} writingBuf - currently writing buffer, usually be instance._writingBuf.
 * @param {number} len - currently buffer length, usually be instance._len.
 * @param {number} n - number of bytes fs already written
 * @returns {{writingBuf: string | Buffer, len: number}} released writingBuf and length
 */ function releaseWritingBuf(writingBuf, len, n) {
    // if Buffer.byteLength is equal to n, that means writingBuf contains no multi-byte character
    if (typeof writingBuf === 'string' && Buffer.byteLength(writingBuf) !== n) {
        // Since the fs.write callback parameter `n` means how many bytes the passed of string
        // We calculate the original string length for avoiding the multi-byte character issue
        n = Buffer.from(writingBuf).subarray(0, n).toString().length;
    }
    len = Math.max(len - n, 0);
    writingBuf = writingBuf.slice(n);
    return {
        writingBuf,
        len
    };
}
function emitDrain(sonic) {
    const hasListeners = sonic.listenerCount('drain') > 0;
    if (!hasListeners) return;
    sonic._asyncDrainScheduled = false;
    sonic.emit('drain');
}
inherits(SonicBoom, EventEmitter);
function mergeBuf(bufs, len) {
    if (bufs.length === 0) {
        return kEmptyBuffer;
    }
    if (bufs.length === 1) {
        return bufs[0];
    }
    return Buffer.concat(bufs, len);
}
function write(data) {
    if (this.destroyed) {
        throw new Error('SonicBoom destroyed');
    }
    const len = this._len + data.length;
    const bufs = this._bufs;
    if (this.maxLength && len > this.maxLength) {
        this.emit('drop', data);
        return this._len < this._hwm;
    }
    if (bufs.length === 0 || bufs[bufs.length - 1].length + data.length > this.maxWrite) {
        bufs.push('' + data);
    } else {
        bufs[bufs.length - 1] += data;
    }
    this._len = len;
    if (!this._writing && this._len >= this.minLength) {
        this._actualWrite();
    }
    return this._len < this._hwm;
}
function writeBuffer(data) {
    if (this.destroyed) {
        throw new Error('SonicBoom destroyed');
    }
    const len = this._len + data.length;
    const bufs = this._bufs;
    const lens = this._lens;
    if (this.maxLength && len > this.maxLength) {
        this.emit('drop', data);
        return this._len < this._hwm;
    }
    if (bufs.length === 0 || lens[lens.length - 1] + data.length > this.maxWrite) {
        bufs.push([
            data
        ]);
        lens.push(data.length);
    } else {
        bufs[bufs.length - 1].push(data);
        lens[lens.length - 1] += data.length;
    }
    this._len = len;
    if (!this._writing && this._len >= this.minLength) {
        this._actualWrite();
    }
    return this._len < this._hwm;
}
function callFlushCallbackOnDrain(cb) {
    this._flushPending = true;
    const onDrain = ()=>{
        // only if _fsync is false to avoid double fsync
        if (!this._fsync) {
            try {
                fs.fsync(this.fd, (err)=>{
                    this._flushPending = false;
                    cb(err);
                });
            } catch (err) {
                cb(err);
            }
        } else {
            this._flushPending = false;
            cb();
        }
        this.off('error', onError);
    };
    const onError = (err)=>{
        this._flushPending = false;
        cb(err);
        this.off('drain', onDrain);
    };
    this.once('drain', onDrain);
    this.once('error', onError);
}
function flush(cb) {
    if (cb != null && typeof cb !== 'function') {
        throw new Error('flush cb must be a function');
    }
    if (this.destroyed) {
        const error = new Error('SonicBoom destroyed');
        if (cb) {
            cb(error);
            return;
        }
        throw error;
    }
    if (this.minLength <= 0) {
        cb?.();
        return;
    }
    if (cb) {
        callFlushCallbackOnDrain.call(this, cb);
    }
    if (this._writing) {
        return;
    }
    if (this._bufs.length === 0) {
        this._bufs.push('');
    }
    this._actualWrite();
}
function flushBuffer(cb) {
    if (cb != null && typeof cb !== 'function') {
        throw new Error('flush cb must be a function');
    }
    if (this.destroyed) {
        const error = new Error('SonicBoom destroyed');
        if (cb) {
            cb(error);
            return;
        }
        throw error;
    }
    if (this.minLength <= 0) {
        cb?.();
        return;
    }
    if (cb) {
        callFlushCallbackOnDrain.call(this, cb);
    }
    if (this._writing) {
        return;
    }
    if (this._bufs.length === 0) {
        this._bufs.push([]);
        this._lens.push(0);
    }
    this._actualWrite();
}
SonicBoom.prototype.reopen = function(file) {
    if (this.destroyed) {
        throw new Error('SonicBoom destroyed');
    }
    if (this._opening) {
        this.once('ready', ()=>{
            this.reopen(file);
        });
        return;
    }
    if (this._ending) {
        return;
    }
    if (!this.file) {
        throw new Error('Unable to reopen a file descriptor, you must pass a file to SonicBoom');
    }
    if (file) {
        this.file = file;
    }
    this._reopening = true;
    if (this._writing) {
        return;
    }
    const fd = this.fd;
    this.once('ready', ()=>{
        if (fd !== this.fd) {
            fs.close(fd, (err)=>{
                if (err) {
                    return this.emit('error', err);
                }
            });
        }
    });
    openFile(this.file, this);
};
SonicBoom.prototype.end = function() {
    if (this.destroyed) {
        throw new Error('SonicBoom destroyed');
    }
    if (this._opening) {
        this.once('ready', ()=>{
            this.end();
        });
        return;
    }
    if (this._ending) {
        return;
    }
    this._ending = true;
    if (this._writing) {
        return;
    }
    if (this._len > 0 && this.fd >= 0) {
        this._actualWrite();
    } else {
        actualClose(this);
    }
};
function flushSync() {
    if (this.destroyed) {
        throw new Error('SonicBoom destroyed');
    }
    if (this.fd < 0) {
        throw new Error('sonic boom is not ready yet');
    }
    if (!this._writing && this._writingBuf.length > 0) {
        this._bufs.unshift(this._writingBuf);
        this._writingBuf = '';
    }
    let buf = '';
    while(this._bufs.length || buf){
        if (buf.length <= 0) {
            buf = this._bufs[0];
        }
        try {
            const n = fs.writeSync(this.fd, buf, 'utf8');
            const releasedBufObj = releaseWritingBuf(buf, this._len, n);
            buf = releasedBufObj.writingBuf;
            this._len = releasedBufObj.len;
            if (buf.length <= 0) {
                this._bufs.shift();
            }
        } catch (err) {
            const shouldRetry = err.code === 'EAGAIN' || err.code === 'EBUSY';
            if (shouldRetry && !this.retryEAGAIN(err, buf.length, this._len - buf.length)) {
                throw err;
            }
            sleep(BUSY_WRITE_TIMEOUT);
        }
    }
    try {
        fs.fsyncSync(this.fd);
    } catch  {
    // Skip the error. The fd might not support fsync.
    }
}
function flushBufferSync() {
    if (this.destroyed) {
        throw new Error('SonicBoom destroyed');
    }
    if (this.fd < 0) {
        throw new Error('sonic boom is not ready yet');
    }
    if (!this._writing && this._writingBuf.length > 0) {
        this._bufs.unshift([
            this._writingBuf
        ]);
        this._writingBuf = kEmptyBuffer;
    }
    let buf = kEmptyBuffer;
    while(this._bufs.length || buf.length){
        if (buf.length <= 0) {
            buf = mergeBuf(this._bufs[0], this._lens[0]);
        }
        try {
            const n = fs.writeSync(this.fd, buf);
            buf = buf.subarray(n);
            this._len = Math.max(this._len - n, 0);
            if (buf.length <= 0) {
                this._bufs.shift();
                this._lens.shift();
            }
        } catch (err) {
            const shouldRetry = err.code === 'EAGAIN' || err.code === 'EBUSY';
            if (shouldRetry && !this.retryEAGAIN(err, buf.length, this._len - buf.length)) {
                throw err;
            }
            sleep(BUSY_WRITE_TIMEOUT);
        }
    }
}
SonicBoom.prototype.destroy = function() {
    if (this.destroyed) {
        return;
    }
    actualClose(this);
};
function actualWrite() {
    const release = this.release;
    this._writing = true;
    this._writingBuf = this._writingBuf || this._bufs.shift() || '';
    if (this.sync) {
        try {
            const written = fs.writeSync(this.fd, this._writingBuf, 'utf8');
            release(null, written);
        } catch (err) {
            release(err);
        }
    } else {
        fs.write(this.fd, this._writingBuf, 'utf8', release);
    }
}
function actualWriteBuffer() {
    const release = this.release;
    this._writing = true;
    this._writingBuf = this._writingBuf.length ? this._writingBuf : mergeBuf(this._bufs.shift(), this._lens.shift());
    if (this.sync) {
        try {
            const written = fs.writeSync(this.fd, this._writingBuf);
            release(null, written);
        } catch (err) {
            release(err);
        }
    } else {
        // fs.write will need to copy string to buffer anyway so
        // we do it here to avoid the overhead of calculating the buffer size
        // in releaseWritingBuf.
        if (kCopyBuffer) {
            this._writingBuf = Buffer.from(this._writingBuf);
        }
        fs.write(this.fd, this._writingBuf, release);
    }
}
function actualClose(sonic) {
    if (sonic.fd === -1) {
        sonic.once('ready', actualClose.bind(null, sonic));
        return;
    }
    if (sonic._periodicFlushTimer !== undefined) {
        clearInterval(sonic._periodicFlushTimer);
    }
    sonic.destroyed = true;
    sonic._bufs = [];
    sonic._lens = [];
    assert(typeof sonic.fd === 'number', `sonic.fd must be a number, got ${typeof sonic.fd}`);
    try {
        fs.fsync(sonic.fd, closeWrapped);
    } catch  {}
    function closeWrapped() {
        // We skip errors in fsync
        if (sonic.fd !== 1 && sonic.fd !== 2) {
            fs.close(sonic.fd, done);
        } else {
            done();
        }
    }
    function done(err) {
        if (err) {
            sonic.emit('error', err);
            return;
        }
        if (sonic._ending && !sonic._writing) {
            sonic.emit('finish');
        }
        sonic.emit('close');
    }
}
/**
 * These export configurations enable JS and TS developers
 * to consumer SonicBoom in whatever way best suits their needs.
 * Some examples of supported import syntax includes:
 * - `const SonicBoom = require('SonicBoom')`
 * - `const { SonicBoom } = require('SonicBoom')`
 * - `import * as SonicBoom from 'SonicBoom'`
 * - `import { SonicBoom } from 'SonicBoom'`
 * - `import SonicBoom from 'SonicBoom'`
 */ SonicBoom.SonicBoom = SonicBoom;
SonicBoom.default = SonicBoom;
module.exports = SonicBoom;
}),
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-adapter-wagmi/node_modules/sonic-boom/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

const fs = __turbopack_context__.r("[externals]/fs [external] (fs, cjs)");
const EventEmitter = __turbopack_context__.r("[externals]/events [external] (events, cjs)");
const inherits = __turbopack_context__.r("[externals]/util [external] (util, cjs)").inherits;
const path = __turbopack_context__.r("[externals]/path [external] (path, cjs)");
const sleep = __turbopack_context__.r("[project]/Desktop/walletconnect/chilly/node_modules/atomic-sleep/index.js [app-ssr] (ecmascript)");
const assert = __turbopack_context__.r("[externals]/assert [external] (assert, cjs)");
const BUSY_WRITE_TIMEOUT = 100;
const kEmptyBuffer = Buffer.allocUnsafe(0);
// 16 KB. Don't write more than docker buffer size.
// https://github.com/moby/moby/blob/513ec73831269947d38a644c278ce3cac36783b2/daemon/logger/copier.go#L13
const MAX_WRITE = 16 * 1024;
const kContentModeBuffer = 'buffer';
const kContentModeUtf8 = 'utf8';
const [major, minor] = (process.versions.node || '0.0').split('.').map(Number);
const kCopyBuffer = major >= 22 && minor >= 7;
function openFile(file, sonic) {
    sonic._opening = true;
    sonic._writing = true;
    sonic._asyncDrainScheduled = false;
    // NOTE: 'error' and 'ready' events emitted below only relevant when sonic.sync===false
    // for sync mode, there is no way to add a listener that will receive these
    function fileOpened(err, fd) {
        if (err) {
            sonic._reopening = false;
            sonic._writing = false;
            sonic._opening = false;
            if (sonic.sync) {
                process.nextTick(()=>{
                    if (sonic.listenerCount('error') > 0) {
                        sonic.emit('error', err);
                    }
                });
            } else {
                sonic.emit('error', err);
            }
            return;
        }
        const reopening = sonic._reopening;
        sonic.fd = fd;
        sonic.file = file;
        sonic._reopening = false;
        sonic._opening = false;
        sonic._writing = false;
        if (sonic.sync) {
            process.nextTick(()=>sonic.emit('ready'));
        } else {
            sonic.emit('ready');
        }
        if (sonic.destroyed) {
            return;
        }
        // start
        if (!sonic._writing && sonic._len > sonic.minLength || sonic._flushPending) {
            sonic._actualWrite();
        } else if (reopening) {
            process.nextTick(()=>sonic.emit('drain'));
        }
    }
    const flags = sonic.append ? 'a' : 'w';
    const mode = sonic.mode;
    if (sonic.sync) {
        try {
            if (sonic.mkdir) fs.mkdirSync(path.dirname(file), {
                recursive: true
            });
            const fd = fs.openSync(file, flags, mode);
            fileOpened(null, fd);
        } catch (err) {
            fileOpened(err);
            throw err;
        }
    } else if (sonic.mkdir) {
        fs.mkdir(path.dirname(file), {
            recursive: true
        }, (err)=>{
            if (err) return fileOpened(err);
            fs.open(file, flags, mode, fileOpened);
        });
    } else {
        fs.open(file, flags, mode, fileOpened);
    }
}
function SonicBoom(opts) {
    if (!(this instanceof SonicBoom)) {
        return new SonicBoom(opts);
    }
    let { fd, dest, minLength, maxLength, maxWrite, periodicFlush, sync, append = true, mkdir, retryEAGAIN, fsync, contentMode, mode } = opts || {};
    fd = fd || dest;
    this._len = 0;
    this.fd = -1;
    this._bufs = [];
    this._lens = [];
    this._writing = false;
    this._ending = false;
    this._reopening = false;
    this._asyncDrainScheduled = false;
    this._flushPending = false;
    this._hwm = Math.max(minLength || 0, 16387);
    this.file = null;
    this.destroyed = false;
    this.minLength = minLength || 0;
    this.maxLength = maxLength || 0;
    this.maxWrite = maxWrite || MAX_WRITE;
    this._periodicFlush = periodicFlush || 0;
    this._periodicFlushTimer = undefined;
    this.sync = sync || false;
    this.writable = true;
    this._fsync = fsync || false;
    this.append = append || false;
    this.mode = mode;
    this.retryEAGAIN = retryEAGAIN || (()=>true);
    this.mkdir = mkdir || false;
    let fsWriteSync;
    let fsWrite;
    if (contentMode === kContentModeBuffer) {
        this._writingBuf = kEmptyBuffer;
        this.write = writeBuffer;
        this.flush = flushBuffer;
        this.flushSync = flushBufferSync;
        this._actualWrite = actualWriteBuffer;
        fsWriteSync = ()=>fs.writeSync(this.fd, this._writingBuf);
        fsWrite = ()=>fs.write(this.fd, this._writingBuf, this.release);
    } else if (contentMode === undefined || contentMode === kContentModeUtf8) {
        this._writingBuf = '';
        this.write = write;
        this.flush = flush;
        this.flushSync = flushSync;
        this._actualWrite = actualWrite;
        fsWriteSync = ()=>fs.writeSync(this.fd, this._writingBuf, 'utf8');
        fsWrite = ()=>fs.write(this.fd, this._writingBuf, 'utf8', this.release);
    } else {
        throw new Error(`SonicBoom supports "${kContentModeUtf8}" and "${kContentModeBuffer}", but passed ${contentMode}`);
    }
    if (typeof fd === 'number') {
        this.fd = fd;
        process.nextTick(()=>this.emit('ready'));
    } else if (typeof fd === 'string') {
        openFile(fd, this);
    } else {
        throw new Error('SonicBoom supports only file descriptors and files');
    }
    if (this.minLength >= this.maxWrite) {
        throw new Error(`minLength should be smaller than maxWrite (${this.maxWrite})`);
    }
    this.release = (err, n)=>{
        if (err) {
            if ((err.code === 'EAGAIN' || err.code === 'EBUSY') && this.retryEAGAIN(err, this._writingBuf.length, this._len - this._writingBuf.length)) {
                if (this.sync) {
                    // This error code should not happen in sync mode, because it is
                    // not using the underlining operating system asynchronous functions.
                    // However it happens, and so we handle it.
                    // Ref: https://github.com/pinojs/pino/issues/783
                    try {
                        sleep(BUSY_WRITE_TIMEOUT);
                        this.release(undefined, 0);
                    } catch (err) {
                        this.release(err);
                    }
                } else {
                    // Let's give the destination some time to process the chunk.
                    setTimeout(fsWrite, BUSY_WRITE_TIMEOUT);
                }
            } else {
                this._writing = false;
                this.emit('error', err);
            }
            return;
        }
        this.emit('write', n);
        const releasedBufObj = releaseWritingBuf(this._writingBuf, this._len, n);
        this._len = releasedBufObj.len;
        this._writingBuf = releasedBufObj.writingBuf;
        if (this._writingBuf.length) {
            if (!this.sync) {
                fsWrite();
                return;
            }
            try {
                do {
                    const n = fsWriteSync();
                    const releasedBufObj = releaseWritingBuf(this._writingBuf, this._len, n);
                    this._len = releasedBufObj.len;
                    this._writingBuf = releasedBufObj.writingBuf;
                }while (this._writingBuf.length)
            } catch (err) {
                this.release(err);
                return;
            }
        }
        if (this._fsync) {
            fs.fsyncSync(this.fd);
        }
        const len = this._len;
        if (this._reopening) {
            this._writing = false;
            this._reopening = false;
            this.reopen();
        } else if (len > this.minLength) {
            this._actualWrite();
        } else if (this._ending) {
            if (len > 0) {
                this._actualWrite();
            } else {
                this._writing = false;
                actualClose(this);
            }
        } else {
            this._writing = false;
            if (this.sync) {
                if (!this._asyncDrainScheduled) {
                    this._asyncDrainScheduled = true;
                    process.nextTick(emitDrain, this);
                }
            } else {
                this.emit('drain');
            }
        }
    };
    this.on('newListener', function(name) {
        if (name === 'drain') {
            this._asyncDrainScheduled = false;
        }
    });
    if (this._periodicFlush !== 0) {
        this._periodicFlushTimer = setInterval(()=>this.flush(null), this._periodicFlush);
        this._periodicFlushTimer.unref();
    }
}
/**
 * Release the writingBuf after fs.write n bytes data
 * @param {string | Buffer} writingBuf - currently writing buffer, usually be instance._writingBuf.
 * @param {number} len - currently buffer length, usually be instance._len.
 * @param {number} n - number of bytes fs already written
 * @returns {{writingBuf: string | Buffer, len: number}} released writingBuf and length
 */ function releaseWritingBuf(writingBuf, len, n) {
    // if Buffer.byteLength is equal to n, that means writingBuf contains no multi-byte character
    if (typeof writingBuf === 'string' && Buffer.byteLength(writingBuf) !== n) {
        // Since the fs.write callback parameter `n` means how many bytes the passed of string
        // We calculate the original string length for avoiding the multi-byte character issue
        n = Buffer.from(writingBuf).subarray(0, n).toString().length;
    }
    len = Math.max(len - n, 0);
    writingBuf = writingBuf.slice(n);
    return {
        writingBuf,
        len
    };
}
function emitDrain(sonic) {
    const hasListeners = sonic.listenerCount('drain') > 0;
    if (!hasListeners) return;
    sonic._asyncDrainScheduled = false;
    sonic.emit('drain');
}
inherits(SonicBoom, EventEmitter);
function mergeBuf(bufs, len) {
    if (bufs.length === 0) {
        return kEmptyBuffer;
    }
    if (bufs.length === 1) {
        return bufs[0];
    }
    return Buffer.concat(bufs, len);
}
function write(data) {
    if (this.destroyed) {
        throw new Error('SonicBoom destroyed');
    }
    const len = this._len + data.length;
    const bufs = this._bufs;
    if (this.maxLength && len > this.maxLength) {
        this.emit('drop', data);
        return this._len < this._hwm;
    }
    if (bufs.length === 0 || bufs[bufs.length - 1].length + data.length > this.maxWrite) {
        bufs.push('' + data);
    } else {
        bufs[bufs.length - 1] += data;
    }
    this._len = len;
    if (!this._writing && this._len >= this.minLength) {
        this._actualWrite();
    }
    return this._len < this._hwm;
}
function writeBuffer(data) {
    if (this.destroyed) {
        throw new Error('SonicBoom destroyed');
    }
    const len = this._len + data.length;
    const bufs = this._bufs;
    const lens = this._lens;
    if (this.maxLength && len > this.maxLength) {
        this.emit('drop', data);
        return this._len < this._hwm;
    }
    if (bufs.length === 0 || lens[lens.length - 1] + data.length > this.maxWrite) {
        bufs.push([
            data
        ]);
        lens.push(data.length);
    } else {
        bufs[bufs.length - 1].push(data);
        lens[lens.length - 1] += data.length;
    }
    this._len = len;
    if (!this._writing && this._len >= this.minLength) {
        this._actualWrite();
    }
    return this._len < this._hwm;
}
function callFlushCallbackOnDrain(cb) {
    this._flushPending = true;
    const onDrain = ()=>{
        // only if _fsync is false to avoid double fsync
        if (!this._fsync) {
            try {
                fs.fsync(this.fd, (err)=>{
                    this._flushPending = false;
                    cb(err);
                });
            } catch (err) {
                cb(err);
            }
        } else {
            this._flushPending = false;
            cb();
        }
        this.off('error', onError);
    };
    const onError = (err)=>{
        this._flushPending = false;
        cb(err);
        this.off('drain', onDrain);
    };
    this.once('drain', onDrain);
    this.once('error', onError);
}
function flush(cb) {
    if (cb != null && typeof cb !== 'function') {
        throw new Error('flush cb must be a function');
    }
    if (this.destroyed) {
        const error = new Error('SonicBoom destroyed');
        if (cb) {
            cb(error);
            return;
        }
        throw error;
    }
    if (this.minLength <= 0) {
        cb?.();
        return;
    }
    if (cb) {
        callFlushCallbackOnDrain.call(this, cb);
    }
    if (this._writing) {
        return;
    }
    if (this._bufs.length === 0) {
        this._bufs.push('');
    }
    this._actualWrite();
}
function flushBuffer(cb) {
    if (cb != null && typeof cb !== 'function') {
        throw new Error('flush cb must be a function');
    }
    if (this.destroyed) {
        const error = new Error('SonicBoom destroyed');
        if (cb) {
            cb(error);
            return;
        }
        throw error;
    }
    if (this.minLength <= 0) {
        cb?.();
        return;
    }
    if (cb) {
        callFlushCallbackOnDrain.call(this, cb);
    }
    if (this._writing) {
        return;
    }
    if (this._bufs.length === 0) {
        this._bufs.push([]);
        this._lens.push(0);
    }
    this._actualWrite();
}
SonicBoom.prototype.reopen = function(file) {
    if (this.destroyed) {
        throw new Error('SonicBoom destroyed');
    }
    if (this._opening) {
        this.once('ready', ()=>{
            this.reopen(file);
        });
        return;
    }
    if (this._ending) {
        return;
    }
    if (!this.file) {
        throw new Error('Unable to reopen a file descriptor, you must pass a file to SonicBoom');
    }
    if (file) {
        this.file = file;
    }
    this._reopening = true;
    if (this._writing) {
        return;
    }
    const fd = this.fd;
    this.once('ready', ()=>{
        if (fd !== this.fd) {
            fs.close(fd, (err)=>{
                if (err) {
                    return this.emit('error', err);
                }
            });
        }
    });
    openFile(this.file, this);
};
SonicBoom.prototype.end = function() {
    if (this.destroyed) {
        throw new Error('SonicBoom destroyed');
    }
    if (this._opening) {
        this.once('ready', ()=>{
            this.end();
        });
        return;
    }
    if (this._ending) {
        return;
    }
    this._ending = true;
    if (this._writing) {
        return;
    }
    if (this._len > 0 && this.fd >= 0) {
        this._actualWrite();
    } else {
        actualClose(this);
    }
};
function flushSync() {
    if (this.destroyed) {
        throw new Error('SonicBoom destroyed');
    }
    if (this.fd < 0) {
        throw new Error('sonic boom is not ready yet');
    }
    if (!this._writing && this._writingBuf.length > 0) {
        this._bufs.unshift(this._writingBuf);
        this._writingBuf = '';
    }
    let buf = '';
    while(this._bufs.length || buf){
        if (buf.length <= 0) {
            buf = this._bufs[0];
        }
        try {
            const n = fs.writeSync(this.fd, buf, 'utf8');
            const releasedBufObj = releaseWritingBuf(buf, this._len, n);
            buf = releasedBufObj.writingBuf;
            this._len = releasedBufObj.len;
            if (buf.length <= 0) {
                this._bufs.shift();
            }
        } catch (err) {
            const shouldRetry = err.code === 'EAGAIN' || err.code === 'EBUSY';
            if (shouldRetry && !this.retryEAGAIN(err, buf.length, this._len - buf.length)) {
                throw err;
            }
            sleep(BUSY_WRITE_TIMEOUT);
        }
    }
    try {
        fs.fsyncSync(this.fd);
    } catch  {
    // Skip the error. The fd might not support fsync.
    }
}
function flushBufferSync() {
    if (this.destroyed) {
        throw new Error('SonicBoom destroyed');
    }
    if (this.fd < 0) {
        throw new Error('sonic boom is not ready yet');
    }
    if (!this._writing && this._writingBuf.length > 0) {
        this._bufs.unshift([
            this._writingBuf
        ]);
        this._writingBuf = kEmptyBuffer;
    }
    let buf = kEmptyBuffer;
    while(this._bufs.length || buf.length){
        if (buf.length <= 0) {
            buf = mergeBuf(this._bufs[0], this._lens[0]);
        }
        try {
            const n = fs.writeSync(this.fd, buf);
            buf = buf.subarray(n);
            this._len = Math.max(this._len - n, 0);
            if (buf.length <= 0) {
                this._bufs.shift();
                this._lens.shift();
            }
        } catch (err) {
            const shouldRetry = err.code === 'EAGAIN' || err.code === 'EBUSY';
            if (shouldRetry && !this.retryEAGAIN(err, buf.length, this._len - buf.length)) {
                throw err;
            }
            sleep(BUSY_WRITE_TIMEOUT);
        }
    }
}
SonicBoom.prototype.destroy = function() {
    if (this.destroyed) {
        return;
    }
    actualClose(this);
};
function actualWrite() {
    const release = this.release;
    this._writing = true;
    this._writingBuf = this._writingBuf || this._bufs.shift() || '';
    if (this.sync) {
        try {
            const written = fs.writeSync(this.fd, this._writingBuf, 'utf8');
            release(null, written);
        } catch (err) {
            release(err);
        }
    } else {
        fs.write(this.fd, this._writingBuf, 'utf8', release);
    }
}
function actualWriteBuffer() {
    const release = this.release;
    this._writing = true;
    this._writingBuf = this._writingBuf.length ? this._writingBuf : mergeBuf(this._bufs.shift(), this._lens.shift());
    if (this.sync) {
        try {
            const written = fs.writeSync(this.fd, this._writingBuf);
            release(null, written);
        } catch (err) {
            release(err);
        }
    } else {
        // fs.write will need to copy string to buffer anyway so
        // we do it here to avoid the overhead of calculating the buffer size
        // in releaseWritingBuf.
        if (kCopyBuffer) {
            this._writingBuf = Buffer.from(this._writingBuf);
        }
        fs.write(this.fd, this._writingBuf, release);
    }
}
function actualClose(sonic) {
    if (sonic.fd === -1) {
        sonic.once('ready', actualClose.bind(null, sonic));
        return;
    }
    if (sonic._periodicFlushTimer !== undefined) {
        clearInterval(sonic._periodicFlushTimer);
    }
    sonic.destroyed = true;
    sonic._bufs = [];
    sonic._lens = [];
    assert(typeof sonic.fd === 'number', `sonic.fd must be a number, got ${typeof sonic.fd}`);
    try {
        fs.fsync(sonic.fd, closeWrapped);
    } catch  {}
    function closeWrapped() {
        // We skip errors in fsync
        if (sonic.fd !== 1 && sonic.fd !== 2) {
            fs.close(sonic.fd, done);
        } else {
            done();
        }
    }
    function done(err) {
        if (err) {
            sonic.emit('error', err);
            return;
        }
        if (sonic._ending && !sonic._writing) {
            sonic.emit('finish');
        }
        sonic.emit('close');
    }
}
/**
 * These export configurations enable JS and TS developers
 * to consumer SonicBoom in whatever way best suits their needs.
 * Some examples of supported import syntax includes:
 * - `const SonicBoom = require('SonicBoom')`
 * - `const { SonicBoom } = require('SonicBoom')`
 * - `import * as SonicBoom from 'SonicBoom'`
 * - `import { SonicBoom } from 'SonicBoom'`
 * - `import SonicBoom from 'SonicBoom'`
 */ SonicBoom.SonicBoom = SonicBoom;
SonicBoom.default = SonicBoom;
module.exports = SonicBoom;
}),
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-controllers/node_modules/@walletconnect/logger/dist/index.es.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$node_modules$2f$pino$2f$pino$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-controllers/node_modules/pino/pino.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$walletconnect$2f$safe$2d$json$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/@walletconnect/safe-json/dist/esm/index.js [app-ssr] (ecmascript)");
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
        a(this, "logs"), a(this, "level"), a(this, "levelValue"), a(this, "MAX_LOG_SIZE_IN_BYTES"), this.level = e ?? "error", this.levelValue = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$node_modules$2f$pino$2f$pino$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["levels"].values[this.level], this.MAX_LOG_SIZE_IN_BYTES = t, this.logs = new v(this.MAX_LOG_SIZE_IN_BYTES);
    }
    forwardToConsole(e, t) {
        t === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$node_modules$2f$pino$2f$pino$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["levels"].values.error ? console.error(e) : t === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$node_modules$2f$pino$2f$pino$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["levels"].values.warn ? console.warn(e) : t === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$node_modules$2f$pino$2f$pino$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["levels"].values.debug ? console.debug(e) : t === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$node_modules$2f$pino$2f$pino$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["levels"].values.trace ? console.trace(e) : console.log(e);
    }
    appendToLogs(e) {
        this.logs.append((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$walletconnect$2f$safe$2d$json$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["safeJsonStringify"])({
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
        return t.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$walletconnect$2f$safe$2d$json$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["safeJsonStringify"])({
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
        logger: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$node_modules$2f$pino$2f$pino$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(h(g({}, r.opts), {
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
        logger: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$node_modules$2f$pino$2f$pino$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(h(g({}, r.opts), {
            level: "trace"
        }), t),
        chunkLoggerController: t
    };
}
function Y(r) {
    return typeof r.loggerOverride < "u" && typeof r.loggerOverride != "string" ? {
        logger: r.loggerOverride,
        chunkLoggerController: null
    } : ("TURBOPACK compile-time value", "undefined") < "u" ? I(r) : O(r);
}
;
 //# sourceMappingURL=index.es.js.map
}),
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-wallet/node_modules/@walletconnect/logger/dist/index.es.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$wallet$2f$node_modules$2f$pino$2f$pino$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-wallet/node_modules/pino/pino.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$walletconnect$2f$safe$2d$json$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/@walletconnect/safe-json/dist/esm/index.js [app-ssr] (ecmascript)");
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
        a(this, "logs"), a(this, "level"), a(this, "levelValue"), a(this, "MAX_LOG_SIZE_IN_BYTES"), this.level = e ?? "error", this.levelValue = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$wallet$2f$node_modules$2f$pino$2f$pino$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["levels"].values[this.level], this.MAX_LOG_SIZE_IN_BYTES = t, this.logs = new v(this.MAX_LOG_SIZE_IN_BYTES);
    }
    forwardToConsole(e, t) {
        t === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$wallet$2f$node_modules$2f$pino$2f$pino$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["levels"].values.error ? console.error(e) : t === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$wallet$2f$node_modules$2f$pino$2f$pino$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["levels"].values.warn ? console.warn(e) : t === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$wallet$2f$node_modules$2f$pino$2f$pino$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["levels"].values.debug ? console.debug(e) : t === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$wallet$2f$node_modules$2f$pino$2f$pino$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["levels"].values.trace ? console.trace(e) : console.log(e);
    }
    appendToLogs(e) {
        this.logs.append((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$walletconnect$2f$safe$2d$json$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["safeJsonStringify"])({
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
        return t.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$walletconnect$2f$safe$2d$json$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["safeJsonStringify"])({
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
        logger: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$wallet$2f$node_modules$2f$pino$2f$pino$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(h(g({}, r.opts), {
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
        logger: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$wallet$2f$node_modules$2f$pino$2f$pino$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(h(g({}, r.opts), {
            level: "trace"
        }), t),
        chunkLoggerController: t
    };
}
function Y(r) {
    return typeof r.loggerOverride < "u" && typeof r.loggerOverride != "string" ? {
        logger: r.loggerOverride,
        chunkLoggerController: null
    } : ("TURBOPACK compile-time value", "undefined") < "u" ? I(r) : O(r);
}
;
 //# sourceMappingURL=index.es.js.map
}),
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit/node_modules/@walletconnect/logger/dist/index.es.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2f$node_modules$2f$pino$2f$pino$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit/node_modules/pino/pino.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$walletconnect$2f$safe$2d$json$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/@walletconnect/safe-json/dist/esm/index.js [app-ssr] (ecmascript)");
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
        a(this, "logs"), a(this, "level"), a(this, "levelValue"), a(this, "MAX_LOG_SIZE_IN_BYTES"), this.level = e ?? "error", this.levelValue = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2f$node_modules$2f$pino$2f$pino$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["levels"].values[this.level], this.MAX_LOG_SIZE_IN_BYTES = t, this.logs = new v(this.MAX_LOG_SIZE_IN_BYTES);
    }
    forwardToConsole(e, t) {
        t === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2f$node_modules$2f$pino$2f$pino$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["levels"].values.error ? console.error(e) : t === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2f$node_modules$2f$pino$2f$pino$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["levels"].values.warn ? console.warn(e) : t === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2f$node_modules$2f$pino$2f$pino$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["levels"].values.debug ? console.debug(e) : t === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2f$node_modules$2f$pino$2f$pino$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["levels"].values.trace ? console.trace(e) : console.log(e);
    }
    appendToLogs(e) {
        this.logs.append((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$walletconnect$2f$safe$2d$json$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["safeJsonStringify"])({
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
        return t.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$walletconnect$2f$safe$2d$json$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["safeJsonStringify"])({
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
        logger: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2f$node_modules$2f$pino$2f$pino$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(h(g({}, r.opts), {
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
        logger: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2f$node_modules$2f$pino$2f$pino$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(h(g({}, r.opts), {
            level: "trace"
        }), t),
        chunkLoggerController: t
    };
}
function Y(r) {
    return typeof r.loggerOverride < "u" && typeof r.loggerOverride != "string" ? {
        logger: r.loggerOverride,
        chunkLoggerController: null
    } : ("TURBOPACK compile-time value", "undefined") < "u" ? I(r) : O(r);
}
;
 //# sourceMappingURL=index.es.js.map
}),
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-utils/node_modules/@walletconnect/logger/dist/index.es.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$node_modules$2f$pino$2f$pino$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-utils/node_modules/pino/pino.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$walletconnect$2f$safe$2d$json$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/@walletconnect/safe-json/dist/esm/index.js [app-ssr] (ecmascript)");
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
        a(this, "logs"), a(this, "level"), a(this, "levelValue"), a(this, "MAX_LOG_SIZE_IN_BYTES"), this.level = e ?? "error", this.levelValue = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$node_modules$2f$pino$2f$pino$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["levels"].values[this.level], this.MAX_LOG_SIZE_IN_BYTES = t, this.logs = new v(this.MAX_LOG_SIZE_IN_BYTES);
    }
    forwardToConsole(e, t) {
        t === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$node_modules$2f$pino$2f$pino$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["levels"].values.error ? console.error(e) : t === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$node_modules$2f$pino$2f$pino$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["levels"].values.warn ? console.warn(e) : t === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$node_modules$2f$pino$2f$pino$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["levels"].values.debug ? console.debug(e) : t === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$node_modules$2f$pino$2f$pino$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["levels"].values.trace ? console.trace(e) : console.log(e);
    }
    appendToLogs(e) {
        this.logs.append((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$walletconnect$2f$safe$2d$json$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["safeJsonStringify"])({
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
        return t.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$walletconnect$2f$safe$2d$json$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["safeJsonStringify"])({
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
        logger: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$node_modules$2f$pino$2f$pino$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(h(g({}, r.opts), {
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
        logger: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$node_modules$2f$pino$2f$pino$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(h(g({}, r.opts), {
            level: "trace"
        }), t),
        chunkLoggerController: t
    };
}
function Y(r) {
    return typeof r.loggerOverride < "u" && typeof r.loggerOverride != "string" ? {
        logger: r.loggerOverride,
        chunkLoggerController: null
    } : ("TURBOPACK compile-time value", "undefined") < "u" ? I(r) : O(r);
}
;
 //# sourceMappingURL=index.es.js.map
}),
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-adapter-wagmi/node_modules/@walletconnect/logger/dist/index.es.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$adapter$2d$wagmi$2f$node_modules$2f$pino$2f$pino$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-adapter-wagmi/node_modules/pino/pino.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$walletconnect$2f$safe$2d$json$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/@walletconnect/safe-json/dist/esm/index.js [app-ssr] (ecmascript)");
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
        a(this, "logs"), a(this, "level"), a(this, "levelValue"), a(this, "MAX_LOG_SIZE_IN_BYTES"), this.level = e ?? "error", this.levelValue = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$adapter$2d$wagmi$2f$node_modules$2f$pino$2f$pino$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["levels"].values[this.level], this.MAX_LOG_SIZE_IN_BYTES = t, this.logs = new v(this.MAX_LOG_SIZE_IN_BYTES);
    }
    forwardToConsole(e, t) {
        t === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$adapter$2d$wagmi$2f$node_modules$2f$pino$2f$pino$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["levels"].values.error ? console.error(e) : t === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$adapter$2d$wagmi$2f$node_modules$2f$pino$2f$pino$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["levels"].values.warn ? console.warn(e) : t === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$adapter$2d$wagmi$2f$node_modules$2f$pino$2f$pino$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["levels"].values.debug ? console.debug(e) : t === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$adapter$2d$wagmi$2f$node_modules$2f$pino$2f$pino$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["levels"].values.trace ? console.trace(e) : console.log(e);
    }
    appendToLogs(e) {
        this.logs.append((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$walletconnect$2f$safe$2d$json$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["safeJsonStringify"])({
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
        return t.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$walletconnect$2f$safe$2d$json$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["safeJsonStringify"])({
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
        logger: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$adapter$2d$wagmi$2f$node_modules$2f$pino$2f$pino$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(h(g({}, r.opts), {
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
        logger: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$adapter$2d$wagmi$2f$node_modules$2f$pino$2f$pino$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(h(g({}, r.opts), {
            level: "trace"
        }), t),
        chunkLoggerController: t
    };
}
function Y(r) {
    return typeof r.loggerOverride < "u" && typeof r.loggerOverride != "string" ? {
        logger: r.loggerOverride,
        chunkLoggerController: null
    } : ("TURBOPACK compile-time value", "undefined") < "u" ? I(r) : O(r);
}
;
 //# sourceMappingURL=index.es.js.map
}),
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-controllers/node_modules/@walletconnect/types/dist/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$walletconnect$2f$events$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/@walletconnect/events/dist/esm/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$walletconnect$2f$events$2f$dist$2f$esm$2f$events$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/@walletconnect/events/dist/esm/events.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$events__$5b$external$5d$__$28$events$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/events [external] (events, cjs)");
;
;
var a = Object.defineProperty, u = (e, s, r)=>s in e ? a(e, s, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: r
    }) : e[s] = r, c = (e, s, r)=>u(e, typeof s != "symbol" ? s + "" : s, r);
class h extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$walletconnect$2f$events$2f$dist$2f$esm$2f$events$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IEvents"] {
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
class I extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$walletconnect$2f$events$2f$dist$2f$esm$2f$events$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IEvents"] {
    constructor(s, r){
        super(), this.core = s, this.logger = r, v(this, "records", new Map);
    }
}
class y {
    constructor(s, r){
        this.logger = s, this.core = r;
    }
}
class m extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$walletconnect$2f$events$2f$dist$2f$esm$2f$events$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IEvents"] {
    constructor(s, r){
        super(), this.relayer = s, this.logger = r;
    }
}
class d extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$walletconnect$2f$events$2f$dist$2f$esm$2f$events$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IEvents"] {
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
class P extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$walletconnect$2f$events$2f$dist$2f$esm$2f$events$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IEvents"] {
    constructor(s, r){
        super(), this.relayer = s, this.logger = r;
    }
}
class j {
    constructor(s, r){
        this.core = s, this.logger = r;
    }
}
class S extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$walletconnect$2f$events$2f$dist$2f$esm$2f$events$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IEvents"] {
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
class H extends __TURBOPACK__imported__module__$5b$externals$5d2f$events__$5b$external$5d$__$28$events$2c$__cjs$29$__["default"] {
    constructor(){
        super();
    }
}
class J {
    constructor(s){
        this.opts = s, i(this, "protocol", "wc"), i(this, "version", 2);
    }
}
class K extends __TURBOPACK__imported__module__$5b$externals$5d2f$events__$5b$external$5d$__$28$events$2c$__cjs$29$__["EventEmitter"] {
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
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit/node_modules/@walletconnect/types/dist/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$walletconnect$2f$events$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/@walletconnect/events/dist/esm/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$walletconnect$2f$events$2f$dist$2f$esm$2f$events$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/@walletconnect/events/dist/esm/events.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$events__$5b$external$5d$__$28$events$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/events [external] (events, cjs)");
;
;
var a = Object.defineProperty, u = (e, s, r)=>s in e ? a(e, s, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: r
    }) : e[s] = r, c = (e, s, r)=>u(e, typeof s != "symbol" ? s + "" : s, r);
class h extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$walletconnect$2f$events$2f$dist$2f$esm$2f$events$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IEvents"] {
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
class I extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$walletconnect$2f$events$2f$dist$2f$esm$2f$events$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IEvents"] {
    constructor(s, r){
        super(), this.core = s, this.logger = r, v(this, "records", new Map);
    }
}
class y {
    constructor(s, r){
        this.logger = s, this.core = r;
    }
}
class m extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$walletconnect$2f$events$2f$dist$2f$esm$2f$events$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IEvents"] {
    constructor(s, r){
        super(), this.relayer = s, this.logger = r;
    }
}
class d extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$walletconnect$2f$events$2f$dist$2f$esm$2f$events$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IEvents"] {
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
class P extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$walletconnect$2f$events$2f$dist$2f$esm$2f$events$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IEvents"] {
    constructor(s, r){
        super(), this.relayer = s, this.logger = r;
    }
}
class j {
    constructor(s, r){
        this.core = s, this.logger = r;
    }
}
class S extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$walletconnect$2f$events$2f$dist$2f$esm$2f$events$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IEvents"] {
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
class H extends __TURBOPACK__imported__module__$5b$externals$5d2f$events__$5b$external$5d$__$28$events$2c$__cjs$29$__["default"] {
    constructor(){
        super();
    }
}
class J {
    constructor(s){
        this.opts = s, i(this, "protocol", "wc"), i(this, "version", 2);
    }
}
class K extends __TURBOPACK__imported__module__$5b$externals$5d2f$events__$5b$external$5d$__$28$events$2c$__cjs$29$__["EventEmitter"] {
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
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-adapter-wagmi/node_modules/@walletconnect/types/dist/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$walletconnect$2f$events$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/@walletconnect/events/dist/esm/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$walletconnect$2f$events$2f$dist$2f$esm$2f$events$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/@walletconnect/events/dist/esm/events.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$events__$5b$external$5d$__$28$events$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/events [external] (events, cjs)");
;
;
var a = Object.defineProperty, u = (e, s, r)=>s in e ? a(e, s, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: r
    }) : e[s] = r, c = (e, s, r)=>u(e, typeof s != "symbol" ? s + "" : s, r);
class h extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$walletconnect$2f$events$2f$dist$2f$esm$2f$events$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IEvents"] {
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
class I extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$walletconnect$2f$events$2f$dist$2f$esm$2f$events$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IEvents"] {
    constructor(s, r){
        super(), this.core = s, this.logger = r, v(this, "records", new Map);
    }
}
class y {
    constructor(s, r){
        this.logger = s, this.core = r;
    }
}
class m extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$walletconnect$2f$events$2f$dist$2f$esm$2f$events$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IEvents"] {
    constructor(s, r){
        super(), this.relayer = s, this.logger = r;
    }
}
class d extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$walletconnect$2f$events$2f$dist$2f$esm$2f$events$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IEvents"] {
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
class P extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$walletconnect$2f$events$2f$dist$2f$esm$2f$events$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IEvents"] {
    constructor(s, r){
        super(), this.relayer = s, this.logger = r;
    }
}
class j {
    constructor(s, r){
        this.core = s, this.logger = r;
    }
}
class S extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$walletconnect$2f$events$2f$dist$2f$esm$2f$events$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IEvents"] {
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
class H extends __TURBOPACK__imported__module__$5b$externals$5d2f$events__$5b$external$5d$__$28$events$2c$__cjs$29$__["default"] {
    constructor(){
        super();
    }
}
class J {
    constructor(s){
        this.opts = s, i(this, "protocol", "wc"), i(this, "version", 2);
    }
}
class K extends __TURBOPACK__imported__module__$5b$externals$5d2f$events__$5b$external$5d$__$28$events$2c$__cjs$29$__["EventEmitter"] {
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
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-controllers/node_modules/base-x/src/esm/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit/node_modules/base-x/src/esm/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-adapter-wagmi/node_modules/base-x/src/esm/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-controllers/node_modules/bs58/src/esm/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$node_modules$2f$base$2d$x$2f$src$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-controllers/node_modules/base-x/src/esm/index.js [app-ssr] (ecmascript)");
;
var ALPHABET = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz';
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$node_modules$2f$base$2d$x$2f$src$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(ALPHABET);
}),
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit/node_modules/bs58/src/esm/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2f$node_modules$2f$base$2d$x$2f$src$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit/node_modules/base-x/src/esm/index.js [app-ssr] (ecmascript)");
;
var ALPHABET = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz';
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2f$node_modules$2f$base$2d$x$2f$src$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(ALPHABET);
}),
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-adapter-wagmi/node_modules/bs58/src/esm/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$adapter$2d$wagmi$2f$node_modules$2f$base$2d$x$2f$src$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-adapter-wagmi/node_modules/base-x/src/esm/index.js [app-ssr] (ecmascript)");
;
var ALPHABET = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz';
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$adapter$2d$wagmi$2f$node_modules$2f$base$2d$x$2f$src$2f$esm$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(ALPHABET);
}),
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-controllers/node_modules/uint8arrays/esm/src/compare.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-controllers/node_modules/uint8arrays/esm/src/util/as-uint8array.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-controllers/node_modules/uint8arrays/esm/src/alloc.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "alloc",
    ()=>alloc,
    "allocUnsafe",
    ()=>allocUnsafe
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$util$2f$as$2d$uint8array$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-controllers/node_modules/uint8arrays/esm/src/util/as-uint8array.js [app-ssr] (ecmascript)");
;
function alloc(size = 0) {
    if (globalThis.Buffer != null && globalThis.Buffer.alloc != null) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$util$2f$as$2d$uint8array$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["asUint8Array"])(globalThis.Buffer.alloc(size));
    }
    return new Uint8Array(size);
}
function allocUnsafe(size = 0) {
    if (globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$util$2f$as$2d$uint8array$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["asUint8Array"])(globalThis.Buffer.allocUnsafe(size));
    }
    return new Uint8Array(size);
}
}),
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-controllers/node_modules/uint8arrays/esm/src/concat.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "concat",
    ()=>concat
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$alloc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-controllers/node_modules/uint8arrays/esm/src/alloc.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$util$2f$as$2d$uint8array$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-controllers/node_modules/uint8arrays/esm/src/util/as-uint8array.js [app-ssr] (ecmascript)");
;
;
function concat(arrays, length) {
    if (!length) {
        length = arrays.reduce((acc, curr)=>acc + curr.length, 0);
    }
    const output = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$alloc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["allocUnsafe"])(length);
    let offset = 0;
    for (const arr of arrays){
        output.set(arr, offset);
        offset += arr.length;
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$util$2f$as$2d$uint8array$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["asUint8Array"])(output);
}
}),
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-controllers/node_modules/uint8arrays/esm/src/equals.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-controllers/node_modules/uint8arrays/esm/src/util/bases.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$multiformats$2f$esm$2f$src$2f$basics$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/multiformats/esm/src/basics.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$alloc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-controllers/node_modules/uint8arrays/esm/src/alloc.js [app-ssr] (ecmascript)");
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
    const buf = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$alloc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["allocUnsafe"])(str.length);
    for(let i = 0; i < str.length; i++){
        buf[i] = str.charCodeAt(i);
    }
    return buf;
});
const BASES = {
    utf8: string,
    'utf-8': string,
    hex: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$multiformats$2f$esm$2f$src$2f$basics$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["bases"].base16,
    latin1: ascii,
    ascii: ascii,
    binary: ascii,
    ...__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$multiformats$2f$esm$2f$src$2f$basics$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["bases"]
};
const __TURBOPACK__default__export__ = BASES;
}),
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-controllers/node_modules/uint8arrays/esm/src/from-string.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "fromString",
    ()=>fromString
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$util$2f$bases$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-controllers/node_modules/uint8arrays/esm/src/util/bases.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$util$2f$as$2d$uint8array$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-controllers/node_modules/uint8arrays/esm/src/util/as-uint8array.js [app-ssr] (ecmascript)");
;
;
function fromString(string, encoding = 'utf8') {
    const base = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$util$2f$bases$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"][encoding];
    if (!base) {
        throw new Error(`Unsupported encoding "${encoding}"`);
    }
    if ((encoding === 'utf8' || encoding === 'utf-8') && globalThis.Buffer != null && globalThis.Buffer.from != null) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$util$2f$as$2d$uint8array$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["asUint8Array"])(globalThis.Buffer.from(string, 'utf-8'));
    }
    return base.decoder.decode(`${base.prefix}${string}`);
}
}),
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-controllers/node_modules/uint8arrays/esm/src/to-string.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "toString",
    ()=>toString
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$util$2f$bases$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-controllers/node_modules/uint8arrays/esm/src/util/bases.js [app-ssr] (ecmascript)");
;
function toString(array, encoding = 'utf8') {
    const base = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$util$2f$bases$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"][encoding];
    if (!base) {
        throw new Error(`Unsupported encoding "${encoding}"`);
    }
    if ((encoding === 'utf8' || encoding === 'utf-8') && globalThis.Buffer != null && globalThis.Buffer.from != null) {
        return globalThis.Buffer.from(array.buffer, array.byteOffset, array.byteLength).toString('utf8');
    }
    return base.encoder.encode(array).substring(1);
}
}),
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-controllers/node_modules/uint8arrays/esm/src/xor.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "xor",
    ()=>xor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$alloc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-controllers/node_modules/uint8arrays/esm/src/alloc.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$util$2f$as$2d$uint8array$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-controllers/node_modules/uint8arrays/esm/src/util/as-uint8array.js [app-ssr] (ecmascript)");
;
;
function xor(a, b) {
    if (a.length !== b.length) {
        throw new Error('Inputs should have the same length');
    }
    const result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$alloc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["allocUnsafe"])(a.length);
    for(let i = 0; i < a.length; i++){
        result[i] = a[i] ^ b[i];
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$util$2f$as$2d$uint8array$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["asUint8Array"])(result);
}
}),
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-controllers/node_modules/uint8arrays/esm/src/index.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$compare$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-controllers/node_modules/uint8arrays/esm/src/compare.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$concat$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-controllers/node_modules/uint8arrays/esm/src/concat.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$equals$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-controllers/node_modules/uint8arrays/esm/src/equals.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$from$2d$string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-controllers/node_modules/uint8arrays/esm/src/from-string.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$to$2d$string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-controllers/node_modules/uint8arrays/esm/src/to-string.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$xor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-controllers/node_modules/uint8arrays/esm/src/xor.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
}),
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit/node_modules/uint8arrays/esm/src/compare.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit/node_modules/uint8arrays/esm/src/util/as-uint8array.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit/node_modules/uint8arrays/esm/src/alloc.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "alloc",
    ()=>alloc,
    "allocUnsafe",
    ()=>allocUnsafe
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$util$2f$as$2d$uint8array$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit/node_modules/uint8arrays/esm/src/util/as-uint8array.js [app-ssr] (ecmascript)");
;
function alloc(size = 0) {
    if (globalThis.Buffer != null && globalThis.Buffer.alloc != null) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$util$2f$as$2d$uint8array$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["asUint8Array"])(globalThis.Buffer.alloc(size));
    }
    return new Uint8Array(size);
}
function allocUnsafe(size = 0) {
    if (globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$util$2f$as$2d$uint8array$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["asUint8Array"])(globalThis.Buffer.allocUnsafe(size));
    }
    return new Uint8Array(size);
}
}),
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit/node_modules/uint8arrays/esm/src/concat.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "concat",
    ()=>concat
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$alloc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit/node_modules/uint8arrays/esm/src/alloc.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$util$2f$as$2d$uint8array$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit/node_modules/uint8arrays/esm/src/util/as-uint8array.js [app-ssr] (ecmascript)");
;
;
function concat(arrays, length) {
    if (!length) {
        length = arrays.reduce((acc, curr)=>acc + curr.length, 0);
    }
    const output = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$alloc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["allocUnsafe"])(length);
    let offset = 0;
    for (const arr of arrays){
        output.set(arr, offset);
        offset += arr.length;
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$util$2f$as$2d$uint8array$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["asUint8Array"])(output);
}
}),
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit/node_modules/uint8arrays/esm/src/equals.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit/node_modules/uint8arrays/esm/src/util/bases.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$multiformats$2f$esm$2f$src$2f$basics$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/multiformats/esm/src/basics.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$alloc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit/node_modules/uint8arrays/esm/src/alloc.js [app-ssr] (ecmascript)");
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
    const buf = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$alloc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["allocUnsafe"])(str.length);
    for(let i = 0; i < str.length; i++){
        buf[i] = str.charCodeAt(i);
    }
    return buf;
});
const BASES = {
    utf8: string,
    'utf-8': string,
    hex: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$multiformats$2f$esm$2f$src$2f$basics$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["bases"].base16,
    latin1: ascii,
    ascii: ascii,
    binary: ascii,
    ...__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$multiformats$2f$esm$2f$src$2f$basics$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["bases"]
};
const __TURBOPACK__default__export__ = BASES;
}),
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit/node_modules/uint8arrays/esm/src/from-string.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "fromString",
    ()=>fromString
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$util$2f$bases$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit/node_modules/uint8arrays/esm/src/util/bases.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$util$2f$as$2d$uint8array$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit/node_modules/uint8arrays/esm/src/util/as-uint8array.js [app-ssr] (ecmascript)");
;
;
function fromString(string, encoding = 'utf8') {
    const base = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$util$2f$bases$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"][encoding];
    if (!base) {
        throw new Error(`Unsupported encoding "${encoding}"`);
    }
    if ((encoding === 'utf8' || encoding === 'utf-8') && globalThis.Buffer != null && globalThis.Buffer.from != null) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$util$2f$as$2d$uint8array$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["asUint8Array"])(globalThis.Buffer.from(string, 'utf-8'));
    }
    return base.decoder.decode(`${base.prefix}${string}`);
}
}),
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit/node_modules/uint8arrays/esm/src/to-string.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "toString",
    ()=>toString
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$util$2f$bases$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit/node_modules/uint8arrays/esm/src/util/bases.js [app-ssr] (ecmascript)");
;
function toString(array, encoding = 'utf8') {
    const base = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$util$2f$bases$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"][encoding];
    if (!base) {
        throw new Error(`Unsupported encoding "${encoding}"`);
    }
    if ((encoding === 'utf8' || encoding === 'utf-8') && globalThis.Buffer != null && globalThis.Buffer.from != null) {
        return globalThis.Buffer.from(array.buffer, array.byteOffset, array.byteLength).toString('utf8');
    }
    return base.encoder.encode(array).substring(1);
}
}),
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit/node_modules/uint8arrays/esm/src/xor.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "xor",
    ()=>xor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$alloc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit/node_modules/uint8arrays/esm/src/alloc.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$util$2f$as$2d$uint8array$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit/node_modules/uint8arrays/esm/src/util/as-uint8array.js [app-ssr] (ecmascript)");
;
;
function xor(a, b) {
    if (a.length !== b.length) {
        throw new Error('Inputs should have the same length');
    }
    const result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$alloc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["allocUnsafe"])(a.length);
    for(let i = 0; i < a.length; i++){
        result[i] = a[i] ^ b[i];
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$util$2f$as$2d$uint8array$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["asUint8Array"])(result);
}
}),
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit/node_modules/uint8arrays/esm/src/index.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$compare$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit/node_modules/uint8arrays/esm/src/compare.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$concat$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit/node_modules/uint8arrays/esm/src/concat.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$equals$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit/node_modules/uint8arrays/esm/src/equals.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$from$2d$string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit/node_modules/uint8arrays/esm/src/from-string.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$to$2d$string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit/node_modules/uint8arrays/esm/src/to-string.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$xor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit/node_modules/uint8arrays/esm/src/xor.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
}),
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-adapter-wagmi/node_modules/uint8arrays/esm/src/compare.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-adapter-wagmi/node_modules/uint8arrays/esm/src/util/as-uint8array.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-adapter-wagmi/node_modules/uint8arrays/esm/src/alloc.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "alloc",
    ()=>alloc,
    "allocUnsafe",
    ()=>allocUnsafe
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$adapter$2d$wagmi$2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$util$2f$as$2d$uint8array$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-adapter-wagmi/node_modules/uint8arrays/esm/src/util/as-uint8array.js [app-ssr] (ecmascript)");
;
function alloc(size = 0) {
    if (globalThis.Buffer != null && globalThis.Buffer.alloc != null) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$adapter$2d$wagmi$2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$util$2f$as$2d$uint8array$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["asUint8Array"])(globalThis.Buffer.alloc(size));
    }
    return new Uint8Array(size);
}
function allocUnsafe(size = 0) {
    if (globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$adapter$2d$wagmi$2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$util$2f$as$2d$uint8array$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["asUint8Array"])(globalThis.Buffer.allocUnsafe(size));
    }
    return new Uint8Array(size);
}
}),
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-adapter-wagmi/node_modules/uint8arrays/esm/src/concat.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "concat",
    ()=>concat
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$adapter$2d$wagmi$2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$alloc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-adapter-wagmi/node_modules/uint8arrays/esm/src/alloc.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$adapter$2d$wagmi$2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$util$2f$as$2d$uint8array$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-adapter-wagmi/node_modules/uint8arrays/esm/src/util/as-uint8array.js [app-ssr] (ecmascript)");
;
;
function concat(arrays, length) {
    if (!length) {
        length = arrays.reduce((acc, curr)=>acc + curr.length, 0);
    }
    const output = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$adapter$2d$wagmi$2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$alloc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["allocUnsafe"])(length);
    let offset = 0;
    for (const arr of arrays){
        output.set(arr, offset);
        offset += arr.length;
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$adapter$2d$wagmi$2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$util$2f$as$2d$uint8array$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["asUint8Array"])(output);
}
}),
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-adapter-wagmi/node_modules/uint8arrays/esm/src/equals.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-adapter-wagmi/node_modules/uint8arrays/esm/src/util/bases.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$multiformats$2f$esm$2f$src$2f$basics$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/multiformats/esm/src/basics.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$adapter$2d$wagmi$2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$alloc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-adapter-wagmi/node_modules/uint8arrays/esm/src/alloc.js [app-ssr] (ecmascript)");
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
    const buf = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$adapter$2d$wagmi$2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$alloc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["allocUnsafe"])(str.length);
    for(let i = 0; i < str.length; i++){
        buf[i] = str.charCodeAt(i);
    }
    return buf;
});
const BASES = {
    utf8: string,
    'utf-8': string,
    hex: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$multiformats$2f$esm$2f$src$2f$basics$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["bases"].base16,
    latin1: ascii,
    ascii: ascii,
    binary: ascii,
    ...__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$multiformats$2f$esm$2f$src$2f$basics$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["bases"]
};
const __TURBOPACK__default__export__ = BASES;
}),
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-adapter-wagmi/node_modules/uint8arrays/esm/src/from-string.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "fromString",
    ()=>fromString
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$adapter$2d$wagmi$2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$util$2f$bases$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-adapter-wagmi/node_modules/uint8arrays/esm/src/util/bases.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$adapter$2d$wagmi$2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$util$2f$as$2d$uint8array$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-adapter-wagmi/node_modules/uint8arrays/esm/src/util/as-uint8array.js [app-ssr] (ecmascript)");
;
;
function fromString(string, encoding = 'utf8') {
    const base = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$adapter$2d$wagmi$2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$util$2f$bases$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"][encoding];
    if (!base) {
        throw new Error(`Unsupported encoding "${encoding}"`);
    }
    if ((encoding === 'utf8' || encoding === 'utf-8') && globalThis.Buffer != null && globalThis.Buffer.from != null) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$adapter$2d$wagmi$2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$util$2f$as$2d$uint8array$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["asUint8Array"])(globalThis.Buffer.from(string, 'utf-8'));
    }
    return base.decoder.decode(`${base.prefix}${string}`);
}
}),
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-adapter-wagmi/node_modules/uint8arrays/esm/src/to-string.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "toString",
    ()=>toString
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$adapter$2d$wagmi$2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$util$2f$bases$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-adapter-wagmi/node_modules/uint8arrays/esm/src/util/bases.js [app-ssr] (ecmascript)");
;
function toString(array, encoding = 'utf8') {
    const base = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$adapter$2d$wagmi$2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$util$2f$bases$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"][encoding];
    if (!base) {
        throw new Error(`Unsupported encoding "${encoding}"`);
    }
    if ((encoding === 'utf8' || encoding === 'utf-8') && globalThis.Buffer != null && globalThis.Buffer.from != null) {
        return globalThis.Buffer.from(array.buffer, array.byteOffset, array.byteLength).toString('utf8');
    }
    return base.encoder.encode(array).substring(1);
}
}),
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-adapter-wagmi/node_modules/uint8arrays/esm/src/xor.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "xor",
    ()=>xor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$adapter$2d$wagmi$2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$alloc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-adapter-wagmi/node_modules/uint8arrays/esm/src/alloc.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$adapter$2d$wagmi$2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$util$2f$as$2d$uint8array$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-adapter-wagmi/node_modules/uint8arrays/esm/src/util/as-uint8array.js [app-ssr] (ecmascript)");
;
;
function xor(a, b) {
    if (a.length !== b.length) {
        throw new Error('Inputs should have the same length');
    }
    const result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$adapter$2d$wagmi$2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$alloc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["allocUnsafe"])(a.length);
    for(let i = 0; i < a.length; i++){
        result[i] = a[i] ^ b[i];
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$adapter$2d$wagmi$2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$util$2f$as$2d$uint8array$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["asUint8Array"])(result);
}
}),
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-adapter-wagmi/node_modules/uint8arrays/esm/src/index.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$adapter$2d$wagmi$2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$compare$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-adapter-wagmi/node_modules/uint8arrays/esm/src/compare.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$adapter$2d$wagmi$2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$concat$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-adapter-wagmi/node_modules/uint8arrays/esm/src/concat.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$adapter$2d$wagmi$2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$equals$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-adapter-wagmi/node_modules/uint8arrays/esm/src/equals.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$adapter$2d$wagmi$2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$from$2d$string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-adapter-wagmi/node_modules/uint8arrays/esm/src/from-string.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$adapter$2d$wagmi$2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$to$2d$string$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-adapter-wagmi/node_modules/uint8arrays/esm/src/to-string.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$adapter$2d$wagmi$2f$node_modules$2f$uint8arrays$2f$esm$2f$src$2f$xor$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-adapter-wagmi/node_modules/uint8arrays/esm/src/xor.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
}),
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-utils/dist/esm/src/ErrorUtil.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ErrorUtil",
    ()=>ErrorUtil
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$SafeLocalStorage$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-common/dist/esm/src/utils/SafeLocalStorage.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/OptionsController.js [app-ssr] (ecmascript)");
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
            debugMessage: ()=>`The origin ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$SafeLocalStorage$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isSafe"])() ? window.origin : 'unknown'} is not in your allow list. Please update your allowed domains at https://dashboard.reown.com. [PID: ${__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$OptionsController$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OptionsController"].state.projectId}]`
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
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-utils/dist/esm/src/ConstantsUtil.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ConstantsUtil",
    ()=>ConstantsUtil
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-common/dist/esm/src/utils/ConstantsUtil.js [app-ssr] (ecmascript)");
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
    EIP155: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ConstantsUtil"].CHAIN.EVM,
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
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-utils/dist/esm/src/HelpersUtil.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HelpersUtil",
    ()=>HelpersUtil
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-common/dist/esm/src/utils/ConstantsUtil.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ChainController.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectorController$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ConnectorController.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$StorageUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-controllers/dist/esm/src/utils/StorageUtil.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$dist$2f$esm$2f$src$2f$ConstantsUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-utils/dist/esm/src/ConstantsUtil.js [app-ssr] (ecmascript)");
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
            caipTokens[`${__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$dist$2f$esm$2f$src$2f$ConstantsUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ConstantsUtil"].EIP155}:${id}`] = token;
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
        const activeChain = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ChainController"].state.activeChain;
        return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ConstantsUtil"].AUTH_CONNECTOR_SUPPORTED_CHAINS.find((chain)=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ConnectorController$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ConnectorController"].getConnectorId(chain) === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ConstantsUtil"].CONNECTOR_ID.AUTH && chain === activeChain);
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
            return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ConstantsUtil"].CHAIN.EVM;
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
        const authNamespaces = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ConstantsUtil"].AUTH_CONNECTOR_SUPPORTED_CHAINS;
        const otherAuthNamespaces = authNamespaces.filter((ns)=>ns !== activeNamespace);
        return otherAuthNamespaces;
    },
    /**
     * Gets the storage info for a connector
     * @param connectorId - The ID of the connector
     * @param namespace - The namespace of the connector
     * @returns
     */ getConnectorStorageInfo (connectorId, namespace) {
        const storageConnectionsByNamespace = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$StorageUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["StorageUtil"].getConnections();
        const storageConnections = storageConnectionsByNamespace[namespace] ?? [];
        return {
            hasDisconnected: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$StorageUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["StorageUtil"].isConnectorDisconnected(connectorId, namespace),
            hasConnected: storageConnections.some((c)=>HelpersUtil.isLowerCaseMatch(c.connectorId, connectorId))
        };
    }
}; //# sourceMappingURL=HelpersUtil.js.map
}),
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-utils/dist/esm/src/PresetsUtil.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PresetsUtil",
    ()=>PresetsUtil
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-common/dist/esm/src/utils/ConstantsUtil.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$dist$2f$esm$2f$src$2f$ConstantsUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-utils/dist/esm/src/ConstantsUtil.js [app-ssr] (ecmascript)");
;
;
const PresetsUtil = {
    ConnectorExplorerIds: {
        [__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ConstantsUtil"].CONNECTOR_ID.COINBASE]: 'fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa',
        [__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ConstantsUtil"].CONNECTOR_ID.COINBASE_SDK]: 'fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa',
        [__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ConstantsUtil"].CONNECTOR_ID.BASE_ACCOUNT]: 'fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa',
        [__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ConstantsUtil"].CONNECTOR_ID.SAFE]: '225affb176778569276e484e1b92637ad061b01e13a048b35a9d280c3b58970f',
        [__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ConstantsUtil"].CONNECTOR_ID.LEDGER]: '19177a98252e07ddfc9af2083ba8e07ef627cb6103467ffebb3f8f4205fd7927',
        [__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ConstantsUtil"].CONNECTOR_ID.OKX]: '971e689d0a5be527bac79629b4ee9b925e82208e5168b733496a09c0faed0709',
        /* Connector names */ [__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$dist$2f$esm$2f$src$2f$ConstantsUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ConstantsUtil"].METMASK_CONNECTOR_NAME]: 'c57ca95b47569778a828d19178114f4db188b89b763c899ba0be274e97267d96',
        [__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$dist$2f$esm$2f$src$2f$ConstantsUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ConstantsUtil"].TRUST_CONNECTOR_NAME]: '4622a2b2d6af1c9844944291e5e7351a6aa24cd7b23099efac1b2fd875da31a0',
        [__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$dist$2f$esm$2f$src$2f$ConstantsUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ConstantsUtil"].SOLFLARE_CONNECTOR_NAME]: '1ca0bdd4747578705b1939af023d120677c64fe6ca76add81fda36e350605e79',
        [__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$dist$2f$esm$2f$src$2f$ConstantsUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ConstantsUtil"].PHANTOM_CONNECTOR_NAME]: 'a797aa35c0fadbfc1a53e7f675162ed5226968b44a19ee3d24385c64d1d3c393',
        [__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$dist$2f$esm$2f$src$2f$ConstantsUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ConstantsUtil"].COIN98_CONNECTOR_NAME]: '2a3c89040ac3b723a1972a33a125b1db11e258a6975d3a61252cd64e6ea5ea01',
        [__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$dist$2f$esm$2f$src$2f$ConstantsUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ConstantsUtil"].MAGIC_EDEN_CONNECTOR_NAME]: '8b830a2b724a9c3fbab63af6f55ed29c9dfa8a55e732dc88c80a196a2ba136c6',
        [__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$dist$2f$esm$2f$src$2f$ConstantsUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ConstantsUtil"].BACKPACK_CONNECTOR_NAME]: '2bd8c14e035c2d48f184aaa168559e86b0e3433228d3c4075900a221785019b0',
        [__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$dist$2f$esm$2f$src$2f$ConstantsUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ConstantsUtil"].BITGET_CONNECTOR_NAME]: '38f5d18bd8522c244bdd70cb4a68e0e718865155811c043f052fb9f1c51de662',
        [__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$dist$2f$esm$2f$src$2f$ConstantsUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ConstantsUtil"].FRONTIER_CONNECTOR_NAME]: '85db431492aa2e8672e93f4ea7acf10c88b97b867b0d373107af63dc4880f041',
        [__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$dist$2f$esm$2f$src$2f$ConstantsUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ConstantsUtil"].XVERSE_CONNECTOR_NAME]: '2a87d74ae02e10bdd1f51f7ce6c4e1cc53cd5f2c0b6b5ad0d7b3007d2b13de7b',
        [__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$dist$2f$esm$2f$src$2f$ConstantsUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ConstantsUtil"].LEATHER_CONNECTOR_NAME]: '483afe1df1df63daf313109971ff3ef8356ddf1cc4e45877d205eee0b7893a13',
        [__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$dist$2f$esm$2f$src$2f$ConstantsUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ConstantsUtil"].OKX_CONNECTOR_NAME]: '971e689d0a5be527bac79629b4ee9b925e82208e5168b733496a09c0faed0709'
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
        [__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ConstantsUtil"].CONNECTOR_ID.COINBASE]: '0c2840c3-5b04-4c44-9661-fbd4b49e1800',
        [__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ConstantsUtil"].CONNECTOR_ID.COINBASE_SDK]: '0c2840c3-5b04-4c44-9661-fbd4b49e1800',
        [__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ConstantsUtil"].CONNECTOR_ID.BASE_ACCOUNT]: 'bba2c8be-7fd1-463e-42b1-796ecb0ad200',
        [__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ConstantsUtil"].CONNECTOR_ID.SAFE]: '461db637-8616-43ce-035a-d89b8a1d5800',
        [__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ConstantsUtil"].CONNECTOR_ID.LEDGER]: '54a1aa77-d202-4f8d-0fb2-5d2bb6db0300',
        [__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ConstantsUtil"].CONNECTOR_ID.WALLET_CONNECT]: 'ef1a1fcf-7fe8-4d69-bd6d-fda1345b4400',
        [__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ConstantsUtil"].CONNECTOR_ID.INJECTED]: '07ba87ed-43aa-4adf-4540-9e6a2b9cae00'
    },
    ConnectorNamesMap: {
        [__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ConstantsUtil"].CONNECTOR_ID.INJECTED]: 'Browser Wallet',
        [__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ConstantsUtil"].CONNECTOR_ID.WALLET_CONNECT]: 'WalletConnect',
        [__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ConstantsUtil"].CONNECTOR_ID.COINBASE]: 'Coinbase',
        [__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ConstantsUtil"].CONNECTOR_ID.COINBASE_SDK]: 'Coinbase',
        [__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ConstantsUtil"].CONNECTOR_ID.BASE_ACCOUNT]: 'Base Account',
        [__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ConstantsUtil"].CONNECTOR_ID.LEDGER]: 'Ledger',
        [__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ConstantsUtil"].CONNECTOR_ID.SAFE]: 'Safe'
    },
    ConnectorTypesMap: {
        [__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ConstantsUtil"].CONNECTOR_ID.INJECTED]: 'INJECTED',
        [__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ConstantsUtil"].CONNECTOR_ID.WALLET_CONNECT]: 'WALLET_CONNECT',
        [__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ConstantsUtil"].CONNECTOR_ID.EIP6963]: 'ANNOUNCED',
        [__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ConstantsUtil"].CONNECTOR_ID.AUTH]: 'AUTH',
        [__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$dist$2f$esm$2f$src$2f$ConstantsUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ConstantsUtil"].CONNECTOR_TYPE_AUTH]: 'AUTH'
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
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-utils/dist/esm/src/CaipNetworkUtil.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CaipNetworksUtil",
    ()=>CaipNetworksUtil,
    "getBlockchainApiRpcUrl",
    ()=>getBlockchainApiRpcUrl
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$transports$2f$fallback$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/viem/_esm/clients/transports/fallback.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$transports$2f$http$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/viem/_esm/clients/transports/http.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-common/dist/esm/src/utils/ConstantsUtil.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-controllers/dist/esm/src/controllers/ChainController.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$StorageUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-controllers/dist/esm/src/utils/StorageUtil.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$dist$2f$esm$2f$src$2f$PresetsUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-utils/dist/esm/src/PresetsUtil.js [app-ssr] (ecmascript)");
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
        return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ConstantsUtil"].CHAIN.EVM;
    },
    getCaipNetworkId (network) {
        if (this.isCaipNetwork(network)) {
            return network.caipNetworkId;
        }
        return `${__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ConstantsUtil"].CHAIN.EVM}:${network.id}`;
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
                imageId: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$dist$2f$esm$2f$src$2f$PresetsUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PresetsUtil"].NetworkImageIds[caipNetwork.id],
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
            transports.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$transports$2f$http$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["http"])(rpcUrl.url, rpcUrl.config));
        });
        // Add Reown RPC URL
        if (WC_HTTP_RPC_SUPPORTED_CHAINS.includes(caipNetwork.caipNetworkId)) {
            transports.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$transports$2f$http$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["http"])(getBlockchainApiRpcUrl(caipNetwork.caipNetworkId, projectId), {
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
            transports.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$transports$2f$http$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["http"])(rpcUrl));
        });
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$transports$2f$fallback$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fallback"])(transports);
    },
    extendWagmiTransports (caipNetwork, projectId, transport) {
        if (WC_HTTP_RPC_SUPPORTED_CHAINS.includes(caipNetwork.caipNetworkId)) {
            const reownRpcUrl = this.getDefaultRpcUrl(caipNetwork, caipNetwork.caipNetworkId, projectId);
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$transports$2f$fallback$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fallback"])([
                transport,
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$transports$2f$http$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["http"])(reownRpcUrl)
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
            name: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$common$2f$dist$2f$esm$2f$src$2f$utils$2f$ConstantsUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ConstantsUtil"].UNSUPPORTED_NETWORK_NAME,
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
        const caipNetworkIdFromStorage = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$StorageUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["StorageUtil"].getActiveCaipNetworkId();
        const caipNetworks = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ChainController"].getAllRequestedCaipNetworks();
        const availableNamespaces = Array.from(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$controllers$2f$ChainController$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ChainController"].state.chains?.keys() || []);
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
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-utils/dist/esm/src/LoggerUtil.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LoggerUtil",
    ()=>LoggerUtil
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$node_modules$2f40$walletconnect$2f$logger$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-utils/node_modules/@walletconnect/logger/dist/index.es.js [app-ssr] (ecmascript) <locals>");
;
const LoggerUtil = {
    createLogger (onError, level = 'error') {
        const loggerOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$node_modules$2f40$walletconnect$2f$logger$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getDefaultLoggerOptions"])({
            level
        });
        const { logger } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$utils$2f$node_modules$2f40$walletconnect$2f$logger$2f$dist$2f$index$2e$es$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["generatePlatformLogger"])({
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
"[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-utils/dist/esm/src/TokenUtil.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TokenUtil",
    ()=>TokenUtil
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$ExchangeUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/@reown/appkit-controllers/dist/esm/src/utils/ExchangeUtil.js [app-ssr] (ecmascript)");
;
const TokenUtil = {
    TOKEN_ADDRESSES_BY_SYMBOL: {
        USDC: {
            8453: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$ExchangeUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["baseUSDC"].asset,
            84532: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$reown$2f$appkit$2d$controllers$2f$dist$2f$esm$2f$src$2f$utils$2f$ExchangeUtil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["baseSepoliaUSDC"].asset
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
];

//# sourceMappingURL=89298_%40reown_b571f5b0._.js.map