# Documentação do Código de Cache e Predição

## Visão Geral
O código JavaScript utiliza Node.js e o cliente Redis para armazenar e recuperar dados de produtos. O objetivo é melhorar o tempo de resposta de uma aplicação através de caching e uma lógica de previsão de categorias de produtos.

## Configuração do Cliente Redis

### Inicialização do Cliente Redis
- Importa o módulo `redis`.
- Cria uma instância do cliente Redis utilizando `redis.createClient()`.
- Configura um manipulador para capturar e registrar erros no console com `redisClient.on("error", handler)`.

### Conexão com o Redis
- Conecta ao servidor Redis usando uma função assíncrona autoinvocada e `await redisClient.connect()`.

## Estrutura de Dados dos Produtos
Define um array `products` contendo objetos que representam produtos. Cada objeto tem um `id`, `name`, e `price`.

## Funções

### Função `predict`
- **Propósito:** Simula uma previsão de categoria de produto baseada no preço.
- **Processo:**
  - Busca o produto pelo `id`.
  - Retorna uma promessa que resolve após 2 segundos com a categoria calculada e acurácia de `0.45`.
  - Se o produto não for encontrado, a promessa é rejeitada com um erro.

### Função `getProducts`
- **Propósito:** Recupera informações de produtos do cache Redis.
- **Processo:**
  - Realiza uma busca no Redis pela chave correspondente ao `id` do produto.
  - Retorna um objeto com os dados recuperados.

### Função `setProducts`
- **Propósito:** Armazena informações de um produto no cache Redis.
- **Processo:**
  - Armazena o nome do produto no Redis.
  - Define um tempo de expiração para a chave de 24 horas.
  - Registra no console que os dados foram salvos.

### Função `run`
- **Propósito:** Gerencia o processo de caching e previsão de categorias de produtos.
- **Processo:**
  - Mede o tempo inicial.
  - Verifica se o produto está no cache.
  - Caso positivo, imprime os dados do cache e o tempo de resposta.
  - Caso negativo, realiza uma previsão e, se acurácia > 0.9, armazena o resultado no cache.
  - Imprime a previsão e o tempo total de execução.

## Melhoria no Tempo de Resposta
- **Caching:** Utiliza o Redis para armazenar dados acessados frequentemente, permitindo respostas rápidas.
- **Predição Condicional de Cache:** Salva a categoria do produto no cache somente se a acurácia da previsão é alta.

## Execução do Código para Demonstração de Melhoria no Tempo de Resposta

### Pré-Requisitos
- Node.js instalado no ambiente de execução.
- Uma instância de Redis rodando localmente ou acessível remotamente.

### Passos para Execução

1. **Instalação do Cliente Redis:**
   - No terminal, execute `npm install redis` para instalar o pacote do cliente Redis.

2. **Iniciar o Script:**
   - Execute o script usando o Node.js com o comando `node tempo_resposta.js`.

3. **Demonstração:**
   - Na primeira execução da função `run`, o produto não estará no cache, portanto, a função `predict` será chamada. Isso resultará em uma espera de 2 segundos.
   - Após a previsão, se a acurácia for maior que 0.9, o resultado será armazenado no cache.
   - O tempo total desde o início até o fim da operação será registrado no console.
   - Execute a função `run` com o mesmo ID de produto novamente.
   - Desta vez, o resultado deve ser recuperado do cache, significativamente mais rápido do que a previsão inicial, pois não haverá atraso de 2 segundos.
   - O tempo de resposta melhorado será evidente no tempo registrado no console.

### Observação Importante
- O resultado da melhoria no tempo de resposta pode ser observado comparando os tempos de execução no console antes e depois do caching.
- A demonstração é mais eficaz se o cache estiver vazio inicialmente, então considere limpar o cache do Redis se você estiver repetindo o teste.

### Logs de Console
- Acompanhe os logs de console para entender o fluxo de execução e os tempos de resposta. Eles fornecerão uma visão clara de como o cache melhora o desempenho.

### Resultados
- Rodando o código pela primeira vez para um produto, nós obtemos o mesmo tempo de resposta do modelo atual, tendo em vista que o código de predição de categoria não se alterou. Sendo assim, rodando pela primeira vez temos um tempo de resposta de 2000 ms

<img src="https://imgur.com/YBFsnQt.png"/>

- Agora, como possuímos o cache, tendo em vista que a predição da resposta anterior teve uma acurácia de 91%, o tempo de resposta irá diminuir drasticamente, tendo em vista que agora não iremos necessitar efetuar uma nova predição, somente utilizar-se dessa posteriormente salva

<img src="https://imgur.com/eKD4nrA.png"/>
