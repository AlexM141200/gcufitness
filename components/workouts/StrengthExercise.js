import { useState } from 'react';
import { Input, Textarea, Button, Col, Row } from '@nextui-org/react';

const StrengthExercise = () => {
    const [exercises, setExercises] = useState([]);

    const handleAddClick = (event) => {
        const form = event.target.form;
        const exercise = {
            name: form.elements['exerciseName'].value,
            weight: form.elements['weight'].value,
            repetitions: form.elements['repetitions'].value,
            notes: form.elements['notes'].value,
        };
        setExercises([...exercises, exercise]);
        form.reset();
    };

    const handleRemoveClick = (index) => {
        const newExercises = [...exercises];
        newExercises.splice(index, 1);
        setExercises(newExercises);
    };

    return (
        <div style={{ backgroundColor: 'darkgrey', padding: '1rem', borderRadius: '30px' }}>
            <h1 style={{ marginBottom: '1rem' }}>Add Strength Exercise</h1>
            {exercises.length === 0 ? (
                <form>
                    <div style={{ marginBottom: '1rem' }}>
                        <Input label="Exercise Name" name="exerciseName" placeholder="Enter exercise name" />
                    </div>
                    <Row>
                        <Col span={12} style={{ paddingRight: '0.5rem' }}>
                            <Input label="Weight" name="weight" type="number" placeholder="Enter weight used" />
                        </Col>
                        <Col span={12} style={{ paddingLeft: '0.5rem' }}>
                            <Input label="Repetitions" name="repetitions" type="number" placeholder="Enter number of repetitions" />
                        </Col>
                    </Row>
                    <div style={{ marginBottom: '1rem', marginLeft: '0.5rem' }}>
                        <Textarea label="Notes" name="notes" placeholder="Enter any notes or comments" />
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <Button onClick={handleAddClick}>Add</Button>
                        <Button variant="secondary" style={{ marginRight: '1rem', marginLeft: '1rem' }}>Cancel</Button>
                    </div>
                </form>
            ) : (
                exercises.map((exercise, index) => (
                    <div key={index} style={{ backgroundColor: 'grey', padding: '1rem', borderRadius: '30px', marginTop: '1rem', position: 'relative' }}>
                        <h2 style={{ marginBottom: '1rem' }}>{exercise.name}</h2>
                        <div style={{ display: 'flex' }}>
                            <div style={{ marginRight: '1rem' }}>
                                <p><strong>Weight:</strong> {exercise.weight}</p>
                            </div>
                            <div>
                                <p><strong>Repetitions:</strong> {exercise.repetitions}</p>
                            </div>
                        </div>
                        <p><strong>Notes:</strong> {exercise.notes}</p>
                        <Button variant="error" size="small" style={{ position: 'absolute', top: '0', right: '0' }} onClick={() => handleRemoveClick(index)}>Remove</Button>
                    </div>
                ))
            )}
        </div>
    );
};


export default StrengthExercise;
