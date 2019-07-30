import axios from "axios";
import { tokenConfig } from "./auth";
import {
    CREATE_NEW_BOOK,
    BOOK_CREATION_FAIL,
    GET_USER_BOOKS,
} from "./types";




// GET USER BOOKS

export const getUserBooks = () => (dispatch, getState) => {
    axios
        .get("/api/books/", tokenConfig(getState))
        .then(res => {
            dispatch({
                type: GET_USER_BOOKS,
                payload: res.data
            });
        })
        .catch(err => {
            dispatch({
                type: BOOK_CREATION_FAIL,
                payload: {
                    'errorMsg': err.response.data,
                    'errorStatus': err.response.status,
                }
            });
        });
};

export const createBook = book => (dispatch, getState) => {
    axios
        .post("/api/books/", book, tokenConfig(getState))
        .then(res => {
            dispatch({
                type: CREATE_NEW_BOOK,
                payload: res.data
            });
        })
        .catch(err => {
            dispatch({
                type: BOOK_CREATION_FAIL,
                payload: {
                    'errorMsg': err.response.data,
                    'errorStatus': err.response.status,
                }
            });
        });
};