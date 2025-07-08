import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from '../assets/pages/HomePage/HomePage.tsx'
import { CourseProgressProvider } from '../contexts/CourseProgressContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CourseProgressProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </CourseProgressProvider>
  </StrictMode>
)
