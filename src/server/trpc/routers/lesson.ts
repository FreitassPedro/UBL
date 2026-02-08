import { createTRPCRouter, publicProcedure } from "@/server/trpc/init";
import { getCourse } from "@/services/course.service";
import { getLessons } from "@/services/lesson.service";
import Course from "@/types/course/course.interface";
import Lesson from "@/types/course/lesson.interface";
import Step from "@/types/course/step.interface";
import Subject from "@/types/course/subject.interface";
import { TRPCError } from "@trpc/server";
import { z } from "zod";

export const lessonRouter = createTRPCRouter({
  bySubject: publicProcedure
    .input(
      z.object({
        courseSlug: z.string(),
        stepNumber: z.number().int(),
        subjectNumber: z.number().int(),
      }),
    )
    .query(async ({ input }): Promise<Lesson[]> => {
      const course: Course | undefined = await getCourse(input.courseSlug);
      if (!course) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "Curso não encontrado.",
        });
      }

      const step: Step | undefined = course.steps.find((step) => step.number === input.stepNumber);
      const subject: Subject | undefined = step?.subjects.find((subject) => subject.number === input.subjectNumber);
      if (!subject) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "Disciplina não encontrada.",
        });
      }

      const lessons: Lesson[] | undefined = await getLessons(input.courseSlug, input.stepNumber, subject.id);
      if (!lessons) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "Aulas não encontradas.",
        });
      }

      return lessons;
    }),
});
