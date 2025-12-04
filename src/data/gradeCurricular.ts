import { fetchCourseLessons } from "./APICourseJSON/fetchCourseVideos";

export interface Lesson {
  id: string;
  title: string;
  type: "video" | "text" | "exercise";
  duration?: number; // Duração em segundos, opcional
  url: string; // Video, Link, Livro
}

export interface Cadeira {
  id: number;
  name: string;
  lessons: Lesson[];
  prerequisites: string[];
  url?: string;
  books: {
    name: string;
    url: string;
  }[];
}

export interface Etapa {
  id: number;
  number: number;
  cadeiras: Cadeira[];
}

export interface Grade {
  id: number;
  curriculo: string;
  etapas: Etapa[];
}

export const CurriculoCC: Grade = {
  id: 1,
  curriculo: "Ciência da Computação",
  etapas: [
    {
      id: 1,
      number: 1,
      cadeiras: [
        {
          id: 1,
          name: "Circuitos Digitais",
          url: "",
          lessons: fetchCourseLessons("circuitos-digitais"),
          prerequisites: [],
          books: [{ name: "Livros sobre Circuitos Digitais", url: "extras/bibliography/01_digital_circuits.md" }],
        },
        {
          id: 2,
          name: "Matemática Discreta",
          lessons: fetchCourseLessons("matematica-discreta"),
          prerequisites: [],
          books: [{ name: "Livros sobre Matemática Discreta", url: "extras/bibliography/02_discrete_mathematics.md" }],
        },
        {
          id: 3,
          name: "Linguagens de Programação",
          lessons: fetchCourseLessons("linguagens-de-programacao"),
          prerequisites: [],
          books: [{ name: "Livros sobre Linguagens de Programação", url: "extras/bibliography/03_programming_languages.md" }],
        },
        {
          id: 4,
          name: "Introdução à Ciência da Computação com Python I",
          lessons: fetchCourseLessons("introducao-a-computacao"),
          prerequisites: [],
          books: [{ name: "Livros sobre Introdução a CC", url: "extras/bibliography/04_intro_python.md" }],
        },
        {
          id: 5,
          name: "Geometria Analítica",
          lessons: [{ id: "5", title: "Geometria Analítica", type: "video", url: "https://www.youtube.com/watch?v=ijkDjQT7UPM&list=PL82Svt6JAgOH3M6TCELx8oegTVCriUg3L" }],
          prerequisites: [],
          books: [{ name: "Livros sobre Geometria Analítica", url: "extras/bibliography/05_analytic_geometry.md" }],
        },
      ],
    },
    {
      id: 2,
      number: 2,
      cadeiras: [
        {
          id: 6,
          name: "Cálculo I",
          lessons: [{ id: "6", title: "Cálculo I", type: "video", url: "https://www.youtube.com/watch?v=WgHUHPlJETs&list=PLAudUnJeNg4tr-aiNyYCXE46L3qEZ2Nzx" }],
          prerequisites: ["Geometria Analítica"],
          books: [{ name: "Livros de Cálculo I", url: "extras/bibliography/06_intro_calculus.md" }],
        },
        {
          id: 7,
          name: "Álgebra Linear I",
          lessons: [{ id: "7", title: "Álgebra Linear I", type: "video", url: "https://www.youtube.com/playlist?list=PLIEzh1OveCVczEZAjhVIVd7Qs-X8ILgnI" }],
          prerequisites: ["Geometria Analítica"],
          books: [{ name: "Livros de Álgebra Linear", url: "extras/bibliography/07_intro_linear_algebra.md" }],
        },
        {
          id: 8,
          name: "Estruturas de Dados",
          lessons: [{ id: "8", title: "Estruturas de Dados", type: "video", url: "https://www.youtube.com/watch?v=0hT3EKGhbpI&list=PLndfcZyvAqbofQl2kLLdeWWjCcPlOPnrW" }],
          prerequisites: ["Matemática Discreta", "Introdução à Ciência da Computação com Python I"],
          books: [{ name: "Livros de Estruturas de Dados", url: "extras/bibliography/08_data_structure.md" }],
        },
        {
          id: 9,
          name: "Introdução à Ciência da Computação com Python II",
          lessons: [{ id: "9", title: "Introdução à Ciência da Computação com Python II", type: "video", url: "https://www.coursera.org/learn/ciencia-computacao-python-conceitos-2" }],
          prerequisites: ["Introdução à Ciência da Computação com Python I"],
          books: [{ name: "Livros de Introdução a Programação", url: "extras/bibliography/09_python.md" }],
        },
        {
          id: 10,
          name: "Laboratório de Programação Orientada a Objetos I",
          lessons: [{ id: "10", title: "Laboratório de Programação Orientada a Objetos I", type: "video", url: "https://pt.coursera.org/learn/lab-poo-parte-1" }],
          prerequisites: ["Introdução à Ciência da Computação com Python I"],
          books: [{ name: "Livros sobre Orientação a Objetos", url: "extras/bibliography/10_object_orientation.md" }],
        },
      ],
    },
    {
      id: 3,
      number: 3,
      cadeiras: [
        {
          id: 11,
          name: "Algoritmos em Grafos",
          lessons: [{ id: "11", title: "Algoritmos em Grafos", type: "video", url: "https://www.youtube.com/watch?v=fjOiu6CD5pc&list=PLrPn-zKAOzUzKdPqFNF52g-i9p1f-vmsk" }],
          prerequisites: ["Estruturas de Dados"],
          books: [{ name: "Livros sobre Algoritmos em Grafos", url: "extras/bibliography/11_graph_algorithms.md" }],
        },
        {
          id: 12,
          name: "Arquitetura de Computadores I",
          lessons: [{ id: "12", title: "Arquitetura de Computadores I", type: "video", url: "https://www.youtube.com/playlist?list=PLEUHFTHcrJmswfeq7QEHskgkT6HER3gK6" }],
          prerequisites: ["Circuitos Digitais"],
          books: [{ name: "Livros sobre Arquitetura de Computadores I", url: "extras/bibliography/12_computer_architecture.md" }],
        },
        {
          id: 13,
          name: "Probabilidade e Estatística",
          lessons: [{ id: "13", title: "Probabilidade e Estatística", type: "video", url: "https://www.youtube.com/watch?v=snXf8YT7L3U&list=PLrOyM49ctTx8HWnxWRBtKrfcuf7ew_3nm" }],
          prerequisites: ["Cálculo I"],
          books: [{ name: "Livros sobre Probabilidade e Estatística", url: "extras/bibliography/13_statistics_probability.md" }],
        },
        {
          id: 14,
          name: "Cálculo II",
          lessons: [{ id: "14", title: "Cálculo II", type: "video", url: "https://www.youtube.com/watch?v=lQdzRBRL9Tw&list=PLAudUnJeNg4sd0TEJ9EG6hr-3d3jqrddN" }],
          prerequisites: ["Cálculo I"],
          books: [{ name: "Livros sobre Cálculo II", url: "extras/bibliography/14_advanced_calculus.md" }],
        },
        {
          id: 15,
          name: "Programação Funcional em Haskell",
          lessons: [{ id: "15", title: "Programação Funcional em Haskell", type: "video", url: "https://www.youtube.com/watch?v=eTisiy5FB7k&list=PLYItvall0TqJ25sVTLcMhxsE0Hci58mpQ&index=1" }],
          prerequisites: [],
          books: [{ name: "Livros sobre Programação Funcional", url: "extras/bibliography/15_haskell.md" }],
        },
      ],
    },
    {
      id: 4,
      number: 4,
      cadeiras: [
        {
          id: 16,
          name: "Análise de Algoritmos",
          lessons: [{ id: "16", title: "Análise de Algoritmos", type: "video", url: "https://www.youtube.com/watch?v=_HBTCUNPxOg&list=PLncEdvQ20-mgGanwuFczm-4IwIdIcIiha" }],
          prerequisites: ["Algoritmos em Grafos"],
          books: [{ name: "Livros sobre Análise de Algoritmos", url: "extras/bibliography/16_analysis_of_algorithms.md" }],
        },
        {
          id: 17,
          name: "Métodos Numéricos I",
          lessons: [{ id: "17", title: "Métodos Numéricos I", type: "video", url: "https://www.youtube.com/watch?v=a6nNQ6qKgiY&list=PLI9WiBCz67cPTTRER4CrsN0wpRN-NmjGA" }],
          prerequisites: ["Introdução à Ciência da Computação com Python I", "Cálculo I"],
          books: [{ name: "Livros sobre Métodos Numéricos", url: "extras/bibliography/17_numeric_methods.md" }],
        },
        {
          id: 18,
          name: "Banco de Dados",
          lessons: [{ id: "18", title: "Banco de Dados", type: "video", url: "https://www.youtube.com/watch?v=pmAxIs5U1KI&list=PLxI8Can9yAHeHQr2McJ01e-ANyh3K0Lfq" }],
          prerequisites: [],
          books: [{ name: "Livros sobre Bancos de Dados", url: "extras/bibliography/18_database.md" }],
        },
        {
          id: 19,
          name: "Arquitetura de Computadores II",
          lessons: [{ id: "19", title: "Arquitetura de Computadores II", type: "video", url: "https://www.youtube.com/playlist?list=PLEUHFTHcrJmsqKX-GDD-hBvkF8h2_BfKJ" }],
          prerequisites: ["Introdução à Ciência da Computação com Python II", "Arquitetura de Computadores I"],
          books: [{ name: "Livros sobre Arquitetura de Computadores", url: "extras/bibliography/19_computer_architecture_II.md" }],
        },
        {
          id: 20,
          name: "Programação Lógica",
          lessons: [{ id: "20", title: "Programação Lógica", type: "video", url: "https://youtube.com/playlist?list=PLZ-Bk6jzsb-OScKa7vhpcQXoU2uxYGaFx&si=Y52_w6CQPYEE2fLN" }],
          prerequisites: [],
          books: [{ name: "Livros sobre Programação Lógica", url: "extras/bibliography/20_logical_programming.md" }],
        },
      ],
    },
    {
      id: 5,
      number: 5,
      cadeiras: [
        {
          id: 21,
          name: "Redes de Computadores",
          lessons: [{ id: "21", title: "Redes de Computadores", type: "video", url: "https://www.youtube.com/playlist?list=PLvHXLbw-JSPfKp65psX5C9tyNLHHC4uoR" }],
          prerequisites: [],
          books: [{ name: "Livros sobre Rede de Computadores", url: "extras/bibliography/21_computer_network.md" }],
        },
        {
          id: 22,
          name: "Introdução à Engenharia de Software",
          lessons: [{ id: "22", title: "Introdução à Engenharia de Software", type: "video", url: "https://www.youtube.com/watch?v=h_hEI1Kfm2U&list=PLhBaeEzs3d7lsn_Mq2n3R4_api16Wkp1Q" }],
          prerequisites: ["Introdução à Ciência da Computação com Python II"],
          books: [{ name: "Livros sobre Engenharia de Software", url: "extras/bibliography/22_software_engineering.md" }],
        },
        {
          id: 23,
          name: "Sistemas Operacionais",
          lessons: [{ id: "23", title: "Sistemas Operacionais", type: "video", url: "https://www.youtube.com/watch?v=EGn8fOf7zE0&list=PLSmh8AKk_aUn9HxFs5FnjQupdQnV56MXV" }],
          prerequisites: ["Arquitetura de Computadores II"],
          books: [{ name: "Livros sobre Sistemas Operacionais", url: "extras/bibliography/23_operating_system.md" }],
        },
        {
          id: 24,
          name: "Programação Matemática",
          lessons: [{ id: "24", title: "Programação Matemática", type: "video", url: "https://www.youtube.com/watch?v=8rrgnFCL9LM&list=PL2peXovwG2kuqXC6sECjFSiG-MT1yXMQ-" }],
          prerequisites: ["Álgebra Linear I"],
          books: [{ name: "Livros sobre Programação Matemática/Pesquisa Operacional", url: "extras/bibliography/24_math_optimization.md" }],
        },
        {
          id: 25,
          name: "Fundamentos de Computação Gráfica",
          lessons: [{ id: "25", title: "Fundamentos de Computação Gráfica", type: "video", url: "https://www.youtube.com/watch?v=AVSAesOiKYY&list=PLE51fUFkeIwLXwe4rvG4EMgw7zgjP-tDx" }],
          prerequisites: ["Geometria Analítica"],
          books: [{ name: "Livros sobre Computação Gráfica", url: "extras/bibliography/25_fundamentals_computer_graphics.md" }],
        },
      ],
    },
    {
      id: 6,
      number: 6,
      cadeiras: [
        {
          id: 26,
          name: "Linguagens Formais e Autômatos",
          lessons: [{ id: "26", title: "Linguagens Formais e Autômatos", type: "video", url: "https://www.youtube.com/watch?v=4zMwOozUt9U&list=PLncEdvQ20-mhD_qMeLHtLnA3XDT1Fr_k4&pp=iAQB" }],
          prerequisites: ["Matemática Discreta"],
          books: [{ name: "Livros sobre Linguagens Formais e Autômatos", url: "extras/bibliography/26_automata_theory.md" }],
        },
        {
          id: 27,
          name: "Inteligência Artificial",
          lessons: [{ id: "27", title: "Inteligência Artificial", type: "video", url: "https://www.youtube.com/watch?v=-T3zDFxngf4&list=PLeejGOroKw_txh7j7S3etF5eudI2WvMx0" }],
          prerequisites: ["Estruturas de Dados", "Probabilidade e Estatística"],
          books: [{ name: "Livros sobre Inteligência Artificial", url: "extras/bibliography/27_artificial_intelligence.md" }],
        },
        {
          id: 28,
          name: "Sistemas Distribuídos",
          lessons: [{ id: "28", title: "Sistemas Distribuídos", type: "video", url: "https://www.youtube.com/watch?v=TEEy5f46h_Q&list=PLP0bYj2MTFcuXa4-EbBKhvehr-rkxpeR8&index=1" }],
          prerequisites: ["Redes de Computadores"],
          books: [{ name: "Livros sobre Sistemas Distríbuidos", url: "extras/bibliography/28_distributed_computing.md" }],
        },
        {
          id: 29,
          name: "Teoria dos Grafos",
          lessons: [{ id: "29", title: "Teoria dos Grafos", type: "video", url: "https://www.youtube.com/watch?v=kfHqZLYHfHU&list=PLndfcZyvAqbr2MLCOLEvBNX6FgD8UNWfX" }],
          prerequisites: ["Matemática Discreta"],
          books: [{ name: "Livros sobre Teoria dos Grafos", url: "extras/bibliography/29_graphs.md" }],
        },
        {
          id: 30,
          name: "Cálculo III",
          lessons: [{ id: "30", title: "Cálculo III", type: "video", url: "https://www.youtube.com/watch?v=8mBTfk7s63s&list=PLAudUnJeNg4ugGUJo52dtgFZ_tCm1Ds5W" }],
          prerequisites: ["Cálculo II"],
          books: [{ name: "Livros sobre Cálculo III", url: "extras/bibliography/30_multivariable_calculus.md" }],
        },
      ],
    },
    {
      id: 7,
      number: 7,
      cadeiras: [
        {
          id: 31,
          name: "Teoria da Computação",
          lessons: [{ id: "31", title: "Teoria da Computação", type: "video", url: "https://www.youtube.com/watch?v=dWRxL30aoes&list=PLYLYA7XrlskNgCeSpJf9PQHHb8Z4WpRm4" }],
          prerequisites: ["Linguagens Formais e Autômatos"],
          books: [{ name: "Livros sobre Teoria da Computação", url: "extras/bibliography/31_theory_of_computation.md" }],
        },
        {
          id: 32,
          name: "Deep Learning",
          lessons: [{ id: "32", title: "Deep Learning", type: "video", url: "https://www.youtube.com/watch?v=0VD_2t6EdS4&list=PL9At2PVRU0ZqVArhU9QMyI3jSe113_m2-" }],
          prerequisites: ["Inteligência Artificial"],
          books: [{ name: "Livros sobre Deep Learning", url: "extras/bibliography/32_deep_learning.md" }],
        },
        {
          id: 33,
          name: "Compiladores",
          lessons: [{ id: "33", title: "Compiladores", type: "video", url: "https://youtube.com/playlist?list=PLX6Nyaq0ebfhI396WlWN6WlBm-tp7vDtV&si=LoaU9lzLMuSVikgi" }],
          prerequisites: ["Estruturas de Dados", "Teoria dos Grafos"],
          books: [{ name: "Livros sobre Compiladores", url: "extras/bibliography/33_compilers.md" }],
        },
        {
          id: 34,
          name: "Computação Quântica",
          lessons: [{ id: "34", title: "Computação Quântica", type: "video", url: "https://youtube.com/playlist?list=PLUFcRbu9t-v4peHdmDy4rtG3EnbZNS86R&si=hLYHhS2BTKRgNwMJ" }],
          prerequisites: ["Cálculo III", "Arquitetura de Computadores II"],
          books: [{ name: "Livros sobre Computação Quântica", url: "extras/bibliography/34_quantum_copmputing.md" }],
        },
        {
          id: 35,
          name: "Metodologia da Pesquisa",
          lessons: [{ id: "35", title: "Metodologia da Pesquisa", type: "video", url: "https://youtube.com/playlist?list=PLclUQno6PMpQO0-XrDwWsPzRzEvjwp1__&si=0dXojlZV5EisMB6s" }],
          prerequisites: [],
          books: [{ name: "Livros sobre Metodologia de Pesquisa", url: "extras/bibliography/35_methodology.md" }],
        },
      ],
    },
  ],
};

