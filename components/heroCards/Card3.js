import { Card, Col, Text } from "@nextui-org/react";

const Card3 = () => (
    <Card css={{ w: "100%" }}>
        <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
            <Col>
                <Text size={12} weight="bold" transform="uppercase" color="#ffffffAA">
                    📉 Reach your weight loss targets
                </Text>
                <Text h4 color="white">
                    With ease
                </Text>
            </Col>
        </Card.Header>
        <Card.Image
            src="/img/foodTracking.jpg"
            width="100%"
            height={340}
            objectFit="fill"
            alt="Card image background"
        />
    </Card>
);

export default Card3;