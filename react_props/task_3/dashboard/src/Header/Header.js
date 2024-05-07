import React from 'react';
import logo from '../assets/atlas_logo.png';
import './Header.css';


function Header() {
  return (
    <header className="Header-main">
        <img src={logo} className="Header-logo" alt="logo" />
        <h1>
          School dashboard
        </h1>
    </header>
  );
}

export default Header;