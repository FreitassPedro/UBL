import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage/HomePage.tsx'
import { CourseProgressProvider } from '../contexts/CourseProgressContext.tsx'
import CoursePage from '../pages/CoursePage/CoursePage.tsx'
import MyCourse from '../pages/MyCourse/MyCourse.tsx'
import { Navbar } from '../components/Navbar.tsx'
import GradeCurricularPage from '../pages/GradePage/GradeCurricularPage.tsx'
import { LoadingProvider } from '../contexts/LoadingContext/LoadingProvider.tsx'
import TestePage from '../pages/Testepage/TestePage.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Navbar />
      <LoadingProvider>
        <CourseProgressProvider>

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/curso/:id" element={<CoursePage />} />
            <Route path='/meu-curso' element={<MyCourse />} />
            <Route path='/grade-curricular' element={<GradeCurricularPage />} />
            <Route path='/teste' element={<TestePage />} />
          </Routes>

        </CourseProgressProvider>
      </LoadingProvider>
    </BrowserRouter>
  </StrictMode >
)
