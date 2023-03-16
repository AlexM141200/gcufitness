import React from 'react';

function ChildComponent({ formData }) {
    const formAData = formData.formA.sort((a, b) => b.date - a.date);
    const formBData = formData.formB.sort((a, b) => b.date - a.date);

    return (
        <div>
            {formAData.map((data, index) => (
                <div key={`formA${index}`}>
                    <p>Name: {data.name}</p>
                    <p>Email: {data.email}</p>
                </div>
            ))}
            {formBData.map((data, index) => (
                <div key={`formB${index}`}>
                    <p>Phone: {data.phone}</p>
                    <p>Address: {data.address}</p>
                </div>
            ))}
        </div>
    );
}

export default ChildComponent;
