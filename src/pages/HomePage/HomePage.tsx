import { BackgroundGrid } from "@/components/BackgroundGrid";
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
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useCourseProgress } from "@/contexts/CourseProgressContext/CourseProgressContext";
import { CurriculoCC } from "@/data/GradeCurricular";
import { mapGradeToMyGradeProgress } from "@/lib/mappers";
import type { MyCadeiraProgress } from "@/types/progress";
import { ArrowRight } from "lucide-react";
import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";

type WatchedCourse = MyCadeiraProgress & {
  etapaName: string;
  etapaNumber: number;
};

const sortOptions = ["etapas", "progresso"];

export const HomePage: React.FC = () => {
  const { completedLessons } = useCourseProgress();
  const [sortBy, setSortBy] = useState("etapas");
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

  return (
    <div className="min-h-screen bg-bg-body text-zinc-100 selection:bg-blue-500/30 font-inter overflow-hidden">
      {/* Background Effects (Grid + Glow) */}
      <BackgroundGrid />

      {/* HERO SECTION */}
      <main className="relative max-w-6xl mx-auto min-h-screen flex flex-col md:flex-row items-center justify-center container">
        {/* Conteúdo Principal */}
        <div className="flex flex-col items-center justify-center text-center">
          {/* Título Principal */}
          <h1 className="mb-6 text-5xl md:text-[5.8rem] font-medium tracking-tighter bg-clip-text text-transparent bg-linear-to-br from-ubl-blue to-ubl-green">
            Universidade Brasileira Livre
          </h1>

          {/* Subtítulo */}
          <div className="m-space-y-4">
            <p className="text-lg md:text-xl text-zinc-100 font-light">
              Uma plataforma{" "}
              <span className="font-semibold">
                sem fins lucrativos (Gratis)
              </span>{" "}
              de apoio de estudantes e conhecimentos em torno de diferentes
              currículos de código aberto.
            </p>

            <p className="text-2xl font-semibold text-blue-200 my-12">
              <span className="text-blue-400 text-2xl">Planeje</span>,
              <span className="text-blue-400 text-2xl"> acompanhe </span> e
              <span className="text-blue-400 text-2xl"> aprenda</span>.
            </p>
          </div>

          {/* Botões de Ação */}
          <div className="grid grid-cols-2 gap-3">
            <Link
              to="/grade-curricular"
              className="inline-flex items-center justify-center col-span-2 bg-linear-to-br from-ubl-green to-green-400 text-white rounded-xl px-6 py-3 shadow-lg shadow-b shadow-black/50 hover:scale-105 transition-transform"
            >
              <span className="text-xl font-semibold uppercase">
                Começar a estudar
              </span>
              <ArrowRight className="w-8 h-8 ml-2" />
            </Link>

            <Button asChild variant={"secondary"} size={"lg"}>
              <Link
                to="/grade-curricular"
                className="group h-12 transition-all duration-300 hover:bg-zinc-200 hover:scale-105"
              >
                <span className="mr-2">Explorar Grade</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                <div className="absolute inset-0 -z-10 bg-linear-to-r from-blue-400/0 via-blue-400/40 to-blue-400/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </Link>
            </Button>

            <Button asChild size={"lg"} variant={"default"}>
              <Link to={""} className="px-6 py-3 rounded-lg">
                Sobre nós
              </Link>
            </Button>
          </div>
        </div>

        {/* Logo da UBL */}
        <div className="flex items-center justify-center h-full w-full ml-10">
          <img
            src="https://github.com/Universidade-Livre/imagens/blob/main/logos/PNG/Logo-sem-fundo-padr%C3%A3o/LOGO-UBL-SEM-FUNDO-11.png?raw=true"
            alt="Logo UBL"
          />
        </div>
      </main>

      {/* Cards */}
      <div className="relative bg-bg-body w-full h-full p-20 border-t border-zinc-800 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center z-0 opacity-75">
          <div className="w-full h-full">
            <div className="w-full h-full scale-[4.5] origin-center">
              <TextHoverEffect text="UBL" duration={0.2} automatic />
            </div>
          </div>
        </div>

        <div className="relative z-10">
          {/* Back to courses */}
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
                          {option.charAt(0).toUpperCase() + option.slice(1)}
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
                      <Button asChild variant="secondary" className="w-full">
                        <Link to={`/curso/${course.id}`}>Retomar</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </CardContent>
            </Card>
          )}

          {/* CALL TO ACTION SECUNDÁRIO (Rodapé da Home) */}
          <Card className="p-0 max-w-3xl mx-auto overflow-hidden mt-10 rounded-3xl text-center">
            <CardHeader className="p-0 mt-8">
              <CardTitle className="text-3xl font-semibold text-white mb-2">
                Pronto para continuar?
              </CardTitle>
              <CardDescription className="text-md text-zinc-400 max-w-lg mx-auto">
                Você tem cadeiras pendentes na etapa atual. Volte aos estudos
                agora mesmo.
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
        </div>
      </div>
    </div>
  );
};

export default HomePage;
