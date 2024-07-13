# framework-front-end - Projeto Vue.js

Este é um projeto de exemplo utilizando Vue.js, demonstrando conceitos como manipulação do DOM, eventos, two-way data binding, classes dinâmicas e navegação entre páginas. O projeto inclui três interfaces principais: uma tela de login, uma tela de registro e uma tela de aplicação principal.

Tecnologias Utilizadas:

- Vue.js 3
- Vue Router
- Node.js
- npm

Conceitos Demonstrados:

Manipulação do DOM:
A manipulação do DOM é demonstrada no componente MainAppComponent.vue, onde novos itens são adicionados a uma lista e itens existentes podem ser destacados ou removidos.

Eventos:
Eventos são manipulados em vários componentes, como o evento de clique nos botões para executar ações ou adicionar itens à lista no MainAppComponent.vue.

Two-Way Data Binding:
O two-way data binding é demonstrado usando v-model nos campos de entrada nos componentes LoginComponent.vue e RegisterComponent.vue.

Classes Dinâmicas:
A aplicação dinâmica de classes é demonstrada no MainAppComponent.vue, onde a classe highlighted é aplicada a itens da lista com base no estado do item.

Configuração e Execução do Projeto:

Pré-requisitos:

- Node.js (versão 12 ou superior)
- npm (versão 6 ou superior)
  
Passos para Configurar e Rodar o Projeto:


Instale as dependências:
- npm install

Execute o servidor de desenvolvimento:
- npm run serve

Acesse a aplicação:
- Abra o navegador e vá para http://localhost:8080

Estrutura dos Componentes:

LoginComponent.vue
- Este componente representa a tela de login. Ele possui campos para o nome de usuário e senha, e um botão para enviar o formulário. Também inclui um botão para navegar até a tela de registro.
- Obs: segue informações para logar: usuário: user // senha: password

RegisterComponent.vue
- Este componente representa a tela de registro. Ele possui campos para o nome de usuário e senha, e um botão para enviar o formulário. Após o registro, ele redireciona para a tela principal do aplicativo.
- Obs: Pode ser informada qualquer informação nos campos para se registrar, pois foi desenvolvido apenas o front end.

MainAppComponent.vue
- Este componente representa a tela principal do aplicativo. Ele demonstra a manipulação do DOM, eventos e a aplicação de classes dinâmicas. Inclui uma lista onde itens podem ser adicionados e destacados.

main.js
- O arquivo main.js é o ponto de entrada da aplicação, onde o Vue Router é configurado e a aplicação Vue é montada.

router/index.js
- O arquivo index.js configura as rotas para navegação entre as diferentes páginas da aplicação (login, registro e aplicação principal).
