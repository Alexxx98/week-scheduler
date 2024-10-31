import os

from flask import Flask

app = Flask(__name__)
app.secret_key = os.getenv('SECRET_KEY')

@app.route('/')
def index():
    return '<h1>Week Scheduler App</h1>'

if __name__ == '__main__':
    app.run(debug=True)