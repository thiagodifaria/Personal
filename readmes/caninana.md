# Caninana - Engine Antivírus em C++

> **Caninana** é uma cobra brasileira não peçonhenta conhecida por sua agilidade e eficiência na caça. Assim como seu xará, este projeto foi desenvolvido para ser um engine antivírus ágil e eficiente, construído do zero em C++ moderno com interface Python.

## 🌐 Demonstração

Este é um projeto educacional que implementa os conceitos fundamentais de um engine antivírus moderno, incluindo análise de arquivos, detecção por assinaturas, quarentena e atualizações automáticas.

## 🔍 Sobre o Projeto

O **Caninana** é um engine antivírus desenvolvido como projeto de aprendizado e curiosidade técnica. Construído em **3 dias de desenvolvimento total** (com uma fundação sólida estabelecida nas primeiras 4 horas), o projeto implementa uma arquitetura robusta que demonstra os princípios fundamentais de segurança cibernética e desenvolvimento de sistemas em C++. 

### 🎯 Objetivos do Projeto

- **Aprendizado Prático**: Explorar conceitos de segurança cibernética na prática
- **C++ Moderno**: Aplicar padrões modernos de C++17 (RAII, smart pointers, etc.)
- **Arquitetura de Software**: Demonstrar separação de responsabilidades e design modular
- **Integração Python-C++**: Utilizar pybind11 para criar interfaces elegantes
- **Algoritmos de Pattern Matching**: Implementar Aho-Corasick para detecção eficiente

### 🐍 Por que "Caninana"?

O nome foi escolhido em homenagem à **Caninana** (*Spilotes pullatus*), uma cobra brasileira conhecida por sua velocidade e eficiência. Como desenvolvedor brasileiro apaixonado por Python 🐍, achei a conexão perfeita entre a cobra, a linguagem de programação e a agilidade desejada no engine antivírus.

## 🛡️ Funcionalidades

### ✅ Implementadas

- 🔍 **Análise de Arquivos**: Detecção de tipo via libmagic e hash SHA256
- 🎯 **Engine de Assinaturas**: Algoritmo Aho-Corasick para pattern matching eficiente
- 🔒 **Sistema de Quarentena**: Isolamento seguro com criptografia XOR
- 📊 **Monitoramento de Performance**: Timeout automático para prevenir DoS
- 📝 **Logging de Segurança**: Sistema centralizado e thread-safe de auditoria
- 🔄 **Atualizador de Assinaturas**: Download e validação automática via HTTP
- 🐍 **Interface Python**: Bindings elegantes usando pybind11
- 🎨 **Interface Gráfica**: Dashboard moderno em PyQt6

### 🔧 Arquitetura Técnica

```
┌───────────────────────────────────────────────────────────────┐
│                    Interface Python (UI)                      │
│                     PyQt6 + Dashboard                         │
└─────────────────────┬─────────────────────────────────────────┘
                      │ pybind11 bindings
┌─────────────────────▼─────────────────────────────────────────┐
│                    Core Engine C++17                          │
├───────────────────────────────────────────────────────────────┤
│  FileTypeAnalyzer  │  SignatureEngine   │  QuarantineManager  │
│  • libmagic        │  • Aho-Corasick    │  • XOR encryption   │
│  • SHA256 hash     │  • JSON signatures │  • Metadata ledger  │
├───────────────────────────────────────────────────────────────┤
│  SecurityLogger    │  PerformanceMonitor │  SignatureUpdater  │
│  • Thread-safe     │  • DoS protection   │  • HTTP downloads  │
│  • Centralized     │  • Timeout control  │  • Auto validation │
└───────────────────────────────────────────────────────────────┘
```

## 🚀 Stack Tecnológica

### Backend (C++ Core)
- **C++17**: Padrões modernos com RAII e const correctness
- **CMake 3.18+**: Build system moderno e cross-platform
- **vcpkg**: Gerenciamento de dependências
- **OpenSSL**: Criptografia e hashing seguro
- **libmagic**: Detecção robusta de tipos de arquivo
- **nlohmann/json**: Parsing eficiente de configurações
- **cpr**: Cliente HTTP moderno para C++

### Frontend (Python Interface)
- **Python 3.7+**: Linguagem principal da interface
- **pybind11**: Bindings C++/Python de alta performance
- **PyQt6**: Framework GUI moderno e responsivo

### Algoritmos e Padrões
- **Aho-Corasick**: Pattern matching multi-string em O(n + m + z)
- **RAII**: Gerenciamento automático de recursos
- **Singleton Pattern**: Logger centralizado thread-safe
- **Strategy Pattern**: Diferentes tipos de análise de arquivo

