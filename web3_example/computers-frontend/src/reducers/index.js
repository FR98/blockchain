import { combineReducers } from 'redux';

import computers from './computers';

const reducer = combineReducers({
    computers,
});

export default reducer;