interface ExchangeRates {
    [currency: string]: number;
}

interface ExchangeData {
    date: string;
    base: string;
    rates: ExchangeRates;
}
