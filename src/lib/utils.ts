import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import type { Cadeira, Etapa, Grade, Lesson } from "../data/gradeCurricular";
import type { MyCadeiraProgress, MyEtapaProgress, MyGradeProgress, MyLesson } from "../data/myCourseProgress";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function mapLessonsToMyLessons(lessons: Lesson[], completedLessons: Set<string>): MyLesson[] {
  return lessons.map((lesson) => ({
    ...lesson,
    isCompleted: completedLessons.has(lesson.id),
  }));
}

export function mapCadeiraToMyCadeira(cadeira: Cadeira, completedLessons: Set<string>): MyCadeiraProgress {

  const myLessons = mapLessonsToMyLessons(cadeira.lessons, completedLessons);

  const completedLessonsInCadeira = myLessons.filter(l => l.isCompleted).length;
  const totalLessonsInCadeira = myLessons.length;

  const cadeiraProgress = totalLessonsInCadeira > 0
    ? (completedLessonsInCadeira / totalLessonsInCadeira) * 100
    : 0;

  const isCadeiraCompleted = totalLessonsInCadeira > 0 && completedLessonsInCadeira === totalLessonsInCadeira;

  return {
    ...cadeira,
    lessons: myLessons,
    progress: cadeiraProgress,
    totalCompleted: completedLessonsInCadeira,
    isCompleted: isCadeiraCompleted,
  };
}

export function mapEtapaToMyEtapa(
  etapa: Etapa,
  completedLessons: Set<string>
): MyEtapaProgress {
  const myCadeiras = etapa.cadeiras.map(c => mapCadeiraToMyCadeira(c, completedLessons));

  const completedCadeirasInEtapa = myCadeiras.filter(c => c.isCompleted).length;
  const totalCadeirasInEtapa = myCadeiras.length;

  const etapaProgress = totalCadeirasInEtapa > 0
    ? (completedCadeirasInEtapa / totalCadeirasInEtapa) * 100
    : 0;

  return {
    ...etapa,
    cadeiras: myCadeiras,
    name: `Etapa ${etapa.number}`,
    progress: etapaProgress,
    totalCompleted: completedCadeirasInEtapa,
  };
}

export function mapGradeToMyGradeProgress(
  grade: Grade,
  completedLessons: Set<string>
): MyGradeProgress {
  // 1. Usa a função auxiliar para transformar cada etapa
  const myEtapas = grade.etapas.map(e => mapEtapaToMyEtapa(e, completedLessons));

  // 2. Calcula o progresso geral da Grade (usando o total de lições para maior precisão)
  let totalLessonsInGrade = 0;
  let completedLessonsInGrade = 0;

  myEtapas.forEach(etapa => {
    etapa.cadeiras.forEach(cadeira => {
      totalLessonsInGrade += cadeira.lessons.length;
      completedLessonsInGrade += cadeira.totalCompleted; // Reutiliza o valor já calculado
    });
  });

  const gradeProgress = totalLessonsInGrade > 0
    ? (completedLessonsInGrade / totalLessonsInGrade) * 100
    : 0;

  const isGradeCompleted = totalLessonsInGrade > 0 && completedLessonsInGrade === totalLessonsInGrade;

  return {
    ...grade,
    etapas: myEtapas,
    progress: gradeProgress,
    isCompleted: isGradeCompleted,
  };
}