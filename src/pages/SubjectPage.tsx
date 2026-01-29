import { Lesson } from "@/components/subject/Lesson";
import { SubjectSidebar } from "@/components/subject/SubjectSidebar";
import SubjectPageSkeleton from "@/components/subject/SubjectSkeleton";
import { UserProgressContext } from "@/contexts/MyCurriculumContext";
import useMyCurriculum from "@/hooks/useMyCurriculum";
import { useMyLessons } from "@/hooks/useMyLessons";
import useTitlePage from "@/hooks/useTitlePage";
import type { MyLesson } from "@/types/my-lesson";
import type MySubject from "@/types/my-subject";
import { useContext, useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";

export const SubjectPage = () => {
  const { curriculumSlug, stepId, subjectId } = useParams();
  const parsedStepNumber: number | undefined = stepId ? Number(stepId) : undefined;
  const parsedSubjectId: number | undefined = subjectId ? Number(subjectId) : undefined;
  if (!curriculumSlug || !Number.isFinite(parsedSubjectId) || !Number.isFinite(parsedStepNumber)) {
    throw new Response("Not Found", { status: 404 });
  }

  const { toggleLessonCompletion } = useContext(UserProgressContext);
  const { data: myCurriculum, isLoading: myCurriculumIsLoading } = useMyCurriculum(curriculumSlug);
  const mySubject: MySubject | undefined = useMemo(() => {
    return myCurriculum?.steps
      .find((step) => step.number === parsedStepNumber)
      ?.subjects.find((subject) => subject.id === parsedSubjectId);
  }, [myCurriculum, parsedStepNumber, parsedSubjectId]);

  useTitlePage(mySubject ? `Disciplinas - ${mySubject.name}` : "Disciplinas");

  const { myLessons, isLoading: isLessonsLoading, isSuccess: isLessonsSuccess } = useMyLessons(mySubject);
  const [currentLesson, setCurrentLesson] = useState<MyLesson | undefined>();

  useEffect(() => {
    if (myLessons.length === 0) {
      setCurrentLesson(undefined);
      return;
    }

    setCurrentLesson((current) => {
      if (current) {
        if (myLessons.some((lesson) => lesson.id === current.id)) {
          return current;
        }
      }

      return myLessons[0];
    });
  }, [myLessons]);

  if (myCurriculumIsLoading) {
    return <SubjectPageSkeleton />;
  }

  if (!mySubject || (isLessonsSuccess && myLessons.length === 0)) {
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
          onSelectLesson={setCurrentLesson}
          onToggleCompletion={handleToggleCompletion}
          isLoading={isLessonsLoading}
        />
      </div>
    </div>
  );
};

export default SubjectPage;
