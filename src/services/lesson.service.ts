import "server-only";

import Lesson from "@/types/course/lesson.interface";
import { unstable_cache } from "next/cache";
import { readFile } from "node:fs/promises";
import path from "node:path";

export const getLessons = unstable_cache(
  async (courseSlug: string, stepNumber: number, subjectNumber: number): Promise<Lesson[] | undefined> => {
    try {
      const subjectPath: string = path.join(process.cwd(), "src", "data", courseSlug, "steps", String(stepNumber), `${subjectNumber}.json`);
      return JSON.parse(await readFile(subjectPath, "utf8")) as Lesson[];
    } catch {
      return undefined;
    }
  },
  ["lessons"],
  { revalidate: false },
);
