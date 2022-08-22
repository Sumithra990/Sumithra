import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, oneUser} from "../../Redux/Redux/userAction";
import { loadFriend } from "../../Redux/Redux/Friend/friendAction";
import { useParams } from "react-router-dom";
import { MoreVert } from "@material-ui/icons";
import { useNavigate } from "react-router-dom";
import Friend from "./Friend/Friend";
import "./profile.css";

const Profile = () => {
  //Dispatch
  let navigate = useNavigate();
  const dispatch = useDispatch();
  let { id } = useParams();
  const { friends } = useSelector((state) => state.friend);
  const { users } = useSelector((state) => state.data);


  
  console.log(users,friends)
  useEffect(() => {
    dispatch(oneUser(id));
    dispatch(loadFriend())
  }, []);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure ou want delete this post")) {
      dispatch(deleteUser(id));
    }
  };
  return (

    
    <div className="profile-container">
      <div className="ui container" key={users.id}>
        <div className="container">
          <img
            src="https://cdn.wallpapersafari.com/84/35/l85BYI.jpg"
            className="img1"
            alt="Responsive image"
          ></img>
          <img className="img2" src={users.profilePicture} />
        </div>
        <h4 className="textSyle">Deepa sathish</h4>
        <label>Personal Info:</label>
        <h5> {users.desc}</h5>
        <h5>Date Of Birth:{users.DOF}</h5>  
        <h5>Native:{users.Native}</h5>
        <h5>Status:{users.Status}</h5>

       
        {/* Card */}
        <div className="CenterAlign">
          <div className="ui card" key={users.id}>
            <div className="content">
              <div className="right floated meta">
                <MoreVert onClick={() => handleDelete(users.id)} />
              </div>
              <img className="ui avatar image" src={users.profilePicture} />
              Deepa sathish
            </div>
            <div className="content">
              <div className="meta">
                <span className="date">{users.desc}</span>
              </div>
            </div>
            <div className="image">
              <img src="https://video.cgtn.com/news/77416a4e7a67544e786b544f344d444e304d7a4e31457a6333566d54/video/ca413729bcf64502ab923c080b9d0920/ca413729bcf64502ab923c080b9d0920.jpg" />
            </div>
            <div className="content">
              <span className="right floated">
                <i className="heart outline like icon"></i>
                {users.like}
              </span>
              <i className="comment outline icon"></i>
              {users.Comment}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
