from flask import Blueprint, jsonify, session, request
from flask_login import login_required
from app.models import User, Transaction, Reminder, db
from flask_login import current_user
from .auth_routes import validation_errors_to_error_messages
from ..forms import AddTransactionForm, EditTransactionForm, AddReminderForm, EditReminderForm

user_routes = Blueprint('users', __name__)


@user_routes.route('/')
@login_required
def users():
    users = User.query.all()
    return {'users': [user.to_dict() for user in users]}


@user_routes.route('/<int:id>')
@login_required
def user(id):
    user = User.query.get(id)
    return user.to_dict()

# Route to get all transactions for a user
@user_routes.route('/<int:id>/transactions')
@login_required
def user_transactions(id):
    transactions = Transaction.query.filter(Transaction.user_id == id).all()
    return {'Transactions': [transaction.to_dict() for transaction in transactions]}

# Route to post a transaction for a user
@user_routes.route('/<int:id>/transactions', methods=['POST'])
@login_required
def post_transaction(id):
    form = AddTransactionForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    user = current_user

    if form.validate_on_submit():
        transaction = Transaction(
            user_id=user.id,
            outgoing=form.data['outgoing'],
            amount=form.data['amount'],
        )

        db.session.add(transaction)
        db.session.commit()
        return transaction.to_dict()

    else:
        return {'errors': validation_errors_to_error_messages(form.errors)}, 401

# Route to edit a transaction for a user
@user_routes.route('/<int:id>/transactions/<int:transaction_id>', methods=['PUT'])
@login_required
def edit_transaction(id, transaction_id):
    form = EditTransactionForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        transaction = Transaction.query.get(transaction_id)

        transaction.outgoing = form.data['outgoing']
        transaction.amount = form.data['amount']

        db.session.commit()
        return transaction.to_dict()

    return {'errors': validation_errors_to_error_messages(form.errors)}, 401

# Route to delete a transaction for a user
@user_routes.route('/<int:id>/transactions/<int:transaction_id>', methods=['DELETE'])
@login_required
def delete_transaction(id, transaction_id):

    user = current_user
    if user.id != id:
        return {'errors': 'Unauthorized'}, 401

    transaction = Transaction.query.get(transaction_id)

    db.session.delete(transaction)
    db.session.commit()

    return {'message': 'Transaction deleted'}

# Route to get all reminders for a user
@user_routes.route('/<int:id>/reminders')
@login_required
def user_reminders(id):
    reminders = Reminder.query.filter(Reminder.user_id == id).all()
    return {'Reminders': [reminder.to_dict() for reminder in reminders]}

# Route to post a reminder for a user
@user_routes.route('/<int:id>/reminders', methods=['POST'])
@login_required
def post_reminder(id):
    form = AddReminderForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    user = current_user

    if form.validate_on_submit():
        reminder = Reminder(
            user_id=user.id,
            title=form.data['title'],
            description=form.data['description'],
            date=form.data['date'],
        )

        db.session.add(reminder)
        db.session.commit()
        return reminder.to_dict()

    else:
        return {'errors': validation_errors_to_error_messages(form.errors)}, 401

# Route to edit a reminder for a user
@user_routes.route('/<int:id>/reminders/<int:reminder_id>', methods=['PUT'])
@login_required
def edit_reminder(id, reminder_id):
    form = EditReminderForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        reminder = Reminder.query.get(reminder_id)

        reminder.title = form.data['title']
        reminder.description = form.data['description']
        reminder.date = form.data['date']

        db.session.commit()
        return reminder.to_dict()

    return {'errors': validation_errors_to_error_messages(form.errors)}, 401

# Route to delete a reminder for a user
@user_routes.route('/<int:id>/reminders/<int:reminder_id>', methods=['DELETE'])
@login_required
def delete_reminder(id, reminder_id):
        user = current_user
        if user.id != id:
            return {'errors': 'Unauthorized'}, 401

        reminder = Reminder.query.get(reminder_id)

        db.session.delete(reminder)
        db.session.commit()

        return {'message': 'Reminder deleted'}
