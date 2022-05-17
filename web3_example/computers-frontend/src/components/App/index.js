import './styles.css';
import Web3 from 'web3';
import { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import { configureStore } from '../../store';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faComputer } from '@fortawesome/free-solid-svg-icons';

import Computer from '../Computer';

library.add(faComputer);
const { store, persistor } = configureStore();

let web3 = null;
let computer = null;
const computer_abi = require('../../blockchain/build/contracts/Computer.json').abi;

if (typeof window.ethereum !== 'undefined' && window.ethereum.isMetaMask) {
    console.log('Using MetaMask!');

    web3 = new Web3(window.ethereum);
    web3.eth.getAccounts().then(console.log);
    window.ethereum.request({ method: 'eth_requestAccounts' })

    computer = new web3.eth.Contract(computer_abi);
    computer.options.address = '0xE8b848f0220Ee779172E765675B330f7FcC136Dc'; // Address of the contract
} else {
    console.log('Using localhost!');

    web3 = new Web3("ws://localhost:7545");
    web3.eth.getAccounts().then(console.log);
    // account = '0xBcbE5811817Ce9c7146Ac875535D7195DecE7Eb5';

    computer = new web3.eth.Contract(computer_abi);
    computer.options.address = '0xE8b848f0220Ee779172E765675B330f7FcC136Dc'; // Address of the contract
}

function App() {

    return (
        <div className="App">
            <Provider store={store}>
                <header className="App-header">
                    <h1>Computers</h1>
                    {/* <button onClick={() => {
                        web3 = new Web3(window.ethereum);
                        web3.eth.getAccounts().then(console.log);
                        window.ethereum.request({ method: 'eth_requestAccounts' })
                    }}>Enable Ethereum</button> */}
                    {
                        computer && (
                            <table>
                                <tr>
                                    <td><Computer contract={ computer } id={ 1 } account={ window.ethereum.selectedAddress } /></td>
                                    <td><Computer contract={ computer } id={ 2 } account={ window.ethereum.selectedAddress } /></td>
                                    <td><Computer contract={ computer } id={ 3 } account={ window.ethereum.selectedAddress } /></td>
                                    <td><Computer contract={ computer } id={ 4 } account={ window.ethereum.selectedAddress } /></td>
                                    <td><Computer contract={ computer } id={ 5 } account={ window.ethereum.selectedAddress } /></td>
                                </tr>
                                <tr>
                                    <td><Computer contract={ computer } id={ 6 } account={ window.ethereum.selectedAddress } /></td>
                                    <td><Computer contract={ computer } id={ 7 } account={ window.ethereum.selectedAddress } /></td>
                                    <td><Computer contract={ computer } id={ 8 } account={ window.ethereum.selectedAddress } /></td>
                                    <td><Computer contract={ computer } id={ 9 } account={ window.ethereum.selectedAddress } /></td>
                                    <td><Computer contract={ computer } id={ 10 } account={ window.ethereum.selectedAddress } /></td>
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
