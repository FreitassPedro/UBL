import { useState, useMemo } from "react";
import { Link, useParams } from "react-router-dom";

import { useCourseProgress } from "../../contexts/CourseProgressContext";

import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { VideoPlayer } from "../../components/CourseContent/VideoPlayer";
import { CourseSidebar } from "../../components/CourseContent/CourseSidebar";
import { CurriculoCC } from "../../data/gradeCurricular";
import type { MyCadeiraProgress, MyLesson } from "../../data/myCourseProgress";
import { mapCadeiraToMyCadeira } from "../../lib/utils";
import useTituloDaPagina from "../../contexts/useTitlePage";


export default function CoursePage() {
  useTituloDaPagina('Curso');

  const { id } = useParams<{ id: string }>();
  const { completedLessons } = useCourseProgress();

  const myCadeira: MyCadeiraProgress | undefined = useMemo(() => {
    if (!id) return;

    const cadeiraEncontrada = CurriculoCC.etapas.flatMap(etapa => etapa.cadeiras).find(c => c.id.toString() === id);
    if (!cadeiraEncontrada) return;

    return mapCadeiraToMyCadeira(cadeiraEncontrada, completedLessons);
  }, [completedLessons, id]);

  const [selectedLesson, setSelectedLesson] = useState<MyLesson | undefined>(() => {
    if (!myCadeira || myCadeira.lessons.length === 0) return undefined;
    return myCadeira.lessons[0];
  });

  const handleSelectLesson = (lesson: MyLesson) => {
    setSelectedLesson(lesson);
  };


  if (!myCadeira || myCadeira.lessons.length === 0) {
    return (
      <div className="container mx-auto py-6 max-w-[1400px] text-center">
        <Link to="/" >
          <button className="px-4 py-2 text-white bg-blue-900 rounded-md hover:bg-blue-700 focus:outline-none">
            Voltar
          </button>
        </Link>
        <h1 className="text-3xl font-bold mt-8">Este curso não possui vídeos disponíveis ainda.</h1>
        <p className="text-muted-foreground mt-2">Por favor, volte mais tarde ou confira outros cursos.</p>
      </div>
    );
  }


  return (
    <div className="min-h-screen bg-bg-body text-text-main flex justify-center overflow-hidden font-inter p-6">
      <div className="w-full max-w-6xl h-[85vh] grid grid-cols-1 lg:grid-cols-[2.5fr_1fr] gap-6">
        <main className="flex flex-col p-8 bg-bg-card border border-zinc-800 rounded-xl shadow-2xl shadow-black/40 overflow-hidden">
          { /* video player */}
          <VideoPlayer videoId={selectedLesson!.videoId} />

          { /* professor infos */}
          <div>

          </div>
        </main>

        { /* sidebar com lista de aulas */}
        <aside className="flex flex-col gap-6 p-8 bg-bg-card border border-zinc-800 rounded-xl">
          {/* Progress */}
          <div>
            80% concluído
          </div>
          {/* Videos */}
          <div className="flex flex-col h-full overflow-hidden">
            <h3>Aulas</h3>
            <ul>
              {myCadeira.lessons.map((lesson) => (
                <li className="flex items-center cursor-pointer"
                  key={lesson.id}
                  onClick={() => handleSelectLesson(lesson)}
                >
                  <span className={`${lesson.id === selectedLesson?.id ? 'text-text-main font-medium' : 'font-light text-text-muted'} hover:text-gray-200`}>{lesson.title}</span>
                  <span>{lesson.duration}</span>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}