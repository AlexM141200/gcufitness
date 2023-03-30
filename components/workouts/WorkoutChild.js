import { Card, Button, Input } from "@nextui-org/react";
import styles from "../../styles/WorkoutChild.module.css";

function WorkoutChild({ formData, onDelete, saveWorkout }) {
    const strengthFormData = formData.strength;
    const cardioFormData = formData.cardio;

    const handleDelete = (index, formType) => {
        onDelete(index, formType);
    };

    return (
        <div className={styles.workoutContainer}>
            <Card style={{ backgroundColor: "rgba(0,0,0, 0.4)", color: "white", padding: "35px" }}>
                <div className={styles.inputContainer}>
                    <Input clearable required labelPlaceholder="Workout Name" color="secondary" />
                </div>
                <h3> Strength Exercises</h3>
                {strengthFormData.map((data, index) => (
                    <div key={`strength${index}`}>
                        <Card css={{ bg: "$black", w: "100%", scale: ".8", color: "white" }}>
                            <div className={styles.exerciseContainer}>
                                <p>Exercise Name: {data.name}</p>
                                <p>Weight: {data.weight}</p>
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
