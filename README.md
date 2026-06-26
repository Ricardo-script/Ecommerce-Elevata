# Ecommerce Elevata

## Sobre o projeto

O **Ecommerce Elevata** é um projeto desenvolvido em **React Native** utilizando **Expo**, **Expo Router** e **TypeScript**, com o objetivo de simular o funcionamento de um sistema completo de e-commerce.

O projeto foi criado para demonstrar a implementação de boas práticas de arquitetura, organização de código, navegação baseada em arquivos (File-Based Routing) e consumo de APIs REST, simulando funcionalidades presentes em aplicações reais.

Entre as principais funcionalidades implementadas estão:

- Autenticação de usuários;
- Listagem de produtos;
- Pesquisa de produtos;
- Visualização dos detalhes de um produto;
- Gerenciamento de produtos favoritos;
- Navegação protegida por autenticação;
- Persistência da sessão do usuário;
- Interface responsiva baseada em um protótipo do Figma.

Como se trata de um projeto demonstrativo, nenhuma informação é persistida em um banco de dados real.

---

# Protótipo no Figma

Toda a interface da aplicação foi desenvolvida com base no seguinte protótipo:

https://www.figma.com/design/J7T5ggRKlo813JN73AHD4c/Ecommerce-Elevata?node-id=0-1&p=f&t=NS1TEHXFUCCwjjMT-0

O protótipo contempla toda a experiência da aplicação, incluindo:

- Tela de Login;
- Tela Inicial;
- Listagem de Produtos;
- Pesquisa de Produtos;
- Detalhes do Produto;
- Produtos Favoritos;
- Componentes reutilizáveis;
- Guia de cores;
- Tipografia;
- Espaçamentos;
- Ícones e elementos visuais.

Todo o desenvolvimento da interface buscou manter fidelidade ao design proposto no Figma.

---

# API utilizada

Para simular um back-end real foi utilizada a API pública **DummyJSON**.

Documentação:

https://dummyjson.com

Endpoints utilizados:

### Autenticação

https://dummyjson.com/auth/login

### Produtos

https://dummyjson.com/products

Essa API foi utilizada apenas para fins de demonstração, permitindo implementar um fluxo completo de autenticação e listagem de produtos sem a necessidade de desenvolver um servidor próprio.

---

# Tecnologias

- React Native
- Expo
- Expo Router
- TypeScript
- NativeWind (Tailwind CSS)
- Axios
- React Hook Form
- Zod
- AsyncStorage
- Zustand

---

# Estilização

Toda a interface foi desenvolvida utilizando **NativeWind**, biblioteca que traz a experiência do **Tailwind CSS** para aplicações React Native.

Com o NativeWind é possível utilizar classes utilitárias diretamente na propriedade `className`, tornando o desenvolvimento mais produtivo e mantendo uma padronização visual em toda a aplicação.

Entre as vantagens dessa abordagem estão:

- Padronização da interface;
- Código mais limpo e organizado;
- Reutilização de estilos;
- Facilidade de manutenção;
- Excelente integração com Expo e Expo Router.

O projeto foi desenvolvido utilizando a versão mais recente estável do **NativeWind**, recomendada para aplicações em produção.

---

# Executando o projeto

## Instalação

Utilizando npm:

```bash
npm install
```

Ou utilizando Yarn:

```bash
yarn
```

---

## Executando em modo de desenvolvimento

Inicie o servidor do Expo utilizando:

```bash
yarn start
```

ou

```bash
npm run start
```

Após iniciar o servidor, existem duas formas de executar a aplicação.

### Utilizando o Expo Go

1. Instale o aplicativo **Expo Go** em seu dispositivo Android ou iOS.
2. Execute `yarn start`.
3. Leia o QR Code exibido no terminal utilizando o aplicativo Expo Go.
4. A aplicação será aberta automaticamente no dispositivo.

---

### Utilizando Development Build

Caso deseje utilizar bibliotecas nativas ou executar a aplicação em um ambiente mais próximo da produção, gere uma Development Build utilizando o EAS Build.

#### Android

```bash
eas build -p android --profile development
```

#### iOS

```bash
eas build -p ios --profile development
```

Após a instalação da Development Build no dispositivo ou emulador, execute:

```bash
yarn start
```

Em seguida pressione **a** (Android) ou **i** (iOS) no terminal, ou abra a aplicação Development Build instalada no dispositivo.

---

# Arquitetura

O projeto foi estruturado seguindo o padrão arquitetural **MVVM (Model-View-ViewModel)** em conjunto com o **Expo Router**, buscando criar uma aplicação organizada, escalável e de fácil manutenção.

Enquanto o MVVM é responsável por separar as responsabilidades da aplicação, o Expo Router organiza toda a navegação utilizando o conceito de **File-Based Routing**, onde cada arquivo dentro da pasta `app` representa automaticamente uma rota.

Essa combinação proporciona:

- Separação entre interface e regras de negócio;
- Código organizado e escalável;
- Facilidade de manutenção;
- Reutilização de componentes;
- Navegação declarativa baseada em arquivos.

