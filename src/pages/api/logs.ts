import { APIRoute } from "astro";

export const get: APIRoute = async ({ request }) => {
  console.log("Logs work??");

  console.log("url:", request.url);

  return { status: 200, ok: true, body: "Logs work?" };
};
