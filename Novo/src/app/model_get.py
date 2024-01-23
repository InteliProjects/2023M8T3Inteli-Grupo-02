
from flask import Flask, jsonify
import pickle

app = Flask(__name__)

model_level_1_path = 'retrained_model_level_1.pkl'
model_level_2_path = 'retrained_model_level_2.pkl'

with open(model_level_1_path, 'rb') as file:
    model_level_1 = pickle.load(file)

with open(model_level_2_path, 'rb') as file:
    model_level_2 = pickle.load(file)

@app.route('/export_model/level_1', methods=['GET'])
def export_model_level_1():
    return jsonify({'message': 'Level 1 Model exported successfully', 'model_path': model_level_1_path})

@app.route('/export_model/level_2', methods=['GET'])
def export_model_level_2():
    return jsonify({'message': 'Level 2 Model exported successfully', 'model_path': model_level_2_path})

if __name__ == '__main__':
    app.run(debug=True)
