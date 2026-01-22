import type { MyGradeProgress } from "@/types/progress";
import { mapCurriculumToMyCurriculumProgress } from "@/mappers/curriculum.mapper";
import { CurriculoCC, CurriculoMatematica } from "@/data/GradeCurricular";
import { useMemo } from "react";
import { useCourseProgress } from "@/hooks/useCourseProgress";

export type CourseOption = "Computacao" | "Matematica";

/**
/* Converte curriculo de acordo com o curso selecionado e aulas assistidas
/* @param course string
/* @returns MyGradeProgress
*/
export const useMyCourseData = () => {
  const { completedLessons } = useCourseProgress();
  const computacaoProgress = useMemo(() => {
    return mapCurriculumToMyCurriculumProgress(CurriculoCC, completedLessons);
  }, [completedLessons]);

  const matematicaProgress = useMemo(() => {
    return mapCurriculumToMyCurriculumProgress(
      CurriculoMatematica,
      completedLessons
    );
  }, [completedLessons]);

  const getCourseProgress = (course: string): MyGradeProgress | null => {
    if (course === "Computacao") {
      return computacaoProgress;
    }
    if (course === "Matematica") {
      return matematicaProgress;
    }

    return null;
  };

  return {
    computacaoProgress,
    matematicaProgress,
    getCourseProgress,
  };
};
