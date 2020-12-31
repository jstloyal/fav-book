import { useState } from 'react';
import PropTypes from 'prop-types';
import MobileNavbar from './Navbar/MobileNavbar';
import Sidebar from './Sidebar';
import { MainContainer } from '../Styles.styled';

const MobileLayout = ({ children, bookPage, title }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(isOpen => !isOpen);

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
  bookPage: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default MobileLayout;
