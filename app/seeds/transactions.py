from app.models import db, Transaction
from datetime import date

# Adds transactions for the demo user
def seed_transactions():
    transaction_1 = Transaction(title='Writing Salary', amount='9.99', date=date(2022, 7, 21), user_id=1)
    transaction_2 = Transaction(title='Freelance Work', amount='100.00', date=date(2022, 7, 28), user_id=1)
    transaction_3 = Transaction(title='Amazon Order', amount='-9.99', date=date(2022, 7, 28), user_id=1)
    transaction_4 = Transaction(title='Scholarship Fund', amount='300.00', date=date(2022, 9, 1), user_id=1)
    transaction_5 = Transaction(title='Donations', amount='300.00', date=date(2022, 8, 28), user_id=1)
    transaction_6 = Transaction(title='Groceries', amount='-88.00', date=date(2022, 8, 29), user_id=1)
    transaction_7 = Transaction(title='Published Article', amount='250.00', date=date(2022, 9, 1), user_id=1)
    transaction_8 = Transaction(title='Netflix', amount='-6.00', date=date(2022, 9, 3), user_id=1)

    db.session.add(transaction_1)
    db.session.add(transaction_2)
    db.session.add(transaction_3)
    db.session.add(transaction_4)
    db.session.add(transaction_5)
    db.session.add(transaction_6)
    db.session.add(transaction_7)
    db.session.add(transaction_8)
    db.session.commit()

def undo_transactions():
    db.session.execute('TRUNCATE transactions RESTART IDENTITY CASCADE;')
    db.session.commit()
