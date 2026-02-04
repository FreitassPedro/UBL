import Course from "@/types/course";
import MyStep from "@/types/my-step";

export default interface MyCourse extends Course {
  steps: MyStep[];
}
