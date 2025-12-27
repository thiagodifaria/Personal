# MoodAPI - Plataforma de Análise de Sentimentos

MoodAPI é uma plataforma completa de análise de sentimentos multilíngue, desenvolvida com Python e FastAPI para oferecer classificação emocional de textos com alta precisão. O projeto combina uma API robusta de análise de sentimentos baseada em modelos Transformer de última geração com um dashboard web moderno e interativo construído em React. A arquitetura segue princípios de Clean Architecture com separação clara de responsabilidades, garantindo modularidade, escalabilidade e manutenibilidade. O sistema se destaca pela sua interface industrial de terminal, analytics em tempo real, histórico completo de análises com filtros avançados, e integração perfeita entre frontend e backend via Docker Compose.

## 🎯 Funcionalidades

- ✅ **Análise multilíngue nativa**: Suporte a português, inglês, espanhol com modelo Transformer único
- ✅ **Dashboard web interativo**: Interface industrial moderna com métricas, gráficos e visualizações em tempo real
- ✅ **Análise individual e em lote**: Processamento eficiente de texto único ou múltiplos textos
- ✅ **Cache inteligente**: Sistema Redis com fallback automático para alta performance
- ✅ **Histórico completo**: Armazenamento, consulta e filtros avançados de análises
- ✅ **Analytics em tempo real**: Distribuições, métricas e estatísticas agregadas
- ✅ **Rate limiting**: Controle de taxa de requisições por endpoint e IP
- ✅ **Health monitoring**: Verificação de saúde de todos os componentes
- ✅ **Containerização**: Deploy pronto com Docker e Docker Compose
- ✅ **Modal de detalhes**: Visualização completa de cada análise com scores detalhados
- ✅ **Exemplos rápidos**: Textos de exemplo em múltiplos idiomas para teste imediato
- ✅ **Configuração flexível**: Gerenciamento de exemplos e configurações via interface

## 🔧 Tecnologias

### Backend - Core
- **Python 3.10+**: Linguagem principal com padrões modernos async/await
- **FastAPI**: Framework web moderno com alta performance e documentação automática
- **Pydantic v2**: Validação de dados, serialização e gerenciamento de configurações
- **SQLAlchemy 2.0**: ORM com nova sintaxe e suporte assíncrono

### Backend - Machine Learning
- **Transformers (Hugging Face)**: Modelos Transformer multilíngues state-of-the-art
- **cardiffnlp/twitter-roberta-base-sentiment-latest**: Modelo principal de análise
- **LangDetect**: Detecção automática de idioma

### Backend - Infraestrutura
- **Redis**: Cache de alta performance com fallback automático
- **SQLite/PostgreSQL**: Persistência de dados com suporte a múltiplos bancos
- **Docker/Docker Compose**: Containerização completa da stack

### Frontend
- **React 18+**: Biblioteca moderna para interfaces de usuário
- **TypeScript**: Tipagem estática para código mais seguro
- **TailwindCSS**: Framework CSS utilitário para estilização
- **Recharts**: Biblioteca de gráficos responsivos
- **Lucide React**: Ícones modernos e consistentes
- **Axios**: Cliente HTTP para comunicação com API
- **Vite**: Build tool moderno e rápido

## 📈 Arquitetura

### Estrutura do Backend

```
app/
├── core/           # Infraestrutura (database, cache, exceptions)
├── sentiment/      # Engine ML e análise de sentimentos
├── history/        # Histórico, analytics e relatórios
└── shared/         # Middleware, rate limiting e utilitários
```

### Estrutura do Frontend

```
frontend/
├── src/
│   ├── components/    # Componentes reutilizáveis (Cards, Sidebar, Modal)
│   ├── pages/         # Páginas da aplicação (Dashboard, Analysis, Logs)
│   ├── services/      # Serviços de API e comunicação
│   └── types/         # Tipos TypeScript
└── public/            # Assets estáticos
```

### Fluxo de Dados

