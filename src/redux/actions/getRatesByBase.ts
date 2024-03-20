import { CurrencyApi } from '../../api/currencyApi';
import { setConvertedAmounts, setExchangeRates, setRatesLoading, setUpdatedTime } from '../reducers/global';
import { AppThunk } from '../store';

const currenciesAPI = new CurrencyApi();

export const getRatesByBaseAction =
    (from: string): AppThunk =>
    async (dispatch) => {
        try {
            dispatch(setRatesLoading(true));
            const response = await currenciesAPI.getRatesByBase(from);
            dispatch(setExchangeRates(response));
            dispatch(setConvertedAmounts());
            dispatch(setUpdatedTime());
        } catch (error: any) {
            console.error(error);
        } finally {
            dispatch(setRatesLoading(false));
        }
    };
