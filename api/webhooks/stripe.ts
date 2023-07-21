import { Client as Notion } from "@notionhq/client";
import Stripe from "stripe";

// import { createClient } from "uncreate";

import { env } from "../../src/lib/env";

export const config = {
  runtime: "edge",
};

// const trello = createClient({
//   baseURL: "https://api.trello.com/1",
//   params: {
//     key: env.PUBLIC_TRELLO_API_KEY,
//     token: env.TRELLO_TOKEN,
//   },
//   async onRequestError({ request, error }) {
//     console.log("[fetch request error]", request, error);
//   },
//   async onResponseError({ request, error }) {
//     console.log("[fetch response error]", request, error);
//   },
// });

// function hexStringToUint8Array(hexString: string) {
//   const bytes = new Uint8Array(Math.ceil(hexString.length / 2));
//   for (let i = 0; i < bytes.length; i++)
//     bytes[i] = parseInt(hexString.substr(i * 2, 2), 16);
//   return bytes;
// }

function recurringRevenue(
  subscription: Stripe.Subscription,
  type: "MRR" | "ARR",
) {
  const amount = subscription.items.data[0]?.plan.amount! / 100;
  const interval = subscription.items.data[0]?.plan.interval;
  const intervalCount = subscription.items.data[0]?.plan.interval_count!;

  if (type === "MRR") {
    switch (interval) {
      case "month":
        return amount / intervalCount;
      case "year":
        return amount / 12;
      default:
        return amount;
    }
  }

  switch (interval) {
    case "month":
      return intervalCount === 3 ? amount * 4 : amount * 12;
    case "year":
      return amount;
    default:
      return amount;
  }
}

export default async function handler(req: Request) {
  if (req.method === "POST") {
    const signature = req.headers.get("stripe-signature");

    if (!signature) {
      return new Response("Unauthorized - no Stripe signature", {
        status: 401,
      });
    }

    try {
      // const stripe = new Stripe(env.STRIPE_SECRET_KEY, {
      //   apiVersion: "2022-11-15",
      //   httpClient: Stripe.createFetchHttpClient(),
      // });
      // const webCrypto =  Stripe.createSubtleCryptoProvider();
      //
      // const event = await stripe.webhooks.constructEventAsync(
      //   await req.text(),
      //   signature,
      //   env.STRIPE_WEBHOOK_SECRET,
      //   undefined,
      //   webCrypto,
      // );

      // const elements = signature.split(",");
      // const timestamp = elements[0]?.split("=")[1];
      // const signatureHash = elements[1]?.split("=")[1];

      // const encoder = new TextEncoder();
      // const cryptoKey = await window.crypto.subtle.importKey(
      //   "raw",
      //   encoder.encode(env.STRIPE_WEBHOOK_SECRET),
      //   { name: "HMAC", hash: "SHA_256" },
      //   false,
      //   ["verify"],
      // );
      //
      // const verified = await window.crypto.subtle.verify(
      //   { name: "HMAC" },
      //   cryptoKey,
      //   hexStringToUint8Array(signatureHash!),
      //   encoder.encode(`${timestamp}.${await req.text()}`),
      // );
      //
      // if (!verified) {
      //   console.log("NOT VERIFIED");
      // }
      //
      // if (verified) {
      //   console.log("VERIFIED");
      // }

      const event = (await req.json()) as Stripe.Event;

      switch (event.type) {
        case "checkout.session.completed":
          console.log("Customer subscription created");

          const checkoutData = event.data.object as Stripe.Checkout.Session;

          // const subscriptionData = await stripe.subscriptions.retrieve(
          //   checkoutData.subscription!.toString(),
          // );

          const subscriptionData = (await (
            await fetch(
              `https://api.stripe.com/v1/subscriptions/${checkoutData.subscription}`,
              {
                headers: {
                  Authorization: `Bearer ${env.STRIPE_SECRET_KEY}`,
                  "Stripe-Version": "2022-11-15",
                },
              },
            )
          ).json()) as Stripe.Subscription;

          const formattedPlan =
            subscriptionData.items.data[0]!.plan.nickname!.toLowerCase()
              .split(" ")
              .map((word) => word.charAt(0).toUpperCase() + word.substring(1))
              .join(" ");

          const email = await fetch("https://api.resend.com/emails", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${env.RESEND_API_KEY}`,
            },
            body: JSON.stringify({
              from: "Laeba Qasim <laeba@laebaqasimcreative.com>",
              to: [checkoutData.customer_details?.email],
              subject: "Welcome to Photography as a Service",
              html: `<!DOCTYPE html>
                      <html>
                      <head>
                          <meta charset="UTF-8">
                          <title>Welcome to Photography as a Service</title>
                          <style>
                              body {
                                  font-family: Arial, sans-serif;
                              }
                          </style>
                      </head>
                      <body>
                          <p>Hey${
                            checkoutData.customer_details?.name
                              ? ` ${checkoutData.customer_details.name}`
                              : ""
                          },</p><p>Thanks for subscribing to the <strong>${formattedPlan}</strong> <em>photography as a service</em> plan!</p><p>You'll receive an invite to your personal Trello board within the next few hours which will include the onboarding process.</p><p></p><p>Laeba<br>Founder, <a target="_blank" rel="noopener noreferrer nofollow" href="https://laebaqasimcreative.com">Laeba Qasim Creative</a></p><p>P.S. Still have questions or concerns after the onboarding? <a target="_blank" rel="noopener noreferrer nofollow" href="https://cal.com/laebaqasimcreative/30min">Book a call with me</a>.</p>
                      </body>
                      </html>
                      `,
            }),
          });

          if (email.ok) {
            console.log("Welcome email successfully sent");
          } else {
            const data = await email.json();
            console.error("Failed to send welcome email");
            return new Response(
              JSON.stringify({ ...data, msg: "Failed to send welcome email" }),
              { status: 500 },
            );
          }

          const notion = new Notion({
            auth: env.NOTION_SECRET_KEY,
          });
          await notion.pages.create({
            parent: {
              type: "database_id",
              database_id: env.NOTION_DATABASE_ID,
            },
            properties: {
              Name: {
                type: "title",
                title: [
                  {
                    text: {
                      content: checkoutData.custom_fields[0]?.text?.value
                        ? checkoutData.custom_fields[0]?.text?.value
                        : checkoutData.customer_details?.name ??
                          "{{ CLIENT/COMPANY NAME }}",
                    },
                  },
                ],
              },

              Status: { type: "select", select: { name: "No active request" } },

              Plan: { type: "select", select: { name: formattedPlan } },

              "Plan status": { type: "select", select: { name: "Active" } },

              "Renewal date": {
                type: "date",
                date: {
                  start: new Date(
                    subscriptionData.current_period_end * 1000,
                  ).toISOString(),
                },
              },
              MRR: { number: recurringRevenue(subscriptionData, "MRR") },
              ARR: { number: recurringRevenue(subscriptionData, "ARR") },
            },
          });

          console.log("Notion client page created successfully!");

          return new Response("OK", { status: 200 });

        // create trello board
        // const workspace = await trello.boards!().get({name: data.});
        // console.log(workspace);
        // create necessary lists
        // add powerups (list limit)
        // add getting started + template cards
        // invite purchaser to trello board

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