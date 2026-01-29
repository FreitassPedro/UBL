import MyCourseSelector from "@/components/my-course/MyCourseSelector";
import { MySteps } from "@/components/my-course/MySteps";
import { useMyCurriculum } from "@/hooks/useMyCurriculum";
import useTitlePage from "@/hooks/useTitlePage";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const MyCoursePage = () => {
  const { courseSlug, stepId } = useParams();
  const navigate = useNavigate();

  const curriculumQuery = useMyCurriculum(courseSlug ?? "", Boolean(courseSlug));
  const myCurriculum = curriculumQuery.data;

  const fallbackStepId = myCurriculum?.steps[0]?.id ?? 1;
  const activeStepId =
    Number.isFinite(Number(stepId)) &&
    myCurriculum?.steps.some((step) => step.id === Number(stepId))
      ? Number(stepId)
      : null;

  useTitlePage(
    myCurriculum ? `Meu Curso - ${myCurriculum.name}` : "Meu Curso",
  );

  useEffect(() => {
    if (!courseSlug || !myCurriculum) {
      return;
    }

    if (!activeStepId) {
      navigate(`/meu-curso/${courseSlug}/etapas/${fallbackStepId}`, {
        replace: true,
      });
    }
  }, [courseSlug, myCurriculum, fallbackStepId, navigate, activeStepId]);

  if (!courseSlug) {
    return (
      <div className="flex w-full flex-1 items-center justify-center">
        <MyCourseSelector />
      </div>
    );
  }

  if (curriculumQuery.isLoading) {
    return (
      <div className="flex w-full flex-1 items-center justify-center text-zinc-300">
        Carregando...
      </div>
    );
  }

  if (!myCurriculum) {
    throw new Response("Not Found", { status: 404 });
  }

  if (!activeStepId) {
    return null;
  }

  return (
    <MySteps
      myCurriculum={myCurriculum}
      currentStepId={activeStepId}
      getStepHref={(step) => `/meu-curso/${courseSlug}/etapas/${step}`}
    />
  );
};

export default MyCoursePage;
