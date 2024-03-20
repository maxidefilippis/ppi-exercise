import { useMemo } from 'react';
import { Update } from '../../../../components/update';
import { useAppSelector } from '../../../../redux/hooks';
import './index.scss';

export const HomeFooter = () => {
    const { currencyLoading, currencyFrom, currencyTo } = useAppSelector((store) => store.global);

    const showFotter = useMemo(() => !currencyLoading && currencyFrom && currencyTo, [currencyLoading, currencyFrom, currencyTo]);
    return (
        showFotter && (
            <div className="footer">
                <Update />
            </div>
        )
    );
};
