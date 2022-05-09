import './App.css';
import Computer from './Computer';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faComputer } from '@fortawesome/free-solid-svg-icons';
import Web3 from 'web3';

library.add(faComputer);
const web3 = new Web3("ws://localhost:7545");
web3.eth.getAccounts().then(console.log);

const computer_abi = require('./blockchain/build/contracts/Computer.json').abi;
const computer = new web3.eth.Contract(computer_abi);
computer.options.address = '0xA48791F4E652A7c0eb06763388BC91759E9e54cC';


function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Computer contract={computer} id={1} />
                <Computer contract={computer} id={2} />
            </header>
        </div>
    );
}
    
export default App;
    