import convert from './assets/convert.svg';
import { Dropdown } from './components/dropdown';
import { Input } from './components/input';

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
                    <button className="swap">
                        <img src={convert} />
                    </button>
                    <Dropdown
                        id="to"
                        label="To"
                        onChange={() => {}}
                        value={'Dollar'}
                        options={['Euro', 'Dollar']}
                    />
                    <div className="convertionInfo">
                        <p className="convertionByFrom">1.00 Euro = 1.0627478 US Dollars</p>
                        <p className="convertionByTo">1 USD = 0.941004 EUR</p>
                    </div>
                </div>
                <div className="lastUpdatedInformation">
                    <p>
                        <u>Euro</u> to <u>US Dollar</u> conversion — Last updated Dec 15, 2022, 19:17 UTC
                    </p>
                </div>
            </main>
        </>
    );
}

export default App;
