import MyCourseSelector from "@/components/modules/my-courses/my-course-selector";
import { Binary, Sigma } from "lucide-react";

export const courses = [
  {
    slug: "matematica",
    name: "Matemática",
    description: "Fundamentos e modelos para resolver problemas complexos.",
    icon: Sigma,
    accentText: "text-ubl-blue",
    accentBorder: "border-ubl-blue/40",
    accentBackground: "bg-ubl-blue/10",
    accentGlow: "from-ubl-blue/25 via-transparent to-transparent",
  },
  {
    slug: "ciencia-da-computacao",
    name: "Ciência da Computação",
    description: "Algoritmos, dados e sistemas para construir software.",
    icon: Binary,
    accentText: "text-ubl-green",
    accentBorder: "border-ubl-green/40",
    accentBackground: "bg-ubl-green/10",
    accentGlow: "from-ubl-green/25 via-transparent to-transparent",
  },
];

export const MyCourseSelectorPage = () => {
  return <MyCourseSelector courses={courses} />;
};

export default MyCourseSelectorPage;
