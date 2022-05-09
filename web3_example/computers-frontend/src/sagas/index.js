import { fork, all } from 'redux-saga/effects';

import {
    watchUseComputer,
    watchRetrieveComputerStatus,
    watchLeftComputer,
} from './computers';

function* mainSaga() {
    yield all([
        fork(watchUseComputer),
        fork(watchRetrieveComputerStatus),
        fork(watchLeftComputer),
    ]);
}

export default mainSaga;