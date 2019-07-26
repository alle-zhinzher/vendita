import {
    GET_NEXT_PAGE,
    GET_PREV_PAGE,
    SET_PAGINATOR,
    RESET_PAGINATOR,
    JUMP_TO_PAGE,
} from '../actions/types.js';

const initialState = {
    activePage: 1,
    checkSum: 0,
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_NEXT_PAGE:
            return {
                ...state,
                activePage: action.payload
            }
        case GET_PREV_PAGE:
            return {
                ...state,
                activePage: action.payload
            }
        case JUMP_TO_PAGE:
            return {
                ...state,
                activePage: action.payload
            }
        case RESET_PAGINATOR:
            return {
                ...state,
                activePage: action.payload.activePage,
                checkSum: action.payload.checkSum,
            }
        default:
            return state;
    }
}