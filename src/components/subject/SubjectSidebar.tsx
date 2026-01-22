import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { ScrollArea } from "@/components/ui/scroll-area";
import type { MySubjectProgress, MyLessonProgress } from "@/types/progress";

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
    <aside className="flex h-full min-h-0 flex-col gap-3 py-6 pl-6 pr-4 bg-bg-card border border-zinc-800 rounded-xl lg:col-span-2">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">Playlist de Aulas</h3>
        <Badge variant="outline" className="text-zinc-100 border-zinc-100">
          {`${subject.totalCompleted} de ${subject.lessons.length}`}
        </Badge>
      </div>

      <Progress
        value={(subject.totalCompleted / subject.lessons.length) * 100}
      />

      <div className="flex min-h-0 flex-col flex-1 relative">
        <ScrollArea className="h-full pr-2 overflow-hidden relative">
          <ul className="space-y-2 mr-3">
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
