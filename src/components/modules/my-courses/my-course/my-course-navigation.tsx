import MyCourseNavigationItem from "@/components/modules/my-courses/my-course/my-course-navigation-item";
import {
  NavigationMenu,
  NavigationMenuList
} from "@/components/ui/navigation-menu";
import { ScrollBar } from "@/components/ui/scroll-area";
import Course from "@/types/course/course.interface";
import Step from "@/types/course/step.interface";
import { ScrollArea as ScrollAreaPrimitive } from "radix-ui";

interface MyCourseNavigationProps {
  activeStepNumber: number;
  course: Course;
}

export const MyCourseNavigation = ({ activeStepNumber, course }: MyCourseNavigationProps) => {
  const steps: Step[] = [...course.steps].sort((a, b) => a.number - b.number);
  return (
    <ScrollAreaPrimitive.Root className="w-full">
      <ScrollAreaPrimitive.Viewport className="w-full">
        <NavigationMenu
          viewport={false}
          className="w-max min-w-full lg:min-w-0 mx-auto"
        >
          <NavigationMenuList className="flex w-max min-w-full lg:min-w-0 gap-2 rounded-xl border border-zinc-800 bg-zinc-900/50 p-1 backdrop-blur-sm">
            {steps.map((step) => (
              <MyCourseNavigationItem
                key={step.id}
                activeStepNumber={activeStepNumber}
                step={step}
                course={course}
              />
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </ScrollAreaPrimitive.Viewport>
      <ScrollBar orientation="horizontal" />
      <ScrollAreaPrimitive.Corner />
    </ScrollAreaPrimitive.Root>
  );
};

export default MyCourseNavigation;