```
Usuário (Dashboard Web)
    ↓
Frontend React (TailwindCSS + TypeScript)
    ↓
API Client (Axios)
    ↓
Backend FastAPI
    ↓
Serviços (Sentiment Analysis, History, Cache)
    ↓
Persistência (SQLite/PostgreSQL + Redis)
```

## 🖥️ Interface do Dashboard

### Dashboard Principal
O dashboard apresenta uma visão geral completa do sistema com:
- **KPIs em tempo real**: Total de análises, confiança média, taxa de alta confiança
- **Gráficos interativos**: Histórico de confiança e distribuição de sentimentos
- **Tabela de análises recentes**: Visualização rápida das últimas análises com acesso a detalhes

### Página de Análises
Interface dedicada para realizar novas análises com:
- **Entrada de texto livre**: Campo de texto expansível para análise individual
- **Exemplos rápidos**: Textos de exemplo em português e inglês para teste imediato
- **Modo em lote**: Suporte para análise de múltiplos textos simultaneamente
- **Resultados detalhados**: Scores completos para cada categoria de sentimento

### Logs & Histórico
Gerenciamento completo do histórico de análises:
- **Filtros avançados**: Por sentimento, idioma, período e busca textual
- **Paginação**: Navegação eficiente por grandes volumes de dados
- **Ações individuais**: Visualização de detalhes e exclusão de registros
- **Modal de detalhes**: Texto completo, metadados e scores ao clicar em qualquer item

### Configurações
Painel de configurações do sistema:
- **Status do modelo**: Informações sobre o modelo ML carregado
- **Gerenciamento de exemplos**: Adicionar, editar e remover textos de exemplo
- **Links de documentação**: Acesso direto ao Swagger UI e ReDoc

### Sobre
Página com informações do projeto:
- **Descrição do projeto**: Propósito e funcionalidades
- **Stack tecnológica**: Tecnologias utilizadas no backend e frontend
- **Autor e contato**: Informações de contato e links relevantes

## 📷 Screenshots

### Dashboard - Visão Geral com KPIs e Gráficos
![Dashboard](public/dashboard.png)

### Análise - Interface de Análise de Sentimentos
![Análise](public/analysis.png)

### Logs & Histórico - Gerenciamento de Análises
![Logs](public/logs.png)

### Configurações - Painel de Configurações
![Configurações](public/config.png)

### Sobre - Informações do Projeto
![Sobre](public/about.png)

## 📋 Pré-requisitos

- Python 3.10+
- Node.js 18+ (para desenvolvimento do frontend)
- Docker & Docker Compose (recomendado)
- Redis (opcional, usa fallback se indisponível)

## 🚀 Instalação Rápida

### Com Docker Compose (Recomendado)

```bash
# Clonar repositório
git clone https://github.com/thiagodifaria/MoodAPI.git
cd MoodAPI

# Iniciar todos os serviços
cd dockerfile
docker compose up --build

# Acessar aplicação
# Frontend: http://localhost:3000
# API Docs: http://localhost:8000/docs
```

### Desenvolvimento Local

```bash
# Backend
cd MoodAPI
python -m venv venv
source venv/bin/activate  # Linux/Mac
venv\Scripts\activate     # Windows
pip install -r requirements.txt
uvicorn app.main:app --reload --port 8000

# Frontend (em outro terminal)
cd frontend
npm install
npm run dev
```

## ⚙️ Configuração

### Variáveis de Ambiente

```env
# Aplicação
MOODAPI_DEBUG=true
MOODAPI_ENVIRONMENT=development

# Machine Learning
MOODAPI_ML__MODEL_NAME=cardiffnlp/twitter-roberta-base-sentiment-latest
MOODAPI_ML__MAX_TEXT_LENGTH=2000

# Database
MOODAPI_DATABASE__URL=sqlite:///./data/sentiments.db
# Produção: postgresql://user:pass@localhost:5432/moodapi

# Cache
MOODAPI_CACHE__URL=redis://localhost:6379/0
MOODAPI_CACHE__TTL=3600

# Rate Limiting
MOODAPI_RATE_LIMIT__REQUESTS_PER_MINUTE=100
MOODAPI_RATE_LIMIT__REQUESTS_PER_HOUR=1000
```

