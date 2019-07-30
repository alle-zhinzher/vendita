import { combineReducers } from 'redux';
//User reduser imports
import booksReducer from './books';
import sliderReducer from './slider';
import paginatorReducer from './paginator';
import authReducer from './auth';
import userReducer from './user';




export default combineReducers({
    booksReducer,
    sliderReducer,
    paginatorReducer,
    authReducer,
    userReducer,
});
