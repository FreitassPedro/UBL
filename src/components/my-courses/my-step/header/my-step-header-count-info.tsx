"use client";

import useMyCourse from "@/hooks/use-my-course";
import Course from "@/types/course";
import MyCourse from "@/types/my-course";

interface MyStepHeaderCountInfoProps {
  stepNumber: number;
  course: Course;
}

export const MyStepHeaderCountInfo = ({ stepNumber, course }: MyStepHeaderCountInfoProps) => {
  const myCourse: MyCourse = useMyCourse(course);
  return <span>{myCourse.steps[stepNumber].subjects.length}</span>;
};

export default MyStepHeaderCountInfo;
