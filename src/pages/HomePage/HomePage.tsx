import { BackgroundGrid } from "@/components/BackgroundGrid";
import { Progress } from "@/components/ui/progress";
import { useCourseProgress } from "@/contexts/CourseProgressContext/CourseProgressContext";
import { CurriculoCC } from "@/data/gradeCurricular";
import type { MyCadeiraProgress } from "@/data/myCourseProgress";
import { mapGradeToMyGradeProgress } from "@/lib/mappers";
import { ArrowRight, ChevronDown } from "lucide-react";
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

    return filtered.sort((a, b) => {
      if (sortBy === "etapas") {
        return a.etapaNumber - b.etapaNumber;
      } else if (sortBy === "progresso") {
        return b.progress - a.progress;
      }
      return 0;
    });
  }, [completedLessons, sortBy]);

  return (
    <div className="min-h-screen bg-bg-body text-zinc-100 selection:bg-blue-500/30 font-inter overflow-hidden">
      {/* Background Effects (Grid + Glow) */}
      <BackgroundGrid />

      {/* HERO SECTION */}
      <main className="relative z-10 mx-auto pt-20 pb-32">
        <div className="flex md:flex-row flex-col mx-auto container max-w-6xl mb-30">
          {/* Conteúdo Principal */}
          <div className="flex flex-col items-center justify-center text-center">
            {/* Título Principal */}
            <h1 className="mb-5 text-5xl md:text-7xl font-medium tracking-tighter bg-clip-text text-transparent bg-linear-to-br from-ubl-blue to-ubl-green">
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

              <Link
                to="/grade-curricular"
                className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-lg bg-gray-200 px-8 font-medium text-zinc-950 transition-all duration-300 hover:bg-zinc-200 hover:scale-105"
              >
                <span className="mr-2">Explorar Grade</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                <div className="absolute inset-0 -z-10 bg-linear-to-r from-blue-400/0 via-blue-400/40 to-blue-400/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </Link>

              <Link
                to={""}
                className="px-6 py-3 text-zinc-300 bg-zinc-900 rounded-lg"
              >
                Sobre nós
              </Link>
            </div>
          </div>

          {/* Logo da UBL */}
          <div className="flex items-center justify-center h-full w-full ml-10">
            <img
              src="https://github.com/Universidade-Livre/imagens/blob/main/logos/PNG/Logo-sem-fundo-padr%C3%A3o/LOGO-UBL-SEM-FUNDO-11.png?raw=true"
              alt="Logo UBL"
            />
          </div>
        </div>

        {/* Back to courses */}
        <section className="bg-bg-body  px-8 py-2 pb-8 mb-16">
          <div className="mx-auto container py-8 border-emerald-500/50 flex items-center justify-between mb-8">
            <div className="">
              <h2 className="text-4xl font-white font-semibold">
                Continue onde parou
              </h2>
              <span className="text-zinc-400 mt-2">
                Retome rapidamente os cursos em andamento.
              </span>
            </div>

            <div className="space-x-2">
              {sortOptions.map((option) => (
                <div
                  key={option}
                  onClick={() => setSortBy(option)}
                  className={`
                    px-3 py-2 select-none text-black rounded-lg cursor-pointer font-semibold text-md inline-flex items-center justify-center
                    transition duration-200 
                    ${
                      sortBy === option
                        ? "bg-ubl-green"
                        : "bg-zinc-100 font-normal hover:bg-gray-200"
                    }
                  `}
                >
                  <span>
                    {option.charAt(0).toUpperCase() + option.slice(1)}
                  </span>
                  {sortBy === option ? (
                    <ChevronDown className="ml-1 w-4 h-4" />
                  ) : (
                    ""
                  )}
                </div>
              ))}
            </div>
          </div>

          {watchedCourses.length !== 0 && (
            <div className="mx-auto container">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {watchedCourses.map((course) => (
                  <div className="p-6 bg-bg-card bg-ubl rounded-xl border border-zinc-800 hover:border-zinc-700 transition duration-300">
                    <span className="font-semibold text-gray-400 mb-4">
                      Etapa {course.etapaNumber}
                    </span>
                    <h3 className="text-xl text-white font-semibold">
                      {course.name}
                    </h3>
                    <div className="my-4 space-y-1">
                      <div className="flex items-center justify-between text-gray-400 text-sm">
                        <span>Progresso</span>
                        <span>{course.progress}%</span>
                      </div>
                      <Progress value={3} />
                    </div>
                    <div className="mt-6 w-full flex">
                      <Link
                        to={`/curso/${course.id}`}
                        className="px-4 py-2 bg-white rounded-lg text-sm font-semibold text-gray-800 w-full text-center hover:bg-gray-200 transition-colors"
                      >
                        Retomar
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </section>

        {/* CALL TO ACTION SECUNDÁRIO (Rodapé da Home) */}
        <section className="relative z-10 max-w-4xl mx-auto px-6 pb-20 mt-10">
          <div className="relative overflow-hidden rounded-3xl bg-bg-card border border-zinc-800 p-8 md:p-12 text-center">
            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-indigo-500/10 blur-[80px] rounded-full"></div>
            <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-64 h-64 bg-blue-500/10 blur-[80px] rounded-full"></div>

            <h2 className="relative text-3xl font-semibold text-white mb-4">
              Pronto para continuar?
            </h2>
            <p className="relative text-zinc-400 mb-8 max-w-lg mx-auto">
              Você tem cadeiras pendentes na etapa atual. Volte aos estudos
              agora mesmo.
            </p>

            <Link
              to="/meu-curso"
              className="relative inline-flex h-10 items-center justify-center rounded-lg bg-zinc-100 px-6 text-sm font-semibold text-zinc-900 hover:bg-white transition-colors"
            >
              Ir para meu Dashboard
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomePage;
