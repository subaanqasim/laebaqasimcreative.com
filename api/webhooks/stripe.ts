import Stripe from "stripe";

import { env } from "@lib/env";
import { stripe, webCrypto } from "@lib/stripe";

export const config = {
  runtime: "edge",
};

export default async function handler(req: Request) {
  if (req.method === "POST") {
    const signature = req.headers.get("stripe-signature");

    if (!signature) {
      return new Response("Unauthorized - no Stripe signature", {
        status: 401,
      });
    }

    try {
      const event = await stripe.webhooks.constructEventAsync(
        await req.text(),
        signature,
        env.STRIPE_WEBHOOK_SECRET,
        undefined,
        webCrypto,
      );

      switch (event.type) {
        case "customer.subscription.created":
          console.log("customer subscription created");
          // create trello board
          // create necessary lists
          // add getting started + example cards
          // send welcome email
          // invite purchaser to trello board
          break;

        case "customer.subscription.updated":
          console.log("customer subscription updated");
          break;

        case "customer.subscription.deleted":
          console.log("customer subscription deleted");
          break;

        case "customer.subscription.paused":
          console.log("customer subscription paused");
          break;

        default:
          console.error(`Unhandled Stripe event type: ${event.type}`);
          return new Response("Unhandled Stripe event type", {
            status: 500,
          });
      }
    } catch (err) {
      if (err instanceof Stripe.errors.StripeError) {
        switch (err.type) {
          case "StripeSignatureVerificationError":
            console.error({
              message: err.message,
              stack: err.stack ? err.stack.split("\n") : null,
              err,
            });
            return new Response(
              "Unauthorized - Stripe signature verification failed",
              {
                status: 401,
              },
            );
        }
      }
    }

    return new Response("OK", { status: 200 });
  } else {
    return new Response("Method Not Allowed", {
      status: 405,
      headers: {
        Allow: "POST",
      },
    });
  }
}
