import React, { useEffect, useState } from "react";
import { MoreVert } from "@material-ui/icons";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser } from "../../Redux/Redux/userAction";
import { loadFriend } from "../../Redux/Redux/Friend/friendAction";

const Card = ({ post }) => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const { friends } = useSelector((state) => state.friend);
  useEffect(() => {
    dispatch(loadFriend());
  }, []);
  const [like, setLike] = useState(0);
  const [isLike, setIsLike] = useState(false);
  const [dislike, setDisLike] = useState(0);
  const [isDisLike, setIsDisLike] = useState(false);

  //Like handling
  const likeHandler = () => {
    setLike(isLike ? like - 1 : like + 1);
    setIsLike(!isLike);
  };

  //dislike handling
  const disLikeHandler = () => {
    setDisLike(isDisLike ? dislike - 1 : dislike + 1);
    setIsDisLike(!isDisLike);
  };

  // get reducer values
 

  // Delete handling
  const handleDelete = (id) => {
    console.log(id);
    if (window.confirm("Are you sure ou want delete this post")) {
      dispatch(deleteUser(id));
    }
  };

  //specific id to redirect user profile
  const handleGet = (id) => {
    navigate(`/profile/${id}`);
  };

  return (
    <div className="ui card" key={post.id}>
      <div className="content">
        <div className="right floated meta">
          <MoreVert onClick={() => handleDelete(post.id)} />
        </div>
        
        {/* <img className="ui avatar image"
           src={friends.filter((p) => p.id === post?.userId)[0].profilePicture}
          onClick={() => handleGet(post.id)}
        /> */}
        
         {friends.filter((u) => u.id === post?.userId)[0].username}
      </div>
      <div className="content">
        <div className="meta">
          <span className="date">{post.desc}</span>
        </div>
      </div>
      <div className="image">
        <img src={post.photo} alt="hello" />
      </div>
      <div className="content">
        <span className="right floated">
          <i
            className="heart outline like icon"
            onClick={() => likeHandler()}
          ></i>
          {like}
        </span>
        <span className="right floated">
          <i
            color="red"
            className="thumbs down outline icon"
            onClick={() => disLikeHandler()}
          ></i>
          {dislike}
        </span>
        <i className="comment outline icon"></i>
        {post.comment}
      </div>
  </div>
  );
};

export default Card;
