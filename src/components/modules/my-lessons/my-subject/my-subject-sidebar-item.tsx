import { Checkbox } from "@/components/ui/checkbox";
import { formatSeconds } from "@/lib/time";
import { cn } from "@/lib/utils";
import Lesson from "@/types/lesson";

interface MySubjectSidebarItemProps {
  lesson: Lesson;
  isSelected: boolean;
  isCompleted: boolean;
  onSelect: (lesson: Lesson) => void;
  onToggleCompletion: (lessonId: number) => void;
}

export const MySubjectSidebarItem = ({
  lesson,
  isSelected,
  isCompleted,
  onSelect,
  onToggleCompletion,
}: MySubjectSidebarItemProps) => {
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
          checked={isCompleted}
          onCheckedChange={() => onToggleCompletion(lesson.id)}
          onClick={(event) => {
            event.stopPropagation();
          }}
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
            {lesson.name}
          </span>
          {lesson.duration && (
            <span className="text-xs text-muted-foreground">
              {formatSeconds(lesson.duration)}
            </span>
          )}
        </div>
      </div>
    </li>
  );
};

export default MySubjectSidebarItem;
