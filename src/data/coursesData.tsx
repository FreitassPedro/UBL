import type { Course } from "@/types/course";

export const coursesData: Record<string, Course> = {
    "circuitos-digitais": {
        id: "1",
        title: "Circuitos Digitais",
        description: "Fundamentos de Circuitos Digitais e Sistemas Digitais",
        professor: {
          name: "Pedro Souza",
          bio: "Professor de Circuitos Digitais UFSC",
          imageUrl: "/pedro.jpg?height=200&width=200",
        },
        videos: [
          {
            id: "1",
            title: "[CIRCUITOS DIGITAIS] Aula 01 - Introdução aos Circuitos Digitais",
            videoId: "1lsU6RoU9Ko",
            completed: false,
          },
          {
            id: "2",
            title: "[CIRCUITOS DIGITAIS] Aula 02 - Sistemas de Numeração (Parte 1)",
            videoId: "RuXmtYdmQKY",
            completed: false,
          },
          {
            id: "3",
            title: "[CIRCUITOS DIGITAIS] Aula 03 - Sistemas de Numeração (Parte 2)",
            videoId: "MhaGPACGIEs",
            completed: false,
          },
          {
            id: "4",
            title: "[CIRCUITOS DIGITAIS] Aula 04 - Sistemas de Numeração - Exercícios",
            videoId: "ZQkNfdwaG2c",
            completed: false,
          },
    
          {
            id: "5",
            title: "[CIRCUITOS DIGITAIS] Aula 05 - Códigos Binários",
            videoId: "ZQkNfdwaG2c",
            completed: false,
          },
          {
            id: "6",
            title: "[[CIRCUITOS DIGITAIS] Aula 06 - Aritmética Binária",
            videoId: "gBsNWWscIcg",
            completed: false,
          },
          {
            id: "7",
            title: "[CIRCUITOS DIGITAIS] Aula 07 - Representação de Números Binários Inteiros com Sinal",
            videoId: "PceEtFggO_Q",
            completed: false,
          },
          {
            id: "8",
            title: "[CIRCUITOS DIGITAIS] Aula 08 - Aritmética de Números BCD",
            videoId: "i48FGijMVO0",
            completed: false,
          },
          {
            id: "9",
            title: "[CIRCUITOS DIGITAIS] Aula 09 - Ferramentas de Descrição de Circuitos Digitais",
            videoId: "jzR0kYsay2U",
            completed: false,
          },
          {
            id: "10",
            title: "[CIRCUITOS DIGITAIS] Aula 10 - Funções e Portas Lógicas",
            videoId: "4b58LvY6NI",
            completed: false,
          },
          {
            id: "11",
            title: "[CIRCUITOS DIGITAIS] Aula 11 - Propriedades da Álgebra Booleana",
            videoId: "Px3W4QHfrHc",
            completed: false,
          },
          {
            id: "12",
            title: "[CIRCUITOS DIGITAIS] Aula 12 - Análise de Expressões Lógicas",
            videoId: "XoWag-f1UTY",
            completed: false,
          },
          {
            id: "13",
            title: "[CIRCUITOS DIGITAIS] Aula 13 - Análise de Circuitos Combinacionais",
            videoId: "u7FJAOnWS08",
            completed: false,
          },
          {
            id: "14",
            title: "[CIRCUITOS DIGITAIS] Aula 14 - Elaboração de Diagrama de Circuito Lógico",
            videoId: "xzCpDBYKCTA",
            completed: false,
          },
          {
            id: "15",
            title: "[CIRCUITOS DIGITAIS] Aula 15 - Utilização do Logisim",
            videoId: "32ritDV6XxU",
            completed: false,
          },
          {
            id: "16",
            title: "[CIRCUITOS DIGITAIS] Aula 16 - Formas Canônicas para Expressões Lógicas",
            videoId: "Q2s6ZFX3de8",
            completed: false,
          },
          {
            id: "17",
            title: "[CIRCUITOS DIGITAIS] Aula 17 - Síntese de Circuitos Combinacionais",
            videoId: "lGIVvVAiR6U",
            completed: false,
          },
          {
            id: "18",
            title: "[CIRCUITOS DIGITAIS] Aula 18 - Simplificação Algébrica",
            videoId: "mOBy3LJV5sM",
            completed: false,
          },
          {
            id: "19",
            title: "[CIRCUITOS DIGITAIS] Aula 19 - Mapas de Karnaugh (Parte 1)",
            videoId: "8_Ip6PzYqrs",
            completed: false,
          },
          {
            id: "20",
            title: "[CIRCUITOS DIGITAIS] Aula 20 - Mapas de Karnaugh (Parte 2)",
            videoId: "AVb_9sXqfSk",
            completed: false,
          },
          {
            id: "21",
            title: "[CIRCUITOS DIGITAIS] Aula 21 - Mapas de Karnaugh (Parte 3)",
            videoId: "rv2r_hSLRN0",
            completed: false,
          },
          {
            id: "22",
            title: "[CIRCUITOS DIGITAIS] Aula 22 - Mapas de Karnaugh (Parte 4)",
            videoId: "qNXLHeHurpk",
            completed: false,
          },
          {
            id: "23",
            title: "[CIRCUITOS DIGITAIS] Aula 23 - Exemplo de Projeto de Circuito Combinacional",
            videoId: "ttoNkYJ38zQ",
            completed: false,
          },
          {
            id: "24",
            title: "[CIRCUITOS DIGITAIS] Aula 24 - Universalidade das Portas NAND e NOR",
            videoId: "qXEx7nFvMh4",
            completed: false,
          },
          {
            id: "25",
            title: "[CIRCUITOS DIGITAIS] Aula 25 - Circuitos Somadores (Parte 1)",
            videoId: "r_DpiGT0YmA",
            completed: false,
          },
          {
            id: "26",
            title: "[CIRCUITOS DIGITAIS] Aula 26 - Circuitos Somadores (Parte 2)",
            videoId: "rhZ0QmX6Gf0",
            completed: false,
          },
          {
            id: "27",
            title: "[CIRCUITOS DIGITAIS] Aula 27 - Somadores no Logisim",
            videoId: "6sBkmAlJlvs",
            completed: false,
          },
          {
            id: "28",
            title: "[CIRCUITOS DIGITAIS] Aula 28 - Circuitos Subtradores",
            videoId: "TQfRSFsRDAU",
            completed: false,
          },
          {
            id: "29",
            title: "[CIRCUITOS DIGITAIS] Aula 29 - Circuito Somador/Subtrador Compartilhado no Logisim",
            videoId: "iiTMiSu_xbU",
            completed: false,
          },
          {
            id: "30",
            title: "[CIRCUITOS DIGITAIS] Aula 30 - Incrementadores e Decrementadores",
            videoId: "XAGm1k_H49w",
            completed: false,
          },
          {
            id: "31",
            title: "[CIRCUITOS DIGITAIS] Aula 31 - Somadores BCD",
            videoId: "fLZRFkFWQ4c",
            completed: false,
          },
          {
            id: "32",
            title: "[CIRCUITOS DIGITAIS] Aula 32 - Multiplicadores em Array",
            videoId: "6mf8qFEBxEU",
            completed: false,
          },
          {
            id: "33",
            title: "[CIRCUITOS DIGITAIS] Aula 33 - Comparadores de Magnitude",
            videoId: "tVgocuuisjA",
            completed: false,
          },
          {
            id: "34",
            title: "[CIRCUITOS DIGITAIS] Aula 34 - Somadores Carry Look-a-Head",
            videoId: "l56a1Rp-LNs",
            completed: false,
          },
          {
            id: "35",
            title: "[CIRCUITOS DIGITAIS] Aula 35 - Geradores e Verificadores de Paridade",
            videoId: "z0qUmHXd8ZA",
            completed: false,
          },
          {
            id: "36",
            title: "[CIRCUITOS DIGITAIS] Aula 36 - Conversores de Código Binário (Parte 1)",
            videoId: "h0vnz4ebT08",
            completed: false,
          },
          {
            id: "37",
            title: "[CIRCUITOS DIGITAIS] Aula 37 - Conversores de Código Binário (Parte 2)",
            videoId: "RCbCm9TyZ9w",
            completed: false,
          },
          {
            id: "38",
            title: "[CIRCUITOS DIGITAIS] Aula 38 - Decodificadores para Display de 7 Segmentos",
            videoId: "NJwesHY5nPQ",
            completed: false,
          },
          {
            id: "39",
            title: "[CIRCUITOS DIGITAIS] Aula 39 - Decodificadores",
            videoId: "C8Y8ST2hnqA",
            completed: false,
          },
          {
            id: "40",
            title: "[CIRCUITOS DIGITAIS] Aula 40 - Projeto Combinacional Utilizando Decodificadores",
            videoId: "y-Ni9BIpS8c",
            completed: false,
          },
          {
            id: "41",
            title: "[CIRCUITOS DIGITAIS] Aula 41 - Codificadores",
            videoId: "_2RRcq8YIKk",
            completed: false,
          },
          {
            id: "42",
            title: "[CIRCUITOS DIGITAIS] Aula 42 - Codificadores de Prioridade",
            videoId: "qfqoSlvIkiA",
            completed: false,
          },
          {
            id: "43",
            title: "[CIRCUITOS DIGITAIS] Aula 43 - Multiplexadores",
            videoId: "e70pe-Cdtfc",
            completed: false,
          },
          {
            id: "44",
            title: "[CIRCUITOS DIGITAIS] Aula 44 - Associação de Multiplexadores",
            videoId: "X8lHW9yfr30",
            completed: false,
          },
          {
            id: "45",
            title: "[CIRCUITOS DIGITAIS] Aula 45 - Implementação de Funções Combinacionais com Multiplexadores (Parte 1)",
            videoId: "_uBk4xDi-8c",
            completed: false,
          },
          {
            id: "46",
            title: "[CIRCUITOS DIGITAIS] Aula 46 - Implementação de Funções Combinacionais com Multiplexadores (Parte 2)",
            videoId: "wypiacFZFww",
            completed: false,
          },
          {
            id: "47",
            title: "[CIRCUITOS DIGITAIS] Aula 47 - Teorema da Expansão de Shannon",
            videoId: "Kjtvyf6e-9U",
            completed: false,
          },
          {
            id: "48",
            title: "[CIRCUITOS DIGITAIS] Aula 48 - Demultiplexadores",
            videoId: "Jmw4OiI0O3A",
            completed: false,
          },
          {
            id: "49",
            title: "[CIRCUITOS DIGITAIS] Aula 49 - Associação de Demultiplexadores",
            videoId: "FWk2a7oTpxc",
            completed: false,
          },
          {
            id: "50",
            title: "[CIRCUITOS DIGITAIS] Aula 50 - Deslocadores",
            videoId: "EBrHRwnVMsU",
            completed: false,
          },
          {
            id: "51",
            title: "[CIRCUITOS DIGITAIS] Aula 51 - Unidade Lógico-Aritmética",
            videoId: "SemyzwoLxDo",
            completed: false,
          },
          {
            id: "52",
            title: "[CIRCUITOS DIGITAIS] Aula 52 - Aplicações de Circuitos Combinacionais #1",
            videoId: "3uXHong2PvQ",
            completed: false,
          },
          {
            id: "53",
            title: "[CIRCUITOS DIGITAIS] Aula 53 - Aplicações de Circuitos Combinacionais #2",
            videoId: "mcAnKpiPO-c",
            completed: false,
          },
          {
            id: "54",
            title: "[CIRCUITOS DIGITAIS] Aula 54 - Fundamentos de Circuitos Sequenciais",
            videoId: "Q0hxfNu0EGw",
            completed: false,
          },
          {
            id: "55",
            title: "[CIRCUITOS DIGITAIS] Aula 55 - Máquinas de Estados Finitos",
            videoId: "rkfQKM_jQK8",
            completed: false,
          },
          {
            id: "56",
            title: "[CIRCUITOS DIGITAIS] Aula 56 - Modelos para Máquinas de Estados",
            videoId: "6sVrWGekNX4",
            completed: false,
          },
          {
            id: "57",
            title: "[CIRCUITOS DIGITAIS] Aula 57 - Tabela de Transição de Estados",
            videoId: "qFXXLbwvWsg",
            completed: false,
          },
          {
            id: "58",
            title: "[CIRCUITOS DIGITAIS] Aula 58 - Diagrama de Transição de Estados",
            videoId: "Q0QNvjRt_pk",
            completed: false,
          },
          {
            id: "59",
            title: "[CIRCUITOS DIGITAIS] Aula 59 - Latch SR",
            videoId: "YHEvh3PoPcE",
            completed: false,
          },
          {
            id: "60",
            title: "[CIRCUITOS DIGITAIS] Aula 60 - Latches SR Controlado",
            videoId: "MaelrWb21QI",
            completed: false,
          },
          {
            id: "61",
            title: "[CIRCUITOS DIGITAIS] Aula 61 - Latch D (Transparente)",
            videoId: "XZ5I9mJdg0w",
            completed: false,
          },
          {
            id: "62",
            title: "[CIRCUITOS DIGITAIS] Aula 62 - Latches com Portas NAND",
            videoId: "XQe4qElLDWI",
            completed: false,
          },
          {
            id: "63",
            title: "[CIRCUITOS DIGITAIS] Aula 63 - Latches no Logisim",
            videoId: "wYTRa2r3fjM",
            completed: false,
          },
          {
            id: "64",
            title: "[CIRCUITOS DIGITAIS] Aula 64 - Flip-Flop D",
            videoId: "E12RmfvaIf8",
            completed: false,
          },
          {
            id: "65",
            title: "[CIRCUITOS DIGITAIS] Aula 65 - Flip-Flop JK e Flip-Flop T",
            videoId: "zQj0oDimU2I",
            completed: false,
          },
          {
            id: "66",
            title: "[CIRCUITOS DIGITAIS] Aula 66 - Entradas Assíncronas em Flip-Flops",
            videoId: "2qOUSXgKUbc",
            completed: false,
          },
          {
            id: "67",
            title: "[CIRCUITOS DIGITAIS] Aula 67 - Flip-Flops no Logisim",
            videoId: "6fEfOZJTQcQ",
            completed: false,
          },
          {
            id: "68",
            title: "[CIRCUITOS DIGITAIS] Aula 68 - Análise de Circuitos Sequenciais (Exemplo 1)",
            videoId: "f9L2vdplWgM",
            completed: false,
          },
          {
            id: "69",
            title: "[CIRCUITOS DIGITAIS] Aula 69 - Análise de Circuitos Sequenciais (Exemplo 2)",
            videoId: "h_Mx1DL14yE",
            completed: false,
          },
          {
            id: "70",
            title: "[CIRCUITOS DIGITAIS] Aula 70 - Análise de Circuitos Sequenciais (Exemplo 3)",
            videoId: "4Mx_cYvoZKY",
            completed: false,
          },
          {
            id: "71",
            title: "[CIRCUITOS DIGITAIS] Aula 71 - Análise de Circuitos Sequenciais (Exemplo 4)",
            videoId: "__57NZcf52A",
            completed: false,
          },
          {
            id: "72",
            title: "[CIRCUITOS DIGITAIS] Aula 72 - Projeto de Circuitos Sequenciais (Exemplo 1)",
            videoId: "3LXF2p2LSQU",
            completed: false,
          },
          {
            id: "73",
            title: "[CIRCUITOS DIGITAIS] Aula 73 - Projeto de Circuitos Sequenciais (Exemplo 2)",
            videoId: "EUvxMNTFN4s",
            completed: false,
          },
          {
            id: "74",
            title: "[CIRCUITOS DIGITAIS] Aula 74 - Projeto de Circuitos Sequenciais (Exemplo 3)",
            videoId: "7Y0oWahVWUw",
            completed: false,
          },
          {
            id: "75",
            title: "[CIRCUITOS DIGITAIS] Aula 75 - Projeto de Circuitos Sequenciais (Exemplo 4)",
            videoId: "zctwOD5i9mQ",
            completed: false,
          },{
            id: "76",
            title: "[CIRCUITOS DIGITAIS] Aula 76 - Projeto de Circuitos Sequenciais (Exemplo 5)",
            videoId: "QZQeMbeXnoQ",
            completed: false,
          },
          {
            id: "77",
            title: "[CIRCUITOS DIGITAIS] Aula 77 - Projeto de Circuitos Sequenciais (Exemplo 6)",
            videoId: "Ez3nIadMiR8",
            completed: false,
          },
          {
            id: "78",
            title: "[CIRCUITOS DIGITAIS] Aula 78 - Projeto de Circuitos Sequenciais (Exemplo 7)",
            videoId: "BQC1pypMw1c",
            completed: false,
          },
          {
            id: "79",
            title: "[CIRCUITOS DIGITAIS] Aula 79 - Projeto de Circuitos Sequenciais (Exemplo 8)",
            videoId: "eW3VQYW-sTw",
            completed: false,
          },
          {
            id: "80",
            title: "[CIRCUITOS DIGITAIS] Aula 80 - Projeto de Circuitos Sequenciais (Exemplo 9)",
            videoId: "WzW6nU7NUus",
            completed: false,
          },
          {
            id: "81",
            title: "[CIRCUITOS DIGITAIS] Aula 81 - Projeto de Circuitos Sequenciais (Exemplo 10)",
            videoId: "ta-esYaoz4E",
            completed: false,
          },
          {
            id: "82",
            title: "[CIRCUITOS DIGITAIS] Aula 82 - Projeto de Circuitos Sequenciais (Exemplo 11)",
            videoId: "5Ya0o-pGumA",
            completed: false,
          },
          {
            id: "83",
            title: "[CIRCUITOS DIGITAIS] Aula 83 - Projeto de Circuitos Sequenciais (Exemplo 12)",
            videoId: "seZk9pKNYaA",
            completed: false,
          },
          {
            id: "84",
            title: "[CIRCUITOS DIGITAIS] Aula 84 - Projeto de Circuitos Sequenciais (Exemplo 13)",
            videoId: "29rFIM-izEc",
            completed: false,
          },
          {
            id: "85",
            title: "[CIRCUITOS DIGITAIS] Aula 85 - Projeto de Circuitos Sequenciais (Projeto com Multiplexadores)",
            videoId: "aYaEqsyxRP0",
            completed: false,
          },
          {
            id: "86",
            title: "[CIRCUITOS DIGITAIS] Aula 86 - Projeto de Circuitos Sequenciais (Máquina Moore vs. Máquina Mealy)",
            videoId: "AfWMnhgDO4k",
            completed: false,
          },
          {
            id: "87",
            title: "[CIRCUITOS DIGITAIS] Aula 87 - Minimização de Máquinas de Estados",
            videoId: "AJj8DpeW_yY",
            completed: false,
          },
          {
            id: "88",
            title: "[CIRCUITOS DIGITAIS] Aula 88 - Tabela de Implicação",
            videoId: "9PCN3yNe4JU",
            completed: false,
          },
          {
            id: "89",
            title: "[CIRCUITOS DIGITAIS] Aula 89 - Particionamento Sucessivo",
            videoId: "Z1hZhMn29WY",
            completed: false,
          },
          {
            id: "90",
            title: "[CIRCUITOS DIGITAIS] Aula 90 - Relação de Máquinas Moore vs. Mealy",
            videoId: "NXjf7GWlA6A",
            completed: false,
          },
          {
            id: "91",
            title: "[CIRCUITOS DIGITAIS] Aula 91 - Estado Inicial de uma Máquina de Estados",
            videoId: "gpObH7mDB-I",
            completed: false,
          },
          {
            id: "92",
            title: "[CIRCUITOS DIGITAIS] Aula 92 - Condições de Temporização em Máquinas de Estados",
            videoId: "Kib0DmQCLjQ",
            completed: false,
          },
          {
            id: "93",
            title: "[CIRCUITOS DIGITAIS] Aula 93 - Codificação dos Estados",
            videoId: "XYAXzeIpNXw",
            completed: false,
          },      
    
        ],
      },
      "matematica-discreta": {
        id: "2",
        title: "Matemática Discreta",
        description: "Fundamentos Matemáticos para Computação",
        professor: {
          name: "Douglas Maioli",
          bio: "Professor de Matemática Discreta",
          imageUrl: "/douglasmaioli.jpg?height=200&width=200"
        },
        "videos": [
          {
            "id": "1",
            "title": "Aula #01 - Tabela Verdade dos Conectivos (Parte I de Lógica) | Fundamentos Matemáticos para Computação",
            "videoId": "QE6ruiq632o",
            "completed": false
          },
          {
            "id": "2",
            "title": "Aula #02 - Fórmula/Tautologia/Contrad. (Parte II de Lógica) | Fundamentos Matemáticos para Computação",
            "videoId": "Tex6tUKEPQA",
            "completed": false
          },
          {
            "id": "3",
            "title": "Aula #03 - Equivalências Tautológicas (Parte III de Lógica) | Fundamentos Matemáticos para Computação",
            "videoId": "FrX2zstHdNg",
            "completed": false
          },
          {
            "id": "4",
            "title": "Aula #04 - Regras de Inferência (Parte IV de Lógica) | Fundamentos Matemáticos para Computação",
            "videoId": "U02g0_xvwgM",
            "completed": false
          },
          {
            "id": "5",
            "title": "Aula #05 - Predicados e Quantificadores (Parte V de Lógica) | Fundamentos Matemáticos para Computação",
            "videoId": "hyyM1bToHTc",
            "completed": false
          },
          {
            "id": "6",
            "title": "Aula #06 - PROLOG (Parte VI de Lógica) | Fundamentos Matemáticos para Computação",
            "videoId": "s9eO52XpbJo",
            "completed": false
          },
          {
            "id": "7",
            "title": "Entendendo Recorrência usando o PROLOG | Fundamentos Matemáticos para Computação",
            "videoId": "wZFwNZgLFi0",
            "completed": false
          },
          {
            "id": "8",
            "title": "Aula #07 - Técnicas de Demonstrações (Parte Demonstração) | Fundamentos Matemáticos para Computação",
            "videoId": "dqTqguWTC8I",
            "completed": false
          },
          {
            "id": "9",
            "title": "Aula #08 - Princípio da Indução Finita (Parte Demonstração) | Fundamentos Matemáticos para Computação",
            "videoId": "7kvOH98Yf5s",
            "completed": false
          },
          {
            "id": "10",
            "title": "Aula #09 - Tripla de Hoare - Axioma de Atribuição - Regra do Condicional (Demonstração de Correção) | Fundamentos Matemáticos para Computação",
            "videoId": "nPJTeAIFVvE",
            "completed": false
          },
          {
            "id": "11",
            "title": "Aula #10 - Regra do Laço (Demonstração de Correção) | Fundamentos Matemáticos para Computação",
            "videoId": "YiqjJC538I4",
            "completed": false
          },
          {
            "id": "12",
            "title": "Aula #11 - Definições Recorrentes (Recursividade) | Fundamentos Matemáticos para Computação",
            "videoId": "oG8j0kCvXb0",
            "completed": false
          },
          {
            "id": "13",
            "title": "Aula #12 - Como encontrar a Fórmula Fechada (Recursividade) | Fundamentos Matemáticos para Computação",
            "videoId": "vF8TswpWuLQ",
            "completed": false
          },
          {
            "id": "14",
            "title": "Aula Extra - Dividir para Conquistar (Recursividade) | Fundamentos Matemáticos para Computação",
            "videoId": "nq0UHzXBe5w",
            "completed": false
          },
          {
            "id": "15",
            "title": "Aula #13 - Relações Binárias | Fundamentos Matemáticos para Computação",
            "videoId": "tKHpu7-4K-o",
            "completed": false
          },
          {
            "id": "16",
            "title": "Aula #14 - Funções | Fundamentos Matemáticos para Computação",
            "videoId": "wvOr_gVa6GA",
            "completed": false
          },
          {
            "id": "17",
            "title": "Aula #15 - Análise de Algoritmos - Ordem de Grandeza | Fundamentos Matemáticos para Computação",
            "videoId": "k5N9E5HNUk0",
            "completed": false
          },
          {
            "id": "18",
            "title": "Aula #16 - Introdução à Matrizes (Parte I de Matrizes) | Fundamentos Matemáticos para Computação",
            "videoId": "jTEarS1mHd4",
            "completed": false
          },
          {
            "id": "19",
            "title": "Aula #17 - Operações de Matrizes (Parte II de Matrizes) | Fundamentos Matemáticos para Computação",
            "videoId": "gYdOA4chMPA",
            "completed": false
          },
          {
            "id": "20",
            "title": "Aula #18 - Matrizes Booleanas (Parte III de Matrizes) | Fundamentos Matemáticos para Computação",
            "videoId": "k8_dpEj8uBs",
            "completed": false
          }
    ],
  },
};
