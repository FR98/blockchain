import { combineReducers } from 'redux';
import * as types from '../types/computers';

const byId = (state = {}, action) => {
    switch(action.type) {
        case types.RETREIVE_COMPUTER_IS_AVAILABLE_COMPLETED: {
            const { id, available } = action.payload;
            return {
                ...state,
                [id]: {
                    ...state[id],
                    available,
                },
            }
        }
        default: {
            return state;
        }
    }
};


export default combineReducers({
    byId,
});
