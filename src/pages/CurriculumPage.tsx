import bannerCCImg from "@/assets/bannerCC.png";
import bannerMathImg from "@/assets/bannerMath.jpeg";
import bannerStudyImg from "@/assets/bannerStudy.jpeg";
import { Curriculum } from "@/components/curriculum/Curriculum";
import { CurriculumHero } from "@/components/curriculum/CurriculumHero";
import type { CurriculumCourse } from "@/components/curriculum/CurriculumSelector";
import { CurriculumSelector } from "@/components/curriculum/CurriculumSelector";
import { useCurriculum } from "@/hooks/useCurriculum";
import { cn } from "@/lib/utils";
import CurriculumSkeleton from "@/pages/CurriculumSkeleton";
import React from "react";

type CurriculumOption = CurriculumCourse & {
  acronym: string;
};

const courses: CurriculumOption[] = [
  {
    acronym: "math",
    course: "Matemática",
    description: "Um caminho para a educação autodidata em Matemática.",
    img: bannerMathImg,
    color: "bg-gradient-to-r from-ubl-blue/90 via-blue-500/70 to-sky-400/70",
  },
  {
    acronym: "cc",
    course: "Ciência da Computação",
    description: "Um caminho para a educação autodidata em Ciência da Computação",
    img: bannerCCImg,
    color: "bg-gradient-to-r from-ubl-green/95 via-emerald-500/85 to-green-400/80",
  },
];

const CurriculumPage = () => {
  const [selectedCourseIndex, setSelectedCourseIndex] = React.useState<number | undefined>();
  const selectedCourse =
    selectedCourseIndex !== undefined
      ? courses[selectedCourseIndex]
      : undefined;

  const { data: curriculum, isLoading: curriculumIsLoading } = useCurriculum(selectedCourse?.acronym);
  return (
    <div className="min-h-screen bg-bg-body text-white">
      <main
        className={cn(
          "flex flex-col items-center space-y-4",
          curriculum ? "" : "mb-10",
        )}
      >
        <CurriculumHero
          title="Sua jornada começa aqui"
          description="Descubra a liberdade de aprender com nossos cursos online gratuitos, desenvolvidos para todos os níveis de conhecimento. Aprenda no seu ritmo, onde e quando quiser."
          image={bannerStudyImg}
        />

        <CurriculumSelector
          courses={courses}
          onSelectCourse={setSelectedCourseIndex}
        />

        {/* Seção de Conteúdo da Grade Curricular */}
        {curriculumIsLoading && selectedCourse && <CurriculumSkeleton />}
        {curriculum && <Curriculum curriculum={curriculum} />}
      </main>
    </div>
  );
};

export default CurriculumPage;
