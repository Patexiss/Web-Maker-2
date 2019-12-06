import React, {useState, useEffect, useHistory, useParams} from "react-router-dom"

export default function PageEdit() {
  const history = useHistory();
  const params = useParams();

  const [name, setName] = useState("");
  const [title, setTitle] = useState("");

  useEffect (() => {
    const page = props.getPage(params.pid);
    setName9(page.name);
    setTitle(page.title);
  }, [props, params.pid]);

  const remove = () => {
    props.removePage(params.pid);
    history.push(`/user/${params.uid}/website/${params.wid}/page`);
  };

  const update = e => {
    e.preventDefault();
    const newPage = {
    _id: params.pie,
    name: name,
    title: title,
    websiteId: params.wid
    };
    props.updatePage(newPage);
    history.push(`/user/${params.uid}/website/${params.wid}/page`);

  };

  return (
    <div>
  <nav className="navbar navbar-light bg-light fixed top">
    <div>
      <Link to={`/user/${params.uid}/website/${params.wid}/page`}>
    <i className="fas fa-less-than" />
    </Link>
    <span className="navbar-brand h1 ml-4 mb-0">Edit Page</span>
    </div>
    <button className="text-dark btn" form="pageForm">
    <i className="fas fa-check-square" />
    </button>
  </nav>
  <main className="container">
    <form id="pageForm" onSubmit={update}>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input type="text"
        id="name"
        className="form-control"
        placeholder="Enter page name..."
      value={name}
      onChange={e => setName(e.target.value)}  />
      </div>
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input 
        type="text" 
        className="form-control" 
        id="title" 
        placeholder="Enter page title..."
        value={title}
        onChange={e => setTitle(e.target.value)}
        />
      </div>
      <button to="/user/:uid/website/:wid/page" 
      className="btn btn-block btn-danger"
      type="button" 
      onClick={remove}>
        Delete
        </button>
    </form>
  </main>
  <footer className="navbar bg-primary fixed-bottom">
    <span />
    <Link to={`/user/${params.uid}`} className="text-light" to="../UserPages/profile.html">
      <i className="fas fa-user" />
      </Link>
  </footer>
</div>
  );
}
