import {
    GET_BOOKS,
    GET_HOOT_BOOKS,
    GET_BOOK_BY_ID,
    GET_BOOKS_BY_GENRES,
    GET_ALL_BOOKS,
    SORT_BOOKS_BY_PRICE,
    SORT_BOOKS_BY_PAGES,
    SEARCH_BOOKS,
} from '../actions/types.js';

const initialState = {
    books: [],
    hootBooks: [],
    sortedBooks: [],
    currentBook: [],
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_BOOKS:
            return {
                ...state,
                books: action.payload
            }
        case GET_BOOK_BY_ID:
            return {
                ...state,
                currentBook: action.payload
            }
        case GET_HOOT_BOOKS:
            return {
                ...state,
                hootBooks: action.payload
            }
        case GET_ALL_BOOKS:
        case GET_BOOKS_BY_GENRES:
        case SORT_BOOKS_BY_PRICE:
        case SORT_BOOKS_BY_PAGES:
        case SEARCH_BOOKS:
            return {
                ...state,
                sortedBooks: action.payload
            }
        default:
            return state;
    }
}