// CourseDashboard.tsx

import React from 'react';

// --- Interfaces de Tipos (TypeScript) ---

interface Lesson {
  id: number;
  title: string;
  time: string;
  status: 'completed' | 'current' | 'next';
}

interface ActivityBar {
  day: string;
  height: number; // Altura em pixels, 0-100
  isActive: boolean;
}

// --- Dados Mock (Simulação de Estado/Props) ---

const lessons: Lesson[] = [
  { id: 1, title: 'Color Theory', time: '12m', status: 'completed' },
  { id: 2, title: 'Grid Layouts', time: '18m', status: 'completed' },
  { id: 3, title: 'Typography Systems', time: '24m', status: 'current' },
  { id: 4, title: 'Micro-interactions', time: '15m', status: 'next' },
  { id: 5, title: 'Accessibility Audit', time: '10m', status: 'next' },
  { id: 6, title: 'Final Project Setup', time: '30m', status: 'next' },
];

const activityData: ActivityBar[] = [
  { day: 'M', height: 30, isActive: false },
  { day: 'T', height: 50, isActive: false },
  { day: 'W', height: 80, isActive: true },
  { day: 'T', height: 40, isActive: false },
  { day: 'F', height: 20, isActive: false },
];

const currentProgress = 72; // Porcentagem de progresso

// --- Componentes Reutilizáveis ---

// Componente para o ícone de reprodução (SVG)
const PlayIcon: React.FC = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polygon points="5 3 19 12 5 21 5 3" fill="currentColor" stroke="none" />
  </svg>
);

// Componente para o Item da Lista de Aulas
const SyllabusItem: React.FC<{ lesson: Lesson }> = ({ lesson }) => {
  let statusClass = '';
  let statusContent = '';

  if (lesson.status === 'completed') {
    statusClass = 'bg-success border-success';
    statusContent = '✓';
  } else if (lesson.status === 'current') {
    statusClass = 'border-accent-primary shadow-lg shadow-accent-glow-bg';
  } else {
    statusClass = 'border-border-subtle';
  }

  const titleClass = lesson.status === 'current'
    ? 'text-text-main font-medium'
    : 'text-text-muted font-light group-hover:text-text-main';

  return (
    <li
      className={`flex items-center py-3.5 border-b border-white/5 cursor-pointer transition-colors group ${lesson.status}`}
    >
      <div className={`w-[18px] h-[18px] rounded-full mr-3 flex items-center justify-center text-xs ${statusClass}`}>
        {statusContent && <span className="text-black text-[10px]">{statusContent}</span>}
      </div>
      <span className={`text-sm grow ${titleClass}`}>{lesson.title}</span>
      <span className="text-xs text-zinc-700-dark">{lesson.time}</span>
    </li>
  );
};

// Componente Principal
const TestePage: React.FC = () => {
  // Estilo customizado para o Donut Chart, usa a sintaxe de inline style do React
  const donutChartStyle: React.CSSProperties = {
    background: `conic-gradient(var(--tw-colors-accent-primary) 0% ${currentProgress}%, var(--tw-colors-bg-hover) ${currentProgress}% 100%)`,
  };

  return (
    // Body e Container
    <div className="min-h-screen flex items-center justify-center bg-bg-body text-text-main font-inter overflow-hidden p-6">
      <div className="w-full max-w-6xl h-[85vh] grid grid-cols-1 lg:grid-cols-[2.5fr_1fr] gap-6">

        {/* --- Main Section (Current Lesson) --- */}
        <main className="flex flex-col p-8 bg-bg-card border border-bg-hover rounded-xl shadow-2xl shadow-black/40 overflow-hidden">
          <div className="w-full h-[300px] bg-linear-to-br from-[#1e1e24] to-[#121215] border border-border-subtle rounded-xl flex items-center justify-center mb-8 relative">
            <div
              className="w-16 h-16 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm flex items-center justify-center cursor-pointer transition-all duration-300 
                         hover:bg-accent-primary hover:shadow-[0_0_30px_var(--tw-colors-accent-glow-bg)] hover:border-accent-primary hover:text-black"
            >
              <PlayIcon />
            </div>
          </div>


          <div className="flex gap-4 mb-6">
            <span className="text-xs py-1 px-3.5 rounded-full border border-border-subtle text-text-muted font-normal">
              Chapter 4
            </span>
            <span className="text-xs py-1 px-3.5 rounded-full border border-border-subtle text-text-muted font-normal">
              UI Design
            </span>
          </div>

          <h1 className="font-light text-2xl tracking-tight mb-2">Advanced Typography Systems</h1>
          <h2 className="font-normal text-lg text-text-muted mb-6 tracking-tight">
            Understanding vertical rhythm and modular scales in interface design.
          </h2>

          <p className="font-light leading-relaxed text-zinc-300-light">
            In this module, we move beyond basic font selection. We will explore how to set up a mathematical type scale that ensures consistency across your application. We will also cover the implementation of variable fonts and how to optimize them for dark mode environments.
          </p>
        </main>

        {/* --- Sidebar (Progress & Syllabus) --- */}
        <aside className="flex flex-col gap-6 p-8 bg-bg-card border border-bg-hover rounded-xl shadow-2xl shadow-black/40">

          {/* 1. Circular Progress Viz */}
          <div className="flex items-center justify-between pb-6 border-b border-border-subtle">
            <div className="flex flex-col">
              <h4 className="text-5xl font-extralight text-text-main leading-none">{currentProgress}%</h4>
              <span className="text-sm text-text-muted font-light mt-1">Course Completed</span>
            </div>
            {/* O uso de estilo inline para `background` é necessário aqui para usar a variável CSS customizada no contexto do conic-gradient */}
            <div className="w-20 h-20 rounded-full relative flex items-center justify-center" style={donutChartStyle}>
              <div className="absolute w-[70px] h-[70px] bg-bg-card rounded-full"></div>
            </div>
          </div>

          {/* 2. Activity Bar Chart */}
          <div>
            <h3 className="font-medium text-xs uppercase tracking-wider text-text-muted mb-4">Weekly Activity</h3>
            <div className="flex justify-between items-end h-[100px] mt-2 px-2">
              {activityData.map((data) => (
                <div key={data.day} className="flex flex-col items-center gap-2">
                  <div
                    className={`w-1.5 rounded-t-sm transition-all duration-500 ease-in-out ${data.isActive ? 'bg-accent-primary shadow-[0_0_10px_var(--tw-colors-accent-glow-bg)]' : 'bg-bg-hover'}`}
                    style={{ height: `${data.height}px` }}
                  />
                  <span className="text-[0.65rem] text-text-muted">{data.day}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 3. Syllabus List */}
          <div className='flex flex-col h-full overflow-hidden'>
            <h3 className="font-medium text-xs uppercase tracking-wider text-text-muted mb-2">Next Up</h3>
            <ul className="list-none overflow-y-auto pr-2 grow">
              {lessons.map((lesson) => (
                <SyllabusItem key={lesson.id} lesson={lesson} />
              ))}
            </ul>
          </div>
        </aside>

      </div>
    </div>
  );
};

export default TestePage;