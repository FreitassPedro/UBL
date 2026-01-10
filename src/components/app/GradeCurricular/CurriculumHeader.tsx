import { BookOpen, Clock, GraduationCap, Sparkles } from "lucide-react";

export const CurriculumHeader = () => {
  return (
    <div className="relative z-10 mb-12">
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-linear-to-r from-blue-500/20 to-green-500/20 rounded-full border border-white/10 mb-6">
          <Sparkles className="w-4 h-4 text-yellow-400" />
          <span className="text-sm font-medium text-gray-300">
            Currículo Estruturado
          </span>
        </div>
        <h2 className="text-5xl font-bold mb-4 bg-linear-to-r from-white via-blue-200 to-green-200 bg-clip-text text-transparent">
          Currículo em Etapas
        </h2>
        <p className="text-xl text-gray-300 ">
          Jornada completa de aprendizado estruturada por semestres
        </p>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
        <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
          <div className="flex items-center gap-3">
            <GraduationCap className="w-8 h-8 text-blue-400" />
            <div>
              <p className="text-2xl font-bold text-white">99</p>
              <p className="text-gray-400">Semestres</p>
            </div>
          </div>
        </div>
        <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
          <div className="flex items-center gap-3">
            <BookOpen className="w-8 h-8 text-green-400" />
            <div>
              <p className="text-2xl font-bold text-white">99</p>
              <p className="text-gray-400">Disciplinas</p>
            </div>
          </div>
        </div>
        <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
          <div className="flex items-center gap-3">
            <Clock className="w-8 h-8 text-purple-400" />
            <div>
              <p className="text-2xl font-bold text-white">~4</p>
              <p className="text-gray-400">Anos</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
