import type { Curriculum } from "@/types/curriculum";
import type MyStep from "@/types/my-step";

export default interface MyCurriculum extends Curriculum {
  steps: MyStep[];
}
