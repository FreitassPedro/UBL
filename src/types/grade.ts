import type { Etapa } from "@/types/etapa";

export interface Grade {
  id: number;
  curriculo: string;
  etapas: Etapa[];
}
