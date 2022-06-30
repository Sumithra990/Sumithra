// import React,{useEffect,useState} from 'react'
// import { useDispatch, useSelector } from "react-redux";
// import {oneUser } from "../../Redux/Redux/userAction";
// import { useParams } from "react-router-dom";
// import { MoreVert } from "@material-ui/icons";
// const upDate = () => {
//   const dispatch = useDispatch();
//   let { id } = useParams();
//   const { users } = useSelector((state) => state.data);
//   console.log(users);
//   useEffect(() => {
//     dispatch(oneUser(id));
//   }, []);
//   const [state,setState]=useState({
//    img:"",
//    profile:"",
//    name:"",
//    desc:"",
//    like:"",
//    dislike:""
//   })

//   return (
//     <div>
//           <div className="ui container">
//             <img className="ui fluid image" src={img}></img>
//             <img className="ui medium circular image" src={profile} />
//             <span>Username</span>
//             <div className="ui card" key={id}>
//               <div className="content">
//                 <div className="right floated meta">
//                   <MoreVert />
//                 </div>
//                 <img className="ui avatar image" src={profile} />
//                 {name}
//               </div>
//               <div className="content">
//                 <div className="meta">
//                   <span className="date">{desc}</span>
//                 </div>
//               </div>
//               <div className="image">
//                 <img src={img} />
//               </div>
//               <div className="content">
//                 <span className="right floated">
//                   <i className="heart outline like icon"></i>
//                   {like}
//                 </span>
//                 <i className="comment outline icon"></i>
//                 {Comment}
//               </div>
//             </div>
//           </div>
    
//     </div>
//   )
// }

// export default upDate