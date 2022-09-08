import React, { useState, useEffect } from "react";
import { updateGoal } from "../../store/goals";
import { dateToISOStr } from "../../util/date";
import { useDispatch, useSelector } from "react-redux";
import "./EditGoalForm.css";

function EditGoalForm({ closeModal, goalId }) {
  const user = useSelector((state) => state.session.user);
  const goal = useSelector(
    (state) =>
      Object.values(state.goals).filter((goal) => goal.id === goalId)[0]
  );

  let oldDate = dateToISOStr(goal?.date);

  const dispatch = useDispatch();
  const [name, setName] = useState(goal?.name);
  const [date, setDate] = useState(oldDate);
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

    const editedGoal = await dispatch(updateGoal(user.id, goalId, info));

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
      <h1 className="login-form__title">Edit Goal</h1>
      <label className="login-form__email__label">
        Name
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          maxlength="50"
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
      <button type="submit" className="login-form__log-in">
        Submit
      </button>
    </form>
  );
}

export default EditGoalForm;
