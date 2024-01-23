const { simulateMarkovChain } = require("../../Sprint 2/Novo/disponibilidade");
const { run } = require("../../Sprint 2/Novo/tempo_resposta");
const fs = require("fs");
const path = require("path");
const redis = require("redis");


describe("Teste Markov Chain", () => {
  it("Should test for 40 steps", async () => {
    let transitionMatrix = [
      [0.9, 0.1, 0.0, 0.0], // Probabilidades de ir de "Funcionando (máquina 1)" para outro estado
      [0.2, 0.8, 0.0, 0.0], // Probabilidades de ir de "Recovery (máquina 1)" para outro estado
      [0.0, 0.0, 0.9, 0.1], // Probabilidades de ir de "Funcionando (máquina 2)" para outro estado
      [0.0, 0.0, 0.5, 0.5], // Probabilidades de ir de "Recovery (máquina 2)" para outro estado
    ];
    let steps = 40;

    let [statesMachine1, statesMachine2] = simulateMarkovChain(
      transitionMatrix,
      steps
    );
    expect(statesMachine1.length).toBe(steps + 1);

    let testData = {
      steps: 40,
      statesMachine1: statesMachine1,
      statesMachine2: statesMachine2,
    };

    const dir = "./Simulacao/Sprint 4/tests";
    const filename = "testResults40Steps.json";
    const filepath = path.join(dir, filename);

    fs.writeFileSync(filepath, JSON.stringify(testData, null, 2));
  });
});

describe("Teste Tempo de Resposta", () => {
  let redisClient;

  beforeEach(async () => {
    redisClient = redis.createClient();
    await redisClient.connect();
  });

  afterEach(async () => {
    await redisClient.quit();
  });

  it("Should return a high value first and after a low value", async () => {
    const ini = new Date()
    
    const [prediction1, firstResult] = await run(redisClient, 3);

    const time1 = new Date() - ini;

    const ini2 = new Date();

    const [prediction2, secondResult] = await run(redisClient, 3);

    const time2 = new Date() - ini2;
  
    let result = false;
  
    result = time1 > time2;

    console.log(`Tempo da primeira predição: ${time1} ms`);
    console.log(`Tempo da segunda predição: ${time2} ms`);

    expect(result).toBe(true);
  });
});
