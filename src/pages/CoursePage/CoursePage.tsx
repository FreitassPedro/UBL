import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import { useCourseProgress } from "../../contexts/CourseProgressContext";
import type { Course, Video } from "../../types/course";
import { coursesData } from "../../data/coursesData";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { VideoPlayer } from "../../components/CourseContent/VideoPlayer";
import { CourseSidebar } from "../../components/CourseContent/CourseSidebar";


export default function CoursePage() {
  const { id } = useParams<{ id: string }>();
  const courseData: Course = coursesData[id || ''];

  const { completedLessonIds: completedVideos, getProgress } = useCourseProgress();

  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);

  useEffect(() => {
    if (courseData && courseData.videos && courseData.videos.length > 0) {
      let videoToSelect: Video | undefined;

      for (let i = courseData.videos.length - 1; i >= 0; i--) {
        const video = courseData.videos[i];
        if (completedVideos.has(video.id)) {
          videoToSelect = video;
          break;
        }
      }

      setSelectedVideo(videoToSelect || courseData.videos[0]);
    } else {
      setSelectedVideo(null);
    }
  }, [courseData, completedVideos]);

  const handleSelectVideo = (video: Video) => {
    setSelectedVideo(video);
  };

  if (!courseData) {
    return <div className="text-center py-10 text-xl">Curso não encontrado</div>;
  }

  if (!courseData.videos || courseData.videos.length === 0) {
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
              <h1 className="text-3xl font-bold mb-2">{courseData.title}</h1>
              <p className="text-muted-foreground">{courseData.description}</p>
            </div>

            {selectedVideo && (
              <>

                <VideoPlayer videoId={selectedVideo?.videoId || ''} />

                <Card>
                  <CardHeader>
                    <CardTitle>Sobre o Professor</CardTitle>
                  </CardHeader>
                  <CardContent className="flex items-start space-x-4">
                    <img
                      src={courseData.professor.imageUrl || "/placeholder.svg"}
                      alt={courseData.professor.name}
                      className="w-24 h-24 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="font-semibold">{courseData.professor.name}</h3>
                      <p className="text-sm text-muted-foreground">{courseData.professor.bio}</p>
                    </div>
                  </CardContent>
                </Card>
              </>
            )}
          </div>
        </div>

        <div className="lg:col-span-4">
          {selectedVideo && (
            <CourseSidebar
              courseData={courseData}
              progress={courseData.videos.length > 0 ? getProgress(courseData.id, courseData.videos) : 0}
              selectedVideo={selectedVideo}
              onSelectVideo={handleSelectVideo}
            />
          )}
        </div>
      </div>
    </div>
  );
}