import React from 'react';
import { Link } from 'react-router-dom';
import { CgProfile } from 'react-icons/cg';
import '../styles.css';

const Navigation = () => (
  <nav className="nav-container flex">
    <h1 className="title-app  fontsty-normal montserrat">Bookstore CMS</h1>
    <ul className="nav-list flex">
      <li className="flex montserrat">
        <Link className="link montserrat" to="/">Books</Link>
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
