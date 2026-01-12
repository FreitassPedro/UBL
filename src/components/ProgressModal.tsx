import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { HeroHighlight } from "@/components/ui/hero-highlight";
import { Progress } from "@/components/ui/progress";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CurriculoCC } from "@/data/GradeCurricular";
import { useCourseProgress } from "@/hooks/useCourseProgress";
import { mapGradeToMyGradeProgress } from "@/lib/mappers";
import type { MyCadeiraProgress } from "@/types/progress";
import { ChevronRight } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";

export type WatchedCourse = MyCadeiraProgress & {
  etapaName: string;
  etapaNumber: number;
};

const sortOptions = ["etapas", "progresso"];

export const ProgressModal = () => {
  const { completedLessons } = useCourseProgress();
  const [sortBy, setSortBy] = useState("etapas");
  const [isOpen, setIsDrawerOpen] = useState(false);

  const watchedCourses = useMemo<WatchedCourse[]>(() => {
    const mappedGrade = mapGradeToMyGradeProgress(
      CurriculoCC,
      completedLessons
    );

    const filtered = mappedGrade.etapas.flatMap((etapa) =>
      etapa.cadeiras
        .filter((cadeira) => cadeira.progress > 0)
        .map((cadeira) => ({
          ...cadeira,
          etapaName: etapa.name,
          etapaNumber: etapa.number,
        }))
    );

    return [...filtered].sort((a, b) => {
      switch (sortBy) {
        case "etapas":
          return a.etapaNumber - b.etapaNumber;
        case "progresso":
          return b.progress - a.progress;
        default:
          return 0;
      }
    });
  }, [completedLessons, sortBy]);

  // Desabilita o scroll da página pai do modal
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "";
      };
    }

    document.body.style.overflow = "";
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60"
          onClick={() => setIsDrawerOpen(false)}
        />
      )}
      <Collapsible open={isOpen} onOpenChange={setIsDrawerOpen}>
        <CollapsibleTrigger asChild>
          <button
            type="button"
            className="cursor-pointer fixed left-6 top-1/2 z-60 flex size-12 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-zinc-900 text-white transition hover:-translate-x-1"
            aria-label={isOpen ? "Fechar destaques" : "Abrir destaques"}
          >
            <ChevronRight
              className={`size-5 transition-transform ${
                isOpen ? "rotate-180" : ""
              }`}
            />
          </button>
        </CollapsibleTrigger>
        <div className="fixed inset-x-0 bottom-0 z-50">
          <CollapsibleContent className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
            <div className="h-screen overflow-y-auto">
              <HeroHighlight
                className="w-full h-full"
                containerClassName="min-h-screen py-16 border-t border-zinc-800 dark:bg-bg-body"
              >
                {watchedCourses.length !== 0 && (
                  <Card className="p-0 max-w-6xl mx-auto overflow-hidden rounded-3xl bg-bg-card text-center">
                    <CardHeader className="px-8 pt-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                      <div className="text-left space-y-2">
                        <CardTitle className="text-4xl font-semibold text-white">
                          Continue onde parou
                        </CardTitle>
                        <CardDescription className="text-md text-zinc-400">
                          Retome rapidamente os cursos em andamento.
                        </CardDescription>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="uppercase text-xs text-zinc-400">
                          Ordenar por
                        </span>
                        <Select value={sortBy} onValueChange={setSortBy}>
                          <SelectTrigger className="w-32 cursor-pointer">
                            <SelectValue placeholder="Ordenar por" />
                          </SelectTrigger>
                          <SelectContent>
                            {sortOptions.map((option) => (
                              <SelectItem
                                key={option}
                                value={option}
                                className="cursor-pointer"
                              >
                                {option.charAt(0).toUpperCase() +
                                  option.slice(1)}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </CardHeader>

                    <CardContent className="p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                      {watchedCourses.map((course) => (
                        <Card
                          key={course.id}
                          className="text-left hover:border-zinc-700/80 hover:-translate-y-1 transition duration-300"
                        >
                          <CardHeader className="p-0">
                            <CardDescription className="font-semibold text-gray-400">
                              Etapa {course.etapaNumber}
                            </CardDescription>
                            <CardTitle className="text-xl text-white font-semibold">
                              {course.name}
                            </CardTitle>
                          </CardHeader>
                          <CardContent className="p-0 my-2">
                            <div className="flex items-center justify-between text-gray-400 text-sm">
                              <span>Progresso</span>
                              <span>{course.progress}%</span>
                            </div>
                            <Progress
                              value={course.progress}
                              className="my-2 bg-zinc-700"
                            />
                          </CardContent>
                          <CardFooter className="p-0">
                            <Button
                              asChild
                              variant="secondary"
                              className="w-full"
                            >
                              <Link to={`/curso/${course.id}`}>Retomar</Link>
                            </Button>
                          </CardFooter>
                        </Card>
                      ))}
                    </CardContent>
                  </Card>
                )}

                <Card className="p-0 max-w-3xl mx-auto overflow-hidden mt-10 rounded-3xl text-center">
                  <CardHeader className="p-0 mt-8">
                    <CardTitle className="text-3xl font-semibold text-white mb-2">
                      Pronto para continuar?
                    </CardTitle>
                    <CardDescription className="text-md text-zinc-400 max-w-lg mx-auto">
                      Você tem cadeiras pendentes na etapa atual. Volte aos
                      estudos agora mesmo.
                    </CardDescription>
                  </CardHeader>
                  <CardFooter className="flex justify-center mb-8 mt-6">
                    <Button
                      className="text-sm font-semibold bg-zinc-100 text-zinc-900 hover:bg-white transition-colors"
                      asChild
                    >
                      <Link to="/meu-curso">Ir para meu Dashboard</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </HeroHighlight>
            </div>
          </CollapsibleContent>
        </div>
      </Collapsible>
    </>
  );
};
