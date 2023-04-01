import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import exerciseLibrary from '../../data/exerciseLibrary';
import styles from '../../styles/ExPage.module.css';

const axios = require("axios");

const ExercisePage = () => {
    const router = useRouter();
    const pid = parseInt(router.query.id);
    const exercise = exerciseLibrary.find((ex) => ex.id === pid);
    const [exerciseData, setExerciseData] = useState(null);

    useEffect(() => {
        const options = {
            method: 'GET',
            url: `https://exercisedb.p.rapidapi.com/exercises/exercise/${exercise.apiId}`,
            headers: {
                'X-RapidAPI-Key': 'fb01ac751fmsh084feadf61aa2d1p1b3425jsn5c57d2b85b88',
                'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
            }
        };

        axios.request(options).then(function (response) {
            setExerciseData(response.data);
        }).catch(function (error) {
            console.error(error);
        });
    }, [exercise.apiId]);

    console.log(exerciseData);
    return (
        <div>
            {exerciseData && (
                <>
                    <h2>{exerciseData.name}</h2>
                    <p>Body Part: {exerciseData.bodyPart}</p>
                    <p>Equipment: {exerciseData.equipment}</p>
                    <img src={exerciseData.gifUrl} />
                    <p>ID: {exerciseData.id}</p>
                    <p>Target: {exerciseData.target}</p>
                </>
            )}
        </div>
    );
};

export default ExercisePage;
