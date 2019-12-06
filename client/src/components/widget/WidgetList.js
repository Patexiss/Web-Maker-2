import React, {useState, useEffect} from "react";
import {Link, useParams} from "react-router-dom";

export default function WidgetList(props) {
const params = useParams();

const [widgets, setWidgets] = useState([]);

useEffect(() =>{
  setWidgets(props.getWidgets(params.pid));
}, [props, params.pid]);

  return (
    <div>
  <nav className="navbar bg-primary navbar-dark fixed-top">
    <div>
      <Link className="text-light" to={`/user/${params.uid}/website/${params.pid}/page`} >
        <i className="fas fa-less-than" />
      </Link>
      <span className="navbar-brand mb-0 h1 ml-5">Widgets
      </span>   
    </div>
    <Link className="text-light" to={`/user/${params.uid}/website/${params.wid}/page/${params.pid}/widget/new`} >
      <i className="fas fa-cross" />
    </Link>
  </nav>
  <main className="container-fluid">
    {
      widgets.map(widget=> (
  <section key={widget._id}>
  <div className="position-absolut absolute-right p-1 bg-light rounded-left">
  <Link to={`/user/${params.uid}/website/${params.wid}/page/${params.pid}/widget/${widget._id}`}>
  <i className="fas fa-sun" />
  </Link>
  <i className="fas fa-bars" />
  </div>
  {widget.widgetType === "HEADING" && (
     <div>
  {widget.size === 1 &&<h1>{widget.text}</h1>}
  {widget.size === 2 &&<h2>{widget.text}</h2>}
  {widget.size === 3 &&<h3>{widget.text}</h3>}
  {widget.size === 4 &&<h4>{widget.text}</h4>}
  {widget.size === 5 &&<h5>{widget.text}</h5>}
  {widget.size === 6 &&<h6>{widget.text}</h6>}
  </div> 
  )}
  {widget.widgetType === "IMAGE" && (<div><img src={widget.width} alt={widget.url} />
  </div>)}
  {widget.widgetType === "YOUTUBE" && (
<div className="embed-responsive embed-responsive-16by9">
<iframe
src = {widget.url}
title= "video"
frameBorder={0}
allow = "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
allowFullScreen
 />
</div>
  )}
  </section>
    ))}
 
  </main>
  <nav className="navbar bg-primary fixed-bottom">
    <div>
      <i className="fas fa-play" />
      <i className="fas fa-eye ml-2" />
    </div>
    <Link className="text-light" to={`/user/${params.uid}`}>
    <i className="fas fa-user" />
    </Link>
  </nav>
</div>
  );
}
