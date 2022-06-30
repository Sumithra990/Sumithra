import {combineReducers}from 'redux'
import userReducer from './reducer'
import friendReducer from './Friend/friendReducer';

//get all reducers
const rootReducer=combineReducers({
    data:userReducer,
    friend:friendReducer
});
export default rootReducer;