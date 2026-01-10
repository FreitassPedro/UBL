import type { Lesson } from "@/types/lesson";

export interface Cadeira {
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
