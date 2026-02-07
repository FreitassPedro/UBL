"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
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
import useSubjectsWithProgress, { SubjectWithProgressOrder } from "@/hooks/use-subjects-with-progress";
import Link from "next/link";

export const HomeProgress = () => {
  const { subjectsWithProgress: subjects, orderBy, setOrderBy, isLoading, isError } = useSubjectsWithProgress();
  if (!subjects || subjects.length === 0 || isLoading || isError) {
    return null;
  }

  return (
    <div className="max-w-7xl px-6 sm:px-10 lg:px-14 mx-auto mb-20 sm:mb-24">
      <Card className="w-full border-0 bg-card p-10 sm:p-14 pb-6 sm:pb-8">
        <CardHeader className="p-0 pb-2">
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
            <CardTitle className="text-4xl sm:text-5xl md:text-[3.5rem] font-semibold leading-[1.05] tracking-[-0.03em] bg-clip-text text-transparent bg-linear-to-br from-zinc-100 via-zinc-300 to-zinc-400">
              Continue onde parou
            </CardTitle>
            <div className="flex items-center gap-3">
              <span className="uppercase text-xs text-zinc-400">
                Ordenar por
              </span>
              <Select value={orderBy} onValueChange={(value) => setOrderBy(value as SubjectWithProgressOrder)}>
                <SelectTrigger className="w-32 cursor-pointer">
                  <SelectValue placeholder="Ordenar por" />
                </SelectTrigger>
                <SelectContent>
                  {Object.values(SubjectWithProgressOrder).map((option) => (
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
          <CardDescription className="mt-3 text-base sm:text-lg text-zinc-200/90 font-light leading-relaxed">
            Retome rapidamente os cursos em andamento.
          </CardDescription>
        </CardHeader>

        <ScrollArea className="h-60">
          <div className="pt-0 pr-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
            {subjects.map((subject) => (
              <Card
                key={subject.id}
                className="text-left hover:border-zinc-700/80 p-6 flex flex-col gap-3"
              >
                <CardHeader className="p-0 space-y-1">
                  <CardDescription className="font-semibold text-gray-400 leading-tight line-clamp-2 sm:min-h-10 lg:min-h-0">
                    {subject.courseAlternativeName} - Etapa {subject.stepNumber}
                  </CardDescription>
                  <CardTitle className="p-0 text-left text-xl text-white font-semibold leading-tight line-clamp-1">
                    {subject.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0 flex flex-col gap-1">
                  <div className="flex items-center justify-between text-gray-400 text-base">
                    <span>Progresso</span>
                    <span className="font-medium text-gray-300">
                      {subject.progress}%
                    </span>
                  </div>
                  <Progress
                    value={subject.progress}
                    className="bg-zinc-700 h-2 mb-3"
                  />
                  <Button
                    asChild
                    variant="secondary"
                    className="w-full h-10 bg-zinc-200 text-zinc-900 hover:bg-zinc-300"
                  >
                    <Link
                      href={`/meu-curso/${subject.courseSlug}/etapas/${subject.stepNumber}/disciplinas/${subject.number}`}
                    >
                      Retomar
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </ScrollArea>
      </Card>
    </div>
  );
};

export default HomeProgress;
