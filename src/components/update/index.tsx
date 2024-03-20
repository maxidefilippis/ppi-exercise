import { useAppSelector } from '../../redux/hooks';
import { home } from '../../translations/en/home';
import { CurrencyLink } from '../currencyLink';
import { Skeleton } from '../skeleton';
import './index.scss';

export const Update: React.FC = () => {
    const { update, currencyFrom, currencyTo, ratesLoading } = useAppSelector((store) => store.global);

    return (
        <div className="update">
            {ratesLoading ? (
                <Skeleton
                    rows={1}
                    heigth={20}
                    width={500}
                />
            ) : (
                <p>
                    <CurrencyLink currency={currencyFrom} />
                    {home.to}
                    <CurrencyLink currency={currencyTo} />
                    {home.conversion} — {update}
                </p>
            )}
        </div>
    );
};
