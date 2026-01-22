import { Card } from "@/components/ui/card";
import type { CourseOption } from "@/hooks/useMyCourseData";
import { Binary, Sigma } from "lucide-react";
import type { JSX } from "react";

type MyCourseSelectorProps = {
  onSelect: (course: CourseOption) => void;
};

const MyCourseSelector = ({ onSelect }: MyCourseSelectorProps) => {
  const options: Array<{
    id: CourseOption;
    title: string;
    description: string;
    hint: string;
    icon: JSX.Element;
  }> = [
    {
      id: "Computacao",
      title: "Ciencia da Computacao",
      description: "Algoritmos, dados e sistemas para construir software.",
      hint: "Logica, arquitetura e engenharia",
      icon: <Binary className="h-6 w-6 text-zinc-100" />,
    },
    {
      id: "Matematica",
      title: "Matematica",
      description: "Fundamentos e modelos para resolver problemas complexos.",
      hint: "Calculo, algebra e prova",
      icon: <Sigma className="h-6 w-6 text-zinc-100" />,
    },
  ];

  return (
    <div className="space-y-8 md:space-y-10">
      <header className="space-y-3">
        <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">
          Escolha sua trilha
        </p>
        <h1 className="text-3xl md:text-4xl font-semibold text-zinc-100">
          O que voce quer aprender hoje?
        </h1>
        <p className="text-sm md:text-base text-zinc-400 max-w-2xl leading-relaxed">
          Selecione uma area para montar sua jornada com foco, ritmo e progresso
          visivel.
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-2">
        {options.map((option) => (
          <Card
            key={option.id}
            role="button"
            tabIndex={0}
            onClick={() => onSelect(option.id)}
            className="cursor-pointer border border-zinc-800/80 bg-zinc-900/40 p-7 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-500"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-lg md:text-xl font-medium text-zinc-100">
                  {option.title}
                </h2>
                <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
                  {option.description}
                </p>
              </div>
              <div className="shrink-0 rounded-lg border border-zinc-700/70 bg-zinc-800/70 p-3">
                {option.icon}
              </div>
            </div>
            <div className="mt-6 flex items-center justify-between text-xs text-zinc-500">
              <span>{option.hint}</span>
              <span className="text-zinc-400">Selecionar</span>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default MyCourseSelector;
