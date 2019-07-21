import { GET_BOOKS, GET_HOOT_BOOKS } from '../actions/types.js';

const initialState = {
    books: [],
    hoot_books: [],
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
        default:
            return state;
    }
}