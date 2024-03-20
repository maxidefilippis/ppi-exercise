import { useAppSelector } from '../../redux/hooks';
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
                    heigth={12}
                    width={285}
                />
            ) : (
                <p>
                    <CurrencyLink currency={currencyFrom} />
                    to
                    <CurrencyLink currency={currencyTo} />
                    conversion — {update}
                </p>
            )}
        </div>
    );
};
