import {
    GET_NEXT_PAGE,
    GET_PREV_PAGE,
    RESET_PAGINATOR,
    JUMP_TO_PAGE,
} from './types';


export const prevPage = (activePage) => dispatch => {
    activePage--
    dispatch({
        type: GET_NEXT_PAGE,
        payload: activePage
    });
}

export const nextPage = (activePage) => dispatch => {
    activePage++
    dispatch({
        type: GET_PREV_PAGE,
        payload: activePage
    });
}

export const jumpToPage = (pageNumber) => dispatch => {
    dispatch({
        type: JUMP_TO_PAGE,
        payload: pageNumber
    });
}

export const resetPaginator = (checkSum) => dispatch => {
    dispatch({
        type: RESET_PAGINATOR,
        payload: {
            activePage: 1,
            checkSum: checkSum
        }
    });
}