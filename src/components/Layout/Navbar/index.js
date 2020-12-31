import { useState } from 'react';
import { useSelector } from 'react-redux';
import { FaBars, FaSearch } from 'react-icons/fa';
// import { logout } from '../../features/user/userSlice';
import PropTypes from 'prop-types';
import {
  Nav,
  NavContainer,
  NavLogo,
  NavMenu,
  NavLink,
  SpecialLink,
  MobileIcon,
  DownloadLink,
} from './NavElement';
import logo from '../../../assets/logo.jpeg';

const Navbar = ({ toggle, sidebarIsOpen }) => {
  const loggedIn = useSelector(state => state.user.loggedIn);

  const [scrolled, setScrolled] = useState(false);

  document.addEventListener('scroll', () => {
    const scrolledY = document.scrollingElement.scrollTop;
    if (scrolledY > 80 && !scrolled) {
      setScrolled(true);
    } else if (scrolledY < 80 && scrolled) {
      setScrolled(false);
    }
  });

  return (
    <>
      <Nav sidebarIsOpen={sidebarIsOpen} scrolled={scrolled}>
        <NavContainer>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavLogo to="/">
            <img src={logo} alt="Company brand" width="40" />
            Books
          </NavLogo>

          <NavMenu>
            {loggedIn ? (
              <>
                <li>
                  <DownloadLink to="/books">Download Application</DownloadLink>
                </li>
              </>
            ) : (
              <>
                <li>
                  <NavLink to="/">Go Home</NavLink>
                </li>
                <li>
                  <NavLink to="/login">Login</NavLink>
                </li>
                <li className="lg-screen">
                  <NavLink to="/sign_up">
                    <SpecialLink>Sign up</SpecialLink>
                  </NavLink>
                </li>
              </>
            )}
            <li>
              <MobileIcon>
                <FaSearch />
              </MobileIcon>
            </li>
          </NavMenu>
        </NavContainer>
      </Nav>
    </>
  );
};

Navbar.propTypes = {
  toggle: PropTypes.func.isRequired,
  sidebarIsOpen: PropTypes.bool.isRequired,
};

export default Navbar;
