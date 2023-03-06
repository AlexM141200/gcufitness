import React, { useState } from "react";

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
            <div className="field">
                <label>{label}:</label>
                <input type="number" value={updatedValue} onChange={handleChange} />
                <button onClick={handleSave}>Save</button>
                <button onClick={handleCancel}>Cancel</button>
            </div>
        );
    }

    return (
        <div className="field">
            <label>{label}:</label>
            <p>{value}</p>
            <button onClick={handleEdit}>Edit</button>
        </div>
    );
};

export default EditableField;
