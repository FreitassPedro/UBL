import CourseProgress from "@/types/course-progress/course-progress.interface";
import Course from "@/types/course/course.interface";
import CourseProgressStore from "@/types/course-progress/course-progress-store.interface";

export function toCourseProgress(
  courseSlug: string,
  stepNumber: number,
  subjectNumber: number,
  totalLessons: number,
  progressStore: CourseProgressStore,
): CourseProgress {
  const completedLessons = progressStore?.[courseSlug]?.[stepNumber - 1]?.[subjectNumber - 1] ?? [];
  const progress: number = totalLessons
    ? Math.round((completedLessons.length / totalLessons) * 100)
    : 0;

  return {
    slug: courseSlug,
    steps: [
      {
        number: stepNumber,
        subjects: [
          {
            number: subjectNumber,
            lessons: completedLessons,
            progress: progress,
          },
        ],
      },
    ],
  };
}

export function toCourseProgressFromCourse(
  course: Course,
  progressStore: CourseProgressStore,
): CourseProgress {
  const courseProgress = progressStore?.[course.slug] ?? {};
  return {
    slug: course.slug,
    steps: course.steps.map((step) => {
      const stepProgress = courseProgress?.[step.number - 1] ?? {};
      return {
        number: step.number,
        subjects: step.subjects.map((subject) => {
          const subjectProgress = stepProgress?.[subject.number - 1] ?? [];
          return {
            number: subject.number,
            lessons: subjectProgress,
            progress: subject.lessons
              ? Math.round((subjectProgress.length / subject.lessons) * 100)
              : 0,
          };
        }),
      };
    }),
  };
}
