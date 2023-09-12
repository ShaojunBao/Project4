import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; 

function Header({ user, setUser }) {
  return (
    <header className="header">
      <Link to="/" className="logo">ShopLogo</Link>
      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/orders/new">New Order</Link>
        <Link to="/orders">Order History</Link>
      </nav>
      <div className="user-section">
        {user ? (
          <>
            <span>Welcome, {user.name}</span>
            <button onClick={() => setUser(null)}>Logout</button>
          </>
        ) : (
          <Link to="/auth">Login/Register</Link>
        )}
      </div>
    </header>
  );
}

export default Header;