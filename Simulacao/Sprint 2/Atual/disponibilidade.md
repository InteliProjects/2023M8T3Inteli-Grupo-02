# Documentação da Simulação de Cadeia de Markov para Sistema de Uma Máquina

## Introdução

A documentação presente oferece uma análise crítica de um sistema de simulação de cadeia de Markov simplificado, que gerencia apenas uma máquina com dois estados operacionais. Este sistema é comparado com um modelo anterior que monitorava duas máquinas. Destacamos as deficiências do sistema atual e argumentamos a favor do modelo anterior com base em sua superioridade em termos de resiliência e confiabilidade operacional.

## Descrição dos Estados

O sistema atual consiste em dois estados para uma única máquina:

- **0 - Funcionando**: Estado onde a máquina está operando normalmente sem interrupções.
- **1 - Falha**: Estado onde a máquina encontra uma falha e está inoperante.

## Matriz de Transições

No sistema de uma única máquina, a matriz de transições é simplificada para apenas duas possibilidades, refletindo as probabilidades de transição entre os estados de "Funcionando" e "Falha".

## Limitações do Sistema Atual

- **Ausência de Redundância**: Sem uma segunda máquina, não há backup em caso de falha.
- **Recuperação Simplificada**: O sistema carece de um protocolo de recuperação complexo que o modelo anterior possuía, o que aumentava a resiliência.
- **Resiliência Reduzida**: Uma única máquina falha resulta em uma parada total do sistema, ao contrário do sistema anterior que tinha capacidade de manutenção operacional mesmo durante falhas.

## Análise Comparativa e Insights

Comparando ambos os sistemas, observamos que o sistema de duas máquinas era mais estável e capaz de manter a operacionalidade durante falhas. O sistema de uma máquina é suscetível a paradas totais e não possui mecanismos de contingência eficazes.

## Exemplo de Saída

Para o sistema de uma máquina, uma sequência típica de estados poderia ser `[0, 0, 1, 0, 0]`, onde a máquina alterna entre funcionamento e falha, com cada falha resultando em inatividade.

<img src="https://imgur.com/9PnNphB.png"/>

## Conclusão

Através desta documentação, fica evidente que o sistema de uma máquina é inferior quando comparado ao modelo de duas máquinas, devido à sua falta de redundância e mecanismos de recuperação mais fracos. Recomenda-se a reimplantação do sistema de duas máquinas para assegurar a continuidade e a eficiência operacional em ambientes de Machine Learning.