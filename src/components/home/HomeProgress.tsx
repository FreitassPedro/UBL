import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ProgressContext } from "@/contexts/ProgressContext";
import { CurriculumCC, CurriculumMath } from "@/data/Curriculum";
import { mapCurriculumToMyCurriculumProgress } from "@/mappers/curriculum.mapper";
import type { MySubjectProgress } from "@/types/subject";
import { useContext, useMemo, useState } from "react";
import { Link } from "react-router-dom";

export type WatchedSubject = MySubjectProgress & {
  curriculumName: string;
  stepName: string;
  stepNumber: number;
};

export const HomeProgress = () => {
  const { completedLessons } = useContext(ProgressContext);
  const [sortBy, setSortBy] = useState("etapas");
  const watchedSubjects = useMemo<WatchedSubject[]>(() => {
    const progresses = [
      mapCurriculumToMyCurriculumProgress(CurriculumCC, completedLessons),
      mapCurriculumToMyCurriculumProgress(
        CurriculumMath,
        completedLessons,
      ),
    ];

    const filteredProgresses = progresses.flatMap((curriculum) =>
      curriculum.steps.flatMap((step) =>
        step.subjects
          .filter((subject) => subject.progress > 0)
          .map((subject) => ({
            ...subject,
            curriculumName:
              curriculum.name === "Matemática" ? "Matemática" : "Computação",
            stepName: step.name,
            stepNumber: step.number,
          })),
      ),
    );

    return [...filteredProgresses].sort((a, b) => {
      switch (sortBy) {
        case "etapas":
          return a.stepNumber - b.stepNumber;
        case "progresso":
          return b.progress - a.progress;
        case "curso":
          return a.curriculumName.localeCompare(b.curriculumName);
        default:
          return 0;
      }
    });
  }, [completedLessons, sortBy]);

  return (
    <>
      {watchedSubjects.length !== 0 && (
        <div className="max-w-7xl px-6 sm:px-10 lg:px-14 mx-auto mb-20 sm:mb-24">
          <Card className="w-full overflow-hidden border-0 bg-[#141414]">
            <CardHeader className="p-6 sm:p-8">
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <CardTitle className="text-4xl sm:text-5xl md:text-[3.5rem] font-semibold leading-[1.05] tracking-[-0.03em] bg-clip-text text-transparent bg-linear-to-br from-zinc-100 via-zinc-300 to-zinc-400">
                  Continue onde parou
                </CardTitle>
                <div className="flex items-center gap-3">
                  <span className="uppercase text-xs text-zinc-400">
                    Ordenar por
                  </span>
                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger className="w-32 cursor-pointer">
                      <SelectValue placeholder="Ordenar por" />
                    </SelectTrigger>
                    <SelectContent>
                      {["etapas", "progresso", "curso"].map((option) => (
                        <SelectItem
                          key={option}
                          value={option}
                          className="cursor-pointer"
                        >
                          {option.charAt(0).toUpperCase() + option.slice(1)}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <CardDescription className="mt-4 text-base sm:text-lg text-zinc-200/90 font-light leading-relaxed">
                Retome rapidamente os cursos em andamento.
              </CardDescription>
            </CardHeader>

            <ScrollArea className="h-58">
              <div className="px-6 pb-6 sm:px-8 sm:pb-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {watchedSubjects.map((course) => (
                  <Card
                    key={course.id}
                    className="h-50 text-left hover:border-zinc-700/80"
                  >
                    <CardHeader className="p-0">
                      <CardDescription className="font-semibold text-gray-400">
                        {course.curriculumName} - Etapa {course.stepNumber}
                      </CardDescription>
                      <CardTitle>
                        <Tooltip>
                          <TooltipTrigger className="p-0 text-left text-xl text-white font-semibold line-clamp-1">
                            {course.name}
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>{course.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="p-0 my-2">
                      <div className="flex items-center justify-between text-gray-400 text-base">
                        <span>Progresso</span>
                        <span>{course.progress}%</span>
                      </div>
                      <Progress
                        value={course.progress}
                        className="my-2 bg-zinc-700"
                      />
                    </CardContent>
                    <CardFooter className="p-0">
                      <Button asChild variant="secondary" className="w-full">
                        <Link to={`/disciplinas/${course.id}`}>Retomar</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </ScrollArea>
          </Card>
        </div>
      )}
    </>
  );
};
