import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../../features/user/userSlice';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router';
import logo from '../../../assets/logo.jpeg';
import {
  SidebarContainer,
  SidebarMenu,
  SidebarLink,
  SidebarItem,
  SidebarLogo,
  SidebarProfile,
  SpecialLink,
  Divider,
  AnchorLink,
} from './SidebarElements';

const Sidebar = ({ isOpen, toggle }) => {
  const loggedIn = useSelector(state => state.user.loggedIn);
  const user = useSelector((state) => state.user.user);
  const booksCount = useSelector(state => state.catalog.books.length);
  const createdCount = useSelector(
    state => state.catalog.books.filter(book => book.user_id === user.id)
      .length
  );
  const favoritedCount = useSelector(
    state =>
      state.catalog.products.filter(product =>
        product.favorited_by.some(favorite => favorite.id === user.id)
      ).length
  );

  let history = useHistory();
  const dispatch = useDispatch();
  const handleLogout = e => {
    e.preventDefault();
    dispatch(logout());
    history.push('/');
  };

  const { name, nickname } = user;
  
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      {loggedIn ? (
        <>
          <SidebarProfile>
            <img
              src="http://unsplash.it/100/100?gravity=center"
              alt="random image"
              width="50"
              height="50"
            />
            <h3>{name}</h3>
            <p>@{nickname}</p>
          </SidebarProfile>

          <SidebarMenu>
            <SidebarItem>
              <SidebarLink to="/dashboard">Dashboard</SidebarLink>
            </SidebarItem>
            <SidebarItem>
              <SidebarLink to="/books">
                Books <span>{booksCount}</span>
              </SidebarLink>
            </SidebarItem>
            <SidebarItem>
              <SidebarLink to="/creations">
                My books <span>{createdCount}</span>
              </SidebarLink>
            </SidebarItem>
            <SidebarItem>
              <SidebarLink to="/favorites">My favorites {favoritedCount}</SidebarLink>
            </SidebarItem>
            <SidebarItem>
              <SidebarLink to="/account">Account</SidebarLink>
            </SidebarItem>
          </SidebarMenu>
          <Divider />
          <SidebarMenu>
            <SidebarItem>
              <SidebarLink to="/login">Help</SidebarLink>
            </SidebarItem>
            <SidebarItem>
              <AnchorLink onClick={handleLogout}>Logout</AnchorLink>
            </SidebarItem>
          </SidebarMenu>
        </>
      ) : (
        <SidebarMenu>
          <SidebarItem>
            <SidebarLink to="/books">Books</SidebarLink>
          </SidebarItem>
          <SidebarItem>
            <SidebarLink to="/login">Login</SidebarLink>
          </SidebarItem>
          <SidebarItem>
            <SpecialLink to="/sign_up">Sign up</SpecialLink>
          </SidebarItem>
        </SidebarMenu>
      )}
      <SidebarLogo to="/">
        <img src={logo} alt="brand logo" width="50" />
        Books
      </SidebarLogo>
    </SidebarContainer>
  );
};

Sidebar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
};

export default Sidebar;
