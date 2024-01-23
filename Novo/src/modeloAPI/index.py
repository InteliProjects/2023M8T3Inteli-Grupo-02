from flask import Flask, request, jsonify
import joblib
import pandas as pd
import json
import numpy as np
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Carregar o modelo
modelo = joblib.load('knn_model_level1_3cat.joblib')
modeloLevel2 = joblib.load('knn_model_level2_3cat.joblib')
modeloLevel3 = joblib.load('knn_model_level3_3cat.joblib')

def onehot(dados):
    # Aplicar one-hot encoding a todas as colunas categóricas
    result = pd.get_dummies(dados)

    return result

def load_columns():
    # Carregando o array de nomes de colunas de um arquivo JSON
    with open('colunas_treinamento.json', 'r') as f:
        colunas_treinamento = json.load(f)

    return colunas_treinamento

@app.route('/predict', methods=['POST'])
def predict():
    dados = request.json
    # Aqui você deve processar os dados de entrada conforme necessário
    # Por exemplo: entrada = processar(dados)

    df_new = pd.DataFrame({
        "Normalized Supplier Name": [dados['supName']],
        "Cost Center": [dados['costCenter']],
        "GL Description": [dados['glDesc']],
    })

    df_new = onehot(df_new)

    columns = load_columns()

    # Suponha que 'colunas_treinamento' seja uma lista de todas as colunas após o pd.get_dummies no treinamento
    colunas_treinamento = columns

    # Crie um novo DataFrame com uma linha de zeros para todas essas colunas
    novo_df_alinhado = pd.DataFrame(0, index=np.arange(1), columns=colunas_treinamento)

    # Aplicar pd.get_dummies aos novos dados
    df_new_transformed = pd.get_dummies(df_new)

    # Verifique se existem linhas no DataFrame transformado
    if not df_new_transformed.empty:
        # Preencha o novo DataFrame alinhado com os dados transformados
        for coluna in df_new_transformed.columns:
            if coluna in novo_df_alinhado.columns:
                novo_df_alinhado[coluna] = df_new_transformed[coluna]

    # Se df_new_transformed estava vazio (sem linhas), novo_df_alinhado já está preenchido com zeros

    novo_df_alinhado = novo_df_alinhado.fillna(0)

    prediction = modelo.predict(novo_df_alinhado)
    
    predictionLevel2 = modeloLevel2.predict(novo_df_alinhado)

    predictionLevel3 = modeloLevel3.predict(novo_df_alinhado)

    resultado = {
        "predicaoLevel1": str(prediction[0]),
        "predicaoLevel2": str(predictionLevel2[0]),
        "predicaoLevel3": str(predictionLevel3[0])
    }

    # Retornar o resultado
    return jsonify(resultado)

@app.route('/', methods=['GET'])
def home():
    return "<h1>API funcionando</h1>"

if __name__ == '__main__':
    app.run(host='0.0.0.0')
