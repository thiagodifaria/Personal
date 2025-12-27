# Codex - Aplicação de Produtividade Pessoal

> **Nota**: Codex é uma aplicação web de produtividade pessoal projetada para auxiliar no gerenciamento integrado de atividades como diário pessoal, listas de tarefas, projetos e metas de longo prazo. Construído com tecnologias modernas e foco na experiência do usuário.

## 🌐 Demo Online

**Acesse a aplicação em tempo real**: [Em breve - Deploy em produção]

## 📕 Descrição

Codex é uma aplicação de produtividade pessoal robusta e moderna que integra múltiplas funcionalidades de organização em uma única plataforma. Desenvolvido com Next.js 15 e TypeScript, o projeto utiliza uma arquitetura baseada em componentes com React, empregando Tailwind CSS e Shadcn UI para criar uma interface elegante e intuitiva.

A aplicação se destaca por sua abordagem holística à produtividade, combinando funcionalidades de diário pessoal, gerenciamento de tarefas e projetos, acompanhamento de metas e hábitos em uma experiência unificada e fluida.

## 📸 Screenshots

### Dashboard Personalizado
*[Futura screenshot]*

### Gerenciamento de Projetos
*[Futura screenshot]*

### Sistema de Metas e Hábitos
*[Futura screenshot]*

## ✨ Principais Funcionalidades

- ✅ **Dashboard Intuitivo**: Resumo diário com entradas do diário, tarefas pendentes, progresso de projetos e check-ins de hábitos
- ✅ **Editor de Texto Rico (Tiptap)**: Editor integrado com suporte a formatação avançada
  - Negrito, itálico, títulos e listas
  - Citações e blocos de código
  - Hiperlinks e conteúdo estruturado
- ✅ **Diário Digital (Journal)**: 
  - Entradas de diário datadas
  - Navegação por calendário
  - Conteúdo rico com títulos e formatação
- ✅ **Lista de Tarefas Global**: 
  - Gerenciamento de tarefas independentes de projetos
  - Sistema de prioridades (mais baixa a mais alta)
  - Status personalizáveis: "a fazer", "em progresso", "bloqueada", "em revisão", "concluída"
  - Datas de vencimento e notificações
- ✅ **Gerenciamento de Projetos Completo**:
  - Criação, listagem e edição de projetos
  - Visão geral detalhada de cada projeto
  - Sistema de marcos (milestones) e roadmap
  - Status de projeto: "planejamento", "ativo", "em espera", "concluído", "arquivado"
  - Links para recursos externos
- ✅ **Sistema de Metas e Progresso**:
  - Definição de metas de longo prazo
  - Sub-metas para quebra de objetivos
  - Rastreador de hábitos integrado
- ✅ **Autenticação Completa**: Login, cadastro e recuperação de senha
- ✅ **Perfil Personalizável**: Avatar, biografia e informações pessoais
- ✅ **Configurações Avançadas**:
  - Preferências de notificações (e-mail e push)
  - Temas: claro, escuro ou sistema
  - Configurações de idioma e fuso horário
  - Gerenciamento de dados e privacidade

## 🛠️ Stack Tecnológica

### Framework & Core
- **Next.js 15.2.3**: Framework React com App Router
- **TypeScript**: Tipagem estática para robustez
- **React 18**: Biblioteca para interfaces interativas

### Interface & Design
- **Tailwind CSS**: Framework utilitário para estilização
  - **@tailwindcss/typography**: Plugin para conteúdo tipográfico
  - **tailwindcss-animate**: Animações personalizadas
- **Shadcn UI**: Sistema completo de componentes
  - Accordion, AlertDialog, Avatar, Badge, Calendar
  - Checkbox, Dialog, DropdownMenu, Menubar, Popover
  - Progress, ScrollArea, Select, Separator, Sheet
  - Skeleton, Slider, Switch, Table, Tabs, Textarea
  - Toast, Tooltip e muito mais
- **Lucide React**: Biblioteca de ícones moderna
- **Fonte Inter**: Tipografia principal para interface

### Formulários & Validação
- **React Hook Form**: Gerenciamento de formulários performático
- **Zod**: Validação de esquemas robusta

### Estado & Cache
- **TanStack Query (React Query)**: Gerenciamento de estado servidor
- **@tanstack-query-firebase/react**: Integração com Firebase

### Editor & Conteúdo
- **Tiptap**: Editor de texto rico e extensível
  - **@tiptap/starter-kit**: Funcionalidades essenciais
  - **@tiptap/extension-placeholder**: Textos de placeholder

### Internacionalização
- **i18next**: Sistema de internacionalização
- **react-i18next**: Integração com React
- **i18next-browser-languagedetector**: Detecção automática de idioma
- **Idiomas Suportados**: Inglês, Espanhol e Português (Brasil)

