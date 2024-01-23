# Documentação da Simulação de Cadeia de Markov

## Introdução

Neste documento, exploramos a implementação de uma simulação de cadeia de Markov construída para monitorar e analisar o comportamento operacional de duas máquinas em um ambiente de Machine Learning. O cenário simulado aborda um sistema que classifica automaticamente categorias de produtos, com cada máquina podendo alternar entre estados de operação e recuperação. A dinâmica entre esses estados é gerenciada por uma matriz de transições de estado, e uma condição específica de falha simultânea é tratada por meio de uma intervenção de 'reinicialização manual'.

## Descrição dos Estados

A simulação contempla quatro estados distintos, dois para cada uma das máquinas envolvidas:

- **0 - Funcionando (máquina 1)**: Estado onde a máquina 1 está operando sem falhas, realizando sua função de classificação.
- **1 - Recovery (máquina 1)**: Estado que indica que a máquina 1 encontrou problemas e está em processo de recuperação.
- **2 - Funcionando (máquina 2)**: Estado operacional normal da máquina 2.
- **3 - Recovery (máquina 2)**: Similar ao estado 1, mas aplicado à máquina 2, indicando que está em recuperação.

## Matriz de Transições

A matriz de transições é uma representação numérica que define a probabilidade de cada máquina passar de seu estado atual para outro. Por exemplo, a probabilidade de uma máquina passar do estado "Funcionando" para "Recovery" é determinada pelo valor correspondente na matriz. Esses valores são ajustados com base na experiência operacional ou expectativas do sistema.

## Funcionamento da Simulação

A simulação opera em passos sequenciais, onde:

1. **Inicialização**: As máquinas são inicialmente configuradas no estado "Funcionando".
2. **Processo Iterativo**: A cada iteração, ou 'passo', a simulação usa a matriz de transições para determinar os próximos estados das máquinas.
3. **Condição de Reinicialização Manual**: Se ambas as máquinas estiverem no estado "Recovery" no mesmo passo, um mecanismo de 'reinicialização manual' é acionado, forçando-as de volta ao estado "Funcionando".

## Código da Simulação

O código JavaScript consiste em duas funções principais:

- `getNextState()`: Função que calcula o próximo estado de uma máquina com base em sua probabilidade.
- `simulateMarkovChain()`: Função que simula o comportamento das máquinas ao longo de uma série de passos, aplicando a condição de reinicialização manual quando detectada a falha simultânea.

## Exemplo de Saída e Insights

Após executar a simulação 10 vezes com 10 passos cada, observamos as seguintes tendências:

- As máquinas frequentemente permanecem no estado "Funcionando", indicando um sistema estável.
- Transições para "Recovery" ocorrem, mas com menos frequência, sugerindo que falhas são menos comuns ou que as máquinas têm alta probabilidade de recuperação.
- A condição de reinicialização manual foi acionada em algumas simulações, demonstrando sua utilidade para a resiliência do sistema.

Abaixo estão os estados visitados por cada máquina em uma dessas simulações:

Estados da Máquina 1: [
  0, 0, 0, 0, 0,
  0, 0, 0, 0, 1,
  1
]</br>
Estados da Máquina 2: [
  2, 2, 2, 3, 3,
  2, 2, 2, 2, 2,
  2
]

<img src="https://imgur.com/XIvpQOQ.png">

## Análise dos Resultados
### Estabilidade do Sistema
Os resultados mostram uma tendência dominante de as máquinas permanecerem no estado "Funcionando" (0 para a máquina 1 e 2 para a máquina 2). Isso sugere uma alta confiabilidade do sistema, com um período de operação ininterrupta sendo a norma.


### Incidência de Falhas
Apesar da estabilidade, houve ocorrências isoladas de falhas, onde as máquinas entraram em estado de "Recovery" (1 para a máquina 1 e 3 para a máquina 2). Isso indica que embora falhas sejam eventos raros, elas são uma possibilidade e o sistema está equipado para lidar com elas sem interrupção significativa das operações.

### Eficiência da Recuperação
A simulação demonstrou a eficácia da reinicialização manual. Em casos onde ambas as máquinas entraram em estado de "Recovery" simultaneamente, a condição de reinicialização manual foi acionada, restaurando o estado de "Funcionando". Isso é um indicativo de um mecanismo de segurança eficaz que evita falhas prolongadas.

### Tendências e Padrões
A distribuição dos estados visitados pelas máquinas ao longo das simulações pode ser utilizada para identificar padrões. Por exemplo, se uma máquina tem uma tendência maior de entrar em "Recovery" após um certo número de passos, isso pode indicar a necessidade de manutenção preventiva programada.

## Documentação de Referência
Os resultados da simulação podem ser complementados com documentação de referência, que inclui:

 - Registros Operacionais: Dados históricos reais do comportamento das máquinas podem ser usados para validar a precisão da simulação.
 - Literatura Técnica: Artigos e estudos de caso sobre a aplicação de cadeias de Markov em sistemas semelhantes podem oferecer insights adicionais.
 - Relatórios de Manutenção: Informações sobre manutenções anteriores e as condições das máquinas antes e depois dos procedimentos podem ser úteis para ajustar os parâmetros da simulação.


## Conclusão

A simulação oferece insights valiosos sobre o comportamento operacional das máquinas em um sistema de Machine Learning. Através dela, podemos não apenas antecipar a frequência e impacto das falhas, mas também testar a eficácia de estratégias de recuperação, como a reinicialização manual. Estes insights permitem aos administradores do sistema otimizar a manutenção e melhorar

## Conclusões Adicionais
A simulação de cadeia de Markov, como ferramenta de modelagem, provou ser valiosa na previsão e compreensão do comportamento das máquinas em um ambiente de Machine Learning. Através da análise dos dados simulados, podemos extrair conclusões significativas sobre a confiabilidade, resiliência e necessidades de manutenção do sistema. Isso permite uma gestão mais eficiente e proativa das operações, garantindo a continuidade e eficiência do processo de classificação automática.