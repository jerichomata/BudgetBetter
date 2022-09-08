import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import AddGoalForm from "./AddGoalForm";
import "./AddGoalModal.css";

function AddGoalModal() {
  const [showModal, setShowModal] = useState(false);

  function closeModal() {
    setShowModal(false);
  }

  return (
    <>
      <button onClick={() => setShowModal(true)} id="add-goal-btn">
        Add Goal
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <AddGoalForm closeModal={closeModal} />
        </Modal>
      )}
    </>
  );
}

export default AddGoalModal;
