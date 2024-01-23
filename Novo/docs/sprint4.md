#Identificar os tradeoffs arquiteturais
## Mapa de tradeoffs
### Tradeoff de Disponibilidade
####Disponibilidade vs. Segurança
**Tradeoff:**  Ao priorizarmos a alta disponibilidade do sistema, especialmente em momentos de carga elevada, enfrentamos o desafio de equilibrar essa meta com a preservação dos níveis rigorosos de segurança. Isso ocorre devido à necessidade de agilizar o acesso durante picos de demanda, o que pode implicar em concessões nos processos de autenticação e validação, potencialmente diminuindo a robustez das defesas de segurança.
**Exemplo Prático:** Em períodos de elevada demanda, simplificar temporariamente os mecanismos de autenticação, como a redução do fator de autenticação multifatorial, pode ser necessário para manter a alta disponibilidade do sistema, embora isso possa introduzir lacunas na segurança da autenticação dos usuários.

### Tradeoff de Tempo de Resposta
####Tempo de Resposta vs. Assertividade na Classificação
**Tradeoff:** A busca por um tempo de resposta ágil na classificação de produtos muitas vezes entra em conflito com a necessidade de garantir uma classificação assertiva e precisa. A otimização para alcançar altos índices de velocidade pode resultar em análises menos profundas dos dados, impactando diretamente na acurácia da classificação.
**Exemplo Prático:** Para manter o tempo de resposta abaixo de 2 segundos, pode ser necessário empregar algoritmos de classificação mais simples e menos complexos, sacrificando parte da precisão e detalhamento da análise de dados.

### Tradeoff de Segurança
####Segurança vs. Tempo de Resposta
**Tradeoff:** Reforçar as medidas de segurança, como a implementação de criptografia robusta e processos de autenticação avançados, pode aumentar significativamente o tempo de resposta do sistema. A introdução de camadas adicionais de segurança, como autenticação multifatorial e criptografia de alta complexidade, demanda recursos temporais adicionais, impactando diretamente na eficiência do tempo de resposta.
**Exemplo Prático:** A utilização de algoritmos criptográficos mais avançados, como o AES-256 para criptografar dados sensíveis, pode resultar em atrasos substanciais no processamento de solicitações, o que pode exceder os limites de tempo de resposta desejados.

A busca por equilíbrio entre disponibilidade, tempo de resposta e segurança representa um desafio técnico crítico na arquitetura de sistemas. Cada decisão impacta diretamente na funcionalidade e na segurança do sistema, exigindo um cuidadoso equilíbrio entre esses fatores para garantir o desempenho ideal e a proteção adequada dos dados e serviços.


## Evidências dos Tradeoffs
### Evidenciando o Tradeoff de Disponibilidade com RNFs do Sistema

#### RNF1: Aumentar a assertividade na classificação dos itens de compras a mais de 95%
**Medidas Realizadas:** Durante testes de carga intensa visando garantir alta disponibilidade, observamos uma redução temporária na assertividade da classificação. Ao simplificar os processos de autenticação para manter a alta disponibilidade, houve uma diminuição na precisão da classificação, impactando a meta de alcançar 95% de assertividade na classificação de itens.

#### RNF2: Garantir que o sistema continue funcionando de forma estável mesmo em situações de alta carga
**Descrever tradeoff:** Em momentos de alta carga, ao priorizar a estabilidade do sistema, observamos que a simplificação temporária dos processos de autenticação, necessária para manter a estabilidade sob carga pesada, influenciou negativamente a assertividade na classificação de itens. A manutenção da estabilidade sob alta carga resultou em uma ligeira redução na precisão da classificação.

#### RNF3: Ampliar o foco em privacidade e integridade de dados
**Descrever tradeoff:** Ao reforçar as medidas de segurança para garantir a integridade dos dados, notamos que, em momentos de carga elevada, a assertividade na classificação pode ser ligeiramente comprometida. As medidas adicionais de segurança, como autenticação multifatorial e criptografia robusta, podem temporariamente impactar a precisão da classificação durante picos de demanda.

Estes exemplos evidenciam como os tradeoffs de disponibilidade podem afetar outros RNFs do sistema, como a assertividade na classificação de itens e a estabilidade sob cargas elevadas.

### Descrevendo o Tradeoff de Tempo de Resposta com RNFs do Sistema

#### RNF1: Aumentar a assertividade na classificação dos itens de compras a mais de 95%
**Medidas Realizadas:** Durante os testes de desempenho para manter um tempo de resposta abaixo de 2 segundos, notamos que a complexidade dos algoritmos de classificação impactou diretamente na assertividade. Algoritmos mais rápidos, embora necessários para atender ao tempo de resposta, resultaram em uma ligeira diminuição na precisão da classificação.

