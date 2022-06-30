import { type } from "@testing-library/user-event/dist/type";
import * as types from "./actionType";

//load initial state
const initialState = {
  users: [],
  user: {},
  lodding: true,
};

//Condition part
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_USER:
      return {
        ...state,
        users: action.payload,
        lodding: false,
      };
    case types.DELETE_USER:
    case types.ADD_POST:
      return {
        ...state,
        lodding: false,
      };
    case types.GET_ONE_USER:
      return {
        ...state,
        users: action.payload,
        lodding: false,
      };

    default:
      return state;
  }
};
export default userReducer;
