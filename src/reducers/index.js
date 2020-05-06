import { combineReducers } from 'redux';

const entryReducer = (state = [], action) => {
    switch (action.type) {
        case 'CREATE_ENTRY':
            return [
                ...state, { 
                    id: !state.length ? 0 : state[state.length - 1].id + 1,
                    amount: action.payload.amount,
                    recurringDate: action.payload.recurringDate
                }                          
            ];
        case 'EDIT_ENTRY':
            return state.map((entry) => {
                if (entry.id === action.payload.id) {                    
                    return action.payload;
                };
                return entry;
            });
        case 'DELETE_ENTRY':
            return state.filter(entry => entry.id !== action.payload);
        default:
            return state;
    };
}

const initialAmountReducer = (state = 0, action) => {
    switch (action.type) {
        case 'SET_INITIAL_AMOUNT':
            return action.payload;
        default:
            return state;
    };
}

export default combineReducers({
    entries: entryReducer,
    initialAmount: initialAmountReducer
});