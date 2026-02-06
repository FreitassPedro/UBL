import MyLesson from "@/components/modules/my-lessons/my-lesson/my-lesson";
import MySubjectSidebar from "@/components/modules/my-lessons/my-subject/my-subject-sidebar";
import Lesson from "@/types/lesson";
import Subject from "@/types/subject";

interface MySubjectProps {
  subject: Subject;
  lessons: Lesson[];
  currentLesson: Lesson;
}

export const MySubject = ({ subject, lessons, currentLesson }: MySubjectProps) => {
  return (
    <div className="h-[calc(100vh-3.5rem)] text-text-main overflow-x-hidden font-inter">
      <div className="w-full h-full min-h-0 py-6 px-4 sm:px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-6 gap-4 items-stretch">
        <MyLesson
          subject={subject}
          lesson={currentLesson}
        />
        <MySubjectSidebar
          lessons={lessons}
          currentLesson={currentLesson}
        />
      </div>
    </div>
  );
};

export default MySubject;
