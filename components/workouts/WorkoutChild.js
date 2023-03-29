import { Card } from "@nextui-org/react";

function WorkoutChild({ formData, onDelete }) {
    const strengthFormData = formData.strength;
    const cardioFormData = formData.cardio;

    const handleDelete = (index, formType) => {
        onDelete(index, formType);
    };

    return (
        <div>
            <h1> Strength Exercises</h1>
            {strengthFormData.map((data, index) => (
                <div key={`strength${index}`}>
                    <Card css={{ bg: "$black", w: "100%", scale: ".8" }}>
                        <p>Exercise Name: {data.name}</p>
                        <p>Weight: {data.weight}</p>
                        <p>Repetitions: {data.repetitions}</p>
                        <p>Notes: {data.notes}</p>
                        <button onClick={() => handleDelete(index, "strength")}>Delete</button>
                    </Card>
                </div>
            ))}
            <h1>Cardio Exercises</h1>
            {cardioFormData.map((data, index) => (
                <div key={`cardio${index}`}>
                    <p>Exercise Name: {data.name}</p>
                    <p>Distance: {data.distance}</p>
                    <p>Time: {data.time}</p>
                    <p>Notes: {data.notes}</p>
                    <button onClick={() => handleDelete(index, "cardio")}>Delete</button>
                </div>
            ))}
        </div>
    );
}

export default WorkoutChild;
