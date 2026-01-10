import { MyStepContainer } from "@/components/app/MyCourse/MyStepContainer";
import { useCourseProgress } from "@/contexts/CourseProgressContext/CourseProgressContext";
import { CurriculoCC } from "@/data/gradeCurricular";
import useTituloDaPagina from "@/hooks/useTitlePage";
import { mapGradeToMyGradeProgress } from "@/lib/mappers";

const MyCourse = () => {
  useTituloDaPagina("Meu Curso");

  const curriculoOriginal = CurriculoCC;
  const { completedLessons } = useCourseProgress();
  const sampleData = mapGradeToMyGradeProgress(
    curriculoOriginal,
    completedLessons
  );

  console.log("Curriculo:", curriculoOriginal);
  console.log("Sample Data:", sampleData);

  return (
    <div className="min-h-screen bg-bg-body text-white">
      <main className="relative max-w-6xl mx-auto z-10 px-4 md:px-6 py-6">
        {/* Conteúdo Principal contendo cada Etapa */}
        <MyStepContainer grade={sampleData} />
      </main>
    </div>
  );
};

export default MyCourse;
