import convert from '../../assets/convert.svg';
import './index.scss';

export const Swap: React.FC = () => {
    return (
        <button className="swap">
            <img src={convert} />
        </button>
    );
};
