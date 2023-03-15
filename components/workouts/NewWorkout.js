import { useState } from "react";
import { Dropdown } from "@nextui-org/react";
import StrengthExercise from "./StrengthExercise.js";
import CardioExercise from "./CardioExercise.js";


function NewWorkout() {
    const [selectedOption, setSelectedOption] = useState('');

    const handleOptionSelect = (option) => {
        setSelectedOption(option);
        renderSelectedComponent(option);
    };

    const renderSelectedComponent = () => {
        const selectedOptionArray = Array.from(selectedOption);
        const selectedOptionValue = selectedOptionArray[0];

        switch (selectedOptionValue) {
            case "strength":
                return <StrengthExercise />
            case "cardio":
                return <CardioExercise />
            default:
                return null;
        }
    };

    return (
        <div>
            <h1>Create Workout</h1>
            <Dropdown
                placeholder="Add Exercise"
                width="200px"
                value={selectedOption}
            >
                <Dropdown.Button color="gradient">Add Exercise</Dropdown.Button>
                <Dropdown.Menu
                    aria-label="Exercise Menu"
                    color="secondary"
                    selectionMode="single"
                    onSelect={handleOptionSelect}
                    onSelectionChange={setSelectedOption}
                    isDark
                    css={{
                        $$dropdownMenuWidth: "340px",
                        $$dropdownItemHeight: "70px",
                        "& .nextui-dropdown-item": {
                            py: "$4",
                            "& .nextui-dropdown-item-content": {
                                w: "100%",
                                fontWeight: "$semibold",
                            },
                        },
                    }}
                >
                    <Dropdown.Item key="strength">Add Strength Exercise</Dropdown.Item>
                    <Dropdown.Item key="cardio">Add Cardio Exercise</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <br />
            {renderSelectedComponent()}
        </div>
    );
};

export default NewWorkout;
