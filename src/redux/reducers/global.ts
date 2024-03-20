import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getUTCDateTime } from '../../functions/getUTCDateTime';
import { Currency } from '../../models/currency';
import { home } from '../../translations/en/home';

interface GlobalState {
    ratesLoading: boolean;
    currencyLoading: boolean;
    homeTitle: string;
    amount?: number;
    convertedAmountTo?: number;
    convertedAmountFrom?: number;
    currencyFrom?: Currency;
    currencyTo?: Currency;
    currencies: Currency[];
    exchangeRates: ExchangeData;
    update?: string;
}

const initialState: GlobalState = {
    ratesLoading: false,
    currencyLoading: false,
    homeTitle: home.title,
    currencies: [],
    exchangeRates: {} as ExchangeData,
};

export const globalSlice = createSlice({
    name: 'global',
    initialState,
    reducers: {
        setRatesLoading: (state, action: PayloadAction<boolean>) => {
            state.ratesLoading = action.payload;
        },
        setCurrencyLoading: (state, action: PayloadAction<boolean>) => {
            state.currencyLoading = action.payload;
        },
        setAmount: (state, action: PayloadAction<number>) => {
            if (!action.payload) state.amount = 0;
            if (action.payload >= 0) {
                state.amount = action.payload;
            } else {
                state.amount = 0;
            }
        },
        setConvertedAmounts: (state) => {
            if (state.amount && state.currencyTo) {
                state.convertedAmountFrom = state.amount * state.exchangeRates.rates[state.currencyTo.key];
            }
            if (state.currencyTo) {
                state.convertedAmountTo = 1 / state.exchangeRates.rates[state.currencyTo.key];
            }
        },
        setCurrencies: (state, action: PayloadAction<Currency[]>) => {
            state.currencies = action.payload;
        },
        setCurrencyFrom: (state, action: PayloadAction<Currency>) => {
            state.currencyFrom = action.payload;
        },
        setCurrencyTo: (state, action: PayloadAction<Currency>) => {
            state.currencyTo = action.payload;
        },
        swapCurrencies: (state) => {
            const aux = state.currencyFrom;
            state.currencyFrom = state.currencyTo;
            state.currencyTo = aux;
        },
        updateHomeTitle: (state) => {
            const amount = state.amount ? (state.amount.toString().length > 10 ? `${state.amount.toString().substring(0, 10)}..` : state.amount) : '';

            state.homeTitle = `${amount} ${state.currencyFrom?.key} to ${state.currencyTo?.key} - Convert ${state.currencyFrom?.name} to ${state.currencyTo?.name}`;
        },
        setExchangeRates: (state, action: PayloadAction<ExchangeData>) => {
            state.exchangeRates = action.payload;
        },
        setUpdatedTime: (state) => {
            state.update = getUTCDateTime();
        },
    },
});

export const {
    setRatesLoading,
    setCurrencyLoading,
    setAmount,
    setCurrencies,
    setCurrencyFrom,
    setCurrencyTo,
    swapCurrencies,
    updateHomeTitle,
    setConvertedAmounts,
    setExchangeRates,
    setUpdatedTime,
} = globalSlice.actions;

export default globalSlice.reducer;
