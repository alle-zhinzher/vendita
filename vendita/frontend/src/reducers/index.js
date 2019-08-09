import { combineReducers } from 'redux';
//User reduser imports
import booksReducer from './books';
import authReducer from './auth';
import userReducer from './user';




export default combineReducers({
    booksReducer,
    authReducer,
    userReducer,
});
