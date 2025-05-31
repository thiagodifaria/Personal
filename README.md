# Personal - Portfólio Moderno e Minimalista

> **Nota**: Este é um portfólio pessoal desenvolvido para demonstrar minhas habilidades como desenvolvedor full-stack, showcasing projetos e experiências através de uma interface moderna e interativa. O projeto utiliza tecnologias de ponta e práticas atuais de desenvolvimento web para proporcionar uma experiência única aos visitantes.

## 🌐 Demo Online

**Acesse o portfólio em tempo real**: [Em breve - Deploy em produção]

## 📕 Descrição

Personal é um portfólio full-stack moderno e minmalista desenvolvido para apresentar as habilidades, projetos e experiência profissional de Thiago Di Faria. Construído com Next.js 15 e TypeScript, o projeto emprega uma arquitetura baseada em componentes com foco em uma experiência de usuário rica e responsiva. 

O portfólio se destaca por suas animações fluidas, design responsivo e funcionalidades avançadas como tema dinâmico, formulário de contato com persistência em banco de dados. A aplicação demonstra proficiência em tecnologias modernas e práticas de desenvolvimento contemporâneas.

## 📸 Screenshots

### Hero Section com Animações Dinâmicas
*[Futura screenshot]*

### Seção de Projetos Interativa
*[Futura screenshot]*

### Formulário de Contato Funcional
*[Futura screenshot]*

## ✨ Principais Funcionalidades

- ✅ **Design Responsivo Moderno**: Interface adaptável para todos os dispositivos
- ✅ **Tema Dinâmico**: Alternância automática entre modo claro e escuro baseado na seção
- ✅ **Animações Fluidas**: Efeitos visuais customizados com componentes únicos
  - **FlipWords**: Texto dinâmico na seção Hero
  - **OrbitingCircles**: Exibição de tecnologias em órbita
  - **BlurFade**: Aparições suaves de elementos
  - **TextRevealByWord**: Revelação de texto baseada em scroll
- ✅ **Navegação Inteligente**: Header com detecção de seção ativa
- ✅ **Seção de Projetos**: Cards interativos com informações detalhadas
  - Imagens otimizadas com Next.js Image
  - Links para GitHub e deploy
  - Tecnologias utilizadas
- ✅ **Formulário de Contato Funcional**: 
  - Validação robusta client-side e server-side
  - Persistência em MongoDB
  - Sistema de notificações
- ✅ **SEO Otimizado**: Sitemap automático e meta tags

## 🛠️ Stack Tecnológica

### Frontend
- **Next.js 15**: Framework React com App Router
- **TypeScript**: Tipagem estática para robustez
- **React 18**: Biblioteca para interfaces interativas
- **Tailwind CSS**: Framework utilitário para estilização
- **Shadcn/UI**: Componentes de interface personalizáveis
- **Framer Motion**: Animações e efeitos visuais
- **Lucide React**: Biblioteca de ícones moderna

### Backend & Dados
- **MongoDB**: Banco de dados NoSQL para formulário de contato
- **Mongoose**: ODM para modelagem de dados
- **React Hook Form**: Gerenciamento de formulários
- **Zod**: Validação de esquemas

### Integrações & Ferramentas
- **Resend**: Sistema de envio de emails (configurável)
- **Firebase App Hosting**: Configuração para deploy

### Design System
- **Inter**: Fonte principal para interface
- **Space Grotesk**: Fonte para títulos e destaques
- **Source Code Pro**: Fonte monoespacial para código
- **Paleta Personalizada**: Cores cuidadosamente selecionadas

## 📋 Pré-requisitos

- Node.js 18+ ou superior
- npm, yarn ou pnpm (gerenciador de pacotes)
- MongoDB (opcional, para funcionalidade de contato)
- Chave API do Resend (opcional, para envio de emails)

## 🚀 Instalação e Configuração

### 1. Clonar o Repositório
```bash
git clone https://github.com/thiagodifaria/personal-portfolio.git
cd personal-portfolio
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

### 3. Configurar Variáveis de Ambiente
Crie um arquivo `.env.local` na raiz do projeto:

```env
# MongoDB (Opcional - para formulário de contato)
MONGODB_URI=sua_string_de_conexao_mongodb

# Resend (Opcional - para envio de emails)
RESEND_API_KEY=sua_chave_api_resend

### 4. Executar a Aplicação

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

Acesse `http://localhost:3000` para visualizar o portfólio.

## 🏗️ Estrutura do Projeto

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx           # Página inicial
│   ├── globals.css        # Estilos globais
│   └── api/               # API Routes
│       ├── submitForm/    # Endpoint do formulário
│       └── email/         # Sistema de emails
├── components/            # Componentes reutilizáveis
│   ├── ui/                # Componentes Shadcn/UI
│   ├── Header.tsx         # Navegação principal
│   ├── MobileMenu.tsx     # Menu mobile
│   ├── ProjectCard.tsx    # Card de projeto
│   └── animations/        # Componentes de animação
│       ├── FlipWords.tsx
│       ├── OrbitingCircles.tsx
│       ├── BlurFade.tsx
│       └── TextRevealByWord.tsx
├── sections/              # Seções da página
│   ├── HeroSection.tsx    # Seção hero
│   ├── IntroSection.tsx   # Introdução
│   ├── ProjectsSection.tsx # Projetos
│   └── ConnectSection.tsx # Contato
├── lib/                   # Utilitários e configurações
│   ├── utils.ts           # Funções utilitárias
│   ├── connectDB.ts       # Conexão MongoDB
│   └── validations.ts     # Esquemas Zod
├── models/                # Modelos de dados
│   └── formResponse.model.ts
├── providers/             # Context Providers
│   └── HeaderThemeProvider.tsx
├── data/                  # Dados e configurações
│   └── siteData.ts        # Dados do site
└── types/                 # Definições TypeScript
    └── index.ts
