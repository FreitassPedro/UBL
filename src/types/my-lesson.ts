import type { Lesson } from "@/types/lesson";

export interface MyLesson extends Lesson {
  isCompleted: boolean;
}
