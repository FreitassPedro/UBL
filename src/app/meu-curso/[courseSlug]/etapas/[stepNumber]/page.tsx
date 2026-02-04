import MyCourse from "@/components/my-courses/my-course/my-course";
import { getCourse } from "@/services/course.service";
import CourseType from "@/types/course";
import { notFound } from "next/navigation";

export const MyCoursePage = async ({ params }: { params: Promise<{ courseSlug: string; stepNumber: string }> }) => {
  const { courseSlug, stepNumber } = await params;
  const course: CourseType | undefined = await getCourse(courseSlug);
  if (!course) {
    notFound();
  }

  return <MyCourse stepNumber={Number(stepNumber)} course={course} />;
};

export default MyCoursePage;
