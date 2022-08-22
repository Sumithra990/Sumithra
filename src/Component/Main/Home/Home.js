import React from 'react';
import Setting from '../../Main/Setting/Setting';
import Pages from '../../FormHandling/Page/Page'
import FriendList from "../../Main/FriendList";
import Nav from '../Nav/Nav';
import './Home.css'

export default function Home() {

  return (
    <div>
    <Nav/>
    <div className='HomeContainer'>
     <Setting/>
     <Pages/>
      <FriendList />
    </div>
    </div>
  )
}
