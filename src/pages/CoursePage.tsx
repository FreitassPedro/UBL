import { VideoPlayer } from "@/components/features/subject/VideoPlayer";
import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";
import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { CurriculoCC, CurriculoMatematica } from "@/data/GradeCurricular";
import { useCourseProgress } from "@/hooks/useCourseProgress";
import { useLoading } from "@/hooks/useLoading";
import useTituloDaPagina from "@/hooks/useTitlePage";
import { mapCadeiraToMyCadeira } from "@/lib/mappers";
import { formatSecondsToMinutes } from "@/lib/utils";
import type { MyCadeiraProgress, MyLessonProgress } from "@/types/progress";
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

    const cadeiraEncontrada =
      CurriculoCC.etapas
        .flatMap((etapa) => etapa.cadeiras)
        .find((c) => c.id.toString() === id) ??
      CurriculoMatematica.etapas
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

  const handleSelectLesson = (lesson: MyLessonProgress) => {
    setSelectedLessonId(lesson.id);
  };

  useEffect(() => {
    if (selectedLessonId) showLoader();

    return () => {
      hideLoader();
    };
  }, [selectedLessonId]);

  const ClassSideBarItem: React.FC<{
    lesson: MyLessonProgress;
    isSelected: boolean;
    onSelect: (lesson: MyLessonProgress) => void;
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

  if (!myCadeira || myCadeira.lessons.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Card className="max-w-md w-full shadow-lg p-10">
          <CardHeader className="text-center space-y-2">
            <CardTitle className="text-3xl font-semibold">
              Conteúdo indisponível
            </CardTitle>
          </CardHeader>

          <CardContent className="text-center space-y-6">
            <p className="text-muted-foreground">
              Volte mais tarde para ver se já há novos vídeos ou explore outros
              cursos disponíveis.
            </p>

            <Link to="/">
              <Button className="cursor-pointer bg-blue-600 hover:bg-blue-700 text-white px-6">
                Voltar para o início
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-bg-body text-text-main overflow-x-hidden relative font-inter">
      {/* Background Effects (Grid + Glow) */}
      <BackgroundRippleEffect className="z-0" />

      <div className="relative z-10 w-full h-[calc(100vh-6rem)] my-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-6 gap-6 items-stretch">
        {/* COLUNA PRINCIPAL (VÍDEO CARD) */}
        <Card className="flex min-h-0 flex-col gap-4 p-6 bg-bg-card border border-zinc-800 rounded-xl shadow-2xl shadow-black/40 lg:col-span-4">
          {/* Breadcrumbs */}
          <Breadcrumb className="shrink-0">
            <BreadcrumbList className="text-sm text-gray-400 flex-nowrap overflow-hidden">
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

              <BreadcrumbItem className="min-w-0 flex-1">
                <BreadcrumbPage className="text-gray-200 font-medium block truncate">
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
            <div className="flex items-center gap-2 pb-1">
              <span className="text-[10px] uppercase tracking-[0.3em] text-zinc-400 whitespace-nowrap leading-none">
                Aula Gravada
              </span>

              <Separator className="flex-1 rounded self-center" />
            </div>

            <h2 className="text-2xl font-semibold leading-snug text-zinc-100">
              {selectedLesson?.title}
            </h2>
          </div>
        </Card>

        {/* Sidebar com lista de aulas */}
        <aside className="flex h-full min-h-0 flex-col gap-3 py-6 pl-6 pr-4 bg-bg-card border border-zinc-800 rounded-xl lg:col-span-2">
          {/* Header da sidebar */}
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">Playlist de Aulas</h3>
            <Badge variant="outline" className="text-zinc-100 border-zinc-100">
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
              </ul>
            </ScrollArea>
          </div>
        </aside>
      </div>
    </div>
  );
}
