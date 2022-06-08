import { OnChainEvent } from '../configs/events'
import { fetchData } from './fetchData'
import trigger from './trigger'
import "dotenv/config"

const Pino = require('pino')

const logger = Pino()

export async function work(type: OnChainEvent, zapKey: string | undefined) {
// Fetch env variable

  if (process.env.IS_ZAP_TEST === 'true') {
    zapKey = process.env.TEST_ZAP_KEY
  }

	if(!zapKey) {
		logger.info(`${type.toString()}: NO ENV VARIABLE FOUND`)
		return
	}

	// Call graphQL endpoint and get the data from all chains
	const { data, count, toTimestamp } = await fetchData(type)
	// logger.info({ data }, `${type}: Data from all chains`)

  if (count > 0) {
    // Convert the json data to string
    const dataString = JSON.stringify(data)

    // Trigger the Zapier Endpoint
    await trigger(zapKey, dataString, type, toTimestamp)
  } else logger.info(`${type.toString()}: NO DATA FOUND`)
}
