# Teste de resitência e disponibilidade

## Objetivo
O objetivo do teste é testar a disponibilidade do sistema, onde, na arquitetura nova, existem ferramentas para fazer o bloqueio requisições massivas, podendo ser de possíveis atacantes. 

## Ferramentas
Para realizar o teste, foi utilizado a ferramenta HPING3, que faz ataques de DoS (Denial of Service). 

## Execução dos testes
Para executar os testes de segurança, é necessário instalar a ferramenta HPING3. Após a instalação, é necessário executar o seguinte comando: 

```bash
sudo hping3 -p PORT TARGET-IP --flood
```

Onde:
- PORT: Porta que o sistema está rodando
- TARGET-IP: IP do sistema

Enquanto a ferramenta está em execução, podemos enviar uma requisição GET para a API. Fazendo isso, o sistema informa que o limite de requisições foi excedido.

## Resultados
![Tela atacante](../../assets/tela-atacante.png)

Acima, temos a visão do atacante, que quer derrubar a disponibilidade da aplicação. 

![](../../assets/resposta-novo-sprint3.png)

Podemos ver que a API demonstra estabilidade, e retorna uma mensagem para o usuário que está fazendo as requisições, mostrando que ele excedeu o limite de requisições. 
