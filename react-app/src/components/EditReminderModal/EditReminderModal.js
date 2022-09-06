import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import EditReminderForm from "./EditReminderForm";
import "./EditReminderModal.css";

function EditReminderModal({ reminderId }) {
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
          <EditReminderForm closeModal={closeModal} reminderId={reminderId} />
        </Modal>
      )}
    </>
  );
}

export default EditReminderModal;
