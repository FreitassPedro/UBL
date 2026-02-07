import Subject from "@/types/course/subject.interface";

export default interface Step {
  id: number;
  number: number;
  subjects: Subject[];
}
