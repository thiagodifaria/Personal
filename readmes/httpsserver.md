# HTTPS Server - Servidor HTTPS de Alta Performance

Servidor HTTPS avançado implementado em C++17 com operações de rede otimizadas com SIMD, aceleração de parsing HTTP, engines de validação, algoritmos de compressão e implementações criptográficas avançadas. Este projeto oferece uma solução completa para aplicações web de alto throughput com otimizações assembly hand-coded.

## 🎯 Funcionalidades

- ✅ **Operações de Rede SIMD**: Base64 vetorizado, UUID v4 hardware RNG, hex encoding otimizado
- ✅ **Aceleração HTTP Parsing**: Detecção AVX2 \r\n\r\n, extração method/URI, contagem de headers
- ✅ **Engine de Validação**: Validação JSON SIMD, UTF-8 vetorizada, sanitização de entrada
- ✅ **Criptografia Avançada**: ChaCha20-Poly1305, Blake3, X25519, AES-NI, SHA-256 AVX
- ✅ **Suite de Compressão**: Deflate, LZ4, Brotli com otimização sliding window
- ✅ **Benchmarks Performance**: Interface web em tempo real para testar todas as otimizações
- ✅ **Produção Ready**: TLS 1.3, logging estruturado, thread pool, cross-platform

## 🗂️ Arquitetura

Arquitetura modular com componentes otimizados SIMD:

```
src/
├── core/           # Infraestrutura (servidor, config, thread pool)
├── crypto/         # Crypto avançado: ChaCha20, Blake3, X25519, AES-NI
├── http/           # Aceleração HTTP, compressão, servir estáticos
├── utils/          # Network ops, validação, compressão SIMD
└── main.cpp        # Ponto de entrada e API de benchmarks
```

## 🔧 Stack Tecnológico

### Otimizações SIMD
- **AVX2**: Processamento paralelo 32-byte para parsing HTTP
- **VPSHUFB**: Tabelas de lookup Base64
- **RDRAND**: Geração hardware de números aleatórios para UUID v4
- **Classificação de Caracteres**: Engines de validação SIMD

### Criptografia Avançada
- **ChaCha20-Poly1305**: Criptografia autenticada moderna
- **Blake3**: Tree hashing com otimizações SIMD
- **X25519**: Montgomery ladder scalar multiplication
- **AES-NI + SHA-256**: Implementações assembly hand-optimized

### Algoritmos de Compressão
- **Deflate**: Otimizado para arquivos pequenos com hash tables
- **LZ4**: Compressão ultra-rápida com string matching
- **Brotli**: Otimização de conteúdo web para HTML/CSS/JS

### Tecnologias Core
- **C++17**: C++ moderno com recursos avançados
- **OpenSSL 3.0**: Estendido com provider customizado
- **CMake**: Sistema de build cross-platform
- **NASM**: Assembler x86-64 para otimizações

## 📋 Pré-requisitos

- Compilador compatível com C++17+ (MSVC 2022, GCC 9+, Clang 10+)
- CMake 3.16+
- OpenSSL 3.0+
- NASM (para compilação assembly)
- CPU com suporte AVX2 (recomendado para performance completa)

## 🚀 Instalação Rápida

### Windows (Recomendado)

```bash
# Clonar repositório
git clone https://github.com/thiagodifaria/HTTPS-Server.git
cd HTTPS-Server

# Build com PowerShell
./build.ps1

# Executar servidor
./build/Release/https_server.exe
```

### Linux/Unix

```bash
# Clonar repositório
git clone https://github.com/thiagodifaria/HTTPS-Server.git
cd HTTPS-Server

# Configurar e compilar
mkdir build && cd build
cmake .. -DCMAKE_BUILD_TYPE=Release
make -j$(nproc)

# Executar servidor
./https_server
```

## ⚙️ Configuração

### Configuração do Ambiente

O servidor usa um arquivo `config.json` para configuração:

