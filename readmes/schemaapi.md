# SchemaAPI - API de Processamento Inteligente de Documentos

API para processamento inteligente de documentos, textos, transcrições, PDFs/DOCX e planilhas (CSV/XLSX), transformando-os em insights acionáveis: resumos claros, tópicos, itens de ação com sugestão de responsável e prazo, categorização, vetores para busca semântica, grafo de relacionamentos, padrões temporais e relatórios tabulares.

## 🎯 Funcionalidades

- ✅ **Processamento multilíngue avançado**: Suporte nativo para português, inglês, espanhol com modelos Transformer unificados
- ✅ **Suporte multi-formato**: PDFs, DOCX, TXT, CSV, XLSX, transcrições de reuniões
- ✅ **Sumarização inteligente**: Híbrida abstractiva/extractiva com map-reduce para documentos longos
- ✅ **Extração de itens de ação**: Detecção inteligente de tarefas com predição de responsável e prazo
- ✅ **Construção de grafo de conhecimento**: Descoberta automática de relacionamentos e mapeamento de entidades
- ✅ **Detecção de padrões temporais**: Tendências, anomalias, sazonalidade e previsões
- ✅ **Busca semântica**: Busca baseada em vetores com indexação HNSW
- ✅ **Aprendizado contínuo**: Loops de feedback e active learning para melhoria dos modelos
- ✅ **Especialização vertical**: Customizável para domínios financeiro, jurídico, RH
- ✅ **Pronto para produção**: Rate limiting, trilhas de auditoria, versionamento, monitoramento

## 🗼 Arquitetura

Arquitetura híbrida modular otimizando performance e flexibilidade:

```
core/               # Engine de processamento Rust de alta performance
├── ingestion/      # Parsing e normalização de documentos
├── chunking/       # Segmentação inteligente de texto
├── indexing/       # Armazenamento vetorial e busca
└── persistence/    # Armazenamento de dados e versionamento

ml-engine/          # Pipeline ML e NLP em Python
├── summarization/  # Sumarização abstractiva/extractiva
├── extraction/     # Extração de entidades e itens de ação
├── classification/ # Categorização multi-label de documentos
├── knowledge/      # Construção e análise de grafos
└── temporal/       # Detecção de padrões e previsões

api/               # Serviço web FastAPI
├── routes/        # Endpoints REST
├── middleware/    # Rate limiting, auth, logging
├── workers/       # Processamento assíncrono de jobs
└── monitoring/    # Health checks e métricas
```

## 🔧 Stack Tecnológico

### Processamento Core
- **Rust**: Processamento de documentos de alta performance, I/O e indexação
- **Python 3.10+**: Pipeline ML e processamento NLP
- **FastAPI**: Framework web moderno com suporte assíncrono
- **Pydantic v2**: Validação de dados e serialização

### Machine Learning
- **Transformers (Hugging Face)**: Modelos NLP estado da arte
- **SentenceTransformers**: Embeddings semânticos para busca
- **spaCy**: Reconhecimento de Entidades Nomeadas e análise linguística
- **scikit-learn**: Algoritmos de classificação e clustering

### Infraestrutura
- **Redis**: Cache de alta performance e filas de jobs
- **PostgreSQL**: Banco de dados principal com extensões vetoriais
- **HNSW**: Busca aproximada de vizinhos mais próximos
- **Docker**: Containerização completa

### Monitoramento e Observabilidade
- **Structured Logging**: Logs JSON com IDs de correlação
- **Prometheus Metrics**: Métricas de performance e negócio
- **Health Checks**: Monitoramento de saúde por componente
- **OpenTelemetry**: Rastreamento distribuído

## 📋 Pré-requisitos

- Python 3.10+
- Rust 1.70+ (para desenvolvimento do core)
- Docker (opcional para desenvolvimento, obrigatório para produção)
- Redis (opcional, usa fallback se indisponível)
- 4GB+ RAM para modelos ML

## 🚀 Instalação

### Desenvolvimento Local

```bash
# Clonar repositório
git clone https://github.com/thiagodifaria/SchemaAPI.git
cd SchemaAPI

# Criar ambiente virtual
python -m venv venv
source venv/bin/activate  # Linux/Mac
venv\Scripts\activate     # Windows

# Instalar dependências Python
pip install -r requirements.txt

# Instalar dependências Rust (opcional, para desenvolvimento do core)
cargo build --release

# Iniciar aplicação
python -m uvicorn app.main:app --reload
```

### Com Docker (Recomendado)

```bash
# Ambiente de desenvolvimento
docker-compose up --build

# Ambiente de produção
docker-compose -f docker-compose.prod.yml up -d
```

## ⚙️ Configuração

### Variáveis de Ambiente

