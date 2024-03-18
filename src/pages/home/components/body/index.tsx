import { Card } from '../../../../components/card';
import { Dropdown } from '../../../../components/dropdown';
import { Input } from '../../../../components/input';
import { Swap } from '../../../../components/swap';
import { Text } from '../../../../components/text';
import { Update } from '../../../../components/update';
import { home } from '../../../../translations/en/home';
import './index.scss';

export const HomeBody = () => {
    return (
        <Card>
            <div className="form">
                <Input
                    id={home.amount.toLocaleLowerCase()}
                    label={home.amount}
                    onChange={() => {}}
                    type="number"
                    value={100}
                    symbol="$"
                />
                <Dropdown
                    id={home.from.toLocaleLowerCase()}
                    label={home.from}
                    onChange={() => {}}
                    options={['Euro', 'Dollar']}
                    value={'Euro'}
                />
                <Swap />
                <Dropdown
                    id={home.to.toLocaleLowerCase()}
                    label={home.to}
                    onChange={() => {}}
                    value={'Dollar'}
                    options={['Euro', 'Dollar']}
                />
            </div>
            <div className="convertion">
                <div className="convertion__information">
                    <div className="convertion__byFrom">
                        <Text text={'1.00 Euro ='} />
                        <Text text={'1.0627478 US Dollars'} />
                    </div>
                    <Text
                        classes="convertion__byTo"
                        text={'1 USD = 0.941004 EUR'}
                    />
                </div>
                <div className="convertion__lastUpdated">
                    <Text
                        classes="convertion__caution"
                        text={home.caution}
                    />
                    <Update />
                </div>
            </div>
        </Card>
    );
};
