from flask.cli import AppGroup
from .users import seed_users, undo_users
from .transactions import seed_transactions, undo_transactions
from .reminders import seed_reminders, undo_reminders
from .goals import seed_goals, undo_goals

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')


# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    seed_users()
    seed_transactions()
    seed_reminders()
    seed_goals()
    # Add other seed functions here


# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_users()
    undo_transactions()
    undo_reminders()
    undo_goals()
    # Add other undo functions here