```env
# Aplicação
SCHEMAAPI_DEBUG=true
SCHEMAAPI_ENVIRONMENT=development
SCHEMAAPI_LOG_LEVEL=INFO

# Processamento
SCHEMAAPI_PROCESSING__MAX_FILE_SIZE_MB=100
SCHEMAAPI_PROCESSING__CHUNK_SIZE=512
SCHEMAAPI_PROCESSING__OVERLAP_SIZE=50

# Modelos ML
SCHEMAAPI_ML__SUMMARIZATION_MODEL=facebook/bart-large-cnn
SCHEMAAPI_ML__EMBEDDING_MODEL=all-MiniLM-L6-v2
SCHEMAAPI_ML__NER_MODEL=pt_core_news_sm

# Database
SCHEMAAPI_DATABASE__URL=postgresql://user:pass@localhost:5432/schemaapi
SCHEMAAPI_DATABASE__POOL_SIZE=20

# Cache & Queue
SCHEMAAPI_REDIS__URL=redis://localhost:6379/0
SCHEMAAPI_REDIS__TTL=3600

# Rate Limiting
SCHEMAAPI_RATE_LIMIT__REQUESTS_PER_MINUTE=60
SCHEMAAPI_RATE_LIMIT__REQUESTS_PER_HOUR=500
```

## 📊 Uso da API

### Processamento de Documentos

```bash
curl -X POST "http://localhost:8000/api/v1/documents/process" \
     -H "Content-Type: multipart/form-data" \
     -F "file=@documento.pdf" \
     -F "config={\"summarization\": {\"type\": \"hybrid\", \"length\": \"detailed\"}}"
```

**Resposta:**
```json
{
  "document_id": "c5d3b066-013b-4a9c-baeb-5f420200f796",
  "processing_status": "completed",
  "metadata": {
    "filename": "documento.pdf",
    "file_type": "pdf",
    "pages": 12,
    "word_count": 3420,
    "language": "pt",
    "processing_time_ms": 2341.7
  },
  "summary": {
    "text": "Revisão trimestral abrangente discutindo alocação de orçamento...",
    "type": "hybrid",
    "confidence": 0.89,
    "key_points": [
      "Aumento de orçamento de 15% aprovado",
      "Novo plano de contratações para Q4",
      "Iniciativas de upgrade tecnológico"
    ]
  },
  "action_items": [
    {
      "id": "action_001",
      "task": "Finalizar proposta de orçamento para Q4",
      "assignee": {
        "name": "Maria Silva",
        "email": "maria@empresa.com",
        "confidence": 0.92
      },
      "due_date": {
        "date": "2025-09-15",
        "confidence": 0.85,
        "source": "explicit"
      },
      "priority": "high",
      "context": "Discussão de orçamento na revisão trimestral"
    }
  ],
  "topics": [
    {
      "topic": "planejamento orçamentário",
      "weight": 0.85,
      "type": "decision",
      "related_entities": ["Q4", "financeiro", "planejamento"]
    }
  ],
  "classifications": [
    {"label": "documento_financeiro", "score": 0.94},
    {"label": "ata_reuniao", "score": 0.88}
  ]
}
```

### Processamento em Lote

```bash
curl -X POST "http://localhost:8000/api/v1/documents/batch" \
     -H "Content-Type: multipart/form-data" \
     -F "files=@doc1.pdf" \
     -F "files=@doc2.docx" \
     -F "files=@planilha.xlsx"
```

### Exploração do Grafo de Conhecimento

```bash
# Obter relacionamentos de entidades
curl "http://localhost:8000/api/v1/knowledge/graph?entity=Maria%20Silva&depth=2"

# Encontrar conexões entre entidades
curl "http://localhost:8000/api/v1/knowledge/path?from=projeto_alpha&to=orcamento_2025"
```

### Busca Semântica

```bash
curl -X POST "http://localhost:8000/api/v1/search/semantic" \
     -H "Content-Type: application/json" \
     -d '{
       "query": "discussões de orçamento e planejamento financeiro",
       "filters": {
         "date_range": ["2025-01-01", "2025-12-31"],
         "document_types": ["ata_reuniao", "relatorio_financeiro"]
       },
       "limit": 10
     }'
```

## 📝 Endpoints Principais

| Endpoint | Método | Descrição | Rate Limit |
|----------|--------|-----------|-------------|
| `/api/v1/documents/process` | POST | Processar documento único | 30/min |
| `/api/v1/documents/batch` | POST | Processamento em lote | 5/min |
| `/api/v1/documents/{id}` | GET | Obter análise do documento | 100/min |
| `/api/v1/documents/{id}/summary` | GET | Obter resumo do documento | 100/min |
| `/api/v1/documents/{id}/actions` | GET | Obter itens de ação | 100/min |
| `/api/v1/knowledge/graph` | GET | Consultas no grafo de conhecimento | 20/min |
| `/api/v1/search/semantic` | POST | Busca semântica | 60/min |
| `/api/v1/analytics/patterns` | GET | Padrões temporais | 10/min |
| `/api/v1/history` | GET | Histórico de processamento | 60/min |

