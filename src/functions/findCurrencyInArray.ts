import { Currency } from '../models/currency';

export const findCurrencyByKey = (currencyArray: Currency[], keyToFind: string) => {
    const currencyFrom = currencyArray.find((currency) => currency.key === keyToFind);

    if (currencyFrom?.key) {
        return currencyFrom;
    } else {
        return currencyArray[0];
    }
};
