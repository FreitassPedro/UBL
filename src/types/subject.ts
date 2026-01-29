export interface Subject {
  id: number;
  slug: string;
  name: string;
  prerequisites: string[];
  url: string;
  duration?: number;
  lessons: number;
  books: {
    name: string;
    url: string;
  }[];
}
