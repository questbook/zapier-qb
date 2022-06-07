"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewerSubmittedQueryDocument = exports.useReviewerInvitedToDaoLazyQuery = exports.useReviewerInvitedToDaoQuery = exports.ReviewerInvitedToDaoDocument = exports.useReviewerAddedToGrantApplicationLazyQuery = exports.useReviewerAddedToGrantApplicationQuery = exports.ReviewerAddedToGrantApplicationDocument = exports.useGrantCreatedLazyQuery = exports.useGrantCreatedQuery = exports.GrantCreatedDocument = exports.useGrantAppliedToLazyQuery = exports.useGrantAppliedToQuery = exports.GrantAppliedToDocument = exports.useFundSentLazyQuery = exports.useFundSentQuery = exports.FundSentDocument = exports.useDaoCreatedLazyQuery = exports.useDaoCreatedQuery = exports.DaoCreatedDocument = exports.useApplicationUpdateLazyQuery = exports.useApplicationUpdateQuery = exports.ApplicationUpdateDocument = exports._SubgraphErrorPolicy_ = exports.Workspace_OrderBy = exports.WorkspaceMember_OrderBy = exports.WorkspaceMemberAccessLevel = exports.Token_OrderBy = exports.SupportedNetwork = exports.Social_OrderBy = exports.Rubric_OrderBy = exports.RubricItem_OrderBy = exports.Reward_OrderBy = exports.Review_OrderBy = exports.PiiAnswer_OrderBy = exports.OrderDirection = exports.Notification_OrderBy = exports.NotificationType = exports.MilestoneState = exports.Grant_OrderBy = exports.GrantManager_OrderBy = exports.GrantField_OrderBy = exports.GrantFieldInputType = exports.GrantFieldAnswer_OrderBy = exports.GrantFieldAnswerItem_OrderBy = exports.GrantApplication_OrderBy = exports.GrantApplicationRevision_OrderBy = exports.FundsTransfer_OrderBy = exports.FundsTransferType = exports.ApplicationState = exports.ApplicationMilestone_OrderBy = void 0;
exports.useReviewerSubmittedQueryLazyQuery = exports.useReviewerSubmittedQueryQuery = void 0;
const client_1 = require("@apollo/client");
const Apollo = __importStar(require("@apollo/client"));
const defaultOptions = {};
var ApplicationMilestone_OrderBy;
(function (ApplicationMilestone_OrderBy) {
    ApplicationMilestone_OrderBy["Amount"] = "amount";
    ApplicationMilestone_OrderBy["AmountPaid"] = "amountPaid";
    ApplicationMilestone_OrderBy["Application"] = "application";
    ApplicationMilestone_OrderBy["FeedbackDao"] = "feedbackDao";
    ApplicationMilestone_OrderBy["FeedbackDev"] = "feedbackDev";
    ApplicationMilestone_OrderBy["Id"] = "id";
    ApplicationMilestone_OrderBy["State"] = "state";
    ApplicationMilestone_OrderBy["Title"] = "title";
    ApplicationMilestone_OrderBy["UpdatedAtS"] = "updatedAtS";
})(ApplicationMilestone_OrderBy = exports.ApplicationMilestone_OrderBy || (exports.ApplicationMilestone_OrderBy = {}));
var ApplicationState;
(function (ApplicationState) {
    ApplicationState["Approved"] = "approved";
    ApplicationState["Completed"] = "completed";
    ApplicationState["Rejected"] = "rejected";
    ApplicationState["Resubmit"] = "resubmit";
    ApplicationState["Submitted"] = "submitted";
})(ApplicationState = exports.ApplicationState || (exports.ApplicationState = {}));
var FundsTransferType;
(function (FundsTransferType) {
    FundsTransferType["FundsDeposited"] = "funds_deposited";
    FundsTransferType["FundsDisbursed"] = "funds_disbursed";
    FundsTransferType["FundsWithdrawn"] = "funds_withdrawn";
    FundsTransferType["ReviewPaymentDone"] = "review_payment_done";
})(FundsTransferType = exports.FundsTransferType || (exports.FundsTransferType = {}));
var FundsTransfer_OrderBy;
(function (FundsTransfer_OrderBy) {
    FundsTransfer_OrderBy["Amount"] = "amount";
    FundsTransfer_OrderBy["Application"] = "application";
    FundsTransfer_OrderBy["Asset"] = "asset";
    FundsTransfer_OrderBy["CreatedAtS"] = "createdAtS";
    FundsTransfer_OrderBy["Grant"] = "grant";
    FundsTransfer_OrderBy["Id"] = "id";
    FundsTransfer_OrderBy["Milestone"] = "milestone";
    FundsTransfer_OrderBy["Review"] = "review";
    FundsTransfer_OrderBy["Sender"] = "sender";
    FundsTransfer_OrderBy["To"] = "to";
    FundsTransfer_OrderBy["Type"] = "type";
})(FundsTransfer_OrderBy = exports.FundsTransfer_OrderBy || (exports.FundsTransfer_OrderBy = {}));
var GrantApplicationRevision_OrderBy;
(function (GrantApplicationRevision_OrderBy) {
    GrantApplicationRevision_OrderBy["ActorId"] = "actorId";
    GrantApplicationRevision_OrderBy["Application"] = "application";
    GrantApplicationRevision_OrderBy["CreatedAtS"] = "createdAtS";
    GrantApplicationRevision_OrderBy["FeedbackDao"] = "feedbackDao";
    GrantApplicationRevision_OrderBy["FeedbackDev"] = "feedbackDev";
    GrantApplicationRevision_OrderBy["Fields"] = "fields";
    GrantApplicationRevision_OrderBy["Id"] = "id";
    GrantApplicationRevision_OrderBy["Milestones"] = "milestones";
    GrantApplicationRevision_OrderBy["State"] = "state";
    GrantApplicationRevision_OrderBy["Version"] = "version";
})(GrantApplicationRevision_OrderBy = exports.GrantApplicationRevision_OrderBy || (exports.GrantApplicationRevision_OrderBy = {}));
var GrantApplication_OrderBy;
(function (GrantApplication_OrderBy) {
    GrantApplication_OrderBy["ApplicantId"] = "applicantId";
    GrantApplication_OrderBy["CreatedAtS"] = "createdAtS";
    GrantApplication_OrderBy["FeedbackDao"] = "feedbackDao";
    GrantApplication_OrderBy["FeedbackDev"] = "feedbackDev";
    GrantApplication_OrderBy["Fields"] = "fields";
    GrantApplication_OrderBy["Grant"] = "grant";
    GrantApplication_OrderBy["Id"] = "id";
    GrantApplication_OrderBy["Milestones"] = "milestones";
    GrantApplication_OrderBy["Pii"] = "pii";
    GrantApplication_OrderBy["Reviewers"] = "reviewers";
    GrantApplication_OrderBy["Reviews"] = "reviews";
    GrantApplication_OrderBy["State"] = "state";
    GrantApplication_OrderBy["UpdatedAtS"] = "updatedAtS";
    GrantApplication_OrderBy["Version"] = "version";
})(GrantApplication_OrderBy = exports.GrantApplication_OrderBy || (exports.GrantApplication_OrderBy = {}));
var GrantFieldAnswerItem_OrderBy;
(function (GrantFieldAnswerItem_OrderBy) {
    GrantFieldAnswerItem_OrderBy["Answer"] = "answer";
    GrantFieldAnswerItem_OrderBy["Id"] = "id";
    GrantFieldAnswerItem_OrderBy["Value"] = "value";
    GrantFieldAnswerItem_OrderBy["WalletId"] = "walletId";
})(GrantFieldAnswerItem_OrderBy = exports.GrantFieldAnswerItem_OrderBy || (exports.GrantFieldAnswerItem_OrderBy = {}));
var GrantFieldAnswer_OrderBy;
(function (GrantFieldAnswer_OrderBy) {
    GrantFieldAnswer_OrderBy["Field"] = "field";
    GrantFieldAnswer_OrderBy["Id"] = "id";
    GrantFieldAnswer_OrderBy["Values"] = "values";
})(GrantFieldAnswer_OrderBy = exports.GrantFieldAnswer_OrderBy || (exports.GrantFieldAnswer_OrderBy = {}));
var GrantFieldInputType;
(function (GrantFieldInputType) {
    GrantFieldInputType["Array"] = "array";
    GrantFieldInputType["LongForm"] = "long_form";
    GrantFieldInputType["Numeric"] = "numeric";
    GrantFieldInputType["ShortForm"] = "short_form";
})(GrantFieldInputType = exports.GrantFieldInputType || (exports.GrantFieldInputType = {}));
var GrantField_OrderBy;
(function (GrantField_OrderBy) {
    GrantField_OrderBy["Id"] = "id";
    GrantField_OrderBy["InputType"] = "inputType";
    GrantField_OrderBy["IsPii"] = "isPii";
    GrantField_OrderBy["PossibleValues"] = "possibleValues";
    GrantField_OrderBy["Title"] = "title";
})(GrantField_OrderBy = exports.GrantField_OrderBy || (exports.GrantField_OrderBy = {}));
var GrantManager_OrderBy;
(function (GrantManager_OrderBy) {
    GrantManager_OrderBy["Grant"] = "grant";
    GrantManager_OrderBy["Id"] = "id";
    GrantManager_OrderBy["Member"] = "member";
})(GrantManager_OrderBy = exports.GrantManager_OrderBy || (exports.GrantManager_OrderBy = {}));
var Grant_OrderBy;
(function (Grant_OrderBy) {
    Grant_OrderBy["AcceptingApplications"] = "acceptingApplications";
    Grant_OrderBy["Applications"] = "applications";
    Grant_OrderBy["CreatedAtS"] = "createdAtS";
    Grant_OrderBy["CreatorId"] = "creatorId";
    Grant_OrderBy["Deadline"] = "deadline";
    Grant_OrderBy["DeadlineS"] = "deadlineS";
    Grant_OrderBy["Details"] = "details";
    Grant_OrderBy["Fields"] = "fields";
    Grant_OrderBy["Funding"] = "funding";
    Grant_OrderBy["Id"] = "id";
    Grant_OrderBy["Managers"] = "managers";
    Grant_OrderBy["MetadataHash"] = "metadataHash";
    Grant_OrderBy["NumberOfApplications"] = "numberOfApplications";
    Grant_OrderBy["Reward"] = "reward";
    Grant_OrderBy["Rubric"] = "rubric";
    Grant_OrderBy["Summary"] = "summary";
    Grant_OrderBy["Title"] = "title";
    Grant_OrderBy["UpdatedAtS"] = "updatedAtS";
    Grant_OrderBy["Workspace"] = "workspace";
})(Grant_OrderBy = exports.Grant_OrderBy || (exports.Grant_OrderBy = {}));
var MilestoneState;
(function (MilestoneState) {
    MilestoneState["Approved"] = "approved";
    MilestoneState["Requested"] = "requested";
    MilestoneState["Submitted"] = "submitted";
})(MilestoneState = exports.MilestoneState || (exports.MilestoneState = {}));
var NotificationType;
(function (NotificationType) {
    NotificationType["ApplicationAccepted"] = "application_accepted";
    NotificationType["ApplicationCompleted"] = "application_completed";
    NotificationType["ApplicationRejected"] = "application_rejected";
    NotificationType["ApplicationResubmitted"] = "application_resubmitted";
    NotificationType["ApplicationSubmitted"] = "application_submitted";
    NotificationType["FundsDeposited"] = "funds_deposited";
    NotificationType["FundsDisbursed"] = "funds_disbursed";
    NotificationType["FundsWithdrawn"] = "funds_withdrawn";
    NotificationType["MilestoneAccepted"] = "milestone_accepted";
    NotificationType["MilestoneRejected"] = "milestone_rejected";
    NotificationType["MilestoneRequested"] = "milestone_requested";
})(NotificationType = exports.NotificationType || (exports.NotificationType = {}));
var Notification_OrderBy;
(function (Notification_OrderBy) {
    Notification_OrderBy["ActorId"] = "actorId";
    Notification_OrderBy["Content"] = "content";
    Notification_OrderBy["Cursor"] = "cursor";
    Notification_OrderBy["EntityId"] = "entityId";
    Notification_OrderBy["Id"] = "id";
    Notification_OrderBy["RecipientIds"] = "recipientIds";
    Notification_OrderBy["Title"] = "title";
    Notification_OrderBy["Type"] = "type";
})(Notification_OrderBy = exports.Notification_OrderBy || (exports.Notification_OrderBy = {}));
/** Defines the order direction, either ascending or descending */
var OrderDirection;
(function (OrderDirection) {
    OrderDirection["Asc"] = "asc";
    OrderDirection["Desc"] = "desc";
})(OrderDirection = exports.OrderDirection || (exports.OrderDirection = {}));
var PiiAnswer_OrderBy;
(function (PiiAnswer_OrderBy) {
    PiiAnswer_OrderBy["Data"] = "data";
    PiiAnswer_OrderBy["Id"] = "id";
    PiiAnswer_OrderBy["Manager"] = "manager";
})(PiiAnswer_OrderBy = exports.PiiAnswer_OrderBy || (exports.PiiAnswer_OrderBy = {}));
var Review_OrderBy;
(function (Review_OrderBy) {
    Review_OrderBy["Application"] = "application";
    Review_OrderBy["CreatedAtS"] = "createdAtS";
    Review_OrderBy["Data"] = "data";
    Review_OrderBy["Id"] = "id";
    Review_OrderBy["PublicReviewDataHash"] = "publicReviewDataHash";
    Review_OrderBy["Reviewer"] = "reviewer";
    Review_OrderBy["ReviewerId"] = "reviewerId";
})(Review_OrderBy = exports.Review_OrderBy || (exports.Review_OrderBy = {}));
var Reward_OrderBy;
(function (Reward_OrderBy) {
    Reward_OrderBy["Asset"] = "asset";
    Reward_OrderBy["Committed"] = "committed";
    Reward_OrderBy["Id"] = "id";
    Reward_OrderBy["Token"] = "token";
})(Reward_OrderBy = exports.Reward_OrderBy || (exports.Reward_OrderBy = {}));
var RubricItem_OrderBy;
(function (RubricItem_OrderBy) {
    RubricItem_OrderBy["Details"] = "details";
    RubricItem_OrderBy["Id"] = "id";
    RubricItem_OrderBy["MaximumPoints"] = "maximumPoints";
    RubricItem_OrderBy["Title"] = "title";
})(RubricItem_OrderBy = exports.RubricItem_OrderBy || (exports.RubricItem_OrderBy = {}));
var Rubric_OrderBy;
(function (Rubric_OrderBy) {
    Rubric_OrderBy["AddedBy"] = "addedBy";
    Rubric_OrderBy["CreatedAtS"] = "createdAtS";
    Rubric_OrderBy["Id"] = "id";
    Rubric_OrderBy["IsPrivate"] = "isPrivate";
    Rubric_OrderBy["Items"] = "items";
    Rubric_OrderBy["UpdatedAtS"] = "updatedAtS";
})(Rubric_OrderBy = exports.Rubric_OrderBy || (exports.Rubric_OrderBy = {}));
var Social_OrderBy;
(function (Social_OrderBy) {
    Social_OrderBy["Id"] = "id";
    Social_OrderBy["Name"] = "name";
    Social_OrderBy["Value"] = "value";
})(Social_OrderBy = exports.Social_OrderBy || (exports.Social_OrderBy = {}));
var SupportedNetwork;
(function (SupportedNetwork) {
    SupportedNetwork["Chain_4"] = "chain_4";
    SupportedNetwork["Chain_10"] = "chain_10";
    SupportedNetwork["Chain_69"] = "chain_69";
    SupportedNetwork["Chain_137"] = "chain_137";
    SupportedNetwork["Chain_44787"] = "chain_44787";
    SupportedNetwork["Chain_80001"] = "chain_80001";
    SupportedNetwork["Chain_245022926"] = "chain_245022926";
    SupportedNetwork["Chain_1666700000"] = "chain_1666700000";
})(SupportedNetwork = exports.SupportedNetwork || (exports.SupportedNetwork = {}));
var Token_OrderBy;
(function (Token_OrderBy) {
    Token_OrderBy["Address"] = "address";
    Token_OrderBy["Decimal"] = "decimal";
    Token_OrderBy["IconHash"] = "iconHash";
    Token_OrderBy["Id"] = "id";
    Token_OrderBy["Label"] = "label";
    Token_OrderBy["Workspace"] = "workspace";
})(Token_OrderBy = exports.Token_OrderBy || (exports.Token_OrderBy = {}));
var WorkspaceMemberAccessLevel;
(function (WorkspaceMemberAccessLevel) {
    WorkspaceMemberAccessLevel["Admin"] = "admin";
    WorkspaceMemberAccessLevel["Member"] = "member";
    WorkspaceMemberAccessLevel["Owner"] = "owner";
    WorkspaceMemberAccessLevel["Reviewer"] = "reviewer";
})(WorkspaceMemberAccessLevel = exports.WorkspaceMemberAccessLevel || (exports.WorkspaceMemberAccessLevel = {}));
var WorkspaceMember_OrderBy;
(function (WorkspaceMember_OrderBy) {
    WorkspaceMember_OrderBy["AccessLevel"] = "accessLevel";
    WorkspaceMember_OrderBy["ActorId"] = "actorId";
    WorkspaceMember_OrderBy["AddedAt"] = "addedAt";
    WorkspaceMember_OrderBy["AddedBy"] = "addedBy";
    WorkspaceMember_OrderBy["Email"] = "email";
    WorkspaceMember_OrderBy["Id"] = "id";
    WorkspaceMember_OrderBy["LastReviewSubmittedAt"] = "lastReviewSubmittedAt";
    WorkspaceMember_OrderBy["OutstandingReviewIds"] = "outstandingReviewIds";
    WorkspaceMember_OrderBy["PublicKey"] = "publicKey";
    WorkspaceMember_OrderBy["UpdatedAt"] = "updatedAt";
    WorkspaceMember_OrderBy["Workspace"] = "workspace";
})(WorkspaceMember_OrderBy = exports.WorkspaceMember_OrderBy || (exports.WorkspaceMember_OrderBy = {}));
var Workspace_OrderBy;
(function (Workspace_OrderBy) {
    Workspace_OrderBy["About"] = "about";
    Workspace_OrderBy["CoverImageIpfsHash"] = "coverImageIpfsHash";
    Workspace_OrderBy["CreatedAtS"] = "createdAtS";
    Workspace_OrderBy["Id"] = "id";
    Workspace_OrderBy["LogoIpfsHash"] = "logoIpfsHash";
    Workspace_OrderBy["Members"] = "members";
    Workspace_OrderBy["MetadataHash"] = "metadataHash";
    Workspace_OrderBy["OwnerId"] = "ownerId";
    Workspace_OrderBy["Socials"] = "socials";
    Workspace_OrderBy["SupportedNetworks"] = "supportedNetworks";
    Workspace_OrderBy["Title"] = "title";
    Workspace_OrderBy["Tokens"] = "tokens";
    Workspace_OrderBy["UpdatedAtS"] = "updatedAtS";
})(Workspace_OrderBy = exports.Workspace_OrderBy || (exports.Workspace_OrderBy = {}));
var _SubgraphErrorPolicy_;
(function (_SubgraphErrorPolicy_) {
    /** Data will be returned even if the subgraph has indexing errors */
    _SubgraphErrorPolicy_["Allow"] = "allow";
    /** If the subgraph has indexing errors, data will be omitted. The default. */
    _SubgraphErrorPolicy_["Deny"] = "deny";
})(_SubgraphErrorPolicy_ = exports._SubgraphErrorPolicy_ || (exports._SubgraphErrorPolicy_ = {}));
exports.ApplicationUpdateDocument = (0, client_1.gql) `
    query ApplicationUpdate($lowerLimit: Int!, $upperLimit: Int!) {
  grantApplications(
    subgraphError: allow
    where: {updatedAtS_gt: $lowerLimit, updatedAtS_lte: $upperLimit, version_gt: 1, reviewers: []}
  ) {
    id
    state
    version
    projectName: fields(where: {field_ends_with: "projectName"}) {
      values {
        title: value
      }
    }
    createdBy: applicantId
    createdAtS
    grant {
      id
      reward {
        id
        asset
        committed
        token {
          id
        }
      }
      workspace {
        chain: supportedNetworks
      }
    }
    milestones {
      id
      title
      amount
      amountPaid
      feedbackDao
      feedbackDev
      state
    }
  }
}
    `;
