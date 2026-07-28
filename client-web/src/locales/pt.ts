

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
        shortDescription: "Uma experiência digital para descobrir e assinar vinhos italianos selecionados.",
        description: "Tesori di Bacco é uma experiência digital criada para um clube de vinhos premium inspirado na tradição italiana. Em vez de apresentar uma simples vitrine de produtos, o projeto convida a pessoa a descobrir rótulos, entender suas notas de degustação, explorar harmonizações e conhecer histórias contadas por sommeliers. O catálogo permite filtrar e pesquisar vinhos, salvar favoritos e navegar por páginas ricas em contexto, fazendo a descoberta parecer mais próxima de uma boa conversa em uma enoteca do que de uma compra comum.\n\nA jornada continua com seis níveis de assinatura, benefícios exclusivos em restaurantes parceiros e o diário editorial do clube. Há ainda verificação de idade, uma autenticação simulada com sessões persistentes e uma área pensada para cada perfil de associado. React 19, TypeScript, Vite e Tailwind CSS sustentam uma interface elegante, rápida e responsiva, demonstrando como design, conteúdo e regras de negócio podem trabalhar juntos para dar identidade a uma marca premium."
      },
      erp: {
        title: "ERP",
        shortDescription: "Sistema central para organizar vendas, clientes, finanças e operações de uma empresa.",
        description: "Este projeto imagina o ERP como o sistema operacional de uma empresa, não como um conjunto solto de telas de cadastro. Ele conecta a jornada inteira de uma operação: um contato pode virar oportunidade, proposta, contrato e cobrança; a movimentação chega ao financeiro, gera documentos, aciona automações e passa a aparecer nos relatórios. Dessa forma, vendas, clientes, assinaturas, faturamento, pagamentos, compras, estoque, documentos e indicadores deixam de viver em planilhas e ferramentas desconectadas.\n\nA plataforma também foi desenhada para situações reais de crescimento e controle. Ela atende múltiplas empresas com dados isolados, organiza permissões, limites e evidências de operação, e prevê integrações com bancos, meios de pagamento, assinatura digital, comunicação, dados de mercado e ferramentas de inteligência artificial. A arquitetura distribui responsabilidades entre serviços em TypeScript, Python, Rust, Go, C#, Elixir e PostgreSQL, enquanto uma interface React ajuda a documentar, testar e operar as APIs."
      },
      apiGateway: {
        title: "API Gateway",
        shortDescription: "A porta de entrada segura que organiza e protege o tráfego entre sistemas.",
        description: "O API Gateway é a camada que fica na frente de uma arquitetura de serviços: é por ele que cada requisição entra, é validada, protegida e encaminhada ao destino correto. Em vez de deixar cada serviço exposto e responsável por repetir as mesmas regras, o gateway cria uma entrada única para a aplicação. Isso simplifica a operação, dá mais controle sobre segurança e permite enxergar com clareza como o tráfego está se comportando.\n\nDesenvolvido em C++17, o projeto evolui a base de um servidor HTTPS para uma peça de infraestrutura completa. Ele implementa roteamento dinâmico, proxy reverso, pools de serviços, balanceamento de carga, verificações ativas e passivas de saúde, limitação de requisições, autenticação por API key e JWT, além de métricas, prontidão e suporte a WebSocket. TLS é fornecido pelo OpenSSL; NASM e instruções SIMD aceleram tarefas de baixo nível. O resultado é uma demonstração prática de engenharia de sistemas para proteger, distribuir e acompanhar o tráfego de serviços modernos."
      },
      lexiconCLI: {
        title: "LexiconCLI",
        shortDescription: "Terminal para acompanhar o mercado e testar estratégias de investimento.",
        description: "LexiconCLI coloca um terminal de análise financeira na mão de quem quer acompanhar o mercado com mais contexto. A ferramenta reúne ações, índices e listas personalizadas, cruza preços com indicadores técnicos e macroeconômicos e transforma dados históricos em uma visão mais clara de possíveis cenários. Em vez de prometer certezas, ela ajuda a investigar movimentos de mercado, comparar ativos e entender risco antes de tomar uma decisão.\n\nO projeto também permite testar estratégias com dados passados, montar alertas de preço e indicadores, rodar simulações de Monte Carlo e gerar previsões com modelos como LSTM e Prophet, sempre mostrando a incerteza envolvida. Dados podem vir de fontes como Finnhub, yfinance, Alpha Vantage, Banco Central e FRED. Python conduz a experiência de terminal com Rich, enquanto TimescaleDB armazena séries temporais, RabbitMQ organiza eventos e MLflow registra experimentos e treinos de modelos."
      },
      moodAPI: {
        title: "MoodAPI",
        shortDescription: "Serviço que identifica o sentimento expresso em textos e mantém o resultado rastreável.",
        description: "MoodAPI transforma textos em sinais que podem ser compreendidos e acompanhados. Ela recebe uma mensagem, comentário ou documento curto e identifica se o sentimento predominante é positivo, negativo ou neutro, inclusive em diferentes idiomas. O objetivo não é apenas produzir uma classificação instantânea: cada previsão fica registrada, pode ser consultada depois e passa a compor um histórico confiável para auditoria, análise de qualidade ou acompanhamento de atendimento.\n\nPor trás da interface existe uma arquitetura próxima de um produto de backend real. Modelos Transformer do Hugging Face interpretam a linguagem; FastAPI expõe a API e valida os dados; PostgreSQL preserva o histórico; Redis acelera consultas e ajuda a controlar o uso; RabbitMQ e Celery processam tarefas em segundo plano. Qdrant permite buscar análises por significado, enquanto Prometheus, Grafana e OpenTelemetry mostram a saúde da operação. Uma central em React facilita testar os recursos sem exigir familiaridade com código."
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
        shortDescription: "Plataforma que transforma documentos em respostas pesquisáveis, com fontes e controle.",
        description: "O SchemaAPI transforma documentos difíceis de consultar, como PDFs, planilhas, arquivos de texto e materiais corporativos, em uma base de conhecimento realmente utilizável. A pessoa pode enviar arquivos, localizar informações por palavras ou por significado e fazer perguntas em linguagem natural. Cada resposta aponta as evidências que a sustentam, o que torna a experiência mais próxima de conversar com os próprios documentos sem perder a confiança sobre de onde veio cada informação.\n\nA plataforma foi pensada para operações locais e ambientes que exigem controle sobre dados. Ela extrai conteúdo estruturado, tabelas, seções, tópicos, cláusulas e indicadores, processa documentos em segundo plano, combina busca textual e vetorial, registra auditorias e oferece telas de análise, governança e observabilidade. A API em Rust prioriza desempenho; workers em Python fazem extração e processamento inteligente; PostgreSQL com pgvector armazena conhecimento semântico e RabbitMQ coordena as tarefas. Electron e React completam a solução com uma central desktop para acompanhar todo o fluxo."
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
