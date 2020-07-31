from flask import Flask,jsonify
from flask_cors import CORS
app = Flask(__name__)
CORS(app)

data = [
    {"title":"Test","description":"Test Description"},{"title":"Test 2","description":"TD2"}
]
@app.route('/')
def return_values():
    return jsonify(data)

if __name__ == "__main__":
    app.run()