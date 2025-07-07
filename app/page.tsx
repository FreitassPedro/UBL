"use client";

import AboutProject from "@/components/Home/AboutProject";
import AllAvailableCoursesSection from "@/components/Home/AllAvailableCoursesSection";
import CoursesInProgressSection from "@/components/Home/CourseInProgressionSection";
import { GradeCurricularSection } from "@/components/Home/GradeCurricularSection";
import { HomeHeader } from "@/components/Home/HomeHeader";


export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <HomeHeader />
      
      <CoursesInProgressSection />

      <AllAvailableCoursesSection />

      <GradeCurricularSection />

      <AboutProject />

      <footer className="text-center text-sm text-muted-foreground mt-12">
        <p>
          Este site está sendo criado por <strong>@patinhotech, vulgo Marlon Jerold</strong>
        </p>
      </footer>
    </div>
  )
}

