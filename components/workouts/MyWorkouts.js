import React from 'react';
import { Card, Grid } from '@nextui-org/react';
import Link from 'next/link';



const workouts = [
  {
    id: 1,
    name: 'Upper Body',
    exercises: [
      { id: 1, name: 'Bench Press', sets: 4, reps: 10, weight: 60, restTime: '60 seconds' },
      { id: 2, name: 'Shoulder Press', sets: 3, reps: 12, weight: 40, restTime: '45 seconds' },
      { id: 3, name: 'Bicep Curls', sets: 3, reps: 12, weight: 20, restTime: '30 seconds' },
    ],
    description: 'A workout focused on developing the upper body muscles, including chest, shoulders, and arms.',
    types: ['Strength'],
  },
  {
    id: 2,
    name: 'Lower Body',
    exercises: [
      { id: 1, name: 'Squats', sets: 4, reps: 10, weight: 80, restTime: '60 seconds' },
      { id: 2, name: 'Lunges', sets: 3, reps: 12, weight: 40, restTime: '45 seconds' },
      { id: 3, name: 'Deadlifts', sets: 3, reps: 12, weight: 60, restTime: '30 seconds' },
    ],
    description: 'A workout focused on developing the lower body muscles, including quads, hamstrings, and glutes.',
    types: ['Strength'],
  },
  {
    id: 3,
    name: 'Full Body',
    exercises: [
      { id: 1, name: 'Push-ups', sets: 3, reps: 12, weight: 'Bodyweight', restTime: '30 seconds' },
      { id: 2, name: 'Pull-ups', sets: 3, reps: 12, weight: 'Bodyweight', restTime: '30 seconds' },
      { id: 3, name: 'Squats', sets: 3, reps: 12, weight: 40, restTime: '30 seconds' },
    ],
    description: 'A full-body workout that targets all major muscle groups for an efficient and effective workout.',
    types: ['Strength', 'Cardio'],
  },
  {
    id: 4,
    name: 'Cardio',
    exercises: [
      { id: 1, name: 'Running', sets: 1, reps: '30 minutes', weight: 'N/A', restTime: 'N/A' },
      { id: 2, name: 'Cycling', sets: 1, reps: '30 minutes', weight: 'N/A', restTime: 'N/A' },
      { id: 3, name: 'Jumping Jacks', sets: 3, reps: 30, weight: 'Bodyweight', restTime: '30 seconds' },
    ],
    description: 'A cardio-focused workout that includes running, cycling, and bodyweight exercises to improve cardiovascular health.',
    types: ['Cardio'],
  },
];

const MyWorkouts = () => {
  return (
    <div>
      <h1>Your Saved Workouts</h1>
      {workouts.map((workout) => (
        <Card key={workout.id} width="100%"
          hoverable
          shadow
          style={{ backgroundColor: "rgba(0,0,0, 0.4)" }}
        >
          <Card.Body style={{ color: "white" }}>
            <Link href={`/workoutTracker?name=${workout.name.replace(/\s+/g, '-')}`}>
              {workout.name}
            </Link>

            <p>{workout.description}</p>
            <ul>
              {workout.exercises.map((exercise) => (
                <li key={exercise.id} style={{ color: "white" }}>
                  {`${exercise.name} - ${exercise.sets} sets x ${exercise.reps} reps x ${exercise.weight} kg, ${exercise.restTime} rest`}
                </li>
              ))}
            </ul>
            <p style={{ color: "white" }}>{`Types: ${workout.types.join(', ')}`}</p>
          </Card.Body>
        </Card>
      ))}
    </div>

  );
};

export default MyWorkouts;