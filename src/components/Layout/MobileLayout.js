
import { useState } from 'react';
import MobileNavbar from './Navbar/MobileNavbar';
// import Flash from '../Flash';
import Sidebar from './Sidebar';
// import Footer from '../components/Footer';
import { MainContainer } from '../Styles.styled';

const MobileLayout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen((isOpen) => !isOpen);

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <MainContainer sidebarIsOpen={isOpen}>
        <MobileNavbar sidebarIsOpen={isOpen} toggle={toggle} />
        {children}
      </MainContainer>
    </>
  );
};

export default MobileLayout;
