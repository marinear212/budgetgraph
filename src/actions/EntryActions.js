import { 
    SET_INITIAL_AMOUNT,
    CREATE_ENTRY,
    EDIT_ENTRY,
    DELETE_ENTRY
} from './EntryTypes';

export const setInitialAmount = (amount) => {
    return {
        type: SET_INITIAL_AMOUNT,
        payload: amount
    }
}

export const createEntry = (amount, recurringDate) => {
    return {
        type: CREATE_ENTRY,
        payload: { 
            amount, 
            recurringDate 
        }
    }
}

export const editEntry = (id, amount, recurringDate) => {
    return {
        type: EDIT_ENTRY,
        payload: {
            id,
            amount,
            recurringDate
        }
    }
}

export const deleteEntry = (id) => {
    return {
        type: DELETE_ENTRY,
        payload: id
    }
}