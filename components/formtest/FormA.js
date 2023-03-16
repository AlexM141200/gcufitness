import React from 'react';

function FormA({ onSubmit }) {
    return (
        <form onSubmit={onSubmit}>
            <label>
                Name:
                <input type="text" name="name" required />
            </label>
            <label>
                Email:
                <input type="email" name="email" required />
            </label>
            <button type="submit">Submit</button>
        </form>
    );
}

export default FormA;
