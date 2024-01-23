
from flask import Flask, jsonify, request
import pickle

app = Flask(__name__)

def load_model(path):
    with open(path, 'rb') as file:
        return pickle.load(file)

model_level_1 = load_model('./retrained_model_level_1.pkl')
model_level_2 = load_model('./retrained_model_level_2.pkl')

def transform_supplier_name(supplier_name):
    return [supplier_name]

@app.route('/process_supplier', methods=['POST'])
def process_supplier():
    data = request.json
    supplier_name = data.get('supplier_name')
    
    if not supplier_name:
        return jsonify({'message': 'Supplier name is required'}), 400

    transformed_input = transform_supplier_name(supplier_name)
    result_level_1 = model_level_1.predict(transformed_input)
    result_level_2 = model_level_2.predict(transformed_input)

    return jsonify({
        'message': 'Processamento concluído com sucesso',
        'level_1_results': result_level_1.tolist(),
        'level_2_results': result_level_2.tolist()
    })

if __name__ == '__main__':
    app.run(debug=True)
