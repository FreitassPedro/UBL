import { Card } from "@/components/ui/card";
import type { CourseOption } from "@/hooks/useMyCourseData";
import { getCourseSlug } from "@/hooks/useMyCourseData";
import { cn } from "@/lib/utils";
import { ArrowRight, Binary, Sigma } from "lucide-react";
import type { JSX } from "react";
import { Link } from "react-router-dom";

type MyCourseSelectorProps = {
  onSelect?: (course: CourseOption) => void;
};

const MyCourseSelector = ({ onSelect }: MyCourseSelectorProps) => {
  const options: Array<{
    id: CourseOption;
    title: string;
    description: string;
    icon: JSX.Element;
    accentText: string;
    accentBorder: string;
    accentBg: string;
    accentGlow: string;
  }> = [
    {
      id: "Matematica",
      title: "Matemática",
      description: "Fundamentos e modelos para resolver problemas complexos.",
      icon: <Sigma className="h-6 w-6 text-ubl-blue" />,
      accentText: "text-ubl-blue",
      accentBorder: "border-ubl-blue/40",
      accentBg: "bg-ubl-blue/10",
      accentGlow: "from-ubl-blue/25 via-transparent to-transparent",
    },
    {
      id: "Computacao",
      title: "Ciência da Computação",
      description: "Algoritmos, dados e sistemas para construir software.",
      icon: <Binary className="h-6 w-6 text-ubl-green" />,
      accentText: "text-ubl-green",
      accentBorder: "border-ubl-green/40",
      accentBg: "bg-ubl-green/10",
      accentGlow: "from-ubl-green/25 via-transparent to-transparent",
    },
  ];

  return (
    <section className="mx-auto w-full max-w-7xl overflow-hidden rounded-2xl border border-zinc-800/80 bg-zinc-900 p-10 sm:p-12 md:p-14 lg:p-16">
      <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-ubl-blue/10 via-transparent to-ubl-green/10 opacity-50" />
      <div className="relative z-10 grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.25fr)] lg:items-center">
        <header className="space-y-3">
          <p className="text-xs uppercase tracking-[0.32em] text-zinc-500">
            Escolha sua trilha
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-medium text-zinc-100 tracking-tight">
            O que você quer aprender hoje?
          </h1>
          <p className="text-base md:text-lg text-zinc-400 leading-relaxed">
            Selecione uma área para montar sua jornada com foco, ritmo e
            progresso visível.
          </p>
        </header>

        <div className="grid gap-4 sm:grid-cols-2">
          {options.map((option) => (
            <Link
              key={option.id}
              to={`/meu-curso/${getCourseSlug(option.id)}`}
              onClick={() => onSelect?.(option.id)}
              className="group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-500 rounded-2xl"
            >
              <Card
                className={cn(
                  "relative h-full cursor-pointer overflow-hidden border border-zinc-700/80 bg-zinc-900 p-4 transition-transform duration-200 ease-out sm:p-5 group-hover:scale-[1.02]",
                  option.accentBorder,
                )}
              >
                <div
                  className={cn(
                    "pointer-events-none absolute inset-0 bg-linear-to-br opacity-60 transition-opacity duration-300 group-hover:opacity-80",
                    option.accentGlow,
                  )}
                />
                <div className="relative z-10 flex h-full flex-col">
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-2">
                      <h2 className="text-lg md:text-xl font-semibold text-zinc-100">
                        {option.title}
                      </h2>
                      <p className="text-sm md:text-base text-zinc-400 leading-relaxed">
                        {option.description}
                      </p>
                    </div>
                    <div
                      className={cn(
                        "shrink-0 rounded-lg border p-3",
                        option.accentBorder,
                        option.accentBg,
                      )}
                    >
                      {option.icon}
                    </div>
                  </div>

                  <div className="mt-auto flex items-center justify-end pt-5 text-xs font-medium text-zinc-500">
                    <span
                      className={cn(
                        "inline-flex items-center gap-2",
                        option.accentText,
                      )}
                    >
                      Selecionar
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyCourseSelector;
