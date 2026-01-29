import type Curriculum from "../interfaces/curriculum.ts";

export const curriculumCC: Curriculum = {
  id: 1,
  acronym: "cc",
  name: "Ciência da Computação",
  steps: [
    {
      // Etapa 1
      id: 1,
      number: 1,
      subjects: [
        {
          id: 1,
          name: "Circuitos Digitais",
          url: "https://www.youtube.com/playlist?list=PLXyWBo_coJnMYO9Na3t-oYsc2X4kPJBWf",
          prerequisites: [],
          books: [
            {
              name: "Livros sobre Circuitos Digitais",
              url: "extras/bibliography/01_digital_circuits.md",
            },
          ],
        },
        {
          id: 2,
          name: "Matemática Discreta",
          url: "https://www.youtube.com/watch?v=KGoSTh1sgyM&list=PL6mfjjCaO1WrEJ0JKRyXO3QjaPkJaSvAS",
          prerequisites: [],
          books: [
            {
              name: "Livros sobre Matemática Discreta",
              url: "extras/bibliography/02_discrete_mathematics.md",
            },
          ],
        },
        {
          id: 3,
          name: "Linguagens de Programação",
          url: "https://www.youtube.com/watch?v=xfDdxqbkiSQ&list=PLnzT8EWpmbka4KukGR184tifzqcuq_ZDv",
          prerequisites: [],
          books: [
            {
              name: "Livros sobre Linguagens de Programação",
              url: "extras/bibliography/03_programming_languages.md",
            },
          ],
        },
        {
          id: 4,
          name: "Introdução à Ciência da Computação com Python I",
          url: "https://youtube.com/playlist?list=PLcoJJSvnDgcKpOi_UeneTNTIVOigRQwcn",
          prerequisites: [],
          books: [
            {
              name: "Livros sobre Introdução a CC",
              url: "extras/bibliography/04_intro_python.md",
            },
          ],
        },
        {
          id: 5,
          name: "Geometria Analítica",
          url: "https://www.youtube.com/watch?v=ijkDjQT7UPM&list=PL82Svt6JAgOH3M6TCELx8oegTVCriUg3L",
          prerequisites: [],
          books: [
            {
              name: "Livros sobre Geometria Analítica",
              url: "extras/bibliography/05_analytic_geometry.md",
            },
          ],
        },
      ],
    },
    {
      // Etapa 2
      id: 2,
      number: 2,
      subjects: [
        {
          id: 6,
          name: "Cálculo I",
          url: "https://www.youtube.com/watch?v=WgHUHPlJETs&list=PLAudUnJeNg4tr-aiNyYCXE46L3qEZ2Nzx",
          prerequisites: ["Geometria Analítica"],
          books: [
            {
              name: "Livros de Cálculo I",
              url: "extras/bibliography/06_intro_calculus.md",
            },
          ],
        },
        {
          id: 7,
          name: "Álgebra Linear I",
          url: "https://www.youtube.com/playlist?list=PLIEzh1OveCVczEZAjhVIVd7Qs-X8ILgnI",
          prerequisites: ["Geometria Analítica"],
          books: [
            {
              name: "Livros de Álgebra Linear",
              url: "extras/bibliography/07_intro_linear_algebra.md",
            },
          ],
        },
        {
          id: 8,
          name: "Estruturas de Dados",
          url: "https://www.youtube.com/watch?v=0hT3EKGhbpI&list=PLndfcZyvAqbofQl2kLLdeWWjCcPlOPnrW",
          prerequisites: [
            "Matemática Discreta",
            "Introdução à Ciência da Computação com Python I",
          ],
          books: [
            {
              name: "Livros de Estruturas de Dados",
              url: "extras/bibliography/08_data_structure.md",
            },
          ],
        },
        {
          id: 9,
          name: "Introdução à Ciência da Computação com Python II",
          url: "https://youtube.com/playlist?list=PLcoJJSvnDgcKpOi_UeneTNTIVOigRQwcn&si=RT7FxhHXAYGUuYJD",
          prerequisites: ["Introdução à Ciência da Computação com Python I"],
          books: [
            {
              name: "Livros de Introdução a Programação",
              url: "extras/bibliography/09_python.md",
            },
          ],
        },
        {
          id: 10,
          name: "Laboratório de Programação Orientada a Objetos I",
          url: "https://www.youtube.com/playlist?list=PLTeQ2u81sjqfsFNWrUCIoqJZBSJrai8M7",
          prerequisites: ["Introdução à Ciência da Computação com Python I"],
          books: [
            {
              name: "Livros sobre Orientação a Objetos",
              url: "extras/bibliography/10_object_orientation.md",
            },
          ],
        },
      ],
    },
    {
      // Etapa 3
      id: 3,
      number: 3,
      subjects: [
        {
          id: 11,
          name: "Algoritmos em Grafos",
          url: "https://www.youtube.com/watch?v=fjOiu6CD5pc&list=PLrPn-zKAOzUzKdPqFNF52g-i9p1f-vmsk",
          prerequisites: ["Estruturas de Dados"],
          books: [
            {
              name: "Livros sobre Algoritmos em Grafos",
              url: "extras/bibliography/11_graph_algorithms.md",
            },
          ],
        },
        {
          id: 12,
          name: "Arquitetura de Computadores I",
          url: "https://www.youtube.com/playlist?list=PLEUHFTHcrJmswfeq7QEHskgkT6HER3gK6",
          prerequisites: ["Circuitos Digitais"],
          books: [
            {
              name: "Livros sobre Arquitetura de Computadores I",
              url: "extras/bibliography/12_computer_architecture.md",
            },
          ],
        },
        {
          id: 13,
          name: "Probabilidade e Estatística",
          url: "https://www.youtube.com/watch?v=snXf8YT7L3U&list=PLrOyM49ctTx8HWnxWRBtKrfcuf7ew_3nm",
          prerequisites: ["Cálculo I"],
          books: [
            {
              name: "Livros sobre Probabilidade e Estatística",
              url: "extras/bibliography/13_statistics_probability.md",
            },
          ],
        },
        {
          id: 14,
          name: "Cálculo II",
          url: "https://www.youtube.com/watch?v=lQdzRBRL9Tw&list=PLAudUnJeNg4sd0TEJ9EG6hr-3d3jqrddN",
          prerequisites: ["Cálculo I"],
          books: [
            {
              name: "Livros sobre Cálculo II",
              url: "extras/bibliography/14_advanced_calculus.md",
            },
          ],
        },
        {
          id: 15,
          name: "Programação Funcional em Haskell",
          url: "https://www.youtube.com/watch?v=eTisiy5FB7k&list=PLYItvall0TqJ25sVTLcMhxsE0Hci58mpQ",
          prerequisites: [],
          books: [
            {
              name: "Livros sobre Programação Funcional",
              url: "extras/bibliography/15_haskell.md",
            },
          ],
        },
      ],
    },
    {
      // Etapa 4
      id: 4,
      number: 4,
      subjects: [
        {
          id: 16,
          name: "Análise de Algoritmos",
          url: "https://www.youtube.com/watch?v=_HBTCUNPxOg&list=PLncEdvQ20-mgGanwuFczm-4IwIdIcIiha",
          prerequisites: ["Algoritmos em Grafos"],
          books: [
            {
              name: "Livros sobre Análise de Algoritmos",
              url: "extras/bibliography/16_analysis_of_algorithms.md",
            },
          ],
        },
        {
          id: 17,
          name: "Métodos Numéricos I",
          url: "https://www.youtube.com/watch?v=a6nNQ6qKgiY&list=PLI9WiBCz67cPTTRER4CrsN0wpRN-NmjGA",
          prerequisites: [
            "Introdução à Ciência da Computação com Python I",
            "Cálculo I",
          ],
          books: [
            {
              name: "Livros sobre Métodos Numéricos",
              url: "extras/bibliography/17_numeric_methods.md",
            },
          ],
        },
        {
          id: 18,
          name: "Banco de Dados",
          url: "https://www.youtube.com/watch?v=pmAxIs5U1KI&list=PLxI8Can9yAHeHQr2McJ01e-ANyh3K0Lfq",
          prerequisites: [],
          books: [
            {
              name: "Livros sobre Bancos de Dados",
              url: "extras/bibliography/18_database.md",
            },
          ],
        },
        {
          id: 19,
          name: "Arquitetura de Computadores II",
          url: "https://www.youtube.com/playlist?list=PLEUHFTHcrJmsqKX-GDD-hBvkF8h2_BfKJ",
          prerequisites: [
            "Introdução à Ciência da Computação com Python II",
            "Arquitetura de Computadores I",
          ],
          books: [
            {
              name: "Livros sobre Arquitetura de Computadores",
              url: "extras/bibliography/19_computer_architecture_II.md",
            },
          ],
        },
        {
          id: 20,
          name: "Programação Lógica",
          url: "https://youtube.com/playlist?list=PLZ-Bk6jzsb-OScKa7vhpcQXoU2uxYGaFx",
          prerequisites: [],
          books: [
            {
              name: "Livros sobre Programação Lógica",
              url: "extras/bibliography/20_logical_programming.md",
            },
          ],
        },
      ],
    },
    {
      // Etapa 5
      id: 5,
      number: 5,
      subjects: [
        {
          id: 21,
          name: "Redes de Computadores",
          url: "https://www.youtube.com/playlist?list=PLvHXLbw-JSPfKp65psX5C9tyNLHHC4uoR",
          prerequisites: [],
          books: [
            {
              name: "Livros sobre Redes de Computadores",
              url: "extras/bibliography/21_computer_network.md",
            },
          ],
        },
        {
          id: 22,
          name: "Introdução à Engenharia de Software",
          url: "https://www.youtube.com/watch?v=h_hEI1Kfm2U&list=PLhBaeEzs3d7lsn_Mq2n3R4_api16Wkp1Q",
          prerequisites: ["Introdução à Ciência da Computação com Python II"],
          books: [
            {
              name: "Livros sobre Engenharia de Software",
              url: "extras/bibliography/22_software_engineering.md",
            },
          ],
        },
        {
          id: 23,
          name: "Sistemas Operacionais",
          url: "https://www.youtube.com/watch?v=EGn8fOf7zE0&list=PLSmh8AKk_aUn9HxFs5FnjQupdQnV56MXV",
          prerequisites: ["Arquitetura de Computadores II"],
          books: [
            {
              name: "Livros sobre Sistemas Operacionais",
              url: "extras/bibliography/23_operating_system.md",
            },
          ],
        },
        {
          id: 24,
          name: "Programação Matemática",
          url: "https://www.youtube.com/watch?v=8rrgnFCL9LM&list=PL2peXovwG2kuqXC6sECjFSiG-MT1yXMQ-",
          prerequisites: ["Álgebra Linear I"],
          books: [
            {
              name: "Livros sobre Programação Matemática/Pesquisa Operacional",
              url: "extras/bibliography/24_math_optimization.md",
            },
          ],
        },
        {
          id: 25,
          name: "Fundamentos de Computação Gráfica",
          url: "https://www.youtube.com/watch?v=AVSAesOiKYY&list=PLE51fUFkeIwLXwe4rvG4EMgw7zgjP-tDx",
          prerequisites: ["Geometria Analítica"],
          books: [
            {
              name: "Livros sobre Computação Gráfica",
              url: "extras/bibliography/25_fundamentals_computer_graphics.md",
            },
          ],
        },
      ],
    },
    {
      // Etapa 6
      id: 6,
      number: 6,
      subjects: [
        {
          id: 26,
          name: "Linguagens Formais e Autômatos",
          url: "https://www.youtube.com/watch?v=4zMwOozUt9U&list=PLncEdvQ20-mhD_qMeLHtLnA3XDT1Fr_k4",
          prerequisites: ["Matemática Discreta"],
          books: [
            {
              name: "Livros sobre Linguagens Formais e Autômatos",
              url: "extras/bibliography/26_automata_theory.md",
            },
          ],
        },
        {
          id: 27,
          name: "Inteligência Artificial",
          url: "https://www.youtube.com/watch?v=-T3zDFxngf4&list=PLeejGOroKw_txh7j7S3etF5eudI2WvMx0",
          prerequisites: ["Estruturas de Dados", "Probabilidade e Estatística"],
          books: [
            {
              name: "Livros sobre Inteligência Artificial",
              url: "extras/bibliography/27_artificial_intelligence.md",
            },
          ],
        },
        {
          id: 28,
          name: "Sistemas Distribuídos",
          url: "https://www.youtube.com/watch?v=TEEy5f46h_Q&list=PLP0bYj2MTFcuXa4-EbBKhvehr-rkxpeR8",
          prerequisites: ["Redes de Computadores"],
          books: [
            {
              name: "Livros sobre Sistemas Distríbuidos",
              url: "extras/bibliography/28_distributed_computing.md",
            },
          ],
        },
        {
          id: 29,
          name: "Teoria dos Grafos",
          url: "https://www.youtube.com/watch?v=kfHqZLYHfHU&list=PLndfcZyvAqbr2MLCOLEvBNX6FgD8UNWfX",
          prerequisites: ["Matemática Discreta"],
          books: [
            {
              name: "Livros sobre Teoria dos Grafos",
              url: "extras/bibliography/29_graphs.md",
            },
          ],
        },
        {
          id: 30,
          name: "Cálculo III",
          url: "https://www.youtube.com/watch?v=8mBTfk7s63s&list=PLAudUnJeNg4ugGUJo52dtgFZ_tCm1Ds5W",
          prerequisites: ["Cálculo II"],
          books: [
            {
              name: "Livros sobre Cálculo III",
              url: "extras/bibliography/30_multivariable_calculus.md",
            },
          ],
        },
      ],
    },
    {
      // Etapa 7
      id: 7,
      number: 7,
      subjects: [
        {
          id: 31,
          name: "Teoria da Computação",
          url: "https://www.youtube.com/watch?v=dWRxL30aoes&list=PLYLYA7XrlskNgCeSpJf9PQHHb8Z4WpRm4",
          prerequisites: ["Linguagens Formais e Autômatos"],
          books: [
            {
              name: "Livros sobre Teoria da Computação",
              url: "extras/bibliography/31_theory_of_computation.md",
            },
          ],
        },
        {
          id: 32,
          name: "Deep Learning",
          url: "https://www.youtube.com/watch?v=0VD_2t6EdS4&list=PL9At2PVRU0ZqVArhU9QMyI3jSe113_m2-",
          prerequisites: ["Inteligência Artificial"],
          books: [
            {
              name: "Livros sobre Deep Learning",
              url: "extras/bibliography/32_deep_learning.md",
            },
          ],
        },
        {
          id: 33,
          name: "Compiladores",
          url: "https://youtube.com/playlist?list=PLX6Nyaq0ebfhI396WlWN6WlBm-tp7vDtV",
          prerequisites: ["Estruturas de Dados", "Teoria dos Grafos"],
          books: [
            {
              name: "Livros sobre Compiladores",
              url: "extras/bibliography/33_compilers.md",
            },
          ],
        },
        {
          id: 34,
          name: "Computação Quântica",
          url: "https://youtube.com/playlist?list=PLUFcRbu9t-v4peHdmDy4rtG3EnbZNS86R",
          prerequisites: ["Cálculo III", "Arquitetura de Computadores II"],
          books: [
            {
              name: "Livros sobre Computação Quântica",
              url: "extras/bibliography/34_quantum_copmputing.md",
            },
          ],
        },
        {
          id: 35,
          name: "Metodologia da Pesquisa",
          url: "https://youtube.com/playlist?list=PLclUQno6PMpQO0-XrDwWsPzRzEvjwp1__",
          prerequisites: [],
          books: [
            {
              name: "Livros sobre Metodologia de Pesquisa",
              url: "extras/bibliography/35_methodology.md",
            },
          ],
        },
      ],
    },
  ],
};

export default curriculumCC;
