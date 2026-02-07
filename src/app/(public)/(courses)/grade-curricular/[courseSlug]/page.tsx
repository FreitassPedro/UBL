import { courses } from "@/app/(public)/(my-courses)/meu-curso/page";
import Course from "@/components/modules/courses/course/course";
import { getCourse } from "@/services/course.service";
import CourseType from "@/types/course/course.interface";
import { notFound } from "next/navigation";

export const generateStaticParams = async () => {
  return courses.map((course) => ({ courseSlug: course.slug }));
};

export const CoursePage = async ({ params }: { params: Promise<{ courseSlug: string }> }) => {
  const { courseSlug } = await params;
  const course: CourseType | undefined = await getCourse(courseSlug);
  if (!course) {
    notFound();
  }

  return <Course course={course} />;
};

export default CoursePage;
