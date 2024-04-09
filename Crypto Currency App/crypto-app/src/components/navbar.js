import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/market">Market</Link></li>
        <li><Link to="/portfolio">Portfolio</Link></li>
        <li><Link to="/buy">Buy</Link></li>
        <li><Link to="/sell">Sell</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
