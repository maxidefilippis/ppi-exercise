import { Currency } from '../../models/currency';
import './index.scss';

interface LinkToCurrencyProps {
    currency?: Currency;
}
export const CurrencyLink: React.FC<LinkToCurrencyProps> = ({ currency }) => {
    const link = 'https://www.xe.com/currency';
    return currency ? (
        <a
            className="currencyLink"
            target="_blank"
            rel="noopener noreferrer"
            href={`${link}/${currency.key.toLocaleLowerCase()}-${currency.name.replace(/\s+/g, '-').toLocaleLowerCase()}`}
        >
            {currency.name}
        </a>
    ) : null;
};
