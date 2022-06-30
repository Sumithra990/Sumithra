
import *as types from './actionType';
import axios from 'axios'
const getUsers=(users)=>({
type:types.GET_USER,
payload:users,
});
const getOneUsers=(users)=>({
type:types.GET_ONE_USER,
payload:users
});

const deleteUsers=()=>({
type:types.DELETE_USER,
});
const addPost=()=>({
type:types.ADD_POST,
});


export const loadUser=()=>{
 return function(dispatch){
    // console.log(process)
    axios.get('http://localhost:5000/posts').then((res)=>{
        dispatch(getUsers(res.data));
    }).catch((err)=>console.log(err));
 }
}
export const postData=()=>{
 return function(dispatch){
    // console.log(process)
    axios.post('http://localhost:5000/posts').then((res)=>{
        dispatch(getUsers(res.data));
    }).catch((err)=>console.log(err));
 }
}
export const oneUser=(id)=>{
 return function(dispatch){
    // console.log(process)
    axios.get(`http://localhost:5000/posts/${id}`).then((res)=>{
        dispatch(getOneUsers(res.data));
    }).catch((err)=>console.log(err));
 }
}
export const addUserPost=(user)=>{
 return function(dispatch){
    axios.post(`http://localhost:5000/posts`,user)
    .then((res)=>{
        dispatch(addPost());
        dispatch(loadUser());
    }).catch((err)=>console.log(err));
 }
}
export const deleteUser=(id)=>{
 return function(dispatch){
    axios.delete(`http://localhost:5000/posts/${id}`)
    .then((res)=>{
        dispatch(deleteUsers());
        dispatch(loadUser());
    }).catch((err)=>console.log(err));
 }
}

