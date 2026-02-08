import { createTRPCRouter } from "@/server/trpc/init";
import { courseRouter } from "@/server/trpc/routers/course";
import { lessonRouter } from "@/server/trpc/routers/lesson";

export const appRouter = createTRPCRouter({
  course: courseRouter,
  lesson: lessonRouter,
});

export type AppRouter = typeof appRouter;