export const CurriculoMatematica: Grade = {
  id: 2,
  curriculo: "Matemática",
  etapas: [
    {
      id: 1,
      number: 1,
      cadeiras: [
        {
          id: 36,
          name: "Ingredientes básicos para o Cálculo",
          lessons: [{ id: "36", title: "Ingredientes básicos para o Cálculo", type: "video", url: "https://www.youtube.com/playlist?list=PL2xox8ncv81W698VTHptmp7ZNvcKqlyHO" }],
          prerequisites: [],
          books: [{ name: "Livros sobre Ingredientes básicos para o Cálculo", url: "extras/bibliography/01_calculo_basico.md" }],
        },
        {
          id: 37,
          name: "Teoria dos Conjuntos",
          lessons: [{ id: "37", title: "Teoria dos Conjuntos", type: "video", url: "https://www.youtube.com/playlist?list=PL2xox8ncv81X2Cp3FClIjRE9sG_Vq6sZ_" }],
          prerequisites: [],
          books: [{ name: "Livros sobre Teoria dos Conjuntos", url: "extras/bibliography/02_teoria_conjuntos.md" }],
        },
        {
          id: 38,
          name: "Lógica e Matemática Discreta",
          lessons: [{ id: "38", title: "Lógica e Matemática Discreta", type: "video", url: "https://www.youtube.com/playlist?list=PLxI8Can9yAHf6oB0nf8FwLhqSOcBLqOxH" }],
          prerequisites: [],
          books: [{ name: "Livros sobre Lógica e Matemática Discreta", url: "extras/bibliography/03_logica_discreta.md" }],
        },
        {
          id: 39,
          name: "Geometria Analítica",
          lessons: [{ id: "39", title: "Geometria Analítica", type: "video", url: "https://www.youtube.com/playlist?list=PLxI8Can9yAHcSZv2BBUJAfGsXx0D0hn-2" }],
          prerequisites: [],
          books: [{ name: "Livros sobre Geometria Analítica", url: "extras/bibliography/04_geometria_analitica.md" }],
        },
        {
          id: 40,
          name: "Algoritmos e Programação em Python",
          lessons: [{ id: "40", title: "Algoritmos e Programação em Python", type: "video", url: "https://www.youtube.com/playlist?list=PLvE-ZAFRgX8hnECDn1v9HNTI71veL3oW0" }],
          prerequisites: [],
          books: [{ name: "Livros sobre Algoritmos e Programação em Python", url: "extras/bibliography/05_algoritmos_python.md" }],
        },
      ],
    },
    {
      id: 2,
      number: 2,
      cadeiras: [
        {
          id: 41,
          name: "Cálculo I",
          lessons: [{ id: "41", title: "Cálculo I", type: "video", url: "https://www.youtube.com/playlist?list=PL2D9B691A704C6F7B" }],
          prerequisites: [],
          books: [{ name: "Livros sobre Cálculo I", url: "extras/bibliography/06_calculo_i.md" }],
        },
        {
          id: 42,
          name: "Projeto e Análise de Algoritmos",
          lessons: [{ id: "42", title: "Projeto e Análise de Algoritmos", type: "video", url: "https://www.youtube.com/playlist?list=PLxI8Can9yAHdNN5fpKWRF8bbLG-2P-0LW" }],
          prerequisites: ["Programação (Python)"],
          books: [{ name: "Livros sobre Projeto e Análise de Algoritmos", url: "extras/bibliography/07_analise_algoritmos.md" }],
        },
        {
          id: 43,
          name: "Álgebra Linear",
          lessons: [{ id: "43", title: "Álgebra Linear", type: "video", url: "https://www.youtube.com/playlist?list=PLxI8Can9yAHdUtWDKtTA9AmuICNyX9EIr" }],
          prerequisites: [],
          books: [{ name: "Livros sobre Álgebra Linear", url: "extras/bibliography/08_algebra_linear.md" }],
        },
        {
          id: 44,
          name: "Álgebra Linear (avançada)",
          lessons: [{ id: "44", title: "Álgebra Linear (avançada)", type: "video", url: "https://www.youtube.com/playlist?list=PL2xox8ncv81WXIutzWJDQ7E78riZqJClA" }],
          prerequisites: [],
          books: [{ name: "Livros sobre Álgebra Linear (avançada)", url: "extras/bibliography/09_algebra_linear_avancada.md" }],
        },
        {
          id: 45,
          name: "Teoria dos Números",
          lessons: [{ id: "45", title: "Teoria dos Números", type: "video", url: "https://www.youtube.com/playlist?list=PLxI8Can9yAHcfxDjfTmU-t7XC1w2GVwc_" }],
          prerequisites: [],
          books: [{ name: "Livros sobre Teoria dos Números", url: "extras/bibliography/10_teoria_numeros.md" }],
        },
      ],
    },
    {
      id: 3,
      number: 3,
      cadeiras: [
        {
          id: 46,
          name: "Cálculo II",
          lessons: [{ id: "46", title: "Cálculo II", type: "video", url: "https://www.youtube.com/playlist?list=PLxI8Can9yAHeZfF4HwiVmv4D6n3acKLER" }],
          prerequisites: ["Cálculo I"],
          books: [{ name: "Livros sobre Cálculo II", url: "extras/bibliography/11_calculo_ii.md" }],
        },
        {
          id: 47,
          name: "Estruturas Algébricas",
          lessons: [{ id: "47", title: "Estruturas Algébricas", type: "video", url: "https://www.youtube.com/playlist?list=PL6eyvTm7LSBsdkBBKzEDcyYbdujN_6TmL" }],
          prerequisites: ["Teoria dos Números"],
          books: [{ name: "Livros sobre Estruturas Algébricas", url: "extras/bibliography/12_estruturas_algebraicas.md" }],
        },
        {
          id: 48,
          name: "Equações Diferenciais Ordinárias",
          lessons: [{ id: "48", title: "Equações Diferenciais Ordinárias", type: "video", url: "https://www.youtube.com/playlist?list=PLo4jXE-LdDTR9q44hqm2w3NWtvyP_ZoiP" }],
          prerequisites: [],
          books: [{ name: "Livros sobre Equações Diferenciais Ordinárias", url: "extras/bibliography/13_equacoes_diferenciais.md" }],
        },
        {
          id: 49,
          name: "Física Geral I",
          lessons: [{ id: "49", title: "Física Geral I", type: "video", url: "https://www.youtube.com/playlist?list=PL7581C21F8ADD6C8E" }],
          prerequisites: [],
          books: [{ name: "Livros sobre Física Geral I", url: "extras/bibliography/14_fisica_geral_i.md" }],
        },
        {
          id: 50,
          name: "História da Matemática",
          lessons: [{ id: "50", title: "História da Matemática", type: "video", url: "https://www.youtube.com/playlist?list=PLxI8Can9yAHdOIYVPQPS6oUPBk8mb1CVU" }],
          prerequisites: [],
          books: [{ name: "Livros sobre História da Matemática", url: "extras/bibliography/15_historia_matematica.md" }],
        },
      ],
    },
    {
      id: 4,
      number: 4,
      cadeiras: [
        {
          id: 51,
          name: "Cálculo III",
          lessons: [{ id: "51", title: "Cálculo III", type: "video", url: "https://www.youtube.com/playlist?list=PLFBA21F349930F92F" }],
          prerequisites: ["Cálculo II"],
          books: [{ name: "Livros sobre Cálculo III", url: "extras/bibliography/16_calculo_iii.md" }],
        },
        {
          id: 52,
          name: "Física Geral II",
          lessons: [{ id: "52", title: "Física Geral II", type: "video", url: "https://www.youtube.com/playlist?list=PL516F59E9AE8F5BF7" }],
          prerequisites: ["Física Geral I"],
          books: [{ name: "Livros sobre Física Geral II", url: "extras/bibliography/17_fisica_geral_ii.md" }],
        },
        {
          id: 53,
          name: "Estatística e Probabilidade",
          lessons: [{ id: "53", title: "Estatística e Probabilidade", type: "video", url: "https://www.youtube.com/playlist?list=PLxI8Can9yAHeeWqe3m9HZFiBhT33Mfxew" }],
          prerequisites: [],
          books: [{ name: "Livros sobre Estatística e Probabilidade", url: "extras/bibliography/18_estatistica_probabilidade.md" }],
        },
        {
          id: 54,
          name: "Programação Linear",
          lessons: [{ id: "54", title: "Programação Linear", type: "video", url: "https://www.youtube.com/channel/UCYe-qV12CP64BewDy2-BY5A/playlists" }],
          prerequisites: ["Projeto e Análise de Algoritmos"],
          books: [{ name: "Livros sobre Programação Linear", url: "extras/bibliography/19_programacao_linear.md" }],
        },
        {
          id: 55,
          name: "Análise na Reta",
          lessons: [{ id: "55", title: "Análise na Reta", type: "video", url: "https://www.youtube.com/playlist?list=PL2xox8ncv81UTkjNN2WQM8knGQJpu1j_z" }],
          prerequisites: [],
          books: [{ name: "Livros sobre Análise na Reta", url: "extras/bibliography/20_analise_reta.md" }],
        },
      ],
    },
    {
      id: 5,
      number: 5,
      cadeiras: [
        {
          id: 56,
          name: "Cálculo IV (Métodos Matemáticos)",
          lessons: [{ id: "56", title: "Cálculo IV (Métodos Matemáticos)", type: "video", url: "https://www.youtube.com/playlist?list=PLxI8Can9yAHeOiMYCBlkyCALloROQ58OY" }],
          prerequisites: ["Cálculo III"],
          books: [{ name: "Livros sobre Cálculo IV (Métodos Matemáticos)", url: "extras/bibliography/21_calculo_iv.md" }],
        },
        {
          id: 57,
          name: "Introdução a Topologia Geral",
          lessons: [{ id: "57", title: "Introdução a Topologia Geral", type: "video", url: "https://www.youtube.com/playlist?list=PLhueTEPO9C1KEX8jTphPeb9kEF9it4b5x" }],
          prerequisites: [],
          books: [{ name: "Livros sobre Introdução a Topologia Geral", url: "extras/bibliography/22_topologia_geral.md" }],
        },
        {
          id: 58,
          name: "Cálculo com variável complexa",
          lessons: [{ id: "58", title: "Cálculo com variável complexa", type: "video", url: "https://www.youtube.com/playlist?list=PLpizEtrJatZEUjIgADKdbE6_jGhcXFxht" }],
          prerequisites: ["Cálculo IV"],
          books: [{ name: "Livros sobre Cálculo com variável complexa", url: "extras/bibliography/23_calculo_variavel_complexa.md" }],
        },
        {
          id: 59,
          name: "Teoria dos Grafos",
          lessons: [{ id: "59", title: "Teoria dos Grafos", type: "video", url: "https://www.youtube.com/playlist?list=PLndfcZyvAqbr2MLCOLEvBNX6FgD8UNWfX" }],
          prerequisites: [],
          books: [{ name: "Livros sobre Teoria dos Grafos", url: "extras/bibliography/24_teoria_grafos.md" }],
        },
        {
          id: 60,
          name: "Física Geral III",
          lessons: [{ id: "60", title: "Física Geral III", type: "video", url: "https://www.youtube.com/playlist?list=PLxI8Can9yAHdG8tw2QofrU02IuAEVyGlL" }],
          prerequisites: ["Física Geral II"],
          books: [{ name: "Livros sobre Física Geral III", url: "extras/bibliography/25_fisica_geral_iii.md" }],
        },
      ],
    },
    {
      id: 6,
      number: 6,
      cadeiras: [
        {
          id: 61,
          name: "Alfabetização em anéis",
          lessons: [{ id: "61", title: "Alfabetização em anéis", type: "video", url: "https://www.youtube.com/playlist?list=PL2xox8ncv81XSiyT7czJX8q7I7kNmc8Bk" }],
          prerequisites: ["Estruturas Algébricas"],
          books: [{ name: "Livros sobre Alfabetização em anéis", url: "extras/bibliography/26_aneis.md" }],
        },
        {
          id: 62,
          name: "Física Moderna",
          lessons: [{ id: "62", title: "Física Moderna", type: "video", url: "https://www.youtube.com/playlist?list=PLW5Hta-B_II5vB4Vn9wVWaJVHTo4XxB_i" }],
          prerequisites: ["Física Geral III"],
          books: [{ name: "Livros sobre Física Moderna", url: "extras/bibliography/27_fisica_moderna.md" }],
        },
        {
          id: 63,
          name: "Teoria de Corpos",
          lessons: [{ id: "63", title: "Teoria de Corpos", type: "video", url: "https://www.youtube.com/playlist?list=PL2xox8ncv81W0HbBtma7QQMeyVllJMk0m" }],
          prerequisites: ["Estruturas Algébricas"],
          books: [{ name: "Livros sobre Teoria de Corpos", url: "extras/bibliography/28_teoria_corpos.md" }],
        },
        {
          id: 64,
          name: "Análise Complexa",
          lessons: [{ id: "64", title: "Análise Complexa", type: "video", url: "https://www.youtube.com/playlist?list=PLo4jXE-LdDTRQ07QOEFl0x6mvyTl2hlRn" }],
          prerequisites: [],
          books: [{ name: "Livros sobre Análise Complexa", url: "extras/bibliography/29_analise_complexa.md" }],
        },
        {
          id: 65,
          name: "Equações Diferenciais Parciais",
          lessons: [{ id: "65", title: "Equações Diferenciais Parciais", type: "video", url: "https://www.youtube.com/playlist?list=PLpB72X90N5xST4NmvjQicgfRgpt-9rgw-" }],
          prerequisites: ["Cálculo IV", "Análise Complexa"],
          books: [{ name: "Livros sobre Equações Diferenciais Parciais", url: "extras/bibliography/30_equacoes_diferenciais_parciais.md" }],
        },
      ],
    },
  ],
};