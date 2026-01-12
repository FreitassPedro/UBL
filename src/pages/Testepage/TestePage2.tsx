import { Progress } from "@/components/ui/progress";
import { useCourseProgress } from "@/contexts/CourseProgressContext/CourseProgressContext";
import { CurriculoCC } from "@/data/GradeCurricular";
import { mapGradeToMyGradeProgress } from "@/lib/mappers";
import type { MyCadeiraProgress } from "@/types/progress";
import { ArrowRight } from "lucide-react";
import { useMemo } from "react";
import { Link } from "react-router-dom";

type WatchedCourse = MyCadeiraProgress & { etapaName: string; etapaNumber: number };

const TestePage2 = () => {

  const { completedLessons } = useCourseProgress();

  const watchedCourses = useMemo<WatchedCourse[]>(() => {
    const mappedGrade = mapGradeToMyGradeProgress(CurriculoCC, completedLessons);

    const allCourses = mappedGrade.etapas.flatMap((etapa) =>
      etapa.cadeiras.map((cadeira) => ({
        ...cadeira,
        etapaName: etapa.name,
        etapaNumber: etapa.number,
      }))
    );

    return allCourses
      .filter((cadeira) => cadeira.progress > 0 && !cadeira.isCompleted)
      .sort((a, b) => b.totalCompleted - a.totalCompleted || b.progress - a.progress)
      .slice(0, 4);
  }, [completedLessons]);

  return (

    <div className="bg-black text-text-main min-h-screen flex flex-col items-center justify-center p-6">

      <div className="flex items-center justify-between mb-8">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-blue-300/70 font-semibold">Continuar assistindo</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-white mt-2 tracking-tight">Cursos em andamento</h2>
          <p className="text-zinc-400 mt-2 max-w-2xl">Retome rapidamente as cadeiras que você já começou a assistir.</p>
        </div>

        <Link
          to="/meu-curso"
          className="hidden sm:inline-flex h-11 items-center gap-2 rounded-lg border border-zinc-800 px-4 text-sm font-medium text-zinc-200 hover:border-zinc-700 hover:bg-zinc-900/60 transition-colors"
        >
          Ver dashboard
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
      {watchedCourses.length !== 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {watchedCourses.map((course) => (
            <div className="p-6 bg-bg-card bg-ubl rounded-xl border border-zinc-800 hover:border-zinc-700 transition duration-300">
              <span className="font-semibold text-gray-400 mb-4">Etapa XX</span>
              <h3 className="text-xl text-white font-semibold">{course.name}</h3>

              <div className="my-4 space-y-1">
                <div className="flex items-center justify-between text-gray-400 text-sm">
                  <span>Progresso</span>
                  <span>{course.progress}%</span>
                </div>
                <Progress value={course.progress} />
              </div>
              <div className="mt-6 w-full flex">
                <Link to={""}
                  className="px-4 py-2 bg-white rounded-lg text-sm font-semibold text-gray-800 w-full text-center hover:bg-gray-200 transition-colors">
                  Retomar
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
      <section className="relative z-10 max-w-6xl mx-auto px-6 pb-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-blue-300/70 font-semibold">Continuar assistindo</p>
            <h2 className="text-3xl md:text-4xl font-semibold text-white mt-2 tracking-tight">Cursos em andamento</h2>
            <p className="text-zinc-400 mt-2 max-w-2xl">Retome rapidamente as cadeiras que você já começou a assistir.</p>
          </div>

          <Link
            to="/meu-curso"
            className="hidden sm:inline-flex h-11 items-center gap-2 rounded-lg border border-zinc-800 px-4 text-sm font-medium text-zinc-200 hover:border-zinc-700 hover:bg-zinc-900/60 transition-colors"
          >
            Ver dashboard
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {watchedCourses.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-zinc-800 bg-zinc-900/40 p-8 text-center">
            <p className="text-lg font-semibold text-white">Nenhum curso iniciado ainda</p>
            <p className="text-zinc-400 mt-2">Comece uma cadeira para vê-la aqui e continuar de onde parou.</p>
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                to="/meu-curso"
                className="inline-flex h-11 items-center justify-center rounded-lg bg-white px-6 text-sm font-semibold text-zinc-900 hover:bg-zinc-200 transition-colors"
              >
                Abrir meu dashboard
              </Link>
              <Link
                to="/grade-curricular"
                className="inline-flex h-11 items-center justify-center rounded-lg border border-zinc-800 px-6 text-sm font-semibold text-zinc-200 hover:border-zinc-700 hover:bg-zinc-900/60 transition-colors"
              >
                Explorar grade
              </Link>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {watchedCourses.map((course) => (
              <div
                key={course.id}
                className="relative overflow-hidden rounded-2xl border border-zinc-800 bg-bg-card/80 p-6 shadow-2xl shadow-black/30 transition duration-300 hover:-translate-y-1 hover:border-zinc-700"
              >
                <div className="relative flex items-start justify-between gap-4">
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wide text-blue-200/80">{course.etapaName}</span>
                    <h3 className="mt-1 text-xl font-semibold text-white leading-tight">{course.name}</h3>
                    <p className="text-sm text-zinc-400 mt-1">{course.totalCompleted} de {course.lessons.length} aulas concluídas</p>
                  </div>
                  <span className="rounded-full bg-zinc-900/70 border border-white/5 px-3 py-1 text-sm font-semibold text-white">{course.progress}%</span>
                </div>
                <div className="relative mt-4 space-y-2">
                  <div className="flex items-center justify-between text-xs text-zinc-400">
                    <span>Progresso</span>
                    <span>{course.progress}%</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-zinc-900 overflow-hidden">
                    <Progress value={course.progress} />
                  </div>
                </div>

                <div className="relative mt-6 flex items-center justify-between gap-3">
                  <Link
                    to={`/curso/${course.id}`}
                    className="inline-flex h-10 items-center justify-center rounded-lg bg-white px-4 text-sm font-semibold text-zinc-900 hover:bg-zinc-200 transition-colors"
                  >
                    Retomar curso
                  </Link>
                  <Link
                    to="/meu-curso"
                    className="text-sm font-medium text-blue-200 hover:text-white flex items-center gap-1"
                  >
                    Ver etapa
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  )
};

/*
<section className="relative z-10 max-w-6xl mx-auto px-6 pb-16">
  <div className="flex items-center justify-between mb-8">
    <div>
      <p className="text-sm uppercase tracking-[0.2em] text-blue-300/70 font-semibold">Continuar assistindo</p>
      <h2 className="text-3xl md:text-4xl font-semibold text-white mt-2 tracking-tight">Cursos em andamento</h2>
      <p className="text-zinc-400 mt-2 max-w-2xl">Retome rapidamente as cadeiras que você já começou a assistir.</p>
    </div>

    <Link
      to="/meu-curso"
      className="hidden sm:inline-flex h-11 items-center gap-2 rounded-lg border border-zinc-800 px-4 text-sm font-medium text-zinc-200 hover:border-zinc-700 hover:bg-zinc-900/60 transition-colors"
    >
      Ver dashboard
      <ArrowRight className="w-4 h-4" />
    </Link>
  </div>

  {watchedCourses.length === 0 ? (
    <div className="rounded-2xl border border-dashed border-zinc-800 bg-zinc-900/40 p-8 text-center">
      <p className="text-lg font-semibold text-white">Nenhum curso iniciado ainda</p>
      <p className="text-zinc-400 mt-2">Comece uma cadeira para vê-la aqui e continuar de onde parou.</p>
      <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
        <Link
          to="/meu-curso"
          className="inline-flex h-11 items-center justify-center rounded-lg bg-white px-6 text-sm font-semibold text-zinc-900 hover:bg-zinc-200 transition-colors"
        >
          Abrir meu dashboard
        </Link>
        <Link
          to="/grade-curricular"
          className="inline-flex h-11 items-center justify-center rounded-lg border border-zinc-800 px-6 text-sm font-semibold text-zinc-200 hover:border-zinc-700 hover:bg-zinc-900/60 transition-colors"
        >
          Explorar grade
        </Link>
      </div>
    </div>
  ) : (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      {watchedCourses.map((course) => (
        <div
          key={course.id}
          className="relative overflow-hidden rounded-2xl border border-zinc-800 bg-bg-card/80 p-6 shadow-2xl shadow-black/30 transition duration-300 hover:-translate-y-1 hover:border-zinc-700"
        >
          <div className="relative flex items-start justify-between gap-4">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wide text-blue-200/80">{course.etapaName}</span>
              <h3 className="mt-1 text-xl font-semibold text-white leading-tight">{course.name}</h3>
              <p className="text-sm text-zinc-400 mt-1">{course.totalCompleted} de {course.lessons.length} aulas concluídas</p>
            </div>
            <span className="rounded-full bg-zinc-900/70 border border-white/5 px-3 py-1 text-sm font-semibold text-white">{course.progress}%</span>
          </div>
          <div className="relative mt-4 space-y-2">
            <div className="flex items-center justify-between text-xs text-zinc-400">
              <span>Progresso</span>
              <span>{course.progress}%</span>
            </div>
            <div className="h-2 w-full rounded-full bg-zinc-900 overflow-hidden">
              <TesteProgress value={course.progress} />
            </div>
          </div>

          <div className="relative mt-6 flex items-center justify-between gap-3">
            <Link
              to={`/curso/${course.id}`}
              className="inline-flex h-10 items-center justify-center rounded-lg bg-white px-4 text-sm font-semibold text-zinc-900 hover:bg-zinc-200 transition-colors"
            >
              Retomar curso
            </Link>
            <Link
              to="/meu-curso"
              className="text-sm font-medium text-blue-200 hover:text-white flex items-center gap-1"
            >
              Ver etapa
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      ))}
    </div>
  )}
</section>
*/


export default TestePage2;