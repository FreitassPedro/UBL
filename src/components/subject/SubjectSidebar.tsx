import { Progress } from "@/components/ui/progress";
import { ScrollArea } from "@/components/ui/scroll-area";
import { SubjectSidebarItem } from "./SubjectSidebarItem";
import type { MyLessonProgress } from "@/types/my-lesson";
import type MySubject from "@/types/my-subject";

interface SubjectSidebarProps {
  mySubject: MySubject;
  lessons: MyLessonProgress[];
  currentLesson?: MyLessonProgress;
  onSelectLesson: (lesson: MyLessonProgress) => void;
  onToggleCompletion: (lessonId: number) => void;
  isLoading?: boolean;
}

export const SubjectSidebar = ({
  mySubject: subject,
  lessons,
  currentLesson,
  onSelectLesson,
  onToggleCompletion,
  isLoading,
}: SubjectSidebarProps) => {
  const totalLessons = lessons.length || subject.lessons || 0;
  const completedLessons = lessons.filter((lesson) => lesson.completed).length;
  const completionValue =
    totalLessons > 0 ? (completedLessons / totalLessons) * 100 : 0;

  return (
    <aside className="flex h-auto lg:h-full min-h-0 flex-col gap-3 p-4 sm:p-6 bg-bg-card border border-zinc-800 rounded-xl lg:col-span-2">
      <div className="flex items-center justify-between pr-2">
        <h3 className="text-lg font-semibold">Playlist de Aulas</h3>
        <span className="text-sm font-semibold">
          {isLoading
            ? "Carregando..."
            : `${completedLessons} de ${totalLessons}`}
        </span>
      </div>

      <Progress value={completionValue} />

      <div className="flex min-h-0 flex-col flex-1">
        <ScrollArea className="h-72 sm:h-96 lg:h-full w-full overflow-hidden">
          <ul className="space-y-2 pr-2">
            {lessons.map((lesson) => (
              <SubjectSidebarItem
                key={lesson.id}
                lesson={lesson}
                isSelected={currentLesson?.id === lesson.id}
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
