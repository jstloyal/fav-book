import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../features/user/userSlice';

const Nav = () => {
  const loggedIn = useSelector(state => state.user.loggedIn);

  const dispatch = useDispatch();
  const handleLogout = e => {
    e.preventDefault();
    dispatch(logout());
  };

  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/books">Books</Link>
      <Link to="/dashboard">Dashboard</Link>
      {loggedIn ? (
        <>
          <Link to="/dashboard">Dashboard</Link>
          <a href="/" onClick={handleLogout}>
            Logout
          </a>
        </>
      ) : (
        <>
          <Link to="/login">Login</Link>
        </>
      )}
    </div>
  );
};

export default Nav;
