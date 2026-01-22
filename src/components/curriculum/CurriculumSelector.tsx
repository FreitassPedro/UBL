import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

export interface CurriculumCourse {
  course: string;
  description: string;
  img: string;
  color: string;
}

interface CurriculumCatalogProps {
  courses: CurriculumCourse[];
  onSelectCourse: (index: number) => void;
}

export const CurriculumCatalog = ({
  courses,
  onSelectCourse,
}: CurriculumCatalogProps) => {
  return (
    <section className="relative mx-auto max-w-6xl flex flex-col items-center my-4 p-8">
      <div className="mb-4">
        <h2 className="md:text-3xl text-2xl font-bold text-white text-center ">
          Catálogo de Cursos
        </h2>
        <span className="text-gray-400 text-md">
          Escolha um curso para explorar sua grade curricular detalhada.
        </span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
        {courses.map((course, index) => (
          <Card
            key={`${course.course}-${index}`}
            className="p-0 gap-0 border-0 bg-zinc-900 rounded-lg shadow-none hover:shadow-xl overflow-hidden col-span-2 hover:scale-102 transition duration-300 ease-in-out cursor-pointer group"
            onClick={() => onSelectCourse(index)}
          >
            <div className="h-96 overflow-hidden">
              <img
                src={course.img}
                alt={course.course}
                className="w-full h-full object-cover"
              />
            </div>
            <Separator
              className={cn(course.color, "group-hover:animate-pulse")}
            />
            <CardContent className="p-8 flex flex-col justify-center items-center space-y-2">
              <h2 className="text-2xl font-bold text-gray-100 transition-all duration-300">
                {course.course}
              </h2>
              <p className="text-md text-text-muted">{course.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
