import bannerstudy from "@/assets/imgs/bannerstudy.jpeg";
import { Curriculum } from "@/components/curriculum/Curriculum";
import { CurriculumHero } from "@/components/curriculum/CurriculumHero";
import type { CurriculumCourse } from "@/components/curriculum/CurriculumSelector";
import { CurriculumSelector } from "@/components/curriculum/CurriculumSelector";
import { CurriculumCC, CurriculumMath } from "@/data/Curriculum";
import { cn } from "@/lib/utils";
import type { Curriculum as CurriculumType } from "@/types/curriculum";
import React from "react";

const courses: CurriculumCourse[] = [
  {
    course: "Matemática",
    description: "Um caminho para a educação autodidata em Matemática.",
    img: "https://github.com/Universidade-Livre/imagens/blob/main/outras/ubl_mat.jpeg?raw=true",
    color: "bg-gradient-to-r from-ubl-blue/90 via-blue-500/70 to-sky-400/70",
  },
  {
    course: "Ciência da Computação",
    description: "Um caminho para a educação autodidata em Ciência da Computação",
    img: "https://github.com/Universidade-Livre/imagens/blob/main/outras/placeholder.png?raw=true",
    color: "bg-gradient-to-r from-ubl-green/95 via-emerald-500/85 to-green-400/80",
  },
];

const CurriculumPage = () => {
  const [selectedGrade, setSelectedGrade] = React.useState<
    CurriculumType | undefined
  >();

  const [selectedCourseIndex, setSelectedCourseIndex] = React.useState<
    number | undefined
  >();

  const handleCourseSelection = (index: number) => {
    console.log(`Curso selecionado: ${index}`);
    if (selectedCourseIndex === index) {
      setSelectedCourseIndex(undefined);
      setSelectedGrade(undefined);
      return;
    }

    setSelectedCourseIndex(index);
    if (index === 1) {
      setSelectedGrade(CurriculumCC);
    } else {
      setSelectedGrade(CurriculumMath);
    }
  };

  return (
    <div className="min-h-screen bg-bg-body text-white">
      <main
        className={cn(
          "flex flex-col items-center space-y-4",
          selectedGrade || "mb-10",
        )}
      >
        <CurriculumHero
          title="Sua jornada começa aqui"
          description="Descubra a liberdade de aprender com nossos cursos online gratuitos, desenvolvidos para todos os níveis de conhecimento. Aprenda no seu ritmo, onde e quando quiser."
          image={bannerstudy}
        />

        <CurriculumSelector
          courses={courses}
          onSelectCourse={handleCourseSelection}
        />

        {/* Seção de Conteúdo da Grade Curricular */}
        {selectedGrade && <Curriculum selectedCourse={selectedGrade} />}
      </main>
    </div>
  );
};

export default CurriculumPage;
