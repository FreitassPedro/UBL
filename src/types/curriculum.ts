import type { Step } from "@/types/step";

export interface Curriculum {
  id: number;
  acronym: string;
  name: string;
  steps: Step[];
}
