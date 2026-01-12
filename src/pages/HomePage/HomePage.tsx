import { BackgroundGrid } from "@/components/BackgroundGrid";
import {
  ProgressModal,
  type WatchedCourse,
} from "@/components/Home/ProgressModal";
import { PinContainer } from "@/components/ui/3d-pin";
import { Button } from "@/components/ui/button";
import { useCourseProgress } from "@/contexts/CourseProgressContext/CourseProgressContext";
import { CurriculoCC } from "@/data/GradeCurricular";
import { mapGradeToMyGradeProgress } from "@/lib/mappers";
import { ArrowRight, BookOpen, Map, User } from "lucide-react";
import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";

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
    <div className="min-h-screen bg-black text-zinc-100 selection:bg-blue-500/30 font-inter overflow-hidden">
      {/* Background Effects (Grid + Glow) */}
      <BackgroundGrid />

      {/* HERO SECTION */}
      <main className="relative max-w-6xl px-6 mx-auto min-h-screen flex flex-col md:flex-row items-center justify-center container">
        {/* Conteúdo Principal */}
        <div className="flex flex-col items-center justify-center">
          {/* Título Principal */}
          <h1 className="mb-6 text-5xl md:text-[5.5rem] font-medium tracking-tighter bg-clip-text text-transparent bg-linear-to-br from-ubl-blue to-ubl-green">
            Universidade Brasileira Livre
          </h1>

          {/* Subtítulo */}
          <div className="space-y-4">
            <p className="text-2xl text-zinc-100 font-light">
              Uma plataforma{" "}
              <span className="font-semibold">
                sem fins lucrativos (Grátis)
              </span>{" "}
              de apoio de estudantes e conhecimentos em torno de diferentes
              currículos de código aberto.
            </p>

            <p className="text-2xl font-semibold text-blue-200 my-12">
              <span className="text-blue-400 text-3xl">Planeje</span>,
              <span className="text-blue-400 text-3xl"> acompanhe </span> e
              <span className="text-blue-400 text-3xl"> aprenda</span>.
            </p>
          </div>

          {/* Botões de Ação */}
          <div className="grid grid-cols-2 gap-3 w-full">
            <Button asChild size={"lg"} variant="secondary">
              <Link to="" className="transition-all hover:scale-105">
                <User className="w-4 h-4" />
                <span className="text-xl">Sobre nós</span>
              </Link>
            </Button>

            <Button
              asChild
              size={"lg"}
              className="bg-ubl-blue text-zinc-100 hover:bg-ubl-blue/90"
            >
              <Link
                to="/grade-curricular"
                className="hover:scale-105 transition-all duration-300"
              >
                <Map className="w-4 h-4" />
                <span className="text-xl">Explorar Grade</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>

            <Button
              asChild
              size={"lg"}
              className="col-span-2 bg-ubl-green text-zinc-100 hover:bg-ubl-green/90"
            >
              <Link
                to="/grade-curricular"
                className="hover:scale-105 transition-all duration-300"
              >
                <BookOpen className="w-4 h-4" />
                <span className="text-xl">Começar a Estudar</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Logo da UBL */}
        <div className="flex items-center justify-center h-full w-full ml-10">
          <PinContainer
            title="Universidade Livre"
            href="https://github.com/Universidade-Livre"
            containerClassName="w-[420px] h-[420px] sm:w-[520px] sm:h-[520px]"
            className="w-[380px] h-[380px] sm:w-[480px] sm:h-[480px] flex items-center justify-center"
          >
            <img
              src="https://github.com/Universidade-Livre/imagens/blob/main/logos/PNG/Logo-sem-fundo-padr%C3%A3o/LOGO-UBL-SEM-FUNDO-11.png?raw=true"
              alt="Logo UBL"
              className="w-full h-full object-contain"
            />
          </PinContainer>
        </div>
      </main>

      <ProgressModal
        watchedCourses={watchedCourses}
        sortBy={sortBy}
        setSortBy={setSortBy}
        sortOptions={sortOptions}
      />
    </div>
  );
};

export default HomePage;
