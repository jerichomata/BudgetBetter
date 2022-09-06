from flask_wtf import FlaskForm
from wtforms import BooleanField, IntegerField
from wtforms.validators import DataRequired

class AddTransactionForm(FlaskForm):
    outgoing = BooleanField('outgoing', validators=[DataRequired()])
    amount = IntegerField('amount', validators=[DataRequired()])
