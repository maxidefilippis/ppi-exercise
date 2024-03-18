import convert from './assets/convert.svg';
import { Dropdown } from './components/dropdown';
import { Input } from './components/input';
import { LastUpdated } from './components/lastUpdated';

import './App.scss';

function App() {
    return (
        <>
            <header className="header">
                <p className="header__title">Currency exchange</p>
            </header>
            <main className="main">
                <div className="main__title">
                    <h1>100 EUR to USD - Convert Euros to US Dollars</h1>
                </div>
                <div className="convertionCard">
                    <div className="convertionCard__form">
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
                        <button className="convertionCard__swap">
                            <img src={convert} />
                        </button>
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
                            <p className="convertion__byFrom">1.00 Euro = 1.0627478 US Dollars</p>
                            <p className="convertion__byTo">1 USD = 0.941004 EUR</p>
                        </div>
                        <div className="convertion__lastUpdated">
                            <p className="convertion__caution">
                                We use the mid-market rate for our Converter. This is for informational purposes only. You won’t receive this rate
                                when sending money.
                            </p>
                            <LastUpdated />
                        </div>
                    </div>
                </div>
                <footer>
                    <LastUpdated />
                </footer>
            </main>
        </>
    );
}

export default App;
