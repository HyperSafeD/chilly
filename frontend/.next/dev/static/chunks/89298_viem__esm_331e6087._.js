(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/walletconnect/chilly/node_modules/viem/_esm/chains/definitions/anvil.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "anvil",
    ()=>anvil
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$chain$2f$defineChain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/viem/_esm/utils/chain/defineChain.js [app-client] (ecmascript)");
;
const anvil = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$chain$2f$defineChain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineChain"])({
    id: 31_337,
    name: 'Anvil',
    nativeCurrency: {
        decimals: 18,
        name: 'Ether',
        symbol: 'ETH'
    },
    rpcUrls: {
        default: {
            http: [
                'http://127.0.0.1:8545'
            ],
            webSocket: [
                'ws://127.0.0.1:8545'
            ]
        }
    }
}); //# sourceMappingURL=anvil.js.map
}),
"[project]/Desktop/walletconnect/chilly/node_modules/viem/_esm/chains/definitions/berachain.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "berachain",
    ()=>berachain
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$chain$2f$defineChain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/viem/_esm/utils/chain/defineChain.js [app-client] (ecmascript)");
;
const berachain = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$chain$2f$defineChain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineChain"])({
    id: 80094,
    name: 'Berachain',
    blockTime: 2_000,
    nativeCurrency: {
        decimals: 18,
        name: 'BERA Token',
        symbol: 'BERA'
    },
    contracts: {
        multicall3: {
            address: '0xcA11bde05977b3631167028862bE2a173976CA11',
            blockCreated: 0
        },
        ensRegistry: {
            address: '0x5b22280886a2f5e09a49bea7e320eab0e5320e28',
            blockCreated: 877007
        },
        ensUniversalResolver: {
            address: '0x4D41762915F83c76EcaF6776d9b08076aA32b492',
            blockCreated: 9310021
        }
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc.berachain.com'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Berascan',
            url: 'https://berascan.com'
        }
    },
    ensTlds: [
        '.bera'
    ],
    testnet: false
}); //# sourceMappingURL=berachain.js.map
}),
"[project]/Desktop/walletconnect/chilly/node_modules/viem/_esm/chains/definitions/berachainBepolia.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "berachainBepolia",
    ()=>berachainBepolia
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$chain$2f$defineChain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/viem/_esm/utils/chain/defineChain.js [app-client] (ecmascript)");
;
const berachainBepolia = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$chain$2f$defineChain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineChain"])({
    id: 80069,
    blockTime: 2_000,
    name: 'Berachain Bepolia',
    nativeCurrency: {
        decimals: 18,
        name: 'BERA Token',
        symbol: 'BERA'
    },
    contracts: {
        multicall3: {
            address: '0xcA11bde05977b3631167028862bE2a173976CA11',
            blockCreated: 0
        }
    },
    rpcUrls: {
        default: {
            http: [
                'https://bepolia.rpc.berachain.com'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Berascan',
            url: 'https://bepolia.beratrail.io'
        }
    },
    testnet: true
}); //# sourceMappingURL=berachainBepolia.js.map
}),
"[project]/Desktop/walletconnect/chilly/node_modules/viem/_esm/chains/definitions/bsc.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "bsc",
    ()=>bsc
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$chain$2f$defineChain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/viem/_esm/utils/chain/defineChain.js [app-client] (ecmascript)");
;
const bsc = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$chain$2f$defineChain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineChain"])({
    id: 56,
    name: 'BNB Smart Chain',
    blockTime: 750,
    nativeCurrency: {
        decimals: 18,
        name: 'BNB',
        symbol: 'BNB'
    },
    rpcUrls: {
        default: {
            http: [
                'https://56.rpc.thirdweb.com'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'BscScan',
            url: 'https://bscscan.com',
            apiUrl: 'https://api.bscscan.com/api'
        }
    },
    contracts: {
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 15921452
        }
    }
}); //# sourceMappingURL=bsc.js.map
}),
"[project]/Desktop/walletconnect/chilly/node_modules/viem/_esm/celo/fees.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "fees",
    ()=>fees
]);
const fees = {
    /*
     * Estimates the fees per gas for a transaction.
  
     * If the transaction is to be paid in a token (feeCurrency is present) then the fees
     * are estimated in the value of the token. Otherwise falls back to the default
     * estimation by returning null.
     *
     * @param params fee estimation function parameters
     */ estimateFeesPerGas: async (params)=>{
        if (!params.request?.feeCurrency) return null;
        const [gasPrice, maxPriorityFeePerGas] = await Promise.all([
            estimateFeePerGasInFeeCurrency(params.client, params.request.feeCurrency),
            estimateMaxPriorityFeePerGasInFeeCurrency(params.client, params.request.feeCurrency)
        ]);
        // eth_gasPrice for cel2 returns baseFeePerGas + maxPriorityFeePerGas
        const maxFeePerGas = params.multiply(gasPrice - maxPriorityFeePerGas) + maxPriorityFeePerGas;
        return {
            maxFeePerGas,
            maxPriorityFeePerGas
        };
    }
};
/*
 * Estimate the fee per gas in the value of the fee token

 *
 * @param client - Client to use
 * @param feeCurrency -  Address of a whitelisted fee token
 * @returns The fee per gas in wei in the value of the  fee token
 *
 */ async function estimateFeePerGasInFeeCurrency(client, feeCurrency) {
    const fee = await client.request({
        method: 'eth_gasPrice',
        params: [
            feeCurrency
        ]
    });
    return BigInt(fee);
}
/*
 * Estimate the max priority fee per gas in the value of the fee token

 *
 * @param client - Client to use
 * @param feeCurrency -  Address of a whitelisted fee token
 * @returns The fee per gas in wei in the value of the  fee token
 *
 */ async function estimateMaxPriorityFeePerGasInFeeCurrency(client, feeCurrency) {
    const feesPerGas = await client.request({
        method: 'eth_maxPriorityFeePerGas',
        params: [
            feeCurrency
        ]
    });
    return BigInt(feesPerGas);
} //# sourceMappingURL=fees.js.map
}),
"[project]/Desktop/walletconnect/chilly/node_modules/viem/_esm/celo/utils.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isCIP64",
    ()=>isCIP64,
    "isEIP1559",
    ()=>isEIP1559,
    "isEmpty",
    ()=>isEmpty,
    "isPresent",
    ()=>isPresent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$trim$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/viem/_esm/utils/data/trim.js [app-client] (ecmascript)");
