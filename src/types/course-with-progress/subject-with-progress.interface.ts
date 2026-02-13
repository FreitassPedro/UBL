import Subject from "@/types/course/subject.interface";

export default interface SubjectWithProgress extends Subject {
  courseSlug: string;
  courseName: string;
  courseAlternativeName: string;
  stepNumber: number;
  progress: number;
}
