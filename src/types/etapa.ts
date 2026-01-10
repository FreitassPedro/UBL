import type { Cadeira } from "@/types/cadeira";

export interface Etapa {
  id: number;
  number: number;
  cadeiras: Cadeira[];
}
