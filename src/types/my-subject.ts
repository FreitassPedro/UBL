import type { Subject } from "@/types/subject";

export default interface MySubject extends Subject {
  curriculumAcronym: string;
  curriculumName: string;
  stepNumber: number;
  completedLessons: number;
}
