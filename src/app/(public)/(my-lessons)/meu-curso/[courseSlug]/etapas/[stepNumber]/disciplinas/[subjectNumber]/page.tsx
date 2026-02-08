import { getAllCourses, getCourse } from "@/services/course.service";
import { getLessons } from "@/services/lesson.service";
import Course from "@/types/course/course.interface";
import Lesson from "@/types/course/lesson.interface";
import Step from "@/types/course/step.interface";
import Subject from "@/types/course/subject.interface";
import { notFound, redirect } from "next/navigation";

export const generateStaticParams = async () => {
  const courses: Course[] = await getAllCourses();
  const params = await Promise.all(
    courses.flatMap((course) =>
      course.steps.flatMap((step) =>
        step.subjects.map(async (subject) => ({
          courseSlug: course.slug,
          stepNumber: String(step.number),
          subjectNumber: String(subject.number),
        })),
      ),
    ),
  );

  return params.flat();
};

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

  const step: Step | undefined = course.steps.find((courseStep) => courseStep.number === parsedStepNumber);
  const subject: Subject | undefined = step?.subjects.find((stepSubject) => stepSubject.number === parsedSubjectNumber);
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
