import React from "react";
import {Menu, Search, Person, Notifications, Message } from "@material-ui/icons";
import {Link}from '@mui/material';
import "./nav.css";
function Nav() {
  return (
    <div className="NavBarContainer">
      <div className="NavBarSide">
      <Link href='/setting'><Menu className="Icon"/></Link>
        <span className="logo">Sumithra App</span>
      </div>
      <div className="NavBarCenter">
        <div className="SearchBar">
          <Search className="navBarSearch" />
          <input placeholder="Enter Your photos and video" className="Input" />
        </div>
      </div>
      <div className="NavBarLeft">
        <div className="NavBarLink">
          <span className="NavbarLink"><Link  href="/page">Home</Link></span>
        </div>
        <div className="NavBarItemList">
          <div className="NavBarIcon">
            <Person />
            <span className="NavBarItem">1</span>
          </div>
          <div className="NavBarIcon">
            <Notifications />
            <span className="NavBarItem">2</span>
          </div>
          <div className="NavBarIcon">
            <Message />
            <span className="NavBarItem">3</span>
          </div>
        </div>
        <img src="https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_3.jpg" alt="Profile" className="NavBarImage"/>
      </div>
    </div>
  );
}

export default Nav;
