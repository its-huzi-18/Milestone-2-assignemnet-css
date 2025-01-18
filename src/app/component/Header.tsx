import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <header className="header-container">
      <nav className="navbar">
        <div className="logo-container">
          <img src="Huzaifa logo.png" alt="Huzaifa logo" className="logo" />
        </div>
        <ul className="nav-links">
          <li className="nav-item">
            <Link href="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link href="/About">About</Link>
          </li>
          <li className="nav-item">
            <Link href="/Contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
