import axios from 'axios';

import {
    GET_BOOKS,
    GET_BOOK_BY_ID,
    GET_HOOT_BOOKS,
    GET_BOOKS_BY_GENRES,
    GET_ALL_BOOKS,
    SORT_BOOKS_BY_PRICE,
    SORT_BOOKS_BY_PAGES,
    SEARCH_BOOKS,
} from './types';


// GET BOOKS
export const getBooks = () => dispatch => {
    axios.get("/api/books/")
        .then(res => {
            dispatch({
                type: GET_BOOKS,
                payload: res.data.filter(book => book.is_sold_out === false)
            });
        })
        .catch(err => console.log(err));
}

// GET BOOK BY ID
export const getBooksByID = (id) => dispatch => {
    console.log(id);
    axios.get("/api/books/")
        .then(res => {
            dispatch({
                type: GET_BOOK_BY_ID,
                payload: res.data.filter(book => book.id == id)
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
                payload: res.data.filter(book =>
                    book.is_hot_price & book.is_sold_out === false)
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
                payload: res.data.filter(book =>
                    book.genre === genre & book.is_sold_out === false)
            });
        })
        .catch(err => console.log(err));
}
// GET ALL BOOKS FOR VIEW
export const getAllBooks = () => dispatch => {
    axios.get("/api/books/")
        .then(res => {
            dispatch({
                type: GET_ALL_BOOKS,
                payload: res.data.filter(book => book.is_sold_out === false)
            });
        })
        .catch(err => console.log(err));
}

// SORT BOOKS BY PRICE
export const sortBooksByPrice = (books, reverse) => dispatch => {
    let res = books.sort((book1, book2) =>
        book1.is_hot_price ?
            book2.is_hot_price ?
                book1.cost * 0.75 - book2.cost * 0.75
                :
                book1.cost * 0.75 - book2.cost
            :
            book2.is_hot_price ?
                book1.cost - book2.cost * 0.75
                :
                book1.cost - book2.cost
    )

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

// SEARCH BOOKS
export const searchBooks = (books, value) => dispatch => {
    let res = books.filter(book =>
        book.name.toLocaleLowerCase().includes(value.toLocaleLowerCase()) &
        book.is_sold_out === false
    )
    dispatch({
        type: SEARCH_BOOKS,
        payload: res
    });
}

