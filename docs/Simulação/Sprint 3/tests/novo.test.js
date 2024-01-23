// const { simulateMarkovChain } = require("../../Sprint 2/Novo/disponibilidade");
// const { run } = require("../../Sprint 2/Novo/tempo_resposta");
// const fs = require("fs");
// const path = require("path");
// const redis = require("redis");

// describe("Teste Markov Chain", () => {
//   it("Should test for 10 steps", async () => {
//     let transitionMatrix = [
//       [0.9, 0.1, 0.0, 0.0], // Probabilidades de ir de "Funcionando (máquina 1)" para outro estado
//       [0.2, 0.8, 0.0, 0.0], // Probabilidades de ir de "Recovery (máquina 1)" para outro estado
//       [0.0, 0.0, 0.9, 0.1], // Probabilidades de ir de "Funcionando (máquina 2)" para outro estado
//       [0.0, 0.0, 0.5, 0.5], // Probabilidades de ir de "Recovery (máquina 2)" para outro estado
//     ];
//     let steps = 10;

//     let [statesMachine1, statesMachine2] = simulateMarkovChain(
//       transitionMatrix,
//       steps
//     );
    
//     expect(statesMachine1.length).toBe(steps + 1);
//     let testData = {
//       steps: 10,
//       statesMachine1: statesMachine1,
//       statesMachine2: statesMachine2,
//     };

//     const dir = "./Simulacao/Sprint 3/tests";
//     const filename = "testResults10Steps.json";
//     const filepath = path.join(dir, filename);

//     fs.writeFileSync(filepath, JSON.stringify(testData, null, 2));
//   });

//   it("Should test for 20 steps", async () => {
//     let transitionMatrix = [
//       [0.9, 0.1, 0.0, 0.0], // Probabilidades de ir de "Funcionando (máquina 1)" para outro estado
//       [0.2, 0.8, 0.0, 0.0], // Probabilidades de ir de "Recovery (máquina 1)" para outro estado
//       [0.0, 0.0, 0.9, 0.1], // Probabilidades de ir de "Funcionando (máquina 2)" para outro estado
//       [0.0, 0.0, 0.5, 0.5], // Probabilidades de ir de "Recovery (máquina 2)" para outro estado
//     ];
//     let steps = 20;

//     let [statesMachine1, statesMachine2] = simulateMarkovChain(
//       transitionMatrix,
//       steps
//     );

//     expect(statesMachine1.length).toBe(steps + 1);

//     let testData = {
//       steps: 20,
//       statesMachine1: statesMachine1,
//       statesMachine2: statesMachine2,
//     };

//     const dir = "./Simulacao/Sprint 3/tests";
//     const filename = "testResults20Steps.json";
//     const filepath = path.join(dir, filename);

//     fs.writeFileSync(filepath, JSON.stringify(testData, null, 2));
//   });

//   it("Should test for 30 steps", async () => {
//     let transitionMatrix = [
//       [0.9, 0.1, 0.0, 0.0], // Probabilidades de ir de "Funcionando (máquina 1)" para outro estado
//       [0.2, 0.8, 0.0, 0.0], // Probabilidades de ir de "Recovery (máquina 1)" para outro estado
//       [0.0, 0.0, 0.9, 0.1], // Probabilidades de ir de "Funcionando (máquina 2)" para outro estado
//       [0.0, 0.0, 0.5, 0.5], // Probabilidades de ir de "Recovery (máquina 2)" para outro estado
//     ];
//     let steps = 30;

//     let [statesMachine1, statesMachine2] = simulateMarkovChain(
//       transitionMatrix,
//       steps
//     );

//     expect(statesMachine1.length).toBe(steps + 1);

//     let testData = {
//       steps: 30,
//       statesMachine1: statesMachine1,
//       statesMachine2: statesMachine2,
//     };

//     const dir = "./Simulacao/Sprint 3/tests";
//     const filename = "testResults30Steps.json";
//     const filepath = path.join(dir, filename);

//     fs.writeFileSync(filepath, JSON.stringify(testData, null, 2));
//   });

//   it("Should test for 40 steps", async () => {
//     let transitionMatrix = [
//       [0.9, 0.1, 0.0, 0.0], // Probabilidades de ir de "Funcionando (máquina 1)" para outro estado
//       [0.2, 0.8, 0.0, 0.0], // Probabilidades de ir de "Recovery (máquina 1)" para outro estado
//       [0.0, 0.0, 0.9, 0.1], // Probabilidades de ir de "Funcionando (máquina 2)" para outro estado
//       [0.0, 0.0, 0.5, 0.5], // Probabilidades de ir de "Recovery (máquina 2)" para outro estado
//     ];
//     let steps = 40;

//     let [statesMachine1, statesMachine2] = simulateMarkovChain(
//       transitionMatrix,
//       steps
//     );
//     expect(statesMachine1.length).toBe(steps + 1);

//     let testData = {
//       steps: 40,
//       statesMachine1: statesMachine1,
//       statesMachine2: statesMachine2,
//     };

//     const dir = "./Simulacao/Sprint 3/tests";
//     const filename = "testResults40Steps.json";
//     const filepath = path.join(dir, filename);

//     fs.writeFileSync(filepath, JSON.stringify(testData, null, 2));
//   });
// });

// describe("Teste Tempo de Resposta", () => {
//   let redisClient;

//   beforeEach(async () => {
//     redisClient = redis.createClient();
//     await redisClient.connect();
//   });

//   afterEach(async () => {
//     await redisClient.quit();
//   });

//   it("Should return a high value first and after a low value", async () => {
//     const [prediction1, firstResult] = await run(redisClient, 3);

//     const [prediction2, secondResult] = await run(redisClient, 3);

//     let result = false;

//     if (firstResult > secondResult) {
//       result = true;
//     }

//     expect(result).toBe(true);
//   });
// });
