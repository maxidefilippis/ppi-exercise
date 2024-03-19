import { Card } from '../../../../components/card';
import { Dropdown } from '../../../../components/dropdown';
import { findCurrencyByKey } from '../../../../functions/findCurrencyInArray';
import { Input } from '../../../../components/input';
import { Swap } from '../../../../components/swap';
import { Text } from '../../../../components/text';
import { Update } from '../../../../components/update';
import { useAppDispatch, useAppSelector } from '../../../../redux/hooks';
import { setAmount, setCurrencyFrom, setCurrencyTo, swapCurrencies, updateHomeTitle } from '../../../../redux/reducers/global';
import { home } from '../../../../translations/en/home';
import './index.scss';

export const HomeBody = () => {
    const dispatch = useAppDispatch();
    const { amount, from, to, currencies } = useAppSelector((store) => store.global);

    const handleAmountChange = (event: any) => {
        dispatch(setAmount(event.target.value));
        dispatch(updateHomeTitle());
    };

    const handleFromChange = (event: any) => {
        dispatch(setCurrencyFrom(findCurrencyByKey(currencies, event.target.value)));
        dispatch(updateHomeTitle());
    };

    const handleToChange = (event: any) => {
        dispatch(setCurrencyTo(findCurrencyByKey(currencies, event.target.value)));
        dispatch(updateHomeTitle());
    };

    const handleSwap = () => {
        dispatch(swapCurrencies());
    };

    return (
        <Card>
            <div className="form">
                <Input
                    id={home.amount.toLocaleLowerCase()}
                    label={home.amount}
                    type="number"
                    value={amount}
                    onChange={handleAmountChange}
                    symbol={from?.symbol}
                />
                <Dropdown
                    id={home.from.toLocaleLowerCase()}
                    label={home.from}
                    onChange={handleFromChange}
                    options={currencies}
                    value={from}
                />
                <Swap onClick={handleSwap} />
                <Dropdown
                    id={home.to.toLocaleLowerCase()}
                    label={home.to}
                    onChange={handleToChange}
                    options={currencies}
                    value={to}
                />
            </div>
            <div className="convertion">
                <div className="convertion__information">
                    <div className="convertion__byFrom">
                        <Text text={'1.00 Euro ='} />
                        <Text text={'1.0627478 US Dollars'} />
                    </div>
                    <Text
                        classes="convertion__byTo"
                        text={'1 USD = 0.941004 EUR'}
                    />
                </div>
                <div className="convertion__lastUpdated">
                    <Text
                        classes="convertion__caution"
                        text={home.caution}
                    />
                    <Update />
                </div>
            </div>
        </Card>
    );
};
