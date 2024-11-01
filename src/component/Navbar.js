// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: '10px 20px',
        backgroundColor: '#f8f9fa',
      }}
    >
      <div>
        <h1 style={{ margin: 0 }}>SIMS PPOB</h1>
      </div>
      <div>
        <Link to="/home" style={{ margin: '0 10px', textDecoration: 'none', color: '#333' }}>Home</Link>
        <Link to="/topup" style={{ margin: '0 10px', textDecoration: 'none', color: '#333' }}>Top Up</Link>
        <Link to="/transaction" style={{ margin: '0 10px', textDecoration: 'none', color: '#333' }}>Transaction</Link>
        <Link to="/account" style={{ margin: '0 10px', textDecoration: 'none', color: '#333' }}>Account</Link>
      </div>
    </nav>
  );
};

export default Navbar;
