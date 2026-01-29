import { getLessons } from "@/services/lesson.service";
import type { Lesson } from "@/types/lesson";
import { useQuery } from "@tanstack/react-query";

export const useLessons = (
  curriculumAcronym: string,
  stepId: number,
  subjectId: number,
  enabled: boolean = true,
) => {
  return useQuery<Lesson[]>({
    queryKey: ["lessons", curriculumAcronym, stepId, subjectId],
    queryFn: () => getLessons(curriculumAcronym, stepId, subjectId),
    staleTime: Infinity,
    enabled,
  });
};
