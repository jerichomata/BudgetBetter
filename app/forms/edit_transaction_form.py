from flask_wtf import FlaskForm
from wtforms import BooleanField, IntegerField
from wtforms.validators import DataRequired

class EditTransactionForm(FlaskForm):
    outgoing = BooleanField('outgoing', validators=[DataRequired()])
    amount = IntegerField('amount', validators=[DataRequired()])
