## Universidade
O projeto é um portal em construção voltado para estudos no curso de Ciência da Computação, inspirado no projeto Universidade Brasileira Livre (UBL)

Atualmente, temos disponível a grade curricular do curso da UBL

![image](https://github.com/user-attachments/assets/f668e7ed-f89c-4bfb-b7e7-5b90d9b8261f)

### Lista de afazeres
Confira a lista de itens pendentes neste projeto. Sinta-se livre para desenvolver.
- [Todo List](TODO.md)


### Aulas no Portal
![image](https://github.com/user-attachments/assets/a260f2fb-0e39-4281-8987-63b231a632e1)

1. Atualmente, o projeto oferece 2 cursos gratuitos, que podem ser acessados e assistidos diretamente no site, sem a necessidade de ir ao YouTube. Isso ajuda a evitar distrações e facilita o foco no conteúdo.

### Obs: 

O site não tem objetivo de cobrar nada para funcionar, estou usando ferramentas gratuitas de hospedagem e nenhum conteúdo presente é de minha propriedade, se trata de um projeto aberto

## Como contribuir?
Estamos agora utilizando **React, Vite e TypeScript** para o desenvolvimento frontend, o que proporciona um ambiente de desenvolvimento mais rápido e leve.

### Requisitos Mínimos:
* Node.js (versão 18.x ou superior recomendada)
* npm (gerenciador de pacotes do Node.js) ou Yarn

1.  **Crie uma Nova Branch:**
    Sempre crie uma nova branch para cada funcionalidade, correção de bug ou refatoração. Isso mantém as mudanças isoladas.
    ```bash
    git checkout main # Certifique-se de estar na branch principal atualizada
    git pull origin main # Sincronize sua main local com seu fork remoto
    git checkout -b feature/minha-nova-funcionalidade
    # Exemplo: git checkout -b feature/adicionar-cursos-embutidos
    ```

2.  **Realize seus Commits:**
    Faça commits pequenos e com frequência. Isso ajuda a manter o histórico de mudanças limpo e fácil de entender. Cada commit deve ser uma unidade lógica de trabalho.

    As mensagens de commit devem ser descritivas e claras, explicando o que foi feito. A convenção recomendada é:
    1.  Primeira linha: Resumo curto do que foi feito (máximo 50 caracteres).
    2.  Linhas seguintes: Descrição detalhada, se necessário, explicando o motivo da mudança.

    Exemplo:
    ```bash
    git add .
    git commit -m "feat: Adiciona estrutura para exibir cursos com vídeos embutidos"
    # ou
    git commit -m "fix: Corrige erro de NaN no cálculo de progresso"
    ```

3.  **Sincronize com o Repositório Original (Opcional, mas Recomendado):**
    Para manter sua branch atualizada com as últimas mudanças do repositório principal da Universidade Livre e evitar conflitos futuros, adicione o repositório original como um `upstream` remoto e puxe as mudanças regularmente:
    ```bash
    # Apenas uma vez:
    git remote add upstream [https://github.com/Universidade-Livre/universidade.git](https://github.com/Universidade-Livre/universidade.git)

    # Para atualizar sua branch de trabalho:
    git pull --rebase upstream main
    ```
    Sempre que estiver trabalhando em uma branch e for fazer o `git pull`, utilize a opção `--rebase` para evitar merges desnecessários. Isso mantém o histórico linear e limpo.

4.  **Envie sua Branch para o SEU Fork:**
    Quando suas mudanças estiverem prontas, envie sua branch para o seu fork no GitHub:
    ```bash
    git push --set-upstream origin feature/minha-nova-funcionalidade
    ```

5.  **Abra um Pull Request (PR):**
    Vá para a página do **seu fork** no GitHub (`https://github.com/SEU_USUARIO/UBL`). O GitHub deve exibir um botão "Compare & pull request" ou um banner.
    * Certifique-se de que o Pull Request está sendo feito da sua branch (`feature/minha-nova-funcionalidade`) para a branch `main` do repositório **original** (`Universidade-Livre/universidade`).
    * Forneça um título e uma descrição claros para o seu PR, explicando o que foi implementado e por que.

### Estrutura de Dados para Cursos (Exemplo para Contribuição):
Para adicionar cursos, você pode estender a estrutura de dados existente, tipicamente encontrada em `src/data/coursesData.ts` (ou similar). Um exemplo de entrada para um curso e seus vídeos:

```typescript
  "2": {
    id: "2", // ID do curso
    title: "Nome Do Curso",
    description: "Descrição do Curso",
    professor: {
      name: "Nome do Professor",
      bio: "Biografia do Professor",
      imageUrl: "/caminho/para/imagem_professor.jpg"
    },
    "videos": [
      {
        id: "1",
        title: "Aula #01 - Título da Aula",
        videoId: "ID_DO_VIDEO_YOUTUBE", // O ID do vídeo do YouTube para embed
        completed: false // O status 'completed' é gerenciado pelo sistema de progresso do usuário no frontend.
      },
      // ... mais vídeos
    ]
  }
```


Referências
https://github.com/Universidade-Livre/ciencia-da-computacao
