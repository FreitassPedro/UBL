import { getCourse } from "@/services/course.service";
import Course from "@/types/course";
import { notFound, redirect } from "next/navigation";

export const MyCourseRedirectPage = async ({ params }: { params: Promise<{ courseSlug: string }> }) => {
  const { courseSlug } = await params;
  const course: Course | undefined = await getCourse(courseSlug);
  if (!course) {
    notFound();
  }

  if (course.steps.length === 0) {
    throw new Error(`Invalid course configuration: no steps found for course "${courseSlug}".`,);
  }

  redirect(`/meu-curso/${courseSlug}/etapas/1`);
};

export default MyCourseRedirectPage;
