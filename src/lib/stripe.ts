import Stripe from "stripe";

import { env } from "../../src/lib/env";

export const stripe = new Stripe(env.STRIPE_SECRET_KEY, {
  apiVersion: "2022-11-15",
  httpClient: Stripe.createFetchHttpClient(),
});

export const webCrypto = Stripe.createSubtleCryptoProvider();
