import AddBookForm from '../Books/AddBookForm';
import MobileLayout from '../Layout/MobileLayout';
import { MobileContainer } from '../Styles.styled';

const Dashboard = () => (
  <MobileLayout title="Dashboard">
    <MobileContainer>
      <div className="wrapper">
        <header>
          <h1>Add a Book</h1>
          <p>Ready to share your favorite book with the world?</p>
        </header>
        <AddBookForm />
      </div>
    </MobileContainer>
  </MobileLayout>
);

export default Dashboard;
