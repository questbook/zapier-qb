import { APIGatewayProxyEvent, Context } from "aws-lambda";
import "dotenv/config";
import { OnChainEvent } from "../src/configs/events";
import { work } from "../src/utils/work";

export const run = async (event: APIGatewayProxyEvent, context: Context) => {
  const type = OnChainEvent.ReviewerInvitedToDao;
  const zapKey = process.env.REVIEWER_INVITED_TO_DAO;

  await work(type, zapKey);
};
