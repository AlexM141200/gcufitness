import { useState } from "react";
import Modal from "react-modal";
import StrengthExercise from "./StrengthExercise.js";
import CardioExercise from "./CardioExercise.js";
import WorkoutChild from "./WorkoutChild.js";
import styles from "../../styles/CreateWorkout.module.css";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth, firestore } from "../../pages/firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";


function NewWorkout() {
    const [selectedForm, setSelectedForm] = useState(null);
    const [formData, setFormData] = useState({ strength: [], cardio: [] });
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleFormSubmit = (e, formType) => {
        e.preventDefault();
        const form = e.target;
        const data = new FormData(form);
        setFormData((prevFormData) => ({
            ...prevFormData,
            [formType]: [...prevFormData[formType], Object.fromEntries(data)],
        }));
        form.reset();
        setIsModalOpen(false);
    };

    const handleDelete = (index, formType) => {
        setFormData((prevFormData) => {
            const updatedFormData = { ...prevFormData };
            updatedFormData[formType].splice(index, 1);
            return updatedFormData;
        });
    };

    const saveWorkout = () => {

    }

    const handleOpenForm = (formType) => {
        setSelectedForm(formType);
        setIsModalOpen(true);
    };

    const handleCloseForm = () => {
        setSelectedForm(null);
        setIsModalOpen(false);
    };

    return (
        <div className={styles.workoutContainer}>
            <h1>Create Workout</h1>
            <div className={styles.buttonContainer}>
                <button onClick={() => handleOpenForm("strength")}>
                    Add Strength Exercise
                </button>
                <button onClick={() => handleOpenForm("cardio")}>
                    Add Cardio Exercise
                </button>
            </div>
            <Modal
                isOpen={isModalOpen}
                onRequestClose={handleCloseForm}
                contentLabel="Exercise Form"
                className={styles.modal}
                overlayClassName={styles.modalOverlay}
            >
                {selectedForm === "strength" ? (
                    <StrengthExercise onSubmit={(e) => handleFormSubmit(e, "strength")} />
                ) : (
                    <CardioExercise onSubmit={(e) => handleFormSubmit(e, "cardio")} />
                )}
            </Modal>
            <WorkoutChild formData={formData} onDelete={handleDelete} saveWorkout={saveWorkout} />
        </div>
    );
}

export default NewWorkout;
