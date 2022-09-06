from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin


class User(db.Model, UserMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(40), nullable=False, unique=True)
    hashed_password = db.Column(db.String(255), nullable=False)
    account_balance = db.Column(db.Float(precision=2, asdecimal=False), default=0)

    transactions = db.relationship('Transaction', back_populates='user', cascade='all, delete')
    reminders = db.relationship('Reminder', back_populates='user', cascade='all, delete')
    goals = db.relationship('Goal', back_populates='user', cascade='all, delete')


    @property
    def password(self):
        return self.hashed_password

    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

    def to_dict(self):
        return {
            'id': self.id,
            'username': self.username,
            'accountBalance': self.account_balance,
            'transactions': [transaction.to_dict_no_user() for transaction in self.transactions],
            'reminders': [reminder.to_dict_no_user() for reminder in self.reminders],
        }

    def to_dict_no_additions(self):
        return {
            'id': self.id,
            'username': self.username,
            'accountBalance': self.account_balance,
        }
