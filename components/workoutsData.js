// Define an array to store all the user's workouts
const workouts = [];

// Define a constructor function for creating new Workout objects
function Workout(date) {
    this.date = date; // Date when the workout was performed
    this.completed = false; // Flag to mark whether the workout is completed or not
    this.exercises = []; // Array to store all the exercises performed in the workout
}

// Define a constructor function for creating new Exercise objects
function Exercise(name, weight, sets, reps, rest) {
    this.name = name; // Name of the exercise
    this.weight = weight; // Weight lifted in the exercise
    this.sets = sets; // Number of sets performed in the exercise
    this.reps = reps; // Number of reps performed in each set
    this.rest = rest; // Amount of rest taken between sets
}

// Function to add a new workout to the workouts array
function addWorkout(date) {
    const workout = new Workout(date);
    workouts.push(workout);
    return workout;
}

// Function to add a new exercise to a workout
function addExercise(workout, name, weight, sets, reps, rest) {
    const exercise = new Exercise(name, weight, sets, reps, rest);
    workout.exercises.push(exercise);
    return exercise;
}

// Function to mark a workout as completed
function markWorkoutCompleted(workout) {
    workout.completed = true;
}

// Function to calculate the total weight lifted by the user over time
function calculateTotalWeightLifted() {
    const totalWeightLifted = {};
    workouts.forEach((workout) => {
        if (workout.completed) {
            workout.exercises.forEach((exercise) => {
                if (totalWeightLifted[exercise.name]) {
                    totalWeightLifted[exercise.name] += exercise.weight * exercise.sets * exercise.reps;
                } else {
                    totalWeightLifted[exercise.name] = exercise.weight * exercise.sets * exercise.reps;
                }
            });
        }
    });
    return totalWeightLifted;
}
