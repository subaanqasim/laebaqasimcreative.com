import { createEnv } from "@t3-oss/env-core";
import { z } from "zod";

export const env = createEnv({
  /*
   * Specify what prefix the client-side variables must have.
   * This is enforced both on type-level and at runtime.
   */
  clientPrefix: "PUBLIC_",
  server: {
    STRIPE_SECRET_KEY: z.string(),
    STRIPE_WEBHOOK_SECRET: z.string(),
    RESEND_API_KEY: z.string(),
    NOTION_SECRET_KEY: z.string(),
    NOTION_DATABASE_ID: z.string(),
    // TRELLO_TOKEN: z.string(),
  },
  client: {
    PUBLIC_BRONZE_MONTHLY: z.string().url(),
    PUBLIC_BRONZE_QUARTERLY: z.string().url(),
    PUBLIC_BRONZE_ANNUALLY: z.string().url(),

    PUBLIC_SILVER_MONTHLY: z.string().url(),
    PUBLIC_SILVER_QUARTERLY: z.string().url(),
    PUBLIC_SILVER_ANNUALLY: z.string().url(),

    PUBLIC_GOLD_MONTHLY: z.string().url(),
    PUBLIC_GOLD_QUARTERLY: z.string().url(),
    PUBLIC_GOLD_ANNUALLY: z.string().url(),

    PUBLIC_PORTAL_URL: z.string().url(),

    PUBLIC_STRIPE_PUBLISHABLE_KEY: z.string(),

    // PUBLIC_TRELLO_API_KEY: z.string(),
  },
  /**
   * What object holds the environment variables at runtime.
   * Often `process.env` or `import.meta.env`
   */
  runtimeEnv: import.meta.env,
});
