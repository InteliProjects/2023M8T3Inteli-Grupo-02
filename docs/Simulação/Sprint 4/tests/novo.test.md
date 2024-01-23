# Documentação do Arquivo de Testes

## Overview

Este documento oferece uma visão geral e explicação dos testes implementados para simular cadeias de Markov e testar o tempo de resposta em um projeto específico.

## Dependências

O arquivo de testes utiliza as seguintes dependências:

- `fs`: para operações de arquivo.
- `path`: para manipulação de caminhos de arquivo.
- `redis`: para interação com o banco de dados Redis.

## Execução dos Testes

Para executar os testes, tanto o de disponibilidade quanto o de tempo de resposta, basta executar o comando <code>npm rum test</code> na pasta raiz da Sprint. O comando irá executar todos os testes implementados e gerar os resultados em arquivos JSON.

### Execução do teste de segurança

Como o teste de segurança é feito de uma maneira diferente dos outros testes, então só é possivel fazer a automatização desse teste a partir da instalação da ferramenta HPING3. Para executar o teste de segurança automatizado, é necessário executar a API localmente, ela está localizada em: <code>/Simulacao/Sprint 4/Novo/API_DOS</code>. Após isso, execute o arquivo <code>ataque.sh</code> na pasta <code>tests</code> com o seguinte comando:

```bash
./ataque.sh
```

## Testes Implementados

### Teste da Cadeia de Markov

O teste de disponibilidade é feito com uma Cadeia de Markov, onde cada "passo", ou execução da função, representa um período de tempo, nesse caso, o teste automatizado realiza 40 passos de execução. O teste utiliza uma matriz de transição para simular o comportamento de duas máquinas em diferentes estados.

#### Estrutura do Teste

Cada teste segue a seguinte estrutura:

1. Define a matriz de transição.
2. Define o número de passos a serem simulados.
3. Invoca a função `simulateMarkovChain` para simular a cadeia de Markov.
4. Verifica se o comprimento do estado resultante corresponde ao número de passos mais um.
5. Salva os resultados em um arquivo JSON.

#### Aprimoramentos dos Testes
Os testes de disponibilidade foram reduzidos para apenas um teste automatizado, que faz uma simulação de 40 passos. Antes, tinhamos diversos cenários, mas para agilizar o teste, e ter menos arquivos JSON, foi feita essa redução. 

Link do commit: <link>https://github.com/2023M8T3Inteli/Grupo-02/commit/b6c8b535c69cf3e6096c911fc4b414c14ba92ef3</link>

### Teste do Tempo de Resposta

Este teste verifica a variação no tempo de resposta com o uso de um cliente Redis. O objetivo é assegurar que o sistema responde mais rapidamente após a primeira execução devido ao cache.

#### Estrutura do Teste

O teste do tempo de resposta inclui:

1. Conexão com o cliente Redis.
2. Execução da função `run` duas vezes para obter o tempo de resposta.
3. Comparação dos tempos de resposta para verificar se o segundo é menor que o primeiro.
4. Desconexão do cliente Redis após cada teste.

#### Aprimoramentos dos Testes

Os testes automatizados de tempo de resposta foram aprimorados e otimizados. Antes a medição de tempo era feita na função <code>run()</code>, o que não fazia sentido, já que é uma função que funciona como regra de negócio. Agora a medição de tempo é feita na função do teste automatizado. O teste passa se o tempo de resposta do segundo teste for menor que o primeiro.

Link do commit: <link>https://github.com/2023M8T3Inteli/Grupo-02/commit/1be1064730e435eedf74bb508cd1763d3f5d6e03</link>

## Resultados dos Testes

Após a execução dos testes, os resultados podem ser visualizados como abaixo. 

![](../../assets/result_test_novo.png)

</br>

![](../../assets/result_geral.png)

## Conclusão

Esta documentação resume os testes implementados para avaliar a simulação de cadeias de Markov e o tempo de resposta usando o Redis. Os testes são vitais para garantir a precisão e eficiência do sistema em diferentes cenários.
