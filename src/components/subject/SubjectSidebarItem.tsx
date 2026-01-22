import { Checkbox } from "@/components/ui/checkbox";
import { formatSecondsToMinutes } from "@/lib/time";
import { cn } from "@/lib/utils";
import type { MyLessonProgress } from "@/types/lesson";

interface SubjectSidebarItemProps {
  lesson: MyLessonProgress;
  isSelected: boolean;
  onSelect: (lesson: MyLessonProgress) => void;
  onToggleCompletion: (lessonId: string) => void;
}

export const SubjectSidebarItem = ({
  lesson,
  isSelected,
  onSelect,
  onToggleCompletion,
}: SubjectSidebarItemProps) => {
  return (
    <li>
      <div
        role="button"
        onClick={() => onSelect(lesson)}
        className={cn(
          "w-full flex items-start gap-3 px-3 py-2 rounded-lg cursor-pointer transition-colors hover:bg-accent/50",
          isSelected && "bg-accent text-accent-foreground",
        )}
      >
        <Checkbox
          checked={lesson.isCompleted}
          onCheckedChange={() => onToggleCompletion(lesson.id)}
          onClick={(event) => event.stopPropagation()}
          className="
            mt-0.5
            data-[state=checked]:text-white
            data-[state=checked]:bg-ubl-green
            dark:data-[state=checked]:bg-ubl-green
            data-[state=checked]:border-ubl-green
          "
        />
        <div className="flex flex-col items-start gap-0.5">
          <span className="text-sm font-medium leading-tight">
            {lesson.title}
          </span>
          {lesson.duration && (
            <span className="text-xs text-muted-foreground">
              {formatSecondsToMinutes(lesson.duration)}
            </span>
          )}
        </div>
      </div>
    </li>
  );
};
