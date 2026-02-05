import type Course from "@/interfaces/course";

export const courseMath: Course = {
  id: 2,
  slug: "matematica",
  name: "Matemática",
  steps: [
    {
      // Etapa 1
      id: 8,
      number: 1,
      subjects: [
        {
          id: 36,
          name: "Ingredientes básicos para o Cálculo",
          url: "https://www.youtube.com/playlist?list=PL2xox8ncv81W698VTHptmp7ZNvcKqlyHO",
          prerequisites: [],
          books: [
            {
              name: "Livros sobre Ingredientes básicos para o Cálculo",
              url: "extras/bibliography/01_calculo_basico.md",
            },
          ],
        },
        {
          id: 37,
          name: "Teoria dos Conjuntos",
          url: "https://www.youtube.com/playlist?list=PL2xox8ncv81X2Cp3FClIjRE9sG_Vq6sZ_",
          prerequisites: [],
          books: [
            {
              name: "Livros sobre Teoria dos Conjuntos",
              url: "extras/bibliography/02_teoria_conjuntos.md",
            },
          ],
        },
        {
          id: 38,
          name: "Lógica e Matemática Discreta",
          url: "https://www.youtube.com/playlist?list=PLxI8Can9yAHf6oB0nf8FwLhqSOcBLqOxH",
          prerequisites: [],
          books: [
            {
              name: "Livros sobre Lógica e Matemática Discreta",
              url: "extras/bibliography/03_logica_discreta.md",
            },
          ],
        },
        {
          id: 39,
          name: "Geometria Analítica",
          url: "https://www.youtube.com/playlist?list=PLxI8Can9yAHcSZv2BBUJAfGsXx0D0hn-2",
          prerequisites: [],
          books: [
            {
              name: "Livros sobre Geometria Analítica",
              url: "extras/bibliography/04_geometria_analitica.md",
            },
          ],
        },
        {
          id: 40,
          name: "Algoritmos e Programação em Python",
          url: "https://www.youtube.com/playlist?list=PLvE-ZAFRgX8hnECDn1v9HNTI71veL3oW0",
          prerequisites: [],
          books: [
            {
              name: "Livros sobre Algoritmos e Programação em Python",
              url: "extras/bibliography/05_algoritmos_python.md",
            },
          ],
        },
      ],
    },
    {
      // Etapa 2
      id: 9,
      number: 2,
      subjects: [
        {
          id: 41,
          name: "Cálculo I",
          url: "https://www.youtube.com/playlist?list=PL2D9B691A704C6F7B",
          prerequisites: [],
          books: [
            {
              name: "Livros sobre Cálculo I",
              url: "extras/bibliography/06_calculo_i.md",
            },
          ],
        },
        {
          id: 42,
          name: "Projeto e Análise de Algoritmos",
          url: "https://www.youtube.com/playlist?list=PLxI8Can9yAHdNN5fpKWRF8bbLG-2P-0LW",
          prerequisites: ["Programação (Python)"],
          books: [
            {
              name: "Livros sobre Projeto e Análise de Algoritmos",
              url: "extras/bibliography/07_analise_algoritmos.md",
            },
          ],
        },
        {
          id: 43,
          name: "Álgebra Linear",
          url: "https://www.youtube.com/playlist?list=PLxI8Can9yAHdUtWDKtTA9AmuICNyX9EIr",
          prerequisites: [],
          books: [
            {
              name: "Livros sobre Álgebra Linear",
              url: "extras/bibliography/08_algebra_linear.md",
            },
          ],
        },
        {
          id: 44,
          name: "Álgebra Linear (avançada)",
          url: "https://www.youtube.com/playlist?list=PL2xox8ncv81WXIutzWJDQ7E78riZqJClA",
          prerequisites: [],
          books: [
            {
              name: "Livros sobre Álgebra Linear (avançada)",
              url: "extras/bibliography/09_algebra_linear_avancada.md",
            },
          ],
        },
        {
          id: 45,
          name: "Teoria dos Números",
          url: "https://www.youtube.com/playlist?list=PLxI8Can9yAHcfxDjfTmU-t7XC1w2GVwc_",
          prerequisites: [],
          books: [
            {
              name: "Livros sobre Teoria dos Números",
              url: "extras/bibliography/10_teoria_numeros.md",
            },
          ],
        },
      ],
    },
    {
      // Etapa 3
      id: 10,
      number: 3,
      subjects: [
        {
          id: 46,
          name: "Cálculo II",
          url: "https://www.youtube.com/playlist?list=PLxI8Can9yAHeZfF4HwiVmv4D6n3acKLER",
          prerequisites: ["Cálculo I"],
          books: [
            {
              name: "Livros sobre Cálculo II",
              url: "extras/bibliography/11_calculo_ii.md",
            },
          ],
        },
        {
          id: 47,
          name: "Estruturas Algébricas",
          url: "https://www.youtube.com/playlist?list=PL6eyvTm7LSBsdkBBKzEDcyYbdujN_6TmL",
          prerequisites: ["Teoria dos Números"],
          books: [
            {
              name: "Livros sobre Estruturas Algébricas",
              url: "extras/bibliography/12_estruturas_algebraicas.md",
            },
          ],
        },
        {
          id: 48,
          name: "Equações Diferenciais Ordinárias",
          url: "https://www.youtube.com/playlist?list=PLo4jXE-LdDTR9q44hqm2w3NWtvyP_ZoiP",
          prerequisites: [],
          books: [
            {
              name: "Livros sobre Equações Diferenciais Ordinárias",
              url: "extras/bibliography/13_equacoes_diferenciais.md",
            },
          ],
        },
        {
          id: 49,
          name: "Física Geral I",
          url: "https://www.youtube.com/playlist?list=PL7581C21F8ADD6C8E",
          prerequisites: [],
          books: [
            {
              name: "Livros sobre Física Geral I",
              url: "extras/bibliography/14_fisica_geral_i.md",
            },
          ],
        },
        {
          id: 50,
          name: "História da Matemática",
          url: "https://www.youtube.com/playlist?list=PLxI8Can9yAHdOIYVPQPS6oUPBk8mb1CVU",
          prerequisites: [],
          books: [
            {
              name: "Livros sobre História da Matemática",
              url: "extras/bibliography/15_historia_matematica.md",
            },
          ],
        },
      ],
    },
    {
      // Etapa 4
      id: 11,
      number: 4,
      subjects: [
        {
          id: 51,
          name: "Cálculo III",
          url: "https://www.youtube.com/playlist?list=PLFBA21F349930F92F",
          prerequisites: ["Cálculo II"],
          books: [
            {
              name: "Livros sobre Cálculo III",
              url: "extras/bibliography/16_calculo_iii.md",
            },
          ],
        },
        {
          id: 52,
          name: "Física Geral II",
          url: "https://www.youtube.com/playlist?list=PL516F59E9AE8F5BF7",
          prerequisites: ["Física Geral I"],
          books: [
            {
              name: "Livros sobre Física Geral II",
              url: "extras/bibliography/17_fisica_geral_ii.md",
            },
          ],
        },
        {
          id: 53,
          name: "Estatística e Probabilidade",
          url: "https://www.youtube.com/playlist?list=PLxI8Can9yAHeeWqe3m9HZFiBhT33Mfxew",
          prerequisites: [],
          books: [
            {
              name: "Livros sobre Estatística e Probabilidade",
              url: "extras/bibliography/18_estatistica_probabilidade.md",
            },
          ],
        },
        {
          id: 54,
          name: "Programação Linear",
          url: "https://youtube.com/playlist?list=PLRJ_PBuYGr64QKVnwx3kx0qLeG5WQY_Hl&si=2SlZOlDfYH70f0ak",
          prerequisites: ["Projeto e Análise de Algoritmos"],
          books: [
            {
              name: "Livros sobre Programação Linear",
              url: "extras/bibliography/19_programacao_linear.md",
            },
          ],
        },
        {
          id: 55,
          name: "Análise na Reta",
          url: "https://www.youtube.com/playlist?list=PL2xox8ncv81UTkjNN2WQM8knGQJpu1j_z",
          prerequisites: [],
          books: [
            {
              name: "Livros sobre Análise na Reta",
              url: "extras/bibliography/20_analise_reta.md",
            },
          ],
        },
      ],
    },
    {
      // Etapa 5
      id: 12,
      number: 5,
      subjects: [
        {
          id: 56,
          name: "Cálculo IV (Métodos Matemáticos)",
          url: "https://www.youtube.com/playlist?list=PLxI8Can9yAHeOiMYCBlkyCALloROQ58OY",
          prerequisites: ["Cálculo III"],
          books: [
            {
              name: "Livros sobre Cálculo IV (Métodos Matemáticos)",
              url: "extras/bibliography/21_calculo_iv.md",
            },
          ],
        },
        {
          id: 57,
          name: "Introdução a Topologia Geral",
          url: "https://www.youtube.com/playlist?list=PLhueTEPO9C1KEX8jTphPeb9kEF9it4b5x",
          prerequisites: [],
          books: [
            {
              name: "Livros sobre Introdução a Topologia Geral",
              url: "extras/bibliography/22_topologia_geral.md",
            },
          ],
        },
        {
          id: 58,
          name: "Cálculo com variável complexa",
          url: "https://www.youtube.com/playlist?list=PLpizEtrJatZEUjIgADKdbE6_jGhcXFxht",
          prerequisites: ["Cálculo IV"],
          books: [
            {
              name: "Livros sobre Cálculo com variável complexa",
              url: "extras/bibliography/23_calculo_variavel_complexa.md",
            },
          ],
        },
        {
          id: 59,
          name: "Teoria dos Grafos",
          url: "https://www.youtube.com/playlist?list=PLndfcZyvAqbr2MLCOLEvBNX6FgD8UNWfX",
          prerequisites: [],
          books: [
            {
              name: "Livros sobre Teoria dos Grafos",
              url: "extras/bibliography/24_teoria_grafos.md",
            },
          ],
        },
        {
          id: 60,
          name: "Física Geral III",
          url: "https://www.youtube.com/playlist?list=PLxI8Can9yAHdG8tw2QofrU02IuAEVyGlL",
          prerequisites: ["Física Geral II"],
          books: [
            {
              name: "Livros sobre Física Geral III",
              url: "extras/bibliography/25_fisica_geral_iii.md",
            },
          ],
        },
      ],
    },
    {
      // Etapa 6
      id: 13,
      number: 6,
      subjects: [
        {
          id: 61,
          name: "Alfabetização em anéis",
          url: "https://www.youtube.com/playlist?list=PL2xox8ncv81XSiyT7czJX8q7I7kNmc8Bk",
          prerequisites: ["Estruturas Algébricas"],
          books: [
            {
              name: "Livros sobre Alfabetização em anéis",
              url: "extras/bibliography/26_aneis.md",
            },
          ],
        },
        {
          id: 62,
          name: "Física Moderna",
          url: "https://www.youtube.com/playlist?list=PLW5Hta-B_II5vB4Vn9wVWaJVHTo4XxB_i",
          prerequisites: ["Física Geral III"],
          books: [
            {
              name: "Livros sobre Física Moderna",
              url: "extras/bibliography/27_fisica_moderna.md",
            },
          ],
        },
        {
          id: 63,
          name: "Teoria de Corpos",
          url: "https://www.youtube.com/playlist?list=PL2xox8ncv81W0HbBtma7QQMeyVllJMk0m",
          prerequisites: ["Estruturas Algébricas"],
          books: [
            {
              name: "Livros sobre Teoria de Corpos",
              url: "extras/bibliography/28_teoria_corpos.md",
            },
          ],
        },
        {
          id: 64,
          name: "Análise Complexa",
          url: "https://www.youtube.com/playlist?list=PLo4jXE-LdDTRQ07QOEFl0x6mvyTl2hlRn",
          prerequisites: [],
          books: [
            {
              name: "Livros sobre Análise Complexa",
              url: "extras/bibliography/29_analise_complexa.md",
            },
          ],
        },
        {
          id: 65,
          name: "Equações Diferenciais Parciais",
          url: "https://www.youtube.com/playlist?list=PLpB72X90N5xST4NmvjQicgfRgpt-9rgw-",
          prerequisites: ["Cálculo IV", "Análise Complexa"],
          books: [
            {
              name: "Livros sobre Equações Diferenciais Parciais",
              url: "extras/bibliography/30_equacoes_diferenciais_parciais.md",
            },
          ],
        },
      ],
    },
  ],
};

export default courseMath;