### Utilitários & Ferramentas
- **clsx & tailwind-merge**: Gerenciamento de classes CSS
- **date-fns**: Manipulação e formatação de datas
- **patch-package**: Aplicação de patches em dependências

### Backend & Hospedagem
- **Firebase**: Plataforma completa de backend
- **Firebase App Hosting**: Hospedagem com configuração otimizada

### Desenvolvimento
- **ESLint**: Linting de código
- **tsx**: Execução de scripts TypeScript
- **turbopack**: Bundler de desenvolvimento do Next.js

## 📋 Pré-requisitos

- Node.js 18+ ou superior
- npm, yarn ou pnpm (gerenciador de pacotes)
- Conta Firebase (para backend e autenticação)
- Configuração de projeto Firebase

## 🚀 Instalação e Configuração

### 1. Clonar o Repositório
```bash
git clone https://github.com/seu-usuario/codex.git
cd codex
```

### 2. Instalar Dependências
```bash
# Usando npm
npm install

# Usando yarn
yarn install

# Usando pnpm
pnpm install
```

### 3. Configurar Firebase
Crie um projeto no [Firebase Console](https://console.firebase.google.com/) e configure:

1. Authentication (Email/Password)
2. Firestore Database
3. Storage (opcional)

### 4. Configurar Variáveis de Ambiente
Crie um arquivo `.env.local` na raiz do projeto:

```env
# Firebase Configuration
NEXT_PUBLIC_FIREBASE_API_KEY=sua_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=seu_projeto.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=seu_projeto_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=seu_projeto.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=seu_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=seu_app_id

# Outras configurações (opcional)
NEXT_PUBLIC_APP_ENV=development
```

### 5. Executar a Aplicação

```bash
# Desenvolvimento
npm run dev
# ou
yarn dev
# ou
pnpm dev

# Build de produção
npm run build

# Iniciar produção
npm run start

# Linting
npm run lint
```

Acesse `http://localhost:3000` para visualizar a aplicação.

## 🏗️ Estrutura do Projeto

```
src/
├── app/                      # Next.js App Router
│   ├── (auth)/              # Grupo de rotas de autenticação
│   │   ├── login/           # Página de login
│   │   ├── register/        # Página de cadastro
│   │   └── forgot-password/ # Recuperação de senha
│   ├── (app)/               # Grupo principal da aplicação
│   │   ├── dashboard/       # Dashboard principal
│   │   ├── journal/         # Sistema de diário
│   │   ├── tasks/           # Lista de tarefas global
│   │   ├── projects/        # Gerenciamento de projetos
│   │   ├── goals/           # Sistema de metas
│   │   ├── profile/         # Perfil do usuário
│   │   └── settings/        # Configurações
│   ├── layout.tsx           # Layout principal
│   ├── page.tsx             # Página inicial
│   └── globals.css          # Estilos globais
├── components/              # Componentes reutilizáveis
│   ├── ui/                  # Componentes Shadcn UI
│   ├── auth/                # Componentes de autenticação
│   ├── journal/             # Componentes do diário
│   ├── tasks/               # Componentes de tarefas
│   ├── projects/            # Componentes de projetos
│   ├── goals/               # Componentes de metas
│   └── layout/              # Componentes de layout
│       ├── Sidebar.tsx      # Barra lateral principal
│       ├── Header.tsx       # Cabeçalho da aplicação
│       └── Navigation.tsx   # Navegação principal
├── lib/                     # Utilitários e configurações
│   ├── utils.ts             # Funções utilitárias
│   ├── firebase.ts          # Configuração Firebase
│   ├── validations.ts       # Esquemas Zod
│   └── constants.ts         # Constantes da aplicação
├── types/                   # Definições TypeScript
│   └── codex.ts             # Tipos específicos do Codex
├── hooks/                   # Custom hooks
│   ├── useAuth.ts           # Hook de autenticação
│   ├── useTheme.ts          # Hook de tema
│   └── useLocalStorage.ts   # Hook de localStorage
└── providers/               # Context Providers
    ├── AuthProvider.tsx     # Provider de autenticação
    └── ThemeProvider.tsx    # Provider de tema
```

## 🎨 Interface e Design

### Sistema de Temas
- **Tema Claro**: Interface limpa e moderna
- **Tema Escuro**: Redução da fadiga visual
- **Sistema**: Segue preferências do SO

### Tipografia
- **Fonte Principal**: Inter - legibilidade otimizada
- **Hierarquia**: Títulos H1-H6 bem definidos
- **Corpo de Texto**: Espaçamento e contraste adequados

### Componentes Visuais
- **Cartões**: Cantos arredondados e bordas sutis
- **Animações**: Transições suaves e feedback visual
- **Hover Effects**: Interações intuitivas
- **Loading States**: Indicadores de carregamento elegantes

## ⚙️ Funcionalidades Detalhadas

### Dashboard
O centro de comando do Codex oferece:
- Resumo diário personalizado
- Tarefas pendentes priorizadas
- Progresso de projetos ativos
- Check-ins de hábitos
- Marcos próximos

### Editor Tiptap
Editor rico com funcionalidades:
- **Formatação**: Negrito, itálico, sublinhado
- **Estrutura**: Títulos, listas, citações
- **Código**: Blocos de código com syntax highlighting
- **Links**: Inserção e edição de hiperlinks
- **Placeholder**: Textos de ajuda contextuais

### Sistema de Tarefas
Gerenciamento completo com:
- **Prioridades**: 5 níveis de prioridade
- **Status**: Workflow customizável
- **Datas**: Vencimentos e lembretes
- **Categorização**: Tags e filtros

### Projetos
Organização profissional com:
- **Visão Geral**: Descrição e objetivos
- **Tarefas**: Lista específica do projeto
- **Roadmap**: Marcos e cronograma
- **Recursos**: Links e documentação
- **Status**: Acompanhamento de progresso

## 📱 Responsividade

### Breakpoints
- **Mobile**: < 768px - Interface touch-first
- **Tablet**: 768px - 1024px - Layout adaptado
- **Desktop**: > 1024px - Experiência completa

### Adaptações Mobile
- Barra lateral retrátil
- Navegação por gestos
- Botões otimizados para touch
- Menu contextual adaptado

## 🔧 Scripts Disponíveis

```bash
# Desenvolvimento com Turbopack
npm run dev

# Build otimizado
npm run build

# Produção
npm run start

# Linting
npm run lint

# Verificação de tipos
npm run type-check

# Aplicar patches
npm run postinstall
```

## 🚀 Deploy

### Firebase App Hosting (Recomendado)
```bash
# Configurar Firebase CLI
npm install -g firebase-tools
firebase login

# Deploy
firebase deploy
```

### Vercel
```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy com configurações automáticas
vercel
```

### Netlify
- Build command: `npm run build`
- Publish directory: `.next`
- Configurar variáveis de ambiente no painel

## 🔐 Segurança e Privacidade

### Autenticação
- Sistema seguro via Firebase Auth
- Validação client-side e server-side
- Tokens JWT para sessões

### Dados
- Criptografia em trânsito e repouso
- Validação rigorosa com Zod
- Sanitização de inputs

### Privacidade
- Dados pessoais protegidos
- Configurações de privacidade granulares
- Conformidade com regulamentações

## 📊 Performance

### Otimizações
- **Code Splitting**: Carregamento sob demanda
- **Tree Shaking**: Eliminação de código não utilizado
- **Caching**: Estratégias agressivas de cache
- **Lazy Loading**: Componentes e imagens

### Métricas Alvo
- **Core Web Vitals**: Todos os critérios atendidos
- **Bundle Size**: Otimizado para carregamento rápido
- **Runtime Performance**: Interações fluidas

## 🌍 Internacionalização

### Idiomas Suportados
- **Português (Brasil)**: Idioma padrão
- **Inglês**: Tradução completa
- **Espanhol**: Suporte internacional

### Funcionalidades i18n
- Detecção automática de idioma
- Formatação de datas localizada
- Números e moedas regionais
- Textos de interface traduzidos

## 🧪 Funcionalidades Planejadas

### Próximas Implementações
- **Colaboração**: Compartilhamento de projetos
- **API Pública**: Integração com terceiros
- **Mobile App**: Aplicativo nativo
- **Sincronização Offline**: PWA completo
- **Relatórios**: Analytics de produtividade
- **Integrações**: Calendar, GitHub, Slack

### Melhorias Contínuas
- **Performance**: Otimizações constantes
- **UX**: Feedback dos usuários
- **Acessibilidade**: Conformidade WCAG
- **Testes**: Cobertura completa

## 🤝 Contribuições

Contribuições são bem-vindas para melhorar o Codex:

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/NovaFuncionalidade`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova funcionalidade'`)
4. Push para a branch (`git push origin feature/NovaFuncionalidade`)
5. Abra um Pull Request

### Diretrizes
- Siga os padrões de código existentes
- Escreva testes para novas funcionalidades
- Documente mudanças significativas
- Mantenha commits organizados

## 📜 Licença

Este projeto está licenciado sob a licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes.

## 📞 Contato

Para dúvidas, sugestões ou colaborações:

- **Email**: [seu-email@example.com](mailto:seu-email@example.com)
- **LinkedIn**: [linkedin.com/in/seu-perfil](https://linkedin.com/in/seu-perfil)
- **GitHub**: [github.com/seu-usuario](https://github.com/seu-usuario)

**Link do Projeto**: [https://github.com/seu-usuario/codex](https://github.com/seu-usuario/codex)

---

**Tecnologias**: Next.js 15 + TypeScript + Tailwind CSS + Firebase  
**Status**: Em desenvolvimento ativo