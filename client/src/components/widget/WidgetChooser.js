import React from "react"
import {Link} from "react-router-dom"

export default function WidgetChooser() {
  return (
    <div>
  <nav className="navbar navbar-light bg-light fixed-top">
    <div>
      <Link 
      to="/user/:uid/website/:wid/page/:pid/widget"
      className ="text-dark"
      >
    <i className="fas fa-less-than" />
    </Link>
      <span className="navbar-brand h1 mb-0 ml-4">Choose Widget</span>
    </div>
  </nav>
  <main className="container">
    <ul className="list-group list-group-flush">
      <li className="list-group-item">
        <Link to="/user/:uid/website/:wid/page/:pid/widget/:wgid" />Header </li>
      
      <li className="list-group-item">
      <a href="!#" />Label
      </li>
      <li className="list-group-item">
      <a href="!#" />HTML
      </li>
      <li className="list-group-item">
      <a href="!#" />Text Input
      </li>
      <li className="list-group-item">
      <a href="!#" />Link
      </li>
      <li className="list-group-item">
      <a href="!#" />Button
      </li>
      <li className="list-group-item">
        <Link to="/user/:uid/website/:wid/page/:pid/widget/:wgid" />
        Image
     </li>
    
      <li className="list-group-item">
        <Link to="/user/:uid/website/:wid/page/:pid/widget/:wgid" />
        YouTube
      </li>
     
      <li className="list-group-item">
        <a href="!#" />Data Table
      </li>
      <li className="list-group-item">
        <a href="!#" />Repeater
      </li>
    </ul>
    </main>
    <footer className="navbar navbar-light bg-light fixed-bottom">
      <span />
      <Link to={`/user/${params.uid}`}>
        <i className="fas fa-user" />
      </Link>
    </footer>
  </div>
);
}