export interface Project {
  slug: string;
  n: string;
  name: string;
  category: string;
  filters: string[];
  visual: string;
  image?: string;
  tech: string[];
  github: string;
  demo?: string;
  problem: string;
  summary: string;
  response: string;
  demonstrates: string;
}

export interface Experience {
  slug: string;
  n: string;
  name: string;
  title: string;
  visual: string;
  stack: string[];
  summary: string;
  context: string;
  decisions: string[];
  learn: string;
}

export interface ArticleSection {
  title: string;
  body: string[];
}

export interface Article {
  slug: string;
  category: string;
  status: string;
  title: string;
  summary: string;
  tags: string[];
  sections?: ArticleSection[];
}

export interface Solution {
  className: string;
  kicker: string;
  headline: string;
  alt: string;
  promise: string;
  cta: string;
  accent: string;
  symptoms: string[];
  modules: [string, string][];
  faq: [string, string][];
  ethical?: boolean;
}

export interface Profile {
  name: string;
  location: string;
  shortLocation: string;
  email: string;
  site: string;
  github: string;
  linkedin: string;
}

export const siteContent = {
  profile: {
    name: 'Thiago Di Faria',
    location: 'Belo Horizonte, Minas Gerais, Brasil',
    shortLocation: 'Belo Horizonte, MG',
    email: 'thiagodifaria@gmail.com',
    site: 'https://thiagodifaria.com',
    github: 'https://github.com/thiagodifaria',
    linkedin: 'https://www.linkedin.com/in/thiago-di-faria-34304a34b/',
  } as Profile,

  projects: [
    {
      slug: 'tesori-di-bacco',
      n: '01',
      name: 'Tesori di Bacco',
      category: 'Front end e produto digital',
      filters: ['Front end'],
      visual: 'tesori',
      image: '/images/tesoridibacco.png',
      tech: ['React 19', 'TypeScript', 'Vite', 'Tailwind CSS'],
      github: 'https://github.com/thiagodifaria/Tesori-di-Bacco',
      demo: 'https://tesoridibacco.netlify.app/',
      problem: 'Como uma marca premium de vinhos pode ganhar profundidade por meio de conteúdo, regras de produto e interface?',
      summary: 'Uma experiência digital para descobrir e assinar vinhos italianos selecionados.',
      response: 'Tesori di Bacco é uma experiência digital criada para um clube de vinhos premium inspirado na tradição italiana. Em vez de apresentar uma simples vitrine de produtos, o projeto convida a pessoa a descobrir rótulos, entender suas notas de degustação, explorar harmonizações e conhecer histórias contadas por sommeliers. O catálogo permite filtrar e pesquisar vinhos, salvar favoritos e navegar por páginas ricas em contexto, fazendo a descoberta parecer mais próxima de uma boa conversa em uma enoteca do que de uma compra comum.\n\nA jornada continua com seis níveis de assinatura, benefícios exclusivos em restaurantes parceiros e o diário editorial do clube. Há ainda verificação de idade, uma autenticação simulada com sessões persistentes e uma área pensada para cada perfil de associado. React 19, TypeScript, Vite e Tailwind CSS sustentam uma interface elegante, rápida e responsiva, demonstrando como design, conteúdo e regras de negócio podem trabalhar juntos para dar identidade a uma marca premium.',
      demonstrates: 'Direção de produto, modelagem de interface, arquitetura de front end, responsividade e cuidado com identidade sem depender de mockups ou promessas artificiais.',
    },
    {
      slug: 'erp',
      n: '02',
      name: 'ERP',
      category: 'Sistemas empresariais',
      filters: ['Sistemas empresariais', 'Backend e APIs'],
      visual: 'erp',
      image: '',
      tech: ['TypeScript', 'Python', 'Rust', 'Go', 'C#', 'Elixir', 'PostgreSQL', 'React'],
      github: 'https://github.com/thiagodifaria/ERP',
      problem: 'Como integrar os fluxos de vendas, finanças, operação e controle de uma empresa em uma arquitetura única e auditável?',
      summary: 'Sistema central para organizar vendas, clientes, finanças e operações de uma empresa.',
      response: 'Este projeto imagina o ERP como o sistema operacional de uma empresa, não como um conjunto solto de telas de cadastro. Ele conecta a jornada inteira de uma operação: um contato pode virar oportunidade, proposta, contrato e cobrança; a movimentação chega ao financeiro, gera documentos, aciona automações e passa a aparecer nos relatórios. Dessa forma, vendas, clientes, assinaturas, faturamento, pagamentos, compras, estoque, documentos e indicadores deixam de viver em planilhas e ferramentas desconectadas.\n\nA plataforma também foi desenhada para situações reais de crescimento e controle. Ela atende múltiplas empresas com dados isolados, organiza permissões, limites e evidências de operação, e prevê integrações com bancos, meios de pagamento, assinatura digital, comunicação, dados de mercado e ferramentas de inteligência artificial. A arquitetura distribui responsabilidades entre serviços em TypeScript, Python, Rust, Go, C#, Elixir e PostgreSQL, enquanto uma interface React ajuda a documentar, testar e operar as APIs.',
      demonstrates: 'Engenharia de software empresarial, modelagem relacional, arquitetura orientada a serviços, barramentos de eventos e visão integrada de negócios.',
    },
    {
      slug: 'api-gateway',
      n: '03',
      name: 'API Gateway',
      category: 'Backend e infraestrutura',
      filters: ['Backend e APIs'],
      visual: 'gateway',
      image: '/images/apigateway.png',
      tech: ['C++17', 'OpenSSL', 'NASM', 'SIMD', 'WebSocket'],
      github: 'https://github.com/thiagodifaria/API-Gateway',
      problem: 'Como centralizar autenticação, roteamento, limitação de taxa e métricas sem sacrificar a latência de serviços críticos?',
      summary: 'A porta de entrada segura que organiza e protege o tráfego entre sistemas.',
      response: 'O API Gateway é a camada que fica na frente de uma arquitetura de serviços: é por ele que cada requisição entra, é validada, protegida e encaminhada ao destino correto. Em vez de deixar cada serviço exposto e responsável por repetir as mesmas regras, o gateway cria uma entrada única para a aplicação. Isso simplifica a operação, dá mais controle sobre segurança e permite enxergar com clareza como o tráfego está se comportando.\n\nDesenvolvido em C++17, o projeto evolui a base de um servidor HTTPS para uma peça de infraestrutura completa. Ele implementa roteamento dinâmico, proxy reverso, pools de serviços, balanceamento de carga, verificações ativas e passivas de saúde, limitação de requisições, autenticação por API key e JWT, além de métricas, prontidão e suporte a WebSocket. TLS é fornecido pelo OpenSSL; NASM e instruções SIMD aceleram tarefas de baixo nível. O resultado é uma demonstração prática de engenharia de sistemas para proteger, distribuir e acompanhar o tráfego de serviços modernos.',
      demonstrates: 'Programação C++17 de alto desempenho, tratamento concorrente de conexões, criptografia SSL/TLS, otimizações SIMD em Assembly e resiliência de infraestrutura.',
    },
    {
      slug: 'schema-api',
      n: '04',
      name: 'SchemaAPI',
      category: 'Dados e inteligência artificial',
      filters: ['Backend e APIs', 'Dados e IA'],
      visual: 'schema',
      image: '/images/schemaapi.png',
      tech: ['Rust', 'Python', 'PostgreSQL', 'pgvector', 'RabbitMQ', 'Qdrant', 'Electron'],
      github: 'https://github.com/thiagodifaria/SchemaAPI',
      problem: 'Como extrair dados de documentos complexos e viabilizar busca semântica preservando rastreabilidade e revisão humana?',
      summary: 'Plataforma que transforma documentos em respostas pesquisáveis, com fontes e controle.',
      response: 'O SchemaAPI transforma documentos difíceis de consultar, como PDFs, planilhas, arquivos de texto e materiais corporativos, em uma base de conhecimento realmente utilizável. A pessoa pode enviar arquivos, localizar informações por palavras ou por significado e fazer perguntas em linguagem natural. Cada resposta aponta as evidências que a sustentam, o que torna a experiência mais próxima de conversar com os próprios documentos sem perder a confiança sobre de onde veio cada informação.\n\nA plataforma foi pensada para operações locais e ambientes que exigem controle sobre dados. Ela extrai conteúdo estruturado, tabelas, seções, tópicos, cláusulas e indicadores, processa documentos em segundo plano, combina busca textual e vetorial, registra auditorias e oferece telas de análise, governança e observabilidade. A API em Rust prioriza desempenho; workers em Python fazem extração e processamento inteligente; PostgreSQL com pgvector armazena conhecimento semântico e RabbitMQ coordena as tarefas. Electron e React completam a solução com uma central desktop para acompanhar todo o fluxo.',
      demonstrates: 'Integração de busca vetorial RAG, pipelines assíncronos de documentos, APIs performáticas em Rust e observabilidade aplicada.',
    },
    {
      slug: 'lexicon-cli',
      n: '05',
      name: 'LexiconCLI',
      category: 'Ferramentas de terminal e dados',
      filters: ['Ferramentas de terminal', 'Dados e IA', 'Backend e APIs'],
      visual: 'lexicon',
      image: '/images/lexiconcli.png',
      tech: ['Python', 'Rich', 'TimescaleDB', 'RabbitMQ', 'MLflow', 'LSTM', 'Prophet'],
      github: 'https://github.com/thiagodifaria/LexiconCLI',
      problem: 'Como criar um terminal financeiro interativo para simulação de cenários, backtesting e modelos preditivos?',
      summary: 'Terminal para acompanhar o mercado e testar estratégias de investimento.',
      response: 'LexiconCLI coloca um terminal de análise financeira na mão de quem quer acompanhar o mercado com mais contexto. A ferramenta reúne ações, índices e listas personalizadas, cruza preços com indicadores técnicos e macroeconômicos e transforma dados históricos em uma visão mais clara de possíveis cenários. Em vez de prometer certezas, ela ajuda a investigar movimentos de mercado, comparar ativos e entender risco antes de tomar uma decisão.\n\nO projeto também permite testar estratégias com dados passados, montar alertas de preço e indicadores, rodar simulações de Monte Carlo e gerar previsões com modelos como LSTM e Prophet, sempre mostrando a incerteza envolvida. Dados podem vir de fontes como Finnhub, yfinance, Alpha Vantage, Banco Central e FRED. Python conduz a experiência de terminal com Rich, enquanto TimescaleDB armazena séries temporais, RabbitMQ organiza eventos e MLflow registra experimentos e treinos de modelos.',
      demonstrates: 'Desenvolvimento de CLI avançado com Rich, análise de séries temporais, simulações estatísticas Monte Carlo e MLflow.',
    },
    {
      slug: 'mood-api',
      n: '06',
      name: 'MoodAPI',
      category: 'Backend, NLP e dados',
      filters: ['Backend e APIs', 'Dados e IA'],
      visual: 'mood',
      image: '/images/moodapi.png',
      tech: ['Python', 'FastAPI', 'Hugging Face', 'PostgreSQL', 'Redis', 'RabbitMQ', 'Qdrant'],
      github: 'https://github.com/thiagodifaria/MoodAPI',
      problem: 'Como classificar sentimentos em textos multilíngues com histórico auditável e busca por significado?',
      summary: 'Serviço que identifica o sentimento expresso em textos e mantém o resultado rastreável.',
      response: 'MoodAPI transforma textos em sinais que podem ser compreendidos e acompanhados. Ela recebe uma mensagem, comentário ou documento curto e identifica se o sentimento predominante é positivo, negativo ou neutro, inclusive em diferentes idiomas. O objetivo não é apenas produzir uma classificação instantânea: cada previsão fica registrada, pode ser consultada depois e passa a compor um histórico confiável para auditoria, análise de qualidade ou acompanhamento de atendimento.\n\nPor trás da interface existe uma arquitetura próxima de um produto de backend real. Modelos Transformer do Hugging Face interpretam a linguagem; FastAPI expõe a API e valida os dados; PostgreSQL preserva o histórico; Redis acelera consultas e ajuda a controlar o uso; RabbitMQ e Celery processam tarefas em segundo plano. Qdrant permite buscar análises por significado, enquanto Prometheus, Grafana e OpenTelemetry mostram a saúde da operação. Uma central em React facilita testar os recursos sem exigir familiaridade com código.',
      demonstrates: 'Inferencia de modelos NLP Transformers em produção, filas assíncronas com Celery/RabbitMQ, observabilidade OpenTelemetry e busca vetorial.',
    },
  ] as Project[],

  experiences: [] as Experience[],

  articles: [] as Article[],

  solutions: [
    {
      className: 'sales',
      kicker: 'Sistemas comerciais',
      headline: 'Quando o comercial depende da memória de alguém, a operação fica cara demais.',
      alt: 'CRM, ERP e portais de operação sob medida',
      promise: 'Construo sistemas que conectam propostas, clientes, contratos e faturamento com regras claras e visão de estado.',
      cta: 'Entender o que vale organizar primeiro',
      accent: '#3d5afe',
      symptoms: [
        'Propostas e orçamentos que ficam esquecidos em conversas de aplicativos ou e-mails.',
        'Informações de clientes dispersas em planilhas que cada vendedor atualiza de um jeito.',
        'Dificuldade para saber quais contratos vencem este mês ou qual o faturamento previsto.',
        'Falta de histórico claro sobre quem negociou, autorizou descontos ou aprovou termos.',
      ],
      modules: [
        ['Gestão de Oportunidades', 'Funil visual com estados claros, histórico de interações e alertas de acompanhamento.'],
        ['Catálogo & Propostas', 'Emissão rápida de propostas padronizadas com cálculo automático de regras e condições.'],
        ['Contratos & Faturamento', 'Vinculação entre fecho comercial, geração de contratos e registros para cobrança.'],
        ['Painel de Controle', 'Indicadores de desempenho, previsão de vendas e alertas de gargalos operacionais.'],
      ],
      faq: [
        ['Preciso substituir todo o meu sistema atual?', 'Não. É possível começar construindo apenas a camada que hoje gera retrabalho, integrando-a com as ferramentas que sua equipe já utiliza.'],
        ['Quanto tempo leva para colocar a primeira versão no ar?', 'O desenvolvimento é feito por etapas curtas. Em poucas semanas, entregamos a primeira versão funcional focada no principal gargalo identificado.'],
        ['Como fica o acesso das diferentes pessoas da equipe?', 'Desenhamos papéis e permissões sob medida: vendedores veem suas oportunidades, gestores acompanham relatórios e o financeiro acessa aprovações.'],
      ],
    },
    {
      className: 'automation',
      kicker: 'Automação e integrações',
      headline: 'O trabalho repetitivo está consumindo horas. O processo pode carregar parte desse peso.',
      alt: 'APIs, filas e conectores resilientes',
      promise: 'Elimino tarefas manuais entre ferramentas conectando sistemas com validação, controle de falhas e rastreabilidade.',
      cta: 'Encontrar um fluxo para automatizar',
      accent: '#c8ff4a',
      ethical: true,
      symptoms: [
        'Pessoas copiando dados manualmente de uma ferramenta para alimentar relatórios ou outra planilha.',
        'Erros frequentes de digitação ao transferir informações entre sistemas de vendas e financeiro.',
        'Atrasos na comunicação com clientes por dependência de envio manual de mensagens ou e-mails.',
        'Processos que param totalmente quando a pessoa responsável por um envio entra de férias.',
      ],
      modules: [
        ['Conectores de APIs', 'Integração direta entre plataformas de pagamento, CRM, e-mail marketing e sistemas internos.'],
        ['Processamento em Fila', 'Garantia de que nenhuma informação se perca mesmo se um serviço externo estiver temporariamente fora do ar.'],
        ['Validação & Limpeza', 'Tratamento e padronização automática de dados antes da inserção nos sistemas de destino.'],
        ['Alertas & Relatórios', 'Notificação em tempo real sobre execuções, erros de integração ou dados divergentes.'],
      ],
      faq: [
        ['Como garantir que a automação não vai disparar dados errados?', 'Implementamos etapas rígidas de validação e testes de consistência. Se algo estiver fora do padrão, o fluxo pausa e notifica um responsável humano.'],
        ['E se uma das APIs integradas mudar ou cair?', 'Usamos arquiteturas de fila com retentativas inteligentes e alertas automáticos para investigar qualquer instabilidade sem perder requisições.'],
        ['Funciona com sistemas antigos ou sem API oficial?', 'Sim. Desenvolvemos conectores sob medida e pipelines de extração estruturada respeitando regras de segurança e boas práticas.'],
      ],
    },
    {
      className: 'intelligence',
      kicker: 'Inteligência documental e IA',
      headline: 'Informação presa em PDF ainda não consegue ajudar sua operação.',
      alt: 'Busca semântica, RAG e análise de documentos',
      promise: 'Transformo acervos de documentos, manuais e relatórios em uma base de conhecimento pesquisável com fontes auditáveis.',
      cta: 'Explorar uma base de conhecimento útil',
      accent: '#78d8c6',
      symptoms: [
        'Horas gastas procurando cláusulas ou informações específicas em dezenas de arquivos PDF.',
        'Dificuldade para treinar novos funcionários devido ao volume de manuais e regulamentos extensos.',
        'Perda de histórico de decisões passadas que ficaram arquivadas em relatórios antigos.',
        'Respostas lentas para clientes ou auditorias por dependência de busca manual em arquivos.',
      ],
      modules: [
        ['Extração Inteligente', 'Leitura e estruturação automática de PDFs, planilhas e documentos com preservação de tabelas e seções.'],
        ['Busca por Significado', 'Localização rápida de informações por contexto e sentido, não apenas por coincidência de palavras de busca.'],
        ['Respostas com Evidências', 'Assistente interno que responde perguntas indicando exatamente a página e o parágrafo de origem.'],
        ['Painel de Auditoria', 'Interface para acompanhar pesquisas, validar respostas e manter controle sobre os dados acessados.'],
      ],
      faq: [
        ['Meus dados corporativos serão usados para treinar modelos públicos?', 'Não. A arquitetura é isolada e utiliza instâncias privadas ou locais que garantem sigilo absoluto e conformidade com a LGPD.'],
        ['O sistema pode inventar respostas (alucinar)?', 'Mitigamos isso usando técnica RAG rigorosa: o modelo é forçado a responder apenas com base nos trechos recuperados da sua base, exibindo as fontes.'],
        ['Quais tipos de arquivos podem ser processados?', 'PDFs, documentos do Word, planilhas, apresentações, textos em TXT/Markdown e e-mails armazenados.'],
      ],
    },
  ] as Solution[],
};
