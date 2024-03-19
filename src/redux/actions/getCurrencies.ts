import { CurrencyApi } from '../../api/currencyApi';
import { findCurrencyByKey } from '../../components/functions/findCurrencyInArray';
import { parseApiCurrencyListToArray } from '../../components/functions/parseApiCurrencyListToArray';
import { defaultValues } from '../../constants/defaultValues';
import { setAmount, setCurrencies, setCurrencyApiList, setCurrencyFrom, setCurrencyTo, setLoading } from '../reducers/global';
import { AppThunk } from '../store';

const currenciesAPI = new CurrencyApi();

export const getCurrenciesAction = (): AppThunk => async (dispatch) => {
    try {
        dispatch(setLoading(true));

        const response = await currenciesAPI.getCurrencies();
        const currencyArray = parseApiCurrencyListToArray(response);

        dispatch(setCurrencyApiList(response));
        dispatch(setCurrencies(currencyArray));

        dispatch(setCurrencyFrom(findCurrencyByKey(currencyArray, defaultValues.from)));
        dispatch(setCurrencyTo(findCurrencyByKey(currencyArray, defaultValues.to)));
        
        dispatch(setAmount(defaultValues.amount));
    } catch (error: any) {
        console.error(error);
    } finally {
        dispatch(setLoading(false));
    }
};
