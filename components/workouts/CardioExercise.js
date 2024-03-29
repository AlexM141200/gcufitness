import { Input, Textarea, Col, Row } from '@nextui-org/react';

const CardioExercise = ({ onSubmit }) => {
    return (
        <div style={{ backgroundColor: 'darkgrey', padding: '1rem', borderRadius: '30px' }}>
            <form onSubmit={onSubmit}>
                <h1 style={{ marginBottom: '1rem' }}>Add Cardio Exercise</h1>
                <div style={{ marginBottom: '1rem' }}>
                    <Input label="Exercise Name" name="name" placeholder="Enter exercise name" required />
                </div>
                <Row>
                    <Col span={12} style={{ paddingRight: '0.5rem' }}>
                        <Input label="Distance" name="distance" type="number" placeholder="Enter distance" required />
                    </Col>
                    <Col span={12} style={{ paddingLeft: '0.5rem' }}>
                        <Input label="Time" name="time" type="number" placeholder="Enter time" required />
                    </Col>
                </Row>
                <div style={{ marginBottom: '1rem', marginLeft: '0.5rem' }}>
                    <Textarea label="Notes" name="notes" placeholder="Enter any notes or comments" />
                </div>
                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <button type="submit">Add</button>
                </div>
            </form>
        </div>
    );
};


export default CardioExercise;
