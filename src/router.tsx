import CurriculumGraph from "@/components/node-graphs/CurriculumGraph";
import { CurriculoCC } from "@/data/GradeCurricular";
import { Layout } from "@/layouts/Layout";
import { MyCourseLayout } from "@/layouts/MyCourseLayout";
import CurriculumPage from "@/pages/CurriculumPage";
import HomePage from "@/pages/HomePage";
import MyCoursePage from "@/pages/MyCoursePage";
import SubjectPage from "@/pages/SubjectPage";
import TestePage1 from "@/pages/test/TestePage1";
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
        path: "curso/:id",
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
  {
    path: "/teste",
    children: [
      {
        index: true,
        element: <TestePage1 />,
      },
      {
        path: "node",
        element: <CurriculumGraph grade={CurriculoCC} />,
      },
    ],
  },
]);
