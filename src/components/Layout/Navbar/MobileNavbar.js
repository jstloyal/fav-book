import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { FaArrowLeft, FaBars, FaSearch } from 'react-icons/fa';
import PropTypes from 'prop-types';
import {
  Nav,
  NavContainer,
  NavMenu,
  NavLink,
  SpecialLink,
  MobileIcon,
  DownloadLink,
} from './NavElement';

const MobileNavbar = ({
  toggle, sidebarIsOpen, bookPage, title,
}) => {
  const loggedIn = useSelector(state => state.user.loggedIn);
  const bookName = useSelector(state => state.catalog.book.title);
  const [scrolled, setScrolled] = useState(false);
  const history = useHistory();

  document.addEventListener('scroll', () => {
    const scrolledY = document.scrollingElement.scrollTop;
    if (scrolledY > 80 && !scrolled) {
      setScrolled(true);
    } else if (scrolledY < 80 && scrolled) {
      setScrolled(false);
    }
  });

  const goBack = e => {
    e.preventDefault();
    history.goBack();
  };

  return (
    <>
      <Nav sidebarIsOpen={sidebarIsOpen} scrolled={scrolled} mobileView>
        <NavContainer>
          {bookPage ? (
            <MobileIcon onClick={goBack}>
              <FaArrowLeft />
            </MobileIcon>
          ) : (
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
          )}
          <h3>{bookName && bookPage ? bookName : title}</h3>

          <MobileIcon>
            <FaSearch />
          </MobileIcon>

          <NavMenu>
            {loggedIn ? (
              <>
                <li>
                  <DownloadLink to="/">Home</DownloadLink>
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
  bookPage: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
};

export default MobileNavbar;
