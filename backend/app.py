from flask import Flask, jsonify, request
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
import sqlalchemy as sa
import sqlalchemy.orm as so
from flask_mail import Mail, Message
import os

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv('DATABASE_URL')

CORS(app)
db = SQLAlchemy(app)
migrate = Migrate(app,db)

app.config['MAIL_SERVER'] = 'smtp.gmail.com'  # Email provider's SMTP server
app.config['MAIL_PORT'] = 587                # Port for TLS
app.config['MAIL_USE_TLS'] = True            # Use TLS for security
app.config['MAIL_USERNAME'] = 'longpatrick3317@gmail.com'  # Your email address
app.config['MAIL_PASSWORD'] = 'dqbt ixkt fnvu pesv'  # Your email password
app.config['MAIL_DEFAULT_SENDER'] = 'longpatrick3317@gmail.com'  # Default sender

mail = Mail(app)


class Name(db.Model):
    __tablename__ = 'name'
    id : so.Mapped[int] = so.mapped_column(primary_key=True)
    name : so.Mapped[str] = so.mapped_column()
    email : so.Mapped[str] = so.mapped_column()

    def __repr__(self):
        return f"{self.id}/{self.name}"

@app.route("/")
def start():
    return jsonify("Works")
@app.route("/namestore", methods=["POST"])
def namestore():
    data = request.get_json()
    if data["name"] != "" and data["email"] != "":
        msg = Message(
        subject=f"Welcome {data['name']}!",
        recipients=[data["email"]],
        body="Thanks for Subscribing!"
    )
    
        mail.send(msg)

        store = Name(name=data["name"], email=data["email"])
        db.session.add(store)
        db.session.commit()
        return jsonify("success")


    