import './index.scss';

interface DropdownProps {
    id: string;
    label: string;
    options: string[];
    value: string | number;
    onChange: () => void;
}
export const Dropdown: React.FC<DropdownProps> = ({ id, label, options, value, onChange }) => {
    return (
        <div className="dropdown">
            <label htmlFor={id}>{label}</label>
            <select
                value={value}
                onChange={onChange}
            >
                {options.map((option, index) => (
                    <option key={index} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    );
};
