import { useState } from 'react';
import { useSelector } from 'react-redux';
import { FaBars, FaSearch } from 'react-icons/fa';
import PropTypes from 'prop-types';
import {
  Nav,
  NavContainer,
  NavMenu,
  NavLink,
  SpecialLink,
  MobileIcon,
  DownloadLink,
  ProfileAvatar,
} from './NavElements';

const MobileNavbar = ({ toggle, sidebarIsOpen }) => {
  const loggedIn = useSelector((state) => state.user.loggedIn);
  const [scrolled, setScrolled] = useState(false);
  const currentBookTitle = useSelector(
    state => state.catalog.currentBookTitle
  );

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
      <Nav sidebarIsOpen={sidebarIsOpen} scrolled={scrolled} mobileView={true}>
        <NavContainer>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>

          <h3>
            {currentBookTitle ? currentBookTitle : 'Loading book'}
          </h3>

          <MobileIcon>
            <FaSearch />
          </MobileIcon>

          <NavMenu>
            {loggedIn ? (
              <>
                <li>
                  <DownloadLink to="/">Home</DownloadLink>
                </li>
                <li>
                  <NavLink to="/books">Books</NavLink>
                </li>
                <li>
                  <ProfileAvatar onClick={toggle}>
                    <img
                      src="http://unsplash.it/30/30?gravity=center"
                      alt="random img"
                      width="30"
                      height="30"
                    />
                  </ProfileAvatar>
                </li>
              </>
            ) : (
              <>
                <li>
                  <DownloadLink to="/">Home</DownloadLink>
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

MobileNavbar.propTypes = {
  toggle: PropTypes.func.isRequired,
  sidebarIsOpen: PropTypes.bool.isRequired,
};

export default MobileNavbar;
