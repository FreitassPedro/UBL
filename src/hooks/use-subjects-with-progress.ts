"use client";

import useCourseProgressStore from "@/hooks/use-course-progress-store";
import { toProgress } from "@/mappers/course.mapper";
import Course from "@/types/course/course.interface";
import CourseProgress from "@/types/course-progress/course-progress.interface";
import SubjectProgress from "@/types/course-progress/subject-progress.interface";
import Subject from "@/types/course/subject.interface";
import { useQueries } from "@tanstack/react-query";
import { useMemo } from "react";

const fetchCourse = async (courseSlug: string): Promise<Course> => {
  const res = await fetch(`/api/cursos/${courseSlug}`);
  if (!res.ok) throw new Error("Curso não encontrado.");
  return res.json();
};

export const useSubjectsWithProgress = () => {
  const { progressStore: progressesStore } = useCourseProgressStore();
  const courseSlugs: string[] = (Object.keys(progressesStore) ?? []).filter(Boolean);
  const courseQueries = useQueries({
    queries: courseSlugs.map((courseSlug) => ({
      queryKey: ["course", courseSlug],
      queryFn: () => fetchCourse(courseSlug),
      staleTime: Infinity,
      gcTime: Infinity,
      refetchOnMount: false,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
    })),
  });

  const courses: Course[] = useMemo<Course[]>(() => {
    return courseQueries
      .map((query) => query.data)
      .filter((course): course is Course => course !== undefined);
  }, [courseQueries]);

  const courseProgresses: CourseProgress[] = useMemo<CourseProgress[]>(() => {
    return courses.map((course) => toProgress(course, progressesStore));
  }, [courses]);

  const subjectsWithProgress: Array<[Subject, SubjectProgress]> = useMemo<Array<[Subject, SubjectProgress]>>(() => {
    const innerActiveSubjects: Array<[Subject, SubjectProgress]> = [];
    for (const courseProgress of courseProgresses) {
      const course: Course | undefined = courses.find((course) => course.slug === courseProgress.slug);
      if (!course) {
        continue;
      }

      for (const stepProgress of courseProgress.steps) {
        for (const subjectProgress of stepProgress.subjects) {
          if (!subjectProgress.lessons) {
            continue;
          }
          
          const subject: Subject = course.steps[stepProgress.number - 1].subjects[subjectProgress.number - 1];
          innerActiveSubjects.push([subject, subjectProgress]);
        }
      }
    }

    return innerActiveSubjects;
  }, [courses, courseProgresses]);

  return {
    subjectsWithProgress,
    isLoading: courseQueries.some((query) => query.isLoading),
    isError: courseQueries.some((query) => query.isError),
  };
};

export default useSubjectsWithProgress;
