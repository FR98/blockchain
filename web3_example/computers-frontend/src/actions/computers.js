import * as types from '../types/computers';

export const useComputer = (contract, id) => ({
    type: types.USE_COMPUTER,
    payload: {
        contract,
        id,
    }
});

export const leftComputer = (contract, id) => ({
    type: types.LEFT_COMPUTER,
    payload: {
        contract,
        id,
    },
});

export const retrieveComputerIsAvailableStarted = (contract, id) => ({
    type: types.RETREIVE_COMPUTER_IS_AVAILABLE_STARTED,
    payload: {
        contract,
        id,
    }
});

export const retrieveComputerIsAvailableCompleted = (id, available) => ({
    type: types.RETREIVE_COMPUTER_IS_AVAILABLE_COMPLETED,
    payload: {
        id,
        available,
    }
});

export const retrieveComputerCurrentAddressStarted = id => ({
    type: types.RETREIVE_COMPUTER_CURRENT_ADDRESS_STARTED,
    payload: {
        id,
    },
});

export const retrieveComputerCurrentAddressCompleted = address => ({
    type: types.RETREIVE_COMPUTER_CURRENT_ADDRESS_COMPLETED,
    payload: {
        address,
    },
});
