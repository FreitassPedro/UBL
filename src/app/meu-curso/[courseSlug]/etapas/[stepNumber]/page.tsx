import { getCourse } from "@/services/course.service";
import CourseType from "@/types/course";
import { notFound } from "next/navigation";

export const MyCoursePage = async ({ params }: { params: Promise<{ courseSlug: string; stepNumber: string }> }) => {
  const { courseSlug, stepNumber } = await params;
  const course: CourseType | undefined = await getCourse(courseSlug);
  if (!course) {
    return notFound();
  }

  return <></>;
};

export default MyCoursePage;
