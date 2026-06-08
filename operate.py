from flask import Flask, request, jsonify
from flask_cors import CORS
import random
from email.message import EmailMessage
import smtplib
import json

app = Flask(__name__)
CORS(app)

@app.route("/users", methods=["POST"])
def user_email():
    global email_otp
    global email
    email=request.get_json()
    email_otp=str(random.randint(1000, 9999))
    msg=EmailMessage()
    msg.set_content(f"Hello, {email["name"]}\n\nYour verification code is: {email_otp}\n\nThis code will expire in 5 minutes. Do not share this code with anyone.\n\nIf you did not request this, you can safely ignore this email.\n\nRegards,\nNoteMaker")
    msg["Subject"]="Verification Code"
    msg["To"]=email["email"]
    msg["From"]="notemaker.official@gmail.com"
    with smtplib.SMTP_SSL("smtp.gmail.com", 465) as server:
        server.login("notemaker.official@gmail.com", "fglp aklw mtsg rgey")
        server.send_message(msg)
    return jsonify({"done":True})



@app.route("/otp", methods=["POST"])
def recieve_otp():
    otp=request.get_json()
    if otp==email_otp:
        with open("data.json","r") as file:
            data=json.load(file)
        data["data"].append(email)
        with open("data.json","w") as file:
            json.dump(data,file)
        return jsonify({"done":True})
    else:
        print(False)
    return jsonify({"message":"delivered"})

@app.route("/data", methods=["GET"])
def send():
    with open("data.json", "r") as file:
        data=json.load(file)
    return jsonify(data), 200

if __name__ == "__main__":
    app.run(debug=True)