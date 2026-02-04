import Subject from "@/types/subject";

export default interface Step {
  id: number;
  number: number;
  subjects: Subject[];
}
