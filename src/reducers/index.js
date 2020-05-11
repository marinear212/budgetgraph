import { combineReducers } from 'redux';
import { entryReducer, initialAmountReducer } from './EntryReducer';
import { formReducer } from './FormReducer';

export default combineReducers({
    entries: entryReducer,
    initialAmount: initialAmountReducer,
    formValues: formReducer
});