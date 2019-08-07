import {
    GET_NEXT_PAGE,
    GET_PREV_PAGE,
    RESET_PAGINATOR,
    JUMP_TO_PAGE,
} from './types';


export const prevPage = (activePage, pageName) => dispatch => {

    activePage--
    if (pageName == "main") {
        dispatch({
            type: GET_NEXT_PAGE,
            payload: activePage
        });
    }
}

export const nextPage = (activePage, pageName) => dispatch => {
    console.log(activePage, pageName)
    activePage++
    if (pageName === "main") {
        dispatch({
            type: GET_PREV_PAGE,
            payload: activePage
        });
    }
}

export const jumpToPage = (pageNumber, pageName) => dispatch => {
    if (pageName == "main") {
        dispatch({
            type: JUMP_TO_PAGE,
            payload: pageNumber
        });
    }
}

export const resetPaginator = (checkSum, pageName) => dispatch => {
    if (pageName == "main") {
        dispatch({
            type: RESET_PAGINATOR,
            payload: {
                activePage: 1,
                checkSum: checkSum
            }
        });
    }
}