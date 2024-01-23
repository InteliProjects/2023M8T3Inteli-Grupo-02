# Teste de resitência e disponibilidade

## Objetivo
O objetivo do teste é testar a disponibilidade do sistema, onde, na arquitetura atual, não existe nenhum tipo de mecanismo para limitar requisições de possíveis atacantes. 

## Ferramentas
Para realizar o teste, foi utilizado a ferramenta HPING3, que faz ataques de DoS (Denial of Service). 

## Resultados
![Tela atacante](../../assets/tela-atacante.png)

Acima, temos a visão do atacante, que quer derrubar a disponibilidade da aplicação. 

![Tela atacante](../../assets/timeout-sprint3.png)
Podemos ver que a API não dá nenhuma resposta, pois ela está sofrendo um ataque de negação de serviço, e não existe nenhuma forma de limitar as requisições que são feitas nela. 