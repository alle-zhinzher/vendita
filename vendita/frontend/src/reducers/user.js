import {
    CREATE_NEW_BOOK,
    BOOK_CREATION_FAIL,
    GET_USER_BOOKS,
    DELETE_BOOK,
    NEW_CUSTOMER,
} from '../actions/types.js';

const initialState = {
    customerLoading: false,
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
        case NEW_CUSTOMER:
            return {
                ...state,
                customerLoading: action.payload,
            };
        case DELETE_BOOK:
            return {
                ...state,
                userBooks: state.userBooks.filter(book => book.id !== action.payload)
            };
        case GET_USER_BOOKS:
            return {
                ...state,
                userBooks: action.payload,
                customerLoading: false,
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