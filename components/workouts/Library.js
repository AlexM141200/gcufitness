import { useState } from 'react';
import styles from "../../styles/Exercise.module.css";
import Link from 'next/link';
import exercises from '../../data/exerciseLibrary';
import { Card } from "@nextui-org/react";

const Library = () => {
    const [filter, setFilter] = useState('all');

    const handleFilterChange = (e) => {
        setFilter(e.target.value);
    }

    const filteredExercises = filter === 'all' ? exercises : exercises.filter((ex) => ex.bodyPart === filter);

    return (
        <div>
            <Link href="/setsReps"><h2 style={{ color: "grey" }}>Confused About Sets and Reps? </h2></Link>
            <div className={styles.filter}>
                <label htmlFor="bodyPart">Filter by Body Part: </label>
                <select name="bodyPart" id="bodyPart" onChange={handleFilterChange}>
                    <option value="all">All</option>
                    <option value="Chest">Chest</option>
                    <option value="Shoulders">Shoulders</option>
                    <option value="Back">Back</option>
                    <option value="Biceps">Biceps</option>
                    <option value="Triceps">Triceps</option>
                    <option value="Quads">Quads</option>
                    <option value="Hamstrings">Hamstrings</option>
                    <option value="Calves">Calves</option>
                </select>
            </div>
            <div className={styles.cardContainer}>
                {filteredExercises.map((ex) => (
                    <Link key={ex.id} href={`/exercisePage/${ex.id}`}>
                        <Card className={styles.card}>
                            <h4>{ex.name}</h4>
                            <p>{ex.bodyPart}</p>
                        </Card>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Library;
