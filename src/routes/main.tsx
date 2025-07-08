import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage/HomePage.tsx'
import { CourseProgressProvider } from '../contexts/CourseProgressContext.tsx'
import GradeCurricularPage from '../pages/GradePage/GradeCurricularPage.tsx'
import CoursePage from '../pages/CoursePage/CoursePage.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CourseProgressProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path='/grade-curricular' element={<GradeCurricularPage />} />
          <Route path="/curso/:id" element={<CoursePage />} />
        </Routes>
      </BrowserRouter>
    </CourseProgressProvider>
  </StrictMode>
)
