import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import logo from '../../../assets/logo.jpeg';
import { Container, Logo } from './Footer.styled';

const Footer = () => (
  <Container>
    <Logo to="/">
      <img src={logo} alt="Company brand logo" width="100" />
      Books
    </Logo>

    <address>
      Obafemi Awolowo Way 156, Ikeja, LA, Nigeria
      <br />
      35 St ANdrew&apos;s St, Cambridge CB2 3AR, Grat Britain
      <br />
      + 234 8168 090 727
    </address>

    <ul>
      <li>
        <FaFacebook />
      </li>
      <li>
        <FaTwitter />
      </li>
      <li>
        <FaInstagram />
      </li>
    </ul>

    <p>FavBooks 2020, All rights reserved</p>
  </Container>
);

export default Footer;
