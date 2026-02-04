import "server-only";

import Course from "@/types/course";
import { unstable_cache } from "next/cache";
import { readFile } from "node:fs/promises";
import path from "node:path";

export function getCourse(courseSlug: string) {
  return unstable_cache(
    async (): Promise<Course | undefined> => {
      try {
        const filepath = path.join(process.cwd(), "src", "data", courseSlug, "index.json");
        return JSON.parse(await readFile(filepath, "utf8")) as Course;
      } catch {
        return undefined;
      }
    },
    ["course", courseSlug],
    { revalidate: false },
  )();
}
