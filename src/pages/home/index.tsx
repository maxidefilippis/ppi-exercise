import { Card } from '../../components/card';
import { Dropdown } from '../../components/dropdown';
import { Input } from '../../components/input';
import { Swap } from '../../components/swap';
import { Text } from '../../components/text';
import { Title } from '../../components/title';
import { Update } from '../../components/update';

import './index.scss';

export const Home = () => {
    return (
        <>
            <HomeTitle />
            <HomeBody />
            <HomeFooter />
        </>
    );
};

const HomeTitle = () => {
    return (
        <div className="main__title">
            <Title text="100 EUR to USD - Convert Euros to US Dollars" />
        </div>
    );
};

const HomeBody = () => {
    return (
        <Card>
            <div className="form">
                <Input
                    id="amount"
                    label="Amount"
                    onChange={() => {}}
                    placeholder=""
                    type="number"
                    value={100}
                />
                <Dropdown
                    id="from"
                    label="From"
                    onChange={() => {}}
                    value={'Euro'}
                    options={['Euro', 'Dollar']}
                />
                <Swap />
                <Dropdown
                    id="to"
                    label="To"
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
                        text={
                            'We use the mid-market rate for our Converter. This is for informational purposes only. You won’t receive this rate when sending money.'
                        }
                    />
                    <Update />
                </div>
            </div>
        </Card>
    );
};

const HomeFooter = () => {
    return (
        <div className="footer">
            <Update />
        </div>
    );
};
