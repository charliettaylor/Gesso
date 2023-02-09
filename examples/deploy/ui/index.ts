const SOURCE = Deno.readTextFileSync("./examples/deploy/ui/index.svelte");

import { compile } from "https://cdn.skypack.dev/svelte@3.55.1/compiler.mjs?dts";

export function render(): Response {
  const data = compile(SOURCE, {
    filename: "index.svelte",
    generate: "ssr",
    name: "App",
    sveltePath: "https://cdn.skypack.dev/svelte@3.55.1",
    format: "esm",
    css: false,
    dev: false,
  });

  return new Response(
    `<pre><code>` + JSON.stringify(data, null, 2) + `</code></pre>`,
    {
      headers: {
        "content-type": "text/html; charset=utf-8",
      },
    },
  );
}
