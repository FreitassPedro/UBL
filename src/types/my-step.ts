import MySubject from "@/types/my-subject";
import Step from "@/types/step";

export default interface MyStep extends Step {
  subjects: MySubject[];
}