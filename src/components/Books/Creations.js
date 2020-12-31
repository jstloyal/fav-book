import UserBooks from './UserBooks';
import MobileLayout from '../Layout/MobileLayout';
import { MobileContainer } from '../Styles.styled';

const Books = () => (
  <MobileLayout title="My books" bookPage={false}>
    <MobileContainer>
      <UserBooks />
    </MobileContainer>
  </MobileLayout>
);

export default Books;
