import axios from "axios";
import { tokenConfig } from "./auth";
import {
    CREATE_NEW_BOOK,
    BOOK_CREATION_FAIL,
    GET_USER_BOOKS,
    DELETE_BOOK,
    NEW_CUSTOMER,
    CUSTOMER_BOOKS,
    PURCASED_BOOKS,
    APPROVE_SALE,
    USER_SOLD_BOOKS,
    CENCEL_PURCHASE,
} from "./types";




// GET USER BOOKS
export const getUserBooks = () => (dispatch, getState) => {
    axios
        .get("/api/books/", tokenConfig(getState))
        .then(res => {
            dispatch({
                type: GET_USER_BOOKS,
                payload: res.data.filter(book => book.is_sold_out === false)
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

// GET USER BOOKS IN BASKET
export const getUserBooksInBasket = (customerID) => dispatch => {
    axios.get("/api/books/")
        .then(res => {
            dispatch({
                type: CUSTOMER_BOOKS,
                payload: res.data.filter(book =>
                    book.customer === customerID &
                    book.is_sold_out === false)
            });
        })
        .catch(err => console.log(err));
}

// GET USER PURCHASED BOOKS
export const getPurchasedUserBooks = (customerID) => dispatch => {
    axios.get("/api/books/")
        .then(res => {
            dispatch({
                type: PURCASED_BOOKS,
                payload: res.data.filter(book =>
                    book.customer === customerID &
                    book.is_sold_out === true
                )
            });
        })
        .catch(err => console.log(err));
}


// GET USER SOLD BOOKS
export const getUserSoldBooks = (userID) => dispatch => {
    axios.get("/api/books/")
        .then(res => {
            dispatch({
                type: USER_SOLD_BOOKS,
                payload: res.data.filter(book =>
                    book.owner === userID &
                    book.is_sold_out === true
                )
            });
        })
        .catch(err => console.log(err));
}


//CREATE NEW BOOK
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

//APPROVE SALE
export const approveTheSale = (bookID, date) => (dispatch) => {
    const data = {
        "created_at": date,
        "is_sold_out": true,
    };
    axios
        .put(`/api/books/${bookID}/`, data)
        .then(res => {
            dispatch({
                type: APPROVE_SALE,
                payload: bookID
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

//CENCEL_PURCHASE
export const cencelUserPurchase = (bookID, date) => (dispatch) => {
    const data = {
        "created_at": date,
        "customer": null,
        "customer_price": 0
    };
    axios
        .put(`/api/books/${bookID}/`, data)
        .then(res => {
            dispatch({
                type: CENCEL_PURCHASE,
                payload: bookID
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