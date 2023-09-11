import React from 'react';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div className="container">
      <h1>Welcome to the Order System</h1>
      <p>Manage your orders efficiently and with ease.</p>
      <div>
        <Link to="/new-order">
          <button type="button" className="btn btn-primary">New Order</button>
        </Link>
      </div>
      <div className="mt-4">
        <Link to="/order-history">
          <button type="button" className="btn btn-secondary">Order History</button>
        </Link>
      </div>
    </div>
  );
}

