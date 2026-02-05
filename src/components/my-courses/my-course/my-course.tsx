import MyCourseNavigation from "@/components/my-courses/my-course/my-course-navigation";
import MyStepHeader from "@/components/my-courses/my-step/header/my-step-header";
import Course from "@/types/course";

interface MyCourseProps {
  stepNumber: number;
  course: Course;
}

export const MyCourse = ({ stepNumber, course }: MyCourseProps) => {
  return (
    <div className="flex flex-col w-full space-y-8 mb-10">
      <div className="flex flex-col w-full items-center space-y-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center">
          {course.name}
        </h2>
        <MyCourseNavigation stepNumber={stepNumber} course={course} />
      </div>
      <div className="w-full animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="space-y-6">
          <MyStepHeader stepNumber={stepNumber} course={course} />
          {/* <div className="grid grid-cols-1 gap-3">
            {step.subjects.map((mySubject) => (
              <MyStep key={mySubject.id} mySubject={mySubject} />
            ))}
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default MyCourse;
