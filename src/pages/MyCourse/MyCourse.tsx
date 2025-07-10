import { BookOpen, Info } from "lucide-react";
import { TesteProgress } from "../../components/ui/TesteProgress"; // Certifique-se de que este componente está configurado para cores escuras também
import React from "react";

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

const MyCourse = () => {

    const [expandedSemesters, setExpandedSemesters] = React.useState<string[]>([]);
    
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
                    id: '1-1',
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
                    id: '1-2',
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
                    id: '2-1',
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
                    id: '2-2',
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
                    id: '3-1',
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
                    id: '3-2',
                    name: 'Desenvolvimento Mobile',
                    progress: 0,
                    color: 'green',
                    subjects: [
                        { id: '3-2-1', name: 'Introdução ao Desenvolvimento Mobile', completed: false, duration: '60min', type: 'text' },
                        { id: '3-2-2', name: 'Flutter Básico', completed: false, duration: '120min', type: 'video' }
                    ]
                }
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-gray-800 text-white">
            <div className="bg-gray-700 shadow-xl border-b border-gray-700">
                <div className="max-w-7xl px-4 flex items-center mx-auto py-4">
                    <div className="flex items-center">
                        <div className="rounded bg-blue-600 p-2 mr-4">
                            <BookOpen className="w-8 h-8 text-white" />
                        </div>
                        <div>
                            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                                Minha trilha
                            </h1>
                            <p className="text-sm text-gray-300 ml-4">Seu progresso do curso.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main */}
            <div className="max-w-7xl mx-auto px-4 py-6">
                <div className="grid gap-8">

                    {/* Mapeamento dos semestres */}
                    {sampleData.map((semester) => (
                        semester.isActive ? (
                            <div key={semester.id} className="bg-zinc-800 shadow-xl rounded-lg overflow-hidden">
                                {/* Header do curso/semestre */}
                                <div className="px-8 py-6 cursor-pointer hover:bg-zinc-700 transition-all duration-300 border-b border-gray-700">
                                    <div className="">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center space-x-4">
                                                <div className="flex items-center space-x-3">
                                                    <h2 className="text-2xl font-semibold text-white">{semester.name}</h2>
                                                </div>
                                                <div className="flex items-center space-x-4">
                                                    {semester.isActive && (
                                                        <span className="items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-600 text-white">
                                                            Em progresso
                                                        </span>
                                                    )}
                                                </div>
                                            </div>
                                            <div className="flex items-center space-x-6">
                                                <div className="">
                                                    {/* Texto de Matérias com cores claras */}
                                                    <div className="text-sm text-gray-400">Matérias</div>
                                                    <div className="text-lg font-bold text-gray-200">
                                                        {semester.completedSubjects}/{semester.totalSubjects}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Módulos do curso */}
                                {semester.modules.map((module) => (
                                    <div key={module.id} className="border-t border-gray-700 last:border-b-0"> {/* Adiciona borda superior para separar módulos, remove a última */}
                                        {/* Fundo do módulo levemente mais escuro, com padding e hover */}
                                        <div className="px-8 py-6 space-y-4 bg-zinc-900/50 hover:bg-zinc-900 transition-all duration-300">
                                            <div className="flex items-center space-x-4">
                                                <img
                                                    src={`https://placehold.co/60x60/31343C/EEE?text=${module.name.substring(0, 3)}`}
                                                    alt={`Imagem do curso ${module.name}`}
                                                    className="w-16 h-16 rounded object-cover flex-shrink-0 border border-gray-700"
                                                />
                                                <div className="">
                                                    <h3 className="text-xl font-bold text-white">{module.name}</h3>
                                                </div>
                                            </div>
                                            <div className="flex flex-col space-y-2">
                                                <div className="flex items-center space-x-4">

                                                    <TesteProgress value={module.progress} />
                                                    <span className="text-sm text-gray-400">{module.progress}%</span>
                                                </div>
                                                <div className="text-sm text-gray-400">{module.subjects.filter(s => s.completed).length} de {module.subjects.length} Aulas Concluídas</div>
                                            </div>
                                            <div className="mt-4 border-t border-gray-700 pt-4">
                                                <h4 className="text-lg font-semibold text-gray-200 mb-3">Tópicos:</h4>
                                                <ul className="space-y-2">
                                                    {module.subjects.map((subject) => (
                                                        <li key={subject.id} className="flex items-center space-x-2 text-gray-300">
                                                            {subject.completed ? (
                                                                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                                </svg>
                                                            ) : (
                                                                <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                                                                </svg>
                                                            )}
                                                            <span>{subject.name} ({subject.duration})</span>
                                                            {subject.type === 'video' && <span className="text-xs text-blue-400">[Vídeo]</span>}
                                                            {subject.type === 'text' && <span className="text-xs text-yellow-400">[Texto]</span>}
                                                            {subject.type === 'exercise' && <span className="text-xs text-purple-400">[Exercício]</span>}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="bg-zinc-800 shadow-xl rounded-lg overflow-hidden scale_up">
                                {/* Header do card, similar ao semestre ativo mas sem hover de ativação */}
                                <div className="px-8 py-6 border-b border-gray-700">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center space-x-4">
                                            <div className="flex items-center space-x-3">
                                                <h2 className="text-2xl font-semibold text-white">{semester.name}</h2>
                                            </div>
                                            <span className="items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-600 text-gray-200">
                                                Não Iniciado
                                            </span>
                                        </div>
                                        <div className="flex items-center space-x-6">
                                            <div>
                                                {/* Texto de Matérias com cores claras */}
                                                <div className="text-sm text-gray-400">Matérias Previstas</div>
                                                <div className="text-lg font-bold text-gray-200">
                                                    {semester.totalSubjects}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Conteúdo do corpo do card para semestres não iniciados */}
                                <div className="px-8 py-6 space-y-4 bg-zinc-900/50">
                                    <div className="flex items-center space-x-4">
                                        <Info className="w-5 h-5 text-gray-500 mt-2" />
                                        <div>
                                            <p className="text-lg text-gray-300">Esta etapa não está ativa pois você não ainda não concluiu as matérias bases.</p>
                                            <p className="text-sm text-gray-400 mt-2">Se mesmo assim deseja continuar, clique no botão para revelar</p>
                                        </div>
                                    </div>
                                    <button className="mt-4 px-4 py-2 rounded bg-gray-800 text-white font-medium ">
                                        Conferir Pré-requisitos
                                    </button>
                                </div>
                            </div>
                        )
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MyCourse;