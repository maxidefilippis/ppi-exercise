import { CurrencyApi } from '../../api/currencyApi';
import { defaultValues } from '../../constants/defaultValues';
import { findCurrencyByKey } from '../../functions/findCurrencyInArray';
import { parseApiCurrencyListToArray } from '../../functions/parseApiCurrencyListToArray';
import { setAmount, setCurrencies, setCurrencyFrom, setCurrencyLoading, setCurrencyTo } from '../reducers/global';
import { AppThunk } from '../store';

const currenciesAPI = new CurrencyApi();

export const getCurrenciesAction = (): AppThunk => async (dispatch) => {
    try {
        dispatch(setCurrencyLoading(true));

        const response = await currenciesAPI.getCurrencies();
        const currencyArray = parseApiCurrencyListToArray(response);

        dispatch(setCurrencies(currencyArray));

        dispatch(setCurrencyFrom(findCurrencyByKey(currencyArray, defaultValues.from)));
        dispatch(setCurrencyTo(findCurrencyByKey(currencyArray, defaultValues.to)));
        dispatch(setAmount(defaultValues.amount));
    } catch (error: any) {
        console.error(error);
    } finally {
        dispatch(setCurrencyLoading(false));
    }
};
