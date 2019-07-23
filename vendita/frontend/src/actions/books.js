import axios from 'axios';

import {
    GET_BOOKS,
    GET_HOOT_BOOKS,
    GET_BOOKS_BY_GENRES,
    SORT_BOOKS_BY_PRICE,
    SORT_BOOKS_BY_PAGES,
} from './types';


// GET BOOKS
export const getBooks = () => dispatch => {
    axios.get("/api/books/")
        .then(res => {
            dispatch({
                type: GET_BOOKS,
                payload: res.data
            });
        })
        .catch(err => console.log(err));
}

// GET HOOT BOOKS
export const getHootBooks = () => dispatch => {
    axios.get("/api/books/")
        .then(res => {
            dispatch({
                type: GET_HOOT_BOOKS,
                payload: res.data.filter(book => book.is_hot_price)
            });
        })
        .catch(err => console.log(err));
}

// GET BOOKS BY GENRE
export const getBooksByGenre = (genre) => dispatch => {
    axios.get("/api/books/")
        .then(res => {
            dispatch({
                type: GET_BOOKS_BY_GENRES,
                payload: res.data.filter(book => book.genre === genre)
            });
        })
        .catch(err => console.log(err));
}

// SORT BOOKS BY PRICE
export const sortBooksByPrice = (books, reverse) => dispatch => {
    let res = books.sort((book1, book2) => book1.cost - book2.cost)
    dispatch({
        type: SORT_BOOKS_BY_PRICE,
        payload: reverse ? res.reverse() : res
    });
}

// SORT BOOKS BY PAGES
export const sortBooksByPages = (books, reverse) => dispatch => {
    let res = books.sort((book1, book2) => book1.pages - book2.pages)
    dispatch({
        type: SORT_BOOKS_BY_PAGES,
        payload: reverse ? res.reverse() : res
    });
}