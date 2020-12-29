
import { useState } from 'react';
import MobileNavbar from '../components/Navbar/MobileNavbar';
import Flash from '../components/Flash';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import { MainContainer } from '../components/MainContainer.styled';

const MobileLayout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen((isOpen) => !isOpen);

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <MainContainer sidebarIsOpen={isOpen}>
        <MobileNavbar sidebarIsOpen={isOpen} toggle={toggle} />
        {children}
        <Flash />
      </MainContainer>
    </>
  );
};

export default MobileLayout;