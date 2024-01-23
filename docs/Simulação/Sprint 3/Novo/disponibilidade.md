# Teste de resitência e disponibilidade

## Objetivo
O objetivo do teste é testar a disponibilidade do sistema, onde, na arquitetura nova, existem ferramentas para fazer o bloqueio requisições massivas, podendo ser de possíveis atacantes. 

## Ferramentas
Para realizar o teste, foi utilizado a ferramenta HPING3, que faz ataques de DoS (Denial of Service). 

## Resultados
![Tela atacante](../../assets/tela-atacante.png)

Acima, temos a visão do atacante, que quer derrubar a disponibilidade da aplicação. 

![](../../assets/resposta-novo-sprint3.png)

Podemos ver que a API demonstra estabilidade, e retorna uma mensagem para o usuário que está fazendo as requisições, mostrando que ele excedeu o limite de requisições. 
