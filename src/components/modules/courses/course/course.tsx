import CourseHeader from "@/components/modules/courses/course/course-header";
import { Step } from "@/components/modules/courses/step/step";
import ViewportAnchor from "@/components/shared/viewport-anchor";
import CourseType from "@/types/course/course.interface";

interface CourseProps {
  course: CourseType;
}

export const Course = ({ course }: CourseProps) => {
  return (
    <ViewportAnchor className="w-full max-w-6xl px-6 sm:px-8 mb-20 mx-auto container">
      <CourseHeader course={course} />
      <ul className="space-y-4">
        {course.steps.map((step) => {
          return <Step key={step.id} step={step} />;
        })}
      </ul>
    </ViewportAnchor>
  );
};

export default Course;
