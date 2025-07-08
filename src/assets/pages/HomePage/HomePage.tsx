import AboutProject from "../../components/Home/AboutProject";
import AllAvailableCoursesSection from "../../components/Home/AllAvailableCoursesSection";
import CoursesInProgressSection from "../../components/Home/CourseInProgressionSection";
import { GradeCurricularSection } from "../../components/Home/GradeCurricularSection";

import { HomeHeader } from "../../components/Home/HomeHeader";

export default function HomePage() {

    return (
        <div className="container mx-auto px-6 py-8 min-h-screen">
            <HomeHeader />

            <CoursesInProgressSection />

            <AllAvailableCoursesSection />

            <GradeCurricularSection />

            <AboutProject />
        </div>
    )
}