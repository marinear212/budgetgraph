import { 
    SET_INPUT_VALUE,
} from '../actions/FormTypes';

export const formReducer = (state = { description: '', amount: '', patternFrequency: '1', patternType: 'Never' }, action) => {
    switch (action.type) {
        case SET_INPUT_VALUE:
            return {
                ...state, [action.payload.name]: action.payload.value
            }
        default:
            return state;        
    }
}