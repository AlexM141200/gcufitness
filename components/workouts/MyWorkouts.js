import React, { useEffect } from 'react';
import { Card, Grid } from '@nextui-org/react';
import Link from 'next/link';
import { useState } from "react";
import { doc, collection, addDoc, getDocs, snapshot } from "firebase/firestore";
import { auth, firestore } from "../../pages/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import WorkoutCard from './WorkoutCard';


const MyWorkouts = () => {
  const [user, loading, error] = useAuthState(auth);
  const [workouts, setWorkouts] = useState([]);


  const getWorkouts = async () => {
    const userRef = doc(firestore, "users", user.uid);
    //Food Diary
    const docRef = collection(userRef, "userWorkouts");
    const snapshot = await getDocs(docRef);
    const userworkouts = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setWorkouts(userworkouts);
    console.log(workouts);
  };

  useEffect(() => {
    if (user) {
      getWorkouts();
    }
  }, [user]);


  return (
    <div>
      <h1>My Workouts</h1>
      <ul>
        {workouts.map((workout) => (
          <li key={workout.id}>
            <WorkoutCard workout={workout} />
          </li>
        ))}
      </ul>
    </div>

  );
};

export default MyWorkouts;