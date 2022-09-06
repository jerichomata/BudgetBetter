from flask_wtf import FlaskForm
from wtforms import StringField, DateField
from wtforms.validators import DataRequired

class EditGoalForm(FlaskForm):
    name = StringField('name', validators=[DataRequired()])
    date = DateField('date', validators=[DataRequired()])
