import { Button } from "@/components/ui/button";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { ArrowRight, BookOpen, Map, User } from "lucide-react";
import { Link } from "react-router-dom";

export const HomeHero = () => {
  return (
    <main className="relative z-10 max-w-7xl px-6 sm:px-10 lg:px-14 mx-auto min-h-[calc(100svh-3.5rem)] flex flex-col md:flex-row items-center justify-center gap-10 sm:gap-12 md:gap-16 py-10 sm:py-16 md:py-24 container">
      <div className="order-2 md:order-1 flex flex-col items-center justify-center text-center md:items-start md:text-left md:flex-1">
        <h1 className="mb-6 sm:mb-7 text-[3rem] sm:text-5xl md:text-[5.1rem] lg:text-[5.6rem] font-semibold leading-none sm:leading-[0.95] tracking-[-0.03em] bg-clip-text text-transparent bg-linear-to-br from-ubl-green to-ubl-blue">
          Universidade{" "}
          <span className="whitespace-nowrap">Brasileira Livre</span>
        </h1>

        <div className="space-y-4 sm:space-y-5 max-w-2xl">
          <p className="text-base sm:text-xl md:text-2xl text-zinc-200/90 font-light leading-relaxed">
            Uma plataforma{" "}
            <span className="font-semibold text-zinc-50">
              sem fins lucrativos
            </span>{" "}
            de apoio de estudantes e conhecimentos em torno de diferentes
            currículos de código aberto.
          </p>
        </div>

        <div className="mt-6 sm:mt-8 flex items-center justify-center md:justify-start">
          <TypewriterEffect
            words={[
              { text: "Planeje," },
              { text: "acompanhe" },
              { text: "e" },
              { text: "aprenda." },
            ]}
            className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-left"
            cursorClassName="bg-ubl-blue h-4 sm:h-5 md:h-7 lg:h-9"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 w-full mt-8 sm:mt-10 max-w-2xl mx-auto md:mx-0">
          <Button
            asChild
            size={"lg"}
            className="bg-zinc-800 text-zinc-100 hover:bg-zinc-800/90 border border-zinc-700/90"
          >
            <a
              href="https://github.com/Universidade-Livre"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all hover:scale-105 flex items-center gap-2"
            >
              <User className="w-4 h-4" />
              <span className="text-base sm:text-xl">Sobre nós</span>
            </a>
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
              <span className="text-base sm:text-xl">Explorar Grade</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>

          <Button
            asChild
            size={"lg"}
            className="col-span-1 sm:col-span-2 bg-ubl-green text-zinc-100 hover:bg-ubl-green/90"
          >
            <Link
              to="/meu-curso"
              className="hover:scale-105 transition-all duration-300"
            >
              <BookOpen className="w-4 h-4" />
              <span className="text-base sm:text-xl">Começar a Estudar</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>

      <div className="order-1 md:order-2 flex md:flex-1 md:ml-6 items-center justify-center h-full w-full mb-0 sm:mb-4 md:mb-0">
        <img
          src="https://github.com/Universidade-Livre/imagens/blob/main/logos/PNG/Logo-sem-fundo-padr%C3%A3o/LOGO-UBL-SEM-FUNDO-11.png?raw=true"
          alt="Logo UBL"
          className="w-full max-w-48 sm:max-w-xs md:max-w-md lg:max-w-lg h-auto object-contain"
        />
      </div>
    </main>
  );
};

export default HomeHero;
