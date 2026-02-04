import { getCourse } from "@/services/course.service";
import CourseType from "@/types/course";
import MyCourseNavigation from "@/components/my-courses/my-course/my-course-navigation";
import { notFound } from "next/navigation";

export const MyCoursePage = async ({ params }: { params: Promise<{ courseSlug: string; stepNumber: string }> }) => {
  const { courseSlug, stepNumber } = await params;
  const course: CourseType | undefined = await getCourse(courseSlug);
  if (!course) {
    return notFound();
  }

  return (
    <>
      <MyCourseNavigation course={course} currentStepNumber={stepNumber} />
    </>
  );
};

export default MyCoursePage;
