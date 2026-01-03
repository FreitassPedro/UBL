import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage/HomePage.tsx'
import { CourseProgressProvider } from '../contexts/CourseProgressContext/CourseProgressContext.tsx'
import CoursePage from '../pages/CoursePage/CoursePage.tsx'
import MyCourse from '../pages/MyCourse/MyCourse.tsx'
import GradeCurricularPage from '../pages/GradePage/GradeCurricularPage.tsx'
import { LoadingProvider } from '../contexts/LoadingContext/LoadingProvider.tsx'
import TestePage from '../pages/Testepage/TestePage1.tsx'
import TesteNodeCourse from '../pages/Testepage/TesteNodeCourse.tsx'
import { MainLayout } from './MainLayout.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <LoadingProvider>
        <CourseProgressProvider>

          <Routes >
            {/* Main Routes */}
            <Route element={<MainLayout />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/curso/:id" element={<CoursePage />} />
              <Route path='/meu-curso' element={<MyCourse />} />
              <Route path='/grade-curricular' element={<GradeCurricularPage />} />
            </Route>

            {/* Teste Routes */}
            <Route>
              <Route path='/teste' element={<TestePage />} />
              <Route path='/teste/node' element={<TesteNodeCourse />} />
            </Route>
          </Routes>
        </CourseProgressProvider>
      </LoadingProvider>
    </BrowserRouter>
  </StrictMode >
)
