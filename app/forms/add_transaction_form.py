from flask_wtf import FlaskForm
from wtforms import DecimalField, DateField, StringField
from wtforms.validators import DataRequired

class AddTransactionForm(FlaskForm):
    title = StringField('title', validators=[DataRequired()])
    date = DateField('date', validators=[DataRequired()])
    amount = DecimalField('amount')
