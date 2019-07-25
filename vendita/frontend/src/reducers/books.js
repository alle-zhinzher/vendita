import {
    GET_BOOKS,
    GET_HOOT_BOOKS,
    GET_BOOKS_BY_GENRES,
    GET_ALL_BOOKS,
    SORT_BOOKS_BY_PRICE,
    SORT_BOOKS_BY_PAGES,
    SEARCH_BOOKS,
} from '../actions/types.js';

const initialState = {
    books: [],
    hootBooks: [],
    sortedBooks: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_BOOKS:
            return {
                ...state,
                books: action.payload
            }
        case GET_HOOT_BOOKS:
            return {
                ...state,
                hootBooks: action.payload
            }
        case GET_ALL_BOOKS:
            return {
                ...state,
                sortedBooks: action.payload
            }
        case GET_BOOKS_BY_GENRES:
            return {
                ...state,
                sortedBooks: action.payload
            }
        case SORT_BOOKS_BY_PRICE:
            return {
                ...state,
                sortedBooks: action.payload
            }
        case SORT_BOOKS_BY_PAGES:
            return {
                ...state,
                sortedBooks: action.payload
            }
        case SEARCH_BOOKS:
            return {
                ...state,
                sortedBooks: action.payload
            }
        default:
            return state;
    }
}