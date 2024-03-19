import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Currency, CurrencyListApi } from '../../models/currency';
import { home } from '../../translations/en/home';

interface GlobalState {
    loading: boolean;
    homeTitle: string;
    amount?: number;
    convertedAmountTo?: number;
    convertedAmountFrom?: number;
    from?: Currency;
    to?: Currency;
    currenciesApi: CurrencyListApi;
    currencies: Currency[];
    exchangeRates: ExchangeData;
}

const initialState: GlobalState = {
    loading: false,
    homeTitle: home.title,
    currenciesApi: {},
    currencies: [],
    exchangeRates: {} as ExchangeData,
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
        setConvertedAmounts: (state) => {
            if (state.amount && state.to) {
                state.convertedAmountFrom = state.amount * state.exchangeRates.rates[state.to.key];
            }
            if (state.to) {
                state.convertedAmountTo = 1 / state.exchangeRates.rates[state.to.key];
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
        updateHomeTitle: (state) => {
            state.homeTitle = `${state.amount} ${state.from?.key} to ${state.to?.key} - Convert ${state.from?.name} to ${state.to?.name}`;
        },
        setExchangeRates: (state, action: PayloadAction<ExchangeData>) => {
            state.exchangeRates = action.payload;
        },
    },
});

export const {
    setLoading,
    setAmount,
    setCurrencyApiList,
    setCurrencies,
    setCurrencyFrom,
    setCurrencyTo,
    swapCurrencies,
    updateHomeTitle,
    setConvertedAmounts,
    setExchangeRates,
} = globalSlice.actions;

export default globalSlice.reducer;
