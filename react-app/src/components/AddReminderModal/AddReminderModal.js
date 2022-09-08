import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import AddReminderForm from "./AddReminderForm";
import "./AddReminderModal.css";

function AddReminderModal() {
  const [showModal, setShowModal] = useState(false);

  function closeModal() {
    setShowModal(false);
  }

  return (
    <>
      <button onClick={() => setShowModal(true)} id="add-goal-btn">
        Add Reminder
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <AddReminderForm closeModal={closeModal} />
        </Modal>
      )}
    </>
  );
}

export default AddReminderModal;
