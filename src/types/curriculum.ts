import type { Step } from "@/types/step";

export interface Curriculum {
  id: number;
  curriculo: string;
  etapas: Step[];
}