```json
{
    "port": 8443,
    "threads": 0,
    "cert_file": "cert.pem",
    "key_file": "key.pem", 
    "web_root": "public",
    "log_level": "INFO"
}
```

### Detecção de Recursos CPU

O servidor automaticamente detecta e habilita:
- **AVX2**: Para parsing HTTP e operações Base64
- **RDRAND**: Para geração hardware de UUID
- **AES-NI**: Para aceleração criptográfica

## 📊 Uso da API

### Benchmarks de Performance

```bash
# Execução de benchmark em tempo real
curl -k https://localhost:8443/api/benchmark

# Retorna dados de performance:
# {
#   "aes_ni": {"throughput": "3.51 GB/s", "time": "0.08s"},
#   "sha256": {"throughput": "2.1 GB/s", "time": "0.12s"},
#   "p256": {"field_ops": 850000, "ecdh_est": 1660}
# }
```

### API JSON com Validação SIMD

```bash
curl -k -X POST "https://localhost:8443/api/echo" \
     -H "Content-Type: application/json" \
     -d '{"message": "Olá Mundo!", "encode_data": "dados teste"}'
```

**Resposta com operações de rede:**
```json
{
  "message": "Olá Mundo!",
  "encode_data": "dados teste",
  "base64_encoded": "ZGFkb3MgdGVzdGU=",
  "hex_encoded": "646164732074726573746520",
  "received": true,
  "timestamp": 1234567890,
  "server": "HTTPS Server v1.0"
}
```

### Interface Web de Performance

```bash
# Acessar interface de benchmark
curl -k https://localhost:8443/bench
# Interface web interativa para executar testes de performance

# Interface principal com todas as funcionalidades
curl -k https://localhost:8443/
# Interface HTML moderna mostrando todas as otimizações
```

## 🛠️ Endpoints Principais

| Endpoint | Método | Descrição | Recursos SIMD |
|----------|--------|-----------|---------------|
| `/` | GET | Interface principal | Aceleração parsing HTTP |
| `/about` | GET | Detalhes técnicos | Info todas otimizações |
| `/bench` | GET | Interface benchmark | Teste performance tempo real |
| `/api/echo` | POST | Processamento JSON | Validação SIMD + network ops |
| `/api/benchmark` | GET | API Performance | Benchmarks todos algoritmos |

## 🧪 Testes e Benchmarks

### Benchmarks Baseados em Web

```bash
# Acessar benchmarks interativos
https://localhost:8443/bench

# Endpoint API para testes automatizados
curl -k https://localhost:8443/api/benchmark
```

### Testes Linha de Comando

```bash
# Benchmark assembly AES
./build/Release/benchmark_aes.exe
# Output: AES-NI Assembly: 3.51 GB/s (20M blocos, 305 MB em 0.08s)

# Benchmark assembly SHA-256
./build/Release/benchmark_sha256.exe
# Output: SHA-256 Assembly: Alta performance com registradores AVX

# Benchmark curva elíptica P-256
./build/Release/benchmark_p256.exe
# Output: Operações de campo, aritmética de pontos, estimativas ECDH
```

### Teste de Recursos SIMD

O servidor registra detecção de capacidades SIMD:

```
[Info] AVX2 memory optimizations enabled
[Info] HTTP parsing optimizations enabled  
[Info] Network operations optimized (Base64/UUID/Hex with RDRAND+AVX2)
[Info] Advanced crypto algorithms available (ChaCha20, Blake3, X25519)
[Info] Compression optimizations enabled (Deflate/LZ4/Brotli)
```

## 📈 Performance e Benchmarks

### Performance em Tempo Real

Acesse benchmarks ao vivo em `https://localhost:8443/bench`:

- **AES-NI Assembly**: 3.51 GB/s throughput
- **SHA-256 AVX**: Computação hash vetorizada
- **HTTP Parsing**: Detecção \r\n\r\n acelerada com AVX2
- **Base64 SIMD**: Operações tabela lookup VPSHUFB
- **UUID Generation**: Hardware RDRAND quando disponível
- **Compression**: Otimização multi-algoritmo

