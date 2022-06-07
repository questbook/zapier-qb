"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cross_fetch_1 = require("cross-fetch");
require("dotenv/config");
const Pino = require('pino');
const logger = Pino();
async function trigger(key, data, type) {
    const appId = process.env.APP_ID;
    if (!appId) {
        return;
    }
    const url = `https://hooks.zapier.com/hooks/catch/${appId}/${key}/`;
    const requestOptions = {
        method: 'POST',
        headers: {},
        body: data,
    };
    const response = await (0, cross_fetch_1.fetch)(url, requestOptions);
    const { status } = response;
    const json = await response.json();
    logger.info({ status }, `${type}: Reponse status`);
    logger.info({ json }, `${type}: Reponse json`);
}
exports.default = trigger;
