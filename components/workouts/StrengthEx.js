import { Card, Flex } from "@nextui-org/react";

const StrengthEx = () => {
    return (
        <Card>
            <Flex justifyContent="space-between" gap={1}>
                <Flex flexDirection="column" alignItems="center" justifyContent="center">
                    <Card.Header>Warmup Sets</Card.Header>
                    <Card.Body>
                        <input type="text" placeholder="Weight (kg)" />
                        <input type="text" placeholder="Reps" />
                        <input type="text" placeholder="Weight (kg)" />
                        <input type="text" placeholder="Reps" />
                    </Card.Body>
                </Flex>
                <Flex flexDirection="column" alignItems="center" justifyContent="center">
                    <Card.Header>Working Sets</Card.Header>
                    <Card.Body>
                        <input type="text" placeholder="Weight (kg)" />
                        <input type="text" placeholder="Reps" />
                        <input type="text" placeholder="Weight (kg)" />
                        <input type="text" placeholder="Reps" />
                    </Card.Body>
                </Flex>
                <Flex flexDirection="column" alignItems="center" justifyContent="center">
                    <Card.Header>Volume</Card.Header>
                    <Card.Body>
                        <input type="text" placeholder="Volume" />
                    </Card.Body>
                </Flex>
            </Flex>
        </Card>
    );
};

export default StrengthEx;
