import {
    call,
    takeEvery,
    put,
    // race,
    // all,
    // delay,
    select,
} from 'redux-saga/effects';

// import * as selectors from '../reducers';
import * as actions from '../actions/computers';
import * as types from '../types/computers';


function* useComputer(action) {
    const result = yield action.payload.contract.methods.use_computer(action.payload.id).send({ from: action.payload.account, gas: 50000, gasPrice: 1e6 });;
    console.log('result', result);
    yield put(actions.retrieveComputerIsAvailableStarted(action.payload.contract, action.payload.id));
}
    
export function* watchUseComputer() {
    yield takeEvery(
        types.USE_COMPUTER,
        useComputer,
    );
}



function* leftComputer(action) {
    const result = yield action.payload.contract.methods.left_computer(action.payload.id).send({ from: action.payload.account, gas: 50000, gasPrice: 1e6 });;
    console.log('result', result);
    yield put(actions.retrieveComputerIsAvailableStarted(action.payload.contract, action.payload.id));
}
    
export function* watchLeftComputer() {
    yield takeEvery(
        types.LEFT_COMPUTER,
        leftComputer,
    );
}



function* retrieveComputerStatus(action) {
    const result = yield action.payload.contract.methods.retrieve_computer_is_available(action.payload.id).call();
    yield put(actions.retrieveComputerIsAvailableCompleted(action.payload.id, result));
}
    
export function* watchRetrieveComputerStatus() {
    yield takeEvery(
        types.RETREIVE_COMPUTER_IS_AVAILABLE_STARTED,
        retrieveComputerStatus,
    );
}