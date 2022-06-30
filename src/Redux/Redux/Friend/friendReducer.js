import *as types from '../actionType';
const initialState={
    friends:[],
    friend:{},
    lodding:true
}
const friendReducer=(state=initialState,action)=>{
    switch(action.type){
       case types.GET_FRIEND:
           return {
               ...state,
               friends:action.payload,
               lodding:false
           }
       default:
           return state;
    }
};
export default friendReducer;