;
function isEmpty(value) {
    return value === 0 || value === 0n || value === undefined || value === null || value === '0' || value === '' || typeof value === 'string' && ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$trim$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trim"])(value).toLowerCase() === '0x' || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$trim$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trim"])(value).toLowerCase() === '0x00');
}
function isPresent(value) {
    return !isEmpty(value);
}
function isEIP1559(transaction) {
    return typeof transaction.maxFeePerGas !== 'undefined' && typeof transaction.maxPriorityFeePerGas !== 'undefined';
}
function isCIP64(transaction) {
    /*
     * Enable end user to force the tx to be considered as a CIP-64.
     *
     * The preliminary type will be determined as "eip1559" by src/utils/transaction/getTransactionType.ts
     * and so we need the logic below to check for the specific value instead of checking if just any
     * transaction type is provided. If that's anything else than "cip64" then we need to reevaluate the
     * type based on the transaction fields.
     *
     * Modify with caution and according to https://github.com/celo-org/celo-proposals/blob/master/CIPs/cip-0064.md
     */ if (transaction.type === 'cip64') {
        return true;
    }
    return isEIP1559(transaction) && isPresent(transaction.feeCurrency);
} //# sourceMappingURL=utils.js.map
}),
"[project]/Desktop/walletconnect/chilly/node_modules/viem/_esm/celo/formatters.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "formatters",
    ()=>formatters
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/viem/_esm/utils/encoding/fromHex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$formatters$2f$block$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/viem/_esm/utils/formatters/block.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$formatters$2f$transaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/viem/_esm/utils/formatters/transaction.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$formatters$2f$transactionRequest$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/viem/_esm/utils/formatters/transactionRequest.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$celo$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/viem/_esm/celo/utils.js [app-client] (ecmascript)");
;
;
;
;
;
const formatters = {
    block: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$formatters$2f$block$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineBlock"])({
        format (args) {
            const transactions = args.transactions?.map((transaction)=>{
                if (typeof transaction === 'string') return transaction;
                const formatted = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$formatters$2f$transaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatTransaction"])(transaction);
                return {
                    ...formatted,
                    ...transaction.gatewayFee ? {
                        gatewayFee: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexToBigInt"])(transaction.gatewayFee),
                        gatewayFeeRecipient: transaction.gatewayFeeRecipient
                    } : {},
                    feeCurrency: transaction.feeCurrency
                };
            });
            return {
                transactions
            };
        }
    }),
    transaction: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$formatters$2f$transaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineTransaction"])({
        format (args) {
            if (args.type === '0x7e') return {
                isSystemTx: args.isSystemTx,
                mint: args.mint ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexToBigInt"])(args.mint) : undefined,
                sourceHash: args.sourceHash,
                type: 'deposit'
            };
            const transaction = {
                feeCurrency: args.feeCurrency
            };
            if (args.type === '0x7b') transaction.type = 'cip64';
            else {
                if (args.type === '0x7c') transaction.type = 'cip42';
                transaction.gatewayFee = args.gatewayFee ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexToBigInt"])(args.gatewayFee) : null;
                transaction.gatewayFeeRecipient = args.gatewayFeeRecipient;
            }
            return transaction;
        }
    }),
    transactionRequest: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$formatters$2f$transactionRequest$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineTransactionRequest"])({
        format (args) {
            const request = {};
            if (args.feeCurrency) request.feeCurrency = args.feeCurrency;
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$celo$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isCIP64"])(args)) request.type = '0x7b';
            return request;
        }
    })
}; //# sourceMappingURL=formatters.js.map
}),
"[project]/Desktop/walletconnect/chilly/node_modules/viem/_esm/celo/serializers.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "assertTransactionCIP42",
    ()=>assertTransactionCIP42,
    "assertTransactionCIP64",
    ()=>assertTransactionCIP64,
    "serializeTransaction",
    ()=>serializeTransaction,
    "serializers",
    ()=>serializers
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$constants$2f$number$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/viem/_esm/constants/number.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/viem/_esm/errors/address.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/viem/_esm/errors/base.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$chain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/viem/_esm/errors/chain.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$node$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/viem/_esm/errors/node.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$op$2d$stack$2f$serializers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/viem/_esm/op-stack/serializers.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$isAddress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/viem/_esm/utils/address/isAddress.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$concat$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/viem/_esm/utils/data/concat.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/viem/_esm/utils/encoding/toHex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toRlp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/viem/_esm/utils/encoding/toRlp.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$transaction$2f$serializeAccessList$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/viem/_esm/utils/transaction/serializeAccessList.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$transaction$2f$serializeTransaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/viem/_esm/utils/transaction/serializeTransaction.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$celo$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/viem/_esm/celo/utils.js [app-client] (ecmascript)");
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
function serializeTransaction(transaction, signature) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$celo$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isCIP64"])(transaction)) return serializeTransactionCIP64(transaction, signature);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$op$2d$stack$2f$serializers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serializeTransaction"])(transaction, signature);
}
const serializers = {
    transaction: serializeTransaction
};
function serializeTransactionCIP64(transaction, signature) {
    assertTransactionCIP64(transaction);
    const { chainId, gas, nonce, to, value, maxFeePerGas, maxPriorityFeePerGas, accessList, feeCurrency, data } = transaction;
    const serializedTransaction = [
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toHex"])(chainId),
        nonce ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toHex"])(nonce) : '0x',
        maxPriorityFeePerGas ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toHex"])(maxPriorityFeePerGas) : '0x',
        maxFeePerGas ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toHex"])(maxFeePerGas) : '0x',
        gas ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toHex"])(gas) : '0x',
        to ?? '0x',
        value ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toHex"])(value) : '0x',
        data ?? '0x',
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$transaction$2f$serializeAccessList$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serializeAccessList"])(accessList),
        feeCurrency,
        ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$transaction$2f$serializeTransaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toYParitySignatureArray"])(transaction, signature)
    ];
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$concat$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["concatHex"])([
        '0x7b',
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toRlp$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toRlp"])(serializedTransaction)
    ]);
}
// maxFeePerGas must be less than maxUint256
const MAX_MAX_FEE_PER_GAS = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$constants$2f$number$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["maxUint256"];
function assertTransactionCIP42(transaction) {
    const { chainId, maxPriorityFeePerGas, gasPrice, maxFeePerGas, to, feeCurrency, gatewayFee, gatewayFeeRecipient } = transaction;
    if (chainId <= 0) throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$chain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvalidChainIdError"]({
        chainId
    });
    if (to && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$isAddress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isAddress"])(to)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvalidAddressError"]({
        address: to
    });
    if (gasPrice) throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"]('`gasPrice` is not a valid CIP-42 Transaction attribute.');
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$celo$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPresent"])(maxFeePerGas) && maxFeePerGas > MAX_MAX_FEE_PER_GAS) throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$node$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FeeCapTooHighError"]({
        maxFeePerGas
    });
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$celo$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPresent"])(maxPriorityFeePerGas) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$celo$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPresent"])(maxFeePerGas) && maxPriorityFeePerGas > maxFeePerGas) throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$node$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TipAboveFeeCapError"]({
        maxFeePerGas,
        maxPriorityFeePerGas
    });
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$celo$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPresent"])(gatewayFee) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$celo$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isEmpty"])(gatewayFeeRecipient) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$celo$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPresent"])(gatewayFeeRecipient) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$celo$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isEmpty"])(gatewayFee)) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"]('`gatewayFee` and `gatewayFeeRecipient` must be provided together.');
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$celo$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPresent"])(feeCurrency) && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$isAddress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isAddress"])(feeCurrency)) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"]('`feeCurrency` MUST be a token address for CIP-42 transactions.');
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$celo$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPresent"])(gatewayFeeRecipient) && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$isAddress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isAddress"])(gatewayFeeRecipient)) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvalidAddressError"](gatewayFeeRecipient);
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$celo$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isEmpty"])(feeCurrency) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$celo$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isEmpty"])(gatewayFeeRecipient)) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"]('Either `feeCurrency` or `gatewayFeeRecipient` must be provided for CIP-42 transactions.');
    }
}
function assertTransactionCIP64(transaction) {
    const { chainId, maxPriorityFeePerGas, gasPrice, maxFeePerGas, to, feeCurrency } = transaction;
    if (chainId <= 0) throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$chain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvalidChainIdError"]({
        chainId
    });
    if (to && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$isAddress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isAddress"])(to)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvalidAddressError"]({
        address: to
    });
    if (gasPrice) throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"]('`gasPrice` is not a valid CIP-64 Transaction attribute.');
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$celo$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPresent"])(maxFeePerGas) && maxFeePerGas > MAX_MAX_FEE_PER_GAS) throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$node$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FeeCapTooHighError"]({
        maxFeePerGas
    });
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$celo$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPresent"])(maxPriorityFeePerGas) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$celo$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPresent"])(maxFeePerGas) && maxPriorityFeePerGas > maxFeePerGas) throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$node$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TipAboveFeeCapError"]({
        maxFeePerGas,
        maxPriorityFeePerGas
    });
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$celo$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPresent"])(feeCurrency) && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$isAddress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isAddress"])(feeCurrency)) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"]('`feeCurrency` MUST be a token address for CIP-64 transactions.');
    }
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$celo$2f$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isEmpty"])(feeCurrency)) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"]('`feeCurrency` must be provided for CIP-64 transactions.');
    }
} //# sourceMappingURL=serializers.js.map
}),
"[project]/Desktop/walletconnect/chilly/node_modules/viem/_esm/celo/chainConfig.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "chainConfig",
    ()=>chainConfig
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$op$2d$stack$2f$contracts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/viem/_esm/op-stack/contracts.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$celo$2f$fees$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/viem/_esm/celo/fees.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$celo$2f$formatters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/viem/_esm/celo/formatters.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$celo$2f$serializers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/viem/_esm/celo/serializers.js [app-client] (ecmascript)");
;
;
;
;
const chainConfig = {
    blockTime: 1_000,
    contracts: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$op$2d$stack$2f$contracts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["contracts"],
    formatters: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$celo$2f$formatters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatters"],
    serializers: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$celo$2f$serializers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serializers"],
    fees: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$celo$2f$fees$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fees"]
}; //# sourceMappingURL=chainConfig.js.map
}),
"[project]/Desktop/walletconnect/chilly/node_modules/viem/_esm/chains/definitions/celo.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "celo",
    ()=>celo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$celo$2f$chainConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/viem/_esm/celo/chainConfig.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$chain$2f$defineChain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/viem/_esm/utils/chain/defineChain.js [app-client] (ecmascript)");
