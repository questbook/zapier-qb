"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ALL_SUPPORTED_CHAIN_IDS = exports.SupportedChainId = void 0;
require("dotenv/config");
var SupportedChainId;
(function (SupportedChainId) {
    SupportedChainId[SupportedChainId["RINKEBY"] = 4] = "RINKEBY";
    SupportedChainId[SupportedChainId["HARMONY_TESTNET_S0"] = 1666700000] = "HARMONY_TESTNET_S0";
    SupportedChainId[SupportedChainId["POLYGON_TESTNET"] = 80001] = "POLYGON_TESTNET";
    SupportedChainId[SupportedChainId["POLYGON_MAINNET"] = 137] = "POLYGON_MAINNET";
    SupportedChainId[SupportedChainId["OPTIMISM_MAINNET"] = 10] = "OPTIMISM_MAINNET";
    SupportedChainId[SupportedChainId["CELO_ALFAJORES_TESTNET"] = 44787] = "CELO_ALFAJORES_TESTNET";
})(SupportedChainId = exports.SupportedChainId || (exports.SupportedChainId = {}));
exports.ALL_SUPPORTED_CHAIN_IDS = Object.values(SupportedChainId).filter((id) => typeof id === 'number'
    && ((process.env.IS_TEST === 'true'
        && (id === SupportedChainId.RINKEBY
            || id === SupportedChainId.HARMONY_TESTNET_S0
            || id === SupportedChainId.POLYGON_TESTNET))
        || process.env.IS_TEST === 'false')
    && ((process.env.DISCOURSE_TEST === 'true'
        && id === SupportedChainId.HARMONY_TESTNET_S0)
        || process.env.DISCOURSE_TEST === 'false'));
