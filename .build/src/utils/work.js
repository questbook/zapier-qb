"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.work = void 0;
const fetchData_1 = require("./fetchData");
const trigger_1 = __importDefault(require("./trigger"));
require("dotenv/config");
const Pino = require('pino');
const logger = Pino();
async function work(type, zapKey) {
    // Fetch env variable
    if (process.env.IS_ZAP_TEST === 'true') {
        zapKey = process.env.TEST;
    }
    if (!zapKey) {
        logger.info(`${type.toString()}: NO ENV VARIABLE FOUND`);
        return;
    }
    // Call graphQL endpoint and get the data from all chains
    const { data, count, toTimestamp } = await (0, fetchData_1.fetchData)(type);
    // logger.info({ data }, `${type}: Data from all chains`)
    if (count > 0) {
        // Convert the json data to string
        const dataString = JSON.stringify(data);
        // Trigger the Zapier Endpoint
        await (0, trigger_1.default)(zapKey, dataString, type, toTimestamp);
    }
    else
        logger.info(`${type.toString()}: NO DATA FOUND`);
}
exports.work = work;
