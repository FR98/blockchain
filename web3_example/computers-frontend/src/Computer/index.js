import './styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Computer({ contract, id }) {
    let available = contract.methods.retrieve_computer_is_available(id).call().then(console.log);

    const useComputer = async () => {
        await contract.methods.use_computer(id).call();
    }

    return (
        <div className="Computer">
            <FontAwesomeIcon icon="computer" />
            <button onClick={() => useComputer()}>
                <span>{available ? 'Use' : 'Not Available'}</span>
            </button>
        </div>
    );
}
    
export default Computer;
    