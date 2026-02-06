import { courses } from "@/app/grade-curricular/page";
import { getCourse } from "@/services/course.service";
import Course from "@/types/course";
import { notFound, redirect } from "next/navigation";

export const generateStaticParams = async () => {
  return courses.map((course) => ({ courseSlug: course.slug }));
};

export const MyCourseRedirectPage = async ({ params }: { params: Promise<{ courseSlug: string }> }) => {
  const { courseSlug } = await params;
  const course: Course | undefined = await getCourse(courseSlug);
  if (!course) {
    notFound();
  }

  if (course.steps.length === 0) {
    throw new Error(`Invalid course configuration: no steps found for course "${courseSlug}".`);
  }

  const firstStepNumber = Math.min(...course.steps.map((step) => step.number));
  redirect(`/meu-curso/${courseSlug}/etapas/${firstStepNumber}`);
};

export default MyCourseRedirectPage;
