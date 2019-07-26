import {
    GET_NEXT_SLIDE,
    GET_PREV_SLIDE,
} from '../actions/types.js';

const initialState = {
    activeSlide: 0
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_NEXT_SLIDE:
            console.log(action.payload)
            return {
                ...state,
                activeSlide: action.payload
            }
        case GET_PREV_SLIDE:
            return {
                ...state,
                activeSlide: action.payload
            }
        default:
            return state;
    }
}