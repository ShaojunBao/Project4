import { Link } from 'react-router-dom';
import * as userService from '../../../utilities/users-service';
import './NavBar.css';  
import logo from '../../../images/restaurant.png'


export default function NavBar({ user, setUser }) {

  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <nav className="navbar">
      <div className="logo-section">
       
        <img src={logo} alt="App Logo" className="logo" />
      </div>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/orders/new">New Order</Link>
        <Link to="/orders">Order History</Link>
      </div>
      <div className="user-info">
        {user ? (
          <>
            <span>Welcome, {user.name}</span>
            <Link to="/" onClick={handleLogOut}>Logout</Link>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
          </>
        )}
      </div>
    </nav>
  );
}