import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import AddTransactionForm from "./AddTransactionForm";
import "./AddTransactionForm.css";

function AddTransactionFormModal() {
  const [showModal, setShowModal] = useState(false);

  function closeModal() {
    setShowModal(false);
  }

  return (
    <>
      <button onClick={() => setShowModal(true)}>Add Transaction</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <AddTransactionForm closeModal={closeModal} />
        </Modal>
      )}
    </>
  );
}

export default AddTransactionFormModal;
