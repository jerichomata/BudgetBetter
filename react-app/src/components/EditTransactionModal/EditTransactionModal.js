import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import EditTransactionForm from "./EditTransactionForm";
import "./EditTransactionModal.css";

function EditTransactionModal({ transactionId }) {
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
          <EditTransactionForm
            closeModal={closeModal}
            transactionId={transactionId}
          />
        </Modal>
      )}
    </>
  );
}

export default EditTransactionModal;
