const products = [
    {
        "id": 1,
        "name": "Produto 1",
        "price": 10,    
    },
    {
        "id": 2,
        "name": "Produto 2",
        "price": 20,
    },
    {
        "id": 3,
        "name": "Produto 3",
        "price": 30,
    },
    {
        "id": 4,
        "name": "Produto 4",
        "price": 40,
    },
]



function predict(productId) {
    //Aguarde 2 segundos e retorne a categoria do produto
    let product = products.find(p => p.id == productId);

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(product) {

                const category = product.price > 20 ? "Categoria 1" : "Categoria 2";

                resolve({category: category, acuracy: 0.91});
            } else {
                reject("Produto não encontrado");
            }
        }, 2000);
    })
}
// Teste de Disponibilidade
async function testAvailability() {
    let errors = 0;
    let attempts = 10;
    for (let i = 0; i < attempts; i++) {
        try {
            await predict(i % 4 + 1); // Usa IDs de produtos existentes

        } catch (e) {
            errors++;

        }
    }
    console.log(`Número total de erros(testes de disponibilidade): ${errors}`);
    console.log(`Teste de Disponibilidade: ${errors === 0 ? 'Passou' : 'Falhou'}`);
}

// Teste de tempo de resposta
async function testResponseTime() {
    const timeLimit = 2500; // limite de tempo em milissegundos
    let responseTime = 0;
    let startTime = new Date().getTime();
    await predict(1);
    responseTime = new Date().getTime() - startTime;
    console.log(`Tempo de Resposta: ${responseTime} ms`);
    console.log(`Teste de Tempo de Resposta: ${responseTime <= timeLimit ? 'Passou' : 'Falhou'}`);
}






async function run() {
    const ini = new Date();
    console.log(await predict(1))
    const fim = new Date();
    let finalResult = fim - ini;
    finalResult = parseInt(finalResult)
    return finalResult;
}

async function runTests() {
    console.log("Iniciando testes...");
    await testAvailability();
    await testResponseTime();
    await testSecurity();
}

run();
runTests();


module.exports = {
    run
}