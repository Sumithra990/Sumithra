import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Component/Main/Home/Home";
import Nav from "../Component/Main/Nav/Nav";
import Setting from "../Component/Main/Setting/Setting";
import About from "../Component/Main/Setting/Setting";
import Login from "../Component/FormHandling/Login/login";
import Register from "../Component/FormHandling/Register/register";
import Post from "../Component/Main/Post/Post";
import Page from "../Component/FormHandling/Page/Page";
import Profile from '../Component/Profile/Profile'
import Info from '../Component/Profile/upDate'

function RouteComponent() {
  return (
    <div>
      <Routes>
        <Route exact path="/home" element={<Home />}></Route>
        <Route exact path="/navBar" element={<Nav />}></Route>
        <Route exact path="/setting" element={<Setting />}></Route>
        <Route exact path="/about" element={<About />}></Route>
        <Route exact path="/" element={<Login />}></Route>
         <Route exact path='post' element={<Post/>}></Route> 
        <Route exact path="/register" element={<Register />}></Route>
        <Route exact path="/page" element={<Page />}></Route>
        <Route exact path="/profile/:id" element={<Profile />}></Route>
      </Routes>
    </div>
  );
}

export default RouteComponent;
