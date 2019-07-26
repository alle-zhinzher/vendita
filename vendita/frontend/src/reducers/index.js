import { combineReducers } from 'redux';
//User reduser imports
import booksReducer from './books';
import sliderReducer from './slider';
import paginatorReducer from './paginator';



export default combineReducers({
    booksReducer,
    sliderReducer,
    paginatorReducer,
});
