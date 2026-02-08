import { createTRPCRouter, publicProcedure } from "@/server/trpc/init";
import { getCourse } from "@/services/course.service";
import Course from "@/types/course/course.interface";
import { TRPCError } from "@trpc/server";
import { z } from "zod";

export const courseRouter = createTRPCRouter({
  bySlug: publicProcedure
    .input(z.object({ courseSlug: z.string() }))
    .query(async ({ input }): Promise<Course> => {
      const course: Course | undefined = await getCourse(input.courseSlug);
      if (!course) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "Curso não encontrado.",
        });
      }

      return course;
    }),
});
