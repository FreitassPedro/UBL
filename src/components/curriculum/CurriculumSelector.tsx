import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

export interface CurriculumCourse {
  course: string;
  description: string;
  img: string;
  color: string;
}

interface CurriculumSelectorProps {
  courses: CurriculumCourse[];
  onSelectCourse: (index: number) => void;
}

export const CurriculumSelector = ({
  courses,
  onSelectCourse,
}: CurriculumSelectorProps) => {
  return (
    <section className="relative mx-auto max-w-6xl w-full flex flex-col items-center my-4 px-6 sm:px-8">
      <div className="mb-4 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-white">
          Catálogo de Cursos
        </h2>
        <span className="text-gray-400 text-sm sm:text-base">
          Escolha um curso para explorar sua grade curricular detalhada.
        </span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 w-full">
        {courses.map((course, index) => (
          <Card
            key={`${course.course}-${index}`}
            className="p-0 gap-0 border-0 bg-zinc-900 rounded-lg shadow-none hover:shadow-xl overflow-hidden hover:scale-102 transition duration-300 ease-in-out cursor-pointer group"
            onClick={() => onSelectCourse(index)}
          >
            <div className="h-64 sm:h-72 lg:h-80 overflow-hidden">
              <img
                src={course.img}
                alt={course.course}
                className="w-full h-full object-cover"
              />
            </div>
            <Separator
              className={cn(course.color, "group-hover:animate-pulse")}
            />
            <CardContent className="p-6 sm:p-8 flex flex-col justify-center items-center space-y-2">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-100 transition-all duration-300">
                {course.course}
              </h2>
              <p className="text-sm sm:text-base text-text-muted text-center">
                {course.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
