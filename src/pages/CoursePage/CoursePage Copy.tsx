import { Clock, Users, BookOpen, Trophy, PlayCircle, Sparkles, ArrowRight } from 'lucide-react';
import { useEffect, useState } from "react";

const courseData = {
    title: "Desenvolvimento Web Completo",
    subtitle: "Do Zero ao Profissional",
    weeks: [
        {
            week: 1,
            title: "Fundamentos",
            color: "from-blue-500 via-blue-600 to-cyan-500",
            accent: "blue",
            description: "Construa as bases sólidas do desenvolvimento web",
            icon: "🎨",
            subjects: [
                { name: "HTML & CSS", icon: "🎨", difficulty: "Iniciante", duration: "8h" },
                { name: "JavaScript Básico", icon: "⚡", difficulty: "Iniciante", duration: "12h" },
                { name: "Design Responsivo", icon: "📱", difficulty: "Intermediário", duration: "6h" }
            ],
            completion: 0
        },
        {
            week: 2,
            title: "Frameworks",
            color: "from-green-500 via-emerald-600 to-teal-500",
            accent: "green",
            description: "Domine as ferramentas modernas do mercado",
            icon: "⚛️",
            subjects: [
                { name: "React Essentials", icon: "⚛️", difficulty: "Intermediário", duration: "15h" },
                { name: "TypeScript", icon: "🔷", difficulty: "Intermediário", duration: "10h" },
                { name: "Estado e Hooks", icon: "🎯", difficulty: "Avançado", duration: "8h" }
            ],
            completion: 0
        },
        {
            week: 3,
            title: "Avançado",
            color: "from-purple-500 via-violet-600 to-indigo-500",
            accent: "purple",
            description: "Técnicas profissionais e arquitetura enterprise",
            icon: "🚀",
            subjects: [
                { name: "APIs e Backend", icon: "🔗", difficulty: "Avançado", duration: "12h" },
                { name: "Testes Automatizados", icon: "🧪", difficulty: "Avançado", duration: "10h" },
                { name: "Deploy e CI/CD", icon: "🚀", difficulty: "Expert", duration: "8h" }
            ],
            completion: 0
        }
    ]
};

const CoursePageCopy = () => {
    const [activeWeek, setActiveWeek] = useState(0);
    const [progress, setProgress] = useState(0);

    useEffect(() => {

        console.log("Progress initialized:", progress);
        const interval = setInterval(() => {
            setProgress(prev => prev < 100 ? prev + 0.5 : 0);
        }, 100);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-20 w-80 h-80 bg-green-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
            </div>

            {/* Hero Section */}
            <div className="relative z-10 pt-20 pb-16">
                <div className="max-w-7xl mx-auto px-8">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-green-500/20 rounded-full border border-white/10 mb-6">
                            <Sparkles className="w-4 h-4 text-yellow-400" />
                            <span className="text-sm font-medium">Curso Premium</span>
                        </div>
                        <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-white via-blue-200 to-green-200 bg-clip-text text-transparent">
                            {courseData.title}
                        </h1>
                        <p className="text-xl text-gray-300 mb-8">{courseData.subtitle}</p>

                        {/* Floating Stats */}
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                            {[
                                { label: "Duração", value: "3 semanas", icon: Clock, color: "text-blue-400" },
                                { label: "Estudantes", value: "1.2k+", icon: Users, color: "text-green-400" },
                                { label: "Matérias", value: "9 módulos", icon: BookOpen, color: "text-purple-400" },
                                { label: "Certificado", value: "Profissional", icon: Trophy, color: "text-yellow-400" }
                            ].map((stat, index) => (
                                <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105">
                                    <stat.icon className={`w-8 h-8 ${stat.color} mb-3 mx-auto`} />
                                    <p className="text-2xl font-bold mb-1">{stat.value}</p>
                                    <p className="text-gray-400 text-sm">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Innovative Week Timeline */}
            <div className="relative z-10 max-w-7xl mx-auto px-8 pb-20">
                <div className="mb-12">
                    <h2 className="text-4xl font-bold text-center mb-4">Jornada de Aprendizado</h2>
                    <p className="text-center text-gray-400 text-lg">Explore cada etapa da sua evolução profissional</p>
                </div>

                {/* Week Navigation */}
                <div className="flex justify-center mb-16">
                    <div className="flex bg-white/5 backdrop-blur-lg rounded-full p-2 border border-white/10">
                        {courseData.weeks.map((week, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveWeek(index)}
                                className={`px-6 py-3 rounded-full transition-all duration-300 flex items-center gap-2 ${activeWeek === index
                                        ? 'bg-gradient-to-r from-blue-500 to-green-500 text-white shadow-lg'
                                        : 'text-gray-400 hover:text-white hover:bg-white/10'
                                    }`}
                            >
                                <span className="text-xl">{week.icon}</span>
                                <span className="font-medium">Semana {week.week}</span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Active Week Display */}
                <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-transparent to-green-500/20 rounded-3xl blur-xl"></div>

                    <div className="relative bg-white/5 backdrop-blur-2xl rounded-3xl border border-white/10 overflow-hidden">
                        <div className={`h-2 bg-gradient-to-r ${courseData.weeks[activeWeek].color}`}></div>

                        <div className="p-12">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                                {/* Week Info */}
                                <div>
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="text-6xl">{courseData.weeks[activeWeek].icon}</div>
                                        <div>
                                            <h3 className="text-4xl font-bold mb-2">{courseData.weeks[activeWeek].title}</h3>
                                            <p className="text-gray-400">Semana {courseData.weeks[activeWeek].week}</p>
                                        </div>
                                    </div>

                                    <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                                        {courseData.weeks[activeWeek].description}
                                    </p>

                                    <div className="flex items-center gap-4">
                                        <button className="bg-gradient-to-r from-blue-500 to-green-500 text-white px-8 py-4 rounded-full font-medium hover:scale-105 transition-all duration-300 flex items-center gap-2">
                                            <PlayCircle className="w-5 h-5" />
                                            Iniciar Semana
                                        </button>
                                        <button className="border border-white/20 text-white px-8 py-4 rounded-full font-medium hover:bg-white/10 transition-all duration-300">
                                            Ver Prévia
                                        </button>
                                    </div>
                                </div>

                                {/* Subjects Visualization */}
                                <div className="space-y-6">
                                    {courseData.weeks[activeWeek].subjects.map((subject, index) => (
                                        <div key={index} className="group">
                                            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 cursor-pointer">
                                                <div className="flex items-center justify-between mb-4">
                                                    <div className="flex items-center gap-4">
                                                        <div className="text-3xl">{subject.icon}</div>
                                                        <div>
                                                            <h4 className="text-xl font-bold">{subject.name}</h4>
                                                            <p className="text-gray-400 text-sm">{subject.duration} • {subject.difficulty}</p>
                                                        </div>
                                                    </div>
                                                    <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-white group-hover:translate-x-1 transition-all duration-300" />
                                                </div>

                                                <div className="w-full bg-gray-700/50 rounded-full h-2">
                                                    <div
                                                        className={`h-2 rounded-full bg-gradient-to-r ${courseData.weeks[activeWeek].color} transition-all duration-1000`}
                                                        style={{ width: `${subject.difficulty || 0}%` }}
                                                    ></div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoursePageCopy;