import api from "@/services/api";
import type { Curriculum } from "@/types/curriculum";

export async function getCurriculum(curriculumAcronym: string): Promise<Curriculum> {
  const { data } = await api.get<Curriculum>(`/curriculums/${curriculumAcronym}/index.json`,);
  return data;
}
