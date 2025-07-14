import React from "react";
import BackgroundAnimation from "../../components/BackgroundAnimation";
import { MySemesterCard } from "../../components/MyCourse/MySemesterCard";

interface Subject {
    id: string;
    name: string;
    completed: boolean;
    duration: string;
    type: 'video' | 'text' | 'exercise';
}

interface Module {
    id: string;
    name: string;
    subjects: Subject[];
    progress: number;
    color: string;
}

interface Semester {
    id: string;
    name: string;
    period: string;
    modules: Module[];
    isActive: boolean;
    totalSubjects: number;
    completedSubjects: number;
}


interface Route {
    id: string;
    name: string;
    description: string;
    image: string;
}
const sampleRotas = [
    {
        "id": "1",
        "name": "Rumo à Ciência (sugerida)",
        "description": "Caminho perfeito para entusiastas da computação e também para aqueles que estão se descobrindo nessa área. Aprenda os fundamentos da ciência da computação, programação e matemática aplicada.",
        "image": "https://placehold.co/60x60/31343C/EEE?text=Ciencia",
    },
    {
        "id": "2",
        "name": "Foco em Programação",
        "description": "Ideal para quem deseja se aprofundar na programação e desenvolvimento de software. Aprenda linguagens de programação, estruturas de dados e algoritmos.",
        "image": "https://placehold.co/60x60/31343C/EEE?text=Programacao",
    },
    {
        "id": "3",
        "name": "Foco na Matemática",
        "description": "Para aqueles que desejam se especializar em matemática aplicada à computação. Aprenda álgebra linear, cálculo e estatística.",
        "image": "https://placehold.co/60x60/31343C/EEE?text=Matematica",
    }
]

