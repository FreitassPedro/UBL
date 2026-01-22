import type { MySubjectProgress, Subject } from "@/types/subject";

export interface Step {
  id: number;
  number: number;
  subjects: Subject[];
}

export interface MyStepProgress extends Step {
  name: string;
  totalCompleted: number;
  progress: number;
  subjects: MySubjectProgress[];
}
