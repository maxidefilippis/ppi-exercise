import { ApiMethods } from '../models/apiMethods';
import { CurrencyListApi } from '../models/currency';
import { apiConnect } from '../services/apiClient';

export class CurrencyApi {
    async getCurrencies(): Promise<CurrencyListApi> {
        let url = `https://api.vatcomply.com/currencies`;
        return await apiConnect(url, ApiMethods.GET);
    }
    async getRatesByBase(base: string): Promise<any> {
        let url = `https://api.vatcomply.com/rates?base=${base}`;
        return await apiConnect(url, ApiMethods.GET);
    }
}
