import { Card, Grid } from "@nextui-org/react";

const StrengthWorkout = () => {
    return (
        <Card>
            <Card>
                <Grid.Container gap={1}>
                    <Grid xs={24} md={8}>
                        <Card.Header>Warmup Sets</Card.Header>
                        <Card.Body>
                            <input type="text" placeholder="Weight (kg)" />
                            <input type="text" placeholder="Reps" />
                        </Card.Body>
                    </Grid>
                    <Grid xs={24} md={8}>
                        <Card.Header>Working Sets</Card.Header>
                        <Card.Body>
                            <input type="text" placeholder="Weight (kg)" />
                            <input type="text" placeholder="Reps" />
                        </Card.Body>
                    </Grid>
                    <Grid xs={24} md={8}>
                        <Card.Header>Volume</Card.Header>
                        <Card.Body>
                            <input type="text" placeholder="Volume" />
                        </Card.Body>
                    </Grid>
                </Grid.Container>
            </Card>
            ))
        </Card>
    );
};

export default StrengthWorkout;
