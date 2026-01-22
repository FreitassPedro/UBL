import { mapLessonsToMyLessons } from "@/mappers/lesson.mapper";
import type { MySubjectProgress } from "@/types/subject";
import type { Subject } from "@/types/subject";

export function mapSubjectToMySubject(
  subject: Subject,
  completedLessons: Set<string>,
): MySubjectProgress {
  const myLessons = mapLessonsToMyLessons(subject.lessons, completedLessons);
  const completedLessonsInSubject = myLessons.filter(
    (lesson) => lesson.isCompleted,
  ).length;

  const totalLessonsInSubject = myLessons.length;
  const subjectProgress =
    totalLessonsInSubject > 0
      ? Math.round((completedLessonsInSubject / totalLessonsInSubject) * 100)
      : 0;

  const isSubjectCompleted =
    totalLessonsInSubject > 0 &&
    completedLessonsInSubject === totalLessonsInSubject;

  return {
    ...subject,
    lessons: myLessons,
    progress: subjectProgress,
    totalCompleted: completedLessonsInSubject,
    isCompleted: isSubjectCompleted,
  };
}