A estrutura principal do projeto é organizada da seguinte forma:

```text
src/
│
├── app/
│   ├── _layout.tsx
│   ├── index.tsx
│   │
│   ├── (auth)/
│   │   ├── _layout.tsx
│   │   └── login.tsx
│   │
│   └── (tabs)/
│       ├── _layout.tsx
│       ├── home.tsx
│       ├── favorites.tsx
│       └── profile.tsx
│
├── assets/
├── components/
├── constants/
├── contexts/
├── hooks/
├── models/
├── services/
├── stores/
├── styles/
├── types/
├── utils/
└── viewmodels/
```

---

# Como funciona a arquitetura MVVM

A arquitetura foi dividida em três responsabilidades principais.

## Model

Representa as entidades da aplicação.

Essa camada contém os modelos utilizados durante toda a aplicação, representando os dados recebidos da API e utilizados internamente.

Exemplos:

- Product;
- User;
- LoginRequest;
- LoginResponse.

---

## View

A View representa as telas da aplicação.

Ela é responsável apenas por renderizar a interface e encaminhar as ações do usuário para a ViewModel.

As telas não possuem regras de negócio.

Entre suas responsabilidades estão:

- Renderizar componentes;
- Exibir estados;
- Disparar eventos do usuário.

---

## ViewModel

A ViewModel concentra toda a lógica da aplicação.

Ela atua como intermediária entre a View e os serviços responsáveis pelo consumo da API.

Suas responsabilidades incluem:

- Chamadas HTTP;
- Tratamento de erros;
- Gerenciamento de estados;
- Controle de loading;
- Validações;
- Transformação de dados;
- Preparação das informações para exibição na interface.

A View apenas consome os estados e métodos disponibilizados pela ViewModel.

---

# Navegação com Expo Router

Toda a navegação foi implementada utilizando **Expo Router**.

O Expo Router utiliza o conceito de **File-Based Routing**, eliminando a necessidade de configurar manualmente uma árvore de navegação.

Cada arquivo localizado dentro da pasta `app` representa automaticamente uma rota da aplicação.

Além disso, o projeto utiliza:

- `_layout.tsx` para layouts compartilhados;
- Grupos de rotas como `(auth)` e `(tabs)`;
- Proteção de rotas autenticadas;
- Navegação aninhada;
- Organização modular das telas.

Essa abordagem torna a estrutura da aplicação mais organizada e facilita sua manutenção e evolução.

---

# Fluxo da aplicação

O fluxo principal da aplicação acontece da seguinte forma:

1. O usuário realiza o login;
2. As credenciais são enviadas para a API;
3. A sessão é armazenada localmente;
4. O usuário é redirecionado para a Home;
5. Os produtos são carregados pela API;
6. Os produtos são exibidos na interface;
7. O usuário pode pesquisar produtos;
8. O usuário pode visualizar os detalhes de um produto;
9. O usuário pode adicionar ou remover produtos dos favoritos.

---

# Organização das responsabilidades

## app/

Responsável pela navegação utilizando Expo Router.

Contém:

- Rotas da aplicação;
- Layouts compartilhados;
- Grupos de rotas;
- Configuração da navegação;
- Controle das áreas autenticadas.

---

## components/

Componentes reutilizáveis utilizados em toda a aplicação.

Exemplos:

- Buttons;
- Inputs;
- Cards;
- Headers;
- Product Card.

---

## services/

Responsável pela comunicação com a API.

Contém a configuração do Axios e os serviços responsáveis pelo consumo dos endpoints.

---

## viewmodels/

Centraliza toda a lógica de negócio da aplicação.

As telas consomem apenas os estados e funções disponibilizados pelas ViewModels.

---

## contexts/

Gerencia estados globais da aplicação.

Exemplos:

- Autenticação;
- Usuário logado;
- Favoritos.

---

## hooks/

Centraliza hooks personalizados reutilizados em diferentes módulos.

---

## models/

Representa as entidades da aplicação.

---

## utils/

Contém funções utilitárias compartilhadas.

---

## constants/

Centraliza constantes utilizadas em todo o projeto.

---

## styles/

Arquivos responsáveis pelos estilos compartilhados da aplicação.

---

# Objetivos do projeto

Este projeto foi desenvolvido com foco em:

- Organização de código;
- Arquitetura escalável;
- Separação de responsabilidades;
- Reutilização de componentes;
- Navegação com Expo Router;
- Implementação da arquitetura MVVM;
- Utilização do NativeWind para estilização;
- Consumo de APIs REST;
- Gerenciamento de autenticação;
- Boas práticas em React Native;
- Estrutura preparada para evolução do projeto.

---

# Considerações finais

O Ecommerce Elevata é um projeto de estudos desenvolvido para demonstrar a construção de uma aplicação moderna utilizando **React Native**, **Expo**, **Expo Router**, **NativeWind** e arquitetura **MVVM**.

Embora utilize uma API pública para simulação dos dados, toda a estrutura foi planejada para reproduzir a organização encontrada em aplicações reais, código organizado, escalabilidade, manutenção e reutilização de código.
