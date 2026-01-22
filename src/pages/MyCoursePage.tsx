import MyCourseSelector from "@/components/my-course/MyCourseSelector";
import { MySteps } from "@/components/my-course/MySteps";
import { type CourseOption, useMyCourseData } from "@/hooks/useMyCourseData";
import useTitlePage from "@/hooks/useTitlePage";
import { useState } from "react";

const MyCoursePage = () => {
  useTitlePage("Meu Curso");
  const { getCourseProgress } = useMyCourseData();
  const [selectedCourseType, setSelectedCourseType] =
    useState<CourseOption | null>(null);

  const courseProgress = selectedCourseType
    ? getCourseProgress(selectedCourseType)
    : null;

  return (
    <>
      {courseProgress === null ? (
        <MyCourseSelector onSelect={setSelectedCourseType} />
      ) : (
        <MySteps courseProgress={courseProgress} />
      )}
    </>
  );
};

export default MyCoursePage;
