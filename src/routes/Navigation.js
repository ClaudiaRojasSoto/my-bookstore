import React from 'react';
import { Link } from 'react-router-dom';
import { CgProfile } from 'react-icons/cg';

const Navigation = () => (
  <nav className="nav-container">
    <h1 className="title-app">Bookstore CMS</h1>
    <ul className="nav-list">
      <li>
        <Link className="link" to="/">Books</Link>
        {/* Link to the initial page */}
      </li>
      <li>
        <Link className="link" to="/categories">Categories</Link>
        {/* Link to the category page */}
      </li>
    </ul>
    <div className="log-in">
      <CgProfile className="icon" />
    </div>
  </nav>
);

export default Navigation;
