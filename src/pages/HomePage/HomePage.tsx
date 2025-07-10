import AboutProject from "../../components/Home/AboutProject";
import AllAvailableCoursesSection from "../../components/Home/AllAvailableCoursesSection";
import CoursesInProgressSection from "../../components/Home/CourseInProgressionSection";
import { GradeCurricularSection } from "../../components/Home/GradeCurricularSection";

import { HomeHeader } from "../../components/Home/HomeHeader";
import { Navbar } from "../../components/Navbar";

export default function HomePage() {

    return (
        <div className="bg-gray-900 text-white  min-h-screen">
            <Navbar />
            <div className="container mx-auto px-6 py-8">
                <HomeHeader />

                <CoursesInProgressSection />

                <AllAvailableCoursesSection />

                <GradeCurricularSection />

                <AboutProject />
            </div>
        </div>
    )
}