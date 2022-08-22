import React, { useEffect } from "react";
import SearchBar from './search'
import {ListItemAvatar,Avatar, ListItemText,ListItem,List }from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { loadFriend } from "../../../Redux/Redux/Friend/friendAction";
import "./friend.css";
import "../../Main/Nav/nav.css";
const Friend = () => {
  //get Redux values
  const dispatch = useDispatch();
  const { friends } = useSelector((state) => state.friend);
  useEffect(() => {
    dispatch(loadFriend());
  }, []);

  return (
    <div className="Text">
      <h3>Friends List</h3>
      <div className="friends">
        {friends.map((friend) => (
          <List>
            <ListItem key={friend.id}>
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" src={friend.profilePicture} />
              </ListItemAvatar>
              <ListItemText  primary={friend.username} />
            </ListItem>
          </List>
        ))}
      
       <div className="NavBarCenter">
      <SearchBar/>
      </div>
      </div>
    </div>
  );
};

export default Friend;
