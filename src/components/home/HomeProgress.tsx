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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ProgressContext } from "@/contexts/ProgressContext";
import { CurriculoCC } from "@/data/GradeCurricular";
import { mapCurriculumToMyCurriculumProgress } from "@/mappers/curriculum.mapper";
import type { MySubjectProgress } from "@/types/subject";
import { useContext, useMemo, useState } from "react";
import { Link } from "react-router-dom";

export type WatchedCourse = MySubjectProgress & {
  etapaName: string;
  etapaNumber: number;
};

const sortOptions = ["etapas", "progresso"];

export const HomeProgress = () => {
  const { completedLessons } = useContext(ProgressContext);
  const [sortBy, setSortBy] = useState("etapas");

  const watchedCourses = useMemo<WatchedCourse[]>(() => {
    const mappedGrade = mapCurriculumToMyCurriculumProgress(
      CurriculoCC,
      completedLessons,
    );

    const filtered = mappedGrade.steps.flatMap((etapa) =>
      etapa.subjects
        .filter((cadeira) => cadeira.progress > 0)
        .map((cadeira) => ({
          ...cadeira,
          etapaName: etapa.name,
          etapaNumber: etapa.number,
        })),
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

  return (
    <>
      {watchedCourses.length !== 0 && (
        <div className="max-w-7xl px-6 sm:px-10 lg:px-14 mx-auto mb-20 sm:mb-24">
          <Card className="w-full overflow-hidden border-0 bg-[#141414]">
            <CardHeader className="p-6 sm:p-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div className="text-left">
                <CardTitle className="mb-6 text-4xl sm:text-5xl md:text-[3.5rem] font-semibold leading-[1.05] tracking-[-0.03em] bg-clip-text text-transparent bg-linear-to-br from-zinc-100 via-zinc-300 to-zinc-400">
                  Continue onde parou
                </CardTitle>
                <CardDescription className="text-base sm:text-lg text-zinc-200/90 font-light leading-relaxed">
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
                        {option.charAt(0).toUpperCase() + option.slice(1)}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </CardHeader>

            <CardContent className="px-6 pb-6 sm:px-8 sm:pb-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
                      <Link to={`/curso/${course.id}`}>Retomar</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
};
