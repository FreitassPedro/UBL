import { CheckCircle, Circle } from "lucide-react"
import { useCourseProgress } from "../../contexts/CourseProgressContext";
import type { MyLesson } from "../../data/myCourseProgress";


interface VideoListProps {
  lessons: MyLesson[]
  selectedLesson: MyLesson
  onSelectLesson: (lesson: MyLesson) => void
}

export function VideoList({ lessons, selectedLesson, onSelectLesson }: VideoListProps) {
  const { toggleCompletion, completedLessons } = useCourseProgress()
  console.log("Completed Lessons:", completedLessons)
  
  return (
    <div className="space-y-1 p-4">
      {lessons.map((lesson) => (
        <div
          key={lesson.id}
          className={
            `flex items-start gap-2 p-3 rounded-lg cursor-pointer transition-colors 
            ${completedLessons.has(lesson.id) ? "bg-blue-200/30 border-blue-300 border-2" : "bg-white hover:bg-gray-100"}
            ${selectedLesson.id === lesson.id ? "border-2 border-blue-500 bg-blue-300" : "border border-gray-200"}
          `}
          onClick={() => onSelectLesson(lesson)}
        >
          <button
            onClick={(e) => {
              e.stopPropagation()
              toggleCompletion(lesson.id)
            }}
            className="text-primary mt-1 flex-shrink-0"
          >
            {completedLessons.has(lesson.id) ? <CheckCircle className="h-4 w-4" /> : <Circle className="h-4 w-4" />}
          </button>
          <div className="flex flex-col">
            <span className="text-sm font-medium leading-tight">{lesson.name}</span>
            <span className="text-xs text-muted-foreground">Aula {lesson.id}</span>
          </div>
        </div>
      ))}
    </div>
  )
}

