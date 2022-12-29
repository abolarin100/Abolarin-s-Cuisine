import React from 'react';
import "../css/Navbar.css";
import {Link} from 'react-router-dom'


const Navbar = () => {
    return (
        <div>

        <nav clasNames="navbar navbar-expand-lg -bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Navbar</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
                <li><Link className="nav-link active" aria-current="page" to="/">Home </Link></li>
                <li><Link className="nav-link" to="/menu">Menu </Link></li>
                <li><Link className="nav-link" to="/blog">Blog </Link></li>
                <li><Link className="nav-link" to="/about">About </Link></li>


      </div>
    </div>
  </div>
</nav>
        </div>
    );
}

export default Navbar;
