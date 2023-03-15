import { Card, Col, Text } from "@nextui-org/react";

const Card1 = () => (
    <Card css={{ bg: "$black", w: "100%", scale: ".8" }}>
        <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
            <Col>
                <Text size={15} weight="bold" transform="uppercase" color="white">
                    🍽️ Track your calories
                </Text>
                <Text h4 color="white">
                    For smarter nutrition choices
                </Text>
            </Col>
        </Card.Header>
        <Card.Image
            src="/img/saladPlate.jpg"
            width="100%"
            height="100%"
            objectFit="fill"
            alt="Card image background"
        />
    </Card>
);

export default Card1;