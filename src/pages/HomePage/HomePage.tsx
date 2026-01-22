import studyIllustration2 from "@/assets/imgs/studyIllustion2.png";
import studyIllustration from "@/assets/imgs/studyIllustration.png";
import { HomeProgress } from "@/components/Home/HomeProgress";
import { BackgroundGrid } from "@/components/ui/BackgroundGrid";
import { Button } from "@/components/ui/button";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { ArrowRight, BookOpen, Map, MessagesSquare, User } from "lucide-react";
import { Link } from "react-router-dom";

export const HomePage: React.FC = () => {
  return (
    <div className="relative min-h-full h-full bg-[#06070b] text-zinc-100 selection:bg-blue-500/30 font-sans overflow-hidden">
      {/* Background Effects (Grid + Glow) */}

      <BackgroundGrid />
      {/* HERO SECTION */}
      <main className="relative z-10 max-w-7xl px-6 sm:px-10 lg:px-14 mx-auto min-h-full h-full flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16 py-16 md:py-24 container">
        {/* Conteúdo Principal */}
        <div className="flex flex-col items-center justify-center text-center md:items-start md:text-left md:flex-1">
          {/* Título Principal */}
          <h1 className="mb-7 text-4xl sm:text-6xl md:text-[5.1rem] lg:text-[5.6rem] font-semibold leading-[0.95] tracking-[-0.035em] bg-clip-text text-transparent bg-linear-to-br from-ubl-green to-ubl-blue">
            Universidade{" "}
            <span className="whitespace-nowrap">Brasileira Livre</span>
          </h1>

          {/* Subtítulo */}
          <div className="space-y-5 max-w-2xl">
            <p className="text-lg sm:text-xl md:text-2xl text-zinc-200/90 font-light leading-relaxed">
              Uma plataforma{" "}
              <span className="font-semibold text-zinc-50">
                sem fins lucrativos
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
              className="col-span-2 bg-ubl-green py-7 text-zinc-100 hover:bg-ubl-green/90"
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
          </div>
        </div>

        {/* Logo da UBL */}
        <div className="flex items-center justify-center h-full w-full md:ml-6 md:flex-1">
          <img
            src="https://github.com/Universidade-Livre/imagens/blob/main/logos/PNG/Logo-sem-fundo-padr%C3%A3o/LOGO-UBL-SEM-FUNDO-11.png?raw=true"
            alt="Logo UBL"
            className="w-full h-full object-contain"
          />
        </div>
      </main>

      <HomeProgress />

      <section className="relative z-10 mx-auto bg-zinc-900 flex items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-w-6xl">
          <div className="space-y-4">
            <h2 className="mb-6 text-4xl sm:text-5xl md:text-[3.5rem] font-semibold leading-[1.05] tracking-[-0.03em] bg-clip-text text-transparent bg-linear-to-br from-zinc-100 via-zinc-300 to-zinc-400">
              Customize sua trilha
            </h2>
            <p className="text-base sm:text-lg text-zinc-200/90 font-light leading-relaxed">
              Nós organizamos uma completa biblioteca de conteúdos bem
              avaliados, para então você escolher o jeito que mais combina com
              seu estilo de aprendizado.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <img
              src={studyIllustration}
              alt=""
              className="w-full max-w-md h-auto"
            />
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto bg-[#141414] flex items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl">
          <div className="flex items-center justify-center">
            <a href="http://www.freepik.com" className="invisible">
              Designed by vectorjuice / Freepik
            </a>
            <img
              src={studyIllustration2}
              alt=""
              className="w-full max-w-md h-auto"
            />
          </div>
          <div className="space-y-2">
            <h2 className="mb-6 text-4xl sm:text-5xl md:text-[3.5rem] font-semibold leading-[1.05] tracking-[-0.03em] bg-clip-text text-transparent bg-linear-to-br from-zinc-100 via-zinc-300 to-zinc-400">
              Nossa comunidade pronta para ajudar
            </h2>
            <p className="text-base sm:text-lg text-zinc-200/90 font-light">
              Una-se a outros estudantes e compartilhe suas dúvidas e
              conhecimentos no nosso Discord.
            </p>
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="cursor-pointer mt-6"
            >
              <a
                href="https://discord.com/invite/eXUBTY6HAu"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <MessagesSquare className="w-4 h-4" />
                <span>Entrar no Discord</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
