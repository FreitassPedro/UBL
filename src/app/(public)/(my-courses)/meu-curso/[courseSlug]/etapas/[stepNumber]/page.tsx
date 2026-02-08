import MyCourse from "@/components/modules/my-courses/my-course/my-course";
import { getAllCourses, getCourse } from "@/services/course.service";
import Course from "@/types/course/course.interface";
import { notFound } from "next/navigation";
import { z } from "zod";

const paramsSchema = z.object({
  courseSlug: z.string().min(1),
  stepNumber: z.coerce.number().int().positive(),
});

export const generateStaticParams = async () => {
  const courses: Course[] = await getAllCourses();
  return courses.flatMap((course) =>
    course.steps.map((step) => ({
      courseSlug: course.slug,
      stepNumber: String(step.number),
    })),
  );
};

export const MyCoursePage = async ({ params: rawParams }: { params: Promise<z.input<typeof paramsSchema>> }) => {
  const params = paramsSchema.safeParse(await rawParams);
  if (!params.success) {
    notFound();
  }

  const { courseSlug, stepNumber } = params.data;
  const course: Course | undefined = await getCourse(courseSlug);
  if (!course || !course.steps.map((step) => step.number).includes(stepNumber)) {
    notFound();
  }

  return <MyCourse stepNumber={stepNumber} course={course} />;
};

export default MyCoursePage;
