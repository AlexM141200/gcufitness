import { useState } from 'react';
import styles from "../../styles/Exercise.module.css";
import Link from 'next/link';

const Library = () => {

    const elements = [
        {
            name: 'All',
            cards: [
                {
                    name: 'Squats',
                    description: 'A strength exercise targeting the lower body muscles, including the quadriceps, glutes, and hamstrings.',
                    length: '5 sets of 10 reps'
                },
                {
                    name: 'Running',
                    description: 'A cardio exercise that involves continuous, rhythmic movement of the legs, increasing heart rate and burning calories.',
                    length: '30 minutes'
                },
                {
                    name: 'Full Body Workout',
                    description: 'A workout plan consisting of exercises that target multiple muscle groups, providing a comprehensive workout.',
                    length: '1 hour'
                },
                {
                    name: 'Push-ups',
                    description: 'A strength exercise targeting the upper body muscles, including the chest, shoulders, and triceps.',
                    length: '3 sets of 12 reps'
                }
            ]
        },
        {
            name: 'Strength Exercises',
            cards: [
                {
                    name: 'Deadlifts',
                    description: 'A strength exercise targeting the lower back muscles, as well as the glutes and hamstrings.',
                    length: '4 sets of 8 reps'
                },
                {
                    name: 'Bench Press',
                    description: 'A strength exercise targeting the chest, shoulders, and triceps.',
                    length: '3 sets of 10 reps'
                },
                {
                    name: 'Bicep Curls',
                    description: 'A strength exercise targeting the biceps.',
                    length: '3 sets of 12 reps'
                },
                {
                    name: 'Leg Press',
                    description: 'A strength exercise targeting the lower body muscles, including the quadriceps, glutes, and hamstrings.',
                    length: '4 sets of 10 reps'
                }
            ]
        },
        {
            name: 'Cardio Exercises',
            cards: [
                {
                    name: 'Cycling',
                    description: 'A cardio exercise that involves pedaling a stationary bike, increasing heart rate and burning calories.',
                    length: '45 minutes'
                },
                {
                    name: 'Jumping Jacks',
                    description: 'A cardio exercise that involves jumping while spreading the legs and arms, increasing heart rate and burning calories.',
                    length: '3 sets of 30 seconds'
                },
                {
                    name: 'Stair Climbing',
                    description: 'A cardio exercise that involves climbing up and down stairs, increasing heart rate and burning calories.',
                    length: '20 minutes'
                },
                {
                    name: 'Swimming',
                    description: 'A cardio exercise that involves swimming laps, increasing heart rate and burning calories.',
                    length: '30 minutes'
                }
            ]
        },
        {
            name: 'Workout Plans',
            cards: [
                {
                    name: 'Upper Body Workout Plan',
                    description: 'A workout plan consisting of exercises that target the upper body muscles, including the chest, shoulders, back, and arms.',
                    length: '1 hour'
                },
                {
                    name: 'Lower Body Workout Plan',
                    description: 'A workout plan consisting of exercises that target the lower body muscles, including the quadriceps, glutes, hamstrings, and calves.',
                    length: '1 hour'
                },
                {
                    name: 'Full Body HIIT Workout Plan',
                    description: 'A high-intensity interval training (HIIT) workout plan consisting of exercises that target multiple muscle groups, providing a comprehensive workout.',
                    length: '30 minutes'
                }]
        }
    ];


    const [selectedElement, setSelectedElement] = useState('All');

    const handleElementSelect = (element) => {
        setSelectedElement(element);
    };

    const filteredCards = elements.find((e) => e.name === selectedElement).cards;

    return (<div>
        <nav className={styles.nav}>
            <button className={styles.button} onClick={() => handleElementSelect('All')}>All</button>
            <button className={styles.button} onClick={() => handleElementSelect('Strength Exercises')}>Strength Exercises</button>
            <button className={styles.button} onClick={() => handleElementSelect('Cardio Exercises')}>Cardio Exercises</button>
            <button className={styles.button} onClick={() => handleElementSelect('Workout Plans')}>Workout Plans</button>
        </nav>
        <Link href="/setsReps"><h2 style={{ color: "grey" }}>Confused About Sets and Reps? </h2></Link>
        <div className={styles.cardContainer}>
            {filteredCards.map((card) => (
                <div className={styles.card}>
                    <h2>{card.name}</h2>
                    <p>{card.description}</p>
                    <p>{card.length}</p>
                </div>
            ))}
        </div>
    </div>
    )
};

export default Library;