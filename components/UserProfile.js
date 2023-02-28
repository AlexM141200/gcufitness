import React, { useState, useEffect } from "react";
import firebase from "firebase/app";
import "firebase/firestore";

const UserProfile = ({ userId }) => {
  const [userData, setUserData] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [updatedData, setUpdatedData] = useState({});

  const db = firebase.firestore();
  const userRef = db.collection("users").doc(userId);

  useEffect(() => {
    userRef.get().then((doc) => {
      if (doc.exists) {
        setUserData(doc.data());
      } else {
        console.log("No such document!");
      }
    });
  }, [userRef]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUpdatedData({ ...updatedData, [name]: value });
  };

  const handleEditClick = (field) => {
    setIsEditing(true);
    setUpdatedData({ ...updatedData, [field]: userData[field] });
  };

  const handleCancelClick = () => {
    setIsEditing(false);
    setUpdatedData({});
  };

  const handleSaveClick = () => {
    userRef
      .update(updatedData)
      .then(() => {
        setIsEditing(false);
        setUserData({ ...userData, ...updatedData });
        setUpdatedData({});
      })
      .catch((error) => {
        console.error("Error updating document: ", error);
      });
  };

  const renderField = (fieldName, fieldValue) => {
    if (isEditing) {
      return (
        <div>
          <label htmlFor={fieldName}>{fieldName}</label>
          <input
            type="text"
            name={fieldName}
            value={updatedData[fieldName] || fieldValue || ""}
            onChange={handleInputChange}
          />
        </div>
      );
    } else {
      return (
        <div>
          <span>{fieldName}: </span>
          <span>{fieldValue}</span>
          <button onClick={() => handleEditClick(fieldName)}>Edit</button>
        </div>
      );
    }
  };

  return (
    <div>
      <h2>User Profile</h2>
      {Object.keys(userData).map((fieldName) => {
        return (
          <div key={fieldName}>
            {renderField(fieldName, userData[fieldName])}
          </div>
        );
      })}
      {isEditing && (
        <div>
          <button onClick={handleSaveClick}>Save</button>
          <button onClick={handleCancelClick}>Cancel</button>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
