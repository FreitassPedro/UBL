import { Lesson } from "@/components/subject/Lesson";
import { SubjectSidebar } from "@/components/subject/SubjectSidebar";
import { UserProgressContext } from "@/contexts/UserProgressContext";
import { curriculumAcronyms } from "@/constants/curriculums";
import { useLessons } from "@/hooks/useLessons";
import { useCurriculums } from "@/hooks/useCurriculums";
import useTitlePage from "@/hooks/useTitlePage";
import type { MyLessonProgress } from "@/types/my-lesson";
import { useContext, useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";

export const SubjectPage = () => {
  const { id } = useParams<{ id: string }>();
  const { progress, toggleLessonCompletion } = useContext(UserProgressContext);
  const subjectId = Number(id);
  const curriculumQueries = useCurriculums(curriculumAcronyms);
  const isCurriculumLoading = curriculumQueries.some(
    (query) => query.isLoading,
  );

  const subject = useMemo(() => {
    for (const curriculumQuery of curriculumQueries) {
      const curriculum = curriculumQuery.data;
      if (!curriculum) {
        continue;
      }

      for (const step of curriculum.steps) {
        for (const entry of step.subjects) {
          if (entry.id !== subjectId) {
            continue;
          }

          const completedLessonIds =
            progress[curriculum.acronym]?.[step.number]?.[entry.name] ?? [];

          return {
            ...entry,
            curriculumAcronym: curriculum.acronym,
            curriculumName: curriculum.name,
            stepNumber: step.number,
            completedLessons: completedLessonIds.length,
          };
        }
      }
    }

    return undefined;
  }, [
    curriculumQueries,
    subjectId,
    progress,
    ...curriculumQueries.map((query) => query.data),
  ]);

  useTitlePage(subject ? `Disciplinas - ${subject.name}` : "Disciplinas");

  const [selectedLessonId, setSelectedLessonId] = useState<
    number | undefined
  >();

  const lessonsQuery = useLessons(
    subject?.curriculumAcronym ?? "",
    subject?.stepNumber ?? 0,
    subject?.id ?? 0,
    Boolean(subject),
  );

  const lessonsWithProgress: MyLessonProgress[] = useMemo(() => {
    if (!subject || !lessonsQuery.data) {
      return [];
    }

    const completedLessonIds =
      progress[subject.curriculumAcronym]?.[subject.stepNumber]?.[
        subject.name
      ] ?? [];

    return lessonsQuery.data.map((lesson) => ({
      ...lesson,
      completed: completedLessonIds.includes(lesson.id),
    }));
  }, [lessonsQuery.data, progress, subject]);

  useEffect(() => {
    if (lessonsWithProgress.length === 0) {
      return;
    }

    setSelectedLessonId((currentId) => {
      if (currentId) {
        const stillExists = lessonsWithProgress.some(
          (lesson) => lesson.id === currentId,
        );
        if (stillExists) {
          return currentId;
        }
      }

      return lessonsWithProgress[0].id;
    });
  }, [lessonsWithProgress]);

  const selectedLesson = useMemo(() => {
    if (lessonsWithProgress.length === 0) {
      return undefined;
    }

    return (
      lessonsWithProgress.find((lesson) => lesson.id === selectedLessonId) ??
      lessonsWithProgress[0]
    );
  }, [lessonsWithProgress, selectedLessonId]);

  if (!subject && isCurriculumLoading) {
    return (
      <div className="h-[calc(100vh-3.5rem)] text-text-main overflow-x-hidden font-inter flex items-center justify-center">
        Carregando...
      </div>
    );
  }

  if (
    !subject ||
    (lessonsQuery.isSuccess && lessonsWithProgress.length === 0)
  ) {
    throw new Response("Not Found", { status: 404 });
  }

  const handleToggleCompletion = (lessonId: number) => {
    if (!subject) {
      return;
    }

    toggleLessonCompletion(
      subject.curriculumAcronym,
      subject.stepNumber,
      subject.name,
      lessonId,
    );
  };

  return (
    <div className="h-[calc(100vh-3.5rem)] text-text-main overflow-x-hidden font-inter">
      <div className="w-full h-full min-h-0 py-6 px-4 sm:px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-6 gap-4 items-stretch">
        <Lesson
          mySubject={subject}
          lesson={selectedLesson}
          isLoading={lessonsQuery.isLoading}
        />
        <SubjectSidebar
          mySubject={subject}
          lessons={lessonsWithProgress}
          currentLesson={selectedLesson}
          onSelectLesson={(lesson: MyLessonProgress) =>
            setSelectedLessonId(lesson.id)
          }
          onToggleCompletion={handleToggleCompletion}
          isLoading={lessonsQuery.isLoading}
        />
      </div>
    </div>
  );
};

export default SubjectPage;
