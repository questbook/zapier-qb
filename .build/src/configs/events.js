"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OnChainEvent = void 0;
var OnChainEvent;
(function (OnChainEvent) {
    OnChainEvent[OnChainEvent["DaoCreated"] = 0] = "DaoCreated";
    OnChainEvent[OnChainEvent["GrantCreated"] = 1] = "GrantCreated";
    OnChainEvent[OnChainEvent["GrantAppliedTo"] = 2] = "GrantAppliedTo";
    OnChainEvent[OnChainEvent["ApplicationUpdate"] = 3] = "ApplicationUpdate";
    OnChainEvent[OnChainEvent["ReviewerInvitedToDao"] = 4] = "ReviewerInvitedToDao";
    OnChainEvent[OnChainEvent["ReviewerAddedToGrantApplication"] = 5] = "ReviewerAddedToGrantApplication";
    OnChainEvent[OnChainEvent["ReviewerSubmittedReview"] = 6] = "ReviewerSubmittedReview";
    OnChainEvent[OnChainEvent["FundSent"] = 7] = "FundSent";
})(OnChainEvent = exports.OnChainEvent || (exports.OnChainEvent = {}));
