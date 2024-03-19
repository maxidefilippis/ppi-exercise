import convert from '../../assets/convert.svg';
import './index.scss';

interface SwapProps {
    onClick: () => void;
}
export const Swap: React.FC<SwapProps> = ({ onClick }) => {
    return (
        <button
            className="swap"
            onClick={onClick}
        >
            <img src={convert} />
        </button>
    );
};