const MyCourse = () => {

    const [expandedSemesters, setExpandedSemesters] = React.useState<string[]>([]);

    const [selectedRoute, setSelectedRoute] = React.useState<Route>(sampleRotas[0]);

    const sampleData: Semester[] = [
        {
            id: '1',
            name: '1º Semestre',
            period: 'Fev - Jul 2024',
            isActive: true,
            totalSubjects: 7,
            completedSubjects: 4,
            modules: [
                {
                    id: '1',
                    name: 'Fundamentos de Programação',
                    progress: 85,
                    color: 'blue',
                    subjects: [
                        { id: '1-1-1', name: 'Introdução à Lógica de Programação', completed: true, duration: '45min', type: 'video' },
                        { id: '1-1-2', name: 'Variáveis e Tipos de Dados', completed: true, duration: '30min', type: 'video' },
                        { id: '1-1-3', name: 'Estruturas de Controle', completed: false, duration: '60min', type: 'video' },
                        { id: '1-1-4', name: 'Exercícios Práticos', completed: false, duration: '90min', type: 'exercise' }
                    ]
                },
                {
                    id: '2',
                    name: 'Matemática Aplicada',
                    progress: 60,
                    color: 'green',
                    subjects: [
                        { id: '1-2-1', name: 'Álgebra Linear', completed: true, duration: '40min', type: 'text' },
                        { id: '1-2-2', name: 'Cálculo Diferencial', completed: false, duration: '55min', type: 'video' },
                        { id: '1-2-3', name: 'Estatística Básica', completed: false, duration: '50min', type: 'video' }
                    ]
                }
            ]
        },
        {
            id: '2',
            name: '2º Semestre',
            period: 'Ago - Dez 2024',
            isActive: true,
            totalSubjects: 5,
            completedSubjects: 0,
            modules: [
                {
                    id: '3',
                    name: 'Desenvolvimento Web',
                    progress: 0,
                    color: 'blue',
                    subjects: [
                        { id: '2-1-1', name: 'HTML e CSS', completed: false, duration: '120min', type: 'video' },
                        { id: '2-1-2', name: 'JavaScript Básico', completed: false, duration: '180min', type: 'video' },
                        { id: '2-1-3', name: 'Projeto Prático', completed: false, duration: '240min', type: 'exercise' }
                    ]
                },
                {
                    id: '4',
                    name: 'Banco de Dados',
                    progress: 0,
                    color: 'green',
                    subjects: [
                        { id: '2-2-1', name: 'Conceitos Fundamentais', completed: false, duration: '60min', type: 'text' },
                        { id: '2-2-2', name: 'SQL Básico', completed: false, duration: '90min', type: 'video' }
                    ]
                }
            ]
        },
        {
            id: '3',
            name: '3º Semestre',
            period: 'Jan - Jun 2025',
            isActive: false,
            totalSubjects: 6,
            completedSubjects: 0,
            modules: [
                {
                    id: '5',
                    name: 'Programação Orientada a Objetos',
                    progress: 0,
                    color: 'blue',
                    subjects: [
                        { id: '3-1-1', name: 'Conceitos de POO', completed: false, duration: '50min', type: 'video' },
                        { id: '3-1-2', name: 'Classes e Objetos', completed: false, duration: '70min', type: 'video' },
                        { id: '3-1-3', name: 'Herança e Polimorfismo', completed: false, duration: '80min', type: 'video' }
                    ]
                },
                {
                    id: '6',
                    name: 'Desenvolvimento Mobile',
                    progress: 0,
                    color: 'green',
                    subjects: [
                        { id: '3-2-1', name: 'Introdução ao Desenvolvimento Mobile', completed: false, duration: '60min', type: 'text' },
                        { id: '3-2-2', name: 'Flutter Básico', completed: false, duration: '120min', type: 'video' }
                    ]
                }
            ]
        },
        {
            id: '4',
            name: '4º Semestre',
            period: 'Jul - Dec 2025',
            isActive: false,
            totalSubjects: 5,
            completedSubjects: 0,
            modules: [
                {
                    id: '7',
                    name: 'Inteligência Artificial',
                    progress: 0,
                    color: 'blue',
                    subjects: [
                        { id: '4-1-1', name: 'Fundamentos de IA', completed: false, duration: '70min', type: 'video' },
                        { id: '4-1-2', name: 'Machine Learning Básico', completed: false, duration: '90min', type: 'video' }
                    ]
                },
                {
                    id: '4',
                    name: 'Segurança da Informação',
                    progress: 0,
                    color: 'green',
                    subjects: [
                        { id: '4-2-1', name: 'Conceitos de Segurança', completed: false, duration: '60min', type: 'text' },
                        { id: '4-2-2', name: 'Criptografia Básica', completed: false, duration: '80min', type: 'video' }
                    ]
                }
            ]
        }
    ];


    const handleRouteChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log("Selected route:", event.target.value);
        setSelectedRoute(sampleRotas.find(rota => rota.id === event.target.value) || sampleRotas[0]);
    }

    const toggleSemester = (semesterId: string) => {
        setExpandedSemesters((prev) => {
            if (prev.includes(semesterId)) {
                return prev.filter(id => id !== semesterId);
            } else {
                return [...prev, semesterId];
            }
        });
    };


    return (
        <div className="min-h-screen bg-gray-950 text-white ">
            <div className="container mx-auto px-4 py-8 min-h-screen">
                <BackgroundAnimation />
                
                {/* Main */}
                <main className="flex flex-col md:flex-row gap-6">
                    {/* Filtro */}
                    <div className="flex flex-col md:w-1/4">
                        <div className="bg-zinc-900/90 border-l-1 border-blue-600 sticky top-4 p-5 rounded mb-6">
                            <img
                                src={`https://placehold.co/60x60/31343C/EEE?text=${selectedRoute.name}`}
                                className="w-full h-64 rounded object-cover flex-shrink-0 border border-gray-700"
                                alt={`Imagem da rota ${selectedRoute.name}`}
                            />
                            <h3 className="text-bold text-xl mt-2 text-white">{selectedRoute.name}</h3> {/* Adicionado text-white */}
                            <span className="text-sm text-gray-300">{selectedRoute.description}</span>
                        </div>
                        <div className="bg-zinc-900 border-l-1 border-blue-600 sticky top-4 p-5 rounded ">
                            <div className="space-y-2 ">
                                <h3 className="text-lg font-semibold text-white">Rota de estudos</h3> {/* Adicionado text-white */}
                                <label className="flex items-center space-x-2 cursor-pointer hover:text-gray-200 transition-colors">
                                    <input
                                        type="radio"
                                        name="studyRoute"
                                        value="1"
                                        checked={selectedRoute.id === "1"}
                                        onChange={handleRouteChange}
                                        className="form-radio h-5 w-5 text-blue-600 bg-zinc-700 border-gray-600 focus:ring-blue-500"
                                    />
                                    <span className="text-gray-300">Rumo à Ciência</span>
                                </label>
                                <label className="flex items-center space-x-2 cursor-pointer hover:text-gray-200 transition-colors">
                                    <input
                                        type="radio"
                                        name="studyRoute"
                                        value="2"
                                        checked={selectedRoute.id === "2"}
                                        onChange={handleRouteChange}
                                        className="form-radio h-5 w-5 text-blue-600 bg-zinc-700 border-gray-600 focus:ring-blue-500"
                                    />
                                    <span className="text-gray-300">Foco em Programação</span>
                                </label>
                                <label className="flex items-center space-x-2 cursor-pointer hover:text-gray-200 transition-colors">
                                    <input
                                        type="radio"
                                        name="studyRoute"
                                        value="3"
                                        checked={selectedRoute.id === "3"}
                                        onChange={handleRouteChange}
                                        className="form-radio h-5 w-5 text-blue-600 bg-zinc-700 border-gray-600 focus:ring-blue-500"
                                    />
                                    <span className="text-gray-300">Foco na Matemática</span>
                                </label>
                                <label className="flex items-center space-x-2 cursor-pointer hover:text-gray-200 transition-colors">
                                    <input
                                        type="radio"
                                        name="studyRoute"
                                        value="4"
                                        checked={selectedRoute.id === "4"}
                                        onChange={handleRouteChange}
                                        className="form-radio h-5 w-5 text-blue-600 bg-zinc-700 border-gray-600 focus:ring-blue-500"
                                    />
                                    <span className="text-gray-300">Meu próprio caminho</span>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="grid gap-8 w-full md:w-3/4 z-10 relative">
                        {/* Mapeamento dos semestres */}
                        {sampleData.map((semester) => (
                            <MySemesterCard
                                key={semester.id}
                                semester={semester}
                                expandedSemesters={expandedSemesters}
                                toggleSemester={toggleSemester}
                            />
                        ))}
                    </div >
                </main >
            </div>
        </div >
    );
};

export default MyCourse;