const LOAD_TRANSACTIONS = "transactions/LOAD_TRANSACTIONS";
const ADD_TRANSACTION = "transactions/ADD_TRANSACTION";
const EDIT_TRANSACTION = "transactions/EDIT_TRANSACTION";
const DELETE_TRANSACTION = "transactions/DELETE_TRANSACTION";

export const loadAllTransactions = (transactions) => ({
  type: LOAD_TRANSACTIONS,
  payload: transactions,
});

export const addTransaction = (transaction) => ({
  type: ADD_TRANSACTION,
  payload: transaction,
});

export const editTransaction = (transaction) => ({
  type: EDIT_TRANSACTION,
  payload: transaction,
});

export const deleteTransaction = (transactionId) => ({
  type: DELETE_TRANSACTION,
  payload: transactionId,
});

export const loadTransactions = (userId) => async (dispatch) => {
  const response = await fetch(`/api/users/${userId}/transactions`);

  if (response.ok) {
    const data = await response.json();
    dispatch(loadAllTransactions(data));
  }
};

export const createTransaction = (userId, info) => async (dispatch) => {
  const response = await fetch(`/api/users/${userId}/transactions`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(info),
  });

  if (response.ok) {
    const data = await response.json();
    dispatch(addTransaction(data));
  }
};

export const updateTransaction =
  (userId, transactionId, info) => async (dispatch) => {
    // prettier-ignore
    const response = await fetch(`/api/users/${userId}/transactions/${transactionId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(info),
      }
    );

    if (response.ok) {
      const data = await response.json();
      dispatch(editTransaction(data));
    }
  };

export const removeTransaction =
  (userId, transactionId) => async (dispatch) => {
    const response = await fetch(
      `/api/users/${userId}/transactions/${transactionId}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (response.ok) {
      dispatch(deleteTransaction(transactionId));
    }
  };

const initialState = { transactions: null };

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_TRANSACTIONS:
      const transactions = [];
      for (let transaction of action.payload.Transactions) {
        transactions.push(transaction);
      }
      return { ...transactions };

    case ADD_TRANSACTION: {
      const newState = global.structuredClone(state);
      newState.transactions.push(action.payload);
      return newState;
    }

    case EDIT_TRANSACTION: {
      const newState = global.structuredClone(state);

      const transaction = newState.transactions.find(
        (transaction) => transaction.id === action.payload.id
      );

      transaction.title = action.payload.title;
      transaction.amount = action.payload.amount;
      transaction.date = action.payload.date;

      return newState;
    }

    case DELETE_TRANSACTION: {
      const newState = global.structuredClone(state);

      for (let i = 0; i < newState.transactions.length; i++) {
        if (newState.transactions[i].id === action.payload) {
          newState.transactions.splice(i, 1);
        }
      }

      return newState;
    }

    default:
      return state;
  }
}