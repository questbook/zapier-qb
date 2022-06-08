import 'dotenv/config'
import { OnChainEvent } from '../configs/events'
import fetch from "cross-fetch"
import { setItem } from './db'
import { getKey } from './chainUtils'
import { SupportedChainId } from '../configs/chains'

const Pino = require('pino')

const logger = Pino()

async function trigger(key: string, data: string, type: OnChainEvent, toTimestamp: number) {
	const appId = process.env.APP_ID
	if(!appId) {
		return
	}

	const url = `https://hooks.zapier.com/hooks/catch/${appId}/${key}/`

	const requestOptions = {
		method: 'POST',
		headers: {'Content-Type': 'application/json'},
		body: data,
	}

	logger.info({ url }, `${type.toString()}: Triggering Zapier URL`)
	// logger.info({ data }, `${type.toString()}: Triggering Zapier BODY`)

	const response = await fetch(url, requestOptions)
	const { status } = response
	const json = await response.json()
	logger.info({ status }, `${type}: Reponse status`)
	logger.info({ json }, `${type}: Response json`)
	if (status === 200 && json.status === 'success') {
		await setItem(getKey(type), toTimestamp)
	}
}

export default trigger