#### RNF5: Manter um tempo de resposta médio para a classificação de produtos abaixo de 2 segundos
**Descrever tradeoff:** A busca pela manutenção do tempo de resposta abaixo de 2 segundos influenciou a escolha de algoritmos mais rápidos, mas menos complexos. Essa otimização para a velocidade resultou em uma redução na assertividade da classificação durante períodos de carga elevada ou análises mais complexas, afetando a meta de 95% de precisão na classificação.

Estes exemplos ilustram como a otimização para o tempo de resposta pode impactar diretamente na assertividade na classificação de itens, afetando o cumprimento dos RNFs do sistema.

### Descrevendo o Tradeoff de Segurança com RNFs do Sistema

#### RNF3: Ampliar o foco em privacidade e integridade de dados
**Descrever tradeoff:** Durante períodos de alta carga, ao reforçar a segurança para garantir a privacidade e integridade dos dados, percebemos um ligeiro impacto na assertividade da classificação. Medidas de segurança adicionais, como autenticação multifatorial e criptografia robusta, podem temporariamente afetar a precisão da classificação durante picos de demanda.

Estes exemplos evidenciam como a priorização da segurança pode impactar a assertividade na classificação de itens, apresentando um tradeoff entre esses aspectos nos RNFs do sistema.

## Medição do Novo Sistema
### Coleta de Dados do Comportamento - Medição Dinâmica

#### Coleta e Medição de Dados de Disponibilidade

Resultados de Métricas de Disponibilidade: Primeiramente, definimos como métricas de disponibilidade uptime e porcentagem de disponibilidade. Na abordagem de uptime, utilizamos warm spare nos componentes que necessitam de alta frequência de atualização caso seja necessária uma nova instância.

Sendo assim, obtivemos tempo de uptime das intâncias em torno de 15s, um tempo razoável quando levam-se em conta trade-offs financeiros, etc. Já no caso da porcentagem de disponibilidade, definimos logs no sistema para emitir alertas quando ocorre alguma falha no servidor e o sistema fica indisponível. 

Portanto, analisando os logs chegamos a uma disponibilidade de 99,8%, porém é mais seguro definir as SLAs com apenas 99%, para ter um resguardo em relação aos contratos. Todas as inviabilidades técnicas relacionadas a disponibilidade são registradas no sistema para ocorrer uma análise posterior com ferramentas de monitoramento.

#### Coleta e Medição de Dados de Perfomance

Resultados de Métricas de Performance: Na hora de pensarmos em performance, estabelecemos algumas métricas para medir a performance do sistema, dentre elas: tempo de resposta do servidor, tempo de carregamento de páginas e velocidade da classificação da taxonomia.

Em relação ao tempo de resposta, fizemos uma média de tempo de 1000 requisições, o tempo médio apresentado foi 50ms.

Já para o tempo de carregamento de páginas e velocidade de classificação de taxonomia, medimos com testes de usabilidade, observando se os tempos causavam algum desconforto no usuário, porém não foi observado nenhum comportamento desse tipo.

Além disso, realizamos um teste de carga no sistema e os tempos de resposta não apresentaram piora.

###  Coleta dos dados da estrutura

Coleta de Dados de Disponibilidade: O objetivo deste é garantir que a aplicação esteja sempre acessível e operacional. Para isso, foi utilizado ferramentas de monitoramento de uptime, como Uptime Robot, para verificar periodicamente a disponibilidade do serviço. Estas ferramentas são configuradas para testar o acesso ao site ou aplicativo em intervalos regulares, registrando qualquer período de inatividade. A partir destes registros, é possível calcular a porcentagem do tempo total em que a aplicação esteve disponível, avaliando assim sua confiabilidade.

Coleta de Dados de Tempo de Resposta : Este teste foca em medir a rapidez com que a aplicação responde às solicitações dos usuários. A ferramenta utilizada é a LoadRunner, e é empregada para simular solicitações de usuários e realizar testes de carga. Esses testes ajudam a entender como o tempo de resposta varia sob diferentes condições de carga, medindo o intervalo desde o envio da solicitação até o recebimento da resposta. As métricas importantes aqui incluem o tempo médio de resposta, o tempo de resposta máximo e a variação do tempo de resposta sob diferentes níveis de carga.

Coleta de Dados de Segurança: O objetivo deste teste é avaliar a robustez da aplicação contra vulnerabilidades e ataques. São realizados testes de penetração utilizando a ferramenta Burp Suite para identificar possíveis falhas de segurança. Além disso, são implementados os protocolos de segurança, como HTTPS. A aplicação é testada contra ataques comuns, como SQL Injection, Cross-Site Scripting (XSS) e Cross-Site Request Forgery (CSRF), com as métricas de avaliação incluindo o número de vulnerabilidades detectadas, a gravidade dessas vulnerabilidades e a eficácia das medidas de mitigação implementadas.
