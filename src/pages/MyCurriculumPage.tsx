import MyCurriculumSelector from "@/components/my-curriculum/MyCurriculumSelector";
import { MySteps } from "@/components/my-curriculum/MySteps";
import { useMyCurriculum } from "@/hooks/useMyCurriculum";
import useTitlePage from "@/hooks/useTitlePage";
import MyCurriculumSkeleton from "@/components/my-curriculum/MyCurriculumSkeleton";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const MyCurriculumPage = () => {
  const { curriculumSlug, stepId } = useParams();
  const navigate = useNavigate();

  const { data: myCurriculum, isLoading: myCurriculumIsLoading } = useMyCurriculum(curriculumSlug);
  const fallbackStepNumber: number = myCurriculum?.steps[0]?.number ?? 1;
  const activeStepNumber: number | undefined =
    Number.isFinite(Number(stepId)) &&
    myCurriculum?.steps.some((step) => step.number === Number(stepId))
      ? Number(stepId)
      : undefined;

  useTitlePage(myCurriculum ? `Meu Curso - ${myCurriculum.name}` : "Meu Curso");
  useEffect(() => {
    if (!curriculumSlug || !myCurriculum) {
      return;
    }

    if (!activeStepNumber) {
      navigate(`/meu-curso/${curriculumSlug}/etapas/${fallbackStepNumber}`, {
        replace: true,
      });
    }
  }, [
    curriculumSlug,
    myCurriculum,
    fallbackStepNumber,
    navigate,
    activeStepNumber,
  ]);

  if (!curriculumSlug) {
    return (
      <div className="flex w-full flex-1 items-center justify-center">
        <MyCurriculumSelector />
      </div>
    );
  }

  if (myCurriculumIsLoading) {
    return (
      <div className="flex w-full flex-1 items-center justify-center">
        <div className="w-full max-w-6xl px-6 sm:px-8">
          <MyCurriculumSkeleton />
        </div>
      </div>
    );
  }

  if (!myCurriculum) {
    throw new Response("Not Found", { status: 404 });
  }

  if (!activeStepNumber) {
    return null;
  }

  return (
    <MySteps
      myCurriculum={myCurriculum}
      currentStepId={activeStepNumber}
      getStepHref={(step) => `/meu-curso/${curriculumSlug}/etapas/${step}`}
    />
  );
};

export default MyCurriculumPage;
