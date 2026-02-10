import MySubject from "@/components/modules/my-lessons/my-subject/my-subject";
import { getAllCourses, getCourse } from "@/server/services/course.service";
import { getLessons } from "@/server/services/lesson.service";
import Course from "@/types/course/course.interface";
import Lesson from "@/types/course/lesson.interface";
import Step from "@/types/course/step.interface";
import Subject from "@/types/course/subject.interface";
import { notFound, redirect } from "next/navigation";
import { z } from "zod";

const paramsSchema = z.object({
  courseSlug: z.string().min(1),
  path: z.array(z.string()),
});

const paramsPathSchema = z.union([
  z.tuple([
    z.literal("etapas"),
    z.coerce.number().int().positive(),
    z.literal("disciplinas"),
    z.coerce.number().int().positive(),
  ]),
  z.tuple([
    z.literal("etapas"),
    z.coerce.number().int().positive(),
    z.literal("disciplinas"),
    z.coerce.number().int().positive(),
    z.literal("aulas"),
    z.coerce.number().int().positive(),
  ]),
]);

export const generateStaticParams = async () => {
  const courses: Course[] = await getAllCourses();
  const params = await Promise.all(
    courses.flatMap((course) =>
      course.steps.flatMap((step) =>
        step.subjects.map(async (subject) => {
          const lessons: Lesson[] | undefined = await getLessons(course.slug, step.number, subject.id);
          if (!lessons || lessons.length === 0) {
            return [];
          }

          const basePath = ["etapas", String(step.number), "disciplinas", String(subject.number)];
          const lessonPaths = lessons.map((lesson) => ({
            courseSlug: course.slug,
            path: [...basePath, "aulas", String(lesson.number)],
          }));

          return [
            { courseSlug: course.slug, path: basePath },
            ...lessonPaths,
          ];
        }),
      ),
    ),
  );

  return params.flat();
};

export const MyLessonPage = async ({ params: rawParams }: { params: Promise<z.input<typeof paramsSchema>> }) => {
  const params = paramsSchema.safeParse(await rawParams);
  if (!params.success) {
    notFound();
  }

  const { courseSlug, path: rawParamsPath } = params.data;
  const paramsPath = paramsPathSchema.safeParse(rawParamsPath);
  if (!paramsPath.success) {
    notFound();
  }

  const [, stepNumber, , subjectNumber, , lessonNumber] = paramsPath.data;
  const course: Course | undefined = await getCourse(courseSlug);
  const step: Step | undefined = course?.steps.find((step) => step.number === stepNumber);
  const subject: Subject | undefined = step?.subjects.find((subject) => subject.number === subjectNumber);
  if (!course || !step || !subject) {
    notFound();
  }

  const lessons: Lesson[] | undefined = await getLessons(courseSlug, stepNumber, subject.id);
  if (!lessons || lessons.length === 0) {
    notFound();
  }

  if (!lessonNumber) {
    const firstLessonNumber: number = Math.min(...lessons.map((lesson) => lesson.number));
    redirect(`/meu-curso/${courseSlug}/etapas/${stepNumber}/disciplinas/${subjectNumber}/aulas/${firstLessonNumber}`);
  }

  const lesson: Lesson | undefined = lessons.find((currentLesson) => currentLesson.number === lessonNumber);
  if (!lesson) {
    notFound();
  }

  return (
    <MySubject
      course={course}
      subject={subject}
      lessons={lessons}
      currentLesson={lesson}
    />
  );
};

export default MyLessonPage;
