import * as types from "../actionType";
import axios from "axios";
const getFriends = (friends) => ({
  type: types.GET_FRIEND,
  payload: friends,
});
export const loadFriend = () => {
  return function (dispatch) {
    // console.log(process)
    axios
      .get("http://localhost:5000/Friends")
      .then((res) => {
        dispatch(getFriends(res.data));
      })
      .catch((err) => console.log(err));
  };
};
