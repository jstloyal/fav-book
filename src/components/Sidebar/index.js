import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../features/user/userSlice';
import {
  SidebarContainer,
  SidebarMenu,
  SidebarLink,
  SidebarItem,
  SidebarLogo,
  SidebarProfile,
  SpecialLink,
  Divider,
} from './SidebarElements';
import logo from '../../assets/logo.jpeg';

const Sidebar = () => {
  const loggedIn = useSelector(state => state.user.loggedIn);
  const user = useSelector((state) => state.user.user);

  const dispatch = useDispatch();
  const handleLogout = e => {
    e.preventDefault();
    dispatch(logout());
  };

  const { name, nickname } = user;
  
  return (
    <SidebarContainer>
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
              <div>
                <SidebarLink to="/login">Notifications</SidebarLink>
                <spam>6</spam>
              </div>
            </SidebarItem>
            <SidebarItem>
              <SidebarLink to="/login">Messages</SidebarLink>
            </SidebarItem>
            <SidebarItem>
              <SidebarLink to="/sign_up">
                <SpecialLink onClick={handleLogout}>Logout</SpecialLink>
              </SidebarLink>
            </SidebarItem>
          </SidebarMenu>
        </>
      ) : (
        <SidebarMenu>
          <SidebarItem>
            <SidebarLink to="/login">Login</SidebarLink>
          </SidebarItem>
          <SidebarItem>
            <SidebarLink to="/sign_up">
              <SpecialLink>Sign up</SpecialLink>
            </SidebarLink>
          </SidebarItem>
        </SidebarMenu>
      )}
      <SidebarLogo to="/">
        <img src={logo} alt="brand logo" width="150" />
      </SidebarLogo>
    </SidebarContainer>
  );
};

export default Sidebar;
