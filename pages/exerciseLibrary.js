import { useState } from 'react';
import styles from "../styles/Exercise.module.css";

const ExerciseLibrary = () => {
    const [selectedElement, setSelectedElement] = useState('All');

    const handleElementSelect = (element) => {
        setSelectedElement(element);
    };

    return (
        <div>
            <nav className={styles.nav}>
                <button className={styles.button} onClick={() => handleElementSelect('All')}>All</button>
                <button className={styles.button} onClick={() => handleElementSelect('Strength Exercises')}>Strength Exercises</button>
                <button className={styles.button} onClick={() => handleElementSelect('Cardio Exercises')}>Cardio Exercises</button>
                <button className={styles.button} onClick={() => handleElementSelect('Workout Plans')}>Workout Plans</button>
            </nav>
            <div style={{ backgroundColor: 'black', paddingTop: '10px', height: '10rem', display: 'flex', alignItems: 'center' }}>
                <h3 style={{ color: 'white', display: "flex", alignItems: "center" }}>{selectedElement}</h3>
            </div>
        </div>
    );
};

export default ExerciseLibrary;
