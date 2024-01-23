# Inteli - Instituo de Tecnologia e liderança

<p align="center">
  <img src="https://imgur.com/etGAC9J.png" alt="Inteli logo" border="0" width="50%">
</p>

<p align="center">
<img src="https://logosmarcas.net/wp-content/uploads/2021/11/Meta-Logo.png" alt="Inteli logo" border="0" width="50%">
</p>

# Proposta de Arquitetura de Software

## Grupo 2 - Metaleiros

### 🚀 Integrantes

- <a href="https://www.linkedin.com/in/pedro-hagge/">Pedro Hagge Baptista</a>
- <a href="https://www.linkedin.com/in/sophia-de-oliveira-tosar-aba7ab23b/">Sophia Tosar</a>
- <a href="https://www.linkedin.com/in/daniel-eduardocunha/">Daniel Cunha</a>
- <a href="https://www.linkedin.com/in/gabriel--nascimento/">Gabriel Nascimentos</a>
- <a href="https://www.linkedin.com/in/matheusmacedosantos/">Matheus Macedo Santos</a>
- <a href="https://www.linkedin.com/in/alexandrefonseca00/">Alexandre Fonseca</a>
- <a href="https://www.linkedin.com/in/mike-mouadeb/">Mike Moudabed</a>


## 🔍 Sumário

