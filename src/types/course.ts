import Step from "@/types/step";

export default interface Course {
  id: number;
  slug: string;
  name: string;
  steps: Step[];
}
