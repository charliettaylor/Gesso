import { build, emptyDir } from "https://deno.land/x/dnt@0.32.0/mod.ts";

await emptyDir("./npm");

await build({
  entryPoints: ["./src/mod.ts"],
  outDir: "./npm",
  shims: {
    // see JS docs for overview and more options
    deno: true,
    undici: true,
  },
  package: {
    // package.json properties
    name: "gesso-canvas-api",
    version: Deno.args[0],
    description: "An ESM library for the Canvas LMS REST API",
    license: "MIT",
    repository: {
      type: "git",
      url: "git+https://github.com/Peekoe/Gesso.git",
    },
    bugs: {
      url: "https://github.com/Peekoe/Gessp/issues",
    },
  },
});

// post build steps
Deno.copyFileSync("README.md", "npm/README.md");
