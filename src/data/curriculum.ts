export interface Subject {
  name: string;
  videoUrl?: string; // Opcional, pois alguns não têm URL de vídeo direto
  prerequisites: string[];
  books: {
    name: string;
    url: string;
  }[];
}

export interface Semester {
  number: number;
  subjects: Subject[];
}

export const curriculum: Semester[] = [
  {
    number: 1,
    subjects: [
      {
        name: "Circuitos Digitais",
        videoUrl: "https://www.youtube.com/playlist?list=PLXyWBo_coJnMYO9Na3t-oYsc2X4kPJBWf",
        prerequisites: [],
        books: [{ name: "Livros sobre Circuitos Digitais", url: "extras/bibliography/01_digital_circuits.md" }],
      },
      {
        name: "Matemática Discreta",
        videoUrl: "https://www.youtube.com/watch?v=KGoSTh1sgyM&list=PL6mfjjCaO1WrEJ0JKRyXO3QjaPkJaSvAS",
        prerequisites: [],
        books: [{ name: "Livros sobre Matemática Discreta", url: "extras/bibliography/02_discrete_mathematics.md" }],
      },
      {
        name: "Linguagens de Programação",
        videoUrl: "https://www.youtube.com/watch?v=xfDdxqbkiSQ&list=PLnzT8EWpmbka4KukGR184tifzqcuq_ZDv",
        prerequisites: [],
        books: [{ name: "Livros sobre Linguagens de Programação", url: "extras/bibliography/03_programming_languages.md" }],
      },
      {
        name: "Introdução à Ciência da Computação com Python I",
        videoUrl: "https://www.coursera.org/learn/ciencia-computacao-python-conceitos",
        prerequisites: [],
        books: [{ name: "Livros sobre Introdução a CC", url: "extras/bibliography/04_intro_python.md" }],
      },
      {
        name: "Geometria Analítica",
        videoUrl: "https://www.youtube.com/watch?v=ijkDjQT7UPM&list=PL82Svt6JAgOH3M6TCELx8oegTVCriUg3L",
        prerequisites: [],
        books: [{ name: "Livros sobre Geometria Analítica", url: "extras/bibliography/05_analytic_geometry.md" }],
      },
    ],
  },
  {
    number: 2,
    subjects: [
      {
        name: "Cálculo I",
        videoUrl: "https://www.youtube.com/watch?v=WgHUHPlJETs&list=PLAudUnJeNg4tr-aiNyYCXE46L3qEZ2Nzx",
        prerequisites: ["Geometria Analítica"],
        books: [{ name: "Livros de Cálculo I", url: "extras/bibliography/06_intro_calculus.md" }],
      },
      {
        name: "Álgebra Linear I",
        videoUrl: "https://www.youtube.com/playlist?list=PLIEzh1OveCVczEZAjhVIVd7Qs-X8ILgnI",
        prerequisites: ["Geometria Analítica"],
        books: [{ name: "Livros de Álgebra Linear", url: "extras/bibliography/07_intro_linear_algebra.md" }],
      },
      {
        name: "Estruturas de Dados",
        videoUrl: "https://www.youtube.com/watch?v=0hT3EKGhbpI&list=PLndfcZyvAqbofQl2kLLdeWWjCcPlOPnrW",
        prerequisites: ["Matemática Discreta", "Introdução à Ciência da Computação com Python I"],
        books: [{ name: "Livros de Estruturas de Dados", url: "extras/bibliography/08_data_structure.md" }],
      },
      {
        name: "Introdução à Ciência da Computação com Python II",
        videoUrl: "https://www.coursera.org/learn/ciencia-computacao-python-conceitos-2",
        prerequisites: ["Introdução à Ciência da Computação com Python I"],
        books: [{ name: "Livros de Introdução a Programação", url: "extras/bibliography/09_python.md" }],
      },
      {
        name: "Laboratório de Programação Orientada a Objetos I",
        videoUrl: "https://pt.coursera.org/learn/lab-poo-parte-1",
        prerequisites: ["Introdução à Ciência da Computação com Python I"],
        books: [{ name: "Livros sobre Orientação a Objetos", url: "extras/bibliography/10_object_orientation.md" }],
      },
    ],
  },
  {
    number: 3,
    subjects: [
      {
        name: "Algoritmos em Grafos",
        videoUrl: "https://www.youtube.com/watch?v=fjOiu6CD5pc&list=PLrPn-zKAOzUzKdPqFNF52g-i9p1f-vmsk",
        prerequisites: ["Estruturas de Dados"],
        books: [{ name: "Livros sobre Algoritmos em Grafos", url: "extras/bibliography/11_graph_algorithms.md" }],
      },
      {
        name: "Arquitetura de Computadores I",
        videoUrl: "https://www.youtube.com/playlist?list=PLEUHFTHcrJmswfeq7QEHskgkT6HER3gK6",
        prerequisites: ["Circuitos Digitais"],
        books: [{ name: "Livros sobre Arquitetura de Computadores I", url: "extras/bibliography/12_computer_architecture.md" }],
      },
      {
        name: "Probabilidade e Estatística",
        videoUrl: "https://www.youtube.com/watch?v=snXf8YT7L3U&list=PLrOyM49ctTx8HWnxWRBtKrfcuf7ew_3nm",
        prerequisites: ["Cálculo I"],
        books: [{ name: "Livros sobre Probabilidade e Estatística", url: "extras/bibliography/13_statistics_probability.md" }],
      },
      {
        name: "Cálculo II",
        videoUrl: "https://www.youtube.com/watch?v=lQdzRBRL9Tw&list=PLAudUnJeNg4sd0TEJ9EG6hr-3d3jqrddN",
        prerequisites: ["Cálculo I"],
        books: [{ name: "Livros sobre Cálculo II", url: "extras/bibliography/14_advanced_calculus.md" }],
      },
      {
        name: "Programação Funcional em Haskell",
        videoUrl: "https://www.youtube.com/watch?v=eTisiy5FB7k&list=PLYItvall0TqJ25sVTLcMhxsE0Hci58mpQ&index=1",
        prerequisites: [],
        books: [{ name: "Livros sobre Programação Funcional", url: "extras/bibliography/15_haskell.md" }],
      },
    ],
  },
  {
    number: 4,
    subjects: [
      {
        name: "Análise de Algoritmos",
        videoUrl: "https://www.youtube.com/watch?v=_HBTCUNPxOg&list=PLncEdvQ20-mgGanwuFczm-4IwIdIcIiha",
        prerequisites: ["Algoritmos em Grafos"],
        books: [{ name: "Livros sobre Análise de Algoritmos", url: "extras/bibliography/16_analysis_of_algorithms.md" }],
      },
      {
        name: "Métodos Numéricos I",
        videoUrl: "https://www.youtube.com/watch?v=a6nNQ6qKgiY&list=PLI9WiBCz67cPTTRER4CrsN0wpRN-NmjGA",
        prerequisites: ["Introdução à Ciência da Computação com Python I", "Cálculo I"],
        books: [{ name: "Livros sobre Métodos Numéricos", url: "extras/bibliography/17_numeric_methods.md" }],
      },
      {
        name: "Banco de Dados",
        videoUrl: "https://www.youtube.com/watch?v=pmAxIs5U1KI&list=PLxI8Can9yAHeHQr2McJ01e-ANyh3K0Lfq",
        prerequisites: [],
        books: [{ name: "Livros sobre Bancos de Dados", url: "extras/bibliography/18_database.md" }],
      },
      {
        name: "Arquitetura de Computadores II",
        videoUrl: "https://www.youtube.com/playlist?list=PLEUHFTHcrJmsqKX-GDD-hBvkF8h2_BfKJ",
        prerequisites: ["Introdução à Ciência da Computação com Python II", "Arquitetura de Computadores I"],
        books: [{ name: "Livros sobre Arquitetura de Computadores", url: "extras/bibliography/19_computer_architecture_II.md" }],
      },
      {
        name: "Programação Lógica",
        videoUrl: "https://youtube.com/playlist?list=PLZ-Bk6jzsb-OScKa7vhpcQXoU2uxYGaFx&si=Y52_w6CQPYEE2fLN",
        prerequisites: [],
        books: [{ name: "Livros sobre Programação Lógica", url: "extras/bibliography/20_logical_programming.md" }],
      },
    ],
  },
  {
    number: 5,
    subjects: [
      {
        name: "Redes de Computadores",
        videoUrl: "https://www.youtube.com/playlist?list=PLvHXLbw-JSPfKp65psX5C9tyNLHHC4uoR",
        prerequisites: [],
        books: [{ name: "Livros sobre Rede de Computadores", url: "extras/bibliography/21_computer_network.md" }],
      },
      {
        name: "Introdução à Engenharia de Software",
        videoUrl: "https://www.youtube.com/watch?v=h_hEI1Kfm2U&list=PLhBaeEzs3d7lsn_Mq2n3R4_api16Wkp1Q",
        prerequisites: ["Introdução à Ciência da Computação com Python II"],
        books: [{ name: "Livros sobre Engenharia de Software", url: "extras/bibliography/22_software_engineering.md" }],
      },
      {
        name: "Sistemas Operacionais",
        videoUrl: "https://www.youtube.com/watch?v=EGn8fOf7zE0&list=PLSmh8AKk_aUn9HxFs5FnjQupdQnV56MXV",
        prerequisites: ["Arquitetura de Computadores II"],
        books: [{ name: "Livros sobre Sistemas Operacionais", url: "extras/bibliography/23_operating_system.md" }],
      },
      {
        name: "Programação Matemática",
        videoUrl: "https://www.youtube.com/watch?v=8rrgnFCL9LM&list=PL2peXovwG2kuqXC6sECjFSiG-MT1yXMQ-",
        prerequisites: ["Álgebra Linear I"],
        books: [{ name: "Livros sobre Programação Matemática/Pesquisa Operacional", url: "extras/bibliography/24_math_optimization.md" }],
      },
      {
        name: "Fundamentos de Computação Gráfica",
        videoUrl: "https://www.youtube.com/watch?v=AVSAesOiKYY&list=PLE51fUFkeIwLXwe4rvG4EMgw7zgjP-tDx",
        prerequisites: ["Geometria Analítica"],
        books: [{ name: "Livros sobre Computação Gráfica", url: "extras/bibliography/25_fundamentals_computer_graphics.md" }],
      },
    ],
  },
  {
    number: 6,
    subjects: [
      {
        name: "Linguagens Formais e Autômatos",
        videoUrl: "https://www.youtube.com/watch?v=4zMwOozUt9U&list=PLncEdvQ20-mhD_qMeLHtLnA3XDT1Fr_k4&pp=iAQB",
        prerequisites: ["Matemática Discreta"],
        books: [{ name: "Livros sobre Linguagens Formais e Autômatos", url: "extras/bibliography/26_automata_theory.md" }],
      },
      {
        name: "Inteligência Artificial",
        videoUrl: "https://www.youtube.com/watch?v=-T3zDFxngf4&list=PLeejGOroKw_txh7j7S3etF5eudI2WvMx0",
        prerequisites: ["Estruturas de Dados", "Probabilidade e Estatística"],
        books: [{ name: "Livros sobre Inteligência Artificial", url: "extras/bibliography/27_artificial_intelligence.md" }],
      },
      {
        name: "Sistemas Distribuídos",
        videoUrl: "https://www.youtube.com/watch?v=TEEy5f46h_Q&list=PLP0bYj2MTFcuXa4-EbBKhvehr-rkxpeR8&index=1",
        prerequisites: ["Redes de Computadores"],
        books: [{ name: "Livros sobre Sistemas Distríbuidos", url: "extras/bibliography/28_distributed_computing.md" }],
      },
      {
        name: "Teoria dos Grafos",
        videoUrl: "https://www.youtube.com/watch?v=kfHqZLYHfHU&list=PLndfcZyvAqbr2MLCOLEvBNX6FgD8UNWfX",
        prerequisites: ["Matemática Discreta"],
        books: [{ name: "Livros sobre Teoria dos Grafos", url: "extras/bibliography/29_graphs.md" }],
      },
      {
        name: "Cálculo III",
        videoUrl: "https://www.youtube.com/watch?v=8mBTfk7s63s&list=PLAudUnJeNg4ugGUJo52dtgFZ_tCm1Ds5W",
        prerequisites: ["Cálculo II"],
        books: [{ name: "Livros sobre Cálculo III", url: "extras/bibliography/30_multivariable_calculus.md" }],
      },
    ],
  },
  {
    number: 7,
    subjects: [
      {
        name: "Teoria da Computação",
        videoUrl: "https://www.youtube.com/watch?v=dWRxL30aoes&list=PLYLYA7XrlskNgCeSpJf9PQHHb8Z4WpRm4",
        prerequisites: ["Linguagens Formais e Autômatos"],
        books: [{ name: "Livros sobre Teoria da Computação", url: "extras/bibliography/31_theory_of_computation.md" }],
      },
      {
        name: "Deep Learning",
        videoUrl: "https://www.youtube.com/watch?v=0VD_2t6EdS4&list=PL9At2PVRU0ZqVArhU9QMyI3jSe113_m2-",
        prerequisites: ["Inteligência Artificial"],
        books: [{ name: "Livros sobre Deep Learning", url: "extras/bibliography/32_deep_learning.md" }],
      },
      {
        name: "Compiladores",
        videoUrl: "https://youtube.com/playlist?list=PLX6Nyaq0ebfhI396WlWN6WlBm-tp7vDtV&si=LoaU9lzLMuSVikgi",
        prerequisites: ["Estruturas de Dados", "Teoria dos Grafos"],
        books: [{ name: "Livros sobre Compiladores", url: "extras/bibliography/33_compilers.md" }],
      },
      {
        name: "Computação Quântica",
        videoUrl: "https://youtube.com/playlist?list=PLUFcRbu9t-v4peHdmDy4rtG3EnbZNS86R&si=hLYHhS2BTKRgNwMJ",
        prerequisites: ["Cálculo III", "Arquitetura de Computadores II"],
        books: [{ name: "Livros sobre Computação Quântica", url: "extras/bibliography/34_quantum_copmputing.md" }],
      },
      {
        name: "Metodologia da Pesquisa",
        videoUrl: "https://youtube.com/playlist?list=PLclUQno6PMpQO0-XrDwWsPzRzEvjwp1__&si=0dXojlZV5EisMB6s",
        prerequisites: [],
        books: [{ name: "Livros sobre Metodologia de Pesquisa", url: "extras/bibliography/35_methodology.md" }],
      },
    ],
  },
];