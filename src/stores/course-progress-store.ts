import CourseProgressStore from "@/types/course-progress/store/course-progress-store.interface";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

interface CourseProgressState {
  progress: CourseProgressStore;
  toggleLessonCompletion: (courseSlug: string, semesterNumber: number, subjectNumber: number, lessonNumber: number) => void;
}

export const useCourseProgressStore = create<CourseProgressState>()(
  immer((set) => ({
    progress: {},
    toggleLessonCompletion: (courseSlug, semesterNumber, subjectNumber, lessonNumber) => {
      set((state) => {
        const course = (state.progress[courseSlug] ??= {});
        const semester = (course[semesterNumber] ??= {});
        const lessons = (semester[subjectNumber] ??= []);

        if (lessons.includes(lessonNumber)) {
          semester[subjectNumber] = lessons.filter((innerLessonNumber) => innerLessonNumber !== lessonNumber);
        } else {
          lessons.push(lessonNumber);
        }

        const nextLessons = semester[subjectNumber];
        if (!nextLessons || nextLessons.length === 0) {
          delete semester[subjectNumber];
        }

        if (Object.keys(semester).length === 0) {
          delete course[semesterNumber];
        }

        if (Object.keys(course).length === 0) {
          delete state.progress[courseSlug];
        }
      });
    },
  })),
);

export default useCourseProgressStore;
