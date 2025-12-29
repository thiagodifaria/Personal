

const ptTranslations = {
  siteData: {
    personalInfoName: "Thiago Di Faria",
    heroWords: [
      "Desenvolvedor Front-End",
      "Especialista em Python",
      "Projetos Back-End Escaláveis",
      "Designer UI/UX",
      "Código Limpo e Manutenível"
    ],
    heroSubtitle: "Desenvolvedor apaixonado por criar aplicações e website únicos, inovadores e eficientes.",
    introTagline: "Eu crio experiências web intuitivas e responsivas que combinam design estético com elegância funcional.",
    navLinks: {
      sobre: "Sobre",
      projetos: "Projetos",
      contato: "Contato",
    },
    socialMediaTooltips: {
      Github: "GitHub",
      Instagram: "Instagram",
      LinkedIn: "LinkedIn",
      Email: "Email",
      Resume: "Currículo",
    },
    projects: {
      helixCore: {
        title: "Helix-Core",
        shortDescription: "Runtime de backend unificado com Gateway, Cache e Queue em um único binário.",
        description: "Runtime de infraestrutura backend unificado combinando API Gateway, Cache em Memória e Message Queue em um único binário de alta performance. Camada Python: asyncio com uvloop, aiohttp, PyQt6 (GUI estilo Windows XP), Typer CLI, integração Prometheus/Loki/Grafana. Camada C++: Core engine com operações de memória SIMD AVX2 (memcpy, memset, memcmp, memchr em Assembly x64), hash table sharded com 16 locks de leitura-escrita, parser RESP3 zero-copy, alocador slab com múltiplas classes de tamanho. Features: Rate Limiting Token Bucket, Circuit Breaker com estados OPEN/HALF-OPEN/CLOSED, autenticação JWT, consumer groups para queue, commit log append-only com segmentos, Dead Letter Queue. Benchmarks: Cache nativo 500k ops/s GET, 400k ops/s SET; Gateway 50k req/s; Queue 200k msg/s."
      },
      begriff: {
        title: "Begriff",
        shortDescription: "Plataforma empresarial de inteligência financeira com arquitetura híbrida.",
        description: "Plataforma empresarial completa de inteligência financeira que demonstra modernização de sistemas legados através de arquitetura híbrida inteligente. O projeto une COBOL (sistemas legados bancários), C++ (processamento de alta performance) e Python (APIs modernas com FastAPI) em uma sinfonia tecnológica enterprise-grade. Implementa Clean Architecture com Domain-Driven Design (DDD), garantindo modularidade e manutenibilidade. A arquitetura inclui camada de adaptação para integração transparente entre linguagens, sistema de cache distribuído e processamento transacional ACID. Projeto ambicioso que mostra profundo entendimento de sistemas financeiros e migração gradual de legado."
      },
      codex: {
        title: "Codex",
        shortDescription: "Aplicação web de produtividade pessoal para gerenciamento integrado.",
        description: "Aplicação web full-stack de produtividade pessoal construída com Next.js 14, TypeScript e Firebase para autenticação e persistência em tempo real. O sistema integra múltiplas funcionalidades: diário pessoal com editor rich-text, sistema de tarefas com priorização inteligente, gerenciamento de projetos com milestones e metas de longo prazo com tracking de progresso. Interface responsiva com Tailwind CSS, tema dark/light, e UX otimizada para produtividade. Implementa padrões modernos de React como Server Components, Suspense boundaries e otimistic updates para experiência fluida."
      },
      tesoriDiBacco: {
        title: "Tesori di Bacco",
        shortDescription: "Plataforma exclusiva para um clube de vinhos premium italiano.",
        description: "Aplicação web front-end sofisticada para um clube de vinhos premium inspirado na tradição italiana. Desenvolvida com React 18, TypeScript e Vite para build otimizado. O design elegante utiliza Tailwind CSS com paleta de cores refinada, tipografia premium e animações suaves. Features incluem: catálogo interativo de vinhos com filtros avançados, sistema de favoritos, cards com informações sommelier detalhadas, seção de harmonizações gastronômicas e área de membership. Layout totalmente responsivo com mobile-first approach e performance Lighthouse score acima de 95."
      },
      lexiconCLI: {
        title: "LexiconCLI",
        shortDescription: "Sistema de análise financeira interativo para ambiente de terminal.",
        description: "Sistema de análise financeira interativo e de última geração em Python para ambiente de terminal. Oferece: monitoramento de ativos em tempo real com dados de mercado via APIs financeiras, gráficos ASCII interativos com Plotext, análise técnica com indicadores (RSI, MACD, Bollinger Bands), previsões probabilísticas usando TensorFlow e Scikit-learn, e quantificação de incerteza estatística. Interface rica construída com biblioteca Rich para tabelas coloridas, progress bars e formatação profissional. Sistema de alertas personalizáveis e exportação de relatórios. Executável standalone disponível."
      },
      moodAPI: {
        title: "MoodAPI",
        shortDescription: "API para análise de sentimentos em textos utilizando NLP.",
        description: "API REST robusta para análise de sentimentos utilizando modelos Transformer state-of-the-art (BERT, RoBERTa). Oferece análise multilíngue (português, inglês, espanhol) com classificação de sentimentos básicos e detalhados, confiança por token, e extração de entidades nomeadas. Arquitetura inclui: FastAPI com async/await, cache Redis inteligente com TTL configurável (90%+ hit rate), fila de processamento para requests em lote, sistema de analytics com dashboards, armazenamento de histórico em MongoDB, rate limiting por tier, e documentação OpenAPI completa. Containerizado com Docker e pronto para deploy em produção."
      },
      caninana: {
        title: "Caninana",
        shortDescription: "Engine antivírus educacional com detecção por assinaturas.",
        description: "Projeto educacional que implementa conceitos fundamentais de um antivírus moderno. O core engine em C++ oferece: scanning de arquivos com detecção por assinaturas (hash matching), análise heurística básica, sistema de quarentena seguro, e atualização automática de definições de vírus. Interface gráfica em Python/Tkinter para gerenciamento e monitoramento. Arquitetura modular com CMake, sistema de logging, relatórios de scan, e whitelist configurável. Demonstra conhecimento profundo de segurança cibernética, manipulação de arquivos em baixo nível e desenvolvimento de sistemas."
      },
      consiliumAPI: {
        title: "ConsiliumAPI",
        shortDescription: "API REST enterprise-grade com CQRS, Event Sourcing e observabilidade.",
        description: "API REST enterprise-grade para gerenciamento de projetos e tarefas, demonstrando arquitetura de nível sênior. Stack: Spring Boot 3.2.5, Java 17, PostgreSQL 16. Features avançadas incluem: Autenticação JWT com Refresh Tokens (15min access + 7 dias refresh) com rotação automática; Redis Cache com 80% de redução de latência (100ms → 20ms, hit rate 85%+); RabbitMQ para processamento assíncrono com Dead Letter Queue; Padrão CQRS com serviços separados de leitura/escrita; Event Sourcing com trilha de auditoria imutável em JSONB; Rate Limiting Token Bucket (10-1000 req/min por role); Stack de Observabilidade completa (Grafana, Loki, Tempo, Prometheus, OpenTelemetry); 105+ testes automatizados (unitários, integração, E2E) com >80% de cobertura JaCoCo; Scripts de automação (build.sh, dev.sh, test.sh); Docker Compose com 7 serviços. Throughput: >2000 req/s, latência P95 <20ms."
      },
      sphinx: {
        title: "Sphinx",
        shortDescription: "Plataforma autônoma de engenharia de nuvem orientada por IA.",
        description: "Plataforma de engenharia de nuvem autônoma com interface TUI rica, desenvolvida em Python com framework Textual. Features principais incluem: Geração de IaC orientada por IA via Google Gemini que transforma linguagem natural em código Terraform válido; Dashboard de observabilidade com métricas Prometheus em tempo real e gráficos live; Detecção inteligente de anomalias com regras YAML e plugins Python extensíveis; Sugestões de otimização de custos com code fixes gerados por IA; Fluxo completo Terraform (plan/apply) integrado na TUI; Gerenciamento multi-workspace para diferentes ambientes (dev/staging/prod); Histórico de ações com trilha de auditoria SQLite; Arquitetura Clean Hexagonal com Dependency Injection. Interface com múltiplas abas: Chat de Geração, Dashboard de Otimização, Histórico, Workspaces. Executável standalone disponível."
      },
      httpsServer: {
        title: "HTTPS Server",
        shortDescription: "Servidor HTTPS de alta performance com otimizações SIMD.",
        description: "Servidor HTTPS de alta performance implementado em C++17 com otimizações assembly hand-coded. Highlights de performance incluem: Operações de rede SIMD com AVX2 (Base64 vetorizado, UUID v4 com hardware RNG via RDRAND, hex encoding otimizado); Parsing HTTP acelerado com detecção de headers via VPCMPEQB 32-byte e extração method/URI em paralelo; Criptografia avançada (ChaCha20-Poly1305, Blake3 tree hashing, X25519 Montgomery ladder, AES-NI assembly hand-optimized, SHA-256 AVX); Compressão multi-algoritmo (Deflate, LZ4 ultra-rápido, Brotli para web); Engine de validação SIMD para JSON, UTF-8 vetorizada e sanitização de entrada. Benchmarks: AES-NI 3.51 GB/s throughput, SHA-256 2.1 GB/s. Interface web de benchmarks em tempo real, TLS 1.3, thread pool, logging estruturado. Cross-platform com CMake e NASM."
      },
      env: {
        title: "ENV",
        shortDescription: "Framework de automação para configuração de ambientes Windows.",
        description: "Framework de automação PowerShell enterprise-grade para setup de ambientes de desenvolvimento Windows. Arquitetura modular SOLID com: Suporte multi-package manager (Chocolatey, Winget, Scoop) com fallback automático e health checks; Instalação paralela de até 10 pacotes simultâneos (10x mais rápido que sequencial); Gerenciamento de estado com rollback automático baseado em sessão em caso de falhas; Sistema de backup com versionamento, timestamps e restore granular; Cache inteligente baseado em TTL (96% redução em operações redundantes); Resolução automática de dependências entre pacotes; Validação SHA256/SHA512 de downloads; 50+ pacotes pré-configurados em 8 categorias; Customização de terminal (Oh My Posh, Starship, 5 Nerd Fonts, ferramentas CLI modernas: bat, eza, fzf, ripgrep, zoxide); Auto-configuração Git com 15+ aliases profissionais; Testes Pester 5.0+ com >70% de cobertura; Pipeline CI/CD GitHub Actions."
      },
      schemaAPI: {
        title: "SchemaAPI",
        shortDescription: "API de processamento inteligente de documentos com IA.",
        description: "API para processamento inteligente de documentos (PDFs, DOCX, TXT, CSV, XLSX) com pipeline ML avançado. Features incluem: Sumarização híbrida abstractiva/extractiva com map-reduce para docs longos; Extração de itens de ação com predição de responsável e prazo via NER e classificação; Construção automática de grafo de conhecimento com descoberta de relacionamentos; Busca semântica com embeddings SentenceTransformers e indexação HNSW para <200ms de latência; Detecção de padrões temporais, tendências e anomalias; Classificação multi-label de documentos; Processamento multilíngue (PT, EN, ES) com modelos Transformer unificados. Arquitetura híbrida: Core Rust para parsing de alta performance e I/O, Python para pipeline ML (Hugging Face, spaCy, scikit-learn). Infraestrutura: FastAPI async, Redis cache (75%+ hit rate), PostgreSQL com pgvector, rate limiting, trilha de auditoria, OpenTelemetry. Benchmarks: <3s por documento, >1000 docs/hora em batch."
      },
    },
  },
  header: {
    openNavigationMenu: "Abrir menu de navegação",
  },
  languageSwitcher: {
    pt: "PT",
    en: "EN",
    switchToPortugueseAriaLabel: "Mudar para Português",
    switchToEnglishAriaLabel: "Mudar para Inglês",
  },
  projectsPage: {
    title: "Meus Projetos",
    description: "Bem-vindo à minha galeria de projetos. Aqui você encontrará uma coleção diversificada dos trabalhos que desenvolvi, desde aplicações web complexas a APIs robustas e ferramentas de análise. Cada card abaixo detalha os desafios, soluções e tecnologias empregadas.",
    noProjectsFound: "Nenhum projeto encontrado nesta categoria.",
  },
  homePage: {
    projectsSectionTitle: "Meus Projetos Recentes",
    projectsSectionDescription: "Aqui estão alguns dos projetos em que trabalhei. Cada um representa um desafio único e uma oportunidade de aprendizado.",
    connectSectionTitle: "Entre em Contato",
    connectSectionDescription: "Tem alguma pergunta, proposta ou apenas quer dizer olá? Preencha o formulário abaixo.",
  },
  sobrePage: {
    mainTitle: "Sobre Mim",
    minhaJornadaTitle: "Minha Jornada",
    minhaJornadaP1: "Prazer, sou o Thiago Di Faria. Desenvolvedor de software de Belo Horizonte, focado em backend. Minha trajetória na tecnologia começou com uma escolha pragmática. Enquanto meus interesses flutuavam em torno da arquitetura e da combinação de arte e história, tomei uma decisão consciente e ambiciosa de seguir pela tecnologia, reconhecendo o potencial de crescimento e as oportunidades para construir uma carreira sólida. O que começou com uma decisão de carreira objetiva, no entanto, logo se tornou um campo de genuíno fascínio, onde encontrei um novo tipo de criatividade na solução de problemas complexos.",
    minhaJornadaP2: "Tudo se iniciou em 2023 com o curso \"CS50's Introduction to Programming with Python\" de Harvard. Fiquei admirado não apenas com a linguagem, mas com as infinitas capacidades de criação e a versatilidade que ela oferece. Esse potencial me levou a buscar uma formação e, após uma breve passagem por Sistemas de Informação, migrei em agosto de 2024 para Análise e Desenvolvimento de Sistemas na PUC Minas, um caminho mais prático e direto ao ponto.",
    minhaJornadaP3: "No início de 2025, tive a oportunidade que definiu meu foco: fui o protagonista no desenvolvimento de um aplicativo CRM desktop completo, construído inteiramente em Python. Essa experiência imersiva me ensinou sobre responsabilidade, autonomia e, acima de tudo, me fez descobrir que, embora eu admirasse o frontend, era nos bastidores, na lógica e na estruturação de dados do backend, que eu realmente me sentia em casa.",
    minhaJornadaP4: "Essa afinidade me move a criar. Desde então, investi no meu portfólio com projetos como o desenvolvimento de uma API própria para análise de sentimentos, a criação de um sistema de análise financeira com dados reais do mercado e até uma incursão no frontend para dar vida a um site inspirado em uma revista de vinhos.",
    minhaJornadaP5: "Tenho um grande orgulho das minhas raízes e do meu estado, Minas Gerais: sua culinária inconfundível, sua rica história de luta e cultura singular me encantam. Dentre minhas diversas ascendências, a italiana é a mais especial. Sinto-me conectado à sua língua, aos costumes e à forma como essa cultura se entrelaçou a brasileira, especialmente aqui em Minas. Seja pela marcante influência na gastronomia ou pelo impacto cultural, vejo essa herança como parte da minha identidade. Fora do universo do código, sou um entusiasta de esportes. Meus favoritos são o MMA e o futebol. No MMA, sou um grande fã de Georges St-Pierre (GSP) e no futebol como um bom mineiro, sou atleticano de carteirinha, torcedor do Galo. Também acompanho de perto a Fórmula 1, com admiração por pilotos como Sebastian Vettel e, claro, o Ayrton Senna. Meu gosto musical é eclético e reflete minhas diferentes fases, variando entre Kanye West, Henrique & Juliano, WS da Igrejinha, Duke Dumont e Deftones.",
    minhaJornadaP6: "Sinta-se à vontade para explorar meu portfólio, conhecer meus projetos e entrar em contato. Estou sempre aberto a novos desafios e parcerias.",
    formacaoCompetenciasTitle: "Formação e Competências",
    formacaoCompetenciasDescription: "Abaixo, detalho minha formação acadêmica, competências em idiomas e o compromisso com o aprendizado contínuo através de cursos de especialização.",
    formacaoAcademicaTitle: "Formação Acadêmica",
    formacaoAcademicaGraduacao: "Graduação: Análise e Desenvolvimento de Sistemas",
    formacaoAcademicaInstituicao: "Instituição: Pontifícia Universidade Católica de Minas Gerais (PUC Minas)",
    formacaoAcademicaInicio: "Início: Agosto de 2024",
    idiomasTitle: "Idiomas",
    idiomasPt: "Português: Nativo",
    idiomasEn: "Inglês: Proficiente (estudo contínuo desde a infância em cursos e escolas particulares)",
    idiomasIt: "Italiano: Intermediário (cursado por 1 ano na UFMG por razões pessoais e de afinidade cultural)",
    idiomasDe: "Alemão: Básico (iniciado durante a faculdade)",
    educacaoContinuadaTitle: "Educação Continuada e Cursos de Destaque (2025)",
    educacaoContinuadaDescription: "Acredito que a evolução na carreira de tecnologia é movida pela curiosidade e pelo estudo constante. Em 2025, estou focado em aprofundar meus conhecimentos nas seguintes áreas, através de cursos de instituições renomadas:",
    algoritmosTitle: "Algoritmos e Estruturas de Dados:",
    algoritmosC1: "The Last Algorithms Course You'll Need (Frontend Masters)",
    algoritmosC2: "CS50's Introduction to Computer Science (Harvard)",
    pythonDSTitle: "Python, Data Science e Inteligência Artificial:",
    pythonDSC1: "CS50's Introduction to Programming with Python (Harvard)",
    pythonDSC2: "Using Python for Research (Harvard)",
    pythonDSC3: "Data Science: Machine Learning (Harvard)",
    pythonDSC4: "Machine Learning and AI with Python (Harvard)",
    pythonDSC5: "Data Science: R Basics (Harvard)",
    tecnologiasNegociosTitle: "Tecnologias e Negócios:",
    tecnologiasNegociosC1: "CS50's Introduction to Cybersecurity (Harvard)",
    tecnologiasNegociosC2: "Business Analytics (Harvard)",
    tecnologiasNegociosC3: "Formação Tonnie Java and AI Europe (Digital Innovation One)",
  },
  contactForm: {
    nameLabel: "Nome",
    namePlaceholder: "Seu nome completo",
    emailLabel: "Email",
    emailPlaceholder: "seu@email.com",
    messageLabel: "Mensagem",
    messagePlaceholder: "Sua mensagem...",
    submitButton: "Enviar Mensagem",
    submitButtonLoading: "Enviando...",
    successTitle: "Mensagem Enviada!",
    successDescription: "Obrigado pelo seu contato. Retornarei em breve.",
    errorTitle: "Erro ao Enviar",
    errorDescriptionDefault: "Ocorreu um problema. Tente novamente.",
  },
  projectCard: {
    codeButton: "Código",
    siteButton: "Ver Site",
    inDevelopment: "Em Desenvolvimento",
    detailsButton: "Detalhes",
    technologiesTitle: "Tecnologias",
    exploreButton: "Explorar mais...",
  },

  projectDetail: {
    backButton: "Voltar aos projetos",
    aboutTitle: "Sobre o Projeto",
    technologiesTitle: "Tecnologias Utilizadas",
    viewCode: "Ver Código",
    viewSite: "Ver Site",
    download: "Download",
  },
  projectCategories: {
    all: "Todos",
    backend: "Backend",
    frontend: "Frontend",
    fullstack: "Full Stack",
    cli: "CLI / Tools",
    inDevelopment: "Em Desenvolvimento",
  },
  zodValidation: {
    nameMin: "O nome deve ter pelo menos 2 caracteres.",
    nameMax: "O nome não pode exceder 50 caracteres.",
    emailInvalid: "Por favor, insira um email válido.",
    messageMin: "A mensagem deve ter pelo menos 10 caracteres.",
    messageMax: "A mensagem não pode exceder 1000 caracteres.",
  },
} as const;

export default ptTranslations;
