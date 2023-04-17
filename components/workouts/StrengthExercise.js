import { Input, Textarea, Col, Row, Dropdown } from '@nextui-org/react';
import ExerciseDropdown from './createWorkout/ExerciseDropdwn';
import React from 'react';
import exerciseLibrary from '../../data/exerciseLibrary';


const StrengthExercise = ({ onSubmit }) => {

    const [selected, setSelected] = React.useState(new Set(["Chest"]));
    const [selectedExercise, setSelectedExercise] = React.useState("");

    const selectedValue = React.useMemo(
        () => Array.from(selected).join(", ").replaceAll("_", " "),
        [selected]
    );

    const exercises = React.useMemo(
        () => exerciseLibrary.filter(exercise => exercise.bodyPart === selected.values().next().value),
        [selected]
    );

    const exerciseOptions = React.useMemo(
        () => exercises.map(exercise => <Dropdown.Item key={exercise.name} value={exercise.name}>{exercise.name}</Dropdown.Item>),
        [exercises]
    );

    const handleExerciseSelection = (selectedItems) => {
        const selectedExerciseName = selectedItems.values().next().value;
        setSelectedExercise(selectedExerciseName);

    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        onSubmit(e, "strength", selectedExercise);
    };



    return (
        <div style={{ backgroundColor: 'darkgrey', padding: '1rem', borderRadius: '30px' }}>
            <form onSubmit={(e) => handleFormSubmit(e)}>
                <h1 style={{ marginBottom: '1rem' }}>Add Strength Exercise</h1>
                <div style={{ marginBottom: '1rem' }}>
                    <div style={{ display: "flex" }}>
                        <div style={{ marginRight: "2px" }}>
                            <Dropdown>
                                <Dropdown.Button flat color="secondary">{selectedValue}</Dropdown.Button>
                                <Dropdown.Menu
                                    color="secondary"
                                    disallowEmptySelection
                                    selectionMode="single"
                                    selectedKeys={selected}
                                    onSelectionChange={setSelected}>
                                    <Dropdown.Item key="Chest">Chest</Dropdown.Item>
                                    <Dropdown.Item key="Shoulders">Shoulders</Dropdown.Item>
                                    <Dropdown.Item key="Back">Back</Dropdown.Item>
                                    <Dropdown.Item key="Biceps">Biceps</Dropdown.Item>
                                    <Dropdown.Item key="Triceps">Triceps</Dropdown.Item>
                                    <Dropdown.Item key="Quads">Quads</Dropdown.Item>
                                    <Dropdown.Item key="Hamstrings">Hamstrings</Dropdown.Item>
                                    <Dropdown.Item key="Calves">Calves</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                        <div>
                            <Dropdown label="exerciseName" name="exerciseName">
                                <Dropdown.Button flat color="secondary">{selectedExercise ? selectedExercise : "Select an exercise"}</Dropdown.Button>
                                <Dropdown.Menu
                                    color="secondary"
                                    disallowEmptySelection
                                    selectionMode="single"
                                    selectedKeys={selectedExercise ? new Set([selectedExercise]) : new Set([])}
                                    onSelectionChange={handleExerciseSelection}
                                >
                                    {exerciseOptions}
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </div>

                </div>
                <Row>
                    <Col span={12} style={{ paddingRight: '0.5rem' }}>
                        <Input label="Sets" name="sets" type="number" placeholder="Enter sets" required />
                    </Col>
                    <Col span={12} style={{ paddingLeft: '0.5rem' }}>
                        <Input label="Repetitions" name="repetitions" type="number" placeholder="Enter repetitions" required />
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


export default StrengthExercise;
