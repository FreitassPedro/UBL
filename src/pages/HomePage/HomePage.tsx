import { BackgroundGrid } from "@/components/BackgroundGrid";
import {
  ProgressModal,
  type WatchedCourse,
} from "@/components/Home/ProgressModal";
import { PinContainer } from "@/components/ui/3d-pin";
import { Button } from "@/components/ui/button";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
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
    <div className="min-h-screen bg-[#06070b] text-zinc-100 selection:bg-blue-500/30 font-sans overflow-hidden">
      {/* Background Effects (Grid + Glow) */}
      <BackgroundGrid />

      {/* HERO SECTION */}
      <main className="relative max-w-7xl px-6 sm:px-10 lg:px-14 mx-auto min-h-screen flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16 py-16 md:py-24 container">
        {/* Conteúdo Principal */}
        <div className="flex flex-col items-center justify-center text-center md:items-start md:text-left md:flex-1">
          {/* Título Principal */}
          <h1 className="mb-7 text-4xl sm:text-6xl md:text-[5.1rem] lg:text-[5.6rem] font-semibold leading-[0.95] tracking-[-0.035em] bg-clip-text text-transparent bg-linear-to-br from-ubl-green to-ubl-blue">
            Universidade <span className="whitespace-nowrap">Brasileira Livre</span>
          </h1>

          {/* Subtítulo */}
          <div className="space-y-5 max-w-2xl">
            <p className="text-lg sm:text-xl md:text-2xl text-zinc-200/90 font-light leading-relaxed">
              Uma plataforma{" "}
              <span className="font-semibold text-zinc-50">
                sem fins lucrativos (Grátis)
              </span>{" "}
              de apoio de estudantes e conhecimentos em torno de diferentes
              currículos de código aberto.
            </p>
          </div>

          <div className="mt-8 flex items-center justify-center md:justify-start">
            <TypewriterEffect
              words={[
                { text: "Planeje," },
                { text: "acompanhe" },
                { text: "e" },
                { text: "aprenda." },
              ]}
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-left"
              cursorClassName="bg-ubl-blue h-5 md:h-7 lg:h-9"
            />
          </div>

          {/* Botões de Ação */}
          <div className="grid grid-cols-2 gap-4 w-full mt-10 max-w-2xl mx-auto md:mx-0">
            <Button
              asChild
              size={"lg"}
              className="bg-zinc-800 text-zinc-100 hover:bg-zinc-800/90 border border-zinc-700/90"
            >
              <Link to="" className="transition-all hover:scale-105">
                <User className="w-4 h-4" />
                <span className="text-lg sm:text-xl">Sobre nós</span>
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
                <span className="text-lg sm:text-xl">Explorar Grade</span>
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
                <span className="text-lg sm:text-xl">Começar a Estudar</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Logo da UBL */}
        <div className="flex items-center justify-center h-full w-full md:ml-6 md:flex-1">
          <PinContainer
            title="Universidade Livre"
            href="https://github.com/Universidade-Livre"
            containerClassName="w-[320px] h-[320px] sm:w-[420px] sm:h-[420px] lg:w-[520px] lg:h-[520px]"
            className="w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] lg:w-[480px] lg:h-[480px] flex items-center justify-center"
          >
            <img
              src="https://github.com/Universidade-Livre/imagens/blob/main/logos/PNG/Logo-sem-fundo-padr%C3%A3o/LOGO-UBL-SEM-FUNDO-11.png?raw=true"
              alt="Logo UBL"
              className="w-full h-full object-contain drop-shadow-[0_25px_45px_rgba(18,24,43,0.6)]"
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
