import { getLessons } from "@/services/lesson.service";
import type { Lesson } from "@/types/lesson";
import { useQuery } from "@tanstack/react-query";

export const useLessons = (
  curriculumAcronym: string,
  stepNumber: number,
  subjectId: number,
  enabled: boolean = true,
) => {
  return useQuery<Lesson[]>({
    queryKey: ["lessons", curriculumAcronym, stepNumber, subjectId],
    queryFn: () => getLessons(curriculumAcronym, stepNumber, subjectId),
    staleTime: Infinity,
    enabled,
  });
};
