import { Text, Spacer, Card, Grid } from "@nextui-org/react";
import { Box } from "./Box.js";
import Fade from 'react-reveal/Fade';

export const Content = () => (
  <Box css={{ px: "$12", mt: "$8", "@xsMax": { px: "$10" } }}>
    <Spacer y={2} />
    <Grid.Container gap={2}>
      <Fade left>
        <Grid xs={12} sm={12} md={12}>
          <Card
            width="100%"
            hoverable
            shadow
            style={{ backgroundColor: "rgba(0,0,0, 0.4)" }}
          >

            <Card.Image
              src="/img/fitnessHeart.png"
              width="35%"
              height="35%"
              objectFit="initial"

            />
            <h2 style={{ textAlign: "center", color: "white" }}>Improve Your Health</h2>
            <Card.Body style={{ textAlign: "center", color: "white" }}>
              Regular exercise can have a positive impact on your physical and mental health. By reducing the risk of chronic diseases such as heart disease, diabetes, and obesity, exercise can help you live a longer, healthier life. Exercise can also improve your mental health by reducing symptoms of anxiety and depression, and boosting your overall sense of wellbeing. Whether you're looking to lose weight, gain muscle, or simply improve your health, regular exercise is a key component of a healthy lifestyle.


            </Card.Body>
          </Card>
        </Grid>
      </Fade>
      <Fade right>
        <Grid xs={12} sm={12} md={12}>
          <Card
            width="100%"
            hoverable
            shadow
            style={{ backgroundColor: "rgba(0,0,0, 0.4)" }}
          >

            <Card.Image
              src="/img/olympiclift.png"
              width="35%"
              height="35%"
              objectFit="initial"
            />
            <h2 style={{ textAlign: "center", color: "white" }}>Increase Your Energy</h2>
            <Card.Body style={{ textAlign: "center", color: "white" }}>
              Increase Your Energy - Exercise is a great way to increase your energy levels and reduce fatigue. By getting your heart rate up and boosting circulation, exercise can help you feel more awake, alert, and focused throughout the day. Exercise can also improve your sleep quality, which in turn can improve your energy levels and productivity. Whether you're looking to improve your athletic performance or simply feel more energetic throughout the day, exercise is a great way to achieve your goals.
            </Card.Body>
          </Card>
        </Grid>
      </Fade>
      <Fade left>
        <Grid xs={12} sm={12} md={12}>
          <Card
            width="100%"
            hoverable
            shadow
            style={{ backgroundColor: "rgba(0,0,0, 0.4)" }}
          >
            <Card.Image
              src="https://png.pngtree.com/png-vector/20220830/ourmid/pngtree-super-dashing-and-confident-business-man-png-image_6131638.png"
              width="35%"
              height="35%"
              objectFit="initial"
            />
            <h2 style={{ textAlign: "center", color: "white" }}>Build Confidence</h2>
            <Card.Body style={{ textAlign: "center", color: "white" }}>
              Regular exercise can have a positive impact on your self-esteem and confidence. By improving your physical appearance, exercise can help you feel more comfortable and confident in your own skin. Exercise can also boost your mental resilience, helping you to feel more confident in your ability to tackle challenges and overcome obstacles. Whether you're looking to boost your confidence in your personal or professional life, exercise is a powerful tool that can help you achieve your goals.
            </Card.Body>
          </Card>
        </Grid>
      </Fade>
    </Grid.Container>
  </Box>
);
