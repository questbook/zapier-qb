"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchData = void 0;
const chains_1 = require("../configs/chains");
const events_1 = require("../configs/events");
const graphql_1 = require("../generated/graphql");
const db_1 = require("./db");
const query_1 = require("./query");
const Pino = require('pino');
const logger = Pino();
const getKey = (chainId, type) => `${chainId}_${type}`;
async function fetchData(type) {
    let documentNode = null;
    switch (type) {
        case events_1.OnChainEvent.DaoCreated:
            documentNode = graphql_1.DaoCreatedDocument;
            break;
        default:
            break;
    }
    if (!documentNode) {
        logger.info(`NO DOCUMENT NODE FOUND FOR ${type.toString()}`);
        return null;
    }
    const time = new Date();
    const data = {};
    for (const chainId of chains_1.ALL_SUPPORTED_CHAIN_IDS) {
        let fromTimestamp = await (0, db_1.getItem)(getKey(chainId, type));
        const toTimestamp = Math.floor(time.getTime() / 1000);
        if (fromTimestamp === -1) {
            fromTimestamp = 0;
        }
        const result = await (0, query_1.executeQuery)(chainId, fromTimestamp, toTimestamp, documentNode);
        data[chainId] = result;
    }
    return data;
}
exports.fetchData = fetchData;
