function getNextState(currentState, transitionMatrix) {
    let r = Math.random();
    let cumulativeProbability = 0.0;
  
    for (let i = 0; i < transitionMatrix[currentState].length; i++) {
      cumulativeProbability += transitionMatrix[currentState][i];
      if (r < cumulativeProbability) {
        return i;
      }
    }
    return currentState;
  }
  
  function simulateMarkovChain(transitionMatrix, numberOfSteps) {
    let currentState = 0; // Estado inicial: 'Funcionando'
    let statesVisited = [currentState];
  
    for (let i = 0; i < numberOfSteps; i++) {
      currentState = getNextState(currentState, transitionMatrix);
      statesVisited.push(currentState);
    }
  
    return statesVisited;
  }
  
  // Defina a matriz de transições para uma única máquina com dois estados
  let transitionMatrix = [
    [0.9, 0.1], // Probabilidades de ir de "Funcionando" para outro estado
    [0.2, 0.8], // Probabilidades de ir de "Falha" para outro estado
  ];
  
  // Executar a simulação
  let steps = 10; // Número de passos que queremos simular
  let states = simulateMarkovChain(transitionMatrix, steps);
  
  console.log('Estados visitados:', states);

  module.exports = { simulateMarkovChain };