import { APIGatewayProxyEvent, Context } from "aws-lambda";
import "dotenv/config";
import { OnChainEvent } from "../src/configs/events";
import { work } from "../src/utils/work";

export const run = async (event: APIGatewayProxyEvent, context: Context) => {
  const type = OnChainEvent.DaoCreated;
  const zapKey = process.env.DAO_CREATED;

  await work(type, zapKey);
};
