import { getCourse } from "@/services/course.service";
import { getLessons } from "@/services/lesson.service";
import Course from "@/types/course/course.interface";
import Lesson from "@/types/course/lesson.interface";
import { notFound, redirect } from "next/navigation";

export const SubjectPage = async ({
  params,
}: {
  params: Promise<{
    courseSlug: string;
    stepNumber: string;
    subjectNumber: string;
  }>;
}) => {
  const { courseSlug, stepNumber, subjectNumber } = await params;
  const parsedStepNumber: number = Number(stepNumber);
  const parsedSubjectNumber: number = Number(subjectNumber);
  if (!Number.isInteger(parsedStepNumber) || !Number.isInteger(parsedSubjectNumber)) {
    notFound();
  }

  const course: Course | undefined = await getCourse(courseSlug);
  if (!course) {
    notFound();
  }

  const subject = course.steps?.[parsedStepNumber - 1]?.subjects?.[parsedSubjectNumber - 1];
  if (!subject) {
    notFound();
  }

  const lessons: Lesson[] | undefined = await getLessons(courseSlug, parsedStepNumber, subject.id);
  if (!lessons) {
    notFound();
  }

  const firstLessonNumber: number = Math.min(...lessons.map((lesson) => lesson.number));
  redirect(`/meu-curso/${courseSlug}/etapas/${parsedStepNumber}/disciplinas/${parsedSubjectNumber}/aulas/${firstLessonNumber}`);
};

export default SubjectPage;
