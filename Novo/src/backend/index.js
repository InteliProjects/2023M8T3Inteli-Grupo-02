const express = require('express');
const fs = require('fs');
const cors = require('cors');
const axios = require('axios');
const cheerio = require('cheerio');
const { Configuration, OpenAIApi } = require('openai');
require('dotenv').config();

const app = express();

app.use(express.json());
app.use(cors());

function readJsonFile(filePath) {
    // Lê o conteúdo do arquivo
    const fileContent = fs.readFileSync(filePath, 'utf8');

    // Converte a string JSON para um objeto JavaScript
    const jsonData = JSON.parse(fileContent);

    return jsonData;
}

async function askGPT3AboutCompany(texts) {
    const apiKey = process.env.KEY_GPT; // Substitua pela sua chave de API da OpenAI

    const configuration = new Configuration({
        apiKey: apiKey,
    });

    const openai = new OpenAIApi(configuration);

    // const prompt = `Based on the following texts, what does the company do? Texts: ${texts.join(' ')}, The texts will be in Portuguese and you need to answer in Portuguese. But I want a short answer.`;

    const prompt = `Me dê uma pequena resposta, sobre o que o a empresa ${texts} faz. A resposta deve ser em português.`

    try {
        
        const response = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: [
                {
                    role: 'system',
                    content: prompt,
                }
            ],
        });

        return response.data.choices[0].message;
    } catch (error) {
        console.error(`Error calling OpenAI API: ${error}`);
        return 'Error occurred';
    }
}

async function fetchTextFromURL(url) {
    try {
        const { data } = await axios.get(url);
        const $ = cheerio.load(data);
        let texts = [];

        $('body').find('*').each(function() {
            let text = $(this).text().trim();
            if (text) texts.push(text);
        });

        return texts;
    } catch (error) {
        console.error(`Error fetching data from URL: ${error}`);
        return [];
    }
}


const port = 3001;

app.post("/", (req, res) => {
    const jsonData = readJsonFile("./saida.json")

    // const costCenter = "2315 - In-Market - LATAM - Brazil"
    // const description = "Other Marketing"
    // const supplier = "AD AGENCIA DE VIAGENS E TURISMO LTDA"

    const costCenter = req.body.area
    const description = req.body.description
    const supplier = req.body.name

    console.log(costCenter, description, supplier)

    const filteredData = jsonData.filter((item) => {
        return item["Cost Center"] === costCenter && item["GL Description"] === description && item["Supplier Name"] === supplier
    })

    if (filteredData.length === 0) {
        return res.json({
            "catLevel1": "",
            "catLevel2": "",
            "catLevel3": "",
        })
    }

    res.json({
        "catLevel1": filteredData[0]["Level 1"],
        "catLevel2": filteredData[0]["Level 2"],
        "catLevel3": filteredData[0]["Level 3"],
    })
})

app.post("/get-infos", async (req, res) => {
    const companyName = req.body.companyName

    // const result = await fetch(`https://www.googleapis.com/customsearch/v1?key=AIzaSyBgUOY5xrxZvC73pgo25pwyfl4UULKyW0M&cx=82ae6189217124831&q='${companyName}'`)

    // const response = await result.json()

    // console.log(response.items)

    //const resultSearch = await fetchTextFromURL(response.items[0].link)


    const resultGPT3 = await askGPT3AboutCompany(companyName)

    console.log(resultGPT3)

    res.send(resultGPT3.content)
})

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});