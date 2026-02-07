import CourseProgress from "@/types/course-progress/course-progress.interface";
import SubjectWithProgress from "@/types/course-with-progress/subject-with-progress.interface";
import Course from "@/types/course/course.interface";
import Step from "@/types/course/step.interface";
import Subject from "@/types/course/subject.interface";

export function toSubjectsWithProgress(courses: Course[], progresses: CourseProgress[]): SubjectWithProgress[] {
  const result: SubjectWithProgress[] = [];
  for (const courseProgress of progresses) {
    const course: Course | undefined = courses.find((course) => course.slug === courseProgress.slug);
    if (!course) {
      continue;
    }

    for (const stepProgress of courseProgress.steps) {
      const step: Step | undefined = course.steps.find((step) => step.number === stepProgress.number);
      if (!step) {
        continue;
      }

      for (const subjectProgress of stepProgress.subjects) {
        if (!subjectProgress.progress) {
          continue;
        }

        const subject: Subject | undefined = step.subjects.find((subject) => subject.number === subjectProgress.number);
        if (!subject) {
          continue;
        }

        result.push({
          ...subject,
          courseSlug: course.slug,
          courseName: course.name,
          courseAlternativeName: course.alternativeName,
          stepNumber: step.number,
          progress: subjectProgress.progress,
        });
      }
    }
  }

  return result;
}
