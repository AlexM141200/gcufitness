import React, { useState } from 'react';
import ChildComponent from './ChildComponent';
import FormA from './FormA';
import FormB from './FormB';

function ParentComponent() {
    const [selectedForm, setSelectedForm] = useState('Form A');
    const [formData, setFormData] = useState({ formA: [], formB: [] });

    const handleFormSubmit = (e, formType) => {
        e.preventDefault();
        const form = e.target;
        const data = new FormData(form);
        setFormData((prevFormData) => ({
            ...prevFormData,
            [formType]: [...prevFormData[formType], Object.fromEntries(data)],
        }));
        form.reset();
    };

    const handleDropdownChange = (e) => {
        setSelectedForm(e.target.value);
    };

    return (
        <div>
            <select value={selectedForm} onChange={handleDropdownChange}>
                <option value="Form A">Form A</option>
                <option value="Form B">Form B</option>
            </select>
            {selectedForm === 'Form A' ? (
                <FormA onSubmit={(e) => handleFormSubmit(e, 'formA')} />
            ) : (
                <FormB onSubmit={(e) => handleFormSubmit(e, 'formB')} />
            )}
            <ChildComponent formData={formData} />
        </div>
    );
}

export default ParentComponent;
