const express = require('express');
const { rateLimit } = require('express-rate-limit')

const app = express();

const port = 3000;


app.get("/", (req, res) => {
    res.send("Você recebeu uma resposta!")
})

app.listen(port, () => {
    console.log(`API de teste para DOS rodando na porta ${port}!`)
})