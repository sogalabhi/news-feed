from flask import Flask, request, jsonify
from flask_cors import CORS
from keybert import KeyBERT

app = Flask(__name__)
CORS(app)  # This will allow cross-origin requests from your React app

@app.route('/', methods=['POST'])
def get_keywords():
    data = request.get_json()  # Get the JSON data from the frontend
    kw_model = KeyBERT()
    keywords = kw_model.extract_keywords(data['description'])
    return keywords  # Send it back as JSON

if __name__ == '__main__':
    app.run(debug=True)
