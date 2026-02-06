"use client";

import useMyCourse from "@/hooks/use-my-course";
import Course from "@/types/course";
import MyCourse from "@/types/my-course";

interface MyStepCountInfoProps {
  stepNumber: number;
  course: Course;
}

export const MyStepCountInfo = ({ stepNumber, course }: MyStepCountInfoProps) => {
  const myCourse: MyCourse = useMyCourse(course);
  return <span>{myCourse.steps[stepNumber].subjects.length}</span>;
};

export default MyStepCountInfo;
