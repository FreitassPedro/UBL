"use client";

import useCourseProgress from "@/hooks/use-course-progress";
import Course from "@/types/course/course.interface";
import CourseProgress from "@/types/course-progress/course-progress.interface";

interface StepStatsProgressProps {
  stepNumber: number;
  course: Course;
}

export const StepStatsProgress = ({ stepNumber, course }: StepStatsProgressProps) => {
  const courseProgress: CourseProgress = useCourseProgress(course);
  return (
    <span>
      {
        courseProgress.steps[stepNumber].subjects.filter(
          (subject) => subject.progress === 100,
        ).length
      }
    </span>
  );
};

export default StepStatsProgress;
