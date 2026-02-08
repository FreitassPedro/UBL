import MySubject from "@/components/modules/my-lessons/my-subject/my-subject";
import { getAllCourses, getCourse } from "@/services/course.service";
import { getLessons } from "@/services/lesson.service";
import Course from "@/types/course/course.interface";
import Lesson from "@/types/course/lesson.interface";
import Step from "@/types/course/step.interface";
import Subject from "@/types/course/subject.interface";
import { notFound } from "next/navigation";

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

export const LessonPage = async ({
  params,
}: {
  params: Promise<{
    courseSlug: string;
    stepNumber: string;
    subjectNumber: string;
    lessonNumber: string;
  }>;
}) => {
  const { courseSlug, stepNumber, subjectNumber, lessonNumber } = await params;
  const parsedStepNumber: number = Number(stepNumber);
  const parsedSubjectNumber: number = Number(subjectNumber);
  const parsedLessonNumber: number = Number(lessonNumber);
  if (!Number.isInteger(parsedStepNumber) || !Number.isInteger(parsedSubjectNumber) || !Number.isInteger(parsedLessonNumber)) {
    notFound();
  }

  const course: Course | undefined = await getCourse(courseSlug);
  if (!course) {
    notFound();
  }

  const step: Step | undefined = course.steps.find((courseStep) => courseStep.number === parsedStepNumber);
  const subject: Subject | undefined = step?.subjects.find((stepSubject) => stepSubject.number === parsedSubjectNumber);
  if (!subject) {
    notFound();
  }

  const lessons: Lesson[] | undefined = await getLessons(courseSlug, parsedStepNumber, subject.id);
  if (!lessons) {
    notFound();
  }

  const lesson: Lesson | undefined = lessons.find((currentLesson) => currentLesson.number === parsedLessonNumber);
  if (!lesson) {
    notFound();
  }

  return <MySubject subject={subject} lessons={lessons} currentLesson={lesson} />;
};

export default LessonPage;
