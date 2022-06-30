import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, oneUser, addUserPost } from "../../Redux/Redux/userAction";
import { useParams } from "react-router-dom";
import { MoreVert } from "@material-ui/icons";
import { useNavigate } from "react-router-dom";
import Friend from "./Friend/Friend";
import "./profile.css";

const Profile = () => {
  //Dispatch
  const dispatch = useDispatch();
  let { id } = useParams();
  const { users } = useSelector((state) => state.data);

  let navigate = useNavigate();

  

  useEffect(() => {
    dispatch(oneUser(id));
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
            src={users.backImage}
            className="img1"
            alt="Responsive image"
          ></img>
          <img className="img2" src={users.profile} />
        </div>
        <h2>Personal Info</h2>
        <h4 className="textSyle"> {users.name}</h4>
        <label>Info:</label>
        <h5> {users.descP}</h5>
        <h5>Date Of Birth:{users.DOF}</h5>
        <h5>Native:{users.Native}</h5>
        <h5>Hobbies:{users.interest}</h5>

        <Friend />
        {/* Card */}
        <div className="CenterAlign">
          <div className="ui card" key={users.id}>
            <div className="content">
              <div className="right floated meta">
                <MoreVert onClick={() => handleDelete(users.id)} />
              </div>
              <img className="ui avatar image" src={users.profile} />
              {users.name}
            </div>
            <div className="content">
              <div className="meta">
                <span className="date">{users.desc}</span>
              </div>
            </div>
            <div className="image">
              <img src={users.img} />
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
