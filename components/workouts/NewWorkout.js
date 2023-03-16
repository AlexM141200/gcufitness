import { useState } from "react";
import { Dropdown } from "@nextui-org/react";
import StrengthExercise from "./StrengthExercise.js";
import CardioExercise from "./CardioExercise.js";
import WorkoutChild from "./WorkoutChild.js";


function NewWorkout() {
    const [selectedForm, setSelectedForm] = useState('Strength');
    const [formData, setFormData] = useState({ strength: [], cardio: [] });


    const handleFormSubmit = (e, formType) => {
        e.preventDefault();
        const form = e.target;
        const data = new FormData(form);
        setFormData((prevFormData) => ({
            ...prevFormData,
            [formType]: [...prevFormData[formType], Object.fromEntries(data)],
        }));
        form.reset();
    };

    const handleDropdownChange = (e) => {
        setSelectedForm(e.target.value);
    };

    const handleDelete = (index, formType) => {
        setFormData((prevFormData) => {
            const updatedFormData = { ...prevFormData };
            updatedFormData[formType].splice(index, 1);
            return updatedFormData;
        });
    };


    return (
        <div>
            <h1>Create Workout</h1>
            <select value={selectedForm} onChange={handleDropdownChange}>
                <option value="strength">Strength Exercise</option>
                <option value="cardio">Cardio Exercise</option>
            </select>
            {selectedForm === 'strength' ? (
                <StrengthExercise onSubmit={(e) => handleFormSubmit(e, 'strength')} />
            ) : (
                <CardioExercise onSubmit={(e) => handleFormSubmit(e, 'cardio')} />
            )}
            <WorkoutChild formData={formData} onDelete={handleDelete} />
        </div>
    );
};

export default NewWorkout;
