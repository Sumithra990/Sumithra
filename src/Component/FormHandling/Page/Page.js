import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadUser } from "../../../Redux/Redux/userAction";
import Card from "../../Card/Card";
import Post from "../../Main/Post/Post";
import Navbar from "../../Main/Nav/Nav";
import "./Page.css";

function Page() {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(loadUser());
  }, []);

  return (
    <div className="post-container">
      <div className="post-Wrapper">
        <Post />
        <h3>Posts List</h3>
        {users && users.map((item) => <Card className="Post" key={item.id} post={item} />)}
      </div>
    </div>
  );
}

export default Page;
