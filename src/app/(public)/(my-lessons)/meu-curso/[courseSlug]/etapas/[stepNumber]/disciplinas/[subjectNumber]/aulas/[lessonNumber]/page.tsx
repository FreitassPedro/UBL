import MySubject from "@/components/modules/my-lessons/my-subject/my-subject";
import { getCourse } from "@/services/course.service";
import { getLessons } from "@/services/lesson.service";
import Course from "@/types/course/course.interface";
import Lesson from "@/types/course/lesson.interface";
import Subject from "@/types/course/subject.interface";
import { notFound } from "next/navigation";

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

  const subject: Subject = course.steps?.[parsedStepNumber - 1].subjects?.[parsedSubjectNumber - 1];
  if (!subject) {
    notFound();
  }

  const lessons: Lesson[] | undefined = await getLessons(courseSlug, parsedStepNumber, subject.id);
  if (!lessons) {
    notFound();
  }

  const lesson: Lesson | undefined = lessons[parsedLessonNumber - 1];
  if (!lesson) {
    notFound();
  }

  return <MySubject subject={subject} lessons={lessons} currentLesson={lesson} />;
};

export default LessonPage;
