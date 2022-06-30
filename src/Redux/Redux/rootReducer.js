import {combineReducers}from 'redux'
import userReducer from './reducer'
import friendReducer from './Friend/friendReducer';
const rootReducer=combineReducers({
    data:userReducer,
    friend:friendReducer
});
export default rootReducer;