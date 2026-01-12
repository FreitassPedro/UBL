import type { MyGradeProgress } from "@/types/progress";
import { mapGradeToMyGradeProgress } from "./mappers";
import { CurriculoCC, CurriculoMatematica } from "@/data/GradeCurricular";
import { useCourseProgress } from "@/contexts/CourseProgressContext/CourseProgressContext";
import { useMemo } from "react";

export type CourseOption = 'Computacao' | 'Matematica';

export const useMyCourseData = () => {

    const { completedLessons } = useCourseProgress();

    const computacaoProgress = useMemo(() => {
        return mapGradeToMyGradeProgress(CurriculoCC, completedLessons  );
    }, [completedLessons]);

    const matematicaProgress = useMemo(() => {
        return mapGradeToMyGradeProgress(CurriculoMatematica, completedLessons);
    }, [completedLessons]);

    const getCourseProgress = (course: string): MyGradeProgress | null => {
        if (course === 'Computacao') {
            return computacaoProgress;
        }
        if (course === 'Matematica') {
            return matematicaProgress;
        }

        return null;
    };

    return {
        computacaoProgress,
        matematicaProgress,
        getCourseProgress,
    }

};