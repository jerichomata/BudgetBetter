from app.models import db, Transaction
from datetime import date

# Adds transactions for the demo user
def seed_transactions():
    transaction_1 = Transaction(title='Apple Music', amount='9.99', date=date(2022, 7, 21), user_id=1)
    transaction_2 = Transaction(title='Leetcode', amount='99.99', date=date(2022, 7, 28), user_id=1)

    db.session.add(transaction_1)
    db.session.add(transaction_2)
    db.session.commit()

def undo_transactions():
    db.session.execute('TRUNCATE transactions RESTART IDENTITY CASCADE;')
    db.session.commit()
