

const enTranslations = {
  siteData: {
    personalInfoName: "Thiago Di Faria",
    heroWords: [
      "Front-End Developer",
      "Python Specialist",
      "Scalable Back-End Projects",
      "UI/UX Designer",
      "Clean and Maintainable Code"
    ],
    heroSubtitle: "Passionate developer creating unique, innovative, and efficient applications and websites.",
    introTagline: "I craft intuitive and responsive web experiences that blend aesthetic design with functional elegance.",
    navLinks: {
      sobre: "About",
      projetos: "Projects",
      contato: "Contact",
    },
    socialMediaTooltips: {
      Github: "GitHub",
      Instagram: "Instagram",
      LinkedIn: "LinkedIn",
      Email: "Email",
      Resume: "Resume",
    },
    projects: {
      helixCore: {
        title: "Helix-Core",
        shortDescription: "Unified backend runtime with Gateway, Cache and Queue in a single binary.",
        description: "Unified backend infrastructure runtime combining API Gateway, In-Memory Cache and Message Queue in a single high-performance binary. Python layer: asyncio with uvloop, aiohttp, PyQt6 (Windows XP style GUI), Typer CLI, Prometheus/Loki/Grafana integration. C++ layer: Core engine with SIMD AVX2 memory operations (memcpy, memset, memcmp, memchr in x64 Assembly), sharded hash table with 16 read-write locks, zero-copy RESP3 parser, slab allocator with multiple size classes. Features: Token Bucket Rate Limiting, Circuit Breaker with OPEN/HALF-OPEN/CLOSED states, JWT authentication, queue consumer groups, append-only commit log with segments, Dead Letter Queue. Benchmarks: Native cache 500k ops/s GET, 400k ops/s SET; Gateway 50k req/s; Queue 200k msg/s."
      },
      begriff: {
        title: "Begriff",
        shortDescription: "Enterprise financial intelligence platform with hybrid architecture.",
        description: "Complete enterprise financial intelligence platform demonstrating legacy system modernization through smart hybrid architecture. The project unites COBOL (legacy banking systems), C++ (high-performance processing), and Python (modern APIs with FastAPI) in an enterprise-grade technological symphony. Implements Clean Architecture with Domain-Driven Design (DDD), ensuring modularity and maintainability. Architecture includes an adaptation layer for transparent cross-language integration, distributed cache system, and ACID transactional processing. An ambitious project showing deep understanding of financial systems and gradual legacy migration."
      },
      codex: {
        title: "Codex",
        shortDescription: "Personal productivity web app for integrated activity management.",
        description: "Full-stack personal productivity web application built with Next.js 14, TypeScript, and Firebase for real-time authentication and persistence. The system integrates multiple features: personal diary with rich-text editor, task system with intelligent prioritization, project management with milestones, and long-term goals with progress tracking. Responsive interface with Tailwind CSS, dark/light theme, and UX optimized for productivity. Implements modern React patterns like Server Components, Suspense boundaries, and optimistic updates for fluid experience."
      },
      tesoriDiBacco: {
        title: "Tesori di Bacco",
        shortDescription: "Exclusive platform for a premium Italian wine club.",
        description: "Sophisticated front-end web application for a premium wine club inspired by Italian tradition. Developed with React 18, TypeScript, and Vite for optimized builds. The elegant design uses Tailwind CSS with refined color palette, premium typography, and smooth animations. Features include: interactive wine catalog with advanced filters, favorites system, cards with detailed sommelier information, food pairing section, and membership area. Fully responsive layout with mobile-first approach and Lighthouse performance score above 95."
      },
      lexiconCLI: {
        title: "LexiconCLI",
        shortDescription: "Interactive financial analysis system for terminal environment.",
        description: "State-of-the-art interactive financial analysis system in Python for terminal environment. Offers: real-time asset monitoring with market data via financial APIs, interactive ASCII charts with Plotext, technical analysis with indicators (RSI, MACD, Bollinger Bands), probabilistic forecasting using TensorFlow and Scikit-learn, and statistical uncertainty quantification. Rich interface built with Rich library for colorful tables, progress bars, and professional formatting. Customizable alert system and report export. Standalone executable available."
      },
      moodAPI: {
        title: "MoodAPI",
        shortDescription: "API for sentiment analysis in texts using NLP.",
        description: "Robust REST API for sentiment analysis using state-of-the-art Transformer models (BERT, RoBERTa). Offers multilingual analysis (Portuguese, English, Spanish) with basic and detailed sentiment classification, per-token confidence, and named entity extraction. Architecture includes: FastAPI with async/await, intelligent Redis cache with configurable TTL (90%+ hit rate), batch request processing queue, analytics system with dashboards, MongoDB history storage, tier-based rate limiting, and complete OpenAPI documentation. Containerized with Docker and production-ready."
      },
      caninana: {
        title: "Caninana",
        shortDescription: "Educational antivirus engine with signature detection.",
        description: "Educational project implementing fundamental concepts of a modern antivirus. The C++ core engine offers: file scanning with signature detection (hash matching), basic heuristic analysis, secure quarantine system, and automatic virus definition updates. Python/Tkinter GUI for management and monitoring. Modular architecture with CMake, logging system, scan reports, and configurable whitelist. Demonstrates deep knowledge of cybersecurity, low-level file manipulation, and systems development."
      },
      consiliumAPI: {
        title: "ConsiliumAPI",
        shortDescription: "Enterprise-grade REST API with CQRS, Event Sourcing, and observability.",
        description: "Enterprise-grade REST API for project and task management, demonstrating senior-level architecture. Stack: Spring Boot 3.2.5, Java 17, PostgreSQL 16. Advanced features include: JWT Authentication with Refresh Tokens (15min access + 7 days refresh) with automatic rotation; Redis Cache with 80% latency reduction (100ms → 20ms, 85%+ hit rate); RabbitMQ for async processing with Dead Letter Queue; CQRS pattern with separate read/write services; Event Sourcing with immutable JSONB audit trail; Token Bucket Rate Limiting (10-1000 req/min per role); Full Observability stack (Grafana, Loki, Tempo, Prometheus, OpenTelemetry); 105+ automated tests (unit, integration, E2E) with >80% JaCoCo coverage; Automation scripts (build.sh, dev.sh, test.sh); Docker Compose with 7 services. Throughput: >2000 req/s, P95 latency <20ms."
      },
      sphinx: {
        title: "Sphinx",
        shortDescription: "AI-driven autonomous cloud engineering platform.",
        description: "Autonomous cloud engineering platform with rich TUI interface, developed in Python with Textual framework. Key features include: AI-driven IaC generation via Google Gemini that transforms natural language into valid Terraform code; Observability dashboard with real-time Prometheus metrics and live charts; Intelligent anomaly detection with YAML rules and extensible Python plugins; Cost optimization suggestions with AI-generated code fixes; Complete Terraform flow (plan/apply) integrated in TUI; Multi-workspace management for different environments (dev/staging/prod); Action history with SQLite audit trail; Clean Hexagonal Architecture with Dependency Injection. Interface with multiple tabs: Generation Chat, Optimization Dashboard, History, Workspaces. Standalone executable available."
      },
      httpsServer: {
        title: "HTTPS Server",
        shortDescription: "High-performance HTTPS server with SIMD optimizations.",
        description: "High-performance HTTPS server implemented in C++17 with hand-coded assembly optimizations. Performance highlights include: SIMD network operations with AVX2 (vectorized Base64, UUID v4 with hardware RNG via RDRAND, optimized hex encoding); Accelerated HTTP parsing with header detection via VPCMPEQB 32-byte and parallel method/URI extraction; Advanced cryptography (ChaCha20-Poly1305, Blake3 tree hashing, X25519 Montgomery ladder, hand-optimized AES-NI assembly, SHA-256 AVX); Multi-algorithm compression (Deflate, ultra-fast LZ4, Brotli for web); SIMD validation engine for JSON, vectorized UTF-8, and input sanitization. Benchmarks: AES-NI 3.51 GB/s throughput, SHA-256 2.1 GB/s. Real-time web benchmark interface, TLS 1.3, thread pool, structured logging. Cross-platform with CMake and NASM."
      },
      env: {
        title: "ENV",
        shortDescription: "Automation framework for Windows development environment setup.",
        description: "Enterprise-grade PowerShell automation framework for Windows development environment setup. SOLID modular architecture with: Multi-package manager support (Chocolatey, Winget, Scoop) with automatic fallback and health checks; Parallel installation of up to 10 simultaneous packages (10x faster than sequential); State management with session-based automatic rollback on failures; Backup system with versioning, timestamps, and granular restore; TTL-based smart cache (96% reduction in redundant operations); Automatic dependency resolution between packages; SHA256/SHA512 download validation; 50+ pre-configured packages in 8 categories; Terminal customization (Oh My Posh, Starship, 5 Nerd Fonts, modern CLI tools: bat, eza, fzf, ripgrep, zoxide); Git auto-setup with 15+ professional aliases; Pester 5.0+ tests with >70% coverage; GitHub Actions CI/CD pipeline."
      },
      schemaAPI: {
        title: "SchemaAPI",
        shortDescription: "Intelligent document processing API with AI.",
        description: "API for intelligent document processing (PDFs, DOCX, TXT, CSV, XLSX) with advanced ML pipeline. Features include: Hybrid abstractive/extractive summarization with map-reduce for long docs; Action item extraction with assignee and deadline prediction via NER and classification; Automatic knowledge graph construction with relationship discovery; Semantic search with SentenceTransformers embeddings and HNSW indexing for <200ms latency; Temporal pattern detection, trends, and anomalies; Multi-label document classification; Multilingual processing (PT, EN, ES) with unified Transformer models. Hybrid architecture: Rust core for high-performance parsing and I/O, Python for ML pipeline (Hugging Face, spaCy, scikit-learn). Infrastructure: async FastAPI, Redis cache (75%+ hit rate), PostgreSQL with pgvector, rate limiting, audit trail, OpenTelemetry. Benchmarks: <3s per document, >1000 docs/hour in batch."
      },
    },
  },
  header: {
    openNavigationMenu: "Open navigation menu",
  },
  languageSwitcher: {
    pt: "PT",
    en: "EN",
    switchToPortugueseAriaLabel: "Switch to Portuguese",
    switchToEnglishAriaLabel: "Switch to English",
  },
  projectsPage: {
    title: "My Projects",
    description: "Welcome to my project gallery. Here you will find a diverse collection of the works I have developed, from complex web applications to robust APIs and analysis tools. Each card below details the challenges, solutions, and technologies employed.",
    noProjectsFound: "No projects found in this category.",
  },
  homePage: {
    projectsSectionTitle: "My Recent Projects",
    projectsSectionDescription: "Here are some of the projects I've worked on. Each one represents a unique challenge and a learning opportunity.",
    connectSectionTitle: "Get in Touch",
    connectSectionDescription: "Have a question, a proposal, or just want to say hello? Fill out the form below.",
  },
  sobrePage: {
    mainTitle: "About Me",
    minhaJornadaTitle: "My Journey",
    minhaJornadaP1: "Hi, I'm Thiago Di Faria. A software developer from Belo Horizonte, focused on backend. My journey in technology began with a pragmatic choice. While my interests fluctuated around architecture and the combination of art and history, I made a conscious and ambitious decision to pursue technology, recognizing the growth potential and opportunities to build a solid career. What started as an objective career decision, however, soon became a field of genuine fascination, where I found a new kind of creativity in solving complex problems.",
    minhaJornadaP2: "It all started in 2023 with Harvard's \"CS50's Introduction to Programming with Python\" course. I was amazed not only by the language but by the infinite creative capabilities and versatility it offers. This potential led me to seek formal education, and after a brief stint in Information Systems, I switched in August 2024 to Systems Analysis and Development at PUC Minas, a more practical and direct path.",
    minhaJornadaP3: "In early 2025, I had the opportunity that defined my focus: I was the lead developer of a complete desktop CRM application, built entirely in Python. This immersive experience taught me about responsibility, autonomy, and above all, made me discover that although I admired the frontend, it was behind the scenes, in the logic and data structuring of the backend, that I truly felt at home.",
    minhaJornadaP4: "This affinity drives me to create. Since then, I have invested in my portfolio with projects such as developing my own API for sentiment analysis, creating a financial analysis system with real market data, and even a foray into frontend to bring to life a website inspired by a wine magazine.",
    minhaJornadaP5: "I take great pride in my roots and my state, Minas Gerais: its unmistakable cuisine, its rich history of struggle, and unique culture enchant me. Among my diverse ancestries, the Italian one is the most special. I feel connected to its language, customs, and the way this culture intertwined with Brazilian culture, especially here in Minas. Whether through the significant influence on gastronomy or the cultural impact, I see this heritage as part of my identity. Outside the world of code, I am a sports enthusiast. My favorites are MMA and football. In MMA, I'm a big fan of Georges St-Pierre (GSP), and in football, like a good 'mineiro', I'm a registered fan of Galo. I also closely follow Formula 1, with admiration for drivers like Sebastian Vettel and, of course, Ayrton Senna. My musical taste is eclectic and reflects my different phases, ranging from Kanye West, Henrique & Juliano, WS da Igrejinha, Duke Dumont, and Deftones.",
    minhaJornadaP6: "Feel free to explore my portfolio, get to know my projects, and get in touch. I am always open to new challenges and partnerships.",
    formacaoCompetenciasTitle: "Education and Skills",
    formacaoCompetenciasDescription: "Below, I detail my academic background, language skills, and commitment to continuous learning through specialization courses.",
    formacaoAcademicaTitle: "Academic Background",
    formacaoAcademicaGraduacao: "Degree: Systems Analysis and Development",
    formacaoAcademicaInstituicao: "Institution: Pontifícia Universidade Católica de Minas Gerais (PUC Minas)",
    formacaoAcademicaInicio: "Start: August 2024",
    idiomasTitle: "Languages",
    idiomasPt: "Portuguese: Native",
    idiomasEn: "English: Proficient (continuous study since childhood in private courses and schools)",
    idiomasIt: "Italian: Intermediate (studied for 1 year at UFMG for personal and cultural affinity reasons)",
    idiomasDe: "German: Basic (started during college)",
    educacaoContinuadaTitle: "Continuing Education and Highlighted Courses (2025)",
    educacaoContinuadaDescription: "I believe that career evolution in technology is driven by curiosity and constant study. In 2025, I am focused on deepening my knowledge in the following areas, through courses from renowned institutions:",
    algoritmosTitle: "Algorithms and Data Structures:",
    algoritmosC1: "The Last Algorithms Course You'll Need (Frontend Masters)",
    algoritmosC2: "CS50's Introduction to Computer Science (Harvard)",
    pythonDSTitle: "Python, Data Science, and Artificial Intelligence:",
    pythonDSC1: "CS50's Introduction to Programming with Python (Harvard)",
    pythonDSC2: "Using Python for Research (Harvard)",
    pythonDSC3: "Data Science: Machine Learning (Harvard)",
    pythonDSC4: "Machine Learning and AI with Python (Harvard)",
    pythonDSC5: "Data Science: R Basics (Harvard)",
    tecnologiasNegociosTitle: "Technologies and Business:",
    tecnologiasNegociosC1: "CS50's Introduction to Cybersecurity (Harvard)",
    tecnologiasNegociosC2: "Business Analytics (Harvard)",
    tecnologiasNegociosC3: "Tonnie Java and AI Europe Training (Digital Innovation One)",
  },
  contactForm: {
    nameLabel: "Name",
    namePlaceholder: "Your full name",
    emailLabel: "Email",
    emailPlaceholder: "your@email.com",
    messageLabel: "Message",
    messagePlaceholder: "Your message...",
    submitButton: "Send Message",
    submitButtonLoading: "Sending...",
    successTitle: "Message Sent!",
    successDescription: "Thank you for your contact. I will get back to you soon.",
    errorTitle: "Error Sending",
    errorDescriptionDefault: "A problem occurred. Please try again.",
  },
  projectCard: {
    codeButton: "Code",
    siteButton: "View Site",
    inDevelopment: "In Development",
    detailsButton: "Details",
    technologiesTitle: "Technologies",
    exploreButton: "Explore more...",
  },
  projectDetail: {
    backButton: "Back to projects",
    aboutTitle: "About the Project",
    technologiesTitle: "Technologies Used",
    viewCode: "View Code",
    viewSite: "View Site",
    download: "Download",
  },
  projectCategories: {
    all: "All",
    backend: "Backend",
    frontend: "Frontend",
    fullstack: "Full Stack",
    cli: "CLI / Tools",
    inDevelopment: "In Development",
  },
  zodValidation: {
    nameMin: "Name must be at least 2 characters long.",
    nameMax: "Name cannot exceed 50 characters.",
    emailInvalid: "Please enter a valid email address.",
    messageMin: "Message must be at least 10 characters long.",
    messageMax: "Message cannot exceed 1000 characters.",
  },
} as const;

export default enTranslations;
