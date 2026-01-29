import type { Lesson } from "@/types/lesson";

export interface MyLessonProgress extends Lesson {
  completed: boolean;
}
