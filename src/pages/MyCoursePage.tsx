import MyCourseSelector from "@/components/my-course/MyCourseSelector";
import { MySteps } from "@/components/my-course/MySteps";
import {
  getCourseOptionFromSlug,
  useMyCourseData,
} from "@/hooks/useMyCourseData";
import useTitlePage from "@/hooks/useTitlePage";
import { useEffect } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";

const MyCoursePage = () => {
  const { getCourseProgress } = useMyCourseData();
  const { courseSlug, stepId } = useParams();
  const navigate = useNavigate();

  const courseProgress = courseSlug
    ? getCourseProgress(getCourseOptionFromSlug(courseSlug) ?? "")
    : null;

  const activeStepId =
    Number.isFinite(Number(stepId)) &&
    courseProgress?.steps.some((step) => step.id === Number(stepId))
      ? Number(stepId)
      : null;

  const fallbackStepId = courseProgress?.steps[0]?.id ?? 1;

  useTitlePage(
    courseProgress ? `Meu Curso - ${courseProgress.curriculo}` : "Meu Curso",
  );

  useEffect(() => {
    if (!courseSlug || !courseProgress) {
      return;
    }

    if (!activeStepId) {
      navigate(`/meu-curso/${courseSlug}/etapas/${fallbackStepId}`, {
        replace: true,
      });
    }
  }, [courseSlug, courseProgress, fallbackStepId, navigate, activeStepId]);

  if (!courseSlug) {
    return <MyCourseSelector />;
  }

  if (!courseProgress) {
    return <Navigate to="/meu-curso" replace />;
  }

  if (!activeStepId) {
    return null;
  }

  return (
    <MySteps
      courseProgress={courseProgress}
      activeStepId={activeStepId}
      getStepHref={(step) => `/meu-curso/${courseSlug}/etapas/${step}`}
    />
  );
};

export default MyCoursePage;
