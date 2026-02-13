import type CourseProgressStore from "@/types/course-progress/course-progress-store.interface";
import { z } from "zod";

const numericKeySchema = z.string().regex(/^\d+$/);

export const courseProgressStoreSchema: z.ZodType<CourseProgressStore> = z.record(
  z.string().min(1),
  z.record(
    numericKeySchema,
    z.record(
      numericKeySchema,
      z.array(z.number().int().nonnegative()),
    ),
  ),
);
