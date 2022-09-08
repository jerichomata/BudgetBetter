from app.models import db, Goal
from datetime import date

# Adds transactions for the demo user
def seed_goals():
    goal_1 = Goal(name='Save $1000 by March 2023', completed=False, date=date(2023, 3, 1), user_id=1)
    goal_2 = Goal(name='Invest $500 by September 2022', completed=False, date=date(2022, 9, 1), user_id=1)

    db.session.add(goal_1)
    db.session.add(goal_2)
    db.session.commit()

def undo_goals():
    db.session.execute('TRUNCATE goals RESTART IDENTITY CASCADE;')
    db.session.commit()
