// const { simulateMarkovChain } =  require('../../Sprint 2/Atual/disponibilidade.js');
// const { run } = require('../../Sprint 2/Atual/tempo_resposta.js');

// describe('Teste Markov Chain', () => {
// it('Should test for 10 steps', async () => {
//     let transitionMatrix = [
//     [0.9, 0.1], // Probabilidades de ir de "Funcionando" para outro estado
//     [0.2, 0.8], // Probabilidades de ir de "Falha" para outro estado
//     ];
//     let steps = 10;
//     let states = simulateMarkovChain(transitionMatrix, steps);
//     console.log(states);

//     expect(states.length).toBe(steps + 1);
//     });
// })

// describe('Teste tempo de resposta', () => {
//     it('Should return a time greater than 2000 milliseconds', async () => {
//         const responseTime = await run();

//         console.log(`Response time: ${responseTime} milliseconds`);

//         expect(responseTime).toBeGreaterThan(2000);
//     })
// })
