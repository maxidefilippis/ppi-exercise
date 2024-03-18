import React from 'react';
import './index.scss';

interface InputProps {
    id: string;
    label: string;
    type: string;
    value: string | number;
    onChange: () => void;
    placeholder: string;
}
export const Input: React.FC<InputProps> = ({ id, label, type, value, onChange, placeholder }) => {
    return (
        <div className="input">
            <label htmlFor={id}>{label}</label>
            <input
                id={id}
                name={id}
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
            />
        </div>
    );
};
