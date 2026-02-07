import SubjectProgress from "@/types/course-progress/subject-progress.interface";

export default interface StepProgress {
  number: number;
  subjects: SubjectProgress[];
}
