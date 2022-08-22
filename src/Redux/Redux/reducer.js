import * as types from "./actionType";

//load initial state
const initialState = {
  users: [],
  user: {},
  loading: true,
};

//Condition part
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_USER:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };     
    case types.DELETE_USER:
    case types.ADD_POST:
      return {
        ...state,
        loading: false,
      };
    case types.GET_ONE_USER:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};
export default userReducer;
