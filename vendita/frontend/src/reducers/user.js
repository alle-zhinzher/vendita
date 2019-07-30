import {
    CREATE_NEW_BOOK,
    BOOK_CREATION_FAIL,
} from '../actions/types.js';

const initialState = {
    errorMsg: {},
    errorStatus: null,
}

export default function (state = initialState, action) {
    switch (action.type) {
        case CREATE_NEW_BOOK:
            return {
                ...state,
                activePage: action.payload
            }
        case BOOK_CREATION_FAIL:
            return {
                ...state,
                ...action.payload,
            };
        default:
            return state;
    }
}