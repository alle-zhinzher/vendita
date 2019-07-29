import { combineReducers } from 'redux';
//User reduser imports
import booksReducer from './books';
import sliderReducer from './slider';
import paginatorReducer from './paginator';
import authReducer from './auth';



export default combineReducers({
    booksReducer,
    sliderReducer,
    paginatorReducer,
    authReducer,
});
