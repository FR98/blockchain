import './styles.css';
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import * as actions from '../../actions/computers';


function Computer({ account, contract, id, available, interactComputer, retrieveComputerStatus }) {
    useEffect(retrieveComputerStatus, []);

    return (
        <div className="Computer">
            <FontAwesomeIcon icon="computer" size='5x' color={ available ? '#0039e6' : '#e62e00' } />
            <p>
                <button onClick={ interactComputer }>
                    <span>{ available ? 'Use' : 'Not Available' }</span>
                </button>
            </p>
        </div>
    );
}

export default connect(
    (state, { id }) => ({
        available: state.computers.byId[id].available,
    }),
    dispatch => ({
        useComputer(account, contract, id) {
            dispatch(actions.useComputer(account, contract, id));
        },
        leftComputer(account, contract, id) {
            dispatch(actions.leftComputer(account, contract, id));
        },
        retrieveComputerStatus(contract, id) {
            dispatch(actions.retrieveComputerIsAvailableStarted(contract, id));
        }
    }),
    (stateProps, dispatchProps, ownProps) => ({
        ...ownProps,
        ...stateProps,
        ...dispatchProps,
        interactComputer() {
            if (stateProps.available) {
                dispatchProps.useComputer(ownProps.account, ownProps.contract, ownProps.id);
            } else {
                dispatchProps.leftComputer(ownProps.account, ownProps.contract, ownProps.id);
            }
        },
        retrieveComputerStatus() {
            dispatchProps.retrieveComputerStatus(ownProps.contract, ownProps.id);
        },
      }),
)(Computer);
