import { Card } from '../../../../components/card';
import { Dropdown } from '../../../../components/dropdown';
import { Input } from '../../../../components/input';
import { Spinner } from '../../../../components/loader';
import { Skeleton } from '../../../../components/skeleton';
import { Swap } from '../../../../components/swap';
import { Text } from '../../../../components/text';
import { Update } from '../../../../components/update';
import { findCurrencyByKey } from '../../../../functions/findCurrencyInArray';
import { useAppDispatch, useAppSelector } from '../../../../redux/hooks';
import { setAmount, setConvertedAmounts, setCurrencyFrom, setCurrencyTo, swapCurrencies, updateHomeTitle } from '../../../../redux/reducers/global';
import { home } from '../../../../translations/en/home';
import './index.scss';

export const HomeBody = () => {
    const dispatch = useAppDispatch();
    const { amount, convertedAmountFrom, convertedAmountTo, from, to, currencies, loading } = useAppSelector((store) => store.global);

    const handleAmountChange = (event: any) => {
        dispatch(setAmount(event.target.value));
        dispatch(updateHomeTitle());
        dispatch(setConvertedAmounts());
    };

    const handleFromChange = (event: any) => {
        dispatch(setCurrencyFrom(findCurrencyByKey(currencies, event.target.value)));
        dispatch(updateHomeTitle());
        dispatch(setConvertedAmounts());
    };

    const handleToChange = (event: any) => {
        dispatch(setCurrencyTo(findCurrencyByKey(currencies, event.target.value)));
        dispatch(updateHomeTitle());
        dispatch(setConvertedAmounts());
    };

    const handleSwap = () => {
        dispatch(swapCurrencies());
    };

    return (
        <Card>
            <div className="form">
                {loading ? (
                    <Skeleton
                        rows={3}
                        heigth={22}
                    />
                ) : (
                    <Input
                        id={home.amount.toLocaleLowerCase()}
                        label={home.amount}
                        type="number"
                        value={amount}
                        onChange={handleAmountChange}
                        symbol={from?.symbol}
                    />
                )}
                {loading ? (
                    <Skeleton
                        rows={3}
                        heigth={22}
                    />
                ) : (
                    <Dropdown
                        id={home.from.toLocaleLowerCase()}
                        label={home.from}
                        onChange={handleFromChange}
                        options={currencies}
                        value={from}
                    />
                )}

                {loading ? (
                    <Spinner />
                ) : (
                    <Swap
                        onClick={handleSwap}
                        disabled={loading}
                    />
                )}

                {loading ? (
                    <Skeleton
                        rows={3}
                        heigth={22}
                    />
                ) : (
                    <Dropdown
                        id={home.to.toLocaleLowerCase()}
                        label={home.to}
                        onChange={handleToChange}
                        options={currencies}
                        value={to}
                    />
                )}
            </div>
            <div className="convertion">
                {loading || !from || !to ? (
                    <Skeleton
                        rows={4}
                        heigth={22}
                    />
                ) : (
                    <>
                        <div className="convertion__information">
                            <div className="convertion__byFrom">
                                <Text text={`${amount} ${from?.name} =`} />
                                <Text text={`${convertedAmountFrom} ${to?.name}`} />
                            </div>

                            <Text
                                classes="convertion__byTo"
                                text={`1 ${to?.key} = ${convertedAmountTo} ${from?.key}`}
                            />
                        </div>
                        <div className="convertion__lastUpdated">
                            <Text
                                classes="convertion__caution"
                                text={home.caution}
                            />
                            <Update />
                        </div>
                    </>
                )}
            </div>
        </Card>
    );
};
