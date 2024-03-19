import { Currency } from '../../models/currency';
import './index.scss';

interface DropdownProps {
    id: string;
    label: string;
    options: Currency[];
    value: Currency | undefined;
    onChange: any;
}
export const Dropdown: React.FC<DropdownProps> = ({ id, label, options, value, onChange }) => {
    return (
        <div className="dropdown">
            <label htmlFor={id}>{label}</label>
            <select
                id={id}
                value={value?.key}
                onChange={onChange}
            >
                {options.map((option, index) => (
                    <option
                        key={index}
                        value={option.key}
                    >
                        {option.name}
                    </option>
                ))}
            </select>
        </div>
    );
};
