import { Title } from '../../../../components/title';
import { home } from '../../../../translations/en/home';
import './index.scss';

export const HomeHeader = () => {
    return (
        <div className="homeTitle">
            <Title text={home.title} />
        </div>
    );
};
