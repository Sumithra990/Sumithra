import React,{useState} from 'react';
import data from '../../../db.json'
import "../../Main/Nav/nav.css";
import { Search} from "@material-ui/icons";
 const SearchItem = () => {
    const[searchItem,setSearchItem]=useState("")
  return (
    <div className="SearchBar">
    <Search className="navBarSearch" />
    <input placeholder="Enter Your photos and video" className="Input" onChange={(e)=>{
        setSearchItem(e.target.value)
    }} />
    {data.Friends.filter(val=>(
        val.username.toLowerCase().includes(searchItem.toLowerCase())
    )).map(val=>(
      <div style={{color:'blue'}}>
        <h2 style={{display:"flex"}}>{val.username}</h2></div>
    ))}
    <h2>hello</h2>
  </div>
  )
}
export default SearchItem;