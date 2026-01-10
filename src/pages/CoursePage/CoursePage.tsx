import { VideoPlayer } from "@/components/CourseContent/VideoPlayer";
import { BackgroundGrid } from "@/components/BackgroundGrid";
import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useCourseProgress } from "@/contexts/CourseProgressContext/CourseProgressContext";
import { useLoading } from "@/contexts/LoadingContext/LoadingContext";
import { CurriculoCC } from "@/data/gradeCurricular";
import type { MyCadeiraProgress, MyLesson } from "@/data/myCourseProgress";
import useTituloDaPagina from "@/hooks/useTitlePage";
import { mapCadeiraToMyCadeira } from "@/lib/mappers";
import { ChevronRight, HomeIcon } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function CoursePage() {
  useTituloDaPagina("Curso");

  const { id } = useParams<{ id: string }>();
  const { toggleCompletion, completedLessons } = useCourseProgress();
  const { showLoader, hideLoader } = useLoading();

  const myCadeira: MyCadeiraProgress | undefined = useMemo(() => {
    if (!id) return;

    const cadeiraEncontrada = CurriculoCC.etapas
      .flatMap((etapa) => etapa.cadeiras)
      .find((c) => c.id.toString() === id);

    if (!cadeiraEncontrada) return;

    return mapCadeiraToMyCadeira(cadeiraEncontrada, completedLessons);
  }, [completedLessons, id]);

  const [selectedLessonId, setSelectedLessonId] = useState<
    string | number | undefined
  >(() => {
    return myCadeira?.lessons[0]?.id || undefined;
  });

  const selectedLesson = useMemo(() => {
    return myCadeira?.lessons.find((lesson) => lesson.id === selectedLessonId);
  }, [myCadeira, selectedLessonId]);

  const handleSelectLesson = (lesson: MyLesson) => {
    setSelectedLessonId(lesson.id);
  };

  useEffect(() => {
    if (selectedLessonId) showLoader();

    return () => {
      hideLoader();
    };
  }, [selectedLessonId]);

  const ClassSideBarItem: React.FC<{
    lesson: MyLesson;
    isSelected: boolean;
    onSelect: (lesson: MyLesson) => void;
  }> = ({ lesson, isSelected, onSelect }) => {
    return (
      <li>
        <div
          role="button"
          onClick={() => onSelect(lesson)}
          className={`
            w-full
            flex
            items-start
            gap-3
            px-3
            py-2
            rounded-lg
            cursor-pointer
            transition-colors
            hover:bg-accent/50
            ${isSelected ? "bg-accent text-accent-foreground" : ""}
          `}
        >
          <Checkbox
            checked={lesson.isCompleted}
            onCheckedChange={() => toggleCompletion(lesson.id)}
            onClick={(e) => e.stopPropagation()}
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
            <span className="text-xs text-muted-foreground">
              {lesson.duration}
            </span>
          </div>
        </div>
      </li>
    );
  };

  if (!myCadeira || myCadeira.lessons.length === 0) {
    return (
      <div className="container mx-auto py-6 max-w-[1400px] text-center">
        <Link to="/">
          <button className="px-4 py-2 text-white bg-blue-900 rounded-md hover:bg-blue-700 focus:outline-none">
            Voltar
          </button>
        </Link>

        <h1 className="text-3xl font-bold mt-8">
          Este curso não possui vídeos disponíveis ainda.
        </h1>

        <p className="text-muted-foreground mt-2">
          Por favor, volte mais tarde ou confira outros cursos.
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-bg-body text-text-main overflow-x-hidden relative font-inter">
      {/* Background Effects (Grid + Glow) */}
      <BackgroundGrid />

      <div className="relative z-10 w-full h-[calc(100vh-6rem)] my-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-6 gap-6 items-stretch">
        {/* COLUNA PRINCIPAL (VÍDEO CARD) */}
        <main className="flex min-h-0 flex-col gap-4 p-6 bg-bg-card border border-zinc-800 rounded-xl shadow-2xl shadow-black/40 lg:col-span-4">
          {/* Breadcrumbs */}
          <Breadcrumb className="shrink-0">
            <BreadcrumbList className="text-sm text-gray-400">
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/" className="hover:text-gray-200">
                    <HomeIcon size={14} />
                  </Link>
                </BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbSeparator>
                <ChevronRight size={14} />
              </BreadcrumbSeparator>

              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/meu-curso" className="hover:text-gray-200">
                    Cadeira
                  </Link>
                </BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbSeparator>
                <ChevronRight size={14} />
              </BreadcrumbSeparator>

              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/meu-curso" className="hover:text-gray-200">
                    {myCadeira.name}
                  </Link>
                </BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbSeparator>
                <ChevronRight size={14} />
              </BreadcrumbSeparator>

              <BreadcrumbItem>
                <BreadcrumbPage className="text-gray-200 font-medium">
                  {selectedLesson?.title}
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          {/* Video player */}
          <div className="w-full flex-1 min-h-0">
            <VideoPlayer
              videoId={selectedLesson!.url}
              key={selectedLesson?.id}
              onLoaded={hideLoader}
            />
          </div>

          {/* Title */}
          <div className="shrink-0">
            <div className="flex items-center gap-2">
              <span className="mb-2 text-[10px] uppercase tracking-[0.3em] text-zinc-400">
                Aula Gravada
              </span>
              <span className="h-px flex-1 bg-linear-to-r from-ubl-green/80 to-transparent via-zinc-700/50" />
            </div>

            <h2 className="text-2xl font-semibold leading-snug text-zinc-100">
              {selectedLesson?.title}
            </h2>
          </div>
        </main>

        {/* Sidebar com lista de aulas */}
        <aside className="flex h-full min-h-0 flex-col gap-3 py-6 pl-6 pr-4 bg-bg-card border border-zinc-800 rounded-xl lg:col-span-2">
          {/* Header da sidebar */}
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">Playlist de Aulas</h3>
            <Badge variant="outline">
              {`${myCadeira.totalCompleted} de ${myCadeira.lessons.length}`}
            </Badge>
          </div>

          {/* Progress Bar */}
          <Progress
            value={(myCadeira.totalCompleted / myCadeira.lessons.length) * 100}
          />

          {/* Videos List */}
          <div className="flex min-h-0 flex-col flex-1 relative">
            <ScrollArea className="h-full pr-2 overflow-hidden relative">
              <ul className="space-y-2 mr-3">
                {myCadeira.lessons.map((lesson) => (
                  <ClassSideBarItem
                    key={lesson.id}
                    lesson={lesson}
                    isSelected={selectedLesson?.id === lesson.id}
                    onSelect={handleSelectLesson}
                  />
                ))}
                {/* Gradient overlay */}
              </ul>
            </ScrollArea>
            <div className="pointer-events-none bg-linear-to-t from-zinc-900  to-transparent bottom-0 left-0 w-full z-10 h-20 absolute" />
          </div>
        </aside>
      </div>
    </div>
  );
}
