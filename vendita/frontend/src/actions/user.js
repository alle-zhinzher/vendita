import axios from "axios";
import { tokenConfig } from "./auth";
import {
    CREATE_NEW_BOOK,
    BOOK_CREATION_FAIL,
    GET_USER_BOOKS,
    DELETE_BOOK,
    NEW_CUSTOMER,
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

//DELETE USER BOOOK
export const deleteBook = id => (dispatch, getState) => {
    axios
        .delete(`/api/books/${id}/`, tokenConfig(getState))
        .then(res => {
            dispatch({
                type: DELETE_BOOK,
                payload: id
            });
        })
        .catch(err => console.log(err));
};

//NEW CUSTOMER
export const newCustomer = (id, customerID, date, customer_price) => (dispatch, getState) => {
    const data = {
        "created_at": date,
        "customer": customerID,
        "customer_price": customer_price
    };
    axios
        .put(`/api/books/${id}/`, data)
        .then(res => {
            dispatch({
                type: NEW_CUSTOMER,
                payload: true
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

