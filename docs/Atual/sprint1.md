# Arquitetura do Sistema Atual - Visão Negócio (Sprint 1)
## Business Drivers
### Setor de Aplicação
O principal objetivo do sistema reside na gestão de compras e no fornecimento, abrangendo sistemas de gestão relacionados. Com essa perspectiva em mente, esse sistema pode ser implementado em uma ampla variedade de setores. No projeto atual, ele desempenha um papel crucial na integração de dados internos com os setores comerciais e de serviços.
No entanto, sua utilidade é frequentemente destacada na solicitação de serviços internos e no monitoramento de fornecedores. Em resumo, o sistema de gerenciamento de compras e emissão de notas fiscais demonstra sua aplicabilidade em praticamente todos os setores industriais e comerciais, contribuindo para a organização e registro das transações de compra, simplificando o cumprimento das obrigações fiscais e a gestão de despesas.
### Adição de Valor
A geração de valor para o negócio está intrinsecamente ligada à capacidade de classificar corretamente as novas ordens de pagamento, eliminando a necessidade de intervenções manuais. Isso não apenas impulsiona as vendas, assegurando uma alta precisão do sistema, mas também elimina a necessidade de alocar a carga horária de qualquer colaborador da empresa para a tarefa de classificação.
Contudo, o desafio atual reside na precisão do sistema, que atualmente alcança apenas 65%. Essa margem pode suscitar dúvidas na empresa quanto à geração precisa das novas notas fiscais.
### Processo de negócio e fluxos críticos suportados pelo sistema
<img width="70%" src="https://imgur.com/Ym3DVhr.png">

Dentro do sistema alguns pontos que devem ser considerados como críticos, seriam relacionados a segurança.
Por exemplo, para criar a nota fiscal final, são requisitados muitos dados pessoais, de endereço, etc. Sendo assim, é necessário implementar criptografia entre os processos do sistema.

### Volumetrias

A volumetria é uma métrica essencial para entender a magnitude das operações e identificar pontos críticos no sistema. Abaixo estão as volumetrias associadas ao sistema:

Usuários: O sistema é usado principalmente pelos funcionários da Meta Inc. que estão envolvidos no processo de compras. Considerando a escala global da empresa, podemos inferir que mais de 75,964 funcionários interagem com o sistema regularmente.

Transações: Diariamente, o sistema processa uma média de 2872 transações, totalizando 128 milhões de dólares por dia ou 46 bilhões de dólares por ano.

Registros: O banco de dados contém registros detalhados de todas as transações de compras, categorizações e histórico de transações. Com a base de dados de 2023 fornecida, podemos inferir que há milhões de registros de classificação taxonômica.

Falhas: Atualmente, a assertividade da categorização é de menos de 65%. Isso indica que uma proporção significativa das transações pode ter falhas ou categorizações imprecisas.
	
Incidentes: Com base no problema descrito, é provável que ocorram incidentes frequentes relacionados a categorizações imprecisas, afetando a eficiência do planejamento de compras e a tomada de decisões dos funcionários.

Visando analisar dados do negócio, estabelecemos gráificos para atrelar a volumetria com regiões geográficas, áreas da empresa, e até mesmo quantidade de dinheiro transacionada por área.
<img width="100%" src="./assets/amount_area.png">
<img width="100%" src="./assets/servicos_area.png"> 
### Estratégia de crescimento estabelecida
Levando em conta que a assertividade irá melhorar de 65% para 95% e atualmente o billing relacionado ao sistema de categorização gera aproximadamente $49.000.000.000, conseguimos potencializar a diminuição de custos em aproximadamente $22.000.000.000. Além do aumento da receita, podemos diminuir a alocação de horas de funcionários para categorização manual, portanto para fazer o cálculo da economia, poderíamos realizar: Economia total = Quantidade de horas geralmente alocadas x Preço/hora de cada funcionário.

## Riscos e Oportunidades 
Nessa seção do nosso documento, abordamos os riscos e oportunidades associados ao nosso sistema, comum foco específico na matriz de risco.
<img width="100%" src="./assets/matrizderisco.png">

Segue link para melhor visualização: https://docs.google.com/spreadsheets/d/1kNhC-oQjgqFWjsXVA_Deo-3a9cNtDTQ1WQqCZ733g24/edit#gid=174732258

**Riscos**
1. Falha na classificação das categorias de compra: existe o risco do sistema continuar classificando incorretamente as categorias de compra, o que poderia levar a decisões imprecisas no processo de compras da Meta
2. Perda na eficiência na gestão de compras devido as categorias incorretamente classificadas: Se as categorias de compra não forem adequadamente classificadas, isso pode resultar em ineficiências operacionais e custos mais elevados
3. Não atender aos requisitos do SLA: Nosso projeto está sujeito a requisitos rigorosos, como disponibilidade, desempenho, rastreabilidade e tolerância a falhas. Não cumprir esses requisitos pode impactar negativamente a confiabilidade do nosso sistema
4. A solução gerar falhas de segurança e privacidade dos dados: a segurança e privacidade são requisitos essenciais para o nosso projeto, não cumpri-los pode impactar negativamente a confiabilidade do nosso sistema 
5. A arquitetura não ser acessível a todas as regiões em que a Meta atua: Garantir que a nossa arquitetura seja acessível em todas as regiões onde a Meta opera é fundamental.

**Oportunidades**
1. Melhorar a precisão do sistema, buscando constantemente aprimorar os algoritmos de classificação: melhorar a classificação do sistema, aumentaria a precisão na categorização de compras
2. Otimizar os processos de compras, aproveitando os insights gerados pelo sistema: podemos aproveitar os insights gerados pelo sistema para otimizar os processos de compras da Meta, tornando-o mais eficiente 
3. Melhorar a rastreabilidade dos serviços contratados: essa oportunidade pode fornecer maior transparência e controle ao nosso parceiro
4. Diminuição de gastos devido a falha nas classificações de compras: ao evitar falhas na classificação de compras, a Meta pode reduzir gastos desnecessários.

Portanto, estas são as principais considerações m nossa matriz de risco e oportunidades, destacando a importância de gerenciar eficazmente os riscos enquanto aproveitamos as oportunidades para aprimorar nossos serviços e atender melhor aos requisitos do SLA.

