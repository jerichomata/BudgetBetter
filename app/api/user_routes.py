from flask import Blueprint, jsonify, session, request
from flask_login import login_required
from app.models import User, Transaction, db
from flask_login import current_user
from .auth_routes import validation_errors_to_error_messages
from ..forms import AddTransactionForm, EditTransactionForm

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

    return transaction.to_dict()
