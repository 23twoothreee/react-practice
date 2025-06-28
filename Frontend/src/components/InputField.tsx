import React from 'react';

interface InputFieldProps {
    /** Unique ID of the input field */
    id: string;
    /** Label question for the input field  */
    label: string;
    /** Determines the input type, Password, text, button etc. */
    type: string;
    /** Value input of the input field */
    value: string;
    /** Label placeholder for the Input field */
    placeholder: string;
    /** On change function of the input field, triggered when value is changed */
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    /** Determines if the input field is a required field or not */
    required?: boolean;
}

function InputField({ 
    id, 
    label, 
    type, 
    value,
    placeholder,
    onChange, 
    required = true
}: InputFieldProps ) {
    return (
        <div className="mb-3">
            <label htmlFor={id} className="form-label">{label}</label>
            <input
                id={id}
                type={type}
                className="form-control"
                value={value}
                placeholder={placeholder}
                onChange={onChange}
                required={required}
            />
        </div>
    );
}

export default InputField;