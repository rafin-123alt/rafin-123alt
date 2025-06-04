from flask import Flask, request, jsonify, render_template
import requests

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/send_request', methods=['POST'])
def send_request():
    acookie = request.form['cookie']
    acsrf = request.form['csrf']
    email = request.form['email']

    url = "https://apis.roblox.com/child-requests-api/v1/send-request-to-new-parent"
    headers = {
        "cookie": f".RGBLOSECURITY={acookie}",
        "x-csrf-token": acsrf,
        "Content-Type": "application/json",
        "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36",
    }
    payload = {
        "email": email,
        "requestDetails": {}
    }

    response = requests.post(url, headers=headers, json=payload)
    
    return jsonify(response.json())

if __name__ == '__main__':
    app.run(debug=True)
  
