import React, { useState, useEffect } from "react";
import { createGoal } from "../../store/goals";
import { useDispatch, useSelector } from "react-redux";
import "./AddGoalForm.css";

function AddGoalForm({ closeModal }) {
  const user = useSelector((state) => state.session.user);
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [errors, setErrors] = useState([]);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  useEffect(() => {
    const errors = [];
    if (name.length < 1) errors.push("Please enter a title");
    if (!date) errors.push("Please enter a date");
    setErrors(errors);
  }, [name, date]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setHasSubmitted(true);

    if (errors.length > 0) {
      return;
    }

    const info = {
      name,
      date,
    };

    const createdGoal = await dispatch(createGoal(user.id, info));

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
      <h1 className="login-form__title">Create Goal</h1>
      <label className="login-form__email__label">
        Name
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
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

export default AddGoalForm;
