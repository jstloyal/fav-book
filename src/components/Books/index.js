import AllBooks from './AllBooks';
import MobileLayout from '../Layout/MobileLayout';
import { MobileContainer } from '../Styles.styled';

const Books = () => (
  <MobileLayout title="Books" bookPage={false}>
    <MobileContainer>
      <AllBooks />
    </MobileContainer>
  </MobileLayout>
);

export default Books;
