// var catCerta = "Tecnologia/Computador/Portatil";
// var catErrada = "Móveis/Pequeno/Madeira";

// var qntTotal = 0;

// function assertividade() {
//     //If menor do que qntAcertos retorna catCerta, senão retorna catErrada e incrementa qntTotal
//     if (qntTotal <= 5) {
//         qntTotal++;
//         return catCerta;
//     } else {
//         qntTotal++;
//         return catErrada;
//     }
// }

// for(i=0; i<10; i++){
//     console.log(assertividade())
// }


class MarkovChain {
    constructor() {
        // Matriz de transição
        this.transitionMatrix = [
            [0.95, 0.35],  // Probabilidades a partir do estado A
            [0.95, 0.35]   // Probabilidades a partir do estado B
        ];
        // Começa no estado A por padrão
        this.currentState = 0;  // 0 representa A, 1 representa B
    }
    // Função para realizar uma transição
    transition() {
        const rand = Math.random();
        if (rand < this.transitionMatrix[this.currentState][0]) {
            this.currentState = 0;
        } else {
            this.currentState = 1;
        }
    }
    // Função para obter o estado atual
    getCurrentState() {
        return this.currentState === 0 ? 'Tecnologia/Computador/Portatil' : 'Móveis/Pequeno/Madeira';
    }
}
// Simulação
const markov = new MarkovChain();
const steps = 100;  // Número de passos na simulação
let qntCertos = 0;
let qntErrados = 0;
console.log(`Estado inicial: ${markov.getCurrentState()}`);
for (let i = 0; i < steps; i++) {
    markov.transition();
    console.log(`Passo ${i + 1}: ${markov.getCurrentState()}`);

    switch(markov.getCurrentState()) {
        case "Tecnologia/Computador/Portatil":
            qntCertos++;
            break;
        case "Móveis/Pequeno/Madeira":
            qntErrados++;
            break;
    }
}

console.log("Quantidade de acertos: ",qntCertos)
console.log("Quantidade de erros: ",qntErrados)