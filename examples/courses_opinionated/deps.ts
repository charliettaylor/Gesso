import "https://deno.land/std@0.177.0/dotenv/load.ts";

export type { Course } from "https://deno.land/x/gesso@v0.1.2/types/models.ts";

export {
  Configuration,
  Courses,
} from "https://deno.land/x/gesso@v0.1.2/src/mod.ts";

export { serve } from "https://deno.land/std@0.177.0/http/server.ts";
