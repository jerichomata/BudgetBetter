import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import AddTransactionForm from "./AddTransactionForm";
import "./AddTransactionFormModal.css";

function AddTransactionFormModal() {
  const [showModal, setShowModal] = useState(false);

  function closeModal() {
    setShowModal(false);
  }

  return (
    <>
      <button id="add-transaction-btn" onClick={() => setShowModal(true)}>
        Add Transaction
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <AddTransactionForm closeModal={closeModal} />
        </Modal>
      )}
    </>
  );
}

export default AddTransactionFormModal;
