export default interface Subject {
  id: number;
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
