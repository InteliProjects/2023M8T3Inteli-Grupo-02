
### RNF1: Aumentar a assertividade na classificação dos itens de compras a mais de 95%

**Abordagem de Medição:**
- **Taxa de Acertos x Erros:** Utilização de métricas de precisão e recall para determinar a assertividade do modelo de classificação. É calculado o número de classificações corretas em relação ao número total de classificações, permitindo a compreensão do desempenho do modelo.
- **Monitoramento Contínuo:** Estabelecimento de um monitoramento regular e automático da taxa de assertividade do modelo de classificação. A verificação periódica permite identificar rapidamente qualquer desvio em relação ao objetivo de 95%.

### RNF2: Garantir que o sistema continue funcionando de forma estável mesmo em situações de alta carga

**Abordagem de Medição:**
- **Análise de Logs:** Monitoramento dos logs do sistema para identificar picos de acesso e o desempenho durante esses momentos.
- **Testes de Estresse:** Realização de testes de estresse controlados para simular situações de alta carga, avaliando como o sistema se comporta e se mantém estável durante esses cenários.

### RNF3: Ampliar o foco em privacidade e integridade de dados

**Abordagem de Medição:**
- **SIEM (Security Information and Event Management):** Utilização de ferramentas de SIEM para monitorar continuamente os acessos e detectar atividades suspeitas.
- **Auditorias de Segurança:** Realização de auditorias regulares para identificar tentativas de acessos indevidos ou potenciais violações de segurança.

### RNF4: Implementar registros de auditoria que rastreiem todas as ações relacionadas à classificação de produtos

**Abordagem de Medição:**
- **Auditorias e Verificações Regulares:** Revisões regulares dos registros de auditoria para garantir que todas as ações relacionadas à classificação de produtos sejam registradas adequadamente.
- **Alertas de Anomalias:** Configuração de alertas para identificar anomalias nos registros de auditoria, notificando a equipe para investigação.

### RNF5: Manter um tempo de resposta médio para a classificação de produtos abaixo de 2 segundos

**Abordagem de Medição:**
- **Monitoramento de Desempenho:** Implementação de ferramentas de monitoramento de desempenho para rastrear o tempo de resposta das solicitações de classificação.
- **Análise Estatística:** Utilização de estatísticas para calcular e monitorar o tempo médio de resposta ao longo do tempo, garantindo que esteja consistentemente abaixo do limite de 2 segundos.

Cada abordagem de medição é específica para o requisito não funcional correspondente e visa garantir que os critérios estabelecidos sejam adequadamente avaliados, monitorados e atendidos no sistema.