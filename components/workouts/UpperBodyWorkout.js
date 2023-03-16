import { Row, Col } from '@nextui-org/react';

const UpperBodyWorkout = () => {
    return (
        <div style={{ backgroundColor: 'darkgrey', padding: '1rem', borderRadius: '30px' }}>
            <h1 style={{ marginBottom: '1rem' }}>Strength Workout Summary</h1>

            <div style={{ marginBottom: '1rem', border: '1px solid black', borderRadius: '30px', padding: '1rem' }}>
                <h2 style={{ marginBottom: '0.5rem' }}>Exercise 1</h2>
                <Row>
                    <Col span={12} style={{ paddingRight: '0.5rem' }}>
                        <p>Weight: 50 kg</p>
                    </Col>
                    <Col span={12} style={{ paddingLeft: '0.5rem' }}>
                        <p>Repetitions: 10</p>
                    </Col>
                </Row>
                <p>Notes: This was a tough one, but I pushed through!</p>
            </div>

            <div style={{ marginBottom: '1rem', border: '1px solid black', borderRadius: '30px', padding: '1rem' }}>
                <h2 style={{ marginBottom: '0.5rem' }}>Exercise 2</h2>
                <Row>
                    <Col span={12} style={{ paddingRight: '0.5rem' }}>
                        <p>Weight: 60 kg</p>
                    </Col>
                    <Col span={12} style={{ paddingLeft: '0.5rem' }}>
                        <p>Repetitions: 8</p>
                    </Col>
                </Row>
                <p>Notes: Felt good today, increased the weight from last week!</p>
            </div>

            <div style={{ marginBottom: '1rem', border: '1px solid black', borderRadius: '30px', padding: '1rem' }}>
                <h2 style={{ marginBottom: '0.5rem' }}>Exercise 3</h2>
                <Row>
                    <Col span={12} style={{ paddingRight: '0.5rem' }}>
                        <p>Weight: 40 kg</p>
                    </Col>
                    <Col span={12} style={{ paddingLeft: '0.5rem' }}>
                        <p>Repetitions: 12</p>
                    </Col>
                </Row>
                <p>Notes: Did some extra sets for this one, feeling great!</p>
            </div>

            <div style={{ marginBottom: '1rem', border: '1px solid black', borderRadius: '30px', padding: '1rem' }}>
                <h2 style={{ marginBottom: '0.5rem' }}>Exercise 4</h2>
                <Row>
                    <Col span={12} style={{ paddingRight: '0.5rem' }}>
                        <p>Weight: 70 kg</p>
                    </Col>
                    <Col span={12} style={{ paddingLeft: '0.5rem' }}>
                        <p>Repetitions: 6</p>
                    </Col>
                </Row>
                <p>Notes: Had to take a break in the middle, but finished strong!</p>
            </div>

            <div style={{ marginBottom: '1rem', border: '1px solid black', borderRadius: '30px', padding: '1rem' }}>
                <h2 style={{ marginBottom: '0.5rem' }}>
                    Exercise 5</h2>
                <Row>
                    <Col span={12} style={{ paddingRight: '0.5rem' }}>
                        <p>Weight: 55 kg</p>
                    </Col>
                    <Col span={12} style={{ paddingLeft: '0.5rem' }}>
                        <p>Repetitions: 9</p>
                    </Col>
                </Row>
                <p>Notes: Feeling a bit sore, but still pushed through and finished the workout strong!</p>
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <button>Save</button>
            </div>
        </div>
    );

};

export default UpperBodyWorkout;