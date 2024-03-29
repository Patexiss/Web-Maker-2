import React, {useState, useEffect} from "react";
import {Link, useParams} from "react-router-dom";

export default function Profile(props) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const[password, setPassword] = useState("");

  const params = useParams();
  
  useEffect(() => {
  for(let user of props.users) {
    if(user._id === params.uid) {
  setUsername(user.username);
  setEmail(user.email);
  setFirstName(user.firstName);
  setLastName(user.lastName);
  setPassword(user.password)
  return;
  }
  };
  }, [params.uid, props.users]);

  const update = () => {
    const newUser = {
      _id: params.uid,
      username: username,
      password: password,
      email: email,
      firstName: firstName,
      lastName: lastName,
    };

// update user in users array
    props.updateUser(newUser);

    alert("user info is updated!");
  };

  return (
    <div>
  <nav className="navbar bg-primary navbar-dark fixed-top">
    <span className="navbar-brand h1 mb-0">Profile</span>
    <span className="click" onClick={update}>
    <i className="far fa-check-square text-light" /></span>
  </nav>
  <div className="container">
    <form>
      <div className="form-group">
        <label htmlFor="username">Username</label>
        <input 
        type="text" 
        className="form-control" 
        id="Username"
        placeholder="Enter username here..."
        value={username}
        onChange={e => setUsername(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
          <input 
          type="email" 
          className="form-control" 
          id="email" 
          placeholder="Enter your email here..."
          value={email}
        onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
      <label htmlFor="first name">First Name</label>
      <input 
      type="text" 
      className="form-control" 
      id="first name" 
      placeholder="Enter your first name..."
      value={firstName}
        onChange={e => setFirstName(e.target.value)}
      />
    </div>
    <div className="form-group">
      <label htmlFor="last name">Last Name</label>
      <input 
      type="text" 
      className="form-control" 
      id="last name" 
      placeholder="Enter your last name..."
      value={lastName}
        onChange={e => setLastName(e.target.value)}
      />
    </div>
    </form>
    <Link to={`/user/${params.uid}/website`} className="btn btn-danger btn-block">
      Websites
    </Link>
    <Link className="btn btn-danger btn-block" to="/login">
      Logout
      </Link>
  </div>
  <nav className="navbar bg-primary fixed-bottom">
    <span />
    <Link className="text-light" to="/user/:uid">
      <i className="fas fa-user" />
      </Link>
  </nav>
</div>
  )
}