;
;
const celo = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$chain$2f$defineChain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineChain"])({
    ...__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$celo$2f$chainConfig$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["chainConfig"],
    id: 42_220,
    name: 'Celo',
    nativeCurrency: {
        decimals: 18,
        name: 'CELO',
        symbol: 'CELO'
    },
    rpcUrls: {
        default: {
            http: [
                'https://forno.celo.org'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Celo Explorer',
            url: 'https://celoscan.io',
            apiUrl: 'https://api.celoscan.io/api'
        }
    },
    contracts: {
        multicall3: {
            address: '0xcA11bde05977b3631167028862bE2a173976CA11',
            blockCreated: 13112599
        }
    },
    testnet: false
}); //# sourceMappingURL=celo.js.map
}),
"[project]/Desktop/walletconnect/chilly/node_modules/viem/_esm/chains/definitions/gnosis.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "gnosis",
    ()=>gnosis
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$chain$2f$defineChain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/viem/_esm/utils/chain/defineChain.js [app-client] (ecmascript)");
;
const gnosis = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$chain$2f$defineChain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineChain"])({
    id: 100,
    name: 'Gnosis',
    nativeCurrency: {
        decimals: 18,
        name: 'xDAI',
        symbol: 'XDAI'
    },
    blockTime: 5_000,
    rpcUrls: {
        default: {
            http: [
                'https://rpc.gnosischain.com'
            ],
            webSocket: [
                'wss://rpc.gnosischain.com/wss'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Gnosisscan',
            url: 'https://gnosisscan.io',
            apiUrl: 'https://api.gnosisscan.io/api'
        }
    },
    contracts: {
        multicall3: {
            address: '0xca11bde05977b3631167028862be2a173976ca11',
            blockCreated: 21022491
        }
    }
}); //# sourceMappingURL=gnosis.js.map
}),
"[project]/Desktop/walletconnect/chilly/node_modules/viem/_esm/chains/definitions/hoodi.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "hoodi",
    ()=>hoodi
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$chain$2f$defineChain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/viem/_esm/utils/chain/defineChain.js [app-client] (ecmascript)");
;
const hoodi = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$chain$2f$defineChain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineChain"])({
    id: 560048,
    name: 'Hoodi',
    nativeCurrency: {
        name: 'Hoodi Ether',
        symbol: 'ETH',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc.hoodi.ethpandaops.io'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'Etherscan',
            url: 'https://hoodi.etherscan.io'
        }
    },
    contracts: {
        multicall3: {
            address: '0xcA11bde05977b3631167028862bE2a173976CA11',
            blockCreated: 2589
        }
    },
    testnet: true
}); //# sourceMappingURL=hoodi.js.map
}),
"[project]/Desktop/walletconnect/chilly/node_modules/viem/_esm/chains/definitions/katana.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "katana",
    ()=>katana
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$chain$2f$defineChain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/viem/_esm/utils/chain/defineChain.js [app-client] (ecmascript)");
;
const katana = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$chain$2f$defineChain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defineChain"])({
    id: 747474,
    name: 'Katana',
    network: 'katana',
    nativeCurrency: {
        name: 'Ether',
        symbol: 'ETH',
        decimals: 18
    },
    rpcUrls: {
        default: {
            http: [
                'https://rpc.katana.network'
            ]
        }
    },
    blockExplorers: {
        default: {
            name: 'katana explorer',
            url: 'https://explorer.katanarpc.com'
        }
    },
    testnet: false
}); //# sourceMappingURL=katana.js.map
}),
"[project]/Desktop/walletconnect/chilly/node_modules/viem/_esm/constants/strings.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "presignMessagePrefix",
    ()=>presignMessagePrefix
]);
const presignMessagePrefix = '\x19Ethereum Signed Message:\n'; //# sourceMappingURL=strings.js.map
}),
"[project]/Desktop/walletconnect/chilly/node_modules/viem/_esm/utils/signature/toPrefixedMessage.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "toPrefixedMessage",
    ()=>toPrefixedMessage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$constants$2f$strings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/viem/_esm/constants/strings.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$concat$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/viem/_esm/utils/data/concat.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$size$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/viem/_esm/utils/data/size.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/viem/_esm/utils/encoding/toHex.js [app-client] (ecmascript)");
;
;
;
;
function toPrefixedMessage(message_) {
    const message = (()=>{
        if (typeof message_ === 'string') return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stringToHex"])(message_);
        if (typeof message_.raw === 'string') return message_.raw;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bytesToHex"])(message_.raw);
    })();
    const prefix = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stringToHex"])(`${__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$constants$2f$strings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["presignMessagePrefix"]}${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$size$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["size"])(message)}`);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$concat$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["concat"])([
        prefix,
        message
    ]);
} //# sourceMappingURL=toPrefixedMessage.js.map
}),
"[project]/Desktop/walletconnect/chilly/node_modules/viem/_esm/utils/signature/hashMessage.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "hashMessage",
    ()=>hashMessage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$hash$2f$keccak256$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/viem/_esm/utils/hash/keccak256.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$signature$2f$toPrefixedMessage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/viem/_esm/utils/signature/toPrefixedMessage.js [app-client] (ecmascript)");
