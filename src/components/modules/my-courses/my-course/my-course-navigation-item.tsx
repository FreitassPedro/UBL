import {
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import Course from "@/types/course/course.interface";
import Step from "@/types/course/step.interface";
import Link from "next/link";

interface MyCourseNavigationItemProps {
  activeStepNumber: number;
  step: Step;
  course: Course;
}

export const MyCourseNavigationItem = ({ activeStepNumber, step, course }: MyCourseNavigationItemProps) => {
  const isActive: boolean = step.number === activeStepNumber;
  return (
    <NavigationMenuItem key={step.number}>
      <NavigationMenuLink
        asChild
        data-active={isActive}
        className={cn(
          "relative cursor-pointer px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 text-xs sm:text-sm font-medium whitespace-nowrap rounded-lg border border-transparent transition-all duration-200",
          isActive
            ? "bg-zinc-800 text-white shadow-lg shadow-black/20 border border-zinc-700"
            : "text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/50",
        )}
      >
        <Link href={`/meu-curso/${course.slug}/etapas/${step.number}`}>
          <span>Etapa {step.number}</span>
          {isActive && (
            <span className="absolute -bottom-px left-1/2 -translate-x-1/2 w-1/3 h-0.5 bg-blue-500 rounded-full opacity-70" />
          )}
        </Link>
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
};

export default MyCourseNavigationItem;
