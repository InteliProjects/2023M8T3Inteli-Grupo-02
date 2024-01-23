# Documentação da Simulação de Tempo de Resposta de Predição de Categoria de Produtos

## Descrição
Este documento fornece detalhes sobre um script JavaScript de simulação usado para entender o comportamento de uma função de predição de categorias de produtos com base em inteligência artificial (IA). O script simula um atraso de resposta de 2 segundos, que é o tempo de resposta atualmente assumido para o sistema de predição de categorias de produtos da empresa.

## Estruturas de Dados
Array de objetos, no qual cada objeto representa um produto diferente, contendo as seguintes informações: id: Number; name: String; price: Number;

### Array de Produtos
O script começa com uma definição de um array `products`, que contém uma lista de objetos de produto. Cada produto é definido por um `id`, `name` e `price`.

## Funções

### Função predict(productId)
- **Objetivo**: Simular a busca de um produto pelo ID e prever a sua categoria com base no preço.
- **Parâmetros**: `productId` - um número que representa o ID do produto a ser pesquisado.
- **Processamento**:
  - Encontra o produto correspondente ao ID fornecido.
  - Simula um atraso de 2 segundos (2000 ms).
  - Se o produto for encontrado, atribui uma categoria com base em seu preço: produtos com preço superior a 20 são classificados como "Categoria 1", enquanto os demais são classificados como "Categoria 2".
  - Retorna um objeto contendo a `category` e a `accuracy` (fixa em 0.91) se o produto for encontrado.
  - Retorna um erro "Produto não encontrado" se nenhum produto corresponder ao ID fornecido.
- **Retorno**: Uma `Promise` que será resolvida ou rejeitada após o atraso de 2 segundos.

### Função run()
- **Objetivo**: Executar a função `predict` e calcular o tempo levado para obter a resposta.
- **Processamento**:
  - Armazena o tempo de início.
  - Chama a função `predict` com um ID de produto.
  - Aguarda pela resolução da `Promise` retornada pela função `predict`.
  - Armazena o tempo de fim após a resolução da `Promise`.
  - Imprime no console a categoria prevista e o tempo total em milissegundos (ms) que a operação levou.
- **Chamada**: A função `run` é chamada no final do script para iniciar o processo de simulação.

## Uso
Rode o comando 'node tempo_resposta.js' e assim será printado no console as informações que indicam os objetivos da simulação

<img src="https://imgur.com/4v7oUKV.png"/>