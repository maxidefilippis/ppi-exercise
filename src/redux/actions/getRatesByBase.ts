import { CurrencyApi } from '../../api/currencyApi';
import { setConvertedAmounts, setExchangeRates, setLoading } from '../reducers/global';
import { AppThunk } from '../store';

const currenciesAPI = new CurrencyApi();

export const getRatesByBaseAction =
    (from: string): AppThunk =>
    async (dispatch) => {
        try {
            dispatch(setLoading(true));
            const response = await currenciesAPI.getRatesByBase(from);
            dispatch(setExchangeRates(response));
            dispatch(setConvertedAmounts());
        } catch (error: any) {
            console.error(error);
        } finally {
            dispatch(setLoading(false));
        }
    };
