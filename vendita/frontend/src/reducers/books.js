import {
    GET_BOOKS,
    GET_HOOT_BOOKS,
    GET_BOOKS_BY_GENRES,
    SORT_BOOKS_BY_PRICE,
} from '../actions/types.js';

const initialState = {
    books: [],
    hoot_books: [],
    sorted_books: []
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
                hoot_books: action.payload
            }
        case GET_BOOKS_BY_GENRES:
            return {
                ...state,
                sorted_books: action.payload
            }
        case SORT_BOOKS_BY_PRICE:
            return {
                ...state,
                sorted_books: action.payload
            }

        default:
            return state;
    }
}