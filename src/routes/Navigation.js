import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => (
  <nav>
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
  </nav>
);

export default Navigation;
