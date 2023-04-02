import Modal from "react-modal";
import NutritionSearch from "../NutritionSearch";
import React, { useState, useEffect } from "react";
import { auth } from "../../pages/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { firestore } from "../../pages/firebase";
import styles from "../../styles/DiaryAddFood.module.css";

const customStyles = {
    overlay: {
        backgroundColor: "rgba(0,0,0, 0.4)",
        zIndex: 9998,
        backdropFilter: "blur(10px)",
    },
    content: {
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        color: "white",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "80%",
        height: "100%",
        maxHeight: "80%",
        overflow: "auto",
        WebkitOverflowScrolling: "touch",
        padding: "20px",
        border: "none",
        borderRadius: "8px",
    },
};


function AddDinner() {
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
                contentLabel="Example Modal"
            >
                <NutritionSearch />
            </Modal>
        </div>
    );
}

export default AddDinner;
