import exerciseLibrary from "../../../data/exerciseLibrary"
import { Dropdown } from "@nextui-org/react";
import React from "react";


const ExerciseDropdown = ({ onExerciseSelect }) => {

    return (
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
                <Dropdown>
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
    )
}

export default ExerciseDropdown;
