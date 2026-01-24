import { Progress } from "@/components/ui/progress";
import { ScrollArea } from "@/components/ui/scroll-area";
import type { MyLessonProgress } from "@/types/lesson";
import type { MySubjectProgress } from "@/types/subject";

import { SubjectSidebarItem } from "./SubjectSidebarItem";

interface SubjectSidebarProps {
  subject: MySubjectProgress;
  selectedLesson?: MyLessonProgress;
  onSelectLesson: (lesson: MyLessonProgress) => void;
  onToggleCompletion: (lessonId: string) => void;
}

export const SubjectSidebar = ({
  subject,
  selectedLesson,
  onSelectLesson,
  onToggleCompletion,
}: SubjectSidebarProps) => {
  return (
    <aside className="flex h-auto lg:h-full min-h-0 flex-col gap-3 p-4 sm:p-6 bg-bg-card border border-zinc-800 rounded-xl lg:col-span-2">
      <div className="flex items-center justify-between pr-2">
        <h3 className="text-lg font-semibold">Playlist de Aulas</h3>
        <span className="text-sm font-semibold">
          {`${subject.totalCompleted} de ${subject.lessons.length}`}
        </span>
      </div>

      <Progress
        value={(subject.totalCompleted / subject.lessons.length) * 100}
      />

      <div className="flex min-h-0 flex-col flex-1">
        <ScrollArea className="h-72 sm:h-96 lg:h-full w-full overflow-hidden">
          <ul className="space-y-2 pr-2">
            {subject.lessons.map((lesson) => (
              <SubjectSidebarItem
                key={lesson.id}
                lesson={lesson}
                isSelected={selectedLesson?.id === lesson.id}
                onSelect={onSelectLesson}
                onToggleCompletion={onToggleCompletion}
              />
            ))}
          </ul>
        </ScrollArea>
      </div>
    </aside>
  );
};
