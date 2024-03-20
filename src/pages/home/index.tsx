import { useEffect } from 'react';
import { getCurrenciesAction } from '../../redux/actions/getCurrencies';
import { getRatesByBaseAction } from '../../redux/actions/getRatesByBase';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { HomeBody } from './components/body';
import { HomeFooter } from './components/footer';
import { HomeHeader } from './components/header';

export const Home = () => {
    const { currencyFrom } = useAppSelector((store) => store.global);
    const dispacth = useAppDispatch();

    useEffect(() => {
        dispacth(getCurrenciesAction());
    }, []);

    useEffect(() => {
        currencyFrom && dispacth(getRatesByBaseAction(currencyFrom.key));
    }, [currencyFrom]);

    return (
        <>
            <HomeHeader />
            <HomeBody />
            <HomeFooter />
        </>
    );
};
