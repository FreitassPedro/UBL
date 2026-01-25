import { Lesson } from "@/components/subject/Lesson";
import LessonEmpty from "@/components/subject/LessonEmpty";
import { SubjectSidebar } from "@/components/subject/SubjectSidebar";
import { ProgressContext } from "@/contexts/ProgressContext";
import { CurriculumCC, CurriculumMath } from "@/data/Curriculum";
import useTitlePage from "@/hooks/useTitlePage";
import { mapSubjectToMySubject } from "@/mappers/subject.mapper";
import type { MyLessonProgress } from "@/types/lesson";
import type { MySubjectProgress } from "@/types/subject";
import { useContext, useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";

export const SubjectPage = () => {
  useTitlePage("Disciplinas");
  const { id } = useParams<{ id: string }>();
  const { toggleCompletion, completedLessons } = useContext(ProgressContext);

  const subject: MySubjectProgress | undefined = useMemo(() => {
    if (!id) return;
    const found =
      CurriculumCC.steps
        .flatMap((etapa) => etapa.subjects)
        .find((c) => c.id.toString() === id) ??
      CurriculumMath.steps
        .flatMap((etapa) => etapa.subjects)
        .find((c) => c.id.toString() === id);
    if (!found) return;
    return mapSubjectToMySubject(found, completedLessons);
  }, [completedLessons, id]);

  const [selectedLesson, setSelectedLesson] = useState<
    MyLessonProgress | undefined
  >();

  useEffect(() => {
    if (subject) {
      setSelectedLesson(subject.lessons[0]);
    }
  }, [subject]);

  return (
    <>
      {!subject || subject.lessons.length === 0 ? (
        <LessonEmpty />
      ) : (
        <div className="h-[calc(100vh-3.5rem)] text-text-main overflow-x-hidden font-inter">
          <div className="w-full h-full min-h-0 py-6 px-4 sm:px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-6 gap-4 items-stretch">
            <Lesson subject={subject} lesson={selectedLesson} />
            <SubjectSidebar
              subject={subject}
              selectedLesson={selectedLesson}
              onSelectLesson={(lesson: MyLessonProgress) => setSelectedLesson(lesson)}
              onToggleCompletion={toggleCompletion}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default SubjectPage;
