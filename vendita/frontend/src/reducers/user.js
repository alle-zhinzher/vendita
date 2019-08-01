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
} from '../actions/types.js';

const initialState = {
    customerLoading: false,
    bookApproved: false,
    userBooks: [],
    userBookInBasket: [],
    userPurchasedBooks: [],
    userSoldBooks: [],
    bookPosted: false,
    errorMsg: {},
    errorStatus: null,
}

export default function (state = initialState, action) {
    switch (action.type) {
        case CREATE_NEW_BOOK:
            return {
                ...state,
                bookPosted: true,
            }
        case NEW_CUSTOMER:
            return {
                ...state,
                customerLoading: action.payload,
            };
        case APPROVE_SALE:
            return {
                ...state,
                bookApproved: true
            };
        case DELETE_BOOK:
            return {
                ...state,
                userBooks: state.userBooks
                    .filter(book => book.id !== action.payload)
            };
        case GET_USER_BOOKS:
            return {
                ...state,
                userBooks: action.payload,
            }
        case CENCEL_PURCHASE:
            return {
                ...state,
                userBookInBasket: state.userBookInBasket
                    .filter(book => book.id !== action.payload),
            }
        case CUSTOMER_BOOKS:
            return {
                ...state,
                userBookInBasket: action.payload,
                customerLoading: false,
            }
        case USER_SOLD_BOOKS:
            return {
                ...state,
                userSoldBooks: action.payload,
                bookApproved: false,
            }
        case PURCASED_BOOKS:
            return {
                ...state,
                userPurchasedBooks: action.payload,
            }
        case BOOK_CREATION_FAIL:
            return {
                ...state,
                ...action.payload,
            };
        default:
            return state;
    }
}