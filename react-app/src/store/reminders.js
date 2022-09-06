const LOAD_REMINDERS = "reminders/LOAD_REMINDERS";
const ADD_REMINDER = "reminders/ADD_REMINDER";
const EDIT_REMINDER = "reminders/EDIT_REMINDER";
const DELETE_REMINDER = "reminders/DELETE_REMINDER";

export const loadAllReminders = (reminders) => ({
  type: LOAD_REMINDERS,
  payload: reminders,
});

export const addReminder = (reminder) => ({
  type: ADD_REMINDER,
  payload: reminder,
});

export const editReminder = (reminder) => ({
  type: EDIT_REMINDER,
  payload: reminder,
});

export const deleteReminder = (reminderId) => ({
  type: DELETE_REMINDER,
  payload: reminderId,
});

export const loadReminders = (userId) => async (dispatch) => {
  const response = await fetch(`/api/users/${userId}/reminders`);

  if (response.ok) {
    const data = await response.json();
    dispatch(loadAllReminders(data));
  }
};

export const createReminder = (userId, info) => async (dispatch) => {
  const response = await fetch(`/api/users/${userId}/reminders`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(info),
  });

  if (response.ok) {
    const data = await response.json();
    dispatch(addReminder(data));
  }
};

export const updateReminder =
  (userId, reminderId, info) => async (dispatch) => {
    // prettier-ignore
    const response = await fetch(`/api/users/${userId}/reminders/${reminderId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(info),
    });

    if (response.ok) {
      const data = await response.json();
      dispatch(editReminder(data));
    }
  };

export const removeReminder = (userId, reminderId) => async (dispatch) => {
  const response = await fetch(`/api/users/${userId}/reminders/${reminderId}`, {
    method: "DELETE",
  });

  if (response.ok) {
    dispatch(deleteReminder(reminderId));
  }
};

const initialState = {};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_REMINDERS: {
      const allReminders = [];
      for (let reminder of action.payload.Reminders) {
        allReminders.push(reminder);
      }
      return { ...allReminders };
    }

    case ADD_REMINDER: {
      const newState = global.structuredClone(state);
      newState.reminders.push(action.payload);
      return newState;
    }

    case EDIT_REMINDER: {
      const newState = global.structuredClone(state);
      for (let i = 0; i < newState.length; i++) {
        if (newState[i].id === action.payload.id) {
          newState[i] = action.payload;
          break;
        }
      }
      return newState;
    }

    case DELETE_REMINDER: {
      const newState = global.structuredClone(state);
      for (let i = 0; i < newState.length; i++) {
        if (newState[i].id === action.payload) {
          newState.splice(i, 1);
          break;
        }
      }
      return newState;
    }

    default:
      return state;
  }
}
