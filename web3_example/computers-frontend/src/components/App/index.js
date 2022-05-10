import './styles.css';
import Web3 from 'web3';
import { Provider } from 'react-redux';
import { configureStore } from '../../store';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faComputer } from '@fortawesome/free-solid-svg-icons';

import Computer from '../Computer';

library.add(faComputer);
const { store, persistor } = configureStore();

let web3 = null;
let myAccount = null;
let computer = null;
const computer_abi = require('../../blockchain/build/contracts/Computer.json').abi;


if (typeof window.ethereum !== 'undefined' && window.ethereum.isMetaMask) {
    console.log('Using MetaMask!');

    web3 = new Web3(window.ethereum);
    web3.eth.getAccounts().then(console.log);
    myAccount = window.ethereum.selectedAddress;

    computer = new web3.eth.Contract(computer_abi);
    computer.options.address = '0x2A1c873b303242618406978F6FAf7241e02ab44f';
} else {
    console.log('Using localhost!');

    web3 = new Web3("ws://localhost:7545");
    web3.eth.getAccounts().then(console.log);
    myAccount = '0xBcbE5811817Ce9c7146Ac875535D7195DecE7Eb5';

    computer = new web3.eth.Contract(computer_abi);
    computer.options.address = '0x2A1c873b303242618406978F6FAf7241e02ab44f';
}

function App() {
    return (
        <div className="App">
            <Provider store={store}>
                <header className="App-header">
                    <h1>Computers</h1>
                    <button onClick={() => {
                        window.ethereum.request({ method: 'eth_requestAccounts' })
                    }}>Enable Ethereum</button>
                    {
                        computer && (
                            <table>
                                <tr>
                                    <td><Computer contract={ computer } id={ 1 } account={ myAccount } /></td>
                                    <td><Computer contract={ computer } id={ 2 } account={ myAccount } /></td>
                                    <td><Computer contract={ computer } id={ 3 } account={ myAccount } /></td>
                                    <td><Computer contract={ computer } id={ 4 } account={ myAccount } /></td>
                                    <td><Computer contract={ computer } id={ 5 } account={ myAccount } /></td>
                                </tr>
                                <tr>
                                    <td><Computer contract={ computer } id={ 6 } account={ myAccount } /></td>
                                    <td><Computer contract={ computer } id={ 7 } account={ myAccount } /></td>
                                    <td><Computer contract={ computer } id={ 8 } account={ myAccount } /></td>
                                    <td><Computer contract={ computer } id={ 9 } account={ myAccount } /></td>
                                    <td><Computer contract={ computer } id={ 10 } account={ myAccount } /></td>
                                </tr>
                            </table>
                        )
                    }
                </header>
            </Provider>
        </div>
    );
}

export default App;
