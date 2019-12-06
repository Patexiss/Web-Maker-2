import React, {useState} from "react";
import {Link, useHistory} from "react-router-dom";

export default function Login(props){
  const [Username, setUsername] =useState("");
  const [password, setPassword] =useState("");

  let history = useHistory();

function onSubmit(e) {
  e.preventDefault();
  for(let user of props.users){
   // We found the user
    if(user.username === username && user.password === password) {
      // /user/:uid
      history.push(`/user/${user._id}`);
      return;
    }
     }
  // we can't find user
  alert("Invalid Credential, please try it again.")
}

  return (
    <div className="container">
        <h1>Login</h1>
<form onSubmit={onSubmit}>
  <div className="form-group">
<input type="text" className="form-control" placeholder="Username" 
value={Username}
onChange={e=>{setUsername(e.target.value)}}/>

</div>
<div className="form-group">
<input 
type="password" 
className="form-control" 
placeholder="password"
value={password}
onChange={e=>{setPassword(e.target.value)}}/>/>
</div>

<button className="btn btn-danger btn-block" to="/user/:uid">Login</button>
 <br>

<Link className="btn btn-danger btn-block" to="/register">Register</a>
</br>
</form>
</div>
  ) 
}