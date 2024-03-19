import { useAppSelector } from '../../redux/hooks';
import './index.scss';

export const Update: React.FC = () => {
    const { update } = useAppSelector((store) => store.global);
    return (
        <div className="lastUpdated">
            <p>
                <u>Euro</u> to <u>US Dollar</u> conversion — {update}
            </p>
        </div>
    );
};
