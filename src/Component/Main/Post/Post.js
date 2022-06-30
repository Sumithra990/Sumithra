import React, { useEffect, useState } from "react";
import {} from "../../../";
import "./post.css";
import { useDispatch, useSelector } from "react-redux";
import { addUserPost } from "../../../Redux/Redux/userAction";
import { useNavigate} from "react-router-dom";
import axios from "axios";
function Post() {
  //using redux for dispach
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.data);
  let navigate = useNavigate();

  console.log(users)
  //setInput value State
  
 const [desc,setDesc]=useState("");
 const [img,setImage]=useState();
 const [video,setVideo]=useState();

//handle Submit
  const handleSubmit = () => {
    dispatch(addUserPost({desc,img,video}));
    navigate("/page");
  };

  //Handle change Image

  const handleChangeImage=(e)=>{
     let image=e.currentTarget.files[0];
    setImage(URL.createObjectURL(image))
  }
  //handle video Change
  const handleChangeVideo=(e)=>{
     let video=e.currentTarget.files[0];
    setVideo(URL.createObjectURL(video))
    
  }

  //Handle change values
  const handleChangeDesc = (e) => { 
   setDesc(e.target.value)
  };

  //Get Image
  const handleImage = () => {
    document.getElementById("selectImage").click();
  };

  return (
    <div className="card_container">
      <h3>Post here</h3>
      
          <div className="ui card" >
            <div className="content">
              <div className="right floated meta"></div>
              <img className="ui avatar img" src="https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_3.jpg" />
               Guest User
            </div>
            <div className="ui input focus">
              <input
                type="text"
                name="desc"
                value={desc}
                placeholder="What's up?"
                onChange={handleChangeDesc}
              />
            </div>
            <div className="image">
                <img src={img} />
              </div>
            <div className="content">
              <span className="left floated">
                <i className="image icon" onClick={handleImage}></i>
                <input
                  id="selectImage"
                  type="file"
                  className="file-image"
                  accept="img/*"
                  onChange={handleChangeImage}
                />
              </span>
              <span className="left floated">
                <i className="video icon" onClick={handleImage}></i>
                
                <input
                  id="selectImage"
                  type="file"
                  className="file-image"
                  accept="video/mp4,video/x-m4v,video/*"
                  onChange={handleChangeVideo}
                />
              </span>
              <span className="right floated">
                <button onClick={handleSubmit}>share</button>
              </span>
            </div>
          </div>
        {/* <input type="file" onChange={(e)=>{
           setImage(URL.createObjectURL(e.target.files[0]))
           
        }}/>

        <img src={img} style={{height:300, width:300}}/>
        <button onClick={()=>{
          axios.post("http://localhost:5000/Posts/",{img})
          .then(res=>{
            console.log(res);
          })
        }}>upload</button> */}
    </div>
  );
}

export default Post;
