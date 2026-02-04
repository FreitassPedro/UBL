import Course from "@/types/course";
import Link from "next/link";

interface MyCourseNavigationProps {
  course: Course;
  currentStepNumber?: number | string;
}

export const MyCourseNavigation = ({
  course,
  currentStepNumber,
}: MyCourseNavigationProps) => {
  const stepClasses =
    "relative px-4 py-2 text-sm rounded-lg transition-colors whitespace-nowrap border border-transparent hover:bg-zinc-800/70";
  const activeStepNumber = Number(currentStepNumber);
  return (
    <nav className="w-full">
      <div className="w-full overflow-x-auto">
        <ul className="flex w-max min-w-full lg:min-w-0 gap-2 rounded-xl border border-zinc-800 bg-zinc-900/50 p-1 backdrop-blur-sm">
          {course.steps.map((step) => {
            const isActive = Number(step.number) === activeStepNumber;
            const stepHref = `/meu-curso/${course.slug}/etapas/${step.number}`;

            return (
              <li key={step.number}>
                <Link
                  href={stepHref}
                  data-active={isActive}
                  className={`${stepClasses} ${
                    isActive ? "bg-zinc-800/70 text-white" : "text-zinc-200"
                  }`}
                >
                  Etapa {step.number}
                  {isActive && (
                    <span className="absolute -bottom-px left-1/2 -translate-x-1/2 w-1/3 h-0.5 bg-blue-500 rounded-full opacity-70" />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default MyCourseNavigation;
