import React, {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";

export default function WebsiteList(props) {
  const params = useParams();

  const [website, setWebsites] = useState([]);

  useEffect(()=>{
    setWebsites(props.getWebsites(params.uid));
  }, [params.uid, props]);

  return (
    <div>
  <nav className="navbar bg-primary navbar-dark fixed-top">
    <div>
    <Link className="text-light" to={`/user/${params.uid}`}>
      <i className="fas fa-less-than" />
      </Link>
    <span className="navbar-brand h1 mb-0">Websites</span>
    </div>
    <Link className="text-light" to={`user/${params.uid}/website/new`}>
    <i className="fas fa-cross text-light" />
    </Link>
  </nav>
  <div className="container">
    <ul className="list-group list-group-flush">
    {WebsiteList.map(website=>(<li key={website._id} className="list-group-item"><Link to={`/user/${website.developerId}/website/${website._id}/page`}>{website.name}
    </Link>
    <Link className="float-right" to={`/user/${website.developerId}/website/${website._id}`}>
    <i className="far fa-sun" />
    </Link>
    </li>
    ))} 
    </ul>
  </div>
  <nav className="navbar bg-primary fixed-bottom">
    <span />
    <Link className="text-light" to={`/user/${params.uid}`}>
      <i className="fas fa-user" />
      </Link>
  </nav>
</div>
  );
}