/**
 * __useApplicationUpdateQuery__
 *
 * To run a query within a React component, call `useApplicationUpdateQuery` and pass it any options that fit your needs.
 * When your component renders, `useApplicationUpdateQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useApplicationUpdateQuery({
 *   variables: {
 *      lowerLimit: // value for 'lowerLimit'
 *      upperLimit: // value for 'upperLimit'
 *   },
 * });
 */
function useApplicationUpdateQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery(exports.ApplicationUpdateDocument, options);
}
exports.useApplicationUpdateQuery = useApplicationUpdateQuery;
function useApplicationUpdateLazyQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery(exports.ApplicationUpdateDocument, options);
}
exports.useApplicationUpdateLazyQuery = useApplicationUpdateLazyQuery;
exports.DaoCreatedDocument = (0, client_1.gql) `
    query DAOCreated($lowerLimit: Int!, $upperLimit: Int!) {
  workspaces(
    subgraphError: allow
    where: {updatedAtS_gt: $lowerLimit, updatedAtS_lte: $upperLimit}
  ) {
    id
    title
    about
    chain: supportedNetworks
    createdAtS
    members(where: {accessLevel: admin}) {
      actorId
      addedBy {
        actorId
      }
    }
  }
}
    `;
/**
 * __useDaoCreatedQuery__
 *
 * To run a query within a React component, call `useDaoCreatedQuery` and pass it any options that fit your needs.
 * When your component renders, `useDaoCreatedQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDaoCreatedQuery({
 *   variables: {
 *      lowerLimit: // value for 'lowerLimit'
 *      upperLimit: // value for 'upperLimit'
 *   },
 * });
 */
function useDaoCreatedQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery(exports.DaoCreatedDocument, options);
}
exports.useDaoCreatedQuery = useDaoCreatedQuery;
function useDaoCreatedLazyQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery(exports.DaoCreatedDocument, options);
}
exports.useDaoCreatedLazyQuery = useDaoCreatedLazyQuery;
exports.FundSentDocument = (0, client_1.gql) `
    query FundSent($lowerLimit: Int!, $upperLimit: Int!) {
  fundsTransfers(
    where: {createdAtS_gt: $lowerLimit, createdAtS_lte: $upperLimit, type: funds_disbursed}
  ) {
    application {
      id
      projectName: fields(where: {field_ends_with: "projectName"}) {
        values {
          value
        }
      }
      applicantName: fields(where: {field_ends_with: "applicantName"}) {
        values {
          value
        }
      }
      applicantEmail: fields(where: {field_ends_with: "applicantEmail"}) {
        values {
          value
        }
      }
      grant {
        id
        title
        workspace {
          id
          title
          members(where: {accessLevel: admin, email_not: null}) {
            email
            actorId
          }
          tokens {
            id
            label
            address
            decimal
          }
        }
        reward {
          asset
        }
      }
    }
    amount
  }
}
    `;
/**
 * __useFundSentQuery__
 *
 * To run a query within a React component, call `useFundSentQuery` and pass it any options that fit your needs.
 * When your component renders, `useFundSentQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFundSentQuery({
 *   variables: {
 *      lowerLimit: // value for 'lowerLimit'
 *      upperLimit: // value for 'upperLimit'
 *   },
 * });
 */
function useFundSentQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery(exports.FundSentDocument, options);
}
exports.useFundSentQuery = useFundSentQuery;
function useFundSentLazyQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery(exports.FundSentDocument, options);
}
exports.useFundSentLazyQuery = useFundSentLazyQuery;
exports.GrantAppliedToDocument = (0, client_1.gql) `
    query GrantAppliedTo($lowerLimit: Int!, $upperLimit: Int!) {
  grantApplications(
    subgraphError: allow
    where: {updatedAtS_gt: $lowerLimit, updatedAtS_lte: $upperLimit, version: 1}
  ) {
    id
    projectName: fields(where: {field_ends_with: "projectName"}) {
      values {
        title: value
      }
    }
    createdBy: applicantId
    createdAtS
    grant {
      id
      reward {
        id
        asset
        committed
        token {
          id
        }
      }
      workspace {
        chain: supportedNetworks
      }
    }
    milestones {
      id
      title
      amount
      amountPaid
      feedbackDao
      feedbackDev
      state
    }
  }
}
    `;
/**
 * __useGrantAppliedToQuery__
 *
 * To run a query within a React component, call `useGrantAppliedToQuery` and pass it any options that fit your needs.
 * When your component renders, `useGrantAppliedToQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGrantAppliedToQuery({
 *   variables: {
 *      lowerLimit: // value for 'lowerLimit'
 *      upperLimit: // value for 'upperLimit'
 *   },
 * });
 */
function useGrantAppliedToQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery(exports.GrantAppliedToDocument, options);
}
exports.useGrantAppliedToQuery = useGrantAppliedToQuery;
function useGrantAppliedToLazyQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery(exports.GrantAppliedToDocument, options);
}
exports.useGrantAppliedToLazyQuery = useGrantAppliedToLazyQuery;
exports.GrantCreatedDocument = (0, client_1.gql) `
    query GrantCreated($lowerLimit: Int!, $upperLimit: Int!) {
  grants(
    subgraphError: allow
    where: {updatedAtS_gt: $lowerLimit, updatedAtS_lte: $upperLimit}
  ) {
    id
    title
    summary
    workspace {
      id
      chain: supportedNetworks
    }
    creatorId
    createdAtS
    reward {
      id
      committed
      asset
      token {
        id
      }
    }
  }
}
    `;
/**
 * __useGrantCreatedQuery__
 *
 * To run a query within a React component, call `useGrantCreatedQuery` and pass it any options that fit your needs.
 * When your component renders, `useGrantCreatedQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGrantCreatedQuery({
 *   variables: {
 *      lowerLimit: // value for 'lowerLimit'
 *      upperLimit: // value for 'upperLimit'
 *   },
 * });
 */
function useGrantCreatedQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery(exports.GrantCreatedDocument, options);
}
exports.useGrantCreatedQuery = useGrantCreatedQuery;
function useGrantCreatedLazyQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery(exports.GrantCreatedDocument, options);
}
exports.useGrantCreatedLazyQuery = useGrantCreatedLazyQuery;
exports.ReviewerAddedToGrantApplicationDocument = (0, client_1.gql) `
    query ReviewerAddedToGrantApplication($lowerLimit: Int!, $upperLimit: Int!) {
  grantApplications(
    subgraphError: allow
    where: {updatedAtS_gt: $lowerLimit, updatedAtS_lte: $upperLimit, version_gt: 1, reviewers_not: []}
  ) {
    id
    state
    version
    projectName: fields(where: {field_ends_with: "projectName"}) {
      values {
        title: value
      }
    }
    createdBy: applicantId
    createdAtS
    grant {
      id
      reward {
        id
        asset
        committed
        token {
          id
        }
      }
      workspace {
        chain: supportedNetworks
      }
    }
    milestones {
      id
      title
      amount
      amountPaid
      feedbackDao
      feedbackDev
      state
    }
  }
}
    `;
