import CourseProgress from "@/types/course-progress/course-progress.interface";
import Course from "@/types/course/course.interface";
import CourseProgressStore from "@/types/course-progress/course-progress-store.interface";

export function toProgress(
  course: Course,
  progressesStore: CourseProgressStore,
): CourseProgress {
  const courseProgress = progressesStore?.[course.slug] ?? {};
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
