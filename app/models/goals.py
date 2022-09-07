from datetime import date
from .db import db

class Goal(db.Model):
    __tablename__ = 'goals'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False)
    completed = db.Column(db.Boolean, default=False)
    date = db.Column(db.DateTime, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)

    user = db.relationship("User", back_populates='goals')

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'completed': self.completed,
            'date': self.date,
            'userId': self.user_id,
            'user': self.user.to_dict_no_additions()
        }

    def to_dict_no_user(self):
        return {
            'id': self.id,
            'name': self.name,
            'completed': self.completed,
            'date': self.date,
            'userId': self.user_id,
        }
