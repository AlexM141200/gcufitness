import goalData from "../../data/goalData";
import { Card, Grid, Text, Button, Row, Link } from "@nextui-org/react";

const workoutsHome = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>What is your goal?</h1>
      <Grid.Container gap={1}>
        {goalData.map((item, index) => (
          <Grid key={index} lg={3} md={3}>
            <Card isPressable isHoverable css={{ mw: "330px" }}>
              <Card.Image src={item.image} />
              <Card.Body>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </Card.Body>
            </Card>
          </Grid>
        ))}
      </Grid.Container>
    </div>
  );
};

export default workoutsHome;
