import NodeGraphVisualization from "@/components/NodeGraph/NodeGraphVisualization";
import { LoadingProvider } from "@/contexts/LoadingContext";
import { ProgressProvider } from "@/contexts/ProgressContext";
import { CurriculoCC } from "@/data/GradeCurricular";
import "@/index.css";
import { Layout } from "@/layouts/Layout";
import CoursePage from "@/pages/CoursePage/CoursePage";
import GradeCurricularPage from "@/pages/GradePage/GradeCurricularPage";
import HomePage from "@/pages/HomePage/HomePage";
import MyCourse from "@/pages/MyCourse/MyCourse";
import TestePage from "@/pages/Testepage/TestePage1";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export const App = () => {
  return (
    <BrowserRouter>
      <LoadingProvider>
        <ProgressProvider>
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
              <Route
                path="/teste/node"
                element={<NodeGraphVisualization grade={CurriculoCC} />}
              />
            </Route>
          </Routes>
        </ProgressProvider>
      </LoadingProvider>
    </BrowserRouter>
  );
};

export default App;
