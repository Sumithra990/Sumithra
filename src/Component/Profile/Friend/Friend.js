import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadFriend } from "../../../Redux/Redux/Friend/friendAction";
import "./friend.css";
const Friend = () => {
  const dispatch = useDispatch();
  const { friends } = useSelector((state) => state.friend);
  useEffect(() => {
    dispatch(loadFriend());
  }, []);
  return (
    <div  className="friend-content" >
      <h3>Friends List</h3>
      <div  className="friend_container" >
      {friends.map((friend) => (
        <div className="card"key={friend.id}>
                 <img src={friend.profilePicture} className="imageIcon" />
              <div className="content">
                <h4>{friend.username}</h4>
              </div>
            
            </div>
         
      ))}
    </div>
   </div>
  );
};

export default Friend;
