import { 
    SET_INPUT_VALUE,
    SET_PATTERN_VALUE,
    SET_TOGGLE_VALUE,
    RESET_FORM,
    RESET_PATTERN,
} from './FormTypes';

export const setInputValue = (name, value) => {
    return {
        type: SET_INPUT_VALUE,
        payload: { name, value }
    }
}

export const setPatternValue = (valueType, value) => {
    return {
        type: SET_PATTERN_VALUE,
        payload: {
            valueType, value
        }
    }
}

export const setToggleValue = (buttonType, buttonValue, toggleValue) => {
    return {
        type: SET_TOGGLE_VALUE,
        payload: {
            buttonType, buttonValue, toggleValue
        }
    }
}

export const resetForm = () => {
    return {
        type: RESET_FORM,
        payload: null
    }
}

export const resetPattern = () => {
    return {
        type: RESET_PATTERN,
        payload: null
    }
}