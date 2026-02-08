import { subjectSchema } from "@/schemas/course/subject.schema";
import type Step from "@/types/course/step.interface";
import { z } from "zod";

export const stepSchema: z.ZodType<Step> = z.object({
  id: z.number().int().positive(),
  number: z.number().int().positive(),
  subjects: z.array(subjectSchema),
});
