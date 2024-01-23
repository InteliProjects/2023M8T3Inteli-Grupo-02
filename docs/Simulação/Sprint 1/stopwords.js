// Lista de stopwords de exemplo
const stopwords = [
  "a",
  "o",
  "em",
  "de",
  "para",
  "com",
  "sem",
  "sobre",
  "acima",
  "através",
  "the",
  "and",
  "or",
  "in",
  "on",
  "with",
  "without",
  "above",
  "below",
];

function removeStopwords(tokens) {
  return tokens.filter((token) => !stopwords.includes(token.toLowerCase()));
}

// Exemplo de uso
const tokens = [
  "A",
  "tokenização",
  "de",
  "frases",
  "é",
  "uma",
  "etapa",
  "importante",
  "no",
  "processamento",
  "de",
  "linguagem",
  "natural",
];
const filteredTokens = removeStopwords(tokens);
console.log(filteredTokens);
