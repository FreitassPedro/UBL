import { Lesson } from "@/components/subject/Lesson";
import { SubjectSidebar } from "@/components/subject/SubjectSidebar";
import { UserProgressContext } from "@/contexts/MyCurriculumContext";
import useMyCurriculum from "@/hooks/useMyCurriculum";
import { useMyLessons } from "@/hooks/useMyLessons";
import useTitlePage from "@/hooks/useTitlePage";
import SubjectPageSkeleton from "@/components/subject/SubjectSkeleton";
import type MyCurriculum from "@/types/my-curriculum";
import type { MyLesson } from "@/types/my-lesson";
import type MySubject from "@/types/my-subject";
import { useContext, useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";

export const SubjectPage = () => {
  const { curriculumSlug, stepId, subjectId } = useParams();
  const parsedStepNumber: number | undefined = stepId ? Number(stepId) : undefined;
  const parsedSubjectId: number | undefined = subjectId ? Number(subjectId) : undefined;

  if (
    !curriculumSlug ||
    !Number.isFinite(parsedSubjectId) ||
    (parsedStepNumber !== undefined && !Number.isFinite(parsedStepNumber))
  ) {
    throw new Response("Not Found", { status: 404 });
  }

  const { toggleLessonCompletion } = useContext(UserProgressContext);
  const myCurriculumQuery = useMyCurriculum(curriculumSlug);
  const myCurriculum: MyCurriculum | undefined = myCurriculumQuery.data;
  const mySubject: MySubject | undefined = useMemo(() => {
    if (!myCurriculum) {
      return undefined;
    }

    if (parsedStepNumber !== undefined) {
      return myCurriculum.steps
        .find((step) => step.number === parsedStepNumber)
        ?.subjects.find((subject) => subject.id === parsedSubjectId);
    }

    return myCurriculum.steps
      .flatMap((step) => step.subjects)
      .find((subject) => subject.id === parsedSubjectId);
  }, [myCurriculum, parsedStepNumber, parsedSubjectId]);

  useTitlePage(mySubject ? `Disciplinas - ${mySubject.name}` : "Disciplinas");

  const [selectedLessonId, setSelectedLessonId] = useState<number | undefined>();
  const { lessonsQuery, myLessons, isLoading: isLessonsLoading } = useMyLessons(mySubject);

  useEffect(() => {
    if (myLessons.length === 0) {
      return;
    }

    setSelectedLessonId((currentId) => {
      if (currentId) {
        const stillExists = myLessons.some((lesson) => lesson.id === currentId);
        if (stillExists) {
          return currentId;
        }
      }

      return myLessons[0].id;
    });
  }, [myLessons]);

  const currentLesson = useMemo(() => {
    if (myLessons.length === 0) return undefined;
    return myLessons.find((lesson) => lesson.id === selectedLessonId) ?? myLessons[0];
  }, [myLessons, selectedLessonId]);

  if (myCurriculumQuery.isLoading) {
    return <SubjectPageSkeleton />;
  }

  if (!mySubject || (lessonsQuery.isSuccess && myLessons.length === 0)) {
    throw new Response("Not Found", { status: 404 });
  }

  const handleToggleCompletion = (lessonId: number) => {
    if (!mySubject) {
      return;
    }

    toggleLessonCompletion(
      mySubject.curriculumAcronym,
      mySubject.stepNumber,
      mySubject.name,
      lessonId,
    );
  };

  return (
    <div className="h-[calc(100vh-3.5rem)] text-text-main overflow-x-hidden font-inter">
      <div className="w-full h-full min-h-0 py-6 px-4 sm:px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-6 gap-4 items-stretch">
        <Lesson
          mySubject={mySubject}
          lesson={currentLesson}
          isLoading={isLessonsLoading}
        />
        <SubjectSidebar
          mySubject={mySubject}
          lessons={myLessons}
          currentLesson={currentLesson}
          onSelectLesson={(lesson: MyLesson) => setSelectedLessonId(lesson.id)}
          onToggleCompletion={handleToggleCompletion}
          isLoading={isLessonsLoading}
        />
      </div>
    </div>
  );
};

export default SubjectPage;
