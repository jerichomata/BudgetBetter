const LOAD_GOALS = "goals/LOAD_GOALS";
const ADD_GOAL = "goals/ADD_GOAL";
const EDIT_GOAL = "goals/EDIT_GOAL";
const DELETE_GOAL = "goals/DELETE_GOAL";

export const loadAllGoals = (goals) => ({
  type: LOAD_GOALS,
  payload: goals,
});

export const addGoal = (goal) => ({
  type: ADD_GOAL,
  payload: goal,
});

export const editGoal = (goal) => ({
  type: EDIT_GOAL,
  payload: goal,
});

export const deleteGoal = (goalId) => ({
  type: DELETE_GOAL,
  payload: goalId,
});

export const loadGoals = (userId) => async (dispatch) => {
  const response = await fetch(`/api/users/${userId}/goals`);

  if (response.ok) {
    const data = await response.json();
    dispatch(loadAllGoals(data));
  }
};

export const createGoal = (userId, info) => async (dispatch) => {
  const response = await fetch(`/api/users/${userId}/goals`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(info),
  });

  if (response.ok) {
    const data = await response.json();
    dispatch(addGoal(data));
  }
};

export const updateGoal = (userId, goalId, info) => async (dispatch) => {
  const response = await fetch(`/api/users/${userId}/goals/${goalId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(info),
  });

  if (response.ok) {
    const data = await response.json();
    dispatch(editGoal(data));
  }
};

export const removeGoal = (userId, goalId) => async (dispatch) => {
  const response = await fetch(`/api/users/${userId}/goals/${goalId}`, {
    method: "DELETE",
  });

  if (response.ok) {
    dispatch(deleteGoal(goalId));
  }
};

const initialState = {};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_GOALS: {
      const newState = {};

      for (let goal of action.payload.Goals) {
        newState[goal.id] = goal;
      }

      return { ...newState };
    }

    case ADD_GOAL: {
      const newState = global.structuredClone(state);
      newState[action.payload.id] = action.payload;
      return newState;
    }

    case EDIT_GOAL: {
      const newState = global.structuredClone(state);
      newState[action.payload.id] = action.payload;
      return newState;
    }

    case DELETE_GOAL: {
      const newState = global.structuredClone(state);
      delete newState[action.payload];
      return newState;
    }

    default:
      return state;
  }
}
