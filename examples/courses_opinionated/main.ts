import { serve } from "./deps.ts";
import { CANVAS_API_KEY, CANVAS_DOMAIN, PORT } from "./env.ts";
import { makeClient } from "./client.ts";

const client = makeClient({
  domain: CANVAS_DOMAIN,
  apiKey: CANVAS_API_KEY,
});

if (import.meta.main) {
  await serve(handle, {
    port: PORT,
    onListen({ port }) {
      console.log(`Listening on http://localhost:${port}`);
    },
  });
}

async function handle(r: Request): Promise<Response> {
  const url = new URL(r.url);
  if (url.pathname.startsWith("/courses")) {
    const courses = await client.courses.listCourses(
      fromURLParams(url.searchParams),
    );

    const body = JSON.stringify(courses, null, 2);
    return new Response(
      `<!DOCTYPE html>
<html>
<body>

<pre>${body}</pre>

</body>
</html>`,
      {
        headers: {
          "content-type": "text/html; charset=UTF-8",
        },
      },
    );
  }

  return new Response("Not found", {
    status: 404,
  });
}

function fromURLParams(params: URLSearchParams): Record<string, unknown> {
  return [...params].reduce((acc, [key, value]) => {
    try {
      acc[key] = JSON.parse(value);
    } catch {
      acc[key] = value;
    }
    return acc;
  }, {} as Record<string, string>);
}
