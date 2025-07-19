import { CheckCircle, Circle } from "lucide-react"
import type { Video } from "../../types/course";
import { useCourseProgress } from "../../contexts/CourseProgressContext";


interface VideoListProps {
  videos: Video[]
  selectedVideo: Video
  onSelectVideo: (video: Video) => void
}

export function VideoList({ videos, selectedVideo, onSelectVideo }: VideoListProps) {
  const { completedLessonIds: completedVideos, toggleLessonCompletion: toggleVideoCompletion } = useCourseProgress()

  return (
    <div className="space-y-1 p-4">
      {videos.map((video) => (
        <div
          key={video.id}
          className={
            `flex items-start gap-2 p-3 rounded-lg cursor-pointer transition-colors 
            ${completedVideos.has(video.id) ? "bg-blue-200/30 border-blue-300 border-2" : "bg-white hover:bg-gray-100"}
            ${selectedVideo.id === video.id ? "border-2 border-blue-500 bg-blue-300" : "border border-gray-200"}
          `}
          onClick={() => onSelectVideo(video)}
        >
          <button
            onClick={(e) => {
              e.stopPropagation()
              toggleVideoCompletion(video.id)
            }}
            className="text-primary mt-1 flex-shrink-0"
          >
            {completedVideos.has(video.id) ? <CheckCircle className="h-4 w-4" /> : <Circle className="h-4 w-4" />}
          </button>
          <div className="flex flex-col">
            <span className="text-sm font-medium leading-tight">{video.title}</span>
            <span className="text-xs text-muted-foreground">Aula {video.id}</span>
          </div>
        </div>
      ))}
    </div>
  )
}

