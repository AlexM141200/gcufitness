import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import exerciseLibrary from '../../data/exerciseLibrary';
import { exerciseOptions, youtubeOptions, fetchData } from './fetchData';
import ExerciseVideos from '../../components/ExerciseVideos';
import { Box, Typography, Chip } from "@mui/material";


const axios = require("axios");

const ExercisePage = () => {
    const router = useRouter();
    const pid = parseInt(router.query.id);
    const exercise = exerciseLibrary.find((ex) => ex.id === pid);
    const [exerciseData, setExerciseData] = useState(null);
    const [exerciseVideos, setExerciseVideos] = useState(null);




    useEffect(() => {
        const fetchExerciseData = async () => {
            const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
            const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';

            const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${exercise.apiId}`, exerciseOptions);
            setExerciseData(exerciseDetailData);



            const youtubeOptions = {
                method: 'GET',
                url: 'https://youtube-search-and-download.p.rapidapi.com/search',
                params: {
                    query: `${exercise.name}`,
                },
                headers: {
                    'X-RapidAPI-Key': 'fb01ac751fmsh084feadf61aa2d1p1b3425jsn5c57d2b85b88',
                    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
                }
            };

            axios.request(youtubeOptions).then(function (response) {
                console.log(response.data);
                setExerciseVideos(response.data.contents)
                console.log(exerciseVideos);
            }).catch(function (error) {
                console.error(error);
            });

        }
        fetchExerciseData();
    }, [exercise.apiId]);

    return (
        <div>
            {exerciseData && (
                <>
                    <h2 style={{ textTransform: "capitalize" }}>{exerciseData.name}</h2>
                    <Box>
                        <Box style={{ display: 'flex', flexDirection: 'column' }}>
                            <Box style={{ display: 'flex', flexDirection: 'row', gap: '20px' }}>
                                <img style={{ height: "50%", width: "50%" }} src={exerciseData.gifUrl} />
                                <Box style={{ display: 'flex', flexDirection: 'column' }}>
                                    <Typography variant="h5">
                                        The {exerciseData.name} is a great exercise to target your <span style={{ color: "deepskyblue" }}>{exerciseData.target}</span>
                                    </Typography>
                                    <Typography variant="h6">
                                        You will need a <span style={{ color: "indianred" }}>{exerciseData.equipment} </span> to perform this exercise.
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                        <Chip size="medium" color="primary" label={exerciseData.target} style={{ marginTop: '15px', textTransform: 'capitalize' }} />
                    </Box>
                    <ExerciseVideos exerciseVideos={exerciseVideos} name={exercise.name} />

                </>
            )}
        </div>
    );
};

export default ExercisePage;
