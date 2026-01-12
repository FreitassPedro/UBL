import NodeGraphVisualization from "@/components/NodeGraph/NodeGraphVisualization";
import { CourseProgressProvider } from "@/contexts/CourseProgressContext/CourseProgressContext";
import { LoadingProvider } from "@/contexts/LoadingContext/LoadingProvider";
import "@/index.css";
import { Layout } from "@/layouts/Layout";
import CoursePage from "@/pages/CoursePage/CoursePage";
import GradeCurricularPage from "@/pages/GradePage/GradeCurricularPage";
import HomePage from "@/pages/HomePage/HomePage";
import MyCourse from "@/pages/MyCourse/MyCourse";
import TestePage from "@/pages/Testepage/TestePage1";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <LoadingProvider>
        <CourseProgressProvider>
          <Routes>
            {/* Main Routes */}
            <Route element={<Layout />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/curso/:id" element={<CoursePage />} />
              <Route path="/meu-curso" element={<MyCourse />} />
              <Route
                path="/grade-curricular"
                element={<GradeCurricularPage />}
              />
            </Route>

            {/* Teste Routes */}
            <Route>
              <Route path="/teste" element={<TestePage />} />
              <Route path="/teste/node" element={<NodeGraphVisualization />} />
            </Route>
          </Routes>
        </CourseProgressProvider>
      </LoadingProvider>
    </BrowserRouter>
  </StrictMode>
);
