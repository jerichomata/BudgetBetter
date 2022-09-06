from flask import Blueprint, jsonify, session, request
from flask_login import login_required
from app.models import Goal, db
from flask_login import current_user
from .auth_routes import validation_errors_to_error_messages

goal_routes = Blueprint('goals', __name__)

# Route to mark a goal as completed
@goal_routes.route('/<int:id>', methods=['PUT'])
@login_required
def mark_goal_as_completed(id):
    goal = Goal.query.get(id)
    goal.completed = True
    db.session.commit()
    return goal.to_dict()

# Route to change goal back to incomplete
@goal_routes.route('/<int:id>', methods=['DELETE'])
@login_required
def mark_goal_as_incomplete(id):
    goal = Goal.query.get(id)
    goal.completed = False
    db.session.commit()
    return goal.to_dict()
