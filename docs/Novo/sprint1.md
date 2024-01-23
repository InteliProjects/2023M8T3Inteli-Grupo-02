# Arquitetura do Sistema Novo - Especificação de Requisitos (Versão 1).

### RNF1: Aumentar a assertividade na classificação dos itens de compras a mais de 95%

**Descrição:** O sistema deve ser capaz de classificar os itens de compras com uma taxa de precisão superior a 95%, medido em relação ao número total de classificações realizadas. Como input serão fornecidos ao modelo os seguintes dados: idioma, descrição da InVoice, região e taxonomia.


**Critérios de Aceitação:** O sistema deve ser testado em um conjunto de, no mínimo, 1000 classificações de produtos. O critério de aceitação é que o sistema deve realizar classificações corretas em pelo menos 950 das 1000 classificações, atingindo uma taxa de precisão de 95% ou superior.

**Vulnerabilidades resolvidas:** Erros na classificação de produtos podem levar a problemas operacionais, como pedidos incorretos ou aquisições inadequadas. Isso pode resultar em desperdício de recursos e insatisfação do cliente. Aumentar a assertividade da classificação reduz a probabilidade de tais erros.


### RNF2: Garantir que o sistema continue funcionando de forma estável mesmo em situações de alta carga

**Descrição:** O sistema deve ser capaz de lidar com uma carga de trabalho que é pelo menos duas vezes maior do que a carga típica, mantendo o desempenho e a estabilidade. 

**Critérios de Aceitação:** Durante os testes de carga, o sistema deve manter um tempo de resposta médio de no máximo 1 segundo, mesmo sob carga pesada. Além disso, não deve haver falhas ou interrupções do serviço, independentemente da carga aplicada.

 **Vulnerabilidade Resolvida:** Em situações de alta carga, um sistema pode ficar sobrecarregado e não conseguir atender às solicitações dos usuários, resultando em interrupções nos serviços. A estabilidade do sistema sob carga pesada é fundamental para evitar interrupções e garantir a continuidade das operações.




### RNF3: Ampliar o foco em privacidade e integridade de dados, focando aspectos de compliance e accountability. Incluir aspectos de resistência a acessos indevidos interno e externo, detecção e recuperação de acessos inconsistentes de segurança

**Descrição:** O sistema deve garantir a segurança dos dados e a conformidade regulatória, bem como a detecção e recuperação de acessos indevidos.

**Critérios de Aceitação:**
  - A criptografia de dados em repouso e em trânsito deve atender a padrões reconhecidos, como AES-256.
  - A autenticação de usuário deve incluir políticas de senha que exijam no mínimo 12 caracteres, incluindo letras maiúsculas, minúsculas, números e símbolos. Autenticação de dois fatores deve ser implementada.
  - Registros de auditoria detalhados devem ser gerados para todas as atividades sensíveis, incluindo tentativas de acesso indevido.
  - O sistema deve ser capaz de detectar e responder a acessos indevidos, bloqueando contas suspeitas e notificando a equipe de segurança.
  - Deve existir um plano de recuperação de desastres que permita a restauração da integridade dos dados em caso de violações de segurança.

**Vulnerabilidades Resolvidas:**
- Vazamentos de Dados: A falta de foco na privacidade e segurança de dados pode resultar em vazamentos de informações confidenciais, expondo os dados dos usuários a terceiros não autorizados. A criptografia e outras medidas de segurança ajudam a mitigar essa vulnerabilidade.
- Acessos Indevidos Internos e Externo: Sem proteções adequadas, tanto funcionários internos mal-intencionados quanto atacantes externos podem acessar informações sensíveis. A autenticação forte e a detecção de acessos indevidos ajudam a evitar isso.
- Acessos Inconsistentes de Segurança: Se não forem implementadas políticas de segurança consistentes, podem ocorrer acessos inconsistentes e não autorizados ao sistema. A detecção e recuperação de acessos inconsistentes de segurança abordam essa vulnerabilidade.


### RNF4: Implementar registros de auditoria que rastreiem todas as ações relacionadas à classificação de produtos

**Descrição:** O sistema deve registrar todas as ações relacionadas à classificação de produtos para fins de monitoramento e investigação.

**Critérios de Aceitação:**
  - Deve haver registros de auditoria para cada ação realizada no sistema, incluindo a data e hora da ação, o usuário responsável e uma descrição da atividade.
  - Os registros de auditoria devem ser armazenados de forma segura e não podem ser alterados ou excluídos, exceto por administradores autorizados.
  - Deve ser possível realizar consultas nos registros de auditoria para investigação de atividades suspeitas ou para fins de conformidade.

**Vulnerabilidade Resolvida:** Sem registros de auditoria, é difícil rastrear atividades suspeitas, investigar incidentes de segurança ou monitorar o uso do sistema. A implementação de registros de auditoria ajuda a abordar essa vulnerabilidade, fornecendo visibilidade e rastreabilidade das atividades no sistema.

### RNF5: Manter um tempo de resposta médio para a classificação de produtos abaixo de 2 segundos

**Descrição:** O sistema deve ser capaz de classificar produtos de forma eficiente, garantindo um tempo de resposta médio inferior a 2 segundos.

**Critérios de Aceitação:** Durante testes de desempenho, o tempo médio de resposta para a classificação de produtos não deve exceder 2 segundos, com um intervalo de confiança de 95%. Testes de desempenho devem ser realizados regularmente para verificar o cumprimento deste requisito.

**Vulnerabilidade Resolvida:** Se o sistema demorar muito para classificar produtos, isso pode resultar em atrasos nas operações de compras, insatisfação do usuário e até mesmo a perda de oportunidades de negócios. Manter um tempo de resposta rápido ajuda a evitar essa vulnerabilidade, garantindo eficiência e satisfação do usuário.

