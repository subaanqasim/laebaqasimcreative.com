import { APIRoute } from "astro";

export const get: APIRoute = ({ request }) => {
  console.log("Logs work??");

  console.log("edge runtime?: ", globalThis.EdgeRuntime);

  console.log("url:", request.url);

  return { status: 200, ok: true, body: "Logs work?" };
};
