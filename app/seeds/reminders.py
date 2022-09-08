from app.models import db, Reminder
from datetime import date

# Adds transactions for the demo user
def seed_reminders():
    reminder_1 = Reminder(title='Apple Music Subscription', description='Cancel Apple Music before I get charged again!', date=date(2022, 7, 21), user_id=1)
    reminder_2 = Reminder(title='Leetcode Subscription', description='Cancel once you get a job!', date=date(2023, 3, 1), user_id=1)

    db.session.add(reminder_1)
    db.session.add(reminder_2)
    db.session.commit()

def undo_reminders():
    db.session.execute('TRUNCATE reminders RESTART IDENTITY CASCADE;')
    db.session.commit()
