from flask import Flask, request, jsonify
from flask_cors import CORS
import json


api = Flask(__name__)
CORS(api, origins=['http://localhost:5173'])

@api.route('/CPUUsageData')
def CPUUseageData():
    file_path = "CPUUsageData.json"
    response_body = read_json_file(file_path)
    return response_body

@api.route('/Performance')
def Performance():
    file_path = "Performance.json"
    response_body = read_json_file(file_path)
    return response_body

@api.route('/RealTimeStatus')
def RealTimeStatus():
    file_path = "RealTimeStatus.json"
    response_body = read_json_file(file_path)
    return response_body

@api.route('/chip', methods=['POST'])
def receive_data():
    data = request.get_json()
    received_data = data['data']
    
    print(received_data)
    
    response_data = {'message': 'Data received successfully'}
    return jsonify(response_data)

@api.after_request
def add_security_headers(resp):
    resp.headers['Access-Control-Allow-Origin']='*'
    resp.headers['Access-Control-Allow-Methods']='GET, POST, PUT, OPTIONS'
    resp.headers["Access-Control-Allow-Headers"]="Access-Control-Request-Headers,Access-Control-Allow-Methods,Access-Control-Allow-Headers,Access-Control-Allow-Origin, Origin, X-Requested-With, Content-Type, Accept"
    return resp

def read_json_file(file_path):
    try:
        with open(file_path) as file:
            data = json.load(file)
            return data
    except FileNotFoundError:
        print(f"File '{file_path}' not found.")
    except json.JSONDecodeError:
        print(f"Error while decoding JSON file '{file_path}'. Invalid JSON format.")   
    return None


if __name__ == '__main__':
    api.run()
