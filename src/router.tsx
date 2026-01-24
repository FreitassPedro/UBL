import { Layout } from "@/layouts/Layout";
import { MyCourseLayout } from "@/layouts/MyCourseLayout";
import CurriculumPage from "@/pages/CurriculumPage";
import HomePage from "@/pages/HomePage";
import MyCoursePage from "@/pages/MyCoursePage";
import SubjectPage from "@/pages/SubjectPage";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "disciplinas/:id",
        element: <SubjectPage />,
      },
      {
        path: "meu-curso",
        element: <MyCourseLayout />,
        children: [
          {
            index: true,
            element: <MyCoursePage />,
          },
          {
            path: ":courseSlug",
            element: <MyCoursePage />,
          },
          {
            path: ":courseSlug/etapas/:stepId",
            element: <MyCoursePage />,
          },
        ],
      },
      {
        path: "grade-curricular",
        element: <CurriculumPage />,
      },
    ],
  },
]);
