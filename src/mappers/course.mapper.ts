import CourseProgress from "@/types/course-progress/course-progress.interface";
import Course from "@/types/course/course.interface";
import CourseProgressStore from "@/types/course-progress/course-progress-store.interface";
import { toStepProgress } from "@/mappers/step.mapper";
import { toSubjectProgress } from "@/mappers/subject.mapper";
import SubjectProgress from "@/types/course-progress/subject-progress.interface";

export function toCourseProgress(
  course: Course,
  progressStore: CourseProgressStore,
): CourseProgress {
  const courseProgress = progressStore?.[course.slug] ?? {};
  return {
    slug: course.slug,
    steps: course.steps.map((step) => {
      const stepProgress = courseProgress?.[step.number] ?? {};
      return toStepProgress(step, stepProgress);
    }),
  };
}

export function toCourseProgressFromSubjectParams(
  courseSlug: string,
  stepNumber: number,
  subjectNumber: number,
  totalLessons: number,
  progressStore: CourseProgressStore,
): CourseProgress {
  const completedLessons: number[] = progressStore?.[courseSlug]?.[stepNumber]?.[subjectNumber] ?? [];
  const subjectProgress: SubjectProgress = toSubjectProgress(
    { number: subjectNumber, lessons: totalLessons },
    completedLessons,
  );

  return {
    slug: courseSlug,
    steps: [
      {
        number: stepNumber,
        subjects: [subjectProgress],
      },
    ],
  };
}
