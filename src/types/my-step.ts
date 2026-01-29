import type MySubject from "@/types/my-subject";
import type { Step } from "@/types/step";

export default interface MyStep extends Step {
  subjects: MySubject[];
}
