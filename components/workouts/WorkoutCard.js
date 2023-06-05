import { Card } from "@nextui-org/react";
import styles from "../../styles/WorkoutCard.module.css";

function WorkoutCard({ workout }) {
    const { id, name, strength, cardio, notes } = workout;
    console.log(workout);

    return (
        <Card>
            <h2>{name}</h2>
            <div>
                <h3>Strength Exercises</h3>
                <ul>
                    {strength.map((exercise) => (
                        <li key={exercise.exerciseName}>
                            <div className={styles.container}>
                                <p className={styles.text}>Exercise Name: {exercise.exerciseName}</p>
                                <p className={styles.text}>Sets: {exercise.sets}</p>
                                <p className={styles.text}>Repetitions: {exercise.repetitions}</p>
                                {notes !== "" && <p className={styles.text}>Notes: {exercise.notes}</p>}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            {cardio.length > 0 && (
                <div>
                    <h3>Cardio Exercises</h3>
                    <ul>
                        {cardio.map((exercise) => (
                            <li key={exercise.name}>
                                <div className={styles.container}>
                                    <p className={styles.text}>Exercise Name: {exercise.name}</p>
                                    <p className={styles.text}>Distance: {exercise.distance}</p>
                                    <p className={styles.text}>Time: {exercise.time}</p>
                                    {notes !== "" && <p className={styles.text}>Notes: {exercise.notes}</p>}
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </Card>
    );

}

export default WorkoutCard;