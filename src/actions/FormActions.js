import { 
    SET_INPUT_VALUE,
} from './FormTypes';

export const setInputValue = (name, value) => {
    return {
        type: SET_INPUT_VALUE,
        payload: { name, value }
    }
}