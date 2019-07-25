
import {
    GET_NEXT_SLIDE,
    GET_PREV_SLIDE,
} from './types';




export const nextSlide = (activeSlide, maxValue) => dispatch => {
    if (activeSlide === maxValue - 1) {
        activeSlide = -1;
    }
    activeSlide++;
    dispatch({
        type: GET_NEXT_SLIDE,
        payload: activeSlide
    });
}

export const prevSlide = (activeSlide, maxValue) => dispatch => {
    if (activeSlide === 0) {
        activeSlide = maxValue;
    }
    activeSlide--;
    dispatch({
        type: GET_PREV_SLIDE,
        payload: activeSlide
    });
}