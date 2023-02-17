export const PORT = parseInt(Deno.env.get("PORT") || "8080");

export const CANVAS_DOMAIN = Deno.env.get("CANVAS_DOMAIN") ||
  "https://csufullerton.instructure.com";

// https://canvas.instructure.com/doc/api/file.oauth.html#manual-token-generation
export const CANVAS_API_KEY = Deno.env.get("CANVAS_API_KEY")!;
if (!CANVAS_API_KEY) {
  throw new Error("Missing CANVAS_API_KEY env var");
}
