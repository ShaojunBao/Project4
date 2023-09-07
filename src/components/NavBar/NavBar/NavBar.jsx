import { Link } from 'react-router-dom';
import * as userService from '../../../utilities/users-service';

export default function NavBar({user, setUser}) {

  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <nav>
      {user ? (
        <>
          <Link to="/orders">Order History</Link>
          &nbsp; | &nbsp;
          <Link to="/orders/new">New Order</Link>
          &nbsp; | &nbsp;
          Hi {user.name}
          &nbsp;&nbsp; <Link to="/" onClick={handleLogOut}>Logout</Link>
        </>
      ) : (
        <>
          <Link to="/login">Login</Link>
          &nbsp; | &nbsp;
          <Link to="/signup">Signup</Link>
        </>
      )}
    </nav>
  );
}