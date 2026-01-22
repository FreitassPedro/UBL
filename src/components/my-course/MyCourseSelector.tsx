import { Card } from "@/components/ui/card";
import type { CourseOption } from "@/hooks/useMyCourseData";

type MyCourseSelectorProps = {
  onSelect: (course: CourseOption) => void;
};

const MyCourseSelector = ({ onSelect }: MyCourseSelectorProps) => {
  return (
    <div>
      <h1 className="text-2xl">O que você quer aprender hoje?</h1>
      <div className="flex gap-4 items-center justify-center">
        <Card className="cursor-pointer" onClick={() => onSelect("Computacao")}>
          Ciencia da Computação
        </Card>
        <Card className="cursor-pointer" onClick={() => onSelect("Matematica")}>
          Matemática
        </Card>
      </div>
    </div>
  );
};

export default MyCourseSelector;
