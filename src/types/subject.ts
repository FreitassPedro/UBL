import type { Lesson, MyLessonProgress } from "@/types/lesson";

export interface Subject {
  id: number;
  name: string;
  lessons: Lesson[];
  prerequisites: string[];
  url?: string;
  duration?: number;
  books: {
    name: string;
    url: string;
  }[];
}

export interface MySubjectProgress extends Subject {
  progress: number;
  totalCompleted: number;
  isCompleted: boolean;
  lessons: MyLessonProgress[]; // Lições dentro desta Cadeira
}
