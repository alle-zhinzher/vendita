import { combineReducers } from 'redux';
//User reduser imports
import booksReducer from './books';
import sliderReducer from './slider';



export default combineReducers({
    booksReducer,
    sliderReducer,
});
