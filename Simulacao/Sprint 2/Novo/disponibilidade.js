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
  let currentStateMachine1 = 0; // Estado inicial da Máquina 1: 'Funcionando'
  let currentStateMachine2 = 2; // Estado inicial da Máquina 2: 'Funcionando'
  let statesVisitedMachine1 = [currentStateMachine1];
  let statesVisitedMachine2 = [currentStateMachine2];

  for (let i = 0; i < numberOfSteps; i++) {
    currentStateMachine1 = getNextState(currentStateMachine1, transitionMatrix);
    currentStateMachine2 = getNextState(currentStateMachine2, transitionMatrix);

    // Aplicar a condição especial de restart manual se ambas as máquinas estiverem em 'Recovery'
    if (currentStateMachine1 === 1 && currentStateMachine2 === 3) {
      currentStateMachine1 = 0; // Máquina 1 volta para 'Funcionando'
      currentStateMachine2 = 2; // Máquina 2 volta para 'Funcionando'
    }

    statesVisitedMachine1.push(currentStateMachine1);
    statesVisitedMachine2.push(currentStateMachine2);
  }

  return [statesVisitedMachine1, statesVisitedMachine2];
}

// Defina a matriz de transições conforme as probabilidades do seu sistema
let transitionMatrix = [
  [0.9, 0.1, 0.0, 0.0], // Probabilidades de ir de "Funcionando (máquina 1)" para outro estado
  [0.2, 0.8, 0.0, 0.0], // Probabilidades de ir de "Recovery (máquina 1)" para outro estado
  [0.0, 0.0, 0.9, 0.1], // Probabilidades de ir de "Funcionando (máquina 2)" para outro estado
  [0.0, 0.0, 0.5, 0.5]  // Probabilidades de ir de "Recovery (máquina 2)" para outro estado
];

// Executar a simulação
let steps = 10; // Número de passos que queremos simular
let [statesMachine1, statesMachine2] = simulateMarkovChain(transitionMatrix, steps);

module.exports = {
  simulateMarkovChain
}