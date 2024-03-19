import convert from '../../assets/convert.svg';
import './index.scss';

interface SwapProps {
    onClick: () => void;
    disabled: boolean;
}
export const Swap: React.FC<SwapProps> = ({ onClick, disabled }) => {
    return (
        <button
            className="swap"
            onClick={onClick}
            disabled={disabled}
        >
            <img src={convert} />
        </button>
    );
};