### Otimizações SIMD Implementadas

- **HTTP Parsing**: VPCMPEQB para pattern matching 32-byte
- **Operações Base64**: Tabelas lookup caractere VPSHUFB  
- **Engine Validação**: Detecção classe caractere com SIMD
- **Compressão**: Sliding window com hash tables
- **Network Operations**: Batch processing para arrays

## 🔒 Recursos de Segurança

- **TLS 1.3**: Protocolo criptografia mais recente
- **Validação SIMD**: Sanitização rápida entrada e validação JSON
- **Crypto Avançado**: Algoritmos ChaCha20-Poly1305, Blake3, X25519
- **Hardware RNG**: RDRAND para geração segura UUID
- **Validação Entrada**: Detecção classe caractere SIMD
- **Proteção Buffer**: Gerenciamento seguro memória com operações zero-copy

## 📄 Desenvolvimento

### Estrutura Módulos SIMD

```cpp
// Exemplo: Uso operações de rede
auto& net_ops = network_ops::NetworkOps::instance();
if (net_ops.has_avx2() && net_ops.has_rdrand()) {
    // Operações aceleradas hardware
    std::string encoded = net_ops.encode_base64(data);
    uint8_t uuid[16];
    net_ops.uuid_generate_v4(uuid);
}

// Exemplo: Aceleração parsing HTTP
if (http_accelerated::HttpOps::instance().has_avx2()) {
    size_t header_end;
    bool found = http_ops.find_header_end(data, len, &header_end);
}

// Exemplo: Validação com SIMD
auto result = validation::ValidationOps::instance()
    .json_validate_fast(json_data.c_str(), json_data.size());
```

### Integração Benchmarks

```cpp
// Teste performance acessível via web
router.add_route("GET", "/api/benchmark", [](const auto& req) {
    auto aes_result = benchmark::run_aes_benchmark();
    auto sha_result = benchmark::run_sha256_benchmark();
    auto p256_result = benchmark::run_p256_benchmark();
    
    json response;
    response["aes_ni"]["throughput"] = format_throughput(aes_result);
    response["sha256"]["throughput"] = format_throughput(sha_result);
    response["p256"]["field_ops"] = p256_result.field_ops_per_sec;
    
    return json_response(response);
});
```

## 🚀 Deploy em Produção

### Considerações de Performance

- Habilite todas otimizações SIMD com build Release
- Verifique capacidades CPU (AVX2, RDRAND, AES-NI)
- Configure número apropriado threads para workload
- Monitore performance via endpoint `/api/benchmark`
- Use compressão para entrega conteúdo estático

### Monitoramento Capacidades SIMD

O servidor fornece detecção abrangente de capacidades:

```json
{
  "cpu_features": {
    "avx2": true,
    "rdrand": true,
    "aes_ni": true
  },
  "optimizations": {
    "http_parsing": "enabled",
    "network_operations": "full",
    "validation_engine": "simd",
    "compression": "multi-algorithm"
  }
}
```

## 📚 Documentação

- **Interface Web**: Demonstração interativa todos recursos SIMD
- **Suite Benchmark**: Teste performance tempo real via browser
- **Documentação API**: Documentação endpoint abrangente
- **Guia Arquitetura**: Documentação otimização SIMD
- **Análise Performance**: Explicações detalhadas otimizações

## 📜 Licença

Distribuído sob a licença MIT. Veja `LICENSE` para mais informações.

## 📞 Contato

**Thiago Di Faria**
- Email: thiagodifaria@gmail.com
- GitHub: [@thiagodifaria](https://github.com/thiagodifaria)
- Projeto: [https://github.com/thiagodifaria/HTTPS-Server](https://github.com/thiagodifaria/HTTPS-Server)

---

⭐ **HTTPS Server** - Performance extrema com otimizações SIMD abrangentes e arquitetura moderna.