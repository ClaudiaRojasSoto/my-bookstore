import React from 'react';
import { Link } from 'react-router-dom';
import { CgProfile } from 'react-icons/cg';

const Navigation = () => (
  <nav>
    <h1 className="title-app">Bookstore CMS</h1>
    <ul>
      <li>
        <Link to="/">Books</Link>
        {/* Link to the initial page */}
      </li>
      <li>
        <Link to="/categories">Categories</Link>
        {/* Link to the category page */}
      </li>
    </ul>
    <div className="profile">
      <CgProfile className="icon" />
    </div>
  </nav>
);

export default Navigation;
