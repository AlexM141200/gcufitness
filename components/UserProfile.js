import React, { useState, useEffect } from "react";
import firebase from "firebase/app";
import "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, firestore } from "../pages/firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";
import styles from "../styles/Profile.module.css";
import EditableField from "../components/EditableField";
import WeightLossChart from "./charts/WeightLossChart";

const UserProfile = () => {
  const [user, setUser, loading, error] = useAuthState(auth);
  const [userData, setUserData] = useState(null);

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
        loggedWeights: [],
        originalWeight: 0
      });
    }
  };

  const handleSave = async (field, value) => {
    const userRef = doc(firestore, "users", user.uid);
    const profileRef = doc(userRef, "userGoals", "userProfile");
    const updatedData = {
      ...userData,
      [field]: Number(value),
    };
    await setDoc(profileRef, updatedData);
    setUserData(updatedData);
  };

  const handleCancel = () => {
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
            <EditableField
              label="Height"
              value={userData.height}
              onSave={(value) => handleSave("height", value)}
              onCancel={handleCancel}
            />
            <EditableField
              label="Original Weight"
              value={userData.originalWeight}
              onSave={(value) => handleSave("originalWeight", value)}
              onCancel={handleCancel}
            />
            <EditableField
              label="Weight"
              value={userData.weight}
              onSave={(value) => handleSave("weight", value)}
              onCancel={handleCancel}
            />
            <EditableField
              label="Age"
              value={userData.age}
              onSave={(value) => handleSave("age", value)}
              onCancel={handleCancel}
            />
            <EditableField
              label="Activity Level"
              value={userData.activityLevel}
              onSave={(value) => handleSave("activityLevel", value)}
              onCancel={handleCancel}
            />
          </>
        )}
      </div>
      <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
        {userData && (
          <div style={{ width: "600px", height: "400px" }}>
            <WeightLossChart currentWeight={userData.weight} originalWeight={userData.originalWeight} />
          </div>
        )}
      </div>

    </div>
  );
};

export default UserProfile;
