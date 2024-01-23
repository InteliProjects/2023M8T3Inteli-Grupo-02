
# Documentação Geral e Técnica do Notebook 📘

## Objetivo Geral do Notebook 🎯
Este notebook tem como foco principal o desenvolvimento e aplicação de um modelo de machine learning inovador e eficiente, voltado para a categorização de dados na região LATAM. A ênfase é colocada na análise precisa e na previsão de tendências de compra com base em dados locais.

## Dados Utilizados 📊
- **Conjunto de Dados LATAM:** Este conjunto inclui 11.265 linhas, representando compras individuais realizadas em empresas da região LATAM. Cada linha é um tesouro de informações, revelando padrões de compra únicos e insights regionais.
- **Etapas de Manipulação dos Dados:** O notebook aborda de forma detalhada a importação, manipulação e preparação dos dados, transformando-os em um formato ideal para análise e modelagem.
- **Seleção de Características:** As variáveis independentes ("x") e a variável dependente ("y") são cuidadosamente escolhidas para garantir a precisão e relevância do modelo de machine learning.

## Modelo de Machine Learning 🤖

### Configuração do Modelo
- **Escolha do Modelo:** O K-Nearest Neighbors (KNN) é o protagonista, conhecido por sua simplicidade e eficácia.
- **Bibliotecas Utilizadas:** Utilizamos ferramentas como Pandas, Numpy e Sklearn para moldar e aprimorar o modelo.
- **Parâmetros do KNN:** O modelo é ajustado para operar com 12 vizinhos mais próximos (`n_neighbors=12`) e utiliza a distância euclidiana como métrica de cálculo.

### Treinamento do Modelo
- **Divisão dos Dados:** O conjunto de dados é dividido em treinamento e teste, garantindo uma avaliação justa e imparcial do modelo.
- **Processo de Treinamento:** Os dados de treinamento são usados para ensinar o modelo (`neigh.fit(x_train, y_train.squeeze())`).
- **Avaliação da Acurácia:** O desempenho do modelo é medido tanto no conjunto de treinamento quanto no de teste.

### Avaliação e Resultados do Modelo
- **Métricas de Desempenho:** A acurácia do modelo é cuidadosamente calculada e analisada.
- **Aplicação Prática:** O modelo é testado em um novo conjunto de dados (`modelo_dump.predict(novo_df_alinhado)`), e as previsões são examinadas para validar sua eficácia.

## Exportação e Uso do Modelo 💾
- **Salvando o Modelo:** O modelo treinado é preservado usando a `joblib` (`dump(neigh, 'knn_model_level3_3cat.joblib')`).
- **Carregamento para Uso Futuro:** O modelo pode ser facilmente recarregado (`modelo_dump=load('knn_model_level3_3cat.joblib')`) para uso contínuo.

## Nota sobre Salvar as Colunas de Treinamento 📝
- **Preservação das Colunas:** Para garantir a consistência, as colunas utilizadas no treinamento são salvas em um arquivo JSON, assegurando que futuras previsões sejam feitas com a mesma estrutura de dados.

## Estrutura Repetitiva para Diferentes Níveis 🔁
- **Categorizações Múltiplas:** O notebook foca na replicação do processo de modelagem para três níveis de categorização (Level 1, Level 2 e Level 3), permitindo uma análise comparativa aprofundada entre eles.

---

Esta documentação atualizada oferece um olhar detalhado sobre o processo e a finalidade do notebook, realçando aspectos técnicos e metodológicos do modelo de machine learning utilizado. Ela serve como um guia abrangente para entender o trabalho realizado, adornado com emojis para uma leitura mais amigável e engajadora.