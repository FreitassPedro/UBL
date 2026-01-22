import type { Subject } from "@/types/subject";

export interface Step {
  id: number;
  number: number;
  subjects: Subject[];
}
