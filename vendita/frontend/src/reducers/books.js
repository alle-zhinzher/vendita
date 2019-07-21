import { GET_BOOKS } from '../actions/types.js';

const initialState = {
    books: [],
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_BOOKS:
            return {
                ...state,
                books: action.payload
            }
        default:
            return state;
    }
}