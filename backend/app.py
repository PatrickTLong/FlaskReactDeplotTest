from flask import Flask, jsonify, request
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
import sqlalchemy as sa
import sqlalchemy.orm as so
import os

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv('DATABASE_URL', 'sqlite:///default.db')

CORS(app)
db = SQLAlchemy(app)
migrate = Migrate(app,db)

class Name(db.Model):
    id : so.Mapped[int] = so.mapped_column(primary_key=True)
    name : so.Mapped[str] = so.mapped_column(unique=True)

    def __repr__(self):
        return f"{self.id}/{self.name}"

@app.route("/")
def start():
    return jsonify("Works")
@app.route("/namestore")
def namestore():
    data = request.get_json
    store = Name(name=data["name"])
    db.session.add(store)
    db.session.commit()