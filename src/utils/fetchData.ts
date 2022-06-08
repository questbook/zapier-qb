import { ALL_SUPPORTED_CHAIN_IDS, SupportedChainId } from '../configs/chains'
import { OnChainEvent } from '../configs/events'
import { ApplicationUpdateDocument, DaoCreatedDocument, FundSentDocument, GrantAppliedToDocument, GrantCreatedDocument, ReviewerAddedToGrantApplicationDocument, ReviewerInvitedToDaoDocument, ReviewerSubmittedReviewDocument } from '../generated/graphql'
import { getKey } from './chainUtils'
import formatData from './dataFormat'
import { getItem } from './db'
import { executeQuery } from './query'

const Pino = require('pino')

const logger = Pino()

export async function fetchData(type: OnChainEvent) {
	let documentNode = null
	switch (type) {
	case OnChainEvent.DaoCreated:
		documentNode = DaoCreatedDocument
		break

	case OnChainEvent.GrantCreated:
		documentNode = GrantCreatedDocument
		break

	case OnChainEvent.GrantAppliedTo:
		documentNode = GrantAppliedToDocument
		break

	case OnChainEvent.ApplicationUpdate:
		documentNode = ApplicationUpdateDocument
		break

	case OnChainEvent.FundSent:
		documentNode = FundSentDocument
		break

	case OnChainEvent.ReviewerInvitedToDao:
		documentNode = ReviewerInvitedToDaoDocument
		break

	case OnChainEvent.ReviewerAddedToGrantApplication:
		documentNode = ReviewerAddedToGrantApplicationDocument
		break

	case OnChainEvent.ReviewerSubmittedReview:
		documentNode = ReviewerSubmittedReviewDocument
		break

	default:
		break
	}

	if(!documentNode) {
		logger.info(`NO DOCUMENT NODE FOUND FOR ${type.toString()}`)
		return null
	}

	const time = new Date()
	const toTimestamp = Math.floor(time.getTime() / 1000)
	let data = []
	let count = 0
	for(const chainId of ALL_SUPPORTED_CHAIN_IDS) {
		let fromTimestamp = await getItem(getKey(type))

		if(fromTimestamp === -1) {
			fromTimestamp = 0
		}

		logger.info({ fromTimestamp, toTimestamp, chainId }, `${type.toString()}: Fetching data from graphQL`)
		const result = await executeQuery(
			chainId,
			fromTimestamp,
			toTimestamp,
			documentNode,
			type
		)
		const ret = await formatData(type, result)
		count += ret.length
		data = [...data, ...ret]
	}

	return { data, count, toTimestamp }
}
