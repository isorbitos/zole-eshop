from . import db, session, Base
from sqlalchemy.orm import relationship
from flask_jwt_extended import create_access_token
from datetime import timedelta
from passlib.hash import bcrypt

class Product(Base):
    __tablename__ = 'products'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(250), nullable=False)
    price = db.Column(db.Numeric(10,2), nullable=False)
    stock = db.Column(db.Integer, default=0)
    description = db.Column(db.String(500), nullable=False)
    image = db.Column(db.String(250))
    category_id = db.Column(db.Integer, db.ForeignKey('category.id'), nullable=False)



class Category(Base):
    __tablename__ ='category'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False, unique=True)
    products = relationship('Product', backref='category', lazy=True)

    def __init__(self, **kwargs):
        self.name = kwargs.get("name")

    @classmethod
    def get_list(cls):
        try:
            categories = cls.query.all()
            session.commit()
        except Exception:
            session.rollback()
            raise
        return categories

    def save(self):
        try:
            session.add(self)
            session.commit()
        except Exception:
            session.rollback()
            raise

    @classmethod
    def get(cls, category_id):
        try:
            category = cls.query.filter(Category.id == category_id).first()
            if not category:
                raise Exception('No tutorial found')
        except Exception:
            session.rollback()
            raise
        return category

    def delete(self):
        try:
            session.delete(self)
            session.commit()
        except Exception:
            session.rollback()
            raise

    def to_dict(self):
        dictionary = {}
        for column in self.__table__.columns:
            dictionary[column.name] = getattr(self, column.name)
        return dictionary


class User(Base):
    __tablename__ = 'users'
    id = db.Column(db.Integer, primary_key=True)
    fullname = db.Column(db.String(250), nullable=False)
    email = db.Column(db.String(250), nullable=False, unique=True)
    password = db.Column(db.String(150), nullable=False)
    # country = db.Column(db.String(125), nullable=False)
    # phone = db.Column(db.String(125), nullable=False)
    # is_admin = db.Column(db.BOOLEAN, default=False)

    def __init__(self, **kwargs):
        self.fullname = kwargs.get('fullname')
        self.email = kwargs.get('email')
        self.password = bcrypt.hash(kwargs.get('password'))


    def get_token(self, expire_time=24):
        expire_delta = timedelta(expire_time)
        token = create_access_token(identity=self.id, expires_delta=expire_delta)
        return token


    @classmethod
    def authenticate(cls, email, password):
        user = cls.query.filter(cls.email == email).one()
        if not bcrypt.verify(password, user.password):
            raise Exception('wrong password')
        return user