;
;
function hashMessage(message, to_) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$hash$2f$keccak256$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keccak256"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$signature$2f$toPrefixedMessage$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toPrefixedMessage"])(message), to_);
} //# sourceMappingURL=hashMessage.js.map
}),
"[project]/Desktop/walletconnect/chilly/node_modules/viem/_esm/errors/typedData.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "InvalidDomainError",
    ()=>InvalidDomainError,
    "InvalidPrimaryTypeError",
    ()=>InvalidPrimaryTypeError,
    "InvalidStructTypeError",
    ()=>InvalidStructTypeError
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$stringify$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/viem/_esm/utils/stringify.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/viem/_esm/errors/base.js [app-client] (ecmascript)");
;
;
class InvalidDomainError extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ domain }){
        super(`Invalid domain "${(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$stringify$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stringify"])(domain)}".`, {
            metaMessages: [
                'Must be a valid EIP-712 domain.'
            ]
        });
    }
}
class InvalidPrimaryTypeError extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ primaryType, types }){
        super(`Invalid primary type \`${primaryType}\` must be one of \`${JSON.stringify(Object.keys(types))}\`.`, {
            docsPath: '/api/glossary/Errors#typeddatainvalidprimarytypeerror',
            metaMessages: [
                'Check that the primary type is a key in `types`.'
            ]
        });
    }
}
class InvalidStructTypeError extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ type }){
        super(`Struct type "${type}" is invalid.`, {
            metaMessages: [
                'Struct type must not be a Solidity type.'
            ],
            name: 'InvalidStructTypeError'
        });
    }
} //# sourceMappingURL=typedData.js.map
}),
"[project]/Desktop/walletconnect/chilly/node_modules/viem/_esm/utils/typedData.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "domainSeparator",
    ()=>domainSeparator,
    "getTypesForEIP712Domain",
    ()=>getTypesForEIP712Domain,
    "serializeTypedData",
    ()=>serializeTypedData,
    "validateTypedData",
    ()=>validateTypedData
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$abi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/viem/_esm/errors/abi.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/viem/_esm/errors/address.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$typedData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/viem/_esm/errors/typedData.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$isAddress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/viem/_esm/utils/address/isAddress.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$size$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/viem/_esm/utils/data/size.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/viem/_esm/utils/encoding/toHex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$regex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/viem/_esm/utils/regex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$signature$2f$hashTypedData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/viem/_esm/utils/signature/hashTypedData.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$stringify$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/viem/_esm/utils/stringify.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
function serializeTypedData(parameters) {
    const { domain: domain_, message: message_, primaryType, types } = parameters;
    const normalizeData = (struct, data_)=>{
        const data = {
            ...data_
        };
        for (const param of struct){
            const { name, type } = param;
            if (type === 'address') data[name] = data[name].toLowerCase();
        }
        return data;
    };
    const domain = (()=>{
        if (!types.EIP712Domain) return {};
        if (!domain_) return {};
        return normalizeData(types.EIP712Domain, domain_);
    })();
    const message = (()=>{
        if (primaryType === 'EIP712Domain') return undefined;
        return normalizeData(types[primaryType], message_);
    })();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$stringify$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stringify"])({
        domain,
        message,
        primaryType,
        types
    });
}
function validateTypedData(parameters) {
    const { domain, message, primaryType, types } = parameters;
    const validateData = (struct, data)=>{
        for (const param of struct){
            const { name, type } = param;
            const value = data[name];
            const integerMatch = type.match(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$regex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["integerRegex"]);
            if (integerMatch && (typeof value === 'number' || typeof value === 'bigint')) {
                const [_type, base, size_] = integerMatch;
                // If number cannot be cast to a sized hex value, it is out of range
                // and will throw.
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["numberToHex"])(value, {
                    signed: base === 'int',
                    size: Number.parseInt(size_, 10) / 8
                });
            }
            if (type === 'address' && typeof value === 'string' && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$isAddress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isAddress"])(value)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvalidAddressError"]({
                address: value
            });
            const bytesMatch = type.match(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$regex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bytesRegex"]);
            if (bytesMatch) {
                const [_type, size_] = bytesMatch;
                if (size_ && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$size$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["size"])(value) !== Number.parseInt(size_, 10)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$abi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BytesSizeMismatchError"]({
                    expectedSize: Number.parseInt(size_, 10),
                    givenSize: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$size$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["size"])(value)
                });
            }
            const struct = types[type];
            if (struct) {
                validateReference(type);
                validateData(struct, value);
            }
        }
    };
    // Validate domain types.
    if (types.EIP712Domain && domain) {
        if (typeof domain !== 'object') throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$typedData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvalidDomainError"]({
            domain
        });
        validateData(types.EIP712Domain, domain);
    }
    // Validate message types.
    if (primaryType !== 'EIP712Domain') {
        if (types[primaryType]) validateData(types[primaryType], message);
        else throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$typedData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvalidPrimaryTypeError"]({
            primaryType,
            types
        });
    }
}
function getTypesForEIP712Domain({ domain }) {
    return [
        typeof domain?.name === 'string' && {
            name: 'name',
            type: 'string'
        },
        domain?.version && {
            name: 'version',
            type: 'string'
        },
        (typeof domain?.chainId === 'number' || typeof domain?.chainId === 'bigint') && {
            name: 'chainId',
            type: 'uint256'
        },
        domain?.verifyingContract && {
            name: 'verifyingContract',
            type: 'address'
        },
        domain?.salt && {
            name: 'salt',
            type: 'bytes32'
        }
    ].filter(Boolean);
}
function domainSeparator({ domain }) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$signature$2f$hashTypedData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hashDomain"])({
        domain,
        types: {
            EIP712Domain: getTypesForEIP712Domain({
                domain
            })
        }
    });
}
/** @internal */ function validateReference(type) {
    // Struct type must not be a Solidity type.
    if (type === 'address' || type === 'bool' || type === 'string' || type.startsWith('bytes') || type.startsWith('uint') || type.startsWith('int')) throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$typedData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvalidStructTypeError"]({
        type
    });
} //# sourceMappingURL=typedData.js.map
}),
"[project]/Desktop/walletconnect/chilly/node_modules/viem/_esm/utils/signature/hashTypedData.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Implementation forked and adapted from https://github.com/MetaMask/eth-sig-util/blob/main/src/sign-typed-data.ts
__turbopack_context__.s([
    "encodeType",
    ()=>encodeType,
    "hashDomain",
    ()=>hashDomain,
    "hashStruct",
    ()=>hashStruct,
    "hashTypedData",
    ()=>hashTypedData
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$encodeAbiParameters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/viem/_esm/utils/abi/encodeAbiParameters.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$concat$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/viem/_esm/utils/data/concat.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/viem/_esm/utils/encoding/toHex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$hash$2f$keccak256$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/viem/_esm/utils/hash/keccak256.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$typedData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/viem/_esm/utils/typedData.js [app-client] (ecmascript)");
;
;
;
;
;
function hashTypedData(parameters) {
    const { domain = {}, message, primaryType } = parameters;
    const types = {
        EIP712Domain: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$typedData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTypesForEIP712Domain"])({
            domain
        }),
        ...parameters.types
    };
    // Need to do a runtime validation check on addresses, byte ranges, integer ranges, etc
    // as we can't statically check this with TypeScript.
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$typedData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["validateTypedData"])({
        domain,
        message,
        primaryType,
        types
    });
    const parts = [
        '0x1901'
    ];
    if (domain) parts.push(hashDomain({
        domain,
        types: types
    }));
    if (primaryType !== 'EIP712Domain') parts.push(hashStruct({
        data: message,
        primaryType,
        types: types
    }));
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$hash$2f$keccak256$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keccak256"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$concat$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["concat"])(parts));
}
function hashDomain({ domain, types }) {
    return hashStruct({
        data: domain,
        primaryType: 'EIP712Domain',
        types
    });
}
function hashStruct({ data, primaryType, types }) {
    const encoded = encodeData({
        data,
        primaryType,
        types
    });
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$hash$2f$keccak256$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keccak256"])(encoded);
}
function encodeData({ data, primaryType, types }) {
    const encodedTypes = [
        {
            type: 'bytes32'
        }
    ];
    const encodedValues = [
        hashType({
            primaryType,
            types
        })
    ];
    for (const field of types[primaryType]){
        const [type, value] = encodeField({
            types,
            name: field.name,
            type: field.type,
            value: data[field.name]
        });
        encodedTypes.push(type);
        encodedValues.push(value);
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$encodeAbiParameters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["encodeAbiParameters"])(encodedTypes, encodedValues);
}
function hashType({ primaryType, types }) {
    const encodedHashType = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toHex"])(encodeType({
        primaryType,
        types
    }));
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$hash$2f$keccak256$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keccak256"])(encodedHashType);
}
function encodeType({ primaryType, types }) {
    let result = '';
    const unsortedDeps = findTypeDependencies({
        primaryType,
        types
    });
    unsortedDeps.delete(primaryType);
    const deps = [
        primaryType,
        ...Array.from(unsortedDeps).sort()
    ];
    for (const type of deps){
        result += `${type}(${types[type].map(({ name, type: t })=>`${t} ${name}`).join(',')})`;
    }
    return result;
}
function findTypeDependencies({ primaryType: primaryType_, types }, results = new Set()) {
    const match = primaryType_.match(/^\w*/u);
    const primaryType = match?.[0];
    if (results.has(primaryType) || types[primaryType] === undefined) {
        return results;
    }
    results.add(primaryType);
    for (const field of types[primaryType]){
        findTypeDependencies({
            primaryType: field.type,
            types
        }, results);
    }
    return results;
}
function encodeField({ types, name, type, value }) {
    if (types[type] !== undefined) {
        return [
            {
                type: 'bytes32'
            },
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$hash$2f$keccak256$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keccak256"])(encodeData({
                data: value,
                primaryType: type,
                types
            }))
        ];
    }
    if (type === 'bytes') {
        const prepend = value.length % 2 ? '0' : '';
        value = `0x${prepend + value.slice(2)}`;
        return [
            {
                type: 'bytes32'
            },
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$hash$2f$keccak256$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keccak256"])(value)
        ];
    }
    if (type === 'string') return [
        {
            type: 'bytes32'
        },
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$hash$2f$keccak256$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keccak256"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toHex"])(value))
    ];
    if (type.lastIndexOf(']') === type.length - 1) {
        const parsedType = type.slice(0, type.lastIndexOf('['));
        const typeValuePairs = value.map((item)=>encodeField({
                name,
                type: parsedType,
                types,
                value: item
            }));
        return [
            {
                type: 'bytes32'
            },
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$hash$2f$keccak256$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["keccak256"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$encodeAbiParameters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["encodeAbiParameters"])(typeValuePairs.map(([t])=>t), typeValuePairs.map(([, v])=>v)))
        ];
    }
    return [
        {
            type
        },
        value
    ];
} //# sourceMappingURL=hashTypedData.js.map
}),
"[project]/Desktop/walletconnect/chilly/node_modules/viem/_esm/accounts/toAccount.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// TODO(v3): Rename to `toLocalAccount` + add `source` property to define source (privateKey, mnemonic, hdKey, etc).
__turbopack_context__.s([
    "toAccount",
    ()=>toAccount
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/viem/_esm/errors/address.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$isAddress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/viem/_esm/utils/address/isAddress.js [app-client] (ecmascript)");
;
;
function toAccount(source) {
    if (typeof source === 'string') {
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$isAddress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isAddress"])(source, {
            strict: false
        })) throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvalidAddressError"]({
            address: source
        });
        return {
            address: source,
            type: 'json-rpc'
        };
    }
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$isAddress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isAddress"])(source.address, {
        strict: false
    })) throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$address$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InvalidAddressError"]({
        address: source.address
    });
    return {
        address: source.address,
        nonceManager: source.nonceManager,
        sign: source.sign,
        signAuthorization: source.signAuthorization,
        signMessage: source.signMessage,
        signTransaction: source.signTransaction,
        signTypedData: source.signTypedData,
        source: 'custom',
        type: 'local'
    };
} //# sourceMappingURL=toAccount.js.map
}),
"[project]/Desktop/walletconnect/chilly/node_modules/viem/_esm/constants/address.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "entryPoint06Address",
    ()=>entryPoint06Address,
    "entryPoint07Address",
    ()=>entryPoint07Address,
    "entryPoint08Address",
    ()=>entryPoint08Address,
    "ethAddress",
    ()=>ethAddress,
    "zeroAddress",
    ()=>zeroAddress
]);
const entryPoint06Address = '0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789';
const entryPoint07Address = '0x0000000071727De22E5E9d8BAf0edAc6f37da032';
const entryPoint08Address = '0x4337084D9E255Ff0702461CF8895CE9E3b5Ff108';
const ethAddress = '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee';
const zeroAddress = '0x0000000000000000000000000000000000000000'; //# sourceMappingURL=address.js.map
}),
"[project]/Desktop/walletconnect/chilly/node_modules/viem/_esm/utils/authorization/verifyAuthorization.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "verifyAuthorization",
    ()=>verifyAuthorization
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$getAddress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/viem/_esm/utils/address/getAddress.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$isAddressEqual$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/viem/_esm/utils/address/isAddressEqual.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$authorization$2f$recoverAuthorizationAddress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/viem/_esm/utils/authorization/recoverAuthorizationAddress.js [app-client] (ecmascript)");
;
;
;
async function verifyAuthorization({ address, authorization, signature }) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$isAddressEqual$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isAddressEqual"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$getAddress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAddress"])(address), await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$authorization$2f$recoverAuthorizationAddress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["recoverAuthorizationAddress"])({
        authorization,
        signature
    }));
} //# sourceMappingURL=verifyAuthorization.js.map
}),
"[project]/Desktop/walletconnect/chilly/node_modules/viem/_esm/utils/signature/serializeSignature.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "serializeSignature",
    ()=>serializeSignature
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$secp256k1$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/@noble/curves/esm/secp256k1.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/viem/_esm/utils/encoding/fromHex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toBytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/viem/_esm/utils/encoding/toBytes.js [app-client] (ecmascript)");
;
;
;
function serializeSignature({ r, s, to = 'hex', v, yParity }) {
    const yParity_ = (()=>{
        if (yParity === 0 || yParity === 1) return yParity;
        if (v && (v === 27n || v === 28n || v >= 35n)) return v % 2n === 0n ? 1 : 0;
        throw new Error('Invalid `v` or `yParity` value');
    })();
    const signature = `0x${new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f40$noble$2f$curves$2f$esm$2f$secp256k1$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["secp256k1"].Signature((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexToBigInt"])(r), (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexToBigInt"])(s)).toCompactHex()}${yParity_ === 0 ? '1b' : '1c'}`;
    if (to === 'hex') return signature;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toBytes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexToBytes"])(signature);
} //# sourceMappingURL=serializeSignature.js.map
}),
"[project]/Desktop/walletconnect/chilly/node_modules/viem/_esm/actions/public/getCode.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getCode",
    ()=>getCode
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/viem/_esm/utils/encoding/toHex.js [app-client] (ecmascript)");
;
async function getCode(client, { address, blockNumber, blockTag = 'latest' }) {
    const blockNumberHex = blockNumber !== undefined ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["numberToHex"])(blockNumber) : undefined;
    const hex = await client.request({
        method: 'eth_getCode',
        params: [
            address,
            blockNumberHex || blockTag
        ]
    }, {
        dedupe: Boolean(blockNumberHex)
    });
    if (hex === '0x') return undefined;
    return hex;
} //# sourceMappingURL=getCode.js.map
}),
"[project]/Desktop/walletconnect/chilly/node_modules/viem/_esm/actions/public/verifyHash.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "verifyErc1271",
    ()=>verifyErc1271,
    "verifyErc8010",
    ()=>verifyErc8010,
    "verifyHash",
    ()=>verifyHash
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$ox$2f$_esm$2f$erc6492$2f$SignatureErc6492$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__SignatureErc6492$3e$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/ox/_esm/erc6492/SignatureErc6492.js [app-client] (ecmascript) <export * as SignatureErc6492>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$ox$2f$_esm$2f$erc8010$2f$SignatureErc8010$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__SignatureErc8010$3e$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/ox/_esm/erc8010/SignatureErc8010.js [app-client] (ecmascript) <export * as SignatureErc8010>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$constants$2f$abis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/viem/_esm/constants/abis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$constants$2f$contracts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/viem/_esm/constants/contracts.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$contract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/viem/_esm/errors/contract.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$encodeDeployData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/viem/_esm/utils/abi/encodeDeployData.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$encodeFunctionData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/viem/_esm/utils/abi/encodeFunctionData.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$getAddress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/viem/_esm/utils/address/getAddress.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$isAddressEqual$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/viem/_esm/utils/address/isAddressEqual.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$authorization$2f$verifyAuthorization$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/viem/_esm/utils/authorization/verifyAuthorization.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$concat$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/viem/_esm/utils/data/concat.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$isHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/viem/_esm/utils/data/isHex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/viem/_esm/utils/encoding/fromHex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/viem/_esm/utils/encoding/toHex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/viem/_esm/utils/getAction.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$signature$2f$recoverAddress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/viem/_esm/utils/signature/recoverAddress.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$signature$2f$serializeSignature$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/viem/_esm/utils/signature/serializeSignature.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$call$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/viem/_esm/actions/public/call.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getCode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/viem/_esm/actions/public/getCode.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$readContract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/viem/_esm/actions/public/readContract.js [app-client] (ecmascript)");
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
;
;
;
;
;
;
;
async function verifyHash(client, parameters) {
    const { address, hash, erc6492VerifierAddress: verifierAddress = parameters.universalSignatureVerifierAddress ?? client.chain?.contracts?.erc6492Verifier?.address, multicallAddress = parameters.multicallAddress ?? client.chain?.contracts?.multicall3?.address } = parameters;
    const signature = (()=>{
        const signature = parameters.signature;
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$isHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isHex"])(signature)) return signature;
        if (typeof signature === 'object' && 'r' in signature && 's' in signature) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$signature$2f$serializeSignature$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serializeSignature"])(signature);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bytesToHex"])(signature);
    })();
    try {
        if (__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$ox$2f$_esm$2f$erc8010$2f$SignatureErc8010$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__SignatureErc8010$3e$__["SignatureErc8010"].validate(signature)) return await verifyErc8010(client, {
            ...parameters,
            multicallAddress,
            signature
        });
        return await verifyErc6492(client, {
            ...parameters,
            verifierAddress,
            signature
        });
    } catch (error) {
        // Fallback attempt to verify the signature via ECDSA recovery.
        try {
            const verified = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$isAddressEqual$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isAddressEqual"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$getAddress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAddress"])(address), await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$signature$2f$recoverAddress$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["recoverAddress"])({
                hash,
                signature
            }));
            if (verified) return true;
        } catch  {}
        if (error instanceof VerificationError) {
            // if the execution fails, the signature was not valid and an internal method inside of the validator reverted
            // this can happen for many reasons, for example if signer can not be recovered from the signature
            // or if the signature has no valid format
            return false;
        }
        throw error;
    }
}
async function verifyErc8010(client, parameters) {
    const { address, blockNumber, blockTag, hash, multicallAddress } = parameters;
    const { authorization: authorization_ox, data: initData, signature, to } = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$ox$2f$_esm$2f$erc8010$2f$SignatureErc8010$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__SignatureErc8010$3e$__["SignatureErc8010"].unwrap(parameters.signature);
    // Check if already delegated
    const code = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getCode$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCode"])(client, {
        address,
        blockNumber,
        blockTag
    });
    // If already delegated, perform standard ERC-1271 verification.
    if (code === (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$concat$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["concatHex"])([
        '0xef0100',
        authorization_ox.address
    ])) return await verifyErc1271(client, {
        address,
        blockNumber,
        blockTag,
        hash,
        signature
    });
    const authorization = {
        address: authorization_ox.address,
        chainId: Number(authorization_ox.chainId),
        nonce: Number(authorization_ox.nonce),
        r: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["numberToHex"])(authorization_ox.r, {
            size: 32
        }),
        s: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["numberToHex"])(authorization_ox.s, {
            size: 32
        }),
        yParity: authorization_ox.yParity
    };
    const valid = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$authorization$2f$verifyAuthorization$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["verifyAuthorization"])({
        address,
        authorization
    });
    if (!valid) throw new VerificationError();
    // Deployless verification.
    const results = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAction"])(client, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$readContract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["readContract"], 'readContract')({
        ...multicallAddress ? {
            address: multicallAddress
        } : {
            code: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$constants$2f$contracts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["multicall3Bytecode"]
        },
        authorizationList: [
            authorization
        ],
        abi: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$constants$2f$abis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["multicall3Abi"],
        blockNumber,
        blockTag: 'pending',
        functionName: 'aggregate3',
        args: [
            [
                ...initData ? [
                    {
                        allowFailure: true,
                        target: to ?? address,
                        callData: initData
                    }
                ] : [],
                {
                    allowFailure: true,
                    target: address,
                    callData: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$encodeFunctionData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["encodeFunctionData"])({
                        abi: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$constants$2f$abis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["erc1271Abi"],
                        functionName: 'isValidSignature',
                        args: [
                            hash,
                            signature
                        ]
                    })
                }
            ]
        ]
    });
    const data = results[results.length - 1]?.returnData;
    if (data?.startsWith('0x1626ba7e')) return true;
    throw new VerificationError();
}
/** @internal */ // biome-ignore lint/correctness/noUnusedVariables: _
async function verifyErc6492(client, parameters) {
    const { address, factory, factoryData, hash, signature, verifierAddress, ...rest } = parameters;
    const wrappedSignature = await (async ()=>{
        // If no `factory` or `factoryData` is provided, it is assumed that the
        // address is not a Smart Account, or the Smart Account is already deployed.
        if (!factory && !factoryData) return signature;
        // If the signature is already wrapped, return the signature.
        if (__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$ox$2f$_esm$2f$erc6492$2f$SignatureErc6492$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__SignatureErc6492$3e$__["SignatureErc6492"].validate(signature)) return signature;
        // If the Smart Account is not deployed, wrap the signature with a 6492 wrapper
        // to perform counterfactual validation.
        return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$ox$2f$_esm$2f$erc6492$2f$SignatureErc6492$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__SignatureErc6492$3e$__["SignatureErc6492"].wrap({
            data: factoryData,
            signature,
            to: factory
        });
    })();
    const args = verifierAddress ? {
        to: verifierAddress,
        data: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$encodeFunctionData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["encodeFunctionData"])({
            abi: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$constants$2f$abis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["erc6492SignatureValidatorAbi"],
            functionName: 'isValidSig',
            args: [
                address,
                hash,
                wrappedSignature
            ]
        }),
        ...rest
    } : {
        data: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$encodeDeployData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["encodeDeployData"])({
            abi: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$constants$2f$abis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["erc6492SignatureValidatorAbi"],
            args: [
                address,
                hash,
                wrappedSignature
            ],
            bytecode: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$constants$2f$contracts$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["erc6492SignatureValidatorByteCode"]
        }),
        ...rest
    };
    const { data } = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAction"])(client, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$call$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["call"], 'call')(args).catch((error)=>{
        if (error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$contract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CallExecutionError"]) throw new VerificationError();
        throw error;
    });
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexToBool"])(data ?? '0x0')) return true;
    throw new VerificationError();
}
async function verifyErc1271(client, parameters) {
    const { address, blockNumber, blockTag, hash, signature } = parameters;
    const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAction"])(client, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$readContract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["readContract"], 'readContract')({
        address,
        abi: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$constants$2f$abis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["erc1271Abi"],
        args: [
            hash,
            signature
        ],
        blockNumber,
        blockTag,
        functionName: 'isValidSignature'
    }).catch((error)=>{
        if (error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$contract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContractFunctionExecutionError"]) throw new VerificationError();
        throw error;
    });
    if (result.startsWith('0x1626ba7e')) return true;
    throw new VerificationError();
}
class VerificationError extends Error {
} //# sourceMappingURL=verifyHash.js.map
}),
"[project]/Desktop/walletconnect/chilly/node_modules/viem/_esm/experimental/erc7821/errors.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ExecuteUnsupportedError",
    ()=>ExecuteUnsupportedError,
    "FunctionSelectorNotRecognizedError",
    ()=>FunctionSelectorNotRecognizedError
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/viem/_esm/errors/base.js [app-client] (ecmascript)");
;
class ExecuteUnsupportedError extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor(){
        super('ERC-7821 execution is not supported.', {
            name: 'ExecuteUnsupportedError'
        });
    }
}
class FunctionSelectorNotRecognizedError extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor(){
        super('Function is not recognized.', {
            metaMessages: [
                'This could be due to any of the following:',
                '  - The contract does not have the function,',
                '  - The address is not a contract.'
            ],
            name: 'FunctionSelectorNotRecognizedError'
        });
    }
} //# sourceMappingURL=errors.js.map
}),
"[project]/Desktop/walletconnect/chilly/node_modules/viem/_esm/experimental/erc7821/utils/getExecuteError.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getExecuteError",
    ()=>getExecuteError
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$AbiError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/ox/_esm/core/AbiError.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$decodeErrorResult$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/viem/_esm/utils/abi/decodeErrorResult.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$errors$2f$getContractError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/viem/_esm/utils/errors/getContractError.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$experimental$2f$erc7821$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/viem/_esm/experimental/erc7821/errors.js [app-client] (ecmascript)");
;
;
;
;
function getExecuteError(e, parameters) {
    const error = e.walk((e)=>'data' in e);
    if (!error?.data) return e;
    if (error.data === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$AbiError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSelector"](__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$AbiError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["from"]('error FnSelectorNotRecognized()'))) return new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$experimental$2f$erc7821$2f$errors$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FunctionSelectorNotRecognizedError"]();
    let matched = null;
    for (const c of parameters.calls){
        const call = c;
        if (!call.abi) continue;
        try {
            const matches = Boolean((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$decodeErrorResult$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["decodeErrorResult"])({
                abi: call.abi,
                data: error.data
            }));
            if (!matches) continue;
            matched = call;
        } catch  {}
    }
    if (matched) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$errors$2f$getContractError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getContractError"])(error, {
        abi: matched.abi,
        address: matched.to,
        args: matched.args,
        functionName: matched.functionName
    });
    return e;
} //# sourceMappingURL=getExecuteError.js.map
}),
"[project]/Desktop/walletconnect/chilly/node_modules/viem/_esm/errors/calls.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BundleFailedError",
    ()=>BundleFailedError
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/viem/_esm/errors/base.js [app-client] (ecmascript)");
;
class BundleFailedError extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor(result){
        super(`Call bundle failed with status: ${result.statusCode}`, {
            name: 'BundleFailedError'
        });
        Object.defineProperty(this, "result", {
            enumerable: true,
            configurable: true,
            writable: true,
            value: void 0
        });
        this.result = result;
    }
} //# sourceMappingURL=calls.js.map
}),
"[project]/Desktop/walletconnect/chilly/node_modules/viem/_esm/actions/wallet/sendCalls.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "fallbackMagicIdentifier",
    ()=>fallbackMagicIdentifier,
    "fallbackTransactionErrorMagicIdentifier",
    ()=>fallbackTransactionErrorMagicIdentifier,
    "sendCalls",
    ()=>sendCalls
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$accounts$2f$utils$2f$parseAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/viem/_esm/accounts/utils/parseAccount.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/viem/_esm/errors/base.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/viem/_esm/errors/rpc.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$encodeFunctionData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/viem/_esm/utils/abi/encodeFunctionData.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$concat$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/viem/_esm/utils/data/concat.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/viem/_esm/utils/encoding/fromHex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/viem/_esm/utils/encoding/toHex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$errors$2f$getTransactionError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/viem/_esm/utils/errors/getTransactionError.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$sendTransaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/viem/_esm/actions/wallet/sendTransaction.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
const fallbackMagicIdentifier = '0x5792579257925792579257925792579257925792579257925792579257925792';
const fallbackTransactionErrorMagicIdentifier = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["numberToHex"])(0, {
    size: 32
});
async function sendCalls(client, parameters) {
    const { account: account_ = client.account, capabilities, chain = client.chain, experimental_fallback, experimental_fallbackDelay = 32, forceAtomic = false, id, version = '2.0.0' } = parameters;
    const account = account_ ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$accounts$2f$utils$2f$parseAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseAccount"])(account_) : null;
    const calls = parameters.calls.map((call_)=>{
        const call = call_;
        const data = call.abi ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$encodeFunctionData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["encodeFunctionData"])({
            abi: call.abi,
            functionName: call.functionName,
            args: call.args
        }) : call.data;
        return {
            data: call.dataSuffix && data ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$concat$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["concat"])([
                data,
                call.dataSuffix
            ]) : data,
            to: call.to,
            value: call.value ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["numberToHex"])(call.value) : undefined
        };
    });
    try {
        const response = await client.request({
            method: 'wallet_sendCalls',
            params: [
                {
                    atomicRequired: forceAtomic,
                    calls,
                    capabilities,
                    chainId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["numberToHex"])(chain.id),
                    from: account?.address,
                    id,
                    version
                }
            ]
        }, {
            retryCount: 0
        });
        if (typeof response === 'string') return {
            id: response
        };
        return response;
    } catch (err) {
        const error = err;
        // If the transport does not support EIP-5792, fall back to
        // `eth_sendTransaction`.
        if (experimental_fallback && (error.name === 'MethodNotFoundRpcError' || error.name === 'MethodNotSupportedRpcError' || error.name === 'UnknownRpcError' || error.details.toLowerCase().includes('does not exist / is not available') || error.details.toLowerCase().includes('missing or invalid. request()') || error.details.toLowerCase().includes('did not match any variant of untagged enum') || error.details.toLowerCase().includes('account upgraded to unsupported contract') || error.details.toLowerCase().includes('eip-7702 not supported') || error.details.toLowerCase().includes('unsupported wc_ method') || // magic.link
        error.details.toLowerCase().includes('feature toggled misconfigured') || // Trust Wallet
        error.details.toLowerCase().includes('jsonrpcengine: response has no error or result for request'))) {
            if (capabilities) {
                const hasNonOptionalCapability = Object.values(capabilities).some((capability)=>!capability.optional);
                if (hasNonOptionalCapability) {
                    const message = 'non-optional `capabilities` are not supported on fallback to `eth_sendTransaction`.';
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UnsupportedNonOptionalCapabilityError"](new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"](message, {
                        details: message
                    }));
                }
            }
            if (forceAtomic && calls.length > 1) {
                const message = '`forceAtomic` is not supported on fallback to `eth_sendTransaction`.';
                throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$rpc$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AtomicityNotSupportedError"](new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"](message, {
                    details: message
                }));
            }
            const promises = [];
            for (const call of calls){
                const promise = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$sendTransaction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sendTransaction"])(client, {
                    account,
                    chain,
                    data: call.data,
                    to: call.to,
                    value: call.value ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexToBigInt"])(call.value) : undefined
                });
                promises.push(promise);
                // Note: some browser wallets require a small delay between transactions
                // to prevent duplicate JSON-RPC requests.
                if (experimental_fallbackDelay > 0) await new Promise((resolve)=>setTimeout(resolve, experimental_fallbackDelay));
            }
            const results = await Promise.allSettled(promises);
            if (results.every((r)=>r.status === 'rejected')) throw results[0].reason;
            const hashes = results.map((result)=>{
                if (result.status === 'fulfilled') return result.value;
                return fallbackTransactionErrorMagicIdentifier;
            });
            return {
                id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$concat$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["concat"])([
                    ...hashes,
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$toHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["numberToHex"])(chain.id, {
                        size: 32
                    }),
                    fallbackMagicIdentifier
                ])
            };
        }
        throw (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$errors$2f$getTransactionError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTransactionError"])(err, {
            ...parameters,
            account,
            chain: parameters.chain
        });
    }
} //# sourceMappingURL=sendCalls.js.map
}),
"[project]/Desktop/walletconnect/chilly/node_modules/viem/_esm/actions/wallet/getCallsStatus.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getCallsStatus",
    ()=>getCallsStatus
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$slice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/viem/_esm/utils/data/slice.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$trim$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/viem/_esm/utils/data/trim.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/viem/_esm/utils/encoding/fromHex.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$formatters$2f$transactionReceipt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/viem/_esm/utils/formatters/transactionReceipt.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$sendCalls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/viem/_esm/actions/wallet/sendCalls.js [app-client] (ecmascript)");
;
;
;
;
;
async function getCallsStatus(client, parameters) {
    async function getStatus(id) {
        const isTransactions = id.endsWith(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$sendCalls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fallbackMagicIdentifier"].slice(2));
        if (isTransactions) {
            const chainId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$trim$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["trim"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$slice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sliceHex"])(id, -64, -32));
            const hashes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$data$2f$slice$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sliceHex"])(id, 0, -64).slice(2).match(/.{1,64}/g);
            const receipts = await Promise.all(hashes.map((hash)=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$sendCalls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fallbackTransactionErrorMagicIdentifier"].slice(2) !== hash ? client.request({
                    method: 'eth_getTransactionReceipt',
                    params: [
                        `0x${hash}`
                    ]
                }, {
                    dedupe: true
                }) : undefined));
            const status = (()=>{
                if (receipts.some((r)=>r === null)) return 100; // pending
                if (receipts.every((r)=>r?.status === '0x1')) return 200; // success
                if (receipts.every((r)=>r?.status === '0x0')) return 500; // complete failure
                return 600; // partial failure
            })();
            return {
                atomic: false,
                chainId: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexToNumber"])(chainId),
                receipts: receipts.filter(Boolean),
                status,
                version: '2.0.0'
            };
        }
        return client.request({
            method: 'wallet_getCallsStatus',
            params: [
                id
            ]
        });
    }
    const { atomic = false, chainId, receipts, version = '2.0.0', ...response } = await getStatus(parameters.id);
    const [status, statusCode] = (()=>{
        const statusCode = response.status;
        if (statusCode >= 100 && statusCode < 200) return [
            'pending',
            statusCode
        ];
        if (statusCode >= 200 && statusCode < 300) return [
            'success',
            statusCode
        ];
        if (statusCode >= 300 && statusCode < 700) return [
            'failure',
            statusCode
        ];
        // @ts-expect-error: for backwards compatibility
        if (statusCode === 'CONFIRMED') return [
            'success',
            200
        ];
        // @ts-expect-error: for backwards compatibility
        if (statusCode === 'PENDING') return [
            'pending',
            100
        ];
        return [
            undefined,
            statusCode
        ];
    })();
    return {
        ...response,
        atomic,
        // @ts-expect-error: for backwards compatibility
        chainId: chainId ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexToNumber"])(chainId) : undefined,
        receipts: receipts?.map((receipt)=>({
                ...receipt,
                blockNumber: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexToBigInt"])(receipt.blockNumber),
                gasUsed: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$encoding$2f$fromHex$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hexToBigInt"])(receipt.gasUsed),
                status: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$formatters$2f$transactionReceipt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["receiptStatuses"][receipt.status]
            })) ?? [],
        statusCode,
        status,
        version
    };
} //# sourceMappingURL=getCallsStatus.js.map
}),
"[project]/Desktop/walletconnect/chilly/node_modules/viem/_esm/actions/wallet/waitForCallsStatus.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WaitForCallsStatusTimeoutError",
    ()=>WaitForCallsStatusTimeoutError,
    "waitForCallsStatus",
    ()=>waitForCallsStatus
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/viem/_esm/errors/base.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$calls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/viem/_esm/errors/calls.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/viem/_esm/utils/getAction.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$observe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/viem/_esm/utils/observe.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$poll$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/viem/_esm/utils/poll.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$promise$2f$withResolvers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/viem/_esm/utils/promise/withResolvers.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$promise$2f$withRetry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/viem/_esm/utils/promise/withRetry.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$stringify$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/viem/_esm/utils/stringify.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$getCallsStatus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/viem/_esm/actions/wallet/getCallsStatus.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
async function waitForCallsStatus(client, parameters) {
    const { id, pollingInterval = client.pollingInterval, status = ({ statusCode })=>statusCode === 200 || statusCode >= 300, retryCount = 4, retryDelay = ({ count })=>~~(1 << count) * 200, timeout = 60_000, throwOnFailure = false } = parameters;
    const observerId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$stringify$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["stringify"])([
        'waitForCallsStatus',
        client.uid,
        id
    ]);
    const { promise, resolve, reject } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$promise$2f$withResolvers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["withResolvers"])();
    let timer;
    const unobserve = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$observe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["observe"])(observerId, {
        resolve,
        reject
    }, (emit)=>{
        const unpoll = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$poll$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["poll"])(async ()=>{
            const done = (fn)=>{
                clearTimeout(timer);
                unpoll();
                fn();
                unobserve();
            };
            try {
                const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$promise$2f$withRetry$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["withRetry"])(async ()=>{
                    const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAction"])(client, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$wallet$2f$getCallsStatus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCallsStatus"], 'getCallsStatus')({
                        id
                    });
                    if (throwOnFailure && result.status === 'failure') throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$calls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BundleFailedError"](result);
                    return result;
                }, {
                    retryCount,
                    delay: retryDelay
                });
                if (!status(result)) return;
                done(()=>emit.resolve(result));
            } catch (error) {
                done(()=>emit.reject(error));
            }
        }, {
            interval: pollingInterval,
            emitOnBegin: true
        });
        return unpoll;
    });
    timer = timeout ? setTimeout(()=>{
        unobserve();
        clearTimeout(timer);
        reject(new WaitForCallsStatusTimeoutError({
            id
        }));
    }, timeout) : undefined;
    return await promise;
}
class WaitForCallsStatusTimeoutError extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ id }){
        super(`Timed out while waiting for call bundle with id "${id}" to be confirmed.`, {
            name: 'WaitForCallsStatusTimeoutError'
        });
    }
} //# sourceMappingURL=waitForCallsStatus.js.map
}),
"[project]/Desktop/walletconnect/chilly/node_modules/viem/_esm/errors/eip712.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Eip712DomainNotFoundError",
    ()=>Eip712DomainNotFoundError
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/viem/_esm/errors/base.js [app-client] (ecmascript)");
;
class Eip712DomainNotFoundError extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$base$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseError"] {
    constructor({ address }){
        super(`No EIP-712 domain found on contract "${address}".`, {
            metaMessages: [
                'Ensure that:',
                `- The contract is deployed at the address "${address}".`,
                '- `eip712Domain()` function exists on the contract.',
                '- `eip712Domain()` function matches signature to ERC-5267 specification.'
            ],
            name: 'Eip712DomainNotFoundError'
        });
    }
} //# sourceMappingURL=eip712.js.map
}),
"[project]/Desktop/walletconnect/chilly/node_modules/viem/_esm/actions/public/getEip712Domain.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getEip712Domain",
    ()=>getEip712Domain
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$eip712$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/viem/_esm/errors/eip712.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/viem/_esm/utils/getAction.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$readContract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/viem/_esm/actions/public/readContract.js [app-client] (ecmascript)");
;
;
;
async function getEip712Domain(client, parameters) {
    const { address, factory, factoryData } = parameters;
    try {
        const [fields, name, version, chainId, verifyingContract, salt, extensions] = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAction"])(client, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$readContract$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["readContract"], 'readContract')({
            abi,
            address,
            functionName: 'eip712Domain',
            factory,
            factoryData
        });
        return {
            domain: {
                name,
                version,
                chainId: Number(chainId),
                verifyingContract,
                salt
            },
            extensions,
            fields
        };
    } catch (e) {
        const error = e;
        if (error.name === 'ContractFunctionExecutionError' && error.cause.name === 'ContractFunctionZeroDataError') {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$eip712$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Eip712DomainNotFoundError"]({
                address
            });
        }
        throw error;
    }
}
const abi = [
    {
        inputs: [],
        name: 'eip712Domain',
        outputs: [
            {
                name: 'fields',
                type: 'bytes1'
            },
            {
                name: 'name',
                type: 'string'
            },
            {
                name: 'version',
                type: 'string'
            },
            {
                name: 'chainId',
                type: 'uint256'
            },
            {
                name: 'verifyingContract',
                type: 'address'
            },
            {
                name: 'salt',
                type: 'bytes32'
            },
            {
                name: 'extensions',
                type: 'uint256[]'
            }
        ],
        stateMutability: 'view',
        type: 'function'
    }
]; //# sourceMappingURL=getEip712Domain.js.map
}),
"[project]/Desktop/walletconnect/chilly/node_modules/viem/_esm/actions/wallet/prepareAuthorization.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "prepareAuthorization",
    ()=>prepareAuthorization
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$accounts$2f$utils$2f$parseAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/viem/_esm/accounts/utils/parseAccount.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$account$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/viem/_esm/errors/account.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$isAddressEqual$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/viem/_esm/utils/address/isAddressEqual.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/viem/_esm/utils/getAction.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getChainId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/viem/_esm/actions/public/getChainId.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getTransactionCount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/viem/_esm/actions/public/getTransactionCount.js [app-client] (ecmascript)");
;
;
;
;
;
;
async function prepareAuthorization(client, parameters) {
    const { account: account_ = client.account, chainId, nonce } = parameters;
    if (!account_) throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$account$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AccountNotFoundError"]({
        docsPath: '/docs/eip7702/prepareAuthorization'
    });
    const account = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$accounts$2f$utils$2f$parseAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseAccount"])(account_);
    const executor = (()=>{
        if (!parameters.executor) return undefined;
        if (parameters.executor === 'self') return parameters.executor;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$accounts$2f$utils$2f$parseAccount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseAccount"])(parameters.executor);
    })();
    const authorization = {
        address: parameters.contractAddress ?? parameters.address,
        chainId,
        nonce
    };
    if (typeof authorization.chainId === 'undefined') authorization.chainId = client.chain?.id ?? await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAction"])(client, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getChainId$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getChainId"], 'getChainId')({});
    if (typeof authorization.nonce === 'undefined') {
        authorization.nonce = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$getAction$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAction"])(client, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$actions$2f$public$2f$getTransactionCount$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTransactionCount"], 'getTransactionCount')({
            address: account.address,
            blockTag: 'pending'
        });
        if (executor === 'self' || executor?.address && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$address$2f$isAddressEqual$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isAddressEqual"])(executor.address, account.address)) authorization.nonce += 1;
    }
    return authorization;
} //# sourceMappingURL=prepareAuthorization.js.map
}),
"[project]/Desktop/walletconnect/chilly/node_modules/viem/_esm/experimental/erc7821/constants.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "abi",
    ()=>abi,
    "executionMode",
    ()=>executionMode
]);
const abi = [
    {
        type: 'fallback',
        stateMutability: 'payable'
    },
    {
        type: 'receive',
        stateMutability: 'payable'
    },
    {
        type: 'function',
        name: 'execute',
        inputs: [
            {
                name: 'mode',
                type: 'bytes32',
                internalType: 'bytes32'
            },
            {
                name: 'executionData',
                type: 'bytes',
                internalType: 'bytes'
            }
        ],
        outputs: [],
        stateMutability: 'payable'
    },
    {
        type: 'function',
        name: 'supportsExecutionMode',
        inputs: [
            {
                name: 'mode',
                type: 'bytes32',
                internalType: 'bytes32'
            }
        ],
        outputs: [
            {
                name: 'result',
                type: 'bool',
                internalType: 'bool'
            }
        ],
        stateMutability: 'view'
    },
    {
        type: 'error',
        name: 'FnSelectorNotRecognized',
        inputs: []
    },
    {
        type: 'error',
        name: 'UnsupportedExecutionMode',
        inputs: []
    }
];
const executionMode = {
    default: '0x0100000000000000000000000000000000000000000000000000000000000000',
    opData: '0x0100000000007821000100000000000000000000000000000000000000000000',
    batchOfBatches: '0x0100000000007821000200000000000000000000000000000000000000000000'
}; //# sourceMappingURL=constants.js.map
}),
"[project]/Desktop/walletconnect/chilly/node_modules/viem/_esm/experimental/erc7821/utils/encodeCalls.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "encodeCalls",
    ()=>encodeCalls
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$AbiParameters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/ox/_esm/core/AbiParameters.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$encodeFunctionData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/viem/_esm/utils/abi/encodeFunctionData.js [app-client] (ecmascript)");
;
;
function encodeCalls(calls_, opData) {
    const calls = calls_.map((call_)=>{
        const call = call_;
        return {
            data: call.abi ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$encodeFunctionData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["encodeFunctionData"])(call) : call.data ?? '0x',
            value: call.value ?? 0n,
            target: call.to
        };
    });
    return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$AbiParameters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["encode"](__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$ox$2f$_esm$2f$core$2f$AbiParameters$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["from"]([
        'struct Call { address target; uint256 value; bytes data; }',
        'Call[] calls',
        ...opData ? [
            'bytes opData'
        ] : []
    ]), [
        calls,
        ...opData ? [
            opData
        ] : []
    ]);
} //# sourceMappingURL=encodeCalls.js.map
}),
"[project]/Desktop/walletconnect/chilly/node_modules/viem/_esm/experimental/erc7821/utils/encodeExecuteData.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "encodeExecuteData",
    ()=>encodeExecuteData
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$encodeFunctionData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/viem/_esm/utils/abi/encodeFunctionData.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$experimental$2f$erc7821$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/viem/_esm/experimental/erc7821/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$experimental$2f$erc7821$2f$utils$2f$encodeCalls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/viem/_esm/experimental/erc7821/utils/encodeCalls.js [app-client] (ecmascript)");
;
;
;
function encodeExecuteData(parameters) {
    const { calls, opData } = parameters;
    const encodedCalls = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$experimental$2f$erc7821$2f$utils$2f$encodeCalls$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["encodeCalls"])(calls, opData);
    const mode = opData ? __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$experimental$2f$erc7821$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["executionMode"].opData : __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$experimental$2f$erc7821$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["executionMode"].default;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$abi$2f$encodeFunctionData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["encodeFunctionData"])({
        abi: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$experimental$2f$erc7821$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["abi"],
        functionName: 'execute',
        args: [
            mode,
            encodedCalls
        ]
    });
} //# sourceMappingURL=encodeExecuteData.js.map
}),
"[project]/Desktop/walletconnect/chilly/node_modules/viem/_esm/clients/transports/webSocket.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "webSocket",
    ()=>webSocket
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$request$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/viem/_esm/errors/request.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$transport$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/viem/_esm/errors/transport.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$rpc$2f$compat$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/viem/_esm/utils/rpc/compat.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$rpc$2f$webSocket$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/viem/_esm/utils/rpc/webSocket.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$transports$2f$createTransport$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/walletconnect/chilly/node_modules/viem/_esm/clients/transports/createTransport.js [app-client] (ecmascript)");
;
;
;
;
;
function webSocket(/** URL of the JSON-RPC API. Defaults to the chain's public RPC URL. */ url, config = {}) {
    const { keepAlive, key = 'webSocket', methods, name = 'WebSocket JSON-RPC', reconnect, retryDelay } = config;
    return ({ chain, retryCount: retryCount_, timeout: timeout_ })=>{
        const retryCount = config.retryCount ?? retryCount_;
        const timeout = timeout_ ?? config.timeout ?? 10_000;
        const url_ = url || chain?.rpcUrls.default.webSocket?.[0];
        const wsRpcClientOpts = {
            keepAlive,
            reconnect
        };
        if (!url_) throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$transport$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UrlRequiredError"]();
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$clients$2f$transports$2f$createTransport$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createTransport"])({
            key,
            methods,
            name,
            async request ({ method, params }) {
                const body = {
                    method,
                    params
                };
                const rpcClient = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$rpc$2f$webSocket$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getWebSocketRpcClient"])(url_, wsRpcClientOpts);
                const { error, result } = await rpcClient.requestAsync({
                    body,
                    timeout
                });
                if (error) throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$errors$2f$request$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RpcRequestError"]({
                    body,
                    error,
                    url: url_
                });
                return result;
            },
            retryCount,
            retryDelay,
            timeout,
            type: 'webSocket'
        }, {
            getSocket () {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$rpc$2f$compat$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSocket"])(url_);
            },
            getRpcClient () {
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$rpc$2f$webSocket$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getWebSocketRpcClient"])(url_, wsRpcClientOpts);
            },
            async subscribe ({ params, onData, onError }) {
                const rpcClient = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$walletconnect$2f$chilly$2f$node_modules$2f$viem$2f$_esm$2f$utils$2f$rpc$2f$webSocket$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getWebSocketRpcClient"])(url_, wsRpcClientOpts);
                const { result: subscriptionId } = await new Promise((resolve, reject)=>rpcClient.request({
                        body: {
                            method: 'eth_subscribe',
                            params
                        },
                        onError (error) {
                            reject(error);
                            onError?.(error);
                            return;
                        },
                        onResponse (response) {
                            if (response.error) {
                                reject(response.error);
                                onError?.(response.error);
                                return;
                            }
                            if (typeof response.id === 'number') {
                                resolve(response);
                                return;
                            }
                            if (response.method !== 'eth_subscription') return;
                            onData(response.params);
                        }
                    }));
                return {
                    subscriptionId,
                    async unsubscribe () {
                        return new Promise((resolve)=>rpcClient.request({
                                body: {
                                    method: 'eth_unsubscribe',
                                    params: [
                                        subscriptionId
                                    ]
                                },
                                onResponse: resolve
                            }));
                    }
                };
            }
        });
    };
} //# sourceMappingURL=webSocket.js.map
}),
]);

//# sourceMappingURL=89298_viem__esm_331e6087._.js.map