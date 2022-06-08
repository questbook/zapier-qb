"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchData = void 0;
const chains_1 = require("../configs/chains");
const events_1 = require("../configs/events");
const graphql_1 = require("../generated/graphql");
const chainUtils_1 = require("./chainUtils");
const dataFormat_1 = __importDefault(require("./dataFormat"));
const db_1 = require("./db");
const query_1 = require("./query");
const Pino = require('pino');
const logger = Pino();
async function fetchData(type) {
    let documentNode = null;
    switch (type) {
        case events_1.OnChainEvent.DaoCreated:
            documentNode = graphql_1.DaoCreatedDocument;
            break;
        case events_1.OnChainEvent.GrantCreated:
            documentNode = graphql_1.GrantCreatedDocument;
            break;
        case events_1.OnChainEvent.GrantAppliedTo:
            documentNode = graphql_1.GrantAppliedToDocument;
            break;
        case events_1.OnChainEvent.ApplicationUpdate:
            documentNode = graphql_1.ApplicationUpdateDocument;
            break;
        case events_1.OnChainEvent.FundSent:
            documentNode = graphql_1.FundSentDocument;
            break;
        case events_1.OnChainEvent.ReviewerInvitedToDao:
            documentNode = graphql_1.ReviewerInvitedToDaoDocument;
            break;
        case events_1.OnChainEvent.ReviewerAddedToGrantApplication:
            documentNode = graphql_1.ReviewerAddedToGrantApplicationDocument;
            break;
        case events_1.OnChainEvent.ReviewerSubmittedReview:
            documentNode = graphql_1.ReviewerSubmittedReviewDocument;
            break;
        default:
            break;
    }
    if (!documentNode) {
        logger.info(`NO DOCUMENT NODE FOUND FOR ${type.toString()}`);
        return null;
    }
    const time = new Date();
    const toTimestamp = Math.floor(time.getTime() / 1000);
    let data = [];
    let count = 0;
    for (const chainId of chains_1.ALL_SUPPORTED_CHAIN_IDS) {
        let fromTimestamp = await (0, db_1.getItem)((0, chainUtils_1.getKey)(type));
        if (fromTimestamp === -1) {
            fromTimestamp = 0;
        }
        logger.info({ fromTimestamp, toTimestamp, chainId }, `${type.toString()}: Fetching data from graphQL`);
        const result = await (0, query_1.executeQuery)(chainId, fromTimestamp, toTimestamp, documentNode, type);
        const ret = await (0, dataFormat_1.default)(type, result);
        count += ret.length;
        data = [...data, ...ret];
    }
    return { data, count, toTimestamp };
}
exports.fetchData = fetchData;