/**
 * __useReviewerAddedToGrantApplicationQuery__
 *
 * To run a query within a React component, call `useReviewerAddedToGrantApplicationQuery` and pass it any options that fit your needs.
 * When your component renders, `useReviewerAddedToGrantApplicationQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useReviewerAddedToGrantApplicationQuery({
 *   variables: {
 *      lowerLimit: // value for 'lowerLimit'
 *      upperLimit: // value for 'upperLimit'
 *   },
 * });
 */
function useReviewerAddedToGrantApplicationQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery(exports.ReviewerAddedToGrantApplicationDocument, options);
}
exports.useReviewerAddedToGrantApplicationQuery = useReviewerAddedToGrantApplicationQuery;
function useReviewerAddedToGrantApplicationLazyQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery(exports.ReviewerAddedToGrantApplicationDocument, options);
}
exports.useReviewerAddedToGrantApplicationLazyQuery = useReviewerAddedToGrantApplicationLazyQuery;
exports.ReviewerInvitedToDaoDocument = (0, client_1.gql) `
    query ReviewerInvitedToDAO($lowerLimit: Int!, $upperLimit: Int!) {
  workspaceMembers(
    subgraphError: allow
    where: {updatedAt_gt: $lowerLimit, updatedAt_lte: $upperLimit, email_not: null, accessLevel: reviewer}
  ) {
    email
    workspace {
      title
      chain: supportedNetworks
    }
    address: actorId
  }
}
    `;
