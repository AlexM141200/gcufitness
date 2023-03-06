import React, { useState } from "react";
import styles from "../styles/Profile.module.css";

const EditableField = ({ label, value, onSave, onCancel }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [updatedValue, setUpdatedValue] = useState(value);

    const handleEdit = () => {
        setIsEditing(true);
        setUpdatedValue(value);
    };

    const handleSave = () => {
        onSave(updatedValue);
        setIsEditing(false);
    };

    const handleCancel = () => {
        setUpdatedValue(value);
        setIsEditing(false);
        onCancel();
    };

    const handleChange = (e) => {
        setUpdatedValue(e.target.value);
    };

    if (isEditing) {
        return (
            <div className={styles.field}>
                <label>{label}:</label>
                <input type="number" value={updatedValue} onChange={handleChange} />
                <div className={styles.container}>
                    <button onClick={handleSave}>Save</button>
                    <button onClick={handleCancel}>Cancel</button>
                </div>
            </div>
        );
    }

    return (
        <div className={styles.field}>
            <div className={styles.values}>
                <label>{label}:</label>
                <p>{value}</p>
            </div>
            <div className={styles.container}>
                <button onClick={handleEdit}>Edit</button>
            </div>
        </div>
    );
};

export default EditableField;
