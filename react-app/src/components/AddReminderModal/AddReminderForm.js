import React, { useState, useEffect } from "react";
import { createReminder } from "../../store/reminders";
import { useDispatch, useSelector } from "react-redux";
import "./AddReminderForm.css";

function AddReminderForm({ closeModal }) {
  const user = useSelector((state) => state.session.user);
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [errors, setErrors] = useState([]);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  useEffect(() => {
    const errors = [];
    if (title.length < 1) errors.push("Please enter a title");
    if (!date) errors.push("Please enter a date");
    if (description.length < 1) errors.push("Please enter a description");
    setErrors(errors);
  }, [title, date, description]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setHasSubmitted(true);

    if (errors.length > 0) {
      return;
    }

    const info = {
      title,
      date,
      description,
    };

    const createdReminder = await dispatch(createReminder(user.id, info));

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
      <h1 className="login-form__title">Add Reminder</h1>
      <label className="login-form__email__label">
        Name
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          maxlength="35"
          required
        />
      </label>
      <label className="login-form__password__label">
        Description
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          maxlength="75"
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

export default AddReminderForm;
