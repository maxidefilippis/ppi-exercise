import { Title } from '../../../../components/title';
import { useAppSelector } from '../../../../redux/hooks';
import './index.scss';

export const HomeHeader = () => {
    const { homeTitle } = useAppSelector((store) => store.global);
    return (
        <div className="homeTitle">
            <Title text={homeTitle} />
        </div>
    );
};
