import React, { useState, useEffect } from "react";
import { updateTransaction } from "../../store/transactions";
import { useDispatch, useSelector } from "react-redux";
import { dateToISOStr } from "../../util/date";
import { useHistory } from "react-router-dom";
import "./EditTransactionForm.css";

function EditTransactionForm({ closeModal, transactionId }) {
  const user = useSelector((state) => state.session.user);

  // prettier-ignore
  const transaction = useSelector((state) =>Object.values(state.transactions).filter((transaction) => transaction.id === transactionId)[0]);

  let oldDate = dateToISOStr(transaction?.date);
  let oldAmount = transaction?.amount;

  const dispatch = useDispatch();
  const [title, setTitle] = useState(transaction?.title);
  const [date, setDate] = useState(oldDate);
  const [amount, setAmount] = useState(transaction?.amount);
  const [errors, setErrors] = useState([]);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  useEffect(() => {
    const errors = [];
    if (title.trim().length < 1) errors.push("Please enter a name");
    if (!date) errors.push("Please enter a date");
    if (amount < 0) {
      let diff = Math.abs(amount) - Math.abs(oldAmount);
      if (user.accountBalance < diff) errors.push("Insufficient funds");
    }
    setErrors(errors);
  }, [title, date, amount]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setHasSubmitted(true);

    if (errors.length > 0) {
      return;
    }

    const info = {
      title,
      date,
      amount,
    };

    const editedTransaction = await dispatch(
      updateTransaction(user.id, transactionId, info, transaction?.amount)
    );

    closeModal();
  };

  //form with controlled components
  return (
    <form onSubmit={handleSubmit} className="login-form">
      <ul className="login-form__validation-errors">
        {hasSubmitted &&
          errors.length > 0 &&
          errors.map((error, idx) => <li key={idx}>{error}</li>)}
      </ul>
      <h1 className="login-form__title">Edit Transaction</h1>
      <label className="login-form__email__label">
        Name
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          maxlength="25"
          required
        />
      </label>
      <label className="login-form__password__label">
        Amount
        <input
          type="number"
          step="0.01"
          value={amount}
          max="1000000"
          onChange={(e) => setAmount(e.target.value)}
          required
        />
      </label>
      <label className="login-form__password__label">
        Date
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </label>
      <button type="submit" className="form-modal-btn">
        Submit
      </button>
    </form>
  );
}

export default EditTransactionForm;
