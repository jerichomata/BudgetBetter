import React, { useState } from "react";
import { Modal } from "../../context/Modal";
import LoginForm from "./LoginForm";
import "./LoginFormModal.css";

function LoginFormModal({ styleId }) {
  const [showModal, setShowModal] = useState(false);

  function closeModal() {
    setShowModal(false);
  }

  console.log("ID", styleId);

  return (
    <>
      <button onClick={() => setShowModal(true)} id={styleId}>
        Log In
      </button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <LoginForm closeModal={closeModal} />
        </Modal>
      )}
    </>
  );
}

export default LoginFormModal;
