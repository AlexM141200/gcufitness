import styles from "../../styles/Card.module.css";

import { Card, Col, Text } from "@nextui-org/react";

const Card1 = () => (
    <Card css={{ bg: "$black", w: "100%", scale: ".8" }}>
        <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
            <Col>
                <Text size={15} weight="bold" transform="uppercase" color="#ffffffAA">
                    🏋️‍♀️ Create custom workouts
                </Text>
                <Text h4 color="white">
                    Tailored to your goals
                </Text>
            </Col>
        </Card.Header>
        <Card.Image
            src="/img/guyInGym.png"
            width="100%"
            objectFit="cover"
            alt="Card image background"
        />
    </Card>
);

export default Card1;