import type { Cadeira, Etapa, Grade, Lesson } from "./gradeCurricular";

export interface MyLesson extends Lesson {
    isCompleted: boolean;
}

export interface MyCadeiraProgress extends Cadeira {
    progress: number;
    totalCompleted: number;
    isCompleted: boolean;
    lessons: MyLesson[]; // Lições dentro desta Cadeira
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