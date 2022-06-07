import { APIGatewayProxyEvent, Context } from "aws-lambda";
import "dotenv/config";
import { OnChainEvent } from "../src/configs/events";
import { work } from "../src/utils/work";

export const run = async (event: APIGatewayProxyEvent, context: Context) => {
  const type = OnChainEvent.GrantAppliedTo;
  const zapKey = process.env.GRANT_APPLIED_TO;

  await work(type, zapKey);
};
