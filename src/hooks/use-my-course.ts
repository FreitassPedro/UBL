"use client";

import useMyProgress from "@/hooks/use-my-raw-course";
import Course from "@/types/course";
import MyCourse from "@/types/my-course";
import { useMemo } from "react";

export const useMyCourse = (course: Course) => {
  const { progress } = useMyProgress();
  const myCourse: MyCourse = useMemo<MyCourse>(() => {
    const courseProgress = progress?.[course.slug] ?? {};
    return {
      ...course,
      steps: course.steps.map((step) => {
        const stepProgress = courseProgress?.[step.id] ?? {};
        return {
          ...step,
          subjects: step.subjects.map((subject) => {
            const subjectProgress = stepProgress?.[subject.id] ?? [];
            return {
              lessons: subjectProgress,
              progress: subject.lessons
                ? Math.round((subjectProgress.length / subject.lessons) * 100)
                : 0,
            };
          }),
        };
      }),
    };
  }, [course, progress]);
  return myCourse;
};

export default useMyCourse;