/**
 * __useReviewerInvitedToDaoQuery__
 *
 * To run a query within a React component, call `useReviewerInvitedToDaoQuery` and pass it any options that fit your needs.
 * When your component renders, `useReviewerInvitedToDaoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useReviewerInvitedToDaoQuery({
 *   variables: {
 *      lowerLimit: // value for 'lowerLimit'
 *      upperLimit: // value for 'upperLimit'
 *   },
 * });
 */
function useReviewerInvitedToDaoQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery(exports.ReviewerInvitedToDaoDocument, options);
}
exports.useReviewerInvitedToDaoQuery = useReviewerInvitedToDaoQuery;
function useReviewerInvitedToDaoLazyQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery(exports.ReviewerInvitedToDaoDocument, options);
}
exports.useReviewerInvitedToDaoLazyQuery = useReviewerInvitedToDaoLazyQuery;
exports.ReviewerSubmittedQueryDocument = (0, client_1.gql) `
    query ReviewerSubmittedQuery($lowerLimit: Int!, $upperLimit: Int!) {
  reviews(
    subgraphError: allow
    where: {createdAtS_gt: $lowerLimit, createdAtS_lte: $upperLimit}
  ) {
    id
    application {
      id
    }
    reviewerId
    reviewer {
      actorId
      workspace {
        id
        chain: supportedNetworks
      }
    }
    publicReviewDataHash
  }
}
    `;
/**
 * __useReviewerSubmittedQueryQuery__
 *
 * To run a query within a React component, call `useReviewerSubmittedQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useReviewerSubmittedQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useReviewerSubmittedQueryQuery({
 *   variables: {
 *      lowerLimit: // value for 'lowerLimit'
 *      upperLimit: // value for 'upperLimit'
 *   },
 * });
 */
function useReviewerSubmittedQueryQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useQuery(exports.ReviewerSubmittedQueryDocument, options);
}
exports.useReviewerSubmittedQueryQuery = useReviewerSubmittedQueryQuery;
function useReviewerSubmittedQueryLazyQuery(baseOptions) {
    const options = { ...defaultOptions, ...baseOptions };
    return Apollo.useLazyQuery(exports.ReviewerSubmittedQueryDocument, options);
}
exports.useReviewerSubmittedQueryLazyQuery = useReviewerSubmittedQueryLazyQuery;
