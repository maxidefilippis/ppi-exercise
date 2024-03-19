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
    return (
        <div className="input">
            <label htmlFor={id}>{label}</label>
            <div className="inputContainer">
                {symbol && <p>{symbol}</p>}
                <input
                    id={id}
                    name={id}
                    type={type}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    style={symbol ? { paddingLeft: `${symbol.length === 1 ? 26 : 16 * symbol.length}px` } : {}}
                />
            </div>
        </div>
    );
};
