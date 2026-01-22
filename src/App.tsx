import NodeGraphVisualization from "@/components/graphs/NodeGraphVisualization";
import { ProgressProvider } from "@/contexts/ProgressContext";
import { UserProvider } from "@/contexts/UserContext";
import { CurriculoCC } from "@/data/GradeCurricular";
import "@/index.css";
import { Layout } from "@/layouts/Layout";
import CurriculumPage from "@/pages/CurriculumPage";
import HomePage from "@/pages/HomePage";
import MyCoursePage from "@/pages/MyCoursePage";
import SubjectPage from "@/pages/SubjectPage";
import TestePage from "@/pages/test/TestePage1";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export const App = () => {
  return (
    <BrowserRouter>
      <UserProvider>
        <ProgressProvider>
          <Routes>
            {/* Main Routes */}
            <Route element={<Layout />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/curso/:id" element={<SubjectPage />} />
              <Route path="/meu-curso" element={<MyCoursePage />} />
              <Route path="/grade-curricular" element={<CurriculumPage />} />
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
      </UserProvider>
    </BrowserRouter>
  );
};

export default App;
