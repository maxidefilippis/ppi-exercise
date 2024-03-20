import { useMemo } from 'react';
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
    const { amount, convertedAmountFrom, convertedAmountTo, currencyFrom, currencyTo, currencies, currencyLoading, ratesLoading, exchangeRates } =
        useAppSelector((store) => store.global);

    const currencyOptions = useMemo(
        () => currencies.filter((currency) => exchangeRates?.rates?.hasOwnProperty(currency.key)),
        [currencies, exchangeRates],
    );

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
        dispatch(updateHomeTitle());
    };

    return (
        <Card>
            {currencyLoading ? (
                <Skeleton
                    rows={10}
                    heigth={20}
                />
            ) : (
                <>
                    <div className="form">
                        <Input
                            id={home.labelAmount.toLocaleLowerCase()}
                            label={home.labelAmount}
                            type="number"
                            value={amount}
                            onChange={handleAmountChange}
                            symbol={currencyFrom?.symbol}
                        />

                        <Dropdown
                            id={home.labelFrom.toLocaleLowerCase()}
                            label={home.labelFrom}
                            onChange={handleFromChange}
                            options={currencyOptions}
                            value={currencyFrom}
                        />
                        {ratesLoading ? (
                            <Spinner />
                        ) : (
                            <Swap
                                onClick={handleSwap}
                                disabled={ratesLoading}
                            />
                        )}

                        <Dropdown
                            id={home.labelTo.toLocaleLowerCase()}
                            label={home.labelTo}
                            onChange={handleToChange}
                            options={currencyOptions}
                            value={currencyTo}
                        />
                    </div>
                    <div className="convertion">
                        {!amount ? <div className="convertion__information" /> : null}
                        {amount ? (
                            <div className="convertion__information">
                                {ratesLoading ? (
                                    <Skeleton
                                        rows={4}
                                        heigth={20}
                                    />
                                ) : (
                                    <>
                                        <div className="convertion__byFrom">
                                            <Text text={`${amount} ${currencyFrom?.name} =`} />
                                            <Text text={`${convertedAmountFrom?.toFixed(2)} ${currencyTo?.name}`} />
                                        </div>

                                        <Text
                                            classes="convertion__byTo"
                                            text={`1 ${currencyTo?.key} = ${convertedAmountTo?.toFixed(2)} ${currencyFrom?.key}`}
                                        />
                                    </>
                                )}
                            </div>
                        ) : null}

                        <div className="convertion__lastUpdated">
                            <Text
                                classes="convertion__caution"
                                text={home.caution}
                            />
                            <Update />
                        </div>
                    </div>
                </>
            )}
        </Card>
    );
};
