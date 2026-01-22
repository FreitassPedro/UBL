import type { Subject } from "@/types/subject";
import type { Step } from "@/types/step";
import type { Curriculum } from "@/types/curriculum";
import type { Lesson } from "@/types/lesson";

export interface MyLessonProgress extends Lesson {
  isCompleted: boolean;
}

export interface MySubjectProgress extends Subject {
  progress: number;
  totalCompleted: number;
  isCompleted: boolean;
  lessons: MyLessonProgress[]; // Lições dentro desta Cadeira
}

export interface MyStepProgress extends Step {
  name: string;
  totalCompleted: number;
  progress: number;
  subjects: MySubjectProgress[];
}

export interface MyGradeProgress extends Curriculum {
  etapas: MyStepProgress[];
  progress: number;
  isCompleted: boolean;
}
