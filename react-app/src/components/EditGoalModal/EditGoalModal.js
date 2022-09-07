import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import EditGoalForm from "./EditGoalForm";
import "./EditGoalModal.css";

function EditGoalModal({ goalId }) {
  const [showModal, setShowModal] = useState(false);

  function closeModal() {
    setShowModal(false);
  }

  return (
    <>
      <i
        className="fa-regular fa-pen-to-square"
        onClick={() => setShowModal(true)}
      ></i>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <EditGoalForm closeModal={closeModal} goalId={goalId} />
        </Modal>
      )}
    </>
  );
}

export default EditGoalModal;
