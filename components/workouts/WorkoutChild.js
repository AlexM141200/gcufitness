import { Card, Button, Input } from "@nextui-org/react";
import styles from "../../styles/WorkoutChild.module.css";
import { useState } from "react";
import { doc, collection, addDoc } from "firebase/firestore";
import { auth, firestore } from "../../pages/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

function WorkoutChild({ formData, onDelete, handleClearFormData }) {
    const [user, loading, error] = useAuthState(auth);
    const [workoutName, setWorkoutName] = useState("");
    const strengthFormData = formData.strength;
    const cardioFormData = formData.cardio;

    const handleDelete = (index, formType) => {
        onDelete(index, formType);
        console.log(formData);
    };

    const handleWorkoutNameChange = (e) => {
        setWorkoutName(e.target.value); // update workoutName variable when input value is changed
    };

    const saveWorkout = async () => {
        if (workoutName !== "") {
            const userRef = doc(firestore, "users", user.uid);
            //Food Diary
            const docRef = collection(userRef, "userWorkouts");
            const workoutData = {
                name: workoutName,
                strength: formData.strength,
                cardio: formData.cardio,
            };

            await addDoc(docRef, workoutData);

            handleClearFormData();
            alert("Workout Saved");
        } else {
            alert("Please enter a workout name");
        }

    };

    return (
        <div className={styles.workoutContainer}>
            <Card style={{ backgroundColor: "rgba(0,0,0, 0.4)", color: "white", padding: "35px" }}>
                <div className={styles.inputContainer}>
                    <Input id="workoutName" clearable required onChange={handleWorkoutNameChange} labelPlaceholder="Workout Name" color="secondary" />
                </div>
                <h3> Strength Exercises</h3>
                {strengthFormData.map((data, index) => (
                    <div key={`strength${index}`}>
                        <Card css={{ bg: "$black", w: "100%", scale: ".8", color: "white" }}>
                            <div className={styles.exerciseContainer}>
                                <p>Exercise Name: {data.exerciseName}</p>
                                <p>Sets: {data.sets}</p>
                                <p>Repetitions: {data.repetitions}</p>
                                {data.notes !== "" && <p>Notes: {data.notes}</p>}
                                <div className={styles.deleteButtonContainer}>
                                    <Button color="gradient" onPress={() => handleDelete(index, "strength")}>Delete</Button>
                                </div>
                            </div>
                        </Card>
                    </div>
                ))}
                <h3>Cardio Exercises</h3>
                {cardioFormData.map((data, index) => (
                    <div key={`cardio${index}`}>
                        <Card css={{ bg: "$black", w: "100%", scale: ".8", color: "white" }}>
                            <div className={styles.exerciseContainer}>
                                <p>Exercise Name: {data.name}</p>
                                <p>Distance: {data.distance}</p>
                                <p>Time: {data.time}</p>
                                {data.notes !== "" && <p>Notes: {data.notes}</p>}
                                <div className={styles.deleteButtonContainer}>
                                    <Button color="gradient" onPress={() => handleDelete(index, "cardio")}>Delete</Button>
                                </div>
                            </div>
                        </Card>
                    </div>
                ))}
            </Card>
            <div className={styles.saveButtonContainer}>
                <Button shadow
                    color="gradient"
                    auto
                    size="sm" className={styles.saveButton} onPress={() => saveWorkout()}>Save Workout
                </Button>
            </div>
        </div>
    );
}

export default WorkoutChild;
