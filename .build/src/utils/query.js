"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.executeApplicationQuery = exports.executeQuery = void 0;
const client_1 = require("@apollo/client");
const cross_fetch_1 = __importDefault(require("cross-fetch"));
const chainInfo_1 = require("../configs/chainInfo");
const Pino = require('pino');
const logger = Pino();
async function executeQuery(chainId, from, to, query) {
    logger.info({ chainId, from, to }, 'Executing query');
    const link = new client_1.HttpLink({
        uri: chainInfo_1.CHAIN_INFO[chainId].subgraphClientUrl,
        fetch: cross_fetch_1.default,
    });
    const client = new client_1.ApolloClient({
        link,
        cache: new client_1.InMemoryCache(),
    });
    const response = await client.query({
        query,
        fetchPolicy: 'network-only',
        variables: {
            lowerLimit: from,
            upperLimit: to,
        },
    });
    const { data } = response;
    logger.info({
        chainId, from, to, data,
    }, 'Executed query');
    return data;
}
exports.executeQuery = executeQuery;
async function executeApplicationQuery(chainId, applicationIDs, query) {
    logger.info({ chainId, applicationIDs }, 'Executing application query');
    const link = new client_1.HttpLink({
        uri: chainInfo_1.CHAIN_INFO[chainId].subgraphClientUrl,
        fetch: cross_fetch_1.default,
    });
    const client = new client_1.ApolloClient({
        link,
        cache: new client_1.InMemoryCache(),
    });
    const response = await client.query({
        query,
        fetchPolicy: 'network-only',
        variables: {
            applicationIDs,
        },
    });
    const { data } = response;
    logger.info({
        chainId, applicationIDs, data,
    }, 'Executed application query');
    return data;
}
exports.executeApplicationQuery = executeApplicationQuery;
