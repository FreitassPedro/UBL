import { useState, useMemo, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import { useCourseProgress } from "../../contexts/CourseProgressContext/CourseProgressContext";

import { VideoPlayer } from "../../components/CourseContent/VideoPlayer";
import { CurriculoCC } from "../../data/gradeCurricular";
import type { MyCadeiraProgress, MyLesson } from "../../data/myCourseProgress";
import { mapCadeiraToMyCadeira } from "../../lib/utils";
import useTituloDaPagina from "../../components/useTitlePage";
import { useLoading } from "../../contexts/LoadingContext/LoadingContext";
import { ChevronRight, HomeIcon } from "lucide-react";

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
      <li className={`px-2 my-1 flex items-center justify-between gap-2 py-2 border-b rounded-lg border-white/10 ${lesson.isCompleted ? "bg-bg-hover" : ""} `}
        key={lesson.id}
      >
        {/* Marcar como assistida */}
        <button className={`w-4 h-4 flex items-center justify-center rounded-full border cursor-pointer ${statusClass} `}
          onClick={() => toggleCompletion(lesson.id)}
        >
          <span className="text-xs text-black font-bold ">{statusContent}</span>
        </button>
        {/* Título e duração da aula */}
        <div onClick={() => handleSelectLesson(lesson)} className="flex-1">
          <span className={`${lesson.id === selectedLesson?.id ? 'text-text-main font-medium' : 'font-light text-text-muted'} hover:text-gray-200 text-sm block cursor-pointer`}>{lesson.title}</span>
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
    <div className="min-h-screen bg-bg-body text-text-main overflow-hidden font-inter">
      <div className="w-full my-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-6 gap-6">

        {/* COLUNA PRINCIPAL (VÍDEO CARD) */}
        <main className="flex flex-col p-6 bg-bg-card border border-zinc-800 rounded-xl shadow-2xl shadow-black/40 lg:col-span-4">            { /* Breadcrumbs */}
          <nav aria-label="breadcrumb">
            <ol className="flex items-center space-x-1 text-gray-400 text-sm text-center ">
              <li>
                <Link to="/" className="hover:text-gray-200 cursor-pointer"><HomeIcon size={14} /></Link>
              </li>
              <ChevronRight size={14} />

              <li>
                <Link to="/meu-curso" className="hover:text-gray-200 cursor-pointer">
                  Cadeira
                </Link>
              </li>
              <ChevronRight size={14} />
              <li>
                <Link to="/meu-curso" className="hover:text-gray-200 cursor-pointer">{myCadeira.name}</Link>
              </li>
              <ChevronRight size={14} />
              <li>
                <button className="text-gray-200 font-medium cursor-pointer">{selectedLesson?.title}</button>
              </li>
            </ol>
          </nav>

          { /* Video player */}
          <div className="w-full">
            <VideoPlayer
              videoId={selectedLesson!.url}
              key={selectedLesson?.id}
              onLoaded={hideLoader} />
          </div>

          { /* Checkbox */}
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
        <aside className="flex flex-col gap-3 py-6 pl-6 pr-4 bg-bg-card border border-zinc-800 rounded-xl lg:col-span-2">

          {/* Header da sidebar */}
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">Playlist de Aulas</h3>
            <span className="text-xs text-text-muted px-2 py-1 bg-zinc-600/20 rounded-full border ">{`${myCadeira.totalCompleted} de ${myCadeira.lessons.length}`}</span>
          </div>

          {/* Videos List */}
          <div className="flex flex-col flex-1 overflow-hidden">
            <ul className="overflow-y-auto space-y-2
                  pr-1 h-full
                  [&::-webkit-scrollbar]:w-2
                  [&::-webkit-scrollbar-track]:rounded-full
                  [&::-webkit-scrollbar-track]:bg-gray-100
                  [&::-webkit-scrollbar-thumb]:rounded-full
                  [&::-webkit-scrollbar-thumb]:bg-gray-300
                  dark:[&::-webkit-scrollbar-track]:bg-neutral-700
                  dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500"
            >
              {myCadeira.lessons.map((lesson) => (
                <ClassSideBarItem
                  key={lesson.id}
                  lesson={lesson}
                  isSelected={selectedLesson?.id === lesson.id}
                  onSelect={handleSelectLesson} />
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}