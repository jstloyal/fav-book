import { useState } from 'react';
import { useSelector } from "react-redux";
import { FaBars, FaSearch } from "react-icons/fa";
// import { logout } from '../../features/user/userSlice';
import {
  Nav,
  NavContainer,
  NavLogo,
  NavMenu,
  NavItem,
  NavLink,
  SpecialLink,
  MobileIcon,
  ProfileAvatar,
} from "./NavElement";
import logo from "../../../assets/logo.jpeg";
import PropTypes from 'prop-types';

const Navbar = ({ toggle, sidebarIsOpen }) => {
  const loggedIn = useSelector((state) => state.user.loggedIn);
  
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

          <MobileIcon>
            <FaSearch />
          </MobileIcon>
          <NavMenu>
            {loggedIn ? (
              <>
                <li>
                  <NavLink to="/books">Books</NavLink>
                </li>
                <li>
                  <ProfileAvatar onClick={toggle}>
                    <img
                      src="http://unsplash.it/30/30?gravity=center"
                      alt="Random image"
                      width="30"
                      height="30"
                    />
                  </ProfileAvatar>
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
                <li>
                  <NavLink to="/sign_up">
                    <SpecialLink>Sign up</SpecialLink>
                  </NavLink>
                </li>
              </>
            )}
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