## 🧪 Testes

### Executar Testes

```bash
# Todos os testes
pytest

# Com cobertura
pytest --cov=app tests/ --cov-report=html

# Suítes de teste específicas
pytest tests/test_processing.py
pytest tests/test_knowledge_graph.py
pytest tests/test_summarization.py

# Testes de performance
pytest tests/performance/ -v

# Testes de integração
pytest tests/integration/ -v
```

### Cobertura de Testes

- ✅ Processamento de documentos (PDF, DOCX, TXT, CSV, XLSX)
- ✅ Sumarização (abstractiva, extractiva, híbrida)
- ✅ Extração de itens de ação e predição de responsável
- ✅ Construção e consultas do grafo de conhecimento
- ✅ Busca semântica e indexação vetorial
- ✅ Detecção de padrões temporais
- ✅ Rate limiting e tratamento de erros
- ✅ Cenários de integração end-to-end

## 📈 Performance

### Benchmarks Típicos

- **Documento único (< 10MB)**: < 3s tempo de processamento
- **Processamento em lote (10 documentos)**: < 15s total
- **Busca semântica**: < 200ms tempo de resposta
- **Consultas no grafo de conhecimento**: < 500ms
- **Taxa de cache hit**: > 75% em uso típico

### Otimizações

- Core baseado em Rust para operações intensivas de I/O
- Chunking inteligente com dimensionamento adaptativo
- Indexação vetorial com HNSW para busca rápida por similaridade
- Cache Redis para operações repetidas
- Connection pooling para operações de banco de dados
- Processamento assíncrono para tarefas de longa duração

## 🐳 Deploy em Produção

### Docker Compose Produção

```bash
# Deploy completo de produção
docker-compose -f docker-compose.prod.yml up -d

# Escalar workers baseado na carga
docker-compose -f docker-compose.prod.yml up -d --scale worker=4

# Health check
curl http://localhost:8000/health
```

### Configuração de Produção

- **Database**: PostgreSQL com extensão pgvector
- **Cache**: Redis com persistência e clustering
- **Workers**: Múltiplos workers assíncronos com filas de jobs
- **Monitoring**: Dashboards Prometheus + Grafana
- **Security**: Autenticação JWT, validação de entrada, rate limiting
- **Scaling**: Escalonamento horizontal com balanceamento de carga

## 📊 Monitoramento

### Health Checks

```bash
# Health geral
curl http://localhost:8000/health

# Health específico por componente
curl http://localhost:8000/api/v1/documents/health
curl http://localhost:8000/api/v1/knowledge/health
```

### Métricas Disponíveis

- Volume de requisições e latência por endpoint
- Taxa de sucesso/falha no processamento de documentos
- Performance de modelos ML e tempos de inferência
- Taxas de cache hit/miss
- Estatísticas do grafo de conhecimento
- Utilização de recursos (CPU, memória, disco)

### Logs Estruturados

```json
{
  "timestamp": "2025-08-18T10:30:00Z",
  "level": "INFO",
  "service": "schemaapi",
  "component": "document_processor",
  "message": "Documento processado com sucesso",
  "context": {
    "document_id": "doc_123",
    "file_type": "pdf",
    "processing_time_ms": 2341,
    "action_items_found": 5,
    "entities_extracted": 23
  }
}
```

## 🔒 Segurança

- **Autenticação**: Tokens JWT com expiração configurável
- **Validação de Entrada**: Validação rigorosa para todos os tipos de arquivo e entradas
- **Rate Limiting**: Rate limiting por IP e por endpoint
- **Privacidade de Dados**: Redação configurável de PII e anonimização
- **Trilha de Auditoria**: Log completo de todas as atividades de processamento de documentos
- **Containers Seguros**: Containers non-root com superfície de ataque mínima

## 📚 Documentação

- **Documentação Interativa da API**: http://localhost:8000/docs
- **Documentação Alternativa**: http://localhost:8000/redoc
- **Schema OpenAPI**: http://localhost:8000/openapi.json
- **Visualização do Grafo de Conhecimento**: http://localhost:8000/graph

## 📜 Licença

Distribuído sob a licença MIT. Veja `LICENSE` para mais informações.

## 📞 Contato

**Thiago Di Faria**
- Email: thiagodifaria@gmail.com
- GitHub: [@thiagodifaria](https://github.com/thiagodifaria)
- Projeto: [https://github.com/thiagodifaria/SchemaAPI](https://github.com/thiagodifaria/SchemaAPI)

---

⭐ **SchemaAPI** - Transforme documentos em inteligência com precisão e performance.