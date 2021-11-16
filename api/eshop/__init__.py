import time
from flask import Flask, request, jsonify
import sqlalchemy as db
from sqlalchemy.orm import sessionmaker, scoped_session
from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from flask_jwt_extended import JWTManager, jwt_required, get_jwt_identity
from .config import Config


app = Flask(__name__)
app.config.from_object(Config)

engine = create_engine('sqlite:///db.sqlite')
session = scoped_session(sessionmaker(autocommit=False, autoflush=False, bind=engine))

Base = declarative_base()
Base.query = session.query_property()

jwt = JWTManager(app)

from .models import *
Base.metadata.create_all(bind=engine)

@app.route("/time")
def get_current_time():
    return {"time": time.time()}

@app.get("/categories")
def get_categories():
    try:
        categories = Category.get_list()
        serialized = []
        for category in categories:
            serialized.append(category.to_dict())

    except Exception as e:
        return {'message': str(e)}, 400
    return  jsonify(serialized)


@app.post("/categories")
def create_category():
    try:
        params = request.json
        category = Category(**params)
        session.add(category)
        session.commit()
    except Exception as e:
        return {'message': str(e)}, 400
    return jsonify({"name":category.name})

@app.delete("/categories/<int:category_id>")
@jwt_required()
def delete_category(category_id):
    try:
        item = Category.get(category_id)
        item_name = item.name
        item.delete()
    except Exception as e:
        return {'message': str(e)}, 400
    return {'message':f'Item deleted {item_name}'}

@app.post('/register')
def register(**kwargs):
    try:
        params = request.json
        user = User(**params)
        session.add(user)
        session.commit()
        token = user.get_token()
    except Exception as e:
        return {'message': str(e)}, 400
    return {'access_token': token}

@app.post('/login')
def login():
    try:
        params = request.json
        user = User.authenticate(**params)
        token = user.get_token()
    except Exception as e:
        return {'message': str(e)}, 400
    return {'access_token': token}

@app.teardown_appcontext
def shutdown_session(exception=None):
    session.remove()