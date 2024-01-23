const express = require('express');
const { rateLimit } = require('express-rate-limit')

const app = express();

const port = 3000;

//Personalize a mensagem de erro do limiter
const limiter = rateLimit({
	windowMs: 10 * 60 * 1000, // 10 minutos
	limit: 3, // Limita a quantidade de requisições a esse numero dentro da janela de tempo estabelecida (windowMs)
	standardHeaders: 'draft-7', // Adiciona o header `Retry-After` com o valor `10` (em segundos) para todas as respostas.
	legacyHeaders: false, // Não adiciona o header `X-RateLimit-Remaining` com o valor restante de requisições.
    message: 'Você excedeu o limite de requisições. Tente novamente em 10 minutos.'
})

app.get("/", limiter, async (req, res) => {
    res.send("Você recebeu uma resposta!")
})

app.listen(port, () => {
    console.log(`API de teste para DOS rodando na porta ${port}!`)
})