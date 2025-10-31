import flask
from flask import jsonify
from flask import request
import json
import os
import dataservice

app = flask.Flask(__name__,
                  static_url_path='',
                  static_folder='dist')


@app.post("/create_account")
def create_account():
    if not login():
        username = request.form["username"]
        password = request.form["password"]
        dataservice.create_account(username,password)
        return flask.Response(status="200 OK",
                              headers={"Content-Type":"application/json"},
                              response=json.dumps(dataservice.get_lists(username)))
    
    
    

@app.post("/login")
def login():
    username = request.form["username"]
    password = request.form["password"]
    if dataservice.login(username, password):
        return flask.Response(status=200)
    

@app.get("/shutdown")
def shutdown():
    os._exit(0)

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5173)