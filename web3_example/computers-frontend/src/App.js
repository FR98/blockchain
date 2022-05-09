import './App.css';
import Computer from './Computer';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faComputer } from '@fortawesome/free-solid-svg-icons';

library.add(faComputer);

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Computer />
            </header>
        </div>
    );
}
    
export default App;
    