import MyCourse from "@/components/modules/my-courses/my-course/my-course";
import { getCourse } from "@/services/course.service";
import Course from "@/types/course";
import { notFound } from "next/navigation";

export const MyCoursePage = async ({ params }: { params: Promise<{ courseSlug: string; stepNumber: string }> }) => {
  const { courseSlug, stepNumber } = await params;
  const course: Course | undefined = await getCourse(courseSlug);

  const parsedStepNumber: number = Number(stepNumber);
  if (!course || !Number.isInteger(parsedStepNumber)) {
    notFound();
  }

  return <MyCourse stepNumber={parsedStepNumber} course={course} />;
};

export default MyCoursePage;
