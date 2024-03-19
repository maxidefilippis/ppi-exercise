import { useEffect } from 'react';
import { getCurrenciesAction } from '../../redux/actions/getCurrencies';
import { useAppDispatch } from '../../redux/hooks';
import { HomeBody } from './components/body';
import { HomeFooter } from './components/footer';
import { HomeHeader } from './components/header';

export const Home = () => {
    const dispacth = useAppDispatch();

    useEffect(() => {
        dispacth(getCurrenciesAction());
    }, []);

    return (
        <>
            <HomeHeader />
            <HomeBody />
            <HomeFooter />
        </>
    );
};
