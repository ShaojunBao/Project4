import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import * as userService from '../../../utilities/users-service';
import './NavBar.css';  
import logo from '../../../images/restaurant.png';

export default function NavBar({ user, setUser }) {

  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand as={Link} to="/">
        <img src={logo} alt="App Logo" className="logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/orders/new">New Order</Nav.Link>
          <Nav.Link as={Link} to="/orders">Order History</Nav.Link>
        </Nav>
        <Nav>
          {user ? (
            <>
              <Navbar.Text>
                Welcome, {user.name}
              </Navbar.Text>
              <Nav.Link as={Link} to="/" onClick={handleLogOut}>Logout</Nav.Link>
            </>
          ) : (
            <>
              <Nav.Link as={Link} to="/auth">Login/Signup</Nav.Link>
            </>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}