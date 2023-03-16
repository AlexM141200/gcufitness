import { useRouter } from 'next/router';
import workouts from '../data/workouts'; // assuming you have a data file with workout information

import CurrentWorkout from '../../components/CurrentWorkout';

const workoutTracker = () => {
    const router = useRouter();
    const { name } = router.query; // retrieve the workout name from the URL query params

    const selectedWorkout = workouts.find((workout) => workout.name === name); // find the selected workout based on its name

    return (
        <div>
            <h1>{selectedWorkout.name}</h1>
            <p>{selectedWorkout.description}</p>
            <CurrentWorkout exercises={selectedWorkout.exercises} />
        </div>
    );
};

export default workoutTracker;
