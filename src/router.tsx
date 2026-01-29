import { Skeleton } from "@/components/ui/skeleton";
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
          <div className="flex min-h-[40vh] items-center justify-center">
            <Skeleton className="h-6 w-40" />
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
        path: "meu-curso",
        lazy: async () => {
          const { MyCurriculumLayout: MyCurriculumLayout } =
            await import("@/layouts/MyCurriculumLayout");
          return { Component: MyCurriculumLayout };
        },
        children: [
          {
            index: true,
            lazy: async () => ({
              Component: (await import("@/pages/MyCurriculumPage")).default,
            }),
          },
          {
            path: ":curriculumSlug",
            children: [
              {
                index: true,
                lazy: async () => ({
                  Component: (await import("@/pages/MyCurriculumPage")).default,
                }),
              },
              {
                path: "etapas/:stepId",
                children: [
                  {
                    index: true,
                    lazy: async () => ({
                      Component: (await import("@/pages/MyCurriculumPage"))
                        .default,
                    }),
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        path: "meu-curso/:curriculumSlug/etapas/:stepId/disciplinas/:subjectId",
        lazy: async () => ({
          Component: (await import("@/pages/SubjectPage")).default,
        }),
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
