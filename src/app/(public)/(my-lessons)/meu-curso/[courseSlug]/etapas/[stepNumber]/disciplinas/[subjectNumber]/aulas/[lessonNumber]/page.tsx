import MySubject from "@/components/modules/my-lessons/my-subject/my-subject";
import { getAllCourses, getCourse } from "@/services/course.service";
import { getLessons } from "@/services/lesson.service";
import Course from "@/types/course/course.interface";
import Lesson from "@/types/course/lesson.interface";
import Step from "@/types/course/step.interface";
import Subject from "@/types/course/subject.interface";
import { notFound } from "next/navigation";
import { z } from "zod";

const paramsSchema = z.object({
  courseSlug: z.string().min(1),
  stepNumber: z.coerce.number().int().positive(),
  subjectNumber: z.coerce.number().int().positive(),
  lessonNumber: z.coerce.number().int().positive(),
});

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

          return lessons.map((lesson) => ({
            courseSlug: course.slug,
            stepNumber: String(step.number),
            subjectNumber: String(subject.number),
            lessonNumber: String(lesson.number),
          }));
        }),
      ),
    ),
  );

  return params.flat();
};

export const LessonPage = async ({ params: rawParams }: { params: Promise<z.input<typeof paramsSchema>> }) => {
  const params = paramsSchema.safeParse(await rawParams);
  if (!params.success) {
    notFound();
  }

  const { courseSlug, stepNumber, subjectNumber, lessonNumber } = params.data;
  const course: Course | undefined = await getCourse(courseSlug);
  const step: Step | undefined = course?.steps.find((step) => step.number === stepNumber);
  const subject: Subject | undefined = step?.subjects.find((subject) => subject.number === subjectNumber);
  if (!subject) {
    notFound();
  }

  const lessons: Lesson[] | undefined = await getLessons(courseSlug, stepNumber, subject.id);
  const lesson: Lesson | undefined = lessons?.find((currentLesson) => currentLesson.number === lessonNumber);
  if (!lessons || !lesson) {
    notFound();
  }

  return <MySubject subject={subject} lessons={lessons} currentLesson={lesson} />;
};

export default LessonPage;
