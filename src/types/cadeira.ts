import type { Lesson } from "@/types/lesson";

export interface Cadeira {
  id: number;
  name: string;
  lessons: Lesson[];
  prerequisites: string[];
  url?: string;
  books: {
    name: string;
    url: string;
  }[];
}
