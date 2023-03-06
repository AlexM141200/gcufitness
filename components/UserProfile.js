import React, { useState, useEffect } from "react";
import firebase from "firebase/app";
import "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, firestore } from "../pages/firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";
import styles from "../styles/Profile.module.css";
import EditableField from "./EditableField";

const UserProfile = () => {
  const [user, setUser, loading, error] = useAuthState(auth);
  const [userData, setUserData] = useState(null);
  const [editableFields, setEditableFields] = useState({
    height: false,
    weight: false,
    age: false,
    activityLevel: false,
  });
  const [updatedFields, setUpdatedFields] = useState({
    height: 0,
    weight: 0,
    age: 0,
    activityLevel: 0,
  });

  useEffect(() => {
    if (user) {
      fetchUserData(user);
    }
  }, [user]);

  const fetchUserData = async (user) => {
    const userRef = doc(firestore, "users", user.uid);
    const profileRef = doc(userRef, "userGoals", "userProfile");
    const profileDoc = await getDoc(profileRef);
    if (profileDoc.exists()) {
      setUserData(profileDoc.data());
    } else {
      setUserData({
        height: 0,
        weight: 0,
        age: 0,
        activityLevel: 0,
      });
    }
  };

  const handleEdit = (field) => {
    if (userData) {
      setEditableFields((prevState) => ({ ...prevState, [field]: true }));
      setUpdatedFields((prevState) => ({
        ...prevState,
        [field]: userData[field],
      }));
    } else {
      const defaultData = {
        height: 0,
        weight: 0,
        age: 0,
        activityLevel: 0,
      };
      setUserData(defaultData);
      setEditableFields((prevState) => ({ ...prevState, [field]: true }));
      setUpdatedFields((prevState) => ({
        ...prevState,
        [field]: defaultData[field],
      }));
    }
  };

  const handleCancel = (field) => {
    setEditableFields((prevState) => ({ ...prevState, [field]: false }));
    setUpdatedFields((prevState) => ({ ...prevState, [field]: "" }));
  };

  const handleSave = async (field) => {
    const userRef = doc(firestore, "users", user.uid);
    const profileRef = doc(userRef, "userGoals", "userProfile");
    const updatedData = {
      ...userData,
      [field]: Number(updatedFields[field]),
    };
    await setDoc(profileRef, updatedData);
    setUserData(updatedData);
    setEditableFields((prevState) => ({ ...prevState, [field]: false }));
  };

  const handleChange = (field, value) => {
    setUpdatedFields((prevState) => ({ ...prevState, [field]: value }));
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="user-profile">
      <h1 className={styles.profileTitle}>User Profile</h1>
      <div className={styles.userData}>
        {userData && (
          <>
            <div className="field">
              <label>Height:</label>
              {editableFields.height ? (
                <>
                  <input
                    type="number"
                    value={updatedFields.height}
                    onChange={(e) =>
                      handleChange("height", e.target.value)
                    }
                  />
                  <button onClick={() => handleSave("height")}>Save</button>
                  <button onClick={() => handleCancel("height")}>
                    Cancel
                  </button>
                </>
              ) : (
                <>
                  <p>{userData.height}</p>
                  <button onClick={() => handleEdit("height")}>Edit</button>
                </>
              )}
            </div>
            <div className="field">
              <label>Weight:</label>
              {editableFields.weight ? (
                <>
                  <input
                    type="number"
                    value={updatedFields.weight}
                    onChange={(e) =>
                      handleChange("weight", e.target.value)
                    }
                  />
                  <button onClick={() => handleSave("weight")}>Save</button>
                  <button onClick={() => handleCancel("weight")}>
                    Cancel
                  </button>
                </>
              ) : (
                <>
                  <p>{userData.weight}</p>
                  <button onClick={() => handleEdit("weight")}>Edit</button>
                </>
              )}
            </div>
            <div className="field">
              <label>Age:</label>
              {editableFields.age ? (
                <>
                  <input
                    type="number"
                    value={updatedFields.age}
                    onChange={(e) => handleChange("age", e.target.value)}
                  />
                  <button onClick={() => handleSave("age")}>Save</button>
                  <button onClick={() => handleCancel("age")}>Cancel</button>
                </>
              ) : (
                <>
                  <p>{userData.age}</p>
                  <button onClick={() => handleEdit("age")}>Edit</button>
                </>
              )}
            </div>
            <div className="field">
              <label>Activity Level:</label>
              {editableFields.activityLevel ? (
                <>
                  <input
                    type="number"
                    value={updatedFields.activityLevel}
                    onChange={(e) =>
                      handleChange("activityLevel", e.target.value)
                    }
                  />
                  <button onClick={() => handleSave("activityLevel")}>
                    Save
                  </button>
                  <button onClick={() => handleCancel("activityLevel")}>
                    Cancel
                  </button>
                </>
              ) : (
                <>
                  <p>{userData.activityLevel}</p>
                  <button onClick={() => handleEdit("activityLevel")}>
                    Edit
                  </button>
                </>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default UserProfile;
