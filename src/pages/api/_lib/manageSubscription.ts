import { fauna } from "../../../services/fauna";
import { query as q } from "faunadb";

export async function saveSubscription(
  subscriptionId: string,
  customerId: string
) {
  console.log(subscriptionId, customerId);
}
