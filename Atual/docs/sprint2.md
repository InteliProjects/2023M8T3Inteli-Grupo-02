# Arquitetura do Sistema Atual (v2.0) - Avaliação dos mecanismos de engenharia e de tecnologia utilizados no sistema atual

## Revisão do mapa de requisitos não funcionais e respectivas vulnerabilidades

### Introdução 
Este documento técnico aborda requisitos não funcionais essenciais para aprimorar o sistema de classificação de taxonomia da empresa. Atualmente, o sistema apresenta algumas vulnerabilidades que impactam sua assertividade, rastreabilidade e disponibilidade. O projeto visa construir uma solução inovadora que aborde essas questões, promovendo maior precisão nas classificações, rastreamento eficiente das taxonomias e melhorando a disponibilidade do sistema como um todo.

Ao melhorar a disponibilidade e rastreabilidade, almejamos criar uma base sólida que contribua diretamente para o aumento da assertividade do sistema. Essa abordagem integrada visa não apenas corrigir as vulnerabilidades identificadas, mas também estabelecer sinergias entre os requisitos, garantindo um sistema de classificação de taxonomia robusto, confiável e altamente preciso.
 **1. Requisito de Melhoria da Assertividade do Sistema de Classificação de Taxonomia**


**Entrada Esperada:** Uma classificação de taxonomia atual com cerca de 65% de acerto 


**Saída Esperada:** A saída esperada é uma classificação de taxonomia de 65% de acerto, controlado


**Sistema de Controle:**
Para avaliar a precisão da classificação de taxonomia, é crucial seguir alguns passos. Primeiro, deve-se reservar um conjunto de dados de teste separado, não utilizado no treinamento do modelo. Em seguida, usaremos o modelo para classificar esses dados de teste. Por fim, faremos comparações com as classificações previstas com os rótulos verdadeiros.

A métrica principal aqui é a acurácia, calculada como a proporção de previsões corretas em relação ao total, expressa em porcentagem Acurácia = (Número de Previsões Corretas / Número Total de Previsões) * 100%. 

**2. Requisito Não Funcional de Rastreabilidade de Classificação de Taxonomia**

**Entrada Esperada:** Um conjunto de dados de classificações de taxonomia geradas pelo sistema.

**Saída Esperada:** A saída esperada é uma lista das taxonomias que foram mais frequentemente classificadas de forma incorreta, identificadas por nome ou identificador, incluindo o número de vezes que cada taxonomia foi incorretamente classificada.

**Sistema de Controle:**
Para avaliar a eficácia do sistema na classificação de taxonomias, é necessário analisar o conjunto de dados de saída gerados. Além disso, é importante identificar as classificações marcadas como incorretas e contar quantas vezes cada taxonomia foi erroneamente classificada. O objetivo principal é organizar esses dados em uma lista, destacando as taxonomias mais problemáticas com base na frequência de classificações incorretas.

Os resultados podem ser apresentados visualmente, como em um gráfico de barras ou tabela, para uma compreensão mais fácil. Essa abordagem poderá fornecer insights sobre as áreas que exigem atenção, permitindo ajustes no sistema para melhorar a precisão, especialmente para as taxonomias mais frequentemente classificadas de maneira incorreta.


**3. Requisito Não Funcional de Melhoria de Disponibilidade**

**Entrada Esperada:** Os dados de disponibilidade do sistema, incluindo datas e horários de indisponibilidade.

**Saída Esperada:** A saída esperada é um relatório que indica o tempo de disponibilidade do sistema, como um percentual de disponibilidade ou um gráfico de tempo de funcionamento.

**Sistema de Controle:**

Para medir a disponibilidade do sistema com base nos dados fornecidos, usaremos  a métrica de Disponibilidade, que é comumente expressa como um percentual. A fórmula para calcular a Disponibilidade é:

Disponibilidade(%) = (tempo de funcionamento/ tempo total)x100%

O "Tempo de Funcionamento" representa o período em que o sistema estava disponível, e o "Tempo Total" é o intervalo total de tempo considerado. O resultado é um percentual que indica a proporção do tempo em que o sistema esteve operacional.

Logo, é possível gerar gráficos visuais, como gráficos de tempo de funcionamento ao longo do período considerado, para fornecer uma representação clara da disponibilidade do sistema. Essa métrica oferece uma medida quantitativa da confiabilidade do sistema durante um determinado período.

### Resumo 
Em síntese, este documento delineou requisitos não funcionais essenciais para elevar a eficiência e confiabilidade do sistema de classificação de taxonomia do Sistema Atual da Meta. Ao enfocar a melhoria da disponibilidade e rastreabilidade, visamos estabelecer um alicerce sólido que não apenas aborde as vulnerabilidades identificadas, mas também amplie a assertividade do sistema.

 Esta abordagem não só atenderá aos desafios atuais, mas também se posicionará de forma resiliente para enfrentar futuras demandas na área de classificação de taxonomias.



## Descrição das táticas arquiteturais e componentes que auxiliam na execução e controles dos RNFs
1- No sistema a classificação da taxonomia é feita de modo manual, então caso enquanto o usuário está utilizando e note alguma instabilidade no sistema, ele deve reportar ao suporte técnico.

2- Caso não seja feita a manutenção em um período de 1 hora, o gerente referente a área de atuação do sistema será notificado para que ele possa analisar a melhor tomada de decisão.

3- Se for algum erro específico do sistema, realizar ajustes, mas no caso de falhas na infraestrura em que o sistema funciona, devem existir migrações automáticas para servidores alternativos.

4- Pode-se observar requisitos relacionados à tempo de resposta por meio de testes e por meio de logs gerados pelo sistema que gera a resposta em si, nos logs salvos estarão presentes os dados referentes ao tempo de resposta.

5- Geralmente o tempo de resposta é estabelecido nos contratos SLAs, sendo assim, antes de ir para produção o sistema já possui o tempo de resposta verificado, porém em caso de aumento no tempo de resposta é possível aumentar recursos e caso não funcione, deve-se pensar na otimização de código.

6- Caso seja quebrado o tempo de resposta previamente proposto, deve-se tomar algumas medidas, como alteração do tamanho da resposta, para realizar o processo de forma mais ágil.

7/8- Aplicar sistemas de detecção de atividades suspeitas, e com o sistema de detecção funcionando, toda atividade suspeita terá uma consequência, como o bloqueio de acessos vindos de uma região específica e aplicação de mais métodos por meio de sistemas como CloudFlare, Firewalls, etc.

9- Em caso de violação da segurança do sistema, devem existir procedimentos de recuperação, como análise forense para identificar a causa da violação. Devem existir medidas de recuperação, como notificação de partes afetadas, análise de vulnerabilidades e tentativa de criptografia dos dados vazados.
