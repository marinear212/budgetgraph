import { 
    SET_INPUT_VALUE,
    SET_PATTERN_VALUE,
    SET_TOGGLE_VALUE,
    RESET_FORM,
    RESET_PATTERN,
} from '../actions/FormTypes';

export const formReducer = (state = { type: 'Income', description: '', amount: '', patternFrequency: '1', patternType: 'Never', patternDescription: {} }, action) => {
    switch (action.type) {
        case SET_INPUT_VALUE:
            return {
                ...state, 
                [action.payload.name]: action.payload.value
            }
        case SET_PATTERN_VALUE:
            console.log(action.payload);

            const updatedPatternDescriptionDate = {
                ...state.patternDescription, 
                [action.payload.valueType]: action.payload.value
            }

            return {
                ...state, 
                patternDescription: updatedPatternDescriptionDate
            }
        case SET_TOGGLE_VALUE:
            const updatedButtonType = {
                ...state.patternDescription[action.payload.buttonType],
                [action.payload.buttonValue]: action.payload.toggleValue
            }

            const updatedPatternDescriptionButton = {
                ...state.patternDescription,
                [action.payload.buttonType]: updatedButtonType
            }

            return {
                ...state, 
                patternDescription: updatedPatternDescriptionButton
            }
        case RESET_FORM:
            return {
                ...state,
                description: '',
                amount: '',
                patternFrequency: '1',
                patternType: 'Never',
                patternDescription: {}
            }
        case RESET_PATTERN:
            const dateNow = new Date(); 
            const day = ('0' + dateNow.getDate().toString()).slice(-2);
            const month = ('0' + (dateNow.getMonth() + 1)).toString().slice(-2)
            const year = dateNow.getFullYear()
            const resetPattern = state.patternType === 'Never'
                ? { endDate: `${year}-${month}-${day}` }
                : { endDate: `${year}-${month}-${day}`,
                    startDate: `${year}-${month}-${day}` };

            return {
                ...state,
                patternDescription: resetPattern
            }
        default:
            return state;        
    }
}