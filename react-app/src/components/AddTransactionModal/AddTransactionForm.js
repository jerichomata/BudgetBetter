import React, { useState, useEffect } from "react";
import { createTransaction } from "../../store/transactions";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import "./AddTransactionForm.css";

function AddTransactionForm({ closeModal }) {
  const user = useSelector((state) => state.session.user);
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [amount, setAmount] = useState(0);
  const [errors, setErrors] = useState([]);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  useEffect(() => {
    const errors = [];
    if (title.length < 1) errors.push("Please enter a title");
    if (!date) errors.push("Please enter a date");
    // if user's account balance is less than the expense
    if (amount < 0 && user.accountBalance < Math.abs(amount))
      errors.push("Insufficient funds");
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

    const createdTransaction = await dispatch(createTransaction(user.id, info));

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
      <h1 className="login-form__title">Add Transaction</h1>
      <label className="login-form__email__label">
        Name
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          maxLength="25"
          required
        />
      </label>
      <label className="login-form__password__label">
        Amount
        <input
          type="number"
          step="0.01"
          value={amount}
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

export default AddTransactionForm;
