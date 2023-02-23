import Modal from "react-modal";
import NutritionSearch from "../NutritionSearch";
import React, { useState, useEffect } from "react";

const customStyles = {
  content: {
    color: "black",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    overflow: "auto",
    maxHeight: "calc(100vh - 210px)",
  },
};

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
        style={customStyles}
      >
        <NutritionSearch />
      </Modal>
    </div>
  );
}

export default AddBreakfast;
