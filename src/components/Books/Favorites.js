import UserFavorites from './UserFavorites';
import MobileLayout from '../Layout/MobileLayout';
import { MobileContainer } from '../Styles.styled';

const Books = () => (
  <MobileLayout title="My favorites" bookPage={false}>
    <MobileContainer>
      <UserFavorites />
    </MobileContainer>
  </MobileLayout>
);

export default Books;