## 📊 Uso da API

### Análise Individual

```bash
curl -X POST "http://localhost:8000/api/v1/sentiment/analyze" \
     -H "Content-Type: application/json" \
     -d '{"text": "Eu amo este produto incrível!"}'
```

**Resposta:**
```json
{
  "id": "c5d3b066-013b-4a9c-baeb-5f420200f796",
  "text": "Eu amo este produto incrível!",
  "sentiment": "positive",
  "confidence": 0.9355,
  "language": "pt",
  "all_scores": [
    {"label": "positive", "score": 0.9355},
    {"label": "neutral", "score": 0.0501},
    {"label": "negative", "score": 0.0144}
  ],
  "processing_time_ms": 156.2
}
```

### Análise em Lote

```bash
curl -X POST "http://localhost:8000/api/v1/sentiment/analyze-batch" \
     -H "Content-Type: application/json" \
     -d '{
       "texts": [
         "Produto excelente!",
         "Serviço terrível",
         "Experiência regular"
       ]
     }'
```

### Histórico com Filtros

```bash
# Consulta com filtros avançados
curl "http://localhost:8000/api/v1/history?sentiment=positive&language=pt&min_confidence=0.8"

# Estatísticas agregadas
curl "http://localhost:8000/api/v1/history/stats?period=7d"
```

## 🔍 Endpoints Principais

| Endpoint | Método | Descrição | Rate Limit |
|----------|--------|-----------|-------------|
| `/api/v1/sentiment/analyze` | POST | Análise individual | 100/min |
| `/api/v1/sentiment/analyze-batch` | POST | Análise em lote | 20/min |
| `/api/v1/sentiment/health` | GET | Health check do serviço | 200/min |
| `/api/v1/history` | GET | Histórico com filtros | 60/min |
| `/api/v1/history/{id}` | GET/DELETE | Operações por ID | 100/min |
| `/api/v1/history/analytics` | GET | Distribuições e métricas | 20/min |
| `/api/v1/history/stats` | GET | Estatísticas agregadas | 15/min |

## 📈 Performance

### Benchmarks Típicos

- **Análise individual**: < 100ms (cache miss), < 10ms (cache hit)
- **Análise em lote (10 textos)**: < 500ms
- **Consultas de histórico**: < 300ms (com filtros)
- **Analytics**: < 500ms (agregações complexas)
- **Cache hit rate**: > 70% em uso típico

### Otimizações

- Cache Redis com TTL inteligente
- Queries SQL otimizadas com índices
- Carregamento único de modelo ML
- Background tasks para analytics
- Connection pooling para banco

## 🐳 Deploy em Produção

### Docker Compose

```bash
# Deploy completo
cd dockerfile
docker compose up -d

# Verificar saúde
docker compose ps
curl http://localhost:8000/api/v1/sentiment/health
```

### Serviços Incluídos

- **moodapi-api**: Backend FastAPI com modelo ML
- **moodapi-frontend**: Dashboard React com Nginx
- **moodapi-db**: PostgreSQL para persistência
- **moodapi-redis**: Redis para cache

## 📝 Documentação

- **Swagger UI**: http://localhost:8000/docs
- **ReDoc**: http://localhost:8000/redoc
- **OpenAPI Schema**: http://localhost:8000/openapi.json

## 📜 Licença

Distribuído sob a licença MIT. Veja `LICENSE` para mais informações.

## 📞 Contato

**Thiago Di Faria**
- Email: thiagodifaria@gmail.com
- Website: [thiagodifaria.com](https://thiagodifaria.com)
- GitHub: [@thiagodifaria](https://github.com/thiagodifaria)
- Projeto: [https://github.com/thiagodifaria/MoodAPI](https://github.com/thiagodifaria/MoodAPI)

---

⭐ **MoodAPI** - Análise de sentimentos com precisão multilíngue, dashboard interativo e performance otimizada.