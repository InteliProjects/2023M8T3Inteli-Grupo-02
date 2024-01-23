const XLSX = require('xlsx');
const fs = require('fs');

function xlsxToJson(filePath) {
    // Lê o arquivo XLSX
    const workbook = XLSX.readFile(filePath);

    // Pega o nome da primeira aba
    const sheetName = workbook.SheetNames[0];

    // Converte a aba para JSON
    const sheetToJson = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);

    return sheetToJson;
}

function saveJsonToFile(jsonData, outputFilename) {
    // Converte JSON para string
    const jsonString = JSON.stringify(jsonData, null, 2);

    // Salva no arquivo
    fs.writeFileSync(outputFilename, jsonString, 'utf8');
    console.log(`Arquivo JSON salvo como ${outputFilename}`);
}

// Exemplo de uso
const jsonResult = xlsxToJson('./LATAM-Data.xlsx');
saveJsonToFile(jsonResult, 'saida.json');
