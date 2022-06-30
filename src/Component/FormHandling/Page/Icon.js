import React from 'react'

const Icon = () => {
  return (
    <div><div className="ui right pointing dropdown icon button">
    <i className="settings icon"></i>
    <div className="menu">
      <div className="ui left search icon input">
        <i className="search icon"></i>
        <input type="text" name="search" placeholder="Search issues..."/>
      </div>
      <div className="divider"></div>
      <div className="header">
        <i className="tags icon"></i>
        Filter by tag
      </div>
      <div className="item">
        <div className="ui red empty circular label"></div>
        Important
      </div>
      <div className="item">
        <div className="ui blue empty circular label"></div>
        Announcement
      </div>
      <div className="item">
        <div className="ui black empty circular label"></div>
        Discussion
      </div>
    </div>
  </div>
  <div className="ui left pointing dropdown icon button">
    <i className="settings icon"></i>
    <div className="menu">
      <div className="ui left search icon input">
        <i className="search icon"></i>
        <input type="text" name="search" placeholder="Search issues..."/>
      </div>
      <div className="header">
        <i className="tags icon"></i>
        Tag Label
      </div>
      <div className="item">
        <div className="ui red empty circular label"></div>
        Important
      </div>
      <div className="item">
        <div className="ui blue empty circular label"></div>
        Announcement
      </div>
      <div className="item">
        <div className="ui black empty circular label"></div>
        Discussion
      </div>
    </div>
  </div></div>
  )
}

export default Icon