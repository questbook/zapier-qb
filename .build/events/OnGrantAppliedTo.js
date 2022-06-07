"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.run = void 0;
require("dotenv/config");
const events_1 = require("../src/configs/events");
const work_1 = require("../src/utils/work");
const run = async (event, context) => {
    const type = events_1.OnChainEvent.GrantAppliedTo;
    const zapKey = process.env.GRANT_APPLIED_TO;
    await (0, work_1.work)(type, zapKey);
};
exports.run = run;
