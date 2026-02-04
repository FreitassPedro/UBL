import { courses } from "@/app/grade-curricular/page";
import CourseSelector from "@/components/courses/course-selector";
import CoursesHero from "@/components/courses/courses-hero";

export const Layout = async ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-background text-white flex flex-col items-center space-y-4">
      <CoursesHero />
      <CourseSelector courses={courses} />
      {children}
    </div>
  );
};

export default Layout;
