import React,{useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux";
import { loadFriend } from "../../Redux/Redux/Friend/friendAction"
import './friend.css';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';

function FriendList() {
    const dispatch = useDispatch();
    const { friends } = useSelector((state) => state.friend);
    useEffect(() => {
      dispatch(loadFriend());
    }, []);
  return (
    <div className="friends">
        <h3>FriendList</h3>
    {friends.map((friend) => (
<List
sx={{
  width: '100%',
  maxWidth: 360,
  bgcolor: 'background.paper',
}}
>

<ListItem key={friend.id}>
   
  <ListItemAvatar>
  <Avatar alt="Remy Sharp" src={friend.profilePicture}  />
  </ListItemAvatar>
  <ListItemText primary={friend.username} />
</ListItem>
</List>
    ))}
    </div>
  )
}

export default FriendList