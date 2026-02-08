"use client";

import useCourseProgress from "@/hooks/use-course-progress";
import CourseProgress from "@/types/course-progress/course-progress.interface";
import Course from "@/types/course/course.interface";

interface StepStatsProgressProps {
  stepNumber: number;
  course: Course;
}

export const StepStatsProgress = ({ stepNumber, course }: StepStatsProgressProps) => {
  const courseProgress: CourseProgress = useCourseProgress({ course });
  return (
    <span>
      {courseProgress.steps
        .find((step) => step.number === stepNumber)
        ?.subjects.filter((subject) => subject.progress === 100).length ?? 0}
    </span>
  );
};

export default StepStatsProgress;
