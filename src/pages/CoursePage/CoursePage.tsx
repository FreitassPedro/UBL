import { useState, useMemo, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import { useCourseProgress } from "../../contexts/CourseProgressContext/CourseProgressContext";

import { VideoPlayer } from "../../components/CourseContent/VideoPlayer";
import { CurriculoCC } from "../../data/gradeCurricular";
import type { MyCadeiraProgress, MyLesson } from "../../data/myCourseProgress";
import { mapCadeiraToMyCadeira } from "../../lib/utils";
import useTituloDaPagina from "../../components/useTitlePage";
import { useLoading } from "../../contexts/LoadingContext/LoadingContext";

export default function CoursePage() {
  useTituloDaPagina('Curso');
  const { id } = useParams<{ id: string }>();
  const { toggleCompletion, completedLessons } = useCourseProgress();

  const { showLoader, hideLoader } = useLoading();

  const myCadeira: MyCadeiraProgress | undefined = useMemo(() => {
    if (!id) return;

    const cadeiraEncontrada = CurriculoCC.etapas
      .flatMap(etapa => etapa.cadeiras)
      .find(c => c.id.toString() === id);
    if (!cadeiraEncontrada) return;

    return mapCadeiraToMyCadeira(cadeiraEncontrada, completedLessons);
  }, [completedLessons, id]);

  const [selectedLessonId, setSelectedLessonId] = useState<string | number | undefined>(() => {
    return myCadeira?.lessons[0]?.id || undefined;
  });

  const selectedLesson = useMemo(() => {
    return myCadeira?.lessons.find(lesson => lesson.id === selectedLessonId);
  }, [myCadeira, selectedLessonId]);

  const handleSelectLesson = (lesson: MyLesson) => {
    setSelectedLessonId(lesson.id);
  };

  useEffect(() => {
    if (selectedLessonId) showLoader();

    return () => {
      hideLoader();
    }
  }, [selectedLessonId]);

  const ClassSideBarItem: React.FC<{ lesson: MyLesson; isSelected: boolean; onSelect: (lesson: MyLesson) => void }> = ({ lesson }) => {
    let statusClass = '';
    let statusContent = '';

    if (lesson.isCompleted) {
      statusClass = 'bg-success border-success';
      statusContent = '✓';
    } else {
      statusClass = 'border-border-subtle';
    }

    return (
      <li className={`flex items-center cursor-pointer py-2 px-2 border-b rounded-lg border-white/10 ${lesson.isCompleted ? "bg-bg-hover my-2 " : ""} `}
        key={lesson.id}
      >
        {/* Marcar como assistida */}
        <button className={`w-4 h-4 flex items-center mr-2 justify-center rounded-full border ${statusClass} `}
          onClick={() => toggleCompletion(lesson.id)}
        >
          <span className="text-xs text-black font-bold">{statusContent}</span>
        </button>
        {/* Título e duração da aula */}
        <div onClick={() => handleSelectLesson(lesson)} className="flex-1">
          <span className={`${lesson.id === selectedLesson?.id ? 'text-text-main font-medium' : 'font-light text-text-muted'} hover:text-gray-200 text-sm block`}>{lesson.title}</span>
          <span className="text-xs text-zinc-800">{lesson.duration}</span>
        </div>
      </li>
    )
  }

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

      <div className="w-full my-6 max-w-6xl h-[85vh] grid grid-cols-1 lg:grid-cols-[2.5fr_1fr] gap-6">
        <main className="flex flex-col p-8 bg-bg-card border border-zinc-800 rounded-xl shadow-2xl shadow-black/40 overflow-hidden">
          { /* video player */}
          <span className="text-sm font-medium text-gray-300">{`Aula > ${myCadeira.id} > ${myCadeira.name}`}</span>
          <div className="w-full">
            <VideoPlayer
              videoId={selectedLesson!.url}
              key={selectedLesson?.id}
              onLoaded={hideLoader} />
          </div>
          { /* professor infos */}
          <div className="flex items-center w-max px-3 py-2 space-x-2 mb-4 bg-bg-card rounded-lg border border-white/20">
            <input
              type="checkbox"
              className="cursor-pointer w-4 h-4 accent-success"
              checked={selectedLesson?.isCompleted || false}
              onChange={() => toggleCompletion(selectedLesson!.id)}
            />
            <span className="text-md text-shadow-text-main">
              {selectedLesson?.isCompleted ? "Concluída" : "Pendente"}
            </span>
          </div>

          <h1 className="mb-2 text-2xl font-light">{selectedLesson?.title}</h1>
        </main>

        { /* sidebar com lista de aulas */}
        <aside className="flex flex-col gap-6 py-6 pl-6 pr-4 overflow-hidden bg-bg-card border border-zinc-800 rounded-xl">
          <h3 className="text-md">Playlist de Aulas</h3>

          {/* Videos */}

          <div className="flex flex-col h-full overflow-hidden">
            <span className="text-sm text-text-muted">{`Concluído: ${myCadeira.totalCompleted} de ${myCadeira.lessons.length}`}</span>
            <ul className="overflow-y-auto pr-1 [&::-webkit-scrollbar]:w-2
                  [&::-webkit-scrollbar-track]:rounded-full
                  [&::-webkit-scrollbar-track]:bg-gray-100
                  [&::-webkit-scrollbar-thumb]:rounded-full
                  [&::-webkit-scrollbar-thumb]:bg-gray-300
                  dark:[&::-webkit-scrollbar-track]:bg-neutral-700
                  dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500"
            >
              {myCadeira.lessons.map((lesson) => (
                <ClassSideBarItem key={lesson.id} lesson={lesson} isSelected={selectedLesson?.id === lesson.id} onSelect={handleSelectLesson} />
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}