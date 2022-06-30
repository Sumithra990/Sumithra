import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, loadUser, oneUser } from "../../../Redux/Redux/userAction";
import { MoreVert } from "@material-ui/icons";
import { useNavigate } from "react-router-dom";
import Friend from "../../Profile/Friend/Friend";
import Post from '../../Main/Post/Post'
import "./Page.css";
function Page() {
  const [like, setLike] = useState(0);
  const [isLike, setIsLike] = useState(false);
  const [dislike, setDisLike] = useState(0);
  const [isDisLike, setIsDisLike] = useState(false);
  const [Comment, setComments] = useState("");

  //Like handling
  const likeHandler = () => {
    setLike(isLike ? like - 1 : like + 1);
  };
  const disLikeHandler = () => {
    setDisLike(isDisLike ? dislike - 1 : dislike + 1);
  };
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.data);
  useEffect(() => {
    dispatch(loadUser());
  }, []);

  const handleDelete = (id) => {
    console.log(id);
    if (window.confirm("Are you sure ou want delete this post")) {
      dispatch(deleteUser(id));
    }
  };

  const handleGet = (id) => {
    navigate(`/profile/${id}`);
  };

  return (
    <div>
      <div className="post-container">
        <Post/>
        <h3>Posts List</h3>
        {users &&
          users.map((item) => (
            <div className="ui card" key={item.id}>
              <div className="content">
                <div className="right floated meta">
                  <MoreVert onClick={() => handleDelete(item.id)} />
                </div>
                <img
                  className="ui avatar image"
                  src={item.profile}
                  onClick={() => handleGet(item.id)}
                />
                {item.name}
              </div>
              <div className="content">
                <div className="meta">
                  <span className="date">{item.desc}</span>
                </div>
              </div>
              <div className="image">
                <img src={item.img} />
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
                  <i color="red"
                    className="thumbs down outline icon"
                    onClick={() => disLikeHandler()}
                  ></i>
                  {dislike}
                </span>
                <i
                  className="comment outline icon"
                  onClick={(e) => {
                    <input
                      type="text"
                      value={Comment}
                      placeholder="enter your comments"
                    />;
                    setComments(e.target.value);
                  }}
                ></i>
                {item.Comment}
              </div>
            </div>
          ))}
      </div>
      <Friend />
    </div>
  );
}

export default Page;
