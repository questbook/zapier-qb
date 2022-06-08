"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const cross_fetch_1 = __importDefault(require("cross-fetch"));
const Pino = require('pino');
const logger = Pino();
async function trigger(key, data, type, toTimestamp) {
    const appId = process.env.APP_ID;
    if (!appId) {
        return;
    }
    const url = `https://hooks.zapier.com/hooks/catch/${appId}/${key}/`;
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: data,
    };
    logger.info({ url }, `${type.toString()}: Triggering Zapier URL`);
    // logger.info({ data }, `${type.toString()}: Triggering Zapier BODY`)
    const response = await (0, cross_fetch_1.default)(url, requestOptions);
    const { status } = response;
    const json = await response.json();
    logger.info({ status }, `${type}: Reponse status`);
    logger.info({ json }, `${type}: Response json`);
    // if (status === 200 && json.status === 'success') {
    // 	await setItem(getKey(type), toTimestamp)
    // }
}
exports.default = trigger;
