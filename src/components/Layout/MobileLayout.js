
import { useState } from 'react';
import PropTypes from 'prop-types';
import MobileNavbar from './Navbar/MobileNavbar';
import Sidebar from './Sidebar';
import { MainContainer } from '../Styles.styled';

const MobileLayout = ({ children, bookPage, title }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen((isOpen) => !isOpen);

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <MainContainer sidebarIsOpen={isOpen}>
        <MobileNavbar
          sidebarIsOpen={isOpen}
          toggle={toggle}
          bookPage={bookPage}
          title={title}
        />
        {children}
      </MainContainer>
    </>
  );
};

MobileLayout.propTypes = {
  bookPage: PropTypes.bool,
  title: PropTypes.string,
};

export default MobileLayout;
