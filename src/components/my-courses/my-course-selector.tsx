import MyCourseSelectorPreview from "@/components/my-courses/my-course-selector-preview";
import { LucideIcon } from "lucide-react";

interface MyCourseSelectorProps {
  courses: {
    slug: string;
    name: string;
    description: string;
    icon: LucideIcon;
    accentText: string;
    accentBorder: string;
    accentBackground: string;
    accentGlow: string;
  }[];
}

export const MyCourseSelector = ({ courses }: MyCourseSelectorProps) => {
  return (
    <section className="relative mx-auto grid w-full max-w-7xl gap-6 overflow-hidden rounded-2xl border border-zinc-800/80 bg-zinc-900 p-10 before:pointer-events-none before:absolute before:inset-0 before:bg-linear-to-br before:from-ubl-blue/10 before:via-transparent before:to-ubl-green/10 before:opacity-50 sm:p-12 md:p-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.25fr)] lg:items-center lg:p-16">
      <header className="relative z-10 space-y-3">
        <p className="text-xs uppercase tracking-[0.32em] text-zinc-500">
          Escolha sua trilha
        </p>
        <h1 className="text-3xl font-medium tracking-tight text-zinc-100 sm:text-4xl md:text-5xl">
          O que você quer aprender hoje?
        </h1>
        <p className="text-base leading-relaxed text-zinc-400 md:text-lg">
          Selecione uma área para montar sua jornada com foco, ritmo e progresso
          visível.
        </p>
      </header>
      <div className="relative z-10 grid gap-4 sm:grid-cols-2">
        {courses.map((course) => (
          <MyCourseSelectorPreview key={course.slug} course={course} />
        ))}
      </div>
    </section>
  );
};

export default MyCourseSelector;
