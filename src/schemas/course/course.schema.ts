import { stepSchema } from "@/schemas/course/step.schema";
import type Course from "@/types/course/course.interface";
import { z } from "zod";

export const courseSchema: z.ZodType<Course> = z.object({
  id: z.number().int().positive(),
  slug: z.string().min(1),
  name: z.string().min(1),
  alternativeName: z.string().min(1),
  steps: z.array(stepSchema),
});
