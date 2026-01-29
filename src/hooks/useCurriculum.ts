import { useQuery } from "@tanstack/react-query";
import { getCurriculum } from "@/services/curriculum.service";
import type { Curriculum } from "@/types/curriculum";

export const useCurriculum = (
  curriculumAcronym: string,
  enabled: boolean = true,
) => {
  return useQuery<Curriculum>({
    queryKey: ["curriculum", curriculumAcronym],
    queryFn: () => getCurriculum(curriculumAcronym),
    staleTime: Infinity,
    enabled,
  });
};
