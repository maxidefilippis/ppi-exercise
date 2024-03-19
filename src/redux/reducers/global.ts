import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Currency, CurrencyListApi } from '../../models/currency';

interface GlobalState {
    loading: boolean;
    amount?: number;
    from?: Currency;
    to?: Currency;
    currenciesApi: CurrencyListApi;
    currencies: Currency[];
}

const initialState: GlobalState = {
    loading: false,
    currenciesApi: {},
    currencies: [],
};

export const globalSlice = createSlice({
    name: 'global',
    initialState,
    reducers: {
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload;
        },
        setAmount: (state, action: PayloadAction<number>) => {
            if (action.payload >= 0) {
                state.amount = action.payload;
            } else {
                state.amount = 0;
            }
        },
        setCurrencyApiList: (state, action: PayloadAction<CurrencyListApi>) => {
            state.currenciesApi = action.payload;
        },
        setCurrencies: (state, action: PayloadAction<Currency[]>) => {
            state.currencies = action.payload;
        },
        setCurrencyFrom: (state, action: PayloadAction<Currency>) => {
            state.from = action.payload;
        },
        setCurrencyTo: (state, action: PayloadAction<Currency>) => {
            state.to = action.payload;
        },
        swapCurrencies: (state) => {
            const aux = state.from;
            state.from = state.to;
            state.to = aux;
        },
    },
});

export const { setLoading, setAmount, setCurrencyApiList, setCurrencies, setCurrencyFrom, setCurrencyTo, swapCurrencies } = globalSlice.actions;

export default globalSlice.reducer;
