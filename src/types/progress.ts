import type { Cadeira } from "@/types/cadeira";
import type { Etapa } from "@/types/etapa";
import type { Grade } from "@/types/grade";
import type { Lesson } from "@/types/lesson";

export interface MyLessonProgress extends Lesson {
  isCompleted: boolean;
}

export interface MyCadeiraProgress extends Cadeira {
  progress: number;
  totalCompleted: number;
  isCompleted: boolean;
  lessons: MyLessonProgress[]; // Lições dentro desta Cadeira
}

export interface MyEtapaProgress extends Etapa {
  name: string;
  totalCompleted: number;
  progress: number;
  cadeiras: MyCadeiraProgress[];
}

export interface MyGradeProgress extends Grade {
  etapas: MyEtapaProgress[];
  progress: number;
  isCompleted: boolean;
}
