from .db import db
from datetime import datetime


class Transaction(db.Model):
    __tablename__ = 'transactions'

    id = db.Column(db.Integer, primary_key=True)
    outgoing = db.Column(db.Boolean, nullable=False)
    amount = db.Column(db.Integer, nullable=False)
    date = db.Column(db.DateTime, default=datetime.utcnow)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)

    user = db.relationship(
        "User", back_populates='transactions')

    def to_dict(self):
        return {
            'id': self.id,
            'outgoing': self.outgoing,
            'amount': self.amount,
            'date': self.date,
            'userId': self.user_id,
            'user': self.user.to_dict_no_additions()
        }

    def to_dict_no_user(self):
        return {
            'id': self.id,
            'outgoing': self.outgoing,
            'amount': self.amount,
            'date': self.date,
            'userId': self.user_id,
        }
