# TrackIt

Este projeto é uma aplicação de acompanhamento de hábitos, desenvolvida em React. Nele é possível se cadastrar e fazer login para ter acesso às funcionalidades, tais como cadastro de hábitos, acompanhamento de hábitos realizados e histórico.

## Como executar:

### 1. Faça um clone desse repositório na sua máquina:
- Crie uma pasta no seu computador para esse programa, recomendo colocar o nome Assistente Pessoal
- Abra o `git bash` ou `terminal` dentro dessa pasta
- Copie a URL do repositório
- Digite git clone <URL copiada> e pressione enter

### 2. Instale as dependências:
`npm install`

### 3. Inicie a aplicação:
`npm start`

### 4. Abra a aplicação em seu navegador [http://localhost:3000](http://localhost:3000)

## Funcionalidades

### Tela de Login
Na tela de login, é possível fazer login com um email e senha previamente cadastrados. Em caso de sucesso, o usuário é redirecionado para a rota /hoje. Em caso de falha, é exibido um alerta informando o erro.

### Tela de Cadastro
Na tela de cadastro, é possível se cadastrar informando um nome, email e senha. Em caso de sucesso, o usuário é redirecionado para a tela de login. Em caso de falha, é exibido um alerta informando o erro.

### Topo e Menu
O topo e menu são fixos e exibidos em todas as telas da aplicação. No topo, é exibida a foto do usuário logado. No menu, há botões para acessar as rotas de Hábitos, Hoje e Histórico. O botão Hoje exibe uma barra de progresso circular indicando a porcentagem de conclusão dos hábitos de hoje.

### Tela de Hábitos
Na tela de hábitos, são exibidos os hábitos do usuário. É possível deletar um hábito clicando em um botão e confirmando a ação. É possível cadastrar um novo hábito clicando no botão "+". O usuário deve inserir o nome do hábito e selecionar os dias da semana que deseja realizar o hábito. É possível cadastrar hábitos para qualquer dia da semana. Os hábitos são atualizados automaticamente conforme o usuário for concluindo-os. Quando não há hábitos cadastrados, é exibido um texto informativo.

## Tecnologias utilizadas
- React
- Styled Components
- Context API
- React Loader Spinner
- React Router DOM
- Axios
