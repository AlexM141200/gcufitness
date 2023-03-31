import { useState } from 'react';
import styles from "../../styles/Exercise.module.css";
import Link from 'next/link';
import exercises from '../../data/exercises';
import { Card } from "@nextui-org/react";

const Library = () => {

    const elements = ["All", "Strength", "Cardio", "Stretch"];

    const [selectedElement, setSelectedElement] = useState('All');
    const [filteredExercises, setFilteredExercises] = useState(exercises);

    const handleElementSelect = (element) => {
        setSelectedElement(element);
        if (element === 'All') {
            setFilteredExercises(exercises);
        } else {
            const filtered = exercises.filter((ex) => ex.exerciseType === element);
            setFilteredExercises(filtered);
        }
    };

    return (<div>
        <nav className={styles.nav}>
            {elements.map((element) => (
                <button key={element} className={styles.button} onClick={() => handleElementSelect(element)}>{element}</button>
            ))}
        </nav>
        <Link href="/setsReps"><h2 style={{ color: "grey" }}>Confused About Sets and Reps? </h2></Link>
        <div className={styles.cardContainer}>
            {filteredExercises.map((ex) => (
                <Link key={ex.id} href={`/exercisePage/${ex.id}`}>
                    <Card className={styles.card}>
                        <h2>{ex.name}</h2>
                        <p>{ex.equipment_needed.join('  ')}</p>
                        <p>{ex.body_parts_worked}</p>
                        <p>{ex.exerciseType}</p>
                        <p>{ex.how_to_perform_exercise}</p>
                    </Card>
                </Link>
            ))}
        </div>
    </div>
    )
};

export default Library;
