from flask import Flask, render_template, session
from upload.route import up
from models import db
from flask_cors import CORS

app = Flask( __name__, template_folder='./client/build', static_folder='./client/build/static' )
app.config['UPLOAD_FOLDER'] = './client/build/static/img'
app.config["SECRET_KEY"] = "itisasecertkey"
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///bit.db"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

app.register_blueprint(up)
cors = CORS(app)

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def index(path):
    return render_template("index.html")

if __name__ == "__main__":
    db.init_app(app)
    app.run()