## 📋 Pré-requisitos

### Sistema
- **Windows/Linux/macOS** (testado no Windows)
- **CMake 3.18+**
- **Compilador C++17** (MSVC 2019+, GCC 8+, Clang 9+)
- **Python 3.7+**
- **vcpkg** (gerenciador de dependências)

### Dependências C++
```bash
# Via vcpkg
vcpkg install openssl nlohmann-json pybind11 cpr unofficial-libmagic
```

## 🔧 Instalação e Execução

### 1. Clone o Repositório
```bash
git clone https://github.com/seu-usuario/caninana-antivirus.git
cd caninana-antivirus
```

### 2. Instale Dependências Python
```bash
pip install -r requirements.txt
```

### 3. Build do Core C++
```bash
mkdir build
cd build
cmake .. -DCMAKE_TOOLCHAIN_FILE=path/to/vcpkg/scripts/buildsystems/vcpkg.cmake
cmake --build . --config Release
```

### 4. Execute a Interface
```bash
cd ui
python main.py
```

### 5. Teste o Core (Opcional)
```bash
cd scripts
python test_core.py
```

## 🏗️ Estrutura do Projeto

```
caninana/
├── 📁 core/                    # Engine C++ principal
│   ├── 📁 include/            # Headers públicos
│   │   ├── file_analyzer.h    # Análise de arquivos
│   │   ├── signature_engine.h # Pattern matching
│   │   ├── quarantine_manager.h # Sistema de quarentena
│   │   ├── security_logger.h  # Logging centralizado
│   │   └── performance_monitor.h # Controle de timeout
│   ├── 📁 src/               # Implementações C++
│   │   ├── bindings.cpp      # Interface pybind11
│   │   └── *.cpp            # Implementações dos módulos
│   └── CMakeLists.txt       # Build configuration
├── 📁 ui/                    # Interface Python
│   ├── main.py              # Ponto de entrada
│   └── 📁 components/       # Componentes da interface
├── 📁 signatures/           # Base de assinaturas
│   ├── default.json         # Assinaturas padrão
│   └── test_signatures.json # Para testes (inclui EICAR)
├── 📁 scripts/              # Scripts utilitários
│   └── test_core.py         # Testes do core C++
├── 📁 config/               # Configurações
│   └── default_config.json  # Config padrão
├── CMakeLists.txt           # Build principal
├── requirements.txt         # Dependências Python
└── README.md               # Este arquivo
```

## 🧪 Módulos Principais

### 🔍 FileTypeAnalyzer
Responsável pela análise inicial de arquivos usando uma abordagem de streaming para eficiência de memória.

**Funcionalidades:**
- Detecção de tipo via libmagic (magic numbers)
- Cálculo de hash SHA256 em chunks
- Extração de metadados (tamanho, extensão)
- Tratamento de arquivos grandes sem sobrecarga de RAM

### 🎯 SignatureEngine
Implementa detecção de malware baseada em assinaturas usando o algoritmo Aho-Corasick.

**Características:**
- Pattern matching multi-string simultâneo
- Indexação por tipo de arquivo para otimização
- Timeout de 30s para prevenir DoS
- Suporte a diferentes níveis de severidade

### 🔒 QuarantineManager
Sistema de isolamento seguro para arquivos maliciosos detectados.

**Recursos:**
- Criptografia XOR para neutralização
- Metadata ledger em JSON
- Operações atômicas com rollback
- Restauração segura com validação

### 📝 SecurityLogger
Sistema centralizado de auditoria thread-safe para todas as operações do engine.

**Características:**
- Singleton pattern thread-safe
- Diferentes níveis de log (INFO, WARNING, ERROR, CRITICAL)
- Timestamps automáticos
- Fallback para stderr em caso de falha

### 🔄 SignatureUpdater
Gerenciador de atualizações automáticas da base de assinaturas.

**Funcionalidades:**
- Download HTTP de atualizações
- Validação de integridade
- Versionamento automático
- Aplicação atômica de updates

## 🎯 Detalhes Técnicos

### 🧠 Algoritmo Aho-Corasick
```cpp
// Complexidade: O(n + m + z)
// n = tamanho do texto
// m = tamanho total dos padrões
// z = número de ocorrências
```

### 🔐 Sistema de Quarentena
```cpp
// XOR simples para neutralização
for (char& byte : file_content) {
    byte ^= XOR_KEY[index % XOR_KEY.size()];
}
```

