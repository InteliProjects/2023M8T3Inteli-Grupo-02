# Documentação do Arquivo de Testes

## Overview

Este documento oferece uma visão geral e explicação dos testes implementados para simular cadeias de Markov e testar o tempo de resposta em um projeto específico.

## Dependências

O arquivo de testes utiliza as seguintes dependências:

- `fs`: para operações de arquivo.
- `path`: para manipulação de caminhos de arquivo.
- `redis`: para interação com o banco de dados Redis.

## Testes Implementados

### Teste da Cadeia de Markov

Os testes da cadeia de Markov são realizados em quatro cenários diferentes: 10, 20, 30, e 40 passos. Cada teste utiliza uma matriz de transição para simular o comportamento de duas máquinas em diferentes estados.

#### Estrutura do Teste

Cada teste segue a seguinte estrutura:

1. Define a matriz de transição.
2. Define o número de passos a serem simulados.
3. Invoca a função `simulateMarkovChain` para simular a cadeia de Markov.
4. Verifica se o comprimento do estado resultante corresponde ao número de passos mais um.
5. Salva os resultados em um arquivo JSON.

### Teste do Tempo de Resposta

Este teste verifica a variação no tempo de resposta com o uso de um cliente Redis. O objetivo é assegurar que o sistema responde mais rapidamente após a primeira execução devido ao cache.

#### Estrutura do Teste

O teste do tempo de resposta inclui:

1. Conexão com o cliente Redis.
2. Execução da função `run` duas vezes para obter o tempo de resposta.
3. Comparação dos tempos de resposta para verificar se o segundo é menor que o primeiro.
4. Desconexão do cliente Redis após cada teste.

## Resultados dos Testes

Após a execução dos testes, os resultados podem ser visualizados como abaixo. 

![](../../assets/result_test_novo.png)

</br>

![](../../assets/result_geral.png)

## Conclusão

Esta documentação resume os testes implementados para avaliar a simulação de cadeias de Markov e o tempo de resposta usando o Redis. Os testes são vitais para garantir a precisão e eficiência do sistema em diferentes cenários.
