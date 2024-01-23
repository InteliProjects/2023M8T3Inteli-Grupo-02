# Teste de resitência e disponibilidade

## Objetivo
O objetivo do teste é testar a disponibilidade do sistema, onde, na arquitetura atual, não existe nenhum tipo de mecanismo para limitar requisições de possíveis atacantes. 

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

Enquanto a ferramenta está em execução, podemos enviar uma requisição GET para a API. Fazendo isso, o sistema não responde a requisição, pois está sobrecarregado com as requisições do atacante.

## Resultados
![Tela atacante](../../assets/tela-atacante.png)

Acima, temos a visão do atacante, que quer derrubar a disponibilidade da aplicação. 

![Tela atacante](../../assets/timeout-sprint3.png)
Podemos ver que a API não dá nenhuma resposta, pois ela está sofrendo um ataque de negação de serviço, e não existe nenhuma forma de limitar as requisições que são feitas nela. 