// constants
const SET_USER = "session/SET_USER";
const REMOVE_USER = "session/REMOVE_USER";
export const ADJUST_USER_BALANCE = "session/ADJUST_USER_BALANCE";
export const UPDATE_USER_BALANCE = "session/UPDATE_USER_BALANCE";

const setUser = (user) => ({
  type: SET_USER,
  payload: user,
});

const removeUser = () => ({
  type: REMOVE_USER,
});

export const adjustBalance = (amount) => ({
  type: ADJUST_USER_BALANCE,
  payload: amount,
});

export const updateBalance = (oldAmount, newAmount) => ({
  type: UPDATE_USER_BALANCE,
  payload: { oldAmount, newAmount },
});

const initialState = { user: null };

export const authenticate = () => async (dispatch) => {
  const response = await fetch("/api/auth/", {
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (response.ok) {
    const data = await response.json();
    if (data.errors) {
      return;
    }

    dispatch(setUser(data));
  }
};

export const login = (username, password) => async (dispatch) => {
  const response = await fetch("/api/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      password,
    }),
  });

  if (response.ok) {
    const data = await response.json();
    dispatch(setUser(data));
    return null;
  } else if (response.status < 500) {
    const data = await response.json();
    if (data.errors) {
      return data.errors;
    }
  } else {
    return ["An error occurred. Please try again."];
  }
};

export const logout = () => async (dispatch) => {
  const response = await fetch("/api/auth/logout", {
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    dispatch(removeUser());
  }
};

export const signUp = (username, password) => async (dispatch) => {
  const response = await fetch("/api/auth/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      password,
    }),
  });

  if (response.ok) {
    const data = await response.json();
    dispatch(setUser(data));
    return null;
  } else if (response.status < 500) {
    const data = await response.json();
    if (data.errors) {
      return data.errors;
    }
  } else {
    return ["An error occurred. Please try again."];
  }
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER:
      return { user: action.payload };
    case REMOVE_USER:
      return { user: null };
    case ADJUST_USER_BALANCE: {
      let newState = global.structuredClone(state);
      newState.user.accountBalance += Number(action.payload);
      return newState;
    }
    case UPDATE_USER_BALANCE: {
      let newState = global.structuredClone(state);
      if (action.payload.newAmount >= action.payload.oldAmount) {
        newState.user.accountBalance += Number(
          action.payload.newAmount - action.payload.oldAmount
        );
      } else {
        newState.user.accountBalance -= Number(
          action.payload.oldAmount - action.payload.newAmount
        );
      }
      return newState;
    }
    default:
      return state;
  }
}
