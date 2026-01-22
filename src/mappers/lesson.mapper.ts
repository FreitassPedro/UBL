import type { Lesson } from "@/types/lesson";
import type { MyLessonProgress } from "@/types/progress";

export function mapLessonsToMyLessons(
  lessons: Lesson[],
  completedLessons: Set<string>,
): MyLessonProgress[] {
  return lessons.map((lesson) => ({
    ...lesson,
    isCompleted: completedLessons.has(lesson.id),
  }));
}
