import type { APIRoute } from "astro";

export const prerender = false;

export const get: APIRoute = ({ request }) => {
  console.log("Logs work??");

  console.log("edge runtime?: ", globalThis.EdgeRuntime);
  console.log("env: ", import.meta.env.PUBLIC_VERCEL_ENV);

  console.log("url:", request.url);

  console.log("mode: ", import.meta.env.MODE);

  console.log("vercel_url: ", import.meta.env.PUBLIC_VERCEL_URL);
  console.log("vercel_branch_url: ", import.meta.env.PUBLIC_VERCEL_BRANCH_URL);

  return { status: 200, body: "Logs work?" };
};
