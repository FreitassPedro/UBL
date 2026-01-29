import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";

const NotFoundPage = lazy(() => import("@/pages/NotFoundPage"));

export const router = createBrowserRouter([
  {
    path: "/",
    lazy: async () => {
      const { Layout } = await import("@/layouts/Layout");
      return { Component: Layout };
    },
    errorElement: (
      <Suspense
        fallback={
          <div className="flex min-h-[40vh] items-center justify-center text-zinc-200">
            Carregando...
          </div>
        }
      >
        <NotFoundPage />
      </Suspense>
    ),
    children: [
      {
        index: true,
        lazy: async () => ({
          Component: (await import("@/pages/HomePage")).default,
        }),
      },
      {
        path: "disciplinas/:id",
        lazy: async () => ({
          Component: (await import("@/pages/SubjectPage")).default,
        }),
      },
      {
        path: "meu-curso",
        lazy: async () => {
          const { MyCourseLayout } = await import("@/layouts/MyCourseLayout");
          return { Component: MyCourseLayout };
        },
        children: [
          {
            index: true,
            lazy: async () => ({
              Component: (await import("@/pages/MyCoursePage")).default,
            }),
          },
          {
            path: ":courseSlug",
            lazy: async () => ({
              Component: (await import("@/pages/MyCoursePage")).default,
            }),
          },
          {
            path: ":courseSlug/etapas/:stepId",
            lazy: async () => ({
              Component: (await import("@/pages/MyCoursePage")).default,
            }),
          },
        ],
      },
      {
        path: "grade-curricular",
        lazy: async () => ({
          Component: (await import("@/pages/CurriculumPage")).default,
        }),
      },
    ],
  },
]);
