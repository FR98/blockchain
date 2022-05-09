import './styles.css';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function Computer({ contract, id, useComputer }) {
    let available = contract.methods.retrieve_computer_is_available(id).call().then(console.log);

    return (
        <div className="Computer">
            <FontAwesomeIcon icon="computer" />
            <button onClick={ useComputer }>
                <span>{available ? 'Use' : 'Not Available'}</span>
            </button>
        </div>
    );
}

export default connect(
    state => ({}),
    dispatch => ({
        useComputer(contract, id) {
            contract.methods.use_computer(id).call().then(console.log);
        }
    }),
    (stateProps, dispatchProps, ownProps) => ({
        ...ownProps,
        ...stateProps,
        ...dispatchProps,
        useComputer() {
          dispatchProps.useComputer(ownProps.contract, ownProps.id);
        },
      }),
)(Computer);