```

## 🎨 Seções do Portfólio

### Hero Section
- Apresentação dinâmica com nome e títulos rotativos
- Ícones de tecnologias em movimento orbital
- Botão de call-to-action para projetos
- Tema responsivo com transições suaves

### Intro Section
- Breve introdução pessoal e profissional
- Efeito de revelação de texto baseado em scroll
- Design minimalista e elegante

### Projects Section
- Cards interativos para cada projeto
- Imagens otimizadas e responsivas
- Informações sobre tecnologias utilizadas
- Links diretos para código e demonstração

### Connect Section
- Formulário funcional de contato
- Validação em tempo real
- Feedback visual para o usuário
- Integração com backend

## ⚙️ Configuração Avançada

### Personalização de Dados
Edite `src/data/siteData.ts` para personalizar:

```typescript
export const siteData = {
  name: "Thiago Di Faria",
  titles: ["Full Stack Developer", "UI/UX Enthusiast", "Tech Innovator"],
  description: "Desenvolvedor apaixonado por criar experiências digitais excepcionais",
  // ... mais configurações
};
```

### Configuração do Tema
Customize cores e tipografia em `tailwind.config.ts`:

```typescript
theme: {
  extend: {
    colors: {
      // Suas cores personalizadas
    },
    fontFamily: {
      // Suas fontes personalizadas
    }
  }
}
```

## 📱 Responsividade

### Breakpoints
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

### Funcionalidades Mobile
- Menu hambúrguer responsivo
- Cards adaptáveis ao toque
- Tipografia otimizada para leitura
- Gestos touch nativos

## 🔧 Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev

# Build de produção
npm run build

# Iniciar produção
npm run start

# Verificação de tipos
npm run type-check

# Linting
npm run lint
```

## 🚀 Deploy

### Vercel (Recomendado)
```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Firebase App Hosting
O projeto já está configurado para Firebase:
```bash
firebase deploy
```

### Netlify
```bash
# Build command
npm run build

# Publish directory
.next
```

## 🧪 Funcionalidades em Desenvolvimento

### Integração com IA
- **Chatbot Pessoal**: Assistente para visitantes
- **Geração de Conteúdo**: Descrições automáticas de projetos
- **Análise de Portfólio**: Insights sobre engajamento

### Melhorias Planejadas
- **Modo Offline**: PWA com Service Workers
- **Analytics**: Métricas de visitantes e engajamento
- **Blog Pessoal**: Seção para artigos técnicos
- **Testes E2E**: Cobertura completa com Playwright
- **Internacionalização**: Suporte multi-idioma

## 📊 Performance

### Otimizações Implementadas
- **Image Optimization**: Next.js Image com lazy loading
- **Code Splitting**: Carregamento de componentes sob demanda
- **Bundle Analyzer**: Análise de tamanho dos bundles
- **Caching**: Estratégias de cache agressivas

### Métricas Alvo
- **Lighthouse Score**: > 95
- **Core Web Vitals**: Todos os critérios atendidos
- **Time to Interactive**: < 3s
- **First Contentful Paint**: < 1s

## 🔐 Segurança

### Medidas Implementadas
- **Validação de Input**: Zod para sanitização
- **CSRF Protection**: Tokens para formulários
- **Rate Limiting**: Proteção contra spam
- **Sanitização**: Prevenção de XSS

## 📈 SEO e Acessibilidade

### SEO
- Meta tags dinâmicas
- Sitemap automático
- Schema.org markup
- Open Graph tags

### Acessibilidade
- Navegação por teclado
- Screen reader support
- Contraste adequado (WCAG 2.1)
- Focus management

## 🤝 Contribuições

Embora este seja um projeto pessoal, contribuições são bem-vindas:

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📜 Licença

Este projeto está licenciado sob a licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes.

## 📞 Contato

**Thiago Di Faria**
- Email: [thiagodifaria@gmail.com](mailto:thiagodifaria@gmail.com)
- LinkedIn: [linkedin.com/in/thiagodifaria](https://www.linkedin.com/in/thiago-di-faria-34304a34b/)
- GitHub: [github.com/thiagodifaria](https://github.com/thiagodifaria)

**Link do Projeto**: [https://github.com/thiagodifaria/Personal](https://github.com/thiagodifaria/Personal)

---

*Desenvolvido com ❤️ e muito ☕ por Thiago Di Faria*

**Tecnologias**: Next.js 15 + TypeScript + Tailwind CSS + MongoDB  
**Status**: Em desenvolvimento ativo  
**Última atualização**: Maio 2025