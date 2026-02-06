"use client";

import useMyCourse from "@/hooks/use-my-course";
import Course from "@/types/course";
import MyCourse from "@/types/my-course";

interface StepStatsProgressProps {
  stepNumber: number;
  course: Course;
}

export const StepStatsProgress = ({ stepNumber, course }: StepStatsProgressProps) => {
  const myCourse: MyCourse = useMyCourse(course);
  return (
    <span>
      {
        myCourse.steps[stepNumber].subjects.filter(
          (subject) => subject.progress === 100,
        ).length
      }
    </span>
  );
};

export default StepStatsProgress;
