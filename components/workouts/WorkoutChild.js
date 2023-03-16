function WorkoutChild({ formData, onDelete }) {
    const strengthFormData = formData.strength.sort((a, b) => b.date - a.date);
    const cardioFormData = formData.cardio.sort((a, b) => b.date - a.date);

    const handleDelete = (index, formType) => {
        onDelete(index, formType);
    };

    return (
        <div>
            {strengthFormData.map((data, index) => (
                <div key={`strength${index}`}>
                    <p>Exercise Name: {data.name}</p>
                    <p>Weight: {data.weight}</p>
                    <p>Repetitions: {data.repetitions}</p>
                    <p>Notes: {data.notes}</p>
                    <button onClick={() => handleDelete(index, "strength")}>Delete</button>
                </div>
            ))}
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
