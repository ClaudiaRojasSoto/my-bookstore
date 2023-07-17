import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => (
  <nav>
    <ul>
      <li>
        <Link to="/">Books</Link>
        {/* Enlace a la página de inicio */}
      </li>
      <li>
        <Link to="/categories">Categories</Link>
        {/* Enlace a la página de categorías */}
      </li>
    </ul>
  </nav>
);

export default Navigation;