### 🛡️ Prevenção DoS
```cpp
// Timeout automático de 30 segundos
if (monitor.HasTimedOut(std::chrono::seconds(30))) {
    return ScanResult::TIMEOUT_ERROR;
}
```

## 📚 Comentários em Inglês

> **Nota**: Os comentários no código estão em inglês devido à maior disponibilidade de recursos e documentação técnica neste idioma. Isso facilita pesquisas, consultas a documentações oficiais e manutenção do código, evitando traduções constantes que poderiam gerar ambiguidades técnicas.

## 🔬 Testes

### Executar Testes do Core
```bash
cd scripts
python test_core.py
```

### Arquivo de Teste EICAR
O projeto inclui suporte ao **EICAR test file**, padrão da indústria para testar engines antivírus:
```
X5O!P%@AP[4\PZX54(P^)7CC)7}$EICAR-STANDARD-ANTIVIRUS-TEST-FILE!$H+H*
```

## 📈 Performance

### Benchmarks Típicos
- **Análise de arquivo (1MB)**: ~50ms
- **Scan com 1000 assinaturas**: ~100ms
- **Carregamento de assinaturas**: ~10ms
- **Timeout máximo**: 30s (configurável)

### Otimizações Implementadas
- Streaming de arquivos para memória constante
- Indexação de assinaturas por tipo
- Pattern matching eficiente O(n + m + z)
- Thread-safe com overhead mínimo

## 🛣️ Roadmap & To-Do

### 🔥 Prioridade Alta
- [ ] **Testes Unitários Completos**: Cobertura de 90%+ com Google Test
- [ ] **Validação de Entrada Robusta**: Sanitização de todos os inputs
- [ ] **Chave XOR Segura**: Substituir por derivação criptográfica
- [ ] **Interface Gráfica Completa**: Dashboard funcional em PyQt6
- [ ] **Documentação API**: Doxygen para documentação técnica

### 🚀 Funcionalidades Avançadas
- [ ] **Engine Heurístico**: Detecção comportamental
- [ ] **Monitoramento Real-time**: File system watchers
- [ ] **Machine Learning**: Classificação de malware com TensorFlow
- [ ] **Cloud Integration**: Reputação online e threat intelligence
- [ ] **Kernel Driver**: Proteção em nível de sistema (Windows/Linux)

### 🎨 Melhorias de Interface
- [ ] **Dashboard Moderno**: Estatísticas em tempo real
- [ ] **Configurações Avançadas**: Interface para todas as opções
- [ ] **Relatórios**: Exportação de logs e estatísticas
- [ ] **Tema Dark/Light**: Suporte a temas customizáveis
- [ ] **Localização**: Suporte a múltiplos idiomas

### 🔧 Otimizações Técnicas
- [ ] **Memory Pool**: Alocação otimizada para patterns
- [ ] **SIMD Instructions**: Acelerar pattern matching
- [ ] **Compressão de Assinaturas**: Reduzir tamanho da base
- [ ] **Cache Inteligente**: Resultados de scan frequentes
- [ ] **Profiling Integrado**: Métricas de performance detalhadas

### 🌐 Multiplataforma
- [ ] **Linux Support**: Build nativo e packages
- [ ] **macOS Support**: Framework bundle
- [ ] **Docker Container**: Deploy em containers
- [ ] **Package Managers**: Chocolatey, Homebrew, APT
- [ ] **CI/CD Pipeline**: GitHub Actions para builds automáticos

### 📊 Analytics & Monitoring
- [ ] **Telemetria**: Métricas de uso e performance
- [ ] **Crash Reporting**: Diagnóstico automático de falhas
- [ ] **A/B Testing**: Teste de diferentes algoritmos
- [ ] **Health Checks**: Monitoramento de status do engine
- [ ] **Integration Tests**: Testes end-to-end automatizados

## 📜 Licença

Este projeto está licenciado sob a licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes.

## 👨‍💻 Autor

**Thiago Di Faria**
- GitHub: [@thiagodifaria](https://github.com/thiagodifaria)
- Email: thiagodifaria@gmail.com
- LinkedIn: [Thiago Di Faria](https://linkedin.com/in/thiagodifaria)

## 🙏 Agradecimentos

- **Comunidade pybind11**: Pela excelente documentação e exemplos
- **Algoritmo Aho-Corasick**: Pelos papers e implementações de referência
- **EICAR Organization**: Pelo arquivo de teste padrão da indústria
- **Comunidade C++**: Pelas discussões sobre padrões modernos

---