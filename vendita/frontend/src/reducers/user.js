import {
    CREATE_NEW_BOOK,
    BOOK_CREATION_FAIL,
    GET_USER_BOOKS,
} from '../actions/types.js';

const initialState = {
    userBooks: [],
    bookPosted: false,
    errorMsg: {},
    errorStatus: null,
}

export default function (state = initialState, action) {
    switch (action.type) {
        case CREATE_NEW_BOOK:
            return {
                ...state,
                bookPosted: true,
            }
        case GET_USER_BOOKS:
            return {
                ...state,
                userBooks: action.payload,
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