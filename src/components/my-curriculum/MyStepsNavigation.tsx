import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { ScrollBar } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import type MyStep from "@/types/my-step";
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area";
import { Link } from "react-router-dom";

interface MyStepsNavigationProps {
  mySteps: MyStep[];
  currentStep: number;
  getStepHref?: (stepId: number) => string;
  onSelect?: (stepId: number) => void;
}

const MyStepsNavigation = ({
  mySteps,
  currentStep,
  getStepHref,
  onSelect,
}: MyStepsNavigationProps) => (
  <ScrollAreaPrimitive.Root className="w-full">
    <ScrollAreaPrimitive.Viewport className="w-full">
      <NavigationMenu
        viewport={false}
        className="w-max min-w-full lg:min-w-0 mx-auto"
      >
        <NavigationMenuList className="flex w-max min-w-full lg:min-w-0 gap-2 rounded-xl border border-zinc-800 bg-zinc-900/50 p-1 backdrop-blur-sm">
          {mySteps.map((step) => {
            const isActive = currentStep === step.number;
            const stepHref = getStepHref?.(step.number);
            const stepClasses = cn(
              "relative cursor-pointer px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 text-xs sm:text-sm font-medium whitespace-nowrap rounded-lg border border-transparent transition-all duration-200",
              isActive
                ? "bg-zinc-800 text-white shadow-lg shadow-black/20 border border-zinc-700"
                : "text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800/50",
            );

            return (
              <NavigationMenuItem key={step.number}>
                {stepHref ? (
                  <NavigationMenuLink
                    asChild
                    data-active={isActive}
                    className={stepClasses}
                  >
                    <Link to={stepHref}>
                      Etapa {step.number}
                      {isActive && (
                        <span className="absolute -bottom-px left-1/2 -translate-x-1/2 w-1/3 h-0.5 bg-blue-500 rounded-full opacity-70" />
                      )}
                    </Link>
                  </NavigationMenuLink>
                ) : (
                  <NavigationMenuLink
                    asChild
                    data-active={isActive}
                    className={stepClasses}
                  >
                    <button type="button" onClick={() => onSelect?.(step.number)}>
                      Etapa {step.number}
                      {isActive && (
                        <span className="absolute -bottom-px left-1/2 -translate-x-1/2 w-1/3 h-0.5 bg-blue-500 rounded-full opacity-70" />
                      )}
                    </button>
                  </NavigationMenuLink>
                )}
              </NavigationMenuItem>
            );
          })}
        </NavigationMenuList>
      </NavigationMenu>
    </ScrollAreaPrimitive.Viewport>
    <ScrollBar orientation="horizontal" />
    <ScrollAreaPrimitive.Corner />
  </ScrollAreaPrimitive.Root>
);

export default MyStepsNavigation;
