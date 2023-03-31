import { useRouter } from 'next/router';
import exercises from '../../data/exercises';
import styles from '../../styles/ExPage.module.css';

const ExercisePage = () => {
    const router = useRouter();
    const pid = parseInt(router.query.id);
    const exercise = exercises.find((ex) => ex.id === pid);
    console.log(pid);
    console.log(exercise);
    return (
        <div>
            <h1>{exercise.name}</h1>
            <p>{exercise.equipment_needed.join('  ')}</p>
            <p>{exercise.body_parts_worked}</p>
            <p>{exercise.exerciseType}</p>
            <ul>
                {exercise.how_to_perform_exercise.map((step, index) => (
                    <li className={styles.step} key={index}>{step}</li>
                ))}
            </ul>
        </div>
    );
};

export default ExercisePage;
