# Teste Marcov Chain
O teste de Cadeia de Markov verifica a funcionalidade de simulação de uma Cadeia de Markov, um processo que modela a transição entre estados com base em probalidades

## Objetivo 
Verificar se a simulação da Cadeia de Markov gera corretamente os estados após um número específico de passos

## Execução dos Testes

Para executar os testes, tanto o de disponibilidade quanto o de tempo de resposta, basta executar o comando <code>npm rum test</code> na pasta raiz da Sprint. 

## Funcionamento 
### Dados de entrada
**- Matriz de transição**: Define as probabilidadesde transição entre os estados
**-Números de passos**: Especifica quantos passos a simulação deve realizar

### Ação
- A função **'simulateMarcovChain()'** é chamada, utilizando a matriz de transição e o número de passos como entrada
- Gera um conjunto de estados baseado na Cadeia de Markov e armazena os resultados

### Validação
- Verifica se o número de estados retornados é igual ao número de passos mais um (para incluir o estado inicial)

### Configuração
A Matriz de transição utilizada:
`[
  [0.9, 0.1], // Probabilidades de ir de "Funcionando" para outro estado
  [0.2, 0.8], // Probabilidades de ir de "Falha" para outro estado
]`


# Resultados
`[0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1]`

O Sistema atingiu os estados esperados ao longo das iterações, finalizando em um estado de funcionamento.


# Teste de tempo de resposta 

## Objetivo
Garantir que a função **'run()'** retorne um tempo de resposta superior a 2000 milissegundos

## Funcionamento
### Ação
- Chama a função **run()** para obter o tempo de resposta
- Armazena o tempo retornado pela função

### Validação 
- Verifica se o tempo de resposta é maior que 2000 milisegundos

### Resultado
- Tempo de resposta obtido: 2012 milissegundos
- Conclusão: O tempo de resposta foi superior ao limite estabelecido

![](../../assets/result_test_atual.png)

</br>

![](../../assets/result_geral.png)

