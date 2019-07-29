import { combineReducers } from 'redux';
//User reduser imports
import booksReducer from './books';
import sliderReducer from './slider';
import paginatorReducer from './paginator';
import errorMessagesReducer from './messages';
import authReducer from './auth';



export default combineReducers({
    booksReducer,
    sliderReducer,
    paginatorReducer,
    errorMessagesReducer,
    authReducer,
});
