import React from 'react'
import './Setting.css'

import {Feedback,Chat,Group,Bookmark,VideoCall,QuestionAnswer,Work,Event,Class}from '@material-ui/icons'
export default function Setting() {
  return (
    <div className='SettingContainer'>
      <div className="SettingCollection">
        <ul className="SettingList">
          <li className="SettingListType">
            <Feedback className="SettingIcon"/>
            <span className="SettingContent">Feed</span>
          </li>
          <li className="SettingListType">
            <Chat className="SettingIcon"/>
            <span className="SettingContent">Chats</span>
          </li>
          <li className="SettingListType">
            <Group className="SettingIcon"/>
            <span className="SettingContent">Videos</span>
          </li>
          <li className="SettingListType">
            <Bookmark className="SettingIcon"/>
            <span className="SettingContent">Groups</span>
          </li>
          <li className="SettingListType">
            <VideoCall className="SettingIcon"/>
            <span className="SettingContent">Bookmarks</span>
          </li>
          <li className="SettingListType">
            <QuestionAnswer className="SettingIcon"/>
            <span className="SettingContent">Question</span>
          </li>
          <li className="SettingListType">
            <Work className="SettingIcon"/>
            <span className="SettingContent">Jobs</span>
          </li>
          <li className="SettingListType">
            <Event className="SettingIcon"/>
            <span className="SettingContent">Event</span>
          </li>
          <li className="SettingListType">
            <Class className="SettingIcon"/>
            <span className="SettingContent">Course</span>
          </li>
        </ul>
        <button className='SettingButton'>Show More</button>
      <hr className='SettingHr'/>
      <ul className='Icon'>
        <li className="">

        </li>
      </ul>
      </div>
      </div>
  )
}
