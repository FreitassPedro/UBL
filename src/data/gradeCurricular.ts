export interface Lesson {
  id: string;
  name: string;
  type: "video" | "text" | "exercise";
  duration?: number; // Duração em segundos, opcional
  content?: string; // Video, Link, Livro - opcional
}

export interface Cadeira {
  id: number;
  name: string;
  lessons: Lesson[];
  prerequisites: string[];
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
          lessons: [
            {
              "id": "1lsU6RoU9Ko",
              "name": "[CIRCUITOS DIGITAIS] Aula 01 - Introdução aos Circuitos Digitais",
              "type": "video",
              "content": "1lsU6RoU9Ko"
            },
            {
              "id": "RuXmtYdmQKY",
              "name": "[CIRCUITOS DIGITAIS] Aula 02 - Sistemas de Numeração (Parte 1)",
              "type": "video",
              "content": "RuXmtYdmQKY"
            },
            {
              "id": "MhaGPACGIEs",
              "name": "[CIRCUITOS DIGITAIS] Aula 03 - Sistemas de Numeração (Parte 2)",
              "type": "video",
              "content": "MhaGPACGIEs"
            },
            {
              "id": "ZQkNfdwaG2c",
              "name": "[CIRCUITOS DIGITAIS] Aula 04 - Sistemas de Numeração - Exercícios",
              "type": "video",
              "content": "ZQkNfdwaG2c"
            },
            {
              "id": "ZQkNfdwaG2c",
              "name": "[CIRCUITOS DIGITAIS] Aula 05 - Códigos Binários",
              "type": "video",
              "content": "ZQkNfdwaG2c"
            },
            {
              "id": "gBsNWWscIcg",
              "name": "[[CIRCUITOS DIGITAIS] Aula 06 - Aritmética Binária",
              "type": "video",
              "content": "gBsNWWscIcg"
            },
            {
              "id": "PceEtFggO_Q",
              "name": "[CIRCUITOS DIGITAIS] Aula 07 - Representação de Números Binários Inteiros com Sinal",
              "type": "video",
              "content": "PceEtFggO_Q"
            },
            {
              "id": "i48FGijMVO0",
              "name": "[CIRCUITOS DIGITAIS] Aula 08 - Aritmética de Números BCD",
              "type": "video",
              "content": "i48FGijMVO0"
            },
            {
              "id": "jzR0kYsay2U",
              "name": "[CIRCUITOS DIGITAIS] Aula 09 - Ferramentas de Descrição de Circuitos Digitais",
              "type": "video",
              "content": "jzR0kYsay2U"
            },
            {
              "id": "4b58LvY6NI",
              "name": "[CIRCUITOS DIGITAIS] Aula 10 - Funções e Portas Lógicas",
              "type": "video",
              "content": "4b58LvY6NI"
            },
            {
              "id": "Px3W4QHfrHc",
              "name": "[CIRCUITOS DIGITAIS] Aula 11 - Propriedades da Álgebra Booleana",
              "type": "video",
              "content": "Px3W4QHfrHc"
            },
            {
              "id": "XoWag-f1UTY",
              "name": "[CIRCUITOS DIGITAIS] Aula 12 - Análise de Expressões Lógicas",
              "type": "video",
              "content": "XoWag-f1UTY"
            },
            {
              "id": "u7FJAOnWS08",
              "name": "[CIRCUITOS DIGITAIS] Aula 13 - Análise de Circuitos Combinacionais",
              "type": "video",
              "content": "u7FJAOnWS08"
            },
            {
              "id": "xzCpDBYKCTA",
              "name": "[CIRCUITOS DIGITAIS] Aula 14 - Elaboração de Diagrama de Circuito Lógico",
              "type": "video",
              "content": "xzCpDBYKCTA"
            },
            {
              "id": "32ritDV6XxU",
              "name": "[CIRCUITOS DIGITAIS] Aula 15 - Utilização do Logisim",
              "type": "video",
              "content": "32ritDV6XxU"
            },
            {
              "id": "Q2s6ZFX3de8",
              "name": "[CIRCUITOS DIGITAIS] Aula 16 - Formas Canônicas para Expressões Lógicas",
              "type": "video",
              "content": "Q2s6ZFX3de8"
            },
            {
              "id": "lGIVvVAiR6U",
              "name": "[CIRCUITOS DIGITAIS] Aula 17 - Síntese de Circuitos Combinacionais",
              "type": "video",
              "content": "lGIVvVAiR6U"
            },
            {
              "id": "mOBy3LJV5sM",
              "name": "[CIRCUITOS DIGITAIS] Aula 18 - Simplificação Algébrica",
              "type": "video",
              "content": "mOBy3LJV5sM"
            },
            {
              "id": "8_Ip6PzYqrs",
              "name": "[CIRCUITOS DIGITAIS] Aula 19 - Mapas de Karnaugh (Parte 1)",
              "type": "video",
              "content": "8_Ip6PzYqrs"
            },
            {
              "id": "AVb_9sXqfSk",
              "name": "[CIRCUITOS DIGITAIS] Aula 20 - Mapas de Karnaugh (Parte 2)",
              "type": "video",
              "content": "AVb_9sXqfSk"
            },
            {
              "id": "rv2r_hSLRN0",
              "name": "[CIRCUITOS DIGITAIS] Aula 21 - Mapas de Karnaugh (Parte 3)",
              "type": "video",
              "content": "rv2r_hSLRN0"
            },
            {
              "id": "qNXLHeHurpk",
              "name": "[CIRCUITOS DIGITAIS] Aula 22 - Mapas de Karnaugh (Parte 4)",
              "type": "video",
              "content": "qNXLHeHurpk"
            },
            {
              "id": "ttoNkYJ38zQ",
              "name": "[CIRCUITOS DIGITAIS] Aula 23 - Exemplo de Projeto de Circuito Combinacional",
              "type": "video",
              "content": "ttoNkYJ38zQ"
            },
            {
              "id": "qXEx7nFvMh4",
              "name": "[CIRCUITOS DIGITAIS] Aula 24 - Universalidade das Portas NAND e NOR",
              "type": "video",
              "content": "qXEx7nFvMh4"
            },
            {
              "id": "r_DpiGT0YmA",
              "name": "[CIRCUITOS DIGITAIS] Aula 25 - Circuitos Somadores (Parte 1)",
              "type": "video",
              "content": "r_DpiGT0YmA"
            },
            {
              "id": "rhZ0QmX6Gf0",
              "name": "[CIRCUITOS DIGITAIS] Aula 26 - Circuitos Somadores (Parte 2)",
              "type": "video",
              "content": "rhZ0QmX6Gf0"
            },
            {
              "id": "6sBkmAlJlvs",
              "name": "[CIRCUITOS DIGITAIS] Aula 27 - Somadores no Logisim",
              "type": "video",
              "content": "6sBkmAlJlvs"
            },
            {
              "id": "TQfRSFsRDAU",
              "name": "[CIRCUITOS DIGITAIS] Aula 28 - Circuitos Subtradores",
              "type": "video",
              "content": "TQfRSFsRDAU"
            },
            {
              "id": "iiTMiSu_xbU",
              "name": "[CIRCUITOS DIGITAIS] Aula 29 - Circuito Somador/Subtrador Compartilhado no Logisim",
              "type": "video",
              "content": "iiTMiSu_xbU"
            },
            {
              "id": "XAGm1k_H49w",
              "name": "[CIRCUITOS DIGITAIS] Aula 30 - Incrementadores e Decrementadores",
              "type": "video",
              "content": "XAGm1k_H49w"
            },
            {
              "id": "fLZRFkFWQ4c",
              "name": "[CIRCUITOS DIGITAIS] Aula 31 - Somadores BCD",
              "type": "video",
              "content": "fLZRFkFWQ4c"
            },
            {
              "id": "6mf8qFEBxEU",
              "name": "[CIRCUITOS DIGITAIS] Aula 32 - Multiplicadores em Array",
              "type": "video",
              "content": "6mf8qFEBxEU"
            },
            {
              "id": "tVgocuuisjA",
              "name": "[CIRCUITOS DIGITAIS] Aula 33 - Comparadores de Magnitude",
              "type": "video",
              "content": "tVgocuuisjA"
            },
            {
              "id": "l56a1Rp-LNs",
              "name": "[CIRCUITOS DIGITAIS] Aula 34 - Somadores Carry Look-a-Head",
              "type": "video",
              "content": "l56a1Rp-LNs"
            },
            {
              "id": "z0qUmHXd8ZA",
              "name": "[CIRCUITOS DIGITAIS] Aula 35 - Geradores e Verificadores de Paridade",
              "type": "video",
              "content": "z0qUmHXd8ZA"
            },
            {
              "id": "h0vnz4ebT08",
              "name": "[CIRCUITOS DIGITAIS] Aula 36 - Conversores de Código Binário (Parte 1)",
              "type": "video",
              "content": "h0vnz4ebT08"
            },
            {
              "id": "RCbCm9TyZ9w",
              "name": "[CIRCUITOS DIGITAIS] Aula 37 - Conversores de Código Binário (Parte 2)",
              "type": "video",
              "content": "RCbCm9TyZ9w"
            },
            {
              "id": "NJwesHY5nPQ",
              "name": "[CIRCUITOS DIGITAIS] Aula 38 - Decodificadores para Display de 7 Segmentos",
              "type": "video",
              "content": "NJwesHY5nPQ"
            },
            {
              "id": "C8Y8ST2hnqA",
              "name": "[CIRCUITOS DIGITAIS] Aula 39 - Decodificadores",
              "type": "video",
              "content": "C8Y8ST2hnqA"
            },
            {
              "id": "y-Ni9BIpS8c",
              "name": "[CIRCUITOS DIGITAIS] Aula 40 - Projeto Combinacional Utilizando Decodificadores",
              "type": "video",
              "content": "y-Ni9BIpS8c"
            },
            {
              "id": "_2RRcq8YIKk",
              "name": "[CIRCUITOS DIGITAIS] Aula 41 - Codificadores",
              "type": "video",
              "content": "_2RRcq8YIKk"
            },
            {
              "id": "qfqoSlvIkiA",
              "name": "[CIRCUITOS DIGITAIS] Aula 42 - Codificadores de Prioridade",
              "type": "video",
              "content": "qfqoSlvIkiA"
            },
            {
              "id": "e70pe-Cdtfc",
              "name": "[CIRCUITOS DIGITAIS] Aula 43 - Multiplexadores",
              "type": "video",
              "content": "e70pe-Cdtfc"
            },
            {
              "id": "X8lHW9yfr30",
              "name": "[CIRCUITOS DIGITAIS] Aula 44 - Associação de Multiplexadores",
              "type": "video",
              "content": "X8lHW9yfr30"
            },
            {
              "id": "_uBk4xDi-8c",
              "name": "[CIRCUITOS DIGITAIS] Aula 45 - Implementação de Funções Combinacionais com Multiplexadores (Parte 1)",
              "type": "video",
              "content": "_uBk4xDi-8c"
            },
            {
              "id": "wypiacFZFww",
              "name": "[CIRCUITOS DIGITAIS] Aula 46 - Implementação de Funções Combinacionais com Multiplexadores (Parte 2)",
              "type": "video",
              "content": "wypiacFZFww"
            },
            {
              "id": "Kjtvyf6e-9U",
              "name": "[CIRCUITOS DIGITAIS] Aula 47 - Teorema da Expansão de Shannon",
              "type": "video",
              "content": "Kjtvyf6e-9U"
            },
            {
              "id": "Jmw4OiI0O3A",
              "name": "[CIRCUITOS DIGITAIS] Aula 48 - Demultiplexadores",
              "type": "video",
              "content": "Jmw4OiI0O3A"
            },
            {
              "id": "FWk2a7oTpxc",
              "name": "[CIRCUITOS DIGITAIS] Aula 49 - Associação de Demultiplexadores",
              "type": "video",
              "content": "FWk2a7oTpxc"
            },
            {
              "id": "EBrHRwnVMsU",
              "name": "[CIRCUITOS DIGITAIS] Aula 50 - Deslocadores",
              "type": "video",
              "content": "EBrHRwnVMsU"
            },
            {
              "id": "SemyzwoLxDo",
              "name": "[CIRCUITOS DIGITAIS] Aula 51 - Unidade Lógico-Aritmética",
              "type": "video",
              "content": "SemyzwoLxDo"
            },
            {
              "id": "3uXHong2PvQ",
              "name": "[CIRCUITOS DIGITAIS] Aula 52 - Aplicações de Circuitos Combinacionais #1",
              "type": "video",
              "content": "3uXHong2PvQ"
            },
            {
              "id": "mcAnKpiPO-c",
              "name": "[CIRCUITOS DIGITAIS] Aula 53 - Aplicações de Circuitos Combinacionais #2",
              "type": "video",
              "content": "mcAnKpiPO-c"
            },
            {
              "id": "Q0hxfNu0EGw",
              "name": "[CIRCUITOS DIGITAIS] Aula 54 - Fundamentos de Circuitos Sequenciais",
              "type": "video",
              "content": "Q0hxfNu0EGw"
            },
            {
              "id": "rkfQKM_jQK8",
              "name": "[CIRCUITOS DIGITAIS] Aula 55 - Máquinas de Estados Finitos",
              "type": "video",
              "content": "rkfQKM_jQK8"
            },
            {
              "id": "6sVrWGekNX4",
              "name": "[CIRCUITOS DIGITAIS] Aula 56 - Modelos para Máquinas de Estados",
              "type": "video",
              "content": "6sVrWGekNX4"
            },
            {
              "id": "qFXXLbwvWsg",
              "name": "[CIRCUITOS DIGITAIS] Aula 57 - Tabela de Transição de Estados",
              "type": "video",
              "content": "qFXXLbwvWsg"
            },
            {
              "id": "Q0QNvjRt_pk",
              "name": "[CIRCUITOS DIGITAIS] Aula 58 - Diagrama de Transição de Estados",
              "type": "video",
              "content": "Q0QNvjRt_pk"
            },
            {
              "id": "YHEvh3PoPcE",
              "name": "[CIRCUITOS DIGITAIS] Aula 59 - Latch SR",
              "type": "video",
              "content": "YHEvh3PoPcE"
            },
            {
              "id": "MaelrWb21QI",
              "name": "[CIRCUITOS DIGITAIS] Aula 60 - Latches SR Controlado",
              "type": "video",
              "content": "MaelrWb21QI"
            },
            {
              "id": "XZ5I9mJdg0w",
              "name": "[CIRCUITOS DIGITAIS] Aula 61 - Latch D (Transparente)",
              "type": "video",
              "content": "XZ5I9mJdg0w"
            },
            {
              "id": "XQe4qElLDWI",
              "name": "[CIRCUITOS DIGITAIS] Aula 62 - Latches com Portas NAND",
              "type": "video",
              "content": "XQe4qElLDWI"
            },
            {
              "id": "wYTRa2r3fjM",
              "name": "[CIRCUITOS DIGITAIS] Aula 63 - Latches no Logisim",
              "type": "video",
              "content": "wYTRa2r3fjM"
            },
            {
              "id": "E12RmfvaIf8",
              "name": "[CIRCUITOS DIGITAIS] Aula 64 - Flip-Flop D",
              "type": "video",
              "content": "E12RmfvaIf8"
            },
            {
              "id": "zQj0oDimU2I",
              "name": "[CIRCUITOS DIGITAIS] Aula 65 - Flip-Flop JK e Flip-Flop T",
              "type": "video",
              "content": "zQj0oDimU2I"
            },
            {
              "id": "2qOUSXgKUbc",
              "name": "[CIRCUITOS DIGITAIS] Aula 66 - Entradas Assíncronas em Flip-Flops",
              "type": "video",
              "content": "2qOUSXgKUbc"
            },
            {
              "id": "6fEfOZJTQcQ",
              "name": "[CIRCUITOS DIGITAIS] Aula 67 - Flip-Flops no Logisim",
              "type": "video",
              "content": "6fEfOZJTQcQ"
            },
            {
              "id": "f9L2vdplWgM",
              "name": "[CIRCUITOS DIGITAIS] Aula 68 - Análise de Circuitos Sequenciais (Exemplo 1)",
              "type": "video",
              "content": "f9L2vdplWgM"
            },
            {
              "id": "h_Mx1DL14yE",
              "name": "[CIRCUITOS DIGITAIS] Aula 69 - Análise de Circuitos Sequenciais (Exemplo 2)",
              "type": "video",
              "content": "h_Mx1DL14yE"
            },
            {
              "id": "4Mx_cYvoZKY",
              "name": "[CIRCUITOS DIGITAIS] Aula 70 - Análise de Circuitos Sequenciais (Exemplo 3)",
              "type": "video",
              "content": "4Mx_cYvoZKY"
            },
            {
              "id": "__57NZcf52A",
              "name": "[CIRCUITOS DIGITAIS] Aula 71 - Análise de Circuitos Sequenciais (Exemplo 4)",
              "type": "video",
              "content": "__57NZcf52A"
            },
            {
              "id": "3LXF2p2LSQU",
              "name": "[CIRCUITOS DIGITAIS] Aula 72 - Projeto de Circuitos Sequenciais (Exemplo 1)",
              "type": "video",
              "content": "3LXF2p2LSQU"
            },
            {
              "id": "EUvxMNTFN4s",
              "name": "[CIRCUITOS DIGITAIS] Aula 73 - Projeto de Circuitos Sequenciais (Exemplo 2)",
              "type": "video",
              "content": "EUvxMNTFN4s"
            },
            {
              "id": "7Y0oWahVWUw",
              "name": "[CIRCUITOS DIGITAIS] Aula 74 - Projeto de Circuitos Sequenciais (Exemplo 3)",
              "type": "video",
              "content": "7Y0oWahVWUw"
            },
            {
              "id": "zctwOD5i9mQ",
              "name": "[CIRCUITOS DIGITAIS] Aula 75 - Projeto de Circuitos Sequenciais (Exemplo 4)",
              "type": "video",
              "content": "zctwOD5i9mQ"
            },
            {
              "id": "QZQeMbeXnoQ",
              "name": "[CIRCUITOS DIGITAIS] Aula 76 - Projeto de Circuitos Sequenciais (Exemplo 5)",
              "type": "video",
              "content": "QZQeMbeXnoQ"
            },
            {
              "id": "Ez3nIadMiR8",
              "name": "[CIRCUITOS DIGITAIS] Aula 77 - Projeto de Circuitos Sequenciais (Exemplo 6)",
              "type": "video",
              "content": "Ez3nIadMiR8"
            },
            {
              "id": "BQC1pypMw1c",
              "name": "[CIRCUITOS DIGITAIS] Aula 78 - Projeto de Circuitos Sequenciais (Exemplo 7)",
              "type": "video",
              "content": "BQC1pypMw1c"
            },
            {
              "id": "eW3VQYW-sTw",
              "name": "[CIRCUITOS DIGITAIS] Aula 79 - Projeto de Circuitos Sequenciais (Exemplo 8)",
              "type": "video",
              "content": "eW3VQYW-sTw"
            },
            {
              "id": "WzW6nU7NUus",
              "name": "[CIRCUITOS DIGITAIS] Aula 80 - Projeto de Circuitos Sequenciais (Exemplo 9)",
              "type": "video",
              "content": "WzW6nU7NUus"
            },
            {
              "id": "ta-esYaoz4E",
              "name": "[CIRCUITOS DIGITAIS] Aula 81 - Projeto de Circuitos Sequenciais (Exemplo 10)",
              "type": "video",
              "content": "ta-esYaoz4E"
            },
            {
              "id": "5Ya0o-pGumA",
              "name": "[CIRCUITOS DIGITAIS] Aula 82 - Projeto de Circuitos Sequenciais (Exemplo 11)",
              "type": "video",
              "content": "5Ya0o-pGumA"
            },
            {
              "id": "seZk9pKNYaA",
              "name": "[CIRCUITOS DIGITAIS] Aula 83 - Projeto de Circuitos Sequenciais (Exemplo 12)",
              "type": "video",
              "content": "seZk9pKNYaA"
            },
            {
              "id": "29rFIM-izEc",
              "name": "[CIRCUITOS DIGITAIS] Aula 84 - Projeto de Circuitos Sequenciais (Exemplo 13)",
              "type": "video",
              "content": "29rFIM-izEc"
            },
            {
              "id": "aYaEqsyxRP0",
              "name": "[CIRCUITOS DIGITAIS] Aula 85 - Projeto de Circuitos Sequenciais (Projeto com Multiplexadores)",
              "type": "video",
              "content": "aYaEqsyxRP0"
            },
            {
              "id": "AfWMnhgDO4k",
              "name": "[CIRCUITOS DIGITAIS] Aula 86 - Projeto de Circuitos Sequenciais (Máquina Moore vs. Máquina Mealy)",
              "type": "video",
              "content": "AfWMnhgDO4k"
            },
            {
              "id": "AJj8DpeW_yY",
              "name": "[CIRCUITOS DIGITAIS] Aula 87 - Minimização de Máquinas de Estados",
              "type": "video",
              "content": "AJj8DpeW_yY"
            },
            {
              "id": "9PCN3yNe4JU",
              "name": "[CIRCUITOS DIGITAIS] Aula 88 - Tabela de Implicação",
              "type": "video",
              "content": "9PCN3yNe4JU"
            },
            {
              "id": "Z1hZhMn29WY",
              "name": "[CIRCUITOS DIGITAIS] Aula 89 - Particionamento Sucessivo",
              "type": "video",
              "content": "Z1hZhMn29WY"
            },
            {
              "id": "NXjf7GWlA6A",
              "name": "[CIRCUITOS DIGITAIS] Aula 90 - Relação de Máquinas Moore vs. Mealy",
              "type": "video",
              "content": "NXjf7GWlA6A"
            },
            {
              "id": "gpObH7mDB-I",
              "name": "[CIRCUITOS DIGITAIS] Aula 91 - Estado Inicial de uma Máquina de Estados",
              "type": "video",
              "content": "gpObH7mDB-I"
            },
            {
              "id": "Kib0DmQCLjQ",
              "name": "[CIRCUITOS DIGITAIS] Aula 92 - Condições de Temporização em Máquinas de Estados",
              "type": "video",
              "content": "Kib0DmQCLjQ"
            },
            {
              "id": "XYAXzeIpNXw",
              "name": "[CIRCUITOS DIGITAIS] Aula 93 - Codificação dos Estados",
              "type": "video",
              "content": "XYAXzeIpNXw"
            }
          ],
          prerequisites: [],
          books: [{ name: "Livros sobre Circuitos Digitais", url: "extras/bibliography/01_digital_circuits.md" }],
        },
        {
          id: 2,
          name: "Matemática Discreta",
          lessons: [{ id: "2", name: "Matemática Discreta", type: "video", content: "https://www.youtube.com/watch?v=KGoSTh1sgyM&list=PL6mfjjCaO1WrEJ0JKRyXO3QjaPkJaSvAS" }],
          prerequisites: [],
          books: [{ name: "Livros sobre Matemática Discreta", url: "extras/bibliography/02_discrete_mathematics.md" }],
        },
        {
          id: 3,
          name: "Linguagens de Programação",
          lessons: [{ id: "3", name: "Linguagens de Programação", type: "video", content: "https://www.youtube.com/watch?v=xfDdxqbkiSQ&list=PLnzT8EWpmbka4KukGR184tifzqcuq_ZDv" }],
          prerequisites: [],
          books: [{ name: "Livros sobre Linguagens de Programação", url: "extras/bibliography/03_programming_languages.md" }],
        },
        {
          id: 4,
          name: "Introdução à Ciência da Computação com Python I",
          lessons: [{ id: "4", name: "Introdução à Ciência da Computação com Python I", type: "video", content: "https://www.coursera.org/learn/ciencia-computacao-python-conceitos" }],
          prerequisites: [],
          books: [{ name: "Livros sobre Introdução a CC", url: "extras/bibliography/04_intro_python.md" }],
        },
        {
          id: 5,
          name: "Geometria Analítica",
          lessons: [{ id: "5", name: "Geometria Analítica", type: "video", content: "https://www.youtube.com/watch?v=ijkDjQT7UPM&list=PL82Svt6JAgOH3M6TCELx8oegTVCriUg3L" }],
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
          lessons: [{ id: "6", name: "Cálculo I", type: "video", content: "https://www.youtube.com/watch?v=WgHUHPlJETs&list=PLAudUnJeNg4tr-aiNyYCXE46L3qEZ2Nzx" }],
          prerequisites: ["Geometria Analítica"],
          books: [{ name: "Livros de Cálculo I", url: "extras/bibliography/06_intro_calculus.md" }],
        },
        {
          id: 7,
          name: "Álgebra Linear I",
          lessons: [{ id: "7", name: "Álgebra Linear I", type: "video", content: "https://www.youtube.com/playlist?list=PLIEzh1OveCVczEZAjhVIVd7Qs-X8ILgnI" }],
          prerequisites: ["Geometria Analítica"],
          books: [{ name: "Livros de Álgebra Linear", url: "extras/bibliography/07_intro_linear_algebra.md" }],
        },
        {
          id: 8,
          name: "Estruturas de Dados",
          lessons: [{ id: "8", name: "Estruturas de Dados", type: "video", content: "https://www.youtube.com/watch?v=0hT3EKGhbpI&list=PLndfcZyvAqbofQl2kLLdeWWjCcPlOPnrW" }],
          prerequisites: ["Matemática Discreta", "Introdução à Ciência da Computação com Python I"],
          books: [{ name: "Livros de Estruturas de Dados", url: "extras/bibliography/08_data_structure.md" }],
        },
        {
          id: 9,
          name: "Introdução à Ciência da Computação com Python II",
          lessons: [{ id: "9", name: "Introdução à Ciência da Computação com Python II", type: "video", content: "https://www.coursera.org/learn/ciencia-computacao-python-conceitos-2" }],
          prerequisites: ["Introdução à Ciência da Computação com Python I"],
          books: [{ name: "Livros de Introdução a Programação", url: "extras/bibliography/09_python.md" }],
        },
        {
          id: 10,
          name: "Laboratório de Programação Orientada a Objetos I",
          lessons: [{ id: "10", name: "Laboratório de Programação Orientada a Objetos I", type: "video", content: "https://pt.coursera.org/learn/lab-poo-parte-1" }],
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
          lessons: [{ id: "11", name: "Algoritmos em Grafos", type: "video", content: "https://www.youtube.com/watch?v=fjOiu6CD5pc&list=PLrPn-zKAOzUzKdPqFNF52g-i9p1f-vmsk" }],
          prerequisites: ["Estruturas de Dados"],
          books: [{ name: "Livros sobre Algoritmos em Grafos", url: "extras/bibliography/11_graph_algorithms.md" }],
        },
        {
          id: 12,
          name: "Arquitetura de Computadores I",
          lessons: [{ id: "12", name: "Arquitetura de Computadores I", type: "video", content: "https://www.youtube.com/playlist?list=PLEUHFTHcrJmswfeq7QEHskgkT6HER3gK6" }],
          prerequisites: ["Circuitos Digitais"],
          books: [{ name: "Livros sobre Arquitetura de Computadores I", url: "extras/bibliography/12_computer_architecture.md" }],
        },
        {
          id: 13,
          name: "Probabilidade e Estatística",
          lessons: [{ id: "13", name: "Probabilidade e Estatística", type: "video", content: "https://www.youtube.com/watch?v=snXf8YT7L3U&list=PLrOyM49ctTx8HWnxWRBtKrfcuf7ew_3nm" }],
          prerequisites: ["Cálculo I"],
          books: [{ name: "Livros sobre Probabilidade e Estatística", url: "extras/bibliography/13_statistics_probability.md" }],
        },
        {
          id: 14,
          name: "Cálculo II",
          lessons: [{ id: "14", name: "Cálculo II", type: "video", content: "https://www.youtube.com/watch?v=lQdzRBRL9Tw&list=PLAudUnJeNg4sd0TEJ9EG6hr-3d3jqrddN" }],
          prerequisites: ["Cálculo I"],
          books: [{ name: "Livros sobre Cálculo II", url: "extras/bibliography/14_advanced_calculus.md" }],
        },
        {
          id: 15,
          name: "Programação Funcional em Haskell",
          lessons: [{ id: "15", name: "Programação Funcional em Haskell", type: "video", content: "https://www.youtube.com/watch?v=eTisiy5FB7k&list=PLYItvall0TqJ25sVTLcMhxsE0Hci58mpQ&index=1" }],
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
          lessons: [{ id: "16", name: "Análise de Algoritmos", type: "video", content: "https://www.youtube.com/watch?v=_HBTCUNPxOg&list=PLncEdvQ20-mgGanwuFczm-4IwIdIcIiha" }],
          prerequisites: ["Algoritmos em Grafos"],
          books: [{ name: "Livros sobre Análise de Algoritmos", url: "extras/bibliography/16_analysis_of_algorithms.md" }],
        },
        {
          id: 17,
          name: "Métodos Numéricos I",
          lessons: [{ id: "17", name: "Métodos Numéricos I", type: "video", content: "https://www.youtube.com/watch?v=a6nNQ6qKgiY&list=PLI9WiBCz67cPTTRER4CrsN0wpRN-NmjGA" }],
          prerequisites: ["Introdução à Ciência da Computação com Python I", "Cálculo I"],
          books: [{ name: "Livros sobre Métodos Numéricos", url: "extras/bibliography/17_numeric_methods.md" }],
        },
        {
          id: 18,
          name: "Banco de Dados",
          lessons: [{ id: "18", name: "Banco de Dados", type: "video", content: "https://www.youtube.com/watch?v=pmAxIs5U1KI&list=PLxI8Can9yAHeHQr2McJ01e-ANyh3K0Lfq" }],
          prerequisites: [],
          books: [{ name: "Livros sobre Bancos de Dados", url: "extras/bibliography/18_database.md" }],
        },
        {
          id: 19,
          name: "Arquitetura de Computadores II",
          lessons: [{ id: "19", name: "Arquitetura de Computadores II", type: "video", content: "https://www.youtube.com/playlist?list=PLEUHFTHcrJmsqKX-GDD-hBvkF8h2_BfKJ" }],
          prerequisites: ["Introdução à Ciência da Computação com Python II", "Arquitetura de Computadores I"],
          books: [{ name: "Livros sobre Arquitetura de Computadores", url: "extras/bibliography/19_computer_architecture_II.md" }],
        },
        {
          id: 20,
          name: "Programação Lógica",
          lessons: [{ id: "20", name: "Programação Lógica", type: "video", content: "https://youtube.com/playlist?list=PLZ-Bk6jzsb-OScKa7vhpcQXoU2uxYGaFx&si=Y52_w6CQPYEE2fLN" }],
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
          lessons: [{ id: "21", name: "Redes de Computadores", type: "video", content: "https://www.youtube.com/playlist?list=PLvHXLbw-JSPfKp65psX5C9tyNLHHC4uoR" }],
          prerequisites: [],
          books: [{ name: "Livros sobre Rede de Computadores", url: "extras/bibliography/21_computer_network.md" }],
        },
        {
          id: 22,
          name: "Introdução à Engenharia de Software",
          lessons: [{ id: "22", name: "Introdução à Engenharia de Software", type: "video", content: "https://www.youtube.com/watch?v=h_hEI1Kfm2U&list=PLhBaeEzs3d7lsn_Mq2n3R4_api16Wkp1Q" }],
          prerequisites: ["Introdução à Ciência da Computação com Python II"],
          books: [{ name: "Livros sobre Engenharia de Software", url: "extras/bibliography/22_software_engineering.md" }],
        },
        {
          id: 23,
          name: "Sistemas Operacionais",
          lessons: [{ id: "23", name: "Sistemas Operacionais", type: "video", content: "https://www.youtube.com/watch?v=EGn8fOf7zE0&list=PLSmh8AKk_aUn9HxFs5FnjQupdQnV56MXV" }],
          prerequisites: ["Arquitetura de Computadores II"],
          books: [{ name: "Livros sobre Sistemas Operacionais", url: "extras/bibliography/23_operating_system.md" }],
        },
        {
          id: 24,
          name: "Programação Matemática",
          lessons: [{ id: "24", name: "Programação Matemática", type: "video", content: "https://www.youtube.com/watch?v=8rrgnFCL9LM&list=PL2peXovwG2kuqXC6sECjFSiG-MT1yXMQ-" }],
          prerequisites: ["Álgebra Linear I"],
          books: [{ name: "Livros sobre Programação Matemática/Pesquisa Operacional", url: "extras/bibliography/24_math_optimization.md" }],
        },
        {
          id: 25,
          name: "Fundamentos de Computação Gráfica",
          lessons: [{ id: "25", name: "Fundamentos de Computação Gráfica", type: "video", content: "https://www.youtube.com/watch?v=AVSAesOiKYY&list=PLE51fUFkeIwLXwe4rvG4EMgw7zgjP-tDx" }],
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
          lessons: [{ id: "26", name: "Linguagens Formais e Autômatos", type: "video", content: "https://www.youtube.com/watch?v=4zMwOozUt9U&list=PLncEdvQ20-mhD_qMeLHtLnA3XDT1Fr_k4&pp=iAQB" }],
          prerequisites: ["Matemática Discreta"],
          books: [{ name: "Livros sobre Linguagens Formais e Autômatos", url: "extras/bibliography/26_automata_theory.md" }],
        },
        {
          id: 27,
          name: "Inteligência Artificial",
          lessons: [{ id: "27", name: "Inteligência Artificial", type: "video", content: "https://www.youtube.com/watch?v=-T3zDFxngf4&list=PLeejGOroKw_txh7j7S3etF5eudI2WvMx0" }],
          prerequisites: ["Estruturas de Dados", "Probabilidade e Estatística"],
          books: [{ name: "Livros sobre Inteligência Artificial", url: "extras/bibliography/27_artificial_intelligence.md" }],
        },
        {
          id: 28,
          name: "Sistemas Distribuídos",
          lessons: [{ id: "28", name: "Sistemas Distribuídos", type: "video", content: "https://www.youtube.com/watch?v=TEEy5f46h_Q&list=PLP0bYj2MTFcuXa4-EbBKhvehr-rkxpeR8&index=1" }],
          prerequisites: ["Redes de Computadores"],
          books: [{ name: "Livros sobre Sistemas Distríbuidos", url: "extras/bibliography/28_distributed_computing.md" }],
        },
        {
          id: 29,
          name: "Teoria dos Grafos",
          lessons: [{ id: "29", name: "Teoria dos Grafos", type: "video", content: "https://www.youtube.com/watch?v=kfHqZLYHfHU&list=PLndfcZyvAqbr2MLCOLEvBNX6FgD8UNWfX" }],
          prerequisites: ["Matemática Discreta"],
          books: [{ name: "Livros sobre Teoria dos Grafos", url: "extras/bibliography/29_graphs.md" }],
        },
        {
          id: 30,
          name: "Cálculo III",
          lessons: [{ id: "30", name: "Cálculo III", type: "video", content: "https://www.youtube.com/watch?v=8mBTfk7s63s&list=PLAudUnJeNg4ugGUJo52dtgFZ_tCm1Ds5W" }],
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
          lessons: [{ id: "31", name: "Teoria da Computação", type: "video", content: "https://www.youtube.com/watch?v=dWRxL30aoes&list=PLYLYA7XrlskNgCeSpJf9PQHHb8Z4WpRm4" }],
          prerequisites: ["Linguagens Formais e Autômatos"],
          books: [{ name: "Livros sobre Teoria da Computação", url: "extras/bibliography/31_theory_of_computation.md" }],
        },
        {
          id: 32,
          name: "Deep Learning",
          lessons: [{ id: "32", name: "Deep Learning", type: "video", content: "https://www.youtube.com/watch?v=0VD_2t6EdS4&list=PL9At2PVRU0ZqVArhU9QMyI3jSe113_m2-" }],
          prerequisites: ["Inteligência Artificial"],
          books: [{ name: "Livros sobre Deep Learning", url: "extras/bibliography/32_deep_learning.md" }],
        },
        {
          id: 33,
          name: "Compiladores",
          lessons: [{ id: "33", name: "Compiladores", type: "video", content: "https://youtube.com/playlist?list=PLX6Nyaq0ebfhI396WlWN6WlBm-tp7vDtV&si=LoaU9lzLMuSVikgi" }],
          prerequisites: ["Estruturas de Dados", "Teoria dos Grafos"],
          books: [{ name: "Livros sobre Compiladores", url: "extras/bibliography/33_compilers.md" }],
        },
        {
          id: 34,
          name: "Computação Quântica",
          lessons: [{ id: "34", name: "Computação Quântica", type: "video", content: "https://youtube.com/playlist?list=PLUFcRbu9t-v4peHdmDy4rtG3EnbZNS86R&si=hLYHhS2BTKRgNwMJ" }],
          prerequisites: ["Cálculo III", "Arquitetura de Computadores II"],
          books: [{ name: "Livros sobre Computação Quântica", url: "extras/bibliography/34_quantum_copmputing.md" }],
        },
        {
          id: 35,
          name: "Metodologia da Pesquisa",
          lessons: [{ id: "35", name: "Metodologia da Pesquisa", type: "video", content: "https://youtube.com/playlist?list=PLclUQno6PMpQO0-XrDwWsPzRzEvjwp1__&si=0dXojlZV5EisMB6s" }],
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
          lessons: [{ id: "36", name: "Ingredientes básicos para o Cálculo", type: "video", content: "https://www.youtube.com/playlist?list=PL2xox8ncv81W698VTHptmp7ZNvcKqlyHO" }],
          prerequisites: [],
          books: [{ name: "Livros sobre Ingredientes básicos para o Cálculo", url: "extras/bibliography/01_calculo_basico.md" }],
        },
        {
          id: 37,
          name: "Teoria dos Conjuntos",
          lessons: [{ id: "37", name: "Teoria dos Conjuntos", type: "video", content: "https://www.youtube.com/playlist?list=PL2xox8ncv81X2Cp3FClIjRE9sG_Vq6sZ_" }],
          prerequisites: [],
          books: [{ name: "Livros sobre Teoria dos Conjuntos", url: "extras/bibliography/02_teoria_conjuntos.md" }],
        },
        {
          id: 38,
          name: "Lógica e Matemática Discreta",
          lessons: [{ id: "38", name: "Lógica e Matemática Discreta", type: "video", content: "https://www.youtube.com/playlist?list=PLxI8Can9yAHf6oB0nf8FwLhqSOcBLqOxH" }],
          prerequisites: [],
          books: [{ name: "Livros sobre Lógica e Matemática Discreta", url: "extras/bibliography/03_logica_discreta.md" }],
        },
        {
          id: 39,
          name: "Geometria Analítica",
          lessons: [{ id: "39", name: "Geometria Analítica", type: "video", content: "https://www.youtube.com/playlist?list=PLxI8Can9yAHcSZv2BBUJAfGsXx0D0hn-2" }],
          prerequisites: [],
          books: [{ name: "Livros sobre Geometria Analítica", url: "extras/bibliography/04_geometria_analitica.md" }],
        },
        {
          id: 40,
          name: "Algoritmos e Programação em Python",
          lessons: [{ id: "40", name: "Algoritmos e Programação em Python", type: "video", content: "https://www.youtube.com/playlist?list=PLvE-ZAFRgX8hnECDn1v9HNTI71veL3oW0" }],
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
          lessons: [{ id: "41", name: "Cálculo I", type: "video", content: "https://www.youtube.com/playlist?list=PL2D9B691A704C6F7B" }],
          prerequisites: [],
          books: [{ name: "Livros sobre Cálculo I", url: "extras/bibliography/06_calculo_i.md" }],
        },
        {
          id: 42,
          name: "Projeto e Análise de Algoritmos",
          lessons: [{ id: "42", name: "Projeto e Análise de Algoritmos", type: "video", content: "https://www.youtube.com/playlist?list=PLxI8Can9yAHdNN5fpKWRF8bbLG-2P-0LW" }],
          prerequisites: ["Programação (Python)"],
          books: [{ name: "Livros sobre Projeto e Análise de Algoritmos", url: "extras/bibliography/07_analise_algoritmos.md" }],
        },
        {
          id: 43,
          name: "Álgebra Linear",
          lessons: [{ id: "43", name: "Álgebra Linear", type: "video", content: "https://www.youtube.com/playlist?list=PLxI8Can9yAHdUtWDKtTA9AmuICNyX9EIr" }],
          prerequisites: [],
          books: [{ name: "Livros sobre Álgebra Linear", url: "extras/bibliography/08_algebra_linear.md" }],
        },
        {
          id: 44,
          name: "Álgebra Linear (avançada)",
          lessons: [{ id: "44", name: "Álgebra Linear (avançada)", type: "video", content: "https://www.youtube.com/playlist?list=PL2xox8ncv81WXIutzWJDQ7E78riZqJClA" }],
          prerequisites: [],
          books: [{ name: "Livros sobre Álgebra Linear (avançada)", url: "extras/bibliography/09_algebra_linear_avancada.md" }],
        },
        {
          id: 45,
          name: "Teoria dos Números",
          lessons: [{ id: "45", name: "Teoria dos Números", type: "video", content: "https://www.youtube.com/playlist?list=PLxI8Can9yAHcfxDjfTmU-t7XC1w2GVwc_" }],
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
          lessons: [{ id: "46", name: "Cálculo II", type: "video", content: "https://www.youtube.com/playlist?list=PLxI8Can9yAHeZfF4HwiVmv4D6n3acKLER" }],
          prerequisites: ["Cálculo I"],
          books: [{ name: "Livros sobre Cálculo II", url: "extras/bibliography/11_calculo_ii.md" }],
        },
        {
          id: 47,
          name: "Estruturas Algébricas",
          lessons: [{ id: "47", name: "Estruturas Algébricas", type: "video", content: "https://www.youtube.com/playlist?list=PL6eyvTm7LSBsdkBBKzEDcyYbdujN_6TmL" }],
          prerequisites: ["Teoria dos Números"],
          books: [{ name: "Livros sobre Estruturas Algébricas", url: "extras/bibliography/12_estruturas_algebraicas.md" }],
        },
        {
          id: 48,
          name: "Equações Diferenciais Ordinárias",
          lessons: [{ id: "48", name: "Equações Diferenciais Ordinárias", type: "video", content: "https://www.youtube.com/playlist?list=PLo4jXE-LdDTR9q44hqm2w3NWtvyP_ZoiP" }],
          prerequisites: [],
          books: [{ name: "Livros sobre Equações Diferenciais Ordinárias", url: "extras/bibliography/13_equacoes_diferenciais.md" }],
        },
        {
          id: 49,
          name: "Física Geral I",
          lessons: [{ id: "49", name: "Física Geral I", type: "video", content: "https://www.youtube.com/playlist?list=PL7581C21F8ADD6C8E" }],
          prerequisites: [],
          books: [{ name: "Livros sobre Física Geral I", url: "extras/bibliography/14_fisica_geral_i.md" }],
        },
        {
          id: 50,
          name: "História da Matemática",
          lessons: [{ id: "50", name: "História da Matemática", type: "video", content: "https://www.youtube.com/playlist?list=PLxI8Can9yAHdOIYVPQPS6oUPBk8mb1CVU" }],
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
          lessons: [{ id: "51", name: "Cálculo III", type: "video", content: "https://www.youtube.com/playlist?list=PLFBA21F349930F92F" }],
          prerequisites: ["Cálculo II"],
          books: [{ name: "Livros sobre Cálculo III", url: "extras/bibliography/16_calculo_iii.md" }],
        },
        {
          id: 52,
          name: "Física Geral II",
          lessons: [{ id: "52", name: "Física Geral II", type: "video", content: "https://www.youtube.com/playlist?list=PL516F59E9AE8F5BF7" }],
          prerequisites: ["Física Geral I"],
          books: [{ name: "Livros sobre Física Geral II", url: "extras/bibliography/17_fisica_geral_ii.md" }],
        },
        {
          id: 53,
          name: "Estatística e Probabilidade",
          lessons: [{ id: "53", name: "Estatística e Probabilidade", type: "video", content: "https://www.youtube.com/playlist?list=PLxI8Can9yAHeeWqe3m9HZFiBhT33Mfxew" }],
          prerequisites: [],
          books: [{ name: "Livros sobre Estatística e Probabilidade", url: "extras/bibliography/18_estatistica_probabilidade.md" }],
        },
        {
          id: 54,
          name: "Programação Linear",
          lessons: [{ id: "54", name: "Programação Linear", type: "video", content: "https://www.youtube.com/channel/UCYe-qV12CP64BewDy2-BY5A/playlists" }],
          prerequisites: ["Projeto e Análise de Algoritmos"],
          books: [{ name: "Livros sobre Programação Linear", url: "extras/bibliography/19_programacao_linear.md" }],
        },
        {
          id: 55,
          name: "Análise na Reta",
          lessons: [{ id: "55", name: "Análise na Reta", type: "video", content: "https://www.youtube.com/playlist?list=PL2xox8ncv81UTkjNN2WQM8knGQJpu1j_z" }],
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
          lessons: [{ id: "56", name: "Cálculo IV (Métodos Matemáticos)", type: "video", content: "https://www.youtube.com/playlist?list=PLxI8Can9yAHeOiMYCBlkyCALloROQ58OY" }],
          prerequisites: ["Cálculo III"],
          books: [{ name: "Livros sobre Cálculo IV (Métodos Matemáticos)", url: "extras/bibliography/21_calculo_iv.md" }],
        },
        {
          id: 57,
          name: "Introdução a Topologia Geral",
          lessons: [{ id: "57", name: "Introdução a Topologia Geral", type: "video", content: "https://www.youtube.com/playlist?list=PLhueTEPO9C1KEX8jTphPeb9kEF9it4b5x" }],
          prerequisites: [],
          books: [{ name: "Livros sobre Introdução a Topologia Geral", url: "extras/bibliography/22_topologia_geral.md" }],
        },
        {
          id: 58,
          name: "Cálculo com variável complexa",
          lessons: [{ id: "58", name: "Cálculo com variável complexa", type: "video", content: "https://www.youtube.com/playlist?list=PLpizEtrJatZEUjIgADKdbE6_jGhcXFxht" }],
          prerequisites: ["Cálculo IV"],
          books: [{ name: "Livros sobre Cálculo com variável complexa", url: "extras/bibliography/23_calculo_variavel_complexa.md" }],
        },
        {
          id: 59,
          name: "Teoria dos Grafos",
          lessons: [{ id: "59", name: "Teoria dos Grafos", type: "video", content: "https://www.youtube.com/playlist?list=PLndfcZyvAqbr2MLCOLEvBNX6FgD8UNWfX" }],
          prerequisites: [],
          books: [{ name: "Livros sobre Teoria dos Grafos", url: "extras/bibliography/24_teoria_grafos.md" }],
        },
        {
          id: 60,
          name: "Física Geral III",
          lessons: [{ id: "60", name: "Física Geral III", type: "video", content: "https://www.youtube.com/playlist?list=PLxI8Can9yAHdG8tw2QofrU02IuAEVyGlL" }],
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
          lessons: [{ id: "61", name: "Alfabetização em anéis", type: "video", content: "https://www.youtube.com/playlist?list=PL2xox8ncv81XSiyT7czJX8q7I7kNmc8Bk" }],
          prerequisites: ["Estruturas Algébricas"],
          books: [{ name: "Livros sobre Alfabetização em anéis", url: "extras/bibliography/26_aneis.md" }],
        },
        {
          id: 62,
          name: "Física Moderna",
          lessons: [{ id: "62", name: "Física Moderna", type: "video", content: "https://www.youtube.com/playlist?list=PLW5Hta-B_II5vB4Vn9wVWaJVHTo4XxB_i" }],
          prerequisites: ["Física Geral III"],
          books: [{ name: "Livros sobre Física Moderna", url: "extras/bibliography/27_fisica_moderna.md" }],
        },
        {
          id: 63,
          name: "Teoria de Corpos",
          lessons: [{ id: "63", name: "Teoria de Corpos", type: "video", content: "https://www.youtube.com/playlist?list=PL2xox8ncv81W0HbBtma7QQMeyVllJMk0m" }],
          prerequisites: ["Estruturas Algébricas"],
          books: [{ name: "Livros sobre Teoria de Corpos", url: "extras/bibliography/28_teoria_corpos.md" }],
        },
        {
          id: 64,
          name: "Análise Complexa",
          lessons: [{ id: "64", name: "Análise Complexa", type: "video", content: "https://www.youtube.com/playlist?list=PLo4jXE-LdDTRQ07QOEFl0x6mvyTl2hlRn" }],
          prerequisites: [],
          books: [{ name: "Livros sobre Análise Complexa", url: "extras/bibliography/29_analise_complexa.md" }],
        },
        {
          id: 65,
          name: "Equações Diferenciais Parciais",
          lessons: [{ id: "65", name: "Equações Diferenciais Parciais", type: "video", content: "https://www.youtube.com/playlist?list=PLpB72X90N5xST4NmvjQicgfRgpt-9rgw-" }],
          prerequisites: ["Cálculo IV", "Análise Complexa"],
          books: [{ name: "Livros sobre Equações Diferenciais Parciais", url: "extras/bibliography/30_equacoes_diferenciais_parciais.md" }],
        },
      ],
    },
  ],
};