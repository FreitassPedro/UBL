export interface Lesson {
  id: string;
  title: string;
  type: "video" | "text" | "exercise";
  duration?: number; // Duração em segundos, opcional
  url: string; // Video, Link, Livro
}
