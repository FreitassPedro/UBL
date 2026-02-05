export default interface Lesson {
  id: number;
  courseId: number;
  stepId: number;
  subjectId: number;
  title: string;
  duration?: number;
  embedUrl: string;
}
