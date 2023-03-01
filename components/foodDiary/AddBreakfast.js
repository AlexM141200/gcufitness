import Modal from "react-modal";
import NutritionSearch from "../NutritionSearch";
import React, { useState, useEffect } from "react";
import { auth } from "../../pages/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { firestore } from "../../pages/firebase";

function AddBreakfast() {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalData, setModalData] = useState(null);

  const openModal = () => {
    setModalData();
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <button onClick={() => openModal()}> Add breakfast food </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
      >
        <NutritionSearch />
      </Modal>
    </div>
  );
}

export default AddBreakfast;
