import { useState, useMemo } from "react";
import { Link, useParams } from "react-router-dom";

import { useCourseProgress } from "../../contexts/CourseProgressContext";

import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { VideoPlayer } from "../../components/CourseContent/VideoPlayer";
import { CourseSidebar } from "../../components/CourseContent/CourseSidebar";
import { CurriculoCC } from "../../data/gradeCurricular";
import type { MyCadeiraProgress, MyLesson } from "../../data/myCourseProgress";
import { mapCadeiraToMyCadeira } from "../../lib/utils";


export default function CoursePage() {
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
    <div className="container mx-auto py-6 max-w-[1400px]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-8">
          <div className="space-y-6">
            <Link to="/" >
              <button className="px-4 py-2 text-white bg-blue-900 rounded-md hover:bg-blue-700 focus:outline-none">
                Voltar
              </button>
            </Link>
            <div>
              <h1 className="text-3xl font-bold mb-2">{myCadeira.name}</h1>
              <p className="text-muted-foreground">Descrição Cadeira </p>
            </div>

            <VideoPlayer
              videoId={selectedLesson!.id}
            />
            <Card>
              <CardHeader>
                <CardTitle>Sobre o Professor</CardTitle>
              </CardHeader>
              <CardContent className="flex items-start space-x-4">
                <img
                  src={"/placeholder.svg"}
                  alt={"/placeholder.svg"}
                  className="w-24 h-24 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold">{"courseData.professor.name"}</h3>
                  <p className="text-sm text-muted-foreground">{"courseData.professor.bio"}</p>
                </div>
              </CardContent>
            </Card>

          </div>
        </div>

        <div className="lg:col-span-4">
          <CourseSidebar
            cadeira={myCadeira}
            selectedLesson={selectedLesson!}
            onSelectLesson={handleSelectLesson}
          />
        </div>
      </div>
    </div>
  );
}