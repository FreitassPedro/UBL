import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, BarChart2, Zap, Layers } from "lucide-react";

export const HomePage: React.FC = () => {
    return (
        <div className="min-h-screen bg-bg-body text-zinc-100 selection:bg-blue-500/30 font-inter overflow-x-hidden">
            
            {/* Background Effects (Grid + Glow) */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-blue-500/20 blur-[120px] rounded-full opacity-50"></div>
            </div>

            {/* Navbar Simplificada */}
            <nav className="relative z-10 w-full max-w-6xl mx-auto px-6 py-6 flex justify-between items-center">
                <div className="flex items-center gap-2 font-semibold text-xl tracking-tight">
                    <div className="w-8 h-8 bg-zinc-100 rounded-lg flex items-center justify-center text-zinc-950">
                        <Layers className="w-5 h-5" />
                    </div>
                    <span>UBL<span className="text-zinc-500">Course</span></span>
                </div>
                <div className="text-sm text-zinc-400">
                    Bem-vindo, Estudante
                </div>
            </nav>

            {/* HERO SECTION */}
            <main className="relative z-10 max-w-5xl mx-auto px-6 pt-20 pb-32 flex flex-col items-center text-center">
                
                {/* Badge de Novidade (Opcional) */}
                <div className="mb-8 inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm text-xs font-medium text-zinc-400">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    Novas aulas disponíveis
                </div>

                {/* Título Principal */}
                <h1 className="text-5xl md:text-7xl font-semibold tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white to-zinc-500 mb-6">
                    Universidade Brasileira Livre
                </h1>

                {/* Subtítulo */}
                <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mb-10 leading-relaxed font-light">
                    Uma plataforma sem fins lucrativos de apoio de estudantes e conhecimentos em torno de diferentes currículos de código aberto. Organize seus estudos, acompanhe métricas e evolua sem distrações visuais.
                </p>

                {/* Botões de Ação */}
                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                    <Link 
                        to="/meu-curso"
                        className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-lg bg-white px-8 font-medium text-zinc-950 transition-all duration-300 hover:bg-zinc-200 hover:scale-105"
                    >
                        <span className="mr-2">Acessar Meu Progresso</span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-blue-400/0 via-blue-400/40 to-blue-400/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    </Link>

                    <button className="inline-flex h-12 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900/50 px-8 font-medium text-zinc-300 hover:bg-zinc-800 transition-colors">
                        Explorar Grade
                    </button>
                </div>
            </main>

           

            {/* CALL TO ACTION SECUNDÁRIO (Rodapé da Home) */}
            <section className="relative z-10 max-w-4xl mx-auto px-6 pb-20">
                <div className="relative overflow-hidden rounded-3xl bg-bg-card border border-zinc-800 p-8 md:p-12 text-center">
                    <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-indigo-500/10 blur-[80px] rounded-full"></div>
                    <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-64 h-64 bg-blue-500/10 blur-[80px] rounded-full"></div>
                    
                    <h2 className="relative text-3xl font-semibold text-white mb-4">Pronto para continuar?</h2>
                    <p className="relative text-zinc-400 mb-8 max-w-lg mx-auto">
                        Você tem cadeiras pendentes na etapa atual. Volte aos estudos agora mesmo.
                    </p>
                    
                    <Link 
                        to="/meu-curso"
                        className="relative inline-flex h-10 items-center justify-center rounded-lg bg-zinc-100 px-6 text-sm font-semibold text-zinc-900 hover:bg-white transition-colors"
                    >
                        Ir para meu Dashboard
                    </Link>
                </div>
            </section>

            {/* Footer Simples */}
            <footer className="w-full border-t border-zinc-900 py-8 text-center">
                <p className="text-xs text-zinc-600">
                    © 2025 Universidade Brasileira Livre.
                </p>
            </footer>
        </div>
    );
};

export default HomePage;