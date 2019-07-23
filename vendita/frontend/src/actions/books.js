import axios from 'axios';

import { GET_BOOKS, GET_HOOT_BOOKS, GET_BOOKS_BY_GENRES } from './types';


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

// GET LEADS
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

