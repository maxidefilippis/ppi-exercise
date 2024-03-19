import { Currency, CurrencyListApi } from '../../models/currency';

export function parseApiCurrencyListToArray(currencyListApi: CurrencyListApi): Currency[] {
    const currencyArray: Currency[] = [];

    for (const key in currencyListApi) {
        if (currencyListApi.hasOwnProperty(key)) {
            const currency: Currency = {
                ...currencyListApi[key],
                key: key,
            };
            currencyArray.push(currency);
        }
    }

    return currencyArray;
}
