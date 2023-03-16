import React from 'react';

function FormB({ onSubmit }) {
    return (
        <form onSubmit={onSubmit}>
            <label>
                Phone:
                <input type="tel" name="phone" required />
            </label>
            <label>
                Address:
                <input type="text" name="address" required />
            </label>
            <button type="submit">Submit</button>
        </form>
    );
}

export default FormB;