* [Descrição](#descrição)
* [Estrutura de pastas](#-estrutura-de-pastas)
* [Documentação do sistema atual](#-documentação-do-sistema-atual)
* [Documentação do sistema novo](#-documentação-do-sistema-novo)
* [Documentação da simulação](#-documentação-da-simulação)
* [Instalação](#-instalação)
  * [Tecnologias](#tecnologias)
  * [Implementações](#implementações)
  * [Demo](#demo)
* [Histórico de lançamentos](#-histórico-de-lançamentos)
* [Licença/License](#-licençalicense)
* [Referências](#-referências)


## 📜Descrição

A solução de arquitetura desenvolvida para a Meta foi projetada para aprimorar requisitos funcionais específicos, visando proporcionar uma abordagem inovadora para obter informações atualizadas sobre tópicos relevantes para empresas. Ao integrar interações de voz e texto, os usuários podem realizar buscas precisas sobre as discussões das empresas em relação a temas específicos. Por exemplo, é possível explorar o que empresas do setor financeiro estão debatendo sobre otimização e planejamento financeiro. Além disso, o robusto mecanismo de IA por trás dessa solução é capaz de compreender não apenas as perspectivas da Meta, mas também de outras empresas de tecnologia sobre esses temas, identificando quais tecnologias da Meta estão relacionadas, oferecendo assim um acesso conveniente a insights de mercado, tendências e informações competitivas.

**Principais melhorias da arquitetura:**

- **Acurácia do modelo:** 
    Ao detalhar nossa estratégia de modelagem para a classificação em três categorias distintas, é crucial considerar também o impacto dessa abordagem na acurácia de cada modelo. A especificidade e a interdependência dos modelos resultaram em variações na precisão de classificação, refletindo a complexidade crescente à medida que avançamos de uma categoria para a outra.

    O primeiro modelo, dedicado exclusivamente à categoria 1, alcançou uma acurácia impressionante de 96%. Esta alta precisão pode ser atribuída à natureza relativamente direta e menos complexa dessa categoria, além da especialização do modelo que foi treinado e ajustado especificamente para ela. Com um foco claro e dados bem definidos, o modelo pôde alcançar um desempenho notável.

    Já o segundo modelo, responsável pela categoria 2, registrou uma acurácia de 94%. Embora ainda bastante alta, essa leve redução na precisão pode ser explicada pela complexidade adicional introduzida nessa categoria. Este modelo não só teve que classificar a categoria 2 com base em seus próprios atributos, mas também levou em consideração as informações da categoria 1. A necessidade de integrar e interpretar essas informações adicionais, portanto, representou um desafio maior, resultando em uma acurácia ligeiramente inferior à do primeiro modelo.

    O terceiro e último modelo, encarregado da categoria 3, apresentou uma acurácia de 89%. Esta foi a menor taxa de precisão entre os três modelos, o que reflete a complexidade significativamente maior desta categoria. A categoria 3 exigia que o modelo não só considerasse suas características intrínsecas, mas também integrasse as informações das categorias 1 e 2. Este nível de complexidade inter-categoria apresentou um desafio considerável, o que se refletiu em uma acurácia mais baixa. Apesar disso, uma precisão de 89% ainda é notável, considerando a complexidade e as múltiplas variáveis envolvidas.

    Em resumo, cada modelo apresentou um desempenho de acordo com as exigências e complexidades das categorias que foram designadas a classificar. A estratégia de modelos separados e interconectados mostrou-se eficaz, mas também revelou uma tendência de decréscimo na acurácia à medida que a complexidade das categorias aumentava. Essa observação é crucial para entender as limitações e os desafios inerentes à modelagem em cenários de classificação múltipla e hierárquica.

</br>

- **Disponibilidade:**
      No desenvolvimento de um sistema para a Meta, inicialmente nos deparamos com a configuração de um único servidor. Esta escolha, embora econômica e simples, apresentava riscos significativos em termos de disponibilidade, pois qualquer falha no servidor resultaria em um sistema completamente inoperante. Conscientes deste desafio, decidimos expandir nossa infraestrutura, adicionando uma segunda máquina ao arranjo.
  
  A introdução de uma máquina adicional transformou fundamentalmente a arquitetura do nosso sistema. Com dois servidores, poderíamos agora garantir uma maior redundância e, consequentemente, uma disponibilidade aprimorada. Para quantificar e comparar as melhorias, recorremos ao uso de Cadeias de Markov, uma técnica poderosa para modelar processos estocásticos.
  
  Na configuração original de servidor único, nossa Cadeia de Markov era relativamente simples, alternando entre estados operacionais e de falha. Esta simplicidade, no entanto, ocultava a vulnerabilidade do sistema: uma única falha poderia levar a um colapso total. Com a adição do segundo servidor, a Cadeia de Markov tornou-se mais complexa, incorporando estados onde um servidor poderia falhar enquanto o outro permaneceria operacional. Essa nova configuração oferecia um mecanismo de failover, onde a falha de um servidor não implicaria mais em um sistema totalmente indisponível.
  
  Ao analisar as Cadeias de Markov para ambas as configurações, observamos um aumento substancial na disponibilidade do sistema após a expansão. A probabilidade de todos os servidores falharem simultaneamente tornou-se significativamente menor, garantindo assim uma maior resiliência do sistema. Esta análise quantitativa confirmou a eficácia de nossa decisão de adicionar a segunda máquina.
  
  Em conclusão, a transição de um sistema baseado em um único servidor para um modelo de dois servidores para a Meta não apenas melhorou a disponibilidade, como também ofereceu insights valiosos sobre a importância da redundância e escalabilidade na arquitetura de sistemas. A aplicação de Cadeias de Markov nesse contexto proporcionou uma ferramenta robusta para avaliar e demonstrar o impacto dessas mudanças, sublinhando a eficácia de nossa abordagem na construção de sistemas mais confiáveis e resilientes.

</br>

- **Segurança:**
    No processo de desenvolvimento de um sistema para a Meta, uma das nossas principais preocupações era garantir que a segurança estivesse alinhada com os altos padrões já estabelecidos pela empresa. A Meta, conhecida por sua robusta infraestrutura de segurança, já possuía um sistema extremamente seguro, o que nos deixou com um desafio interessante: como poderíamos contribuir para aprimorar um sistema que já estava em um nível de segurança tão elevado?
  
  Após uma análise detalhada, identificamos que a maior parte das medidas de segurança necessárias já estava efetivamente implementada pelo sistema existente da Meta. Isso incluía protocolos avançados de criptografia, autenticação multifatorial, monitoramento contínuo de ameaças, entre outras práticas de segurança de ponta. Diante desse cenário, tornou-se claro que qualquer adição ao sistema deveria ser cuidadosamente considerada para não perturbar o equilíbrio já estabelecido.
  
  Optamos, então, por uma abordagem minimalista e focada, decidindo implementar um limite de requisições por IP. Essa medida tinha por objetivo mitigar ataques de negação de serviço distribuídos (DDoS), onde um grande número de requisições de um ou mais IPs pode sobrecarregar o servidor, causando lentidão ou até mesmo a indisponibilidade do sistema. Ao limitar o número de requisições que um único IP pode fazer em um determinado período, aumentamos a resiliência do sistema contra esses tipos de ataques, sem alterar significativamente a arquitetura de segurança já existente.
  
  Este limite de requisições foi cuidadosamente calibrado para garantir que usuários legítimos não fossem impactados negativamente em sua experiência com o sistema. Foi um processo de ajuste fino, onde equilibramos a necessidade de segurança com a usabilidade, garantindo que o sistema permanecesse acessível e responsivo.
  
  Em resumo, ao lidar com um sistema que já possuía uma segurança extremamente elevada, como o da Meta, nossa intervenção precisou ser tanto cirúrgica quanto eficaz. A implementação de um limite de requisições por IP representou uma solução simples, mas poderosa, complementando as robustas medidas de segurança já em vigor. Esta abordagem reforçou a segurança do sistema contra ataques específicos, mantendo ao mesmo tempo a integridade e a eficiência do ambiente de segurança já estabelecido pela Meta.

</br>
</br>


## 📁 Estrutura de pastas
- 📂 __GP2M8__
   - 📄 [README.md](README.md)
   - 📂 __[documentos](documentos/)__
      - <a href="https://github.com/2022M2T3/Projeto4/blob/main/documentos/WAD%20-%20Yamaha%20Planning%20System.pdf"><img src="https://user-images.githubusercontent.com/99209356/174968401-abc5cae1-7a1e-4f06-aca6-c859c993c038.svg" width="18px" height="18px"></a> Manual de Administrador
      - <a href="https://github.com/2022M2T3/Projeto4/blob/main/documentos/WAD%20-%20Yamaha%20Planning%20System.pdf"><img src="https://user-images.githubusercontent.com/99209356/174968401-abc5cae1-7a1e-4f06-aca6-c859c993c038.svg" width="18px" height="18px"></a> Manual do Utilizador
   - 📁 __[imagens](imagens/)__
   - 📂 __[Novo](Novo/)__
      - 📁 __[assets](assets/)__
      - 📁 __[docs](docs/)__
          - sprint1.md
          - sprint2.md
          - sprint3.md
          - sprint4.md
      - 📁 __[src](src/)__
          - 📁 __[backend](src/backend/)__
              - Dockerfile
              - index.js
              - LATAM-Data.xlsx
              - package.json
              - package-lock.json
              - saida.json
              - xlsxToJSON.js
              - yarn.lock
          - docker-compose.yml
          - 📁 __[frontend](src/frontend/)__
              - 📁 __[assets](src/frontend/assets/)__
                  - logo.png
              - next.config.js
              - next-env.d.ts
              - package.json
              - package-lock.json
              - postcss.config.js
              - 📁 __[public](src/frontend/public/)__
                  - next.svg
                  - vercel.svg
              - README.md
              - 📁 __[src](src/frontend/src/)__
                  - 📁 __[app](src/frontend/src/app/)__
                      - favicon.ico
                      - globals.css
                      - layout.tsx
                      - page.tsx
                      - 📁 __[search](src/frontend/src/app/search/)__
                          - page.tsx
                  - 📁 __[components](src/frontend/src/components/)__
                      - 📁 __[Header](src/frontend/src/components/Header/)__
                          - index.tsx
                      - 📁 __[HeaderComponent](src/frontend/src/components/HeaderComponent/)__
                          - index.tsx
                      - 📁 __[HistoryComponent](src/frontend/src/components/HistoryComponent/)__
                          - index.tsx
                      - 📁 __[InputsArea](src/frontend/src/components/InputsArea/)__
                          - index.tsx
                      - 📁 __[ResultsArea](src/frontend/src/components/ResultsArea/)__
                          - index.tsx
                  - 📁 __[contexts](src/frontend/src/contexts/)__
                      - callContext.tsx
                      - historyContext.tsx
              - tailwind.config.ts
              - tsconfig.json
              - yarn.lock
          - 📁 __[modeloAPI](src/modeloAPI/)__
              - colunas_treinamento.json
              - Dockerfile
              - index.py
              - knn_model_level1_3cat.joblib
              - knn_model_level2_3cat.joblib
              - knn_model_level3_3cat.joblib
              - README.md
              - requirements.txt
          - 📁 __[tests](src/tests/)__
 
<br>

Dentre os arquivos e pastas presentes na raiz do projeto, definem-se:

- <b>README.md</b>: arquivo que serve como guia e explicação geral sobre o projeto (o mesmo que você está lendo agora).

- <b>assets</b>: aqui estão os arquivos relacionados a parte gráfica do projeto, ou seja, as imagens e links de vídeos que os representam (o logo do grupo pode ser adicionado nesta pasta).

- <b>docs</b>: aqui estão todos os documentos do projeto. Há também uma pasta denominada <b>outros</b> onde estão presentes outros documentos complementares, além de um arquivo README para o grupo registrar a localização de cada artefato.

- <b>src</b>: Todo o código fonte criado para o desenvolvimento do projeto, incluindo backend e frontend se aplicáveis.

src: todo o código fonte criado para o desenvolvimento do projeto, incluindo os blocos de código do circuito, backend e frontend se aplicáveis.

## 📄 Documentação do sistema atual
  - <a href="https://github.com/2023M8T3Inteli/Grupo-02/blob/main/docs/Atual/sprint1.md"><img src="https://user-images.githubusercontent.com/99209356/174968401-abc5cae1-7a1e-4f06-aca6-c859c993c038.svg" width="18px" height="18px"> Sprint 1.md</a>
  - <a href="https://github.com/2023M8T3Inteli/Grupo-02/blob/main/docs/Atual/sprint2.md"><img src="https://user-images.githubusercontent.com/99209356/174968401-abc5cae1-7a1e-4f06-aca6-c859c993c038.svg" width="18px" height="18px"> Sprint 2.md</a> 

## 📄 Documentação do sistema novo
  - <a href="https://github.com/2023M8T3Inteli/Grupo-02/blob/main/docs/Novo/sprint1.md"><img src="https://user-images.githubusercontent.com/99209356/174968401-abc5cae1-7a1e-4f06-aca6-c859c993c038.svg" width="18px" height="18px"> Sprint 1.md</a>
  - <a href="https://github.com/2023M8T3Inteli/Grupo-02/blob/main/docs/Novo/sprint2.md"><img src="https://user-images.githubusercontent.com/99209356/174968401-abc5cae1-7a1e-4f06-aca6-c859c993c038.svg" width="18px" height="18px"> Sprint 2.md</a>
  - <a href="https://github.com/2023M8T3Inteli/Grupo-02/blob/main/docs/Novo/sprint3.md"><img src="https://user-images.githubusercontent.com/99209356/174968401-abc5cae1-7a1e-4f06-aca6-c859c993c038.svg" width="18px" height="18px"> Sprint 3.md</a>
  - <a href="https://github.com/2023M8T3Inteli/Grupo-02/blob/main/docs/Novo/sprint4.md"><img src="https://user-images.githubusercontent.com/99209356/174968401-abc5cae1-7a1e-4f06-aca6-c859c993c038.svg" width="18px" height="18px"> Sprint 4.md</a> 

## 📄 Documentação da simulação
  - <a href="https://github.com/2023M8T3Inteli/Grupo-02/tree/main/docs/Simula%C3%A7%C3%A3o/Sprint%201"><img src="https://user-images.githubusercontent.com/99209356/174968401-abc5cae1-7a1e-4f06-aca6-c859c993c038.svg" width="18px" height="18px">Sprint 1</a>
  - <a href="https://github.com/2023M8T3Inteli/Grupo-02/tree/main/docs/Simula%C3%A7%C3%A3o/Sprint%202"><img src="https://user-images.githubusercontent.com/99209356/174968401-abc5cae1-7a1e-4f06-aca6-c859c993c038.svg" width="18px" height="18px">Sprint 2</a> 
  - <a href="https://github.com/2023M8T3Inteli/Grupo-02/tree/main/docs/Simula%C3%A7%C3%A3o/Sprint%203"><img src="https://user-images.githubusercontent.com/99209356/174968401-abc5cae1-7a1e-4f06-aca6-c859c993c038.svg" width="18px" height="18px">Sprint 3</a>
  - <a href="https://github.com/2023M8T3Inteli/Grupo-02/tree/main/docs/Simula%C3%A7%C3%A3o/Sprint%204"><img src="https://user-images.githubusercontent.com/99209356/174968401-abc5cae1-7a1e-4f06-aca6-c859c993c038.svg" width="18px" height="18px">Sprint 4</a> 

## 🔧 Instalação

Para a instalação desse projeto, é necessário ter alguns recursos instalados na máquina que irá executar. Nota-se que além das instalações necessárias, também destaca-se que é relevante a versão de cada uma dessas tecnologias, haja vista que podem ocorrer falhas na execução, devido a configuração do projeto.

### Tecnologias
- React Native 0.64.2
- Flutter 2.2.3
- Python 3.9.6
- Rabbit MQ 3.9.7
- Docker 20.10.8
- Type Script 4.3.5
- Node 14.17.6

### Implementações
- Passo a Passo de como incicializar as implmentações localmente ( Recomenda-se para facilitar a documentação e a propria instalação utilizar docker compose).

Exemplo :

```bash
  git clone ***
  cd my-project
```

### Demo
- Passo a Passo de como incicializar a demo localmente ( Recomenda-se para facilitar a documentação e a propria instalação utilizar docker compose)

Exemplo :

```bash
  git clone ***
  cd my-project
```

## 🗃 Histórico de lançamentos

**1.0 — 11/08/2023 (Sprint I)**

* Entendimento do Negócio

* Entendimento do Design

* Entendimento da Arquitetura do Sistema


**2.0 — 25/08/2023 (Sprint II)**

* Sistema de NLP

* Documentação da Sprint


**3.0 — 06/09/2023 (Sprint III)**

* Construção do Backend da Solução

* Documentação da Sprint


**4.0 — 22/09/2023 (Sprint IV)**

* Construção do Frontend da Aplicação

* Documentação da Sprint
  

**5.0 — 06/10/2023 (Sprint V)**

* Elaboração da Documentação Final do Projeto

* Apresentação Final


## 📋 Licença/License


<p xmlns:cc="http://creativecommons.org/ns#" xmlns:dct="http://purl.org/dc/terms/"><a property="dct:title" rel="cc:attributionURL" href="#">Nome do grupo</a> by <a rel="cc:attributionURL dct:creator" property="cc:attributionName" href="#">Inteli, Pedro Hagge Baptista, Caga Bide, Sophia Tosar, Alexandre Fonseca, Gabriel Nascimento, Daniel Cunha, Mike Moudabed</a> is 

licensed under <a href="http://creativecommons.org/licenses/by/4.0/?ref=chooser-v1" target="_blank" rel="license noopener noreferrer" style="display:inline-block;">Attribution 4.0 International<img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1"><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1"></a></p>
