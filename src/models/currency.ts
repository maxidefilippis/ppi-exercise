export interface CurrencyApi {
    name: string;
    symbol: string;
}

export interface CurrencyListApi {
    [key: string]: Currency;
}

export interface Currency extends CurrencyApi {
    key: string;
}