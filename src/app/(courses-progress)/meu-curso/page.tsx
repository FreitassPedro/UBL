import CourseProgressSelector from "@/components/modules/courses-progress/course-progress-selector";
import { Binary, Calculator } from "lucide-react";

export const courses = [
  {
    slug: "matematica",
    name: "Matemática",
    description: "Fundamentos e modelos para resolver problemas complexos.",
    icon: Calculator,
    accentText: "text-blue-300",
    accentBorder: "border-ubl-blue/50",
    accentBackground: "bg-ubl-blue/20",
  },
  {
    slug: "ciencia-da-computacao",
    name: "Ciência da Computação",
    description: "Algoritmos, dados e sistemas para construir software.",
    icon: Binary,
    accentText: "text-emerald-300",
    accentBorder: "border-ubl-green/50",
    accentBackground: "bg-ubl-green/20",
  },
];

export const CourseProgressSelectorPage = () => {
  return <CourseProgressSelector courses={courses} />;
};

export default CourseProgressSelectorPage;
