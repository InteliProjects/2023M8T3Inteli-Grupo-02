function tokenizeSentence(sentence) {
    // Substitui todas as pontuações por espaços e divide a string resultante em tokens
    const tokens = sentence.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, " ").split(" ");
    // Remove os espaços vazios da lista de tokens
    const filteredTokens = tokens.filter(token => token !== "");
    return filteredTokens;
}

// Exemplo de uso
const sentence = "A tokenização de frases é uma etapa importante no processamento de linguagem natural.";
const tokens = tokenizeSentence(sentence);
console.log(tokens);