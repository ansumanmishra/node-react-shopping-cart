import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

    return ( 
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <Link className="navbar-brand" to="/">EKart</Link>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item active">
                    <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Categories</a>
                  </li>
                </ul>
              </div>
              <form class="form-inline">
                <input class="form-control mr-sm-2 search-input" type="search" placeholder="Search your product..." aria-label="Search" />
              </form>
            </nav>
        </>
    )
};

export default Header;