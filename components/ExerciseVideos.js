import React from "react";
import { Box, Stack, Typography } from "@mui/material";

const ExerciseVideos = ({ exerciseVideos, name }) => {
    return (
        <Box style={{ marginTop: '200px', p: '20px', width: '50vw', margin: '0 auto' }}>
            <Typography variant="h4" style={{ textAlign: "center" }}>
                Watch <span style={{ color: 'red', textTransform: 'capitalize' }}>{name}</span> Videos
            </Typography>
            <Stack style={{ flexDirection: 'row', justifyContent: 'flex-start', marginTop: '20px', flexWrap: 'wrap', gap: '15px', maxWidth: '75%' }}>
                <Box style={{ display: 'flex', flexDirection: 'row' }}>
                    {exerciseVideos?.slice(0, 3).map((item, index) => (
                        <a key={index}
                            className="exerciseVideo"
                            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
                            target="_blank"
                            rel="noreferrer"
                            style={{ display: 'block', padding: '10px' }}>
                            <img src={item.video.thumbnails[0].url} alt={item.video.title} style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '10px' }} />
                            <Box style={{ wordWrap: 'break-word' }}>
                                <Typography variant="h6" color="white">
                                    {item.video.title}
                                </Typography>
                                <Typography variant="h6" color="lightgrey">
                                    {item.video.channelName}
                                </Typography>
                            </Box>
                        </a>
                    ))}
                </Box>
                <Box style={{ display: 'flex', flexDirection: 'row' }}>
                    {exerciseVideos?.slice(3, 6).map((item, index) => (
                        <a key={index}
                            className="exerciseVideo"
                            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
                            target="_blank"
                            rel="noreferrer"
                            style={{ display: 'block', padding: '10px' }}>
                            <img src={item.video.thumbnails[0].url} alt={item.video.title} style={{ width: '300px', height: '200px', objectFit: 'cover', borderRadius: '10px' }} />
                            <Box style={{ wordWrap: 'break-word' }}>
                                <Typography variant="h6" color="white">
                                    {item.video.title}
                                </Typography>
                                <Typography variant="h6" color="lightgrey">
                                    {item.video.channelName}
                                </Typography>
                            </Box>
                        </a>
                    ))}
                </Box>
            </Stack>
        </Box>
    )
}

export default ExerciseVideos;
