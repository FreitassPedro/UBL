import "server-only";

import Lesson from "@/types/course/lesson.interface";
import { unstable_cache } from "next/cache";
import { readFile } from "node:fs/promises";
import path from "node:path";

export function getLessons(courseSlug: string, stepNumber: number, subjectNumber: number) {
  return unstable_cache(
    async (): Promise<Lesson[] | undefined> => {
      try {
        const filepath: string = path.join(process.cwd(), "src", "data", courseSlug, "steps", String(stepNumber), `${subjectNumber}.json`);
        return JSON.parse(await readFile(filepath, "utf8")) as Lesson[];
      } catch {
        return undefined;
      }
    },
    ["lesson", courseSlug, String(stepNumber), String(subjectNumber)],
    { revalidate: false },
  )();
}
