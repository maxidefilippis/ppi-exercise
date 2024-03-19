import { useEffect, useRef, useState } from 'react';
import './index.scss';

interface InputProps {
    id: string;
    label: string;
    type: string;
    onChange: any;
    symbol?: string;
    placeholder?: string;
    value?: number;
}
export const Input: React.FC<InputProps> = ({ id, label, type, value, onChange, placeholder, symbol }) => {
    const divRef = useRef<HTMLDivElement>(null);
    const [width, setWidth] = useState(0);

    useEffect(() => {
        if (divRef.current) {
            const divWidth: number = divRef.current.clientWidth;
            setWidth(divWidth);
        }
    }, [symbol]);

    return (
        <div className="input">
            <label htmlFor={id}>{label}</label>
            <div className="inputContainer">
                {symbol && <p ref={divRef}>{symbol}</p>}
                <input
                    id={id}
                    name={id}
                    type={type}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    style={symbol ? { paddingLeft: `${width + 18}px` } : {}}
                />
            </div>
        </div>
    );